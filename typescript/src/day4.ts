export function day4part1(data: string) {
    const lines = data.trim().split('\n');
    let total = 0;
    for (const line of lines) {
        const [_, winners_str, numbers_str] = line.split(/: | \| /);
        const winners = winners_str.split(/\s+/);
        const numbers = numbers_str.split(/\s+/);
        let points = 0;
        for (const n of numbers) {
            if (winners.includes(n)) {
                if (points === 0) {
                    points = 1;
                } else {
                    points *= 2;
                }
            }
        }
        total += points;
    }
    return total;
}

interface CardCopies {
    [card: string]: number;
}

// Memoize the card copies
const card_copies: CardCopies = {};

function processLine(card: string, line: string): number {
    let num_copies = 0;
    const [_, winners_str, numbers_str] = line.split(/:\s+|\s+\|\s+/);
    const winners = winners_str.split(/\s+/);
    const numbers = numbers_str.split(/\s+/);
    for (const n of numbers) {
        if (winners.includes(n)) {
            num_copies += 1;
        }
    }
    card_copies[card] = num_copies;
    return num_copies;
}

interface CardCounts {
    [key: string]: number;
}

function processLines(
    lines: string[],
    num_copies = lines.length,
    current_index = 0,
    cards_counts: CardCounts = {}
): CardCounts {
    const from = current_index;
    const to = num_copies + current_index;
    for (let i = from; i < to; i++) {
        const line = lines.at(i);
        if (!line) {
            continue;
        }
        const [card] = line.split(':');
        // count the card
        cards_counts[card] =
            cards_counts[card] === undefined ? 1 : cards_counts[card] + 1;
        const new_num_copies =
            card_copies[card] !== undefined
                ? card_copies[card]
                : processLine(card, line);

        current_index++;
        cards_counts = processLines(
            lines,
            new_num_copies,
            current_index,
            cards_counts
        );
    }
    return cards_counts;
}

export function day4part2(data: string) {
    const lines = data.trim().split('\n');
    const card_counts = processLines(lines);
    let total = 0;
    for (const card in card_counts) {
        total += card_counts[card];
    }
    return total;
}
