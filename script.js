const button = document.getElementById("btn");
const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

function greet() {
    const name = nameInput.value.trim();

    if (name === "") {
        result.textContent = "Пожалуйста, введите имя";
        return;
    }

    result.textContent = "Привет, " + name + "!";
}

// клик
button.addEventListener("click", greet);

// Enter
nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        greet();
    }
});