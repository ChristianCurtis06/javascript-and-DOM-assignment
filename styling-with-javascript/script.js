// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked
function highlight(event) {
    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(box => box.classList.remove("highlighted"));
    
    event.target.classList.add("highlighted");
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements
function changeColor(event) {
    if (!event.target.classList.contains("highlighted")) {
        event.target.style.backgroundColor = "#f2f2f2";
    }
}

function revertColor(event) {
    if (!event.target.classList.contains("highlighted")) {
        event.target.style.backgroundColor = "#ffffff";
    }
}