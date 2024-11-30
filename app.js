const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");


function update_time(){
const current_Year = new Date().getFullYear();
const christ_mas = new Date(`December 25 ${current_Year} 00:00:00`);

const current_Date = new Date();
const diff = christ_mas-current_Date;

const d = Math.floor((diff/1000/60/60/24));
const h = Math.floor((diff/1000/60/60)%24);
const m = Math.floor((diff/1000/60)%60);
const s = Math.floor((diff/1000)%60);
// console.log(d+""+h+""+m+""+s);

days.innerHTML = d<10?"0"+d:d;
hours.innerHTML = h<10?"0"+h:h;
minutes.innerHTML = m<10?"0"+m:m;
seconds.innerHTML = s<10?"0"+s:s;

}
setInterval(update_time,1000);