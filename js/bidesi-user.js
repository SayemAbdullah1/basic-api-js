const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
        .then(data => displayUser(data.results))
}
const displayUser = users =>{
    const displayusers = document.getElementById('display-user')
    for(const user of users){
        console.log(user)
        const newDiv = document.createElement('div')
        newDiv.classList.add('newuser')
        newDiv.innerHTML = `
        <p>Name: ${user.name.first}  ${user.name.last}</p>
        <p>Location: ${user.location.city},  ${user.location.country}</p>
        `;
        displayusers.appendChild(newDiv);
    }
}
loadUser()