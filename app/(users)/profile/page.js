import Profileform from "@/components/users/Profile/Profileform/Profileform";

const Profile = () => {
  return (
    <div class="mb-4">
      <div class="h-auto w-full rounded bg-gray-100 py-5 dark:bg-gray-800">
        <div className="flex w-full justify-center">
          <Profileform />
        </div>
      </div>
    </div>
  );
};

export default Profile;
