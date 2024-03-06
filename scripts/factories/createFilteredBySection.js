export const createFilteredBySection = (cities) => {
  const filteredBySection = document.getElementById('filtered-by');

  const h2FilterByCity = document.createElement('h2');
  const labelInput = document.createElement('label');
  const input = document.createElement('input');
  const searchIcon = document.createElement('i');
  const firstArticle = document.createElement('article');
  const secondArticle = document.createElement('article');
  const button = document.createElement('button');

  h2FilterByCity.textContent = 'Filter by city';
  input.type = 'text';
  searchIcon.className = 'fas fa-search';
  button.textContent = 'Submit';

  labelInput.appendChild(input);
  labelInput.appendChild(searchIcon);

  firstArticle.appendChild(h2FilterByCity);
  firstArticle.appendChild(labelInput);

  // Création de boutons pour chaque ville
  cities.forEach(city => {
    const cityButton = document.createElement('button');
    cityButton.textContent = city;

    // ! Gerer le comportement lorsqu'on clique dessus
    cityButton.addEventListener('click', () => {
      console.log(`Bouton ${city} cliqué`);
    });

    secondArticle.appendChild(cityButton);
  });

  filteredBySection.appendChild(firstArticle);
  filteredBySection.appendChild(secondArticle);
};
