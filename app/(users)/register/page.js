import RegisterComponent from "@/components/users/Register/RegisterComponent";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Register Accout - Fastribo Blogs",
};

const Register = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <RegisterComponent />;
};

export default Register;
