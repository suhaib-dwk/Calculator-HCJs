(
    function () {
        let screen = document.querySelector('.screen');
        let buttons = document.querySelectorAll('.btn');
        let clear = document.querySelector('.btn-clear');
        let equal = document.querySelector('.btn-equal');

        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                let value = e.target.dataset.num;
                screen.value += value;
            })
        });

        equal.addEventListener('click', function (e) {
            if (screen.value === '') {
                screen.value = "please enter";
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        });

        clear.addEventListener('click', function (e) {
            screen.value = "";
        })
    }
)();

// explain code


// The function starts by defining variables using the querySelector() and querySelectorAll() methods to select HTML elements on the page. The screen variable represents the calculator's display screen, and the buttons variable represents all the buttons on the calculator. The clear variable represents the "clear" button, and the equal variable represents the "equal" button.

// Next, the function uses the forEach() method to loop through all the buttons on the calculator and add an event listener to each button. The event listener listens for a "click" event, and when the button is clicked, it gets the value of the button and appends it to the screen variable.

// The equal button has a separate event listener that listens for a "click" event. When the button is clicked, it first checks if the screen variable is empty. If it is, nothing happens. If the screen variable has a value, the eval() function is used to evaluate the expression in the screen variable and the result is assigned to the answer variable. The screen variable is then set to the value of the answer variable.

// The clear button also has an event listener that listens for a "click" event. When the button is clicked, it sets the screen variable to an empty string, effectively clearing the calculator display.

// Overall, this code provides basic functionality to a calculator by allowing users to input numbers and perform basic arithmetic operations, and also includes a clear button to reset the calculator's display.






