"use server";

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

// add a category
export const addCategory = async (data) => {
  "use server";
  const formData = new FormData();
  formData.append("name", data.get("name"));
  formData.append("picture", data.get("picture"));

  try {
    await fetch(`${process.env.BASE_URL}/add-category`, {
      method: "POST",
      body: formData,
      cache: "no-cache",
    });

    revalidatePath("/admin/all-categories");
  } catch (err) {
    console.log(err);
  }
};
