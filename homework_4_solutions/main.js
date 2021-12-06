const { matrixProduct, sumOfMatrices, sumOfEachRow } = require('./utils')

const A = [
    [2, 3],
    [1, 4],
    [2, 1]
]

const B = [
    [3, 1, 2, 5],
    [2, 4, 2, 8]
]

const prod = matrixProduct(A, B)
console.log(prod)

const sum = sumOfMatrices(A, A)
console.log(sum)

const rowSums = sumOfEachRow(B)
console.log(rowSums)
