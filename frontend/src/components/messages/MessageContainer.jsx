/* eslint-disable no-unused-vars */
import React from 'react';
import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <>
      <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            {/* header */}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
              <span className='label-text'>To : </span>
              <span className='text-gray-900 font-bold'>John Doe</span>
            </div>
            {/* messages */}
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </>
  );
};

const NoChatSelected = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <p className='text-white px-5'>Select a chat to start messaging</p>
      <TiMessages className='text-3xl md:text-6xl text-center text-white' />
    </div>
  );
};

export default MessageContainer;
