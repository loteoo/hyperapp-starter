<p align="center">
  <a href="https://github.com/jorgebucaran/hyperapp">
    <img alt="Hyperapp non-official logo" src="https://raw.githubusercontent.com/loteoo/hyperapp-starter/master/src/assets/icon-180x180.png" width="80" />
  </a>
</p>
<h1 align="center">
  Hyperapp starter
</h1>

Starter template to quickly build front-ends using Hyperapp with a modern configuration and best-practices in mind.  


## 🚀 Quick start: 
[Click here to use this template](https://github.com/loteoo/hyperapp-starter/generate), or run these commands:  
```
# Clone project
git clone https://github.com/loteoo/hyperapp-starter.git

cd hyperapp-starter

npm install         # Install dependencies
npm start           # Dev server + live reload
```


```
npm run build   # Build for production and generate service worker
```
Or use a [.zip download](https://github.com/loteoo/hyperapp-starter/archive/master.zip)


## Features
- [Parcel](https://parceljs.org/) for dev tooling
- CSS Modules
- Smart CSS defaults on top of [sanitize.css](https://csstools.github.io/sanitize.css/)
- [Standard](https://standardjs.com/) JavaScript style guide with a11y and prettier linting
- [JSX](https://reactjs.org/docs/introducing-jsx.html) ready to go
-  Automatic import of the `h` function (say goodbye to that `h` import!)
- Absolute imports (say goodbye to the `../../` hell)
- Type hinting and intellisense without typescript, thanks to the `jsconfig.json` file.
- PWA/SPA ready with a default web app manifest


## Live preview
https://hyperapp-starter-demo.netlify.com/



---  

### Absolute imports & intellisense  
![intellisense gif](https://user-images.githubusercontent.com/14101189/77218995-be4ecd80-6b07-11ea-84d2-75c3ec318b78.gif)  

### CSS modules typings  
To enable go in any JS file, open the command palette, type `> Select TypeScript Version`, pick `Use Workspace Version`  

![css-modules gif](https://user-images.githubusercontent.com/14101189/77218994-bdb63700-6b07-11ea-9ce5-efd8e84007c8.gif)

---


### To-do list demo app:
Basic CRUD actions with hyperapp 2.0  
https://github.com/loteoo/hyperapp-todolist




### FAQ:

> How do I deploy my app?   

By default, apps using this starter can be considered *static sites*, which means you can deploy for free on services like Netlify and Github Pages.



### Need routing, code splitting and pre-rendering out of the box?   

Use [this](https://github.com/loteoo/hyperstatic-starter) instead!


---  




