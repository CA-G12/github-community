const getUsers = () => {
    fetch('/users')
        .then(data => data.json())
        .then(data => handleDom(data))
}

const searchForUser = (username) => {

}

getUsers()