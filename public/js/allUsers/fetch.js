const getUsers = () => {
  container.style.display = 'none';
  loading.style.display = 'flex';
  fetch('/users')
    .then((data) => data.json())
    .then((data) => {
      container.style.display = 'flex';
      loading.style.display = 'none';
      handleDom(data);
    });
};

getUsers();
