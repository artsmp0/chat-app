import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-2">
          <span className="label-text font-bold">To</span> <span className="text-gray-900 font-bold">John doe111</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  );
};
export default MessageContainer;
