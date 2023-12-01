package day1

import (
	"errors"
	"strconv"
	"strings"
)

func Day1part1(data string) int {
	lines := strings.Split(data, "\n")
	var sum int
	var numbers []int
	for _, line := range lines {
		var first string
		var last string
		for _, letter := range line {
			_, err := strconv.Atoi(string(letter))
			if err == nil {
				if first == "" {
					first = string(letter)
				}
				last = string(letter)
			}
		}
		num, err := strconv.Atoi(first + last)
		if err != nil {
			continue
		}
		numbers = append(numbers, num)
	}
	for _, num := range numbers {
		sum += num
	}
	return sum
}

func findWord(slice string) (string, error) {
	words := []string{"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"}
	for _, word := range words {
		if len(slice) < len(word) {
			continue
		}
		found := true
		for j := range word {
			if word[j] != slice[j] {
				found = false
			}
		}
		if found == true {
			return word, nil
		}
	}
	return "", errors.New("word not found")
}

func string2num(str string) string {
	switch {
	case str == "one":
		return "1"
	case str == "two":
		return "2"
	case str == "three":
		return "3"
	case str == "four":
		return "4"
	case str == "five":
		return "5"
	case str == "six":
		return "6"
	case str == "seven":
		return "7"
	case str == "eight":
		return "8"
	case str == "nine":
		return "9"
	default:
		return ""
	}
}

func Day1part2(data string) int {
	lines := strings.Split(data, "\n")
	var sum int
	var numbers []int
	for _, line := range lines {
		var first string
		var last string
		for i, letter := range line {
			_, err := strconv.Atoi(string(letter))
			if err == nil {
				if first == "" {
					first = string(letter)
				}
				last = string(letter)
			} else {
				slice := line[i:]
				word, err := findWord(slice)
				if err == nil {
					if first == "" {
						first = string2num(word)
					}
					last = string2num(word)
				}
			}
		}
		num, err := strconv.Atoi(first + last)
		if err != nil {
			continue
		}
		numbers = append(numbers, num)
	}
	for _, num := range numbers {
		sum += num
	}
	return sum
}
