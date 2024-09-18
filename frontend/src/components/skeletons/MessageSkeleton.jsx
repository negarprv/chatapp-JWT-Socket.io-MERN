const MessageSkeleton = () => {
  return (
    <>
      <div className=" flex gap-3 items-center">
        <div className=" skeleton w-10 h-10 rounded-full shrink-0  bg-slate-300/20"></div>
        <div className=" flex flex-col gap-1">
          <div className=" skeleton h-4 w-40 bg-orange-500/50"></div>
          <div className=" skeleton h-4 w-40 bg-orange-500/50"></div>
        </div>
      </div>
      <div className=" flex gap-3 items-center justify-end">
        <div className=" flex flex-col gap-1">
          <div className=" skeleton h-4 w-40 bg-orange-500/50"></div>
        </div>
        <div className=" skeleton w-10 h-10 rounded-full shrink-0 bg-slate-300/20"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
