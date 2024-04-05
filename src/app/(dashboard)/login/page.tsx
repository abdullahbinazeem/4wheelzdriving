import Container from "@/components/container";
import LoginPage from "./loginPage";

const page = () => {
  return (
    <Container className=" mt-[40vh] translate-y-[-40%]">
      <h1 className="mb-20 ml-[50%] inline-block translate-x-[-50%] rounded-xl border border-gray-300 bg-gray-100 p-6 text-2xl font-bold">
        Login for 4WHEELZ DRIVING DASHBOARD:
      </h1>
      <LoginPage />
    </Container>
  );
};

export default page;
