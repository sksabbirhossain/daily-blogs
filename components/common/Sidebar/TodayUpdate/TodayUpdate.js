const TodayUpdate = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl text-[#222] font-semibold">
        <span className="text-[#00AAA1] pr-2 uppercase">Today’s</span>
        Update
      </h2>
      <div className="space-y-4">
        <div className="flex gap-5 ">
          <div className="bg-[#F2F8F7] w-full h-full rounded-md flex items-center justify-center py-5">
            <div className="text-center space-y-1">
              <h3 className="text-3xl font-bold text-[#00AAA1]">12</h3>
              <p className="text-sm font-medium">New Posts</p>
            </div>
          </div>
          <div className="bg-[#F2F8F7] w-full h-full rounded-md flex items-center justify-center py-5">
            <div className="text-center space-y-1">
              <h3 className="text-3xl font-bold text-[#00AAA1]">1192</h3>
              <p className="text-sm font-medium">total visitors</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#F2F8F7] w-full h-full rounded-md flex items-center justify-center py-5">
            <div className="text-center space-y-1">
              <h3 className="text-3xl font-bold text-[#00AAA1]">112</h3>
              <p className="text-sm font-medium">New subscribers</p>
            </div>
          </div>
          <div className="bg-[#F2F8F7] w-full h-full rounded-md flex items-center justify-center py-5">
            <div className="text-center space-y-1">
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
