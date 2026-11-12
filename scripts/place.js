// Footer First Paragraph - Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Footer Second Paragraph - Last Modified
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Wind chill - MUST be one line return
function calculateWindChill(temp, windSpeed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

const temperature = 10;
const windSpeed = 5;

const el = document.getElementById("windchill");
if (el) {
  if (temperature <= 10 && windSpeed > 4.8) {
    el.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
  } else {
    el.textContent = "N/A";
  }
}