
  const fetchHouses=document.addEventListener("DOMContentLoaded", function(){
    fetch(" http://localhost:3000/houses")
    .then(res=> res.json())
    .then(callB=>renderHouses(callB))
  })

    const fetchWallet=document.addEventListener("DOMContentLoaded", function(){
      fetch(" http://localhost:3000/wallet")
      .then(res=>res.json())
      .then(callB=>renderMoney(callB))})
     
 function renderMoney(wallet){
  const money=document.querySelector('.wallet')
  money.textContent=wallet.holdMoney
 }     

function renderHouses(houses) {
    const div = document.querySelector('.card');
 
    const money=document.querySelector('.wallet')
  
    //money.textContent=wallet

 
   
    houses.forEach(house => {const list = document.createElement('li');
   
    
    
    list.className='lists'
  list.innerHTML = `
  <h3 id=${house.id} class='header'>${house.name}</h3>
  <h5>${house.region}</h5>
  
  <img src=${house.img}
  alt='easter egg'
  width='100'
  height='150'>
  <h6 class=bought>${house.isBought}</h6>
  <p class='price'>${house.price}</p>
  <button class='buyer'>buy</button>
 <button id=sells class='seller'>sell</button>
 <h7 class=left>${house.owned}</h7>
  `
  
  div.appendChild(list);
  
  
  
    }); 
   


    
  const getBuyer=document.querySelectorAll('.buyer')
  let count=0

 getBuyer.forEach(item=>{
   
    item.addEventListener('click',(e)=>{const pricer=item.previousElementSibling.textContent
  const rePrice=pricer.replace( /^\D+/g, '')
  const pReprice=parseInt(rePrice)
 console.log(money.textContent>pReprice)
  const getH6=item.previousElementSibling.previousElementSibling
 const geth7=item.nextElementSibling .nextElementSibling
console.log(1000>25)

  console.log(geth7)
const header=
item.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling

if (count<=5){
if(item.previousElementSibling.previousElementSibling.textContent!=='owned (5/5 houses)'){
   
if (money.textContent>=pReprice){
  console.log(money.textContent>rePrice)
  if (confirm(`Are you sure you want to buy a house from ${header.textContent} for ${pricer}?`)===true){ 
    if(geth7.textContent<=4){
      count=geth7.innerHTML++}else{geth7.textContent=5}
 fetch('http://localhost:3000/wallet',{method:"PATCH",
headers:{'Content-type':"application/json",
Accept:'application/json'},
body:JSON.stringify({
  holdMoney:money.textContent-rePrice
})

})
count=geth7.textContent
console.log(count)
fetch(`http://localhost:3000/houses/${header.id}`,{
        method:"PATCH",
        headers:{  "Content-Type": "application/json",
        Accept: "application/json"

        },
        body: JSON.stringify({
          'owned':count,
          'isBought':`owned (${geth7.innerHTML}/5 houses)`
        })
      }).then(res=>res.json())
      .then(obj=>{createH6(obj)
      })

      function createH6(house){
        getH6.innerHTML=house.isBought;
      geth7.innerHTML=house.owned}
console.log(money.textContent)
item.nextElementSibling.disabled=false

const reMoney=money.innerHTML-=rePrice

}


}
else {alert('sorry you dont have enough money')}}
else {alert("you own all houses")}}







})})
const getSell2=document.querySelectorAll('.seller')
getSell2.forEach(item=>{
item.addEventListener("click",(e)=>{
  let geth7=item.nextElementSibling
console.log(geth7)
let count=geth7.textContent
  console.log(count)
  const header=item.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.id
console.log(header)

if (count>0 && count<=5){
  if (confirm(`are you sure you want to sell?`)==true){
  count--
  console.log(count)
  const pricer=item.previousElementSibling.previousElementSibling.textContent
  const rePrice=pricer.replace( /^\D+/g, '')
  
  fetch('http://localhost:3000/wallet',{method:"PATCH",
  headers:{'Content-type':"application/json",
  Accept:'application/json'},
  body:JSON.stringify({
    holdMoney:parseInt(rePrice)+parseInt(money.textContent)
  })})
  {fetch(`http://localhost:3000/houses/${header}`,{
    method:"PATCH",
    headers:{  "Content-Type": "application/json",
    Accept: "application/json"

    },
    body: JSON.stringify({
      'owned':count,
      'isBought':`owned (${count}/5 houses)` 
    })
  }).then(res=>res.json())
  .then(obj=>{createH6(obj)
  })
  const getH6=item.previousElementSibling.previousElementSibling.previousElementSibling
  
 
  function createH6(house){
    getH6.innerHTML=house.isBought
   geth7.innerHTML=house.owned}
console.log(getH6)
money.innerHTML=parseInt(rePrice)+parseInt(money.textContent)
}
  

  }}else {alert('you do not own any houses')}
  

}
)})}






