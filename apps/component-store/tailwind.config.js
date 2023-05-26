const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        jason: {
          light: 'hsl(240deg 90% 75%)',
          dark: 'hsl(240deg 90% 25%)',
          med: 'hsl(240deg 90% 55%)',
        },
      },
    },
  },
  plugins: [],
};
