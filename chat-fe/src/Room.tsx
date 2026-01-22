import Canvas from "./component/Canvas";
import ChatRoom from "./component/ChatRoom";

const Room = () => {
  return (
    <div className='flex flex-1 overflow-hidden'>
       <div className='flex-1 flex items-center justify-center p-4 bg-gray-900'>
        <Canvas />
      </div>
        
        <div className='w-96'>
          <ChatRoom />
        </div>
      </div>
  );
};

export default Room;