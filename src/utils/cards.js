const suits = ['S', 'H', 'D', 'C'];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export const Deck = [];
for (const suit of suits) {
  for (const rank of ranks) {
    Deck.push(`${rank}${suit}`);
  }
}