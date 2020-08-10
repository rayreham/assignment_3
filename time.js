//javascript for time
const daten = document.querySelector('#daten')
var date = new Date();
var year = date.getFullYear()
var day = ("0" + date.getDate()).slice(-2)
var month = ("0" + (date.getMonth() + 1)).slice(-2)


daten.textContent = ` Today is August` + ` ${day},`+ ` ${year}`

const clock = document.querySelector('#clock')
    
  function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

startTime()
