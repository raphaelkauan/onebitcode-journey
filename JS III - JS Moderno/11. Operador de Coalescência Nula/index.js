const a = 0 // false
const b = false // false
const c = 'teste' // true

console.log(a || b || c)

// Ele considera valores que não são null e nem undefined
console.log(a ?? b ?? c)