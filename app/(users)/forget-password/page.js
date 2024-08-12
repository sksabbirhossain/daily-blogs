import CheckValidEmail from "@/components/users/ForgetPassword/CheckValidEmail";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Forget Password - fastrebo Blogs",
};

const ForgetPassword = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return <CheckValidEmail />;
};

export default ForgetPassword;
