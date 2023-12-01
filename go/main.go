package main

import (
	"aoc/day1"
	"flag"
	"fmt"
)

func main() {
	day := flag.Int("d", 1, "Day of the challenge")
	flag.Parse()
	fmt.Println("Running Day:", *day)
	switch *day {
	case 1:
		fmt.Println(day1.Day1part1())
		fmt.Println(day1.Day1part2())
	}

}
