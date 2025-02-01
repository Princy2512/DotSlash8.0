import pandas as pd
import numpy as np
from transformers import (
    AutoTokenizer, 
    BertForSequenceClassification,
    DistilBertForSequenceClassification,
    AutoModelForSequenceClassification
)
from sentence_transformers import SentenceTransformer
import torch
import faiss

class MedicalRAGChatbot:
    def __init__(self, chunk_size=512):
        self.chunk_size = chunk_size
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        self.models = {
            'biobert': ('dmis-lab/biobert-base-cased-v1.1', BertForSequenceClassification),
            'clinicalbert': ('emilyalsentzer/Bio_ClinicalBERT', BertForSequenceClassification),
            'scibert': ('allenai/scibert_scivocab_uncased', BertForSequenceClassification),
            'distilbert': ('distilbert-base-uncased', DistilBertForSequenceClassification),
            'bloom': ('bigscience/bloom', AutoModelForSequenceClassification),  # Added Bloom model
        }
        self.setup_models()
        
    def setup_models(self):
        self.tokenizers = {}
        self.model_instances = {}
        for name, (model_path, model_class) in self.models.items():
            self.tokenizers[name] = AutoTokenizer.from_pretrained(model_path)
            self.model_instances[name] = model_class.from_pretrained(
                model_path,
                num_labels=2  # Binary classification for medical queries
            )

    def get_context(self, query: str) -> list:
        # Dummy implementation - replace with actual logic
        return ["Context 1", "Context 2", "Context 3"]

    def process_query(self, query: str, context: list):
        # Convert context list to a single string
        context_text = " ".join(context)

        results = {}
        for name in self.models:
            tokenizer = self.tokenizers[name]
            model = self.model_instances[name]

            inputs = tokenizer(
                query,
                context_text,
                return_tensors="pt",
                max_length=512,
                truncation=True,
                padding=True
            )

            with torch.no_grad():
                outputs = model(**inputs)
                logits = outputs.logits
                confidence = torch.nn.functional.softmax(logits, dim=-1).max().item()  # Extract confidence
                answer = "Positive" if torch.argmax(logits).item() == 1 else "Negative"

            results[name] = {
                "answer": answer,
                "confidence": confidence
            }
        
        return results

def main():
    try:
        df = pd.read_csv('DiseaseAndSymptom.csv')
        chatbot = MedicalRAGChatbot()
        print("Models initialized successfully")
        return chatbot
    except Exception as e:
        print(f"Error initializing: {e}")
        return None

if __name__ == "__main__":
    main()

