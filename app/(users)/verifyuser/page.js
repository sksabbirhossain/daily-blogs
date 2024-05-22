import { VerifyUser } from "@/components/users/verifyuser/VerifyUser";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Verify user - fastrebo Blogs",
};

const verifyuser = ({ searchParams }) => {
  const { userId, verifyToken } = searchParams || {};

  if (!userId && !verifyToken) return redirect("/");

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex h-[90vh] w-full items-center justify-center">
          <div className="space-y-5 text-center">
            <h2 className="text-xl font-medium capitalize">
              For Verify your account please{" "}
            </h2>
            <div>
              <VerifyUser userId={userId} verifyToken={verifyToken} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verifyuser;
