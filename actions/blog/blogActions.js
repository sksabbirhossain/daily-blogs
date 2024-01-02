"use server";

import { revalidatePath } from "next/cache";

//add a blog
export const addBlog = async (data) => {
  "use server";
  const formData = new FormData();
  formData.append("title", data.get("title"));
  formData.append("description", data.get("description"));
  formData.append("category", data.get("category"));
  formData.append("picture", data.get("picture"));

  try {
    await fetch(`${process.env.BASE_URL}/add-blog`, {
      method: "POST",
      body: formData,
      cache: "no-cache",
    });

    revalidatePath("/admin/all-blogs");
  } catch (err) {
    console.log(err);
  }
};
