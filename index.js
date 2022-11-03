let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281.toFixed(3)
const literToGallon = 0.264.toFixed(3)
const kilogramtoPound = 2.204.toFixed(3)

const feetToMeter = 0.3048.toFixed(3)
const gallonToLiter = 3.785.toFixed(3)
const poundToKilogram = 0.453.toFixed(3)

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value

    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feets | ${baseValue} feets = ${baseValue * feetToMeter} meters`
    volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons | ${baseValue} gallons = ${baseValue * gallonToLiter} liters`
    massEl.textContent = `${baseValue} kilos = ${baseValue * kilogramtoPound} pounds | ${baseValue} pounds = ${baseValue * poundToKilogram} kilos`
})