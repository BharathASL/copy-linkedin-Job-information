// Function to create and append a button to the page
function appendElements() {
  const buttonContainer = document.querySelector(
    ".job-details-jobs-unified-top-card__top-buttons"
  );

  if (!buttonContainer) {
    console.error("Button container not found. Retrying...");
    return;
  }

  const style = document.createElement("style");
  style.innerHTML = ".custom-button-copy-job:hover { background-color: #005582 !important; }";
  document.head.appendChild(style);

  const copyButton = document.createElement("button");
  copyButton.innerText = "Copy Job Details";
  copyButton.style.padding = "10px 15px";
  copyButton.style.backgroundColor = "#0073b1"; // LinkedIn color
  copyButton.style.color = "#fff";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "5px";
  copyButton.style.cursor = "pointer";
  copyButton.style.marginLeft = "10px"; // Optional margin
  copyButton.classList.add("custom-button-copy-job");

  copyButton.addEventListener("click", async () => {
    let companyName =
      document.getElementsByClassName(
        "job-details-jobs-unified-top-card__company-name"
      )[0]?.innerText || "Not available";
    let jobTitle =
      document.getElementsByClassName(
        "job-details-jobs-unified-top-card__job-title"
      )[0]?.innerText || "Not available";
    let location =
      document.querySelector(
        ".job-details-jobs-unified-top-card__primary-description-container > div > span:first-of-type"
      )?.innerText || "Not available";

    let currentUrl = window.location.href;
    let url = new URL(currentUrl);
    let jobId = url.searchParams.get("currentJobId");
    let newJobUrl = jobId
      ? `https://www.linkedin.com/jobs/view/${jobId}`
      : "Job ID not found";

    let combinedText = `${companyName}\t${jobTitle}\t${location}\t${newJobUrl}`;

    try {
      await copyTextToClipboard(combinedText);
      showPopupMessage("Job information copied to clipboard!");
    } catch (err) {
      showPopupMessage("Could not copy job information!");
      console.error("Could not copy text: ", err);
    }
  });

  buttonContainer.appendChild(copyButton);

  const copyUrlButton = document.createElement("button");
  copyUrlButton.innerText = "Copy URL";
  copyUrlButton.style.padding = "10px 15px";
  copyUrlButton.style.backgroundColor = "#0073b1"; // LinkedIn color
  copyUrlButton.style.color = "#fff";
  copyUrlButton.style.border = "none";
  copyUrlButton.style.borderRadius = "5px";
  copyUrlButton.style.cursor = "pointer";
  copyUrlButton.style.marginLeft = "10px"; // Optional margin
  copyUrlButton.classList.add("custom-button-copy-job");

  copyUrlButton.addEventListener("click", async () => {

    let currentUrl = window.location.href;
    let url = new URL(currentUrl);
    let jobId = url.searchParams.get("currentJobId");
    let newJobUrl = jobId
      ? `https://www.linkedin.com/jobs/view/${jobId}`
      : "Job ID not found";

    try {
      await copyTextToClipboard(newJobUrl);
      showPopupMessage("Job URL copied to clipboard!");
    } catch (err) {
      showPopupMessage("Could not copy URL!");
      console.error("Could not copy text: ", err);
    }
  });

  buttonContainer.appendChild(copyUrlButton);
}

async function copyTextToClipboard(text) {
  await navigator.clipboard.writeText(text);
}

// Check for the button container and create the button
const intervalId = setInterval(() => {
  const buttonContainer = document.querySelector(
    ".job-details-jobs-unified-top-card__top-buttons"
  );
  if (buttonContainer) {
    clearInterval(intervalId);
    appendElements();
  }
}, 500);

function showPopupMessage(message, duration = 3000) {

  console.log(message);
  // Create a div element for the popup
  const popup = document.createElement("div");

  // Set the text content of the popup
  popup.innerText = message;

  // Apply basic styles for the popup (like a tooltip)
  popup.style.position = "fixed";
  popup.style.bottom = "20px";  // Position it at the bottom
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";  // Center the tooltip
  popup.style.backgroundColor = "#333";  // Dark background
  popup.style.color = "#fff";  // White text
  popup.style.padding = "10px 20px";  // Padding for better look
  popup.style.borderRadius = "5px";  // Rounded corners
  popup.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.1)";
  popup.style.zIndex = "9999";  // Make sure it's above other elements
  popup.style.fontFamily = "Arial, sans-serif";  // Tooltip font
  popup.style.opacity = "0";  // Start with hidden opacity
  popup.style.transition = "opacity 0.3s ease";  // Smooth fade in/out

  // Append the popup to the body
  document.body.appendChild(popup);

  // Show the popup (fade in)
  setTimeout(() => {
    popup.style.opacity = "1";
  }, 100);  // Small delay to trigger CSS transition

  // Hide and remove the popup after the specified duration
  setTimeout(() => {
    popup.style.opacity = "0";  // Fade out
    setTimeout(() => {
      popup.remove();  // Remove the element after fading out
    }, 300);  // Wait for the fade out transition to finish
  }, duration);
}