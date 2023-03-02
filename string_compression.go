package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"strings"
)

func compress(chars []byte) int {

	if len(chars) == 1 {
		return 1
	}

	var selectedChar byte = chars[0]
	var characterCount int = 0

	fmt.Println(selectedChar, characterCount)
	var charString []byte

	for index, currentCharacter := range chars {
		fmt.Println("INDEX ==>", index, currentCharacter)
		if currentCharacter == selectedChar {
			characterCount++
		} else {
			charString = append(charString, byte(selectedChar))

			if characterCount != 1 {
				fmt.Println("index value ==>", charString, characterCount)
				str := strings.Split(fmt.Sprintf("%d", characterCount), "")
				buf := &bytes.Buffer{}
				json.NewEncoder(buf).Encode(str)
				bs := buf.Bytes()
				fmt.Println("str ==>", str)
				charString = append(charString, bs...)
			}

			selectedChar = currentCharacter
			characterCount = 1
		}

		fmt.Println("Checking index ==>", index, len(chars)-1)

		if index == len(chars)-1 {
			charString = append(charString, byte(selectedChar))
			if characterCount != 1 {
				fmt.Println("index value ==>", charString, characterCount)
				str := strings.Split(fmt.Sprintf("%d", characterCount), "")
				buf := &bytes.Buffer{}
				json.NewEncoder(buf).Encode(str)
				bs := buf.Bytes()
				fmt.Println("str ==>", str)
				charString = append(charString, bs...)
			}

		}

	}

	return len(charString)

}

func main() {
	// fmt.Println(compress([]byte("aabbccc")))
	// fmt.Println(compress([]byte("a")))
	fmt.Println(compress([]byte("abbbbbbbbbbbb")))
}
