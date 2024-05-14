document.addEventListener("DOMContentLoaded", function() {
    const btnAll = document.querySelector(".zero-btn");
    const btn1 = document.querySelector(".first-btn");
    const btn2 = document.querySelector(".sec-btn");
    const div1 = document.querySelectorAll(".coming-soonBox");
    const div2 = document.querySelectorAll(".newly-launchedBox");

    // Function to show all boxes
    function showAllBoxes() {
        div1.forEach(function(box) {
            box.style.display = "flex"; // Set display to flex
        });
        div2.forEach(function(box) {
            box.style.display = "flex"; // Set display to flex
        });
    }

    // Function to hide all boxes
    function hideAllBoxes() {
        div1.forEach(function(box) {
            box.style.display = "none"; // Hide box
        });
        div2.forEach(function(box) {
            box.style.display = "none"; // Hide box
        });
    }

    // Attach event listener to btnAll to show all boxes
    btnAll.addEventListener("click", function() {
        showAllBoxes();
    });

    // Attach event listener to btn1 to hide newly launched box and show coming soon box
    btn1.addEventListener("click", function() {
        hideAllBoxes();
        div1.forEach(function(box) {
            box.style.display = "flex"; // Set display to flex
        });
    });

    // Attach event listener to btn2 to hide coming soon box and show newly launched box
    btn2.addEventListener("click", function() {
        hideAllBoxes();
        div2.forEach(function(box) {
            box.style.display = "flex"; // Set display to flex
        });
    });
});
