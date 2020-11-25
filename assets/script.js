if (navigator.userAgent.search(/Safari/) > 0) {a = 'Safari'};
if (navigator.userAgent.search(/Firefox/) > 0) {a = 'MozillaFirefox'};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Internet Explorer'};
if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Google Chrome'};
if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Яндекс браузер'};
if (navigator.userAgent.search(/OPR/) > 0) {a = 'Opera'};
if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Konqueror'};
if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Debian Iceweasel'};
if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'SeaMonkey'};
if (navigator.userAgent.search(/Edge/) > 0) {a = 'Microsoft Edge'};
alert(a);


window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 1000);
};



var mas = prompt('Как дела?');
alert('У Вас дела ' + mas + '. А у меня не очень, я устала делать лабы =(');

var myTimer = window.setTimeout("alert('Ну что, нашли?');",3000);