import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import * as jose from "jose";

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

  // Lookup the user
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return Response.json(
      {
        error: "Invalid email or password",
      },
      { status: 400 },
    );
  }

  // Compare password
  const isCorrectPassword = bcrypt.compareSync(password, user.password);

  if (!isCorrectPassword) {
    return Response.json(
      {
        error: "Invalid email or password",
      },
      { status: 400 },
    );
  }

  // Create jwt token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id.toString())
    .sign(secret);

  // Respond with it
  return Response.json({ token: jwt });
}
