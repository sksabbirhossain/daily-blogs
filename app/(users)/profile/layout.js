import Sidebar from "@/components/users/Profile/Sidebar/Sidebar";

const ProfileLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-2 py-5 sm:px-0">
      <div className="grid w-full grid-cols-12 gap-5">
        <Sidebar />
        <div class="col-span-12 w-full sm:col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
