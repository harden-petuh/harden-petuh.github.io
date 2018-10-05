var targetDate = new Date("Jun 5, 2019 00:00:00").getTime();

var x = setInterval(function () {
  var currentDate = new Date().getTime();
  var distance = targetDate - currentDate;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed();
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".timer__left").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds;
}, 400);
