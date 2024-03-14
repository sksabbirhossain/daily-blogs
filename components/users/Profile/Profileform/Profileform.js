"use client";
import { BASE_URL } from "@/utils/baseUrl";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfileForm = () => {
  const { data: session, update } = useSession();
  const { user } = session || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState(null);
  const [newPicture, setNewPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Set user info
  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPicture(user?.picture || null);
  }, [user]);

  //handle onChange profile picture
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
      setNewPicture(file);
    }
  };

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //make form data object
    const formData = new FormData();
    formData.append("name", name);
    if (newPicture) {
      formData.append("picture", newPicture);
    }

    //send request
    const reqFun = async () => {
      try {
        const res = await fetch(`${BASE_URL}/user/update`, {
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${session.user?.accessToken}`,
          },
        });
        const data = await res.json();
        if (data?._id) {
          router.refresh();
          toast.success(
            "Update successfully! Logout and Login for better experience",
          );
          await update({
            ...session,
            user: {
              ...data,
            },
          });
          setLoading(false);
        } else {
          toast.error("Intranal server error!!");
          setLoading(false);
        }
      } catch (err) {
        toast.error(err.message);
        setLoading(false);
      }
    };
    reqFun();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex h-auto w-full justify-center rounded-md p-5 shadow-md"
      >
        <div className="space-y-5">
          <div className="flex justify-center pb-3">
            <label htmlFor="picture">
              <div className="group relative h-full w-full overflow-hidden rounded-full ring-2 ring-[#00AAA1]">
                <Image
                  src={picture ? picture : "/default.jpg"}
                  width={100}
                  height={100}
                  alt="profile"
                  className="h-20 w-20 cursor-pointer select-none rounded-full object-cover"
                />
                <p className="absolute bottom-0 hidden h-8 w-full cursor-pointer items-center justify-center  bg-gray-500/90 group-hover:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </p>
              </div>
            </label>
            <input
              type="file"
              name="picture"
              id="picture"
              className="hidden"
              onChange={handlePictureChange}
            />
          </div>

          <div className="space-y-3">
            <div className="">
              <label
                htmlFor=""
                className="text-base font-medium text-[#555] dark:text-gray-300"
              >
                Name
              </label>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name Here..."
              className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <div className="">
              <label
                htmlFor=""
                className="text-base font-medium text-[#555] dark:text-gray-300"
              >
                Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              className="w-full rounded border border-[#00AAA1] px-1 py-2 focus:outline-1 focus:outline-[#00AAA1] dark:bg-slate-800 dark:text-gray-100"
              disabled
              required
              value={email}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded border border-[#00AAA1] bg-white py-2 font-medium duration-150 ease-in hover:bg-[#00AAA1] hover:text-white disabled:cursor-wait disabled:border-gray-500/65 disabled:bg-gray-500/65 disabled:text-gray-200 dark:bg-[#00AAA1] dark:text-gray-100 dark:hover:bg-[#329792]"
            >
              {loading ? (
                <p className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </p>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
