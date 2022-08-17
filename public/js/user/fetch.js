
const getUser = () => {
    const userName = window.location.search.split('=')[1];

    fetch(`/users/${userName}`)
        .then(data => data.json())
        .then(data => handleUser(data));
}

getUser()