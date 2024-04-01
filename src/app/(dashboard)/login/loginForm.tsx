"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginForm(
  prevState: any,
  formData: FormData,
): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");

  //  Send to our api route
  const response = await axios
    .post("http://localhost:3000//api/login", {
      email,
      password,
    })
    .then((response) => {
      const json = response.data;

      cookies().set("Authorization", json.token, {
        secure: true,
        httpOnly: true,
        expires: Date.now() + 24 * 60 * 60 * 1000 * 3, //3 Days
        path: "/",
        sameSite: "strict",
      });

      return null;
    })
    .catch((error: any) => {
      return error.response?.data.error;
    });

  if (response) {
    return response;
  } else {
    redirect("/dashboard");
  }
}
