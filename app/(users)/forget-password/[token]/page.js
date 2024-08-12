import UpdatePassword from "@/components/users/ForgetPassword/UpdatePassword";

export const metadata = {
  title: "Change Password - fastrebo Blogs",
};

const ChangePassword = ({ params, searchParams }) => {
  return <UpdatePassword params={params} searchParams={searchParams} />;
};

export default ChangePassword;
