/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertbtn = document.getElementById("convert-btn")
const meterfeet = document.getElementById("unit-one")
const litergallon = document.getElementById("unit-two")
const kilopounds = document.getElementById("unit-three")


function convertUnits (){
        let input = parseInt(inputEl.value)
        // Conversion between meter and feet
        let toFeet = input * 3.281
        let toMeters = input * 0.305
        // Conversion between liter and gallons
        let toLiter = input * 3.785
        let toGallons = input * 0.264
        // Conversion between kilogram and pounds
        let toPounds = input * 2.204
        let tokillogram = input * 0.453
 
    meterfeet.innerHTML = `${input} meters = ${toFeet.toFixed(3)} feet | ${input} feet = ${toMeters.toFixed(3)}  meters`
    litergallon.innerHTML = `${input} liters = ${toGallons.toFixed(3)} gallons | ${input} gallons = ${toLiter.toFixed(3)}  litters`
    kilopounds.innerHTML = `${input} Kilos = ${toPounds.toFixed(3)} pounds | ${input} pounds = ${tokillogram.toFixed(3)}  kilos`
};
    
convertbtn.addEventListener("click", function(){
    convertUnits()
})