const enquiryForm = document.getElementById("enquiry-form");
const nextField = document.getElementById("form-next-field");
const urlField = document.getElementById("form-url-field");
const statusMessage = document.getElementById("form-status");

if (enquiryForm && nextField && urlField) {
  const returnUrl = `${window.location.origin}${window.location.pathname}?enquiry=sent#enquiry-form`;
  const pageUrl = `${window.location.origin}${window.location.pathname}#enquiry-form`;

  nextField.value = returnUrl;
  urlField.value = pageUrl;

  enquiryForm.addEventListener("submit", () => {
    const submitButton = enquiryForm.querySelector("button[type='submit']");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
  });
}

if (statusMessage) {
  const params = new URLSearchParams(window.location.search);

  if (params.get("enquiry") === "sent") {
    statusMessage.hidden = false;
    statusMessage.textContent = "Thanks! Your enquiry has been sent. We will get back to you by email soon.";
  }
}
