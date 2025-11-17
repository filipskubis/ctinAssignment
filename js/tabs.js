document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");

  // Store all tab contents for later use
  const allTabContents = document.querySelectorAll(".tab-content");

  // Add click event listeners to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get the tab ID from the button's data-tab attribute
      const tabId = button.getAttribute("data-tab");

      // First, hide all tab contents
      allTabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Then show all elements that have an ID matching the tab ID
      const matchingContents = document.querySelectorAll(
        `.tab-content#${tabId}`
      );
      matchingContents.forEach((content) => {
        content.classList.add("active");
      });

      // If 'all' tab is selected, show all contents
      if (tabId === "all") {
        allTabContents.forEach((content) => {
          content.classList.add("active");
        });
      }
    });
  });

  // Activate the first tab by default if none is active
  const activeTabs = document.querySelectorAll(".tab-content.active");
  if (activeTabs.length === 0 && tabButtons.length > 0) {
    tabButtons[0].click();
  }
});
