import { rankMap } from "./cards";

// Poker hand ranking sederhana
const handRanks = {
  "High Card": 1,
  "Pair": 2,
  "Two Pair": 3,
  "Three of a Kind": 4,
  "Straight": 5,
  "Flush": 6,
  "Full House": 7,
  "Four of a Kind": 8,
  "Straight Flush": 9,
  "Royal Flush": 10,
};

function cardValue(card) {
  const rank = card.length === 3 ? "10" : card[0];
  return rankMap[rank];
}

function evaluateHand(hand) {
  const values = hand.map(cardValue).sort((a, b) => b - a);
  const suits = hand.map(c => c[c.length - 1]);
  const uniqueVals = [...new Set(values)];

  const isFlush = new Set(suits).size === 1;
  const isStraight = uniqueVals.length === hand.length && Math.max(...values) - Math.min(...values) === hand.length - 1;

  const counts = values.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
  const countsSorted = Object.values(counts).sort((a, b) => b - a);

  if (hand.length === 5) {
    if (isStraight && isFlush) {
      return [handRanks["Straight Flush"], "Straight Flush"];
    }
    if (countsSorted[0] === 4) return [handRanks["Four of a Kind"], "Four of a Kind"];
    if (countsSorted[0] === 3 && countsSorted[1] === 2) return [handRanks["Full House"], "Full House"];
    if (isFlush) return [handRanks["Flush"], "Flush"];
    if (isStraight) return [handRanks["Straight"], "Straight"];
    if (countsSorted[0] === 3) return [handRanks["Three of a Kind"], "Three of a Kind"];
    if (countsSorted[0] === 2 && countsSorted[1] === 2) return [handRanks["Two Pair"], "Two Pair"];
    if (countsSorted[0] === 2) return [handRanks["Pair"], "Pair"];
    return [handRanks["High Card"], "High Card"];
  } else {
    // khusus untuk top (3 kartu)
    if (countsSorted[0] === 3) return [handRanks["Three of a Kind"], "Three of a Kind"];
    if (countsSorted[0] === 2) return [handRanks["Pair"], "Pair"];
    return [handRanks["High Card"], "High Card"];
  }
}

// Ambil kombinasi terbaik (n kartu)
function bestHand(cards, n) {
  let best = null;
  function combinations(arr, k) {
    if (k === 0) return [[]];
    if (arr.length < k) return [];
    if (arr.length === k) return [arr];
    let [first, ...rest] = arr;
    let withFirst = combinations(rest, k - 1).map(c => [first, ...c]);
    let withoutFirst = combinations(rest, k);
    return [...withFirst, ...withoutFirst];
  }

  for (let combo of combinations(cards, n)) {
    const rank = evaluateHand(combo);
    if (!best || rank[0] > best[0][0]) {
      best = [rank, combo];
    }
  }
  return best;
}

// Fungsi utama greedy
export function greedyCapsa(cards) {
  // Step 1: bottom terbaik
  const [bottomRank, bottom] = bestHand(cards, 5);
  let remaining = cards.filter(c => !bottom.includes(c));

  // Step 2: middle terbaik
  const [middleRank, middle] = bestHand(remaining, 5);
  remaining = remaining.filter(c => !middle.includes(c));

  // Step 3: sisanya untuk top
  const top = remaining;
  const topEval = evaluateHand(top);

  const topObj = { cards: top, name: topEval[1], score: topEval[0] };
  const middleObj = { cards: middle, name: middleRank[1], score: middleRank[0] };
  const bottomObj = { cards: bottom, name: bottomRank[1], score: bottomRank[0] };

  const totalScore = topObj.score + middleObj.score + bottomObj.score;

  return {
    top: topObj,
    middle: middleObj,
    bottom: bottomObj,
    totalScore
  };
}
