function copyToClipboard(username) {
  const el = document.createElement('textarea');
  el.value = username;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Username "' + username + '" wurde in die Zwischenablage kopiert.');
}
