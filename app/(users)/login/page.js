import LoginComponent from "@/components/users/Login/LoginComponent";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login - Daily blogs",
};

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <LoginComponent />;
};

export default LoginPage;
