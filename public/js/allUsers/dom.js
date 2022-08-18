const container = document.querySelector('.cardsContainer');
const noResults = document.querySelector('.no-results');

const handleDom = (data) => {
  container.style.display = 'flex';
  noResults.style.display = 'none';

  container.textContent = '';
  data.forEach((e) => {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    const image = document.createElement('img');
    image.src = e.avatar_url;
    card.appendChild(image);

    const userName = document.createElement('h1');
    userName.textContent = e.name;
    userName.classList.add('cardName');
    card.appendChild(userName);

    const social = document.createElement('div');
    social.classList.add('social');
    card.appendChild(social);

    const publicRepos = document.createElement('div');
    publicRepos.classList.add('folowers');
    social.appendChild(publicRepos);

    const reposSquare = document.createElement('div');
    reposSquare.textContent = 'Repos';
    reposSquare.classList.add('folowerSquare');
    publicRepos.appendChild(reposSquare);

    const reposNums = document.createElement('h4');
    reposNums.textContent = e.public_repos;
    reposNums.classList.add('folowersNums');
    publicRepos.appendChild(reposNums);

    const followers = document.createElement('div');
    followers.classList.add('folowers');
    social.appendChild(followers);

    const followerSquare = document.createElement('div');
    followerSquare.textContent = 'Followers';
    followerSquare.classList.add('folowerSquare');
    followers.appendChild(followerSquare);

    const followersNums = document.createElement('h4');
    followersNums.textContent = e.followers;
    followersNums.classList.add('folowersNums');
    followers.appendChild(followersNums);

    const following = document.createElement('div');
    following.classList.add('folowers');
    social.appendChild(following);

    const followingSquare = document.createElement('div');
    followingSquare.textContent = 'Following';
    followingSquare.classList.add('folowerSquare');
    following.appendChild(followingSquare);

    const followingNums = document.createElement('h4');
    followingNums.textContent = e.following;
    followingNums.classList.add('folowersNums');
    following.appendChild(followingNums);

    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.textContent = 'See More';
    seeMoreBtn.classList.add('seeMoreBTN');
    card.appendChild(seeMoreBtn);

    seeMoreBtn.addEventListener('click', (event) => {
      window.location.href = `../../user.html?username=${e.login}`;
    });
  });
};

const submitBtn = document.querySelector('form button');
const searchInput = document.querySelector('form input');
const mnoResultsMsg = document.querySelector('.no-results h2');

const loading = document.querySelector('.loading');

const searchForUser = (username) => {
  container.style.display = 'none';
  loading.style.display = 'flex';
  fetch(`/users/search/${username}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.message === 'Not Found') {
        container.style.display = 'none';
        noResults.style.display = 'flex';
        loading.style.display = 'none';
        mnoResultsMsg.textContent = `Oops! No Results Found For "${username}"`;
      } else {
        container.style.display = 'block';
        loading.style.display = 'none';
        handleDom([data]);
      }
    })
    .catch((err) => console.log(err, 'failed to search'));
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const search = searchInput.value;
  if (search) {
    searchForUser(search);
  } else {
    alert('please fill in the field');
  }
});
