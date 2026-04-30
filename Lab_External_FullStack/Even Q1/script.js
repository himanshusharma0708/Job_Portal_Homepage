const showButton = document.getElementById("showBtn");
const dateTimeDisplay = document.getElementById("dateTimeDisplay");

showButton.addEventListener("click", () => {
  const now = new Date();
  dateTimeDisplay.textContent = `Current Date & Time: ${now.toLocaleString()}`;
});
