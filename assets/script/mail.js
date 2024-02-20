function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var subject = 'Kontaktanfrage von ' + name;
  var body = 'Name: ' + name + '%0D%0A';
  body += 'E-Mail: ' + email + '%0D%0A';
  body += 'Nachricht: ' + message;

  var mailtoLink = 'mailto:alexentwicklermail@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
}