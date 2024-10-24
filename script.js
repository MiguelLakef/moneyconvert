
const convertButton = document.querySelector("button");
const currencySelect = document.querySelector(".converter-para")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
 const real = document.querySelector(".currency-value-to-converted")
 const currencyValueConverted = document.querySelector("#currencyValueConverted")
 const dolarToday = 5.65
const euroToday = 6.15
const libraToday = 7.36
const bitcoinToday = 337583.60

  if(currencySelect.value == "Dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("EN-US", {
      style: "currency",
      currency: "USD"
     }).format(inputCurrencyValue / dolarToday)
  }
  if(currencySelect.value == "Euro"){
currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
}).format(inputCurrencyValue/euroToday)

  }
  if(currencySelect.value == "Libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)

  }
  if(currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency:"BTC"
 }).format(inputCurrencyValue /bitcoinToday)
  }
 
console.log(currencySelect.value)
 real.innerHTML = new Intl.NumberFormat("PT-BR",  {
  style: "currency",
  currency:"BRL"
 }).format(inputCurrencyValue)
 
  
}

function changeCurrency (){
const currencyName = document.getElementById("dolar-name")
const currencyImg = document.getElementById("image-convert")
if(currencySelect.value == "Dolar"){
  currencyName.innerHTML = "Dólar americano"
  currencyImg.src = "./assets/Dolar.png"
}

if(currencySelect.value == "Euro"){
  currencyName.innerHTML = "Euro"
  currencyImg.src = "./assets/Euro.png"
}
  
if(currencySelect.value == "Libra"){
  currencyName.innerHTML = "Libra"
  currencyImg.src = "./assets/Libra.png"
}

if(currencySelect.value == "bitcoin"){
  currencyName.innerHTML = "Bitcoin"
  currencyImg.src = "./assets/Bitcoin.png"
}
convertValues()
}
currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues);
