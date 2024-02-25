import User from "@/models/user";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, email, password } = (await req.json()) as {
      username: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await User.create({
      
        username,
        email: email.toLowerCase(),
        password: hashed_password,
      
    });

    return NextResponse.json({
      user: {
        name: user.username,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
