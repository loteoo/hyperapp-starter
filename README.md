# hyperapp-boilerplate
> Hyperapp PWA boilerplate

```
// Clone project
git clone git@github.com:loteoo/hyperapp-boilerplate.git

npm install     // Install dependencies
npm start       // Dev server + live reload
npm run build   // Build for production
```



├── seeds/                         # Reference and seed data for the database
├── src/                           # Application source code
│   ├── common/                    # Shared Hyperapp/React components and HOCs
│   │   └── {component}/           # Any component name or reusable block
│   │       ├── {component}.js     # Or {component}.browser.js + {component}.node.js
│   │       ├── {component}.test.js
│   │       ├── {component}.css
│   │       ├── {component}.i18n.json
│   │       ├── {image}.{svg,png,jpg,gif}
│   │       ├── package.json       # Allows to use require('component') instead of require('component/component') and import different files for browser and server when necessary
│   │       └── README.md          # If necessary
│   ├── fonts/                     # Custom web fonts
│   ├── icons/                     # Reusable svg icons
│   ├── pages/              




In a nutshell:

Parcel bundler


PostCSS => nested, cssnext, autoprefixer, rucksack



```
npm run build   // Build for prod
```


Generate components like this:
```
.\node_modules\.bin\hygen component new --name 'my component'
```
