document.addEventListener("DOMContentLoaded", function () {
  function injectNavButtons() {
    // 1. Define the HTML structure for your standalone buttons
    const buttonsHTML = `
      <div id="md-nav-extra">
        <a href="https://example.com/green-link" class="md-nav-btn md-nav-btn--green">Green Action</a>
        <a href="https://example.com/yellow-link" class="md-nav-btn md-nav-btn--yellow">Yellow Action</a>
      </div>
    `;

    // 2. Target the Desktop Navigation Sidebar Container
    const desktopNav = document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
    if (desktopNav && !document.querySelector(".md-sidebar--primary #md-nav-extra")) {
      desktopNav.insertAdjacentHTML("beforeend", buttonsHTML);
    }

    // 3. Target the Mobile Pull-Out Drawer Navigation Container
    const mobileNav = document.querySelector(".md-nav--drawer");
    if (mobileNav && !document.querySelector(".md-nav--drawer #md-nav-extra")) {
      mobileNav.insertAdjacentHTML("beforeend", buttonsHTML);
    }
  }

  // Run immediately on page load
  injectNavButtons();

  // Zensical uses instant loading (SPA-style hydration) when clicking nav links.
  // This listener ensures buttons re-inject cleanly when changing pages without a hard reload.
  if (typeof location$ !== "undefined") {
    location$.subscribe(function () {
      setTimeout(injectNavButtons, 50);
    });
  }
});