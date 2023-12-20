import {
  Config,
  adjectives,
  starWars,
  uniqueNamesGenerator,
} from "unique-names-generator";

const config: Config = {
  length: 2,
  dictionaries: [adjectives, starWars],
  separator: " ",
};
export function createuniqueName(): string {
  return uniqueNamesGenerator(config);
}
