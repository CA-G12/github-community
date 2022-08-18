const userName = window.location.search.split('=')[1];
const getUser = () => {
  userData.style.display = 'none';
  loading.style.display = 'flex';
  fetch(`/users/${userName}`)
    .then((data) => data.json())
    .then((data) => {
      userData.style.display = 'flex';
      loading.style.display = 'none';
      handleUser(data);
    });
};

getUser();

const getRepos = () => {
  fetch(`/user/repos/${userName}`)
    .then((data) => data.json())
    .then((data) => handleRepos(data));
};

getRepos();
