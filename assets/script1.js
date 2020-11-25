var x = 3, y = 19;
document.write(x);
document.write("<br>");
document.write(y);
var z = Math.min(x, y);
alert('Наименьшее значение из чисел' + ' ' + x + ' ' + 'и' + ' ' + y);
alert('Минимальное значение -  ' + z);

function pow(a, n) {
  if (n == 1) {
    return a;
  } else {
    return a * pow(a, n - 1);
  }
}
alert( 'Результат возведения 10 в 3 степень - ' + pow(10, 3) ); 

