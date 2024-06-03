const cities = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.9858527988!2d36.726185675725425!3d55.58025697988595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sil!4v1689956383328!5m2!1sru!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.11508234014!2d12.371188799966253!3d41.90995327182508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2z0KDQuNC8LCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2sil!4v1689965934029!5m2!1sru!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367333.526021223!2d12.484786253999058!3d41.89891610476888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c0cc42216a8051%3A0x83d2af7d2dfead2d!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1637368632497!5m2!1sen!2sus",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344967.73579660215!2d2.3522219231615607!3d48.85661452685981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1637368568533!5m2!1sen!2sus"
];

let currentIndex = 0;
const mapIframeContainer = document.getElementById("mapIframeContainer");
const locationListItems = document.querySelectorAll('.location-section ul li');
const previousButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');

previousButton.addEventListener('click', showPreviousCity);
nextButton.addEventListener('click', showNextCity);

function showPreviousCity() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCity();
  }
}

function showNextCity() {
  if (currentIndex < cities.length - 1) {
    currentIndex++;
    displayCity();
  }
}

function displayCity() {
  mapIframeContainer.innerHTML = `<iframe src="${cities[currentIndex]}" width="1000" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  locationListItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });

  updateButtonVisibility();
}

function updateButtonVisibility() {
  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === cities.length - 1;
}

displayCity();
