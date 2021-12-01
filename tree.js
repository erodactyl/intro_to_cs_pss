const foodChain = require('./tree.json')

function simplify(chain, acc) {
    acc[chain.type] = []
    for (let i = chain.eats.length - 1; i >= 0; i--) {
        acc[chain.type].push(chain.eats[i].type)
        simplify(chain.eats[i], acc)
    }
}

const newChain = {}

simplify(foodChain, newChain)

console.log(newChain)
