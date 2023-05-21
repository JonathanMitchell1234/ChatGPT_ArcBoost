// Create a container div
const container = document.createElement("div");
container.style.position = "fixed";
container.style.bottom = "50px";
container.style.right = "0";

// Create an iframe
const element = document.createElement("iframe");
element.src = "https://freegpt.one/";
element.style.width = "400px";
element.style.height = "600px";
element.style.border = "none";
element.style.display = "none"; // Initially hide the iframe

// Create a floating action button (FAB)
const fabButton = document.createElement("button");
fabButton.textContent = "+";
fabButton.style.position = "fixed";
fabButton.style.bottom = "20px";
fabButton.style.right = "20px";
fabButton.style.width = "50px";
fabButton.style.height = "50px";
fabButton.style.borderRadius = "50%";
fabButton.style.backgroundColor = "#00A67E";
fabButton.style.color = "white";
fabButton.style.fontSize = "24px";
fabButton.style.border = "none";
fabButton.style.cursor = "pointer";
fabButton.style.zIndex = "9999";

// Flag to track the iframe state
let isIframeOpen = false;

// Function to handle FAB button click
function toggleIframe() {
	if (!isIframeOpen) {
		// Open the iframe
		element.style.display = "block";
		isIframeOpen = true;
	} else {
		// Close the iframe
		element.style.display = "none";
		isIframeOpen = false;
	}
}

// Add event listener to the FAB button
fabButton.addEventListener("click", toggleIframe);

// Add the iframe and FAB button to the container
container.appendChild(element);
document.body.appendChild(container);
document.body.appendChild(fabButton);
