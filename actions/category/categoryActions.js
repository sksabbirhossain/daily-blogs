"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

//get all category
export const allCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

//get a category
export const getCategory = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/category/${slug}`,
      {
        next: { revalidate: 3600 },
      },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// add a category
export const addCategory = async (data) => {
  "use server";
  const session = await getServerSession(authOptions);
  const formData = new FormData();
  formData.append("name", data.get("name"));
  formData.append("picture", data.get("picture"));

  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/add-category`, {
      method: "POST",
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

//update categroy
export const updateCategory = async (slug, data) => {
  "use server";
  const session = await getServerSession(authOptions);
  const formData = new FormData();
  formData.append("name", data.get("name"));
  if (data.get("picture").name !== "undefined") {
    formData.append("picture", data.get("picture"));
  }

  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/update-category/${slug}`, {
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
export const deleteCategory = async (formData) => {
  "use server";
  const session = await getServerSession(authOptions);
  const categoryId = formData.get("categoryId");

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/category/delete/${categoryId}`,
      {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${session.user?.accessToken}`,
        },
      },
    );

    revalidatePath("/admin/categories");
  } catch (err) {
    console.log(err);
  }
};
