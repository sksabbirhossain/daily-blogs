"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

//get all users
export const getAllUser = async (page) => {
  "use server";
  const session = await getServerSession(authOptions);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users?page=${page}&limit=${process.env.BLOG_PAR_PAGE}`,
      {
        next: { revalidate: 3600 },
        headers: {
          Authorization: `Bearer ${session.user?.accessToken}`,
        },
      },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
