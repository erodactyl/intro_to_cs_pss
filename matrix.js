const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

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

function symmetrify(mat) {
  let result = []
  for (let row = 0; row < mat.length; row++) {
    result.push([])
  }

  for (let row = 0; row < mat.length; row++) {
    for (let col = row; col < mat.length; col++) {
      result[row][col] = mat[row][col]
      if (row !== col) {
        result[col][row] = mat[row][col]
      }
    }
  }

  return result
}

console.log(symmetrify(squareMatrix))
