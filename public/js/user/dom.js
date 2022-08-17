const profileImage = document.querySelector('.profile-pic img')
const profileName = document.querySelector('.user-about h2')
const loginName = document.querySelector('.user-about h3')
const bio = document.querySelector('.user-about p')
const followers = document.querySelectorAll('.user-about span')

const handleUser = (user) => {
    console.log(user);
    profileImage.src = user.avatar_url;
    profileName.textContent = user.name;
    loginName.textContent = user.login;
    bio.textContent = user.bio;
    followers[0].textContent = user.followers;
    followers[1].textContent = user.following;
}