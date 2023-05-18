const codCartao = document.getElementById("cod")
const numInput = document.getElementById("number")
const nameInput = document.getElementById("nameInput")
const nameCart = document.getElementById("name")
const dia = document.getElementById("dia")
const ano = document.getElementById("ano")
const cvc = document.getElementById("cvc")
const dataCartao = document.getElementById("data_cart")
const cvcCart = document.getElementById("numberCvC")
let n = ''
let cont = 0
let temp
let nome = ''


numInput.addEventListener("keydown", function (ev) {
    cont++
    if (temp) {
        temp = 0
        numInput.value += " "
    }
    if (cont % 4 == 0) {
        temp = 1
        cont = 0;
    }

    codCartao.innerText = numInput.value
})

numInput.addEventListener("keyup", () => {
    codCartao.innerText = numInput.value
})

nameInput.addEventListener("keydown", function () {
    nameCart.innerText = nameInput.value.toUpperCase()
})

nameInput.addEventListener("keyup", function () {
    nameCart.innerText = nameInput.value.toUpperCase()
})

dia.addEventListener("keydown", () => {
    dataCartao.innerText = dia.value + "/" + ano.value
})

dia.addEventListener("keyup", () => {
    dataCartao.innerText = dia.value + "/" + ano.value
})

ano.addEventListener("keydown", () => {
    dataCartao.innerText = dia.value + "/"

    dataCartao.innerText += ano.value

})

ano.addEventListener("keyup", () => {
    dataCartao.innerText = dia.value + "/"
    dataCartao.innerText += ano.value
})

cvc.addEventListener("keydown", () => {
    cvcCart.innerText = cvc.value
})

cvc.addEventListener("keyup", () => {
    cvcCart.innerText = cvc.value
})

/*   if(isNaN(n)){
    console.log("deu certo")
}*/