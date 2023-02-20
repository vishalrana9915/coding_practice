package main

import (
	"fmt"
	"math"
)

func searchInsert(nums []int, target int) int {
	if len(nums) == 1 {
		if nums[0] == target || nums[0] > target {
			return 0
		}

		return 1
	}

	// covering edge cases
	if nums[0] > target {
		return 0
	} else if nums[len(nums)-1] < target {
		return len(nums)
	}

	var leftIndex int = 0
	var rightIndex int = len(nums) - 1

	for leftIndex < rightIndex {

		// matching edges
		if nums[leftIndex] == target {
			return leftIndex
		} else if nums[rightIndex] == target {
			return rightIndex
		}
		// we need to use binary search
		medium := (leftIndex + rightIndex) / 2
		pivot := int(math.Floor(float64(medium)))
		fmt.Println(leftIndex, rightIndex, pivot, nums[pivot])

		if nums[pivot] < target && nums[pivot+1] > target {
			return pivot + 1
		} else if nums[pivot] > target && nums[pivot-1] < target {
			return pivot
		} else if nums[pivot] > target {
			// value is in left
			rightIndex = pivot
		} else if nums[pivot] < target {
			// value is in right
			leftIndex = pivot
		} else if nums[pivot] == target {
			// found exact match
			return pivot
		}
	}

	return 0

}

func main() {
	input := []int{1, 3, 5, 6}
	// input := []int{1, 3, 5, 6}
	fmt.Println(searchInsert(input, 7))
}
