// Mobile Sidebar functionality
export function initMobileSidebar() {
  const mobileMenuButton = document.querySelector('.mobile');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeButton = document.querySelector('.mobile-sidebar__close');
  const overlay = document.getElementById('mobileSidebarOverlay');

  function toggleSidebar() {
    mobileSidebar.classList.toggle('mobile-sidebar--active');
    overlay.classList.toggle('mobile-sidebar__overlay--active');
    document.body.classList.toggle('no-scroll');
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleSidebar);
  }
  
  if (closeButton) {
    closeButton.addEventListener('click', toggleSidebar);
  }
  
  if (overlay) {
    overlay.addEventListener('click', toggleSidebar);
  }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileSidebar);
} else {
  initMobileSidebar();
}
