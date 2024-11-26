import React from 'react';

interface ToggleProps {
    index: number;
    setIndex: (index: number) => void;
};

const Toggle: React.FC<ToggleProps> = ({ index, setIndex }: ToggleProps) => {
  return (
    <div
      className={`toggle transition-colors cursor-pointer ${
        index === 2 ? 'bg-slate-800' : 'bg-yellow-300'
      }`}
      onClick={() => setIndex(index === 1 ? 2 : 1)}
    >
      <div
        className={`bg-transparent w-4 h-4 rounded-full shadow-md transform duration-300 transition-all ${
          index === 2 ? 'translate-x-6' : ''
        }`}
      >
        {index === 2 ? (
          <svg className="fill-violet-500 block" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg className="fill-yellow-500 block" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Toggle;