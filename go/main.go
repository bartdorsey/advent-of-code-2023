package main

import (
	"aoc/day1"
	"flag"
	"fmt"
	"log"
	"os"
)

func main() {
	day := flag.Int("d", 1, "Day of the challenge")
	flag.Parse()
	fmt.Println("Running Day:", *day)
	switch *day {
	case 1:
		content, err := os.ReadFile("../data/day1.txt")
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println("Part 1")
		fmt.Println(day1.Day1part1(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`))
		fmt.Println(day1.Day1part1(string(content)))
		fmt.Println("Part 2")
		fmt.Println(day1.Day1part2(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`))
		fmt.Println(day1.Day1part2(string(content)))

	}

}
