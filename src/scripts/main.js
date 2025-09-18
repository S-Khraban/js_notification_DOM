'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const root = document.createElement('div');

  root.className = `notification ${type}`;

  root.setAttribute('style', `top: ${posTop}px; right: ${posRight}px;`);

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  root.append(h2, p);
  document.body.appendChild(root);

  setTimeout(() => {
    root.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
