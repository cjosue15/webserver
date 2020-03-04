const hbs = require('hbs');

// HBS helpers

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', texto => {
  let palabras = texto.split(' ');
  palabras.forEach((p, idx) => {
    palabras[idx] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  });

  return palabras.join(' ');
});
