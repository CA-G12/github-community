const profileImage = document.querySelector('.profile-pic img')
const profileName = document.querySelector('.user-about h2')
const loginName = document.querySelector('.user-about h3')
const bio = document.querySelector('.user-about p')
const followers = document.querySelectorAll('.user-about span')
const repoContainer = document.querySelector('.repo-cards')

const handleRepos = (repos) => {
    console.log(repos);
    repoContainer.textContent = '';
    repos.forEach(e => {
        const card = document.createElement('div');
        const repoDetails = document.createElement('div');
        const repoLink = document.createElement('a');
        const repoLanguages = document.createElement('p');
        const repoDate = document.createElement('p');

        card.classList.add('card');

        repoLink.href = e.html_url;
        repoLink.textContent = e.name;
        repoLanguages.textContent = 'HTML, CSS, JS';
        repoDate.textContent = `created at: ${e.created_at.split('T')[0]}`;

        card.appendChild(repoDetails);
        card.appendChild(repoDate);
        repoDetails.appendChild(repoLink);
        repoDetails.appendChild(repoLanguages);
        repoContainer.appendChild(card);
    })
}

const handleUser = (user) => {
    console.log(user);
    profileImage.src = user.avatar_url;
    profileName.textContent = user.name;
    loginName.textContent = user.login;
    bio.textContent = user.bio;
    followers[0].textContent = user.followers;
    followers[1].textContent = user.following;
}

