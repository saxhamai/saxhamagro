// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Submit
const form = document.querySelector("form");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    form.reset();
  });
}

// Button Click (Order / Enquiry)
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Please contact us on WhatsApp: 9702855005");
  });
});
