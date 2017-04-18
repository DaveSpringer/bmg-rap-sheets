let loadedTraits = require('./build/traits')

let fs = require('fs')

let sortedTraits = loadedTraits.allTraits.sort(function(a, b) {
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1
  } else {
    return -1
  }
})

let re = /"/g
let sortedTraitJson = 'export const allTraits =' + JSON.stringify(sortedTraits, null, 2).replace(/'/g, '\\\'').replace(re, "'")

fs.writeFile('targets/result-traits.js', sortedTraitJson, 'utf8')

console.log('\n\n************** Completed *****************')
