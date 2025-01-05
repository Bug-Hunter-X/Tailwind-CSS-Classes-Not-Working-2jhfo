```javascript
//Correct way to include tailwind directives
//Install Tailwind
npm install -D tailwindcss postcss autoprefixer

//Initiate tailwind
.
.
.

//Add tailwind directives to your css file
@tailwind base;
@tailwind components;
@tailwind utilities;

//update your css build process to include tailwind directives 
//....
```