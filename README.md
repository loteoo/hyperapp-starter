# Hyperapp 2.0 PWA/SPA boilerplate
*Hyperapp starter kit with development on steroids*  

## Installation: 
```
# Clone project
git clone https://github.com/loteoo/hyperapp-boilerplate.git

cd hyperapp-boilerplate

npm install     # Install dependencies
npm start       # Dev server + live reload
```

```
npm run build   # Build for production
```


 
## In a nutshell
- Uses [Parcel](https://parceljs.org/) for compilation, dev server and hot module reloading.  (It's  blazing fast, easy to use and reliable)
- [JSX](https://reactjs.org/docs/introducing-jsx.html) ready  
- [Hygen](https://www.hygen.io/) code generators included for common use cases. (More to come!)  
- Precaching out works of the box using [workbox] to generate service workers
- PWA/SPA ready with a default manifest file
- Sane CSS defaults with [sanitize.css](https://csstools.github.io/sanitize.css/)



## File structure
Proposed folder structure as your project grows. Adapt it to your needs.

```
├── _templates/                       # Hygen code generators
├── public/                           # Compiled static files (parcel output)
├── src/                              # Application source code
│   ├── app/                          # Global app files
│   │   ├── common/                   # Utility components, ex: text input, modal container, etc.
│   │   ├── pages/                    # Pages are top level components, generally triggered by a router
│   │   ├── components/               # Vertically separated components
│   │   │   ├── {ComponentName}/      # Advanced component with multiple files
│   │   │   │   ├── actions.js        # Local actions
│   │   │   │   ├── index.jsx         # Exported view
│   │   │   │   ├── init.js           # Initial local state
│   │   │   │   ├── style.css         # Component styles
│   │   │   │   └── other.png         # Other related files
│   │   │   └── {ComponentName}.jsx   # Simple component
│   │   ├── actions.js                # Global actions
│   │   ├── init.js                   # Initial app state
│   │   ├── global.css                # Global "Theme" styles
│   │   ├── utils.js                  # Utility functions
│   │   └── view.jsx                  # Root view
│   ├── assets/                       # Global application assets (favicon, fonts...)
│   ├── app.js                        # Hyperapp instantiation
│   ├── index.html                    # Parcel entry & html frame
│   ├── ...
├── ...
...
```




## Code generators
(TODO: use enquired to ask questions and generate the corresponding component)
Generate new Hyperapp components like this:
```
hygen component new --name 'component name'
hygen page new --name 'page name'
```
Available generators are located in the _templates folder. Feel free to add some more or change the existing ones!

 
http://www.hygen.io/





### Hyperapp 2.0 TLDR:

State => Runtime data of your app, usually a javascript object.  
View => Pure function that maps the State of your app to a DOM representation (called virtual DOM), which will get rendered to the browser by hyperapp.  
Actions => Pure functions that receives the current State, some params, and returns the next State  
Subscribtions => Declarative wrappers around event listeners. They are aware of the State and can dispatch Actions.  
Effects => Declarative wrappers around side effects to interact with the outside world.  

Basically, use functional programming to describe an application and let Hyperapp bring it to life!  

https://github.com/jorgebucaran/hyperapp/




### To-do list demo app:
Basic CRUD actions with hyperapp 2.0  
https://github.com/loteoo/hyperapp-todolist


---  


https://github.com/loteoo/hyperapp-boilerplate

