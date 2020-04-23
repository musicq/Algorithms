Since integer types use two's complement arithmetic, you can infer the min/max
constant values for int and uint. For example,

```go
const MaxUint = ^uint(0)
const MinUint = 0
const MaxInt = int(MaxUint >> 1)
const MinInt = -MaxInt - 1
```

```text
uint8  : 0 to 255
uint16 : 0 to 65535
uint32 : 0 to 4294967295
uint64 : 0 to 18446744073709551615
int8   : -128 to 127
int16  : -32768 to 32767
int32  : -2147483648 to 2147483647
int64  : -9223372036854775808 to 9223372036854775807
```

# Materials

- https://golang.org/doc/effective_go.html#allocation_make
- https://gobyexample.com/
- https://www.golangprograms.com/go-language/arrays.html
- https://github.com/aQuaYi/LeetCode-in-Go
- https://www.digitalocean.com/community/tutorials/how-to-convert-data-types-in-go
