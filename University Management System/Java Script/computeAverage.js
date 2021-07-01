var mark1 = document.getElementById('mark1');
var mark2 = document.getElementById('mark2');
var mark3 = document.getElementById('mark3');
var mark4 = document.getElementById('mark4');

var hour1 = document.getElementById('hour1');
var hour2 = document.getElementById('hour2');
var hour3 = document.getElementById('hour3');
var hour4 = document.getElementById('hour4');

function Compute() {
    var allHour = (parseFloat(hour1.value) + parseFloat(hour2.value) + parseFloat(hour3.value) + parseFloat(hour4.value));
    var compute = ((parseFloat(mark1.value) * parseFloat(hour1.value)) + (parseFloat(mark2.value) * parseFloat(hour2.value)) + (parseFloat(mark3.value) * parseFloat(hour3.value)) + (parseFloat(mark4.value) * parseFloat(hour4.value)) / allHour);
    alert('Your Average is ' + compute);
}