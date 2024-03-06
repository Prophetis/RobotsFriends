import { API_KEY } from "./assets/env.js";
import { createHeader } from "./scripts/factories/createHeader.js";
import { createAside } from "./scripts/factories/createAside.js";
import { createFilteredBySection } from "./scripts/factories/createFilteredBySection.js";
import { createGallerySection } from "./scripts/factories/createGallerySection.js";

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(`https://prfauraproject.up.railway.app/api/users?apiKey=${API_KEY}`);
  const data = await response.json();

  await createHeader(
    'RobotFriends',
    null,
    "Joseph Joe",
    'Josephjoe.gmail.com'
  );

  const cities = [...new Set(data.map(user => user.address.city))];
  await createFilteredBySection(cities);
  await createAside();
  await createGallerySection(data);

  const figures = document.querySelectorAll('#gallery > figure');

  figures.forEach((figure, index) => {
    // Récupérer l'ID de l'utilisateur correspondant à l'index actuel
    const userId = data[index].id;

    // Attribuer l'ID de l'utilisateur à l'attribut dataset de la figure
    figure.dataset.userId = userId;

    figure.addEventListener('click', () => {
      window.location.href = `./pages/details/details.html?id=${userId}`;
    });
  });
});




