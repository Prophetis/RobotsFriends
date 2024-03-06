export const createAside = () => {
  const asideSection = document.getElementById('aside');

  const sectionMenu = document.createElement('section');
  const sectionSetting = document.createElement('section');
  const footer = document.createElement('footer');

  const h5Menu = document.createElement('h5');
  const h5Setting = document.createElement('h5');
  const h2Footer = document.createElement('h2');
  const pFooter = document.createElement('p');

  h5Menu.textContent = 'MENU';
  h5Setting.textContent = 'SETTING';
  h2Footer.textContent = 'RobotFriends';
  pFooter.textContent = 'V1.0 - July 2023';

  const createArticle = (iconClass, text) => {
    const article = document.createElement('article');
    const label = document.createElement('label');
    const icon = document.createElement('i');
    const span = document.createElement('span');

    icon.className = iconClass;
    span.textContent = text;

    label.appendChild(icon);
    label.appendChild(span);
    article.appendChild(label);

    return article;
  };

  const menuItems = [
    { iconClass: 'fas fa-home', text: 'Home' },
    { iconClass: 'fas fa-star', text: 'Favorites' }
  ];

  const settingItems = [
    { iconClass: 'fas fa-cog', text: 'My account' },
    { iconClass: 'fas fa-search', text: 'Preferences' }
  ];

  const menuArticles = menuItems.map(item => createArticle(item.iconClass, item.text));
  const settingArticles = settingItems.map(item => createArticle(item.iconClass, item.text));

  sectionMenu.appendChild(h5Menu);
  menuArticles.forEach(article => sectionMenu.appendChild(article));

  sectionSetting.appendChild(h5Setting);
  settingArticles.forEach(article => sectionSetting.appendChild(article));

  footer.appendChild(h2Footer);
  footer.appendChild(pFooter);

  asideSection.appendChild(sectionMenu);
  asideSection.appendChild(sectionSetting);
  asideSection.appendChild(footer);
};
