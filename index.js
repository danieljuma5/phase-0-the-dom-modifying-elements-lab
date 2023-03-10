// Removing #main class using DOM
const box = document.getElementById('main');
box.remove('main');

const newHeader = document.createElement("h1");

newHeader.innerHTML = "${YOUR-NAME} is the champion";

newHeader.setAttribute("id", 'victory')