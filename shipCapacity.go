package main

import (
	"fmt"
)

func findDaysWithCapacity(weights []int, capacity int) int {
	totalDays := 1
	sumCount := 0
	for i := 0; i < len(weights); i++ {
		if sumCount+weights[i] > capacity {
			sumCount = weights[i]
			totalDays++
		} else {
			sumCount += weights[i]
		}
	}

	return totalDays

}

func shipWithinDays(weights []int, days int) int {
	capacity := 0

	// covering case for day 1, where we need to ship all containers in a day
	if days == 1 {
		for _, weight := range weights {
			capacity += weight
		}

		return capacity
	}

	// find ship capacity for other packages
	minimumCapacity := 0

	// find the maximum value
	for _, weight := range weights {
		if weight > minimumCapacity {
			minimumCapacity = weight
		}

	}

	// found capacity
	foundCapacity := false
	for !foundCapacity {
		daysRequired := findDaysWithCapacity(weights, minimumCapacity)
		if daysRequired > days {
			// need to find next
			minimumCapacity++
		} else {
			foundCapacity = true
		}
	}

	return minimumCapacity

}

func main() {
	// weights := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10} = 55
	// weights := []int{3, 2, 2, 4, 1, 4}

	// fmt.Println(shipWithinDays([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5))
	// fmt.Println(shipWithinDays([]int{3, 2, 2, 4, 1, 4}, 3))
	// fmt.Println(shipWithinDays([]int{1, 2, 3, 1, 1}, 4))
	// fmt.Println(shipWithinDays([]int{147, 73, 265, 305, 191, 152, 192, 293, 309, 292, 182, 157, 381, 287, 73, 162, 313, 366, 346, 47}, 10))
	fmt.Println(shipWithinDays([]int{466, 118, 303, 151, 93, 338, 8, 301, 374, 478, 275, 61, 223, 29, 436, 129, 45, 50, 409, 251, 264, 453, 268, 499, 498, 288, 66, 75, 96, 358, 179, 231, 376, 44, 491, 186, 269, 211, 383, 339, 365, 387, 150, 348, 14, 100, 84, 158, 142, 356, 435, 459, 463, 170, 185, 203, 140, 229, 30, 160, 154, 385, 432, 431, 184, 57, 118, 320, 127, 364, 473, 421, 435, 261, 16, 439, 496, 303, 431, 184, 229, 201, 287, 268, 137, 119, 279, 300, 461, 143, 65, 262, 195, 297, 212, 166, 138, 335, 208, 242, 156, 482, 497, 468, 386, 307, 87, 271, 468, 67, 255, 261, 143, 363, 13, 20, 352, 153, 165, 425, 144, 393, 418, 423, 430, 264, 153, 118, 31, 10, 247, 141, 499, 199, 215, 179, 52, 201, 465, 483, 54, 430, 394, 331, 274, 374, 34, 69, 46, 130, 316, 194, 161, 32, 345, 461, 64, 476, 249, 162, 29, 168, 289, 44, 464, 485, 472, 46, 277, 180, 446, 403, 71, 302, 223, 46, 396, 32, 389, 134, 374, 220, 82, 399, 152, 166, 63, 252, 39, 425, 100, 450, 386, 279, 317, 288, 467, 408, 198, 97, 227, 371, 92, 403, 390, 47, 463, 204, 284, 111, 390, 140, 229, 23, 385, 432, 126, 213, 34, 230, 129, 137, 488, 79, 429, 162, 407, 347, 176, 490, 447, 321, 472, 90, 145, 456, 411, 479, 496, 315, 270, 438}, 11))

}
