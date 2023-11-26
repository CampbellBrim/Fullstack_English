import prisma from "../../../../prisma/db";
import {NextResponse, NextRequest} from "next/server";
import {revalidatePath} from "next/cache";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({users});
}

export async function POST(req: NextRequest) {
  try {
    const {userName, email} = await req.json();

    const user = await prisma.user.create({
      data: {
        userName: userName,
        email: email,
      },
    });
    revalidatePath("/users", "layout");
    return NextResponse.json({user});
  } catch (error) {
    console.error(error);
  }
}
