const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = (users) => {
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        const { email, location } = user;
        const UserDiv = document.createElement('div');
        UserDiv.classList.add('user');
        UserDiv.innerHTML = `
        <h3>User Name</h3>
        <p>Email: ${email}</p>
        <p>User Location: ${location.city}, ${location.country}</p>
        `;
        userContainer.appendChild(UserDiv);
    }
}

loadUser();