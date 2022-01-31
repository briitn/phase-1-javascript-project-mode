
 const fetchTest=document.addEventListener("DOMContentLoaded", function(){
  fetch(" http://localhost:3000/houses")
  .then(res=>res.json())
  .then(callB=>renderHouses(callB))})

  
   