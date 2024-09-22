const bodyColor = document.getElementById("app");
const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F1C40F", // Yellow
    "#8E44AD", // Purple
    "#E67E22", // Orange
    "#2ECC71", // Light Green
    "#3498DB", // Light Blue
    "#E74C3C", // Light Red
    "#9B59B6"  // Lavender
];

let currentIndex = 0; 
const changeColor = () => {
    bodyColor.style.backgroundColor = colors[currentIndex]; 
    currentIndex = (currentIndex + 1) % colors.length; 
}


// document.getElementById("colorButton").addEventListener("click", changeColor);