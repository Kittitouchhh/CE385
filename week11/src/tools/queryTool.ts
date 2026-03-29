import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
import { z } from "zod";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient();

// Schema validation ด้วย zod
const QueryInputSchema = z.object({
  model: z.enum(["User", "Order"]), // จำกัดเฉพาะ model ที่อนุญาต
  action: z.enum(["findMany", "findFirst", "findUnique", "count"]), // จำกัด action
  args: z.record(z.unknown()).optional().default({}),
});

export type QueryInput = z.infer<typeof QueryInputSchema>; // TypeScript type สำหรับ input

export async function runQuery(input: unknown) {
  // 1. Validate input
  const { model, action, args } = QueryInputSchema.parse(input);

  // 2. เลือก Prisma model
  const prismaModel = prisma[model.toLowerCase() as keyof typeof prisma] as any;

  if (!prismaModel || typeof prismaModel[action] !== "function") {
    throw new Error(`Invalid model or action: ${model}.${action}`);
  }

  // 3. Run query
  const result = await prismaModel[action](args);
  return result;
}