"use server";

export const createUser = async (formData) => {
  "use server";
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await fetch(`${process.env.BASE_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (formData) => {
  "use server";
  try {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await fetch(`${process.env.BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
