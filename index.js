
 const fetchTest=document.addEventListener("DOMContentLoaded", function(){
  fetch(" http://localhost:3000/houses")
  .then(res=>res.json())
  .then(callB=>renderHouses(callB))})

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
getBuyer.forEach(item=>{
   
  item.addEventListener('click',(e)=>{const pricer=item.previousElementSibling.textContent
const rePrice=pricer.replace( /^\D+/g, '')
const getH6=item.previousElementSibling.previousElementSibling
 const geth7=item.nextElementSibling .nextElementSibling

if(geth7.textContent<=4){
  count=geth7.innerHTML++}else{geth7.textContent=5}
if (count<=5){
  if(item.previousElementSibling.previousElementSibling.textContent!=='owned (5/5 houses'){
if (money.textContent>0){
  if (confirm(`Are you sure you want to buy ${header.textContent} for ${pricer}?`)===true){fetch('http://localhost:3000/wallet',{method:"PATCH",
headers:{'Content-type':"application/json",
Accept:'application/json'},
body:JSON.stringify({
  holdMoney:money.textContent-rePrice})})
  count=geth7.textContent
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
}}else {alert('sorry you dont have enough money')}}
else {alert("you own all houses")}}


})})}
const getSell2=document.querySelectorAll('.seller')
getSell2.forEach(item=>{
item.addEventListener("click",(e)=>{let geth7=item.nextElementSibling

  let count=geth7.textContent
  const header=item.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.id
  if (count>0){
  if (confirm(`are you sure you want to sell?`)==true){
    count--
    {fetch(`http://localhost:3000/houses/${header}`,{
    method:"PATCH",
    headers:{  "Content-Type": "application/json",
    Accept: "application/json"

    },
    body: JSON.stringify({
      'owned':count,
      'isBought':`owned (${count}/5 houses)` 
    })
  })
  }} const getH6=item.previousElementSibling.previousElementSibling.previousElementSibling
  
  function createH6(house){
    getH6.innerHTML=house.isBought
   geth7.innerHTML=house.owned}

  

}})})

   