function toggleMenu(){
  const menu = document.getElementById('menu');
   menu.classList.toggle('translate-x-full')
  menu.classList.toggle('translate-x-0')
}



document.addEventListener("DOMContentLoaded", () => {
  // Select all FAQ items
  document.querySelectorAll(".border").forEach((faq) => {
    const button = faq.querySelector("button"); // FAQ button
    const content = faq.querySelector("div");  // FAQ answer content
    const icon = button.querySelector(".fas"); // Icon

    button.addEventListener("click", () => {
      const isOpen = content.classList.contains("hidden");

      // Close all FAQs
      document.querySelectorAll(".border div").forEach((div) => div.classList.add("hidden"));
      document.querySelectorAll(".fas").forEach((icon) => icon.classList.remove("rotate-180"));

      // Toggle the current FAQ
      if (isOpen) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180"); // Rotate icon for open state
      } else {
        content.classList.add("hidden");
        icon.classList.remove("rotate-180"); // Reset icon rotation
      }
    });
  });
});