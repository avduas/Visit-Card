document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var formData = new FormData(this);
    
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/mgejekjb');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
    alert('Thank you for your submission!');
    document.getElementById('contact-form').reset(); 
  } else {
    alert('Oops! Something went wrong.');
  }
};
xhr.send(formData);
});
    
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var submitButton = document.getElementById('submit-btn');
  
  form.addEventListener('input', function() {
    var requiredFields = form.querySelectorAll('[required]');
    var isFormValid = true;
    
    for (var i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].value) {
        isFormValid = false;
        break;
      }
    }
    
    if (isFormValid) {
      submitButton.disabled = false;
      submitButton.style.opacity = '1';
      submitButton.style.pointerEvents = 'auto';
    } else {
      submitButton.disabled = true;
      submitButton.style.opacity = '0.5';
      submitButton.style.pointerEvents = 'none';
    }
  });
});
    
    