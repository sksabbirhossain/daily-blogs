import ProfileSidebarOpenButton from "@/components/users/Profile/ProfileSidebarOpenButton";
import Sidebar from "@/components/users/Profile/Sidebar/Sidebar";

const ProfileLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-2 py-5 sm:px-0">
      <div className="mb-5 block rounded-md bg-slate-800 py-2 sm:hidden">
        <ProfileSidebarOpenButton />
      </div>
      <div className="flex w-full sm:gap-5">
        <Sidebar />
        <div class="h-auto w-full">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
