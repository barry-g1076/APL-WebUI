// import useTypingEffect from "../hooks/typing-effect";

const Terminal = ({ items }) => {
  return (
    <div className="bg-slate-800 w-full h-96 overflow-hidden">
      <div className="flex-none border-b border-slate-500/30 bg-white">
        <div className="flex items-center h-8 space-x-1.5 px-3">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
        </div>
      </div>
      <div className="ml-2">
        <div className="prompt">
          {items.map((item, index) => (
            <p key={index}>$ {item}</p>
          ))}
          <div className="cursor-blink">|</div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
