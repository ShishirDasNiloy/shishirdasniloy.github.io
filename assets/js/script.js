// More info button functionality
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Add event listener for window resize to fix bug not showing the full contents if screen size increased
window.addEventListener("resize", function () {
  // Check the screen size and adjust the sidebar content visibility
  if (window.innerWidth >= 1250) {
    // If the screen is greater than or equal to 1250px, hide the sidebar content
    sidebar.classList.remove("active");
  } else {
    // If the screen is smaller than 1250px, show the sidebar content based on the button state
    if (sidebarBtn.classList.contains("active")) {
      sidebar.classList.add("active");
    }
  }
});
