
document.querySelectorAll("button.drum").forEach((button, i) =>
    button.addEventListener("click", function () {
        alert(`Button ${button.innerText} (array# ${i}) got click`);
    }));