var data="" ;
var money=['dollar' ,'dinar','nis'];

for(var i=0 ; i<money.length;i++)
{
data+= `<option > ${money[i]}</option>`
}
document.querySelector("select").innerHTML=data;

var formreg=document.querySelector(".registerForm");
var para =document.querySelector("p");

formreg.onsubmit =function(e) 
{
e.preventDefault();
var element=e.target.elements;

 var price= 
 {
    mony: element['amount'].value,
 }
 

}
formreg.onsubmit = function (e) 
{
  e.preventDefault();
  var element = e.target.elements;

  var price = {
    
    moneyType: element['amount'].value,
    seltype: element['exchange'].value,
  };
  var exchangeRate;
  switch (price.seltype) {
    case 'dollar':
      exchangeRate = 0.27; 
      break;
    case'dinar':
      exchangeRate = 0.19;
      break;
    case'nis':
      exchangeRate = 1; 
      return;
  }
  var result = price.moneyType * exchangeRate;
  para.textContent = `Converted amount: ${result} `;
}
