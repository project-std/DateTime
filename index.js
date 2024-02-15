let button =document.getElementById('btn');
button.addEventListener('click',dateAndTime);
function dateAndTime(){
  // alert("clicked");
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth()+1;
  let dateValue = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let show = document.getElementById('result');

  show.innerHTML = `Month = ${month} <br> Year = ${year} <br>  Date = ${dateValue} <br> Hour = ${hour} <br> Minutes = ${min} <br> Seconds = ${sec} <br>`;
  
}
