"use server";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

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
  const session = await getServerSession(authOptions);
  const formData = new FormData();
  formData.append("title", data.get("title"));
  formData.append("metaTitle", data.get("metaTitle"));
  formData.append("description", data.get("description"));
  formData.append("details", data.get("details"));
  formData.append("category", data.get("category"));
  formData.append("picture", data.get("picture"));

  try {
    const res = await fetch(`${process.env.BASE_URL}/add-blog`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });
    revalidatePath("/admin/all-blogs");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

//update a blog
export const updateBlog = async (slug, data) => {
  "use server";
  const session = await getServerSession(authOptions);
  const formData = new FormData();
  formData.append("title", data.get("title"));
  formData.append("metaTitle", data.get("metaTitle"));
  formData.append("description", data.get("description"));
  formData.append("details", data.get("details"));
  formData.append("category", data.get("category"));
  if (data.get("picture").name !== "undefined") {
    formData.append("picture", data.get("picture"));
  }

  try {
    await fetch(`${process.env.BASE_URL}/blog/update-blog/${slug}`, {
      method: "PATCH",
      body: formData,
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });

    revalidatePath("/admin/all-blogs");
  } catch (err) {
    console.log(err);
  }
};

//featured a blog
export const featuredBlog = async (formData) => {
  "use server";
  const session = await getServerSession(authOptions);
  const blogId = formData.get("blogId");
  const featuredData = formData.get("featured");

  const data = {
    featured: !(featuredData === "true"),
  };

  try {
    await fetch(`${process.env.BASE_URL}/blog/featured-blog/${blogId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });

    revalidatePath("/admin/all-blogs");
  } catch (err) {
    console.log(err);
  }
};

//delete a blog
export const deleteBlog = async (formData) => {
  "use server";
  const session = await getServerSession(authOptions);
  const blogId = formData.get("blogId");

  try {
    await fetch(`${process.env.BASE_URL}/blog/delete-blog/${blogId}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    });

    revalidatePath("/admin/all-blogs");
  } catch (err) {
    console.log(err);
  }
};
