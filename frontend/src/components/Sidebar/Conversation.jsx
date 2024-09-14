const Conversation = () => {
  return (
    <>
      <div className=" flex gap-2 items-center hover:bg-orange-500/50 rounded p-2 py-2 cursor-pointer">
        <div className=" avatar online">
          <div className=" w-12 rounded-full">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 justify-between">
            <p className=" font-bold text-gray-200">JohnDoe</p>
            <span className=" text-xl">🎆</span>
          </div>
        </div>
      </div>

      <div className="divider after:bg-slate-300/20 before:bg-slate-300/20 my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
