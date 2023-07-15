const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// https://meet.google.com/kks-jefz-opc join hoja bhai..??

buttons.forEach((item) => {
  item.onclick = () => {
    let string2 = display.innerText.toString();

    if(string2.length >= 8){
      display.style.fontSize = "30px";
    }

    if(string2.length >= 13){
      display.style.fontSize = "20px";
    }


    if(string2.length >= 20){
    
      display.innerText = "LIMIT EXCEEDED";
    }
    
    if (item.id == "clear") {
      display.innerText = "";
    } 
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } 
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
    else{
      display.innerText += item.id;
    }

  };
});