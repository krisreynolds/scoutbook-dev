document.addEventListener("DOMContentLoaded", function () {
  function injectNavButtons() {
    // 1. Define the HTML structure for your standalone buttons with inline SVGs
    const buttonsHTML = `
      <div id="md-nav-extra">
        <a href="https://form.jotform.com/260734372907057" class="md-nav-btn md-nav-btn--suggest">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          Suggest a link
        </a>
        <a href="https://ko-fi.com/krisreynoldsdev" class="md-nav-btn md-nav-btn--beer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" x2="14" y1="2" y2="2"></line></svg>
          Buy me a beer
        </a>
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