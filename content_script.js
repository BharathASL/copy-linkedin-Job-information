// Function to create and append a button to the page
function createCopyButtons() {
  const buttonContainer = document.querySelector(
    ".job-details-jobs-unified-top-card__top-buttons"
  );

  if (!buttonContainer) {
    console.error("Button container not found. Retrying...");
    return;
  }

  const copyButton = document.createElement("button");
  copyButton.innerText = "Copy Job Details";
  copyButton.style.padding = "10px 15px";
  copyButton.style.backgroundColor = "#0073b1"; // LinkedIn color
  copyButton.style.color = "#fff";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "5px";
  copyButton.style.cursor = "pointer";
  copyButton.style.marginLeft = "10px"; // Optional margin

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
      console.log("Text copied to clipboard successfully!");
    } catch (err) {
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

  copyUrlButton.addEventListener("click", async () => {

    let currentUrl = window.location.href;
    let url = new URL(currentUrl);
    let jobId = url.searchParams.get("currentJobId");
    let newJobUrl = jobId
      ? `https://www.linkedin.com/jobs/view/${jobId}`
      : "Job ID not found";

    try {
      await copyTextToClipboard(newJobUrl);
      console.log("Text copied to clipboard successfully!");
    } catch (err) {
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
    createCopyButtons();
  }
}, 500);
