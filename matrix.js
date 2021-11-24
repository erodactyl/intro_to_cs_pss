const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

/*
 * [7, 4, 1]
 * [8, 5, 2]
 * [9, 6, 3]
 */

function rotate(mat) {
  let result = []
  for (let row = 0; row < mat.length; row++) {
    result.push([])
  }

  for (let col = 0; col < mat.length; col++) {
    for (let row = 0; row < mat.length; row++) {
      result[col][mat.length - 1 - row] = mat[row][col]
    }
  }

  return result
}

console.log(rotate(squareMatrix))
