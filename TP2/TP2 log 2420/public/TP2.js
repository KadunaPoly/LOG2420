// Script pour changer la page d'input a output et vice versa 
src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
panel = function(el, show, hide) {
  document.getElementById(hide).style.display= 'none';
  document.getElementById(show).style.display = 'block';
  el.style.fontWeight = 'bold'
  }
  
fetch('http://localhost:8080/output.json')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
})
.catch(function (err) {
  console.log(err);
});
function appendData(data) {
  document.getElementById('output').innerHTML = JSON.stringify(data);;
}
