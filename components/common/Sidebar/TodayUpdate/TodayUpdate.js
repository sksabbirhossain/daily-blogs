const TodayUpdate = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#222]">
        <span className="pr-2 uppercase text-[#00AAA1]">Today’s</span>
        Update
      </h2>
      <div className="space-y-4">
        <div className="flex gap-5 ">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-[#F2F8F7] py-5">
            <div className="space-y-1 text-center">
              <h3 className="text-3xl font-bold text-[#00AAA1]">12</h3>
              <p className="text-sm font-medium">New Posts</p>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-[#F2F8F7] py-5">
            <div className="space-y-1 text-center">
              <h3 className="text-3xl font-bold text-[#00AAA1]">1192</h3>
              <p className="text-sm font-medium">total visitors</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-[#F2F8F7] py-5">
            <div className="space-y-1 text-center">
              <h3 className="text-3xl font-bold text-[#00AAA1]">112</h3>
              <p className="text-sm font-medium">New subscribers</p>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-[#F2F8F7] py-5">
            <div className="space-y-1 text-center">
              <h3 className="text-3xl font-bold text-[#00AAA1]">112</h3>
              <p className="text-sm font-medium">blog read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayUpdate;
