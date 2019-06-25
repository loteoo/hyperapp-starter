<p align="center">
  <a href="https://github.com/jorgebucaran/hyperapp">
    <img alt="Hyperapp non-official logo" src="https://raw.githubusercontent.com/loteoo/hyperapp-boilerplate/master/src/assets/icon-180x180.png" width="80" />
  </a>
</p>
<h1 align="center">
  Hyperapp 2.0 boilerplate
</h1>

Starter template to quickly build front-ends using Hyperapp with a modern configuration and best-practices in mind.  


## 🚀 Quick start: 
[Click here to use this template](https://github.com/loteoo/hyperapp-boilerplate/generate), or run these commands:  
```
# Clone project
git clone https://github.com/loteoo/hyperapp-boilerplate.git

cd hyperapp-boilerplate

npm install         # Install dependencies
npm start           # Dev server + live reload
```


```
npm run build   # Build for production and generate service worker
```
Or use a [.zip download](https://github.com/loteoo/hyperapp-boilerplate/archive/master.zip)


## Features
- Uses [Parcel](https://parceljs.org/) for compilation, dev server and hot module reloading.  (It's  blazing fast, easy to use and reliable)
- Works offline out of the box using [workbox](https://developers.google.com/web/tools/workbox/) to generate service workers and precache application files
- PWA/SPA ready with a default web app manifest
- Sane CSS defaults using [sanitize.css](https://csstools.github.io/sanitize.css/), a best-practices CSS reset
- Uses the [Standard](https://standardjs.com/) JavaScript style guide with eslint  
-  Automatic import of the `h` function (say goodbye to that `h` import!)
- [JSX](https://reactjs.org/docs/introducing-jsx.html) and all of the ES6-7-8-9 goodies are ready to go thanks to Parcel.


## File structure
Proposed folder structure as your project grows. Adapt it to your needs.  

```
├── dist/                             # Compiled static files (parcel output)
├── src/                              # Application source code
│   ├── app/                          # App files
│   │   ├── pages/                    # Pages are top level components, triggered by a router
│   │   ├── components/               # Hyperapp components
│   │   │   ├── {ComponentName}/      # Advanced component with multiple files
│   │   │   │   ├── actions.js        # Local actions
│   │   │   │   ├── index.jsx         # Exported view
│   │   │   │   ├── init.js           # Initial local state
│   │   │   │   ├── style.css         # Component styles
│   │   │   │   └── other.svg         # Other related files (which are only used by the component)
│   │   │   └── {ComponentName}.jsx   # Single file component
│   │   ├── actions.js                # Global actions
│   │   ├── init.js                   # Initial app state
│   │   ├── utils.js                  # Misc utility functions
│   │   └── view.jsx                  # Root view
│   ├── assets/                       # Global application assets (favicon, fonts...)
│   ├── app.js                        # Hyperapp instantiation
│   ├── global.css                    # Global styles
│   ├── index.html                    # Parcel entry
│   └── manifest.webmanifest          # Web app manifest
├── static/                           # Files to be copied in dist folder
├── ...
...
```





---  






### To-do list demo app:
Basic CRUD actions with hyperapp 2.0  
https://github.com/loteoo/hyperapp-todolist




### FAQ:

> How do I deploy my app?
By default, apps using this boilerplate can be considered *static sites*, which means you can deploy for free on services like Netlify and Github Pages.

> Why so many commits?
Even is there are not that many files in this boilerplate, it's configuration has been meticulously though over and over to make sure you hit the ground running and focus on your idea.


---  




