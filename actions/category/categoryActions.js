"use server";

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
