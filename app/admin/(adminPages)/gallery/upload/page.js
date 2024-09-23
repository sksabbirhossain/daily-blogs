"use client";

import { authOptions } from "@/utils/authOptions";
import { useSession } from "next-auth/react";
import { useState } from "react";

const GalleryUpload = () => {
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);

  const { data } = useSession(authOptions);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setPicture(URL.createObjectURL(file));
      setPicture(file);
      // setNewPicture(file);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      if (picture) {
        formData.append("picture", picture);
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/upload`,
        {
          headers: {
            Authorization: `Bearer ${data?.user?.accessToken}`,
          },
          method: "POST",
          body: formData,
        },
      );
      const result = await res.json();
      if (result?._id) {
        alert("upload sucessfull");
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };

  return (
    <section className="mb-5 space-y-5">
      <div className="rounded bg-gray-100 px-3 py-2 text-lg font-medium capitalize shadow">
        upload image
      </div>
      <div className="max-h-[75vh] w-full rounded bg-gray-100">
        <form onSubmit={handleSubmit} className="h-full w-full">
          <div className="flex h-[60vh] w-full flex-col items-center justify-center">
            <label
              htmlFor="picture"
              className="flex h-full w-full flex-col items-center justify-center gap-y-5"
            >
              <p className="rounded-full p-3 ring-2 ring-[#0badb3]">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </p>
              <p className="text-base font-normal capitalize text-gray-700">
                click here to upload
              </p>
            </label>
            <input
              type="file"
              id="picture"
              className="hidden"
              onChange={handlePictureChange}
            />
          </div>
          <div className="flex justify-center pb-5">
            <button
              type="submit"
              disabled={picture === null}
              className="z-10 rounded bg-[#22a0a0] px-5 py-2 capitalize text-white disabled:cursor-not-allowed"
            >
              {loading ? "..." : " upload"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GalleryUpload;
