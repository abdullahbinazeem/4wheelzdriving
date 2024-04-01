"use client";

import { useFormState, useFormStatus } from "react-dom";
import loginForm from "./loginForm";
import Container from "@/components/container";
import { Loader2Icon } from "lucide-react";

export function SubmitButton() {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending}
      type="submit"
      className="flex w-full items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
    >
      Submit
      {status.pending && <Loader2Icon className="animate-spin" />}
    </button>
  );
}

const page = () => {
  const [error, formAction] = useFormState(loginForm, undefined);

  return (
    <Container className=" mt-[40vh] translate-y-[-40%]">
      <h1 className="mb-20 ml-[50%] inline-block translate-x-[-50%] rounded-xl border border-gray-300 bg-gray-100 p-6 text-2xl font-bold">
        Login for 4WHEELZ DRIVING DASHBOARD:
      </h1>
      <form className="mx-auto h-full max-w-sm " action={formAction}>
        <div className="mb-5 ">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="4wheelz@driving.ca"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            placeholder="1234567890"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>
        <label className="mb-2 block text-sm font-medium text-red-400 dark:text-white">
          {error && error}
        </label>
        <SubmitButton />
      </form>
    </Container>
  );
};

export default page;
