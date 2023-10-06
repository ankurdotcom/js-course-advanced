// A closure is a function having access to the parent scope, even after the parent function has closed.


/** 
 * 
 // The variable add is assigned to the return value of a self-invoking function.

 // The self-invoking function only runs once. It sets the counter to zero (0),
  and returns a function expression.

  // This way add becomes a function.
   The "wonderful" part is that it can access the counter in the parent scope.

  // This is called a JavaScript closure. 
    It makes it possible for a function to have "private" variables.

  // The counter is protected by the scope of the anonymous function,
   and can only be changed using the add function.



const add = (function () {
  let counter = 0;
  alert('outer');
  return function () {alert(`innner ${counter}`); counter += 1; return counter; }
})();

function myFunction(){
   document.getElementById("demo").innerHTML = add();
}

*/

// Rewitten Above Code Using Aerrow Function

const add = ( () => {
  let counter = 0;
  return ()  => ++counter;
})();

const countBtn = document.getElementById("count-btn");


countBtn.addEventListener('click', () => {
    const demoDiv = document.getElementById("demo");
    // demoDiv.style = "Red";
    demoDiv.style.color = changeRandomColor();
    // demoDiv.style.fontSize = "1.6rem;";
    demoDiv.style.fontSize = changeRandomSize();
    demoDiv.innerHTML = add();
});








const changeRandomColor = () => {
    const  colors = ["Red","Blue","Tomato","Pink","Yellow","Green","White","Lemmon","Grey","Peach","Orange"];
        const colorIndex = Math.floor(Math.random() * 10);
        // console.log(`Color ${colors[colorIndex]} `);
        return colors[colorIndex];
}

const changeRandomSize = () => {
        return Math.random() * 20 + "rem";
}

