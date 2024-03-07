//timer -task
var r=0,sec=0,min=0,hour=0,s=0

function start(){
   r=setInterval(()=>{sec++;document.getElementById('d3').innerHTML = `${hour.toString().padStart(2,0)} : ${min.toString().padStart(2,0)} : ${sec.toString().padStart(2,0)}`;
   if(sec>=59){
      min++;
      sec=0;
   }
   if(min>=59){
   hour++;
   min=0;
   sec=0;
   }  
   if(hour>=24){
      hour=0;
      min=0;
      sec=0;
      } 
   var d0=document.getElementById("st")
    var d1=document.getElementById("sp")
    var d2=document.getElementById("re")
    var d3=document.getElementById("fl")

    d1.removeAttribute("hidden");
    d2.removeAttribute("hidden");
    d3.removeAttribute("hidden");
    d0.setAttribute("hidden","hidden")
},1000)

}
var sp=0
function stop(){
    if(sp==0){
   
   document.getElementById("sp").innerHTML="Restart"
    sp=1
    clearInterval(r)
}
    else{
    start()
    document.getElementById("sp").innerHTML="Stop"
    sp=0
    }
   flag()
}

function reset(){
   document.getElementById('d3').innerHTML="00:00:00"
   sec=0
   min=0;hour=0
   
   var d0=document.getElementById("st")
   var d1=document.getElementById("sp")
   var d2=document.getElementById("re")
   var d3=document.getElementById("fl")
   d0.removeAttribute("hidden");
   d1.setAttribute("hidden","hidden")
   d2.setAttribute("hidden","hidden")
   d3.setAttribute("hidden","hidden")
   clearInterval(r)

}

function flag(){
   var Sno = document.createElement("td");
   var time = document.createElement("td");
   var time1 = document.createElement("td");
   var Row =  document.createElement("tr")
   time.innerHTML=document.getElementById('d3').innerHTML
   Sno.innerHTML += (s++)
   time1.innerHTML=document.getElementById("t1").value
   Row.append(Sno)
   Row.append(time1)
   Row.append(time)
   var Table = document.getElementById("table");
   Table.append(Row)
   
}