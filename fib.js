function _fib(n, acc) {
    if (n === 1 || n === 2) {
        return 1
    }

    const result = acc[n] ? acc[n] : _fib(n - 1, acc) + _fib(n - 2, acc)

    acc[n] = result

    return result
}

function fib(n) {
    return _fib(n, [])
}

console.log(fib(1000))
