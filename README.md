# Interactive_Button_Click_Tracker
## Date:13-07-2025
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ClickCounter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>ClickCounter</h1>
    <button id="clickBtn">Click Me</button>
    <div id="countDisplay">0</div>
  </div>
  <script src="script.js"></script>
</body>
</html>


```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #fff8f0, #f1e8e1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #ffffff;
  padding: 50px 70px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(165, 107, 42, 0.2);
  text-align: center;
  border: 2px solid #8b5e3c;
}

h1 {
  color: #5a3d2b;
  margin-bottom: 30px;
  font-size: 36px;
}

button {
  padding: 14px 30px;
  font-size: 20px;
  background-color: #8b5e3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(91, 50, 23, 0.3);
}

button:hover {
  background-color: #a86e4c;
  transform: scale(1.05);
}

#countDisplay {
  margin-top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #5a3d2b;
  background-color: #f6ede5;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #d6b89d;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}


```
## JavaScript Code:
```
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

const button = document.getElementById("clickBtn");
const display = document.getElementById("countDisplay");

button.addEventListener("click", () => {
  const currentCount = counter();
  display.innerText = currentCount;
});


```
## Output:

<img width="1913" height="1022" alt="image" src="https://github.com/user-attachments/assets/2af2d434-3b74-4775-804c-937e595f45ee" />

## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
