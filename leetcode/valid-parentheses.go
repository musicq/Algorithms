func isValid(s string) bool {
	stack := []string{}

	for _, v := range s {
		c := string(v)

		if c == "(" {
			stack = append(stack, ")")
		} else if c == "[" {
			stack = append(stack, "]")
		} else if c == "{" {
			stack = append(stack, "}")
		} else if len(stack) == 0 {
			return false
		} else if stack[len(stack)-1] == c {
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
