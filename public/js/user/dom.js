const profileImage = document.querySelector('.profile-pic img');
const profileName = document.querySelector('.user-about h2');
const loginName = document.querySelector('.user-about h3');
const bio = document.querySelector('.user-about p');
const followers = document.querySelectorAll('.user-about span');
const repoContainer = document.querySelector('.repo-cards');

const handleRepos = (repos) => {
  repoContainer.textContent = '';
  repos.forEach((e) => {
    const card = document.createElement('div');
    const repoDetails = document.createElement('div');
    const repoLink = document.createElement('a');
    const repoLanguages = document.createElement('p');
    const repoDate = document.createElement('p');

    card.classList.add('card');

    repoLink.href = e.html_url;
    repoLink.textContent = e.name;
    repoLanguages.textContent = `🞄${e.language || 'HTML 🞄CSS 🞄JS'}`;
    repoDate.textContent = `created at: ${e.created_at.split('T')[0]}`;

    card.appendChild(repoDetails);
    card.appendChild(repoDate);
    repoDetails.appendChild(repoLink);
    repoDetails.appendChild(repoLanguages);
    repoContainer.appendChild(card);
  });
};

const handleUser = (user) => {
  profileImage.src = user.avatar_url;
  profileName.textContent = user.name;
  loginName.textContent = user.login;
  bio.textContent = user.bio;
  followers[0].textContent = user.followers;
  followers[1].textContent = user.following;
};

/// handling the followers list
const followerSection = document.querySelector('#follow');
const userReposSec = document.querySelector('#repos');
const itemList = document.querySelector('#follow .list');
const heading = document.querySelector('#follow h2');

const handleFollowers = (list) => {
  console.log(list);
  followerSection.style.display = 'block';
  userReposSec.style.display = 'none';

  itemList.textContent = '';
  list.forEach((e) => {
    const item = document.createElement('div');

    const imgDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const img = document.createElement('img');
    const loginName = document.createElement('a');
    const date = document.createElement('p');

    item.classList = 'item';

    img.src = e.avatar_url;
    // loginName.href = e.html_url;
    loginName.textContent = e.login;
    loginName.addEventListener('click', () => {
      window.location.href = `?username=${e.login}`;
    });
    date.textContent = `Joined on: ${e.created_at.split('T')[0]}`;

    imgDiv.appendChild(img);
    nameDiv.appendChild(loginName);
    nameDiv.appendChild(date);
    item.append(imgDiv, nameDiv);

    itemList.appendChild(item);
  });
};

///
const userData = document.querySelector('.user-data');
const loading = document.querySelector('.loading');

////
const username = window.location.search.split('=')[1];
const followersList = document.querySelector('.followers');
const followingList = document.querySelector('.following');

followersList.addEventListener('click', (e) => {
  heading.textContent = 'followers';
  fetch(`/user/${username}/followers`)
    .then((data) => data.json())
    .then((data) => {
      handleFollowers(data);
    })
    .catch((err) =>
      console.log(err, 'err in fetching followers list in client')
    );
});

followingList.addEventListener('click', (e) => {
  heading.textContent = 'following';
  fetch(`/user/${username}/following`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      handleFollowers(data);
    })
    .catch((err) =>
      console.log(err, 'err in fetching followers list in client')
    );
});
