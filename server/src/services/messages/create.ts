import prisma from "../../utils/database";
export async function create(user: string, text: string, channel: string) {
  const message = await prisma.message.create({
    data: {
      user,
      text,
      date: new Date().toISOString(),
      channel,
    },
  });
  return message;
}
