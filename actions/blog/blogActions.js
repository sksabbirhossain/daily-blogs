"use server";
import { revalidatePath } from "next/cache";

// get all blogs
export const allBlogs = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// get a blog
export const getBlog = async (slug) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${slug}`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// get a blog
export const getFeaturedBlogs = async (slug) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blog/featured-blogs`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

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
