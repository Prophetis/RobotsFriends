export const createGallerySection = (data) => {
  const gallerySection = document.getElementById('gallery');

  data.forEach(user => {
    const figureElement = document.createElement('figure');
    figureElement.dataset.userId = user.id;

    const imgElement = document.createElement('img');
    const infoIcon = document.createElement('i');
    const figCaptionElement = document.createElement('figcaption');
    const h3Element = document.createElement('h3');
    const h4Element = document.createElement('h4');

    imgElement.src = `https://robohash.org/${user.id}`;
    imgElement.alt = `Avatar de ${user.name}`;

    infoIcon.className = 'fas fa-info-circle';
    h3Element.textContent = user.name;
    h4Element.textContent = user.email;

    figCaptionElement.appendChild(h3Element);
    figCaptionElement.appendChild(h4Element);

    figureElement.appendChild(imgElement);
    figureElement.appendChild(infoIcon);
    figureElement.appendChild(figCaptionElement);

    gallerySection.appendChild(figureElement);
  });
};
