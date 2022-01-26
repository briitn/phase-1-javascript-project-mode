







  const fetchTest=document.addEventListener("DOMContentLoaded", function(){
    fetch(" http://localhost:3000/houses")
    .then(res=>res.json())
    .then(callB=>renderHouses(callB))})


function renderHouses(houses) {
    const div = document.querySelector('div');

  
   
   
    houses.forEach(house => {const list = document.createElement('li');
    list.className='lists'
  list.innerHTML = `
  <h2>${house.name}</h2>
  <h3>${house.region}</h3>
  <img src=${house.img}
  alt='easter egg'
  width='100'
  height='150'>
  <p class='price'>$25</p>
  <button class='buyer'>buy</button>`
  div.appendChild(list);

        
  
    });
     let test=document.querySelectorAll('.buyer')
    test.forEach(item=>{item.addEventListener('click',(e)=>{let subMoney=document.querySelector('.wallet')
 subMoney.innerHTML-=25})})}
   
     
 
     
   
     
    

