document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // simple redirect to thank you page
  window.location.href = "thankyou.html";
});