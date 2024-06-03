const GITHUB_URL = 'https://api.github.com/users/avduas';

fetch(GITHUB_URL)
.then(function(response) { 
  return response.json();
    })
    .then(function(data) {
      const profileImage = document.getElementById('profile-image');
      const profileName = document.getElementById('profile-name');
      const profileCard = document.getElementById('profile-card');
      
      profileImage.src = data.avatar_url;
      profileName.textContent = data.name;

      profileCard.addEventListener('click', function() {
        this.classList.add('animated', 'bounce');

        setTimeout(() => {
          this.classList.remove('bounce');
        }, 1000);
      });
    });
