package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	if len(nums) == 2 && nums[0]+nums[1] == target {
		return []int{0, 1}
	}

	var result []int

	for i := 0; i < len(nums)-1; i++ {
		// need to find sum of two values equal to comparingValue so that the sum can be 0
		end := len(nums) - 1

		for i < end {
			sum := nums[i] + nums[end]
			// fmt.Println(sum, starting, j)
			if sum != target {
				end--
			} else {
				result = append(result, i, end)
				return result
			}
		}

	}

	return []int{}

}

func main() {
	integer := []int{2, 7, 11, 15}
	// integer := []int{3, 2, 4}
	// integer := []int{3, 3}
	// integer := []int{3, 2, 3}
	fmt.Println(twoSum(integer, 9))
}
