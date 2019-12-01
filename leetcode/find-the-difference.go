func findTheDifference(s string, t string) byte {
	var (
		a int
		b int
	)

	for i := 0; i < len(s); i++ {
		a += int(s[i])
		b += int(t[i])
	}

	b += int(t[len(t)-1])

	return byte(b-a)
}
