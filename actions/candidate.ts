"use server";
import { prisma } from "@/lib/prisma";
import { error } from "console";

// export const prisma = new PrismaClient();

export interface Candidate {
  fullname: string;
  category: string;
  society: string;
  bio: string;
}

export interface Response {
  status: "success" | "error" | "failed";
  statusCode: 200 | 201 | 400 | 500;
  message?: string;
  data?: any;
}

export const addCandidate = async ({
  fullname,
  category,
  bio,
  society,
}: Candidate) => {
  try {
    await prisma.candidate.create({
      data: {
        fullname,
        category,
        bio,
        society,
      },
    });
  } catch (e: any) {
    error;
  }

  const allUser = await prisma.candidate.findMany();
  console.log("candidates", allUser);
};

export const addNomination = async (
  nominee: string,
  quantity: number,
  category: string
) => {
  try {
    await prisma.Nomination.create({
      data: {
        nominee,
        quantity,
        category,
      },
    });
    console.log("added");
  } catch {
    alert("unable to add nomination");
  }
};
