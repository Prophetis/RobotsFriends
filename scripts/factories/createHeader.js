export const createHeader = (title, imageUrl, name, email) => {
  const header = document.getElementById('header');

  const h1Element = document.createElement('h1');
  h1Element.textContent = title;

  const figureElement = document.createElement('figure');
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = title;

  const figCaptionElement = document.createElement('figcaption');
  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  const emailSpan = document.createElement('span');
  emailSpan.textContent = email;

  figCaptionElement.appendChild(nameSpan);
  figCaptionElement.appendChild(emailSpan);

  figureElement.appendChild(imgElement);
  figureElement.appendChild(figCaptionElement);

  header.appendChild(figureElement);


  header.appendChild(h1Element);
};
