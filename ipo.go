package main

import (
	"fmt"
	"sort"
)

// findMaximizedCapital returns the maximum captial we can create with available work force and working on distinct projects
// k is the number of distinct projects
// w is the captial that we have initially
// profits available for projects
// capital reqiored for projects
// need to return total captial after completing projects
func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
	starting := 0
	totalCapital := w

	hashmap := make(map[int][]int)

	// O(n **2)
	for i := 0; i < len(profits); i++ {
		hashmap[capital[i]] = append(hashmap[capital[i]], profits[i])
		sort.Ints(hashmap[capital[i]]) // sorted values
	}

	for starting != k {
		// need to look at the w and find projects with available capital
		// find maximum value
		maximumProfit := 0
		maximumProfitWeight := 0
		for totalCapital >= 0 {
			if len(hashmap[totalCapital]) > 0 {
				// we have project to work on
				profitValue := hashmap[totalCapital][len(hashmap[totalCapital])-1]
				if profitValue > maximumProfit {
					maximumProfit = profitValue
					maximumProfitWeight = totalCapital
				}

			}
			totalCapital--
		}

		// add profit to totalCapital and pop the project from map
		if maximumProfit > 0 {
			hashmap[maximumProfitWeight] = hashmap[maximumProfitWeight][:len(hashmap[maximumProfitWeight])-1]
			w += maximumProfit
			totalCapital = w
		}

		starting++

	}

	return w
}

func main() {
	// fmt.Println(findMaximizedCapital(2, 0, []int{1, 3, 2}, []int{0, 1, 1}))
	// fmt.Println(findMaximizedCapital(3, 0, []int{1, 2, 3}, []int{0, 1, 2}))
	// fmt.Println(findMaximizedCapital(1, 0, []int{1, 2, 3}, []int{1, 1, 2}))
	
}