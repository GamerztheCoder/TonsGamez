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

  // Check if the browser supports a specific feature
  if (typeof someFeature !== "undefined") {
    console.log("The specific feature is supported.");
  } else {
    console.error("The specific feature is not supported.");
  }

  // Check if there are any specific conditions you want to test
  if (conditionMet) {
    console.log("The condition is met.");
  } else {
    console.error("The condition is not met.");
  }
}

// Call the system check function
systemCheck();
