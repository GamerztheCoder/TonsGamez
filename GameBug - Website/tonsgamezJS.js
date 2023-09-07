"use strict";

function openProgram(programName) {
  const filePath = programName;
  const popupOptions = "width=600,height=600,resizable=no,scrollbars=no";

  // Open a new popup window with specified program and options
  const popup = window.open(filePath, "PopupWindow", popupOptions);

  // If popup is blocked by the browser, display an alert
  if (!popup) {
    alert(
      "Your browser has blocked usage of my program from your browser. Please allow popups to continue."
    );
  }
}

function systemCheck() {
  // Check if JavaScript is enabled in the browser
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    console.log("JavaScript is enabled.");
  } else {
    console.error("JavaScript is not enabled.");
  }

  // Check if pop-ups are allowed
  if (window.navigator && window.navigator.userAgent) {
    const isPopupsAllowed =
      window.navigator.userAgent.includes("Chrome") ||
      window.navigator.userAgent.includes("Firefox");
    if (isPopupsAllowed) {
      console.log("Pop-ups are allowed in this browser.");
    } else {
      console.error("Pop-ups are not allowed in this browser.");
    }
  } else {
    console.error("Unable to determine pop-up settings.");
  }
}

// Call the system check function
systemCheck();

function toggleMenu() {
  let navigation = document.querySelector("navBar");
  navigation.classList.replace("", "");
}
