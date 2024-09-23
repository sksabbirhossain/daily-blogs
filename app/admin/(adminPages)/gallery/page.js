"use client";

import { authOptions } from "@/utils/authOptions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyMessage, setCopyMessage] = useState(false);

  const { data } = useSession(authOptions);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [images]);

  // copy clipboard
  const copyClipBoard = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopyMessage(true);
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        setTimeout(() => {
          setCopyMessage(false);
        }, 2000);
      });
  };

  //delete picture
  const deletePicture = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/gallery/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${data?.user?.accessToken}`,
          },
          method: "DELETE",
        },
      );
      await res.json();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };

  return (
    <section className="mb-5 space-y-5">
      <div className="rounded bg-gray-100 px-3 py-2 text-lg font-medium shadow">
        Gallery
      </div>
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {images?.map((image, i) => (
          <div
            className={`group relative h-full w-full overflow-hidden rounded border border-black/20 ${i % 5 === 1 ? "sm:col-span-2 " : ""}  ${i % 5 === 0 ? "sm:row-span-2" : ""}`}
            key={i}
          >
            <Image
              src={image.picture}
              width={500}
              height={500}
              alt="Picture of the author"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 flex h-full w-full cursor-pointer items-center justify-center gap-2 opacity-0 transition-all duration-700 ease-in-out group-hover:bg-black/50 group-hover:opacity-100">
              <div className="relative">
                <div className="absolute -top-6 right-0 w-full gap-1 whitespace-nowrap text-xs capitalize">
                  <p className="inline-flex items-center gap-1 text-white transition-all duration-150 ease-in-out">
                    {copyMessage && (
                      <>
                        <span> link copied</span>
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#00AAA1]">
                          &#10003;
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <button
                  className="rounded bg-green-600 px-3 py-1 font-medium capitalize text-white hover:bg-green-700"
                  onClick={() => copyClipBoard(image?.picture)}
                >
                  <span>
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
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <button
                className="rounded bg-red-500 px-3 py-1 font-medium capitalize text-white hover:bg-red-600 disabled:cursor-wait"
                onClick={() => deletePicture(image?._id)}
                disabled={loading}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
