# Swapi React App
- This is a practice project where I applied what I recently learn about React
- It fetchs different kinds of objects from the **Star Wars api** [swapi.dev](https://swapi.dev), and displays them in a table. The container is the same in all the views, the only thing that changes is the *state* (each kind of state referring to a certain object), that is passed from the **React router** via the props to the main page.
  - Those *possible states* are stored [here](/src/entities/objectOfEntities.js) and if you want other object to **appear in the app** you just have to add it there.

- The option to **track objects by its id** is disabled because the page is loaded with https by default in heroku, and for some reason the call to the *swapi* returns a request in which the header contains the property `location` with a url that has "http" instead of "https".



