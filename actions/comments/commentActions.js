"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

//get all category
export const allCategory = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/categories`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

//get a category
export const getComments = async (blogId) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/comments/${blogId}`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// add a category
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

//update categroy
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

//delete a category
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
