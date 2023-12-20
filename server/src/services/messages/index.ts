export type Message = {
  user: string;
  text: string;
  date: string;
};
export const messages: Map<string, Message[]> = new Map();
