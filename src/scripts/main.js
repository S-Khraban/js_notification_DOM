'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const root = document.createElement('div');
  root.className = `notification ${type}`;

  // Позиціювання
  root.style.top = `${posTop}px`;
  root.style.right = `${posRight}px`;

  // Заголовок
  const h2 = document.createElement('h2');
  h2.className = 'title';
  h2.textContent = title;

  // Опис
  const p = document.createElement('p');
  p.textContent = description;

  root.append(h2, p);
  document.body.appendChild(root);

  // Ховаємо через 2 секунди
  setTimeout(() => {
    root.style.display = 'none';
  }, 2000);
};

// зробимо доступним для тестів
window.pushNotification = pushNotification;

// Виклики
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
