console.log("start");
let string = "";
let buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        
        else if (e.target.innerHTML == "AC") {
            string = string + e.target.innerHTML;
            string = " ";
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        // string = eval(string);
        // console.log(string)
    })
})
