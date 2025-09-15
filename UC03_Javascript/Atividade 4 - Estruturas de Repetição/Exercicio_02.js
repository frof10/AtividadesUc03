import promptSync from 'prompt-sync'
const prompt = promptSync()

let termo = Number (prompt('Digite quantos termos: '))
let proximo 
let a = 0
let b = 1
console.log(a)
for(let i = 1; i < termo; i++){
    proximo = a+b
    console.log(b)
    a = b
    b = proximo

}