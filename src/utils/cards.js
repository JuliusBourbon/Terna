const suits = ['S', 'H', 'D', 'C'];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export const Deck = [];
for (const suit of suits) {
  for (const rank of ranks) {
    Deck.push(`${rank}${suit}`);
  }
}

export const rankMap = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};