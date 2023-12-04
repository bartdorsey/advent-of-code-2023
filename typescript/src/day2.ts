export function day2part1(data: string) {
    let sum = 0;
    const num_red = 12;
    const num_green = 13;
    const num_blue = 14;
    const lines = data.trim().split('\n');
    line: for (const line of lines) {
        const [game, result] = line.split(': ');
        const id = parseInt(game.split(' ')[1]);
        const sets = result.split('; ');
        for (const set of sets) {
            const draws = set.split(', ');
            for (const draw of draws) {
                const pieces = draw.split(' ');
                const num = parseInt(pieces[0]);
                const color = pieces[1];
                if (
                    (color === 'red' && num > num_red) ||
                    (color === 'blue' && num > num_blue) ||
                    (color === 'green' && num > num_green)
                ) {
                    // Wow I actually used a label
                    continue line;
                }
            }
        }
        sum += id;
    }
    return sum;
}

export function day2part2(data: string) {
    let sum = 0;
    const lines = data.trim().split('\n');
    for (const line of lines) {
        const [_, ...results] = line.split(/: |; |, /);
        let high_blue = 0;
        let high_red = 0;
        let high_green = 0;
        for (const result of results) {
            const parts = result.split(' ');
            const num = parseInt(parts[0]);
            const color = parts[1];

            switch (color) {
                case 'blue':
                    if (num > high_blue) {
                        high_blue = num;
                    }
                    break;
                case 'red':
                    if (num > high_red) {
                        high_red = num;
                    }
                    break;
                case 'green':
                    if (num > high_green) {
                        high_green = num;
                    }
                    break;
            }
        }
        const power = high_red * high_green * high_blue;
        sum += power;
    }
    return sum;
}
