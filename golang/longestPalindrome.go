package main

import "fmt"

func checkIfPalindrome(s string, starting int, lastIndex int) bool {
	var isValid bool = true
	for starting <= lastIndex {
		if string(s[starting]) != string(s[lastIndex]) {
			isValid = false
			break
		} else {
			starting++
			lastIndex--
		}
	}

	return isValid
}

func longestPalindrome(s string) string {
	var subString string = ""

	for i := 0; i < len(s); i++ {
		fmt.Println(string(s[i]), string(s[len(s)-1]))

		pointer := i
		lastPointer := len(s) - 1
		localSubstring := ""
		for pointer <= lastPointer {

			fmt.Println("comparing values==>", string(s[pointer]), string(s[lastPointer]))
			if string(s[pointer]) == string(s[lastPointer]) {
				isValid := checkIfPalindrome(s, pointer, lastPointer)
				fmt.Println("localSubstring ==>", localSubstring)
				if isValid {
					localSubstring = s[pointer : lastPointer+1]
				}
				fmt.Println("substring==>", subString)
				fmt.Println("Is valid==>", isValid)
				if isValid && (len(localSubstring) > len(subString)) {

					subString = localSubstring
				}

				if len(localSubstring) == len(s) {
					fmt.Println("Into break")
					break
				}
			}
			lastPointer--
		}

		if len(subString) == len(s) {
			break
		}
	}

	return subString
}

func main() {
	// str := "babad"
	// str := "bacabab"
	// str := "cbbd"
	str := "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg"

	// str := "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"

	fmt.Println(longestPalindrome(str))
}
