let installPrompt;
const installButton = document.querySelector('#install-app');

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
});

installButton?.addEventListener('click', async () => {
  if (!installPrompt) {
    alert('To install CodeJourney, open the live HTTPS website in Chrome or Edge, then choose Install app from this button or the browser menu.');
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
});

window.addEventListener('appinstalled', () => {
  installButton.textContent = '✓ App installed';
  installButton.disabled = true;
});

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
