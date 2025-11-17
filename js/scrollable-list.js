class ScrollableList {
  constructor() {
    this.container = document.querySelector(".scrollable-list");
    this.content = document.querySelector(".scrollable-content");
    this.prevButton = document.querySelector(".scroll-button--left");
    this.nextButton = document.querySelector(".scroll-button--right");
    this.items = document.querySelectorAll(".scrollable-item");

    if (!this.container || !this.content) return;

    this.itemWidth = this.items[0]?.offsetWidth || 200; // Default to 200px if can't calculate
    this.scrollAmount = this.itemWidth + 16; // 16px is the gap between items (1rem)
    this.currentPosition = 0;
    this.maxScroll = this.content.scrollWidth - this.container.offsetWidth;

    this.init();
  }

  init() {
    // Set initial button states
    this.updateButtonVisibility();

    // Add event listeners
    if (this.prevButton) {
      this.prevButton.addEventListener("click", () => this.scroll(-1));
    }

    if (this.nextButton) {
      this.nextButton.addEventListener("click", () => this.scroll(1));
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.itemWidth = this.items[0]?.offsetWidth || 200;
        this.scrollAmount = this.itemWidth + 16;
        this.maxScroll = this.content.scrollWidth - this.container.offsetWidth;
        this.updateButtonVisibility();
      }, 250);
    });
  }

  scroll(direction) {
    this.currentPosition += this.scrollAmount * direction;

    // Handle boundaries
    this.currentPosition = Math.max(
      0,
      Math.min(this.currentPosition, this.maxScroll)
    );

    // Apply smooth scrolling
    this.content.scrollTo({
      left: this.currentPosition,
      behavior: "smooth",
    });

    this.updateButtonVisibility();
  }

  updateButtonVisibility() {
    if (this.prevButton) {
      this.prevButton.style.visibility =
        this.currentPosition <= 0 ? "hidden" : "visible";
    }
    if (this.nextButton) {
      this.nextButton.style.visibility =
        this.currentPosition >= this.maxScroll ? "hidden" : "visible";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ScrollableList();
});

export default ScrollableList;
