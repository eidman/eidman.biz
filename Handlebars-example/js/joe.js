$(document).ready(function() {
  const data = {
    firstName: 'Joe',
    lastName: 'Shmo',
    age: 21,
    navbar: {
      link: 'jane.html',
      linkName: 'Jane',
    }
  };

  const compiled = helloTemplate(data);
  const $html = $(compiled);
  $('section').append($html);
});
