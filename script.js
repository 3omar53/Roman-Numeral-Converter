const numberInput = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num)=>{
      const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const decimalValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    
    let result = '';

    for (let i = decimalValues.length - 1; i >= 0; i--) {
      while (num >= decimalValues[i]) {
        result += romanNumerals[i];
        num -= decimalValues[i];
      }
    }

    return result;
}
const handleClick = () => {
  if (!numberInput.value) {
    output.innerText = "Please enter a valid number";
  }else if (numberInput.value<=1){
    output.innerText = "Please enter a number greater than or equal to 1";
  }else if (numberInput.value>=4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }else{
    output.innerText = convertToRoman(numberInput.value);
  }
};

btn.addEventListener("click", handleClick);