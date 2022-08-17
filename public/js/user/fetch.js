const userName = window.location.search.split('=')[1];

const getUser = () => {

    fetch(`/users/${userName}`)
        .then(data => data.json())
        .then(data => handleUser(data));
}

getUser();

const getRepos = () => {
    fetch(`/user/repos/${userName}`)
        .then(data => data.json())
        .then(data => handleRepos(data))
}

getRepos()