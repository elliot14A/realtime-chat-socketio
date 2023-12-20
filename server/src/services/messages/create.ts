import { messages } from ".";

export function create(user: string, text: string, channel: string) {
  const channelMessages = messages.get(channel) || [];
  messages.set(
    channel,
    channelMessages.concat({ user, text, date: new Date().toISOString() }),
  );
}
