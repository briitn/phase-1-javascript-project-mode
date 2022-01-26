







  const fetchTest=document.addEventListener("DOMContentLoaded", function(){
    fetch(" http://localhost:3000/houses")
    .then(res=>res.json())
    .then(callB=>renderHouses(callB))})


function renderHouses(houses) {
    const div = document.querySelector('div');

  
   
   
    houses.forEach(house => {console.log(house.name)
        
  
    })
    let test=document.querySelectorAll('.buyer')
    test.forEach(item=>{item.addEventListener('click',(e)=>{let subMoney=document.querySelector('.wallet')
 subMoney.innerHTML-=25})})}
     
 
     
   
     
    

