"use client";
import Button from "@/components/common/Button/Button";
import { BASE_URL } from "@/utils/baseUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const VerifyUser = ({ userId, verifyToken }) => {
  const router = useRouter();
  //verify user
  const verifyUser = async () => {
    try {
      const verify = await fetch(
        `${BASE_URL}/user/verify/${userId}/${verifyToken}`,
      );
      const res = await verify.json();
      if (res?.status === 200) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.success(res?.message);
      }
    } catch (err) {
      toast.success("something wrong please Try to login again!");
    }
  };

  return (
    <Button>
      <span onClick={() => verifyUser()}>Click Me</span>
    </Button>
  );
};
