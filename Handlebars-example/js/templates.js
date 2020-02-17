const helloTemplate = Handlebars.compile(`
  <div>
    <a href='{{navbar.link}}'>{{navbar.linkName}}</a>
    <h3>This says my name: </h3>
    <p>Hello, My name is {{firstName}} {{lastName}}</p>
    </p>My age is: {{age}}</p>
  </div>
`);
