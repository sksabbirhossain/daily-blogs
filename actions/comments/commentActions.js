"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

//get comments by blogId
export const getComments = async (blogId, page) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/comments?blogId=${blogId}&page=${page}&limit=${"5"}`,
      {
        cache: "no-cache",
      },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// add a comments
export const addComment = async (data) => {
  const session = await getServerSession(authOptions);
  try {
    const res = await fetch(`${process.env.BASE_URL}/add-comment`, {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

//update comments
export const updateComment = async (slug, data) => {
  "use server";
  const session = await getServerSession(authOptions);
  const formData = new FormData();
  formData.append("name", data.get("name"));
  if (data.get("picture").name !== "undefined") {
    formData.append("picture", data.get("picture"));
  }

  try {
    await fetch(`${process.env.BASE_URL}/update-category/${slug}`, {
      method: "PATCH",
      body: formData,
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });

    revalidatePath("/admin/categories");
  } catch (err) {
    console.log(err);
  }
};

//delete a comments
export const deleteComment = async (formData) => {
  "use server";
  const session = await getServerSession(authOptions);
  const categoryId = formData.get("categoryId");

  try {
    await fetch(`${process.env.BASE_URL}/category/delete/${categoryId}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });

    revalidatePath("/admin/categories");
  } catch (err) {
    console.log(err);
  }
};
