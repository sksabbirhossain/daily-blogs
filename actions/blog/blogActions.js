"use server";
import { revalidatePath } from "next/cache";

// get all blogs
export const allBlogs = async (page) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/blogs?page=${page}&limit=${process.env.BLOG_PAR_PAGE}`,
      { next: { revalidate: 3600 } },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
// get all blogs without limit
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// get a blog
export const getBlog = async (slug) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blogs/${slug}`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// get related blogs
export const getRelatedBlogs = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/blogs/related-blogs/${slug}`,
      { next: { revalidate: 3600 } },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
// get blogs by category slug
export const getBlogsByCategory = async (slug, page) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/blogs/category/${slug}?page=${page}&limit=${process.env.BLOG_PAR_PAGE}`,
      { next: { revalidate: 3600 } },
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// get featured blog
export const getFeaturedBlogs = async (slug) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/blog/featured-blogs`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

//search blogs
export const searchBlogs = async (page, searchQuery) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/blogs/search?q=${searchQuery}&page=${page}&limit=${process.env.BLOG_PAR_PAGE}`,
      { next: { revalidate: 3600 } },
    );
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
  formData.append("details", data.get("details"));
  formData.append("category", data.get("category"));
  formData.append("picture", data.get("picture"));

  try {
    await fetch(`${process.env.BASE_URL}/add-blog`, {
      method: "POST",
      body: formData,
    });

    revalidatePath("/admin/all-blogs");
  } catch (err) {
    console.log(err);
  }
};
