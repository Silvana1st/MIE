function multiplyNumbers()
{
    var numberOne = document.getElementById("mul-one");
    var numberTwo = document.getElementById("mul-two");
    var answer = document.getElementById("mul-answer");
          
    answer.innerHTML = parseInt(numberOne.value) * parseInt(numberTwo.value);
}