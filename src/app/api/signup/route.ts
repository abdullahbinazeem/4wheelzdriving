import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  // Read data off req body
  const body = await request.json();
  const { email, password } = body;

  // Make sure there is an email and password
  if (!email || !password) {
    return Response.json(
      {
        error: "No Provided email or password",
      },
      { status: 400 },
    );
  }

  // Hash the password
  const hash = bcrypt.hashSync(password, 8);

  // Create a user in db
  await prisma.user.create({
    data: {
      email,
      password: hash,
    },
  });

  // return something
  return Response.json({});
}
