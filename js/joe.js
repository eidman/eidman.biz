$(document).ready(function() {
  const data = {
    projectName: 'Joe',
    projectDescription: Lorem,
    navbar: {
      link: 'jane.html',
      linkName: 'Jane'
    }
  };

  const compiled = projectTemplate(data);
  const $html = $(compiled);
  $('section').append($html);
});
