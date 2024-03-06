import { API_KEY } from "./assets/env.js";
import { createHeader } from "./scripts/factories/createHeader.js";
import { createAside } from "./scripts/factories/createAside.js";
import { createFilteredBySection } from "./scripts/factories/createFilteredBySection.js";
import { createGallerySection } from "./scripts/factories/createGallerySection.js";
import { getData, shareData } from "./scripts/sharedData.js";
const fetchAllData = async () => {
  try {
    const response = await fetch(`https://prfauraproject.up.railway.app/api/users?apiKey=${API_KEY}`);
    const data = await response.json();

    await shareData(data);

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
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error; // Rejet de la promesse en cas d'erreur
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await fetchAllData();
    const figures = document.querySelectorAll('#gallery > figure');

    figures.forEach((figure) => {
      figure.addEventListener('click', () => {
        const userId = figure.dataset.userId;
        window.location.href = `./pages/details/details.html?id=${userId}`;
      });
    });
  } catch (error) {
    console.error(error);
  }
});
