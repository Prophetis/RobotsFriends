import { getData } from "../../scripts/sharedData.js";

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  let sharedData = getData();

  console.log(sharedData)

  const user = sharedData.find(userData => userData.id === parseInt(userId));

  if (user) {
    const userDetailsContainer = document.getElementById('user-details');

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = user.name;

    const section = document.createElement('section');
    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = `Email: ${user.email}`;

    section.appendChild(emailParagraph);

    userDetailsContainer.appendChild(header);
    userDetailsContainer.appendChild(section);
  }
});
