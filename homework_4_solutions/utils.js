function matrixProduct(mat1, mat2) {
    // mat1 is KxN matrix, mat2 is NxM matrix
    // mat1 has K rows and N colums, while mat2 hat N rows and M colums
    // Let's iterate over all mat1 rows and multiply them by mat2 colums

    const N = mat2.length

    let result = []

    for (let mat1row = 0; mat1row < mat1.length; mat1row++) {
        // For each mat1 row we need a new row in the final matrix
        result.push([])
        // Iterate over all mat2 colums
        for (let mat2col = 0; mat2col < mat2[0].length; mat2col++) {
            // Now let's walk over mat1 colums and mat2 rows and dot product those 2 vectors
            let sum = 0
            for (let n = 0; n < N; n++) {
                sum += mat1[mat1row][n] * mat2[n][mat2col]
            }

            // Last step - assign the correct dot product to the result matrix
            result[mat1row][mat2col] = sum
        }
    }

    return result
}

function sumOfMatrices(mat1, mat2) {
    // When summing 2 matrices they have to be of the same NxM sizes,
    // so we can just walk over 1 of them and grab the same indices from the other.
    let result = []

    for (let row = 0; row < mat1.length; row++) {
        // Prepare the result row so we can assign values to it later
        result.push([])
        for (let col = 0; col < mat1[0].length; col++) {
            result[row][col] = mat1[row][col] + mat2[row][col]
        }
    }

    return result
}

function sumOfEachRow(mat) {
    let result = []

    for (let row = 0; row < mat.length; row++) {
        let currentRowSum = 0
        // Walk over the row and add all elements to the current row's sum
        for (let col = 0; col < mat[0].length; col++) {
            currentRowSum += mat[row][col]
        }
        result.push(currentRowSum)
    }

    return result
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}
