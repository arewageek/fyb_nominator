"use server";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { stringify } from "querystring";

// export const prisma = new PrismaClient();

export interface Candidate {
  fullname: string;
  category: string;
  society: string;
  bio: string;
  num: string;
}

export interface Response {
  status: "success" | "error" | "failed";
  statusCode: 200 | 201 | 400 | 500;
  message?: string;
  data?: any;
}

// export const addCandidate = async ({
//   fullname,
//   category,
//   bio,
//   society,
// }: Candidate) => {
//   try {
//     await prisma.candidate.create({
//       data: {
//         fullname,
//         category,
//         bio,
//         society,
//       },
//     });
//   } catch (e: any) {
//     error;
//   }

//   const allUser = await prisma.candidate.findMany();
//   console.log("candidates", allUser);
// };

export const addNomination = async (
  nominee: string,
  category: string,
  quantity: string
) => {
  try {
    await prisma.nomination.create({
      data: {
        nominee,
        category,
        quantity,
      },
    });
    console.log("added");
  } catch (e: any) {
    console.log(e.message);
  }
};
// export const async allNominations = await prisma.nomination.findMany();
