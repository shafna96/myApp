

const fruits = ['apple', 'oranges', 'mango', 'stawberry', 'grapes']
const fruits1 = fruits.slice(0, 3)
fruits.reverse();
fruits.splice(3, 1)
const button = document.querySelector("button")
button.addEventListener('click', showAlert)

function showAlert() {
    alert(fruits.toString());
}

// console.log(fruits)
// console.log(fruits1)