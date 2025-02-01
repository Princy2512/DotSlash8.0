// components/Message.tsx
interface MessageProps {
    text: string;
    isUser: boolean;
  }
  
  const Message = ({ text, isUser }: MessageProps) => {
    return (
      <div className={`p-2 ${isUser ? 'bg-blue-100' : 'bg-gray-200'} rounded my-2`}>
        {text}
      </div>
    );
  };
  
  export default Message;
  