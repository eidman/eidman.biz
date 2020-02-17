$(document).ready(function() {
  const data = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    navbar: {
      link: 'joe.html',
      linkName: 'Joe',
    }
  };

  const compiled = helloTemplate(data);
  const $html = $(compiled);
  $('section').append($html);
});
