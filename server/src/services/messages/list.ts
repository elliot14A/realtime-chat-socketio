import { messages } from ".";

export function list(channel: string) {
  return messages.get(channel) || [];
}
