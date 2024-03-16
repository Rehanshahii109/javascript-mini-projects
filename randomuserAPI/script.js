document.addEventListener('DOMContentLoaded', function () {
  const resultsPerPage = 10;
  let currentPage = 1;
  let filteredUsers = [];

  // Fetch data from Random User API
  async function fetchUsers(page) {
      try {
          const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`);
          const data = await response.json();
          return data.results;
      } catch (error) {
          console.error('Error fetching users:', error);
      }
  }

   

  // Render users on listing page
  function renderUsers(users) {
      const userList = document.getElementById('user-list');
      userList.innerHTML = '';
      users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('card');
          userCard.innerHTML = `
              <h3>${user.name.first} ${user.name.last}</h3>
              <p>Gender: ${user.gender}</p>
          `;
          userList.appendChild(userCard);

          // Add click event listener to each card
          userCard.addEventListener('click', function() {
              displayProfile(user);
          });
      });
  }

  // Function to display user profile information
  function displayProfile(user) {
      const profileInfo = document.getElementById('profileInfo');
      profileInfo.innerHTML = `
          <h2>${user.name.first} ${user.name.last}</h2>
          <p>Email: ${user.email}</p>
          <p>Gender: ${user.gender}</p>
          <p>Location: ${user.location.city}, ${user.location.country}</p>
          <img src="${user.picture.large}" alt="User Image">
      `;
      document.getElementById('profileModal').style.display = 'block';
  }

  // Initialize and render users
  async function fetchAndRenderUsers(page) {
      const users = await fetchUsers(page);
      filteredUsers = users;
      renderUsers(users);
  }

  // Event listener to close the modal
  document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('profileModal').style.display = 'none';
  });

  // Initial fetch and render
  fetchAndRenderUsers(currentPage);
});
