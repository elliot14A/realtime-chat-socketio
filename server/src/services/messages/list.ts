import prisma from "../../utils/database";
export async function list(channel: string) {
  const messages = await prisma.message.findMany({ where: { channel } });
  return messages;
}
