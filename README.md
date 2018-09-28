# Hyperapp 2.0 PWA/SPA boilerplate
*Hyperapp starter kit with development on steroids*

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


> *Disclaimer:*  
This is an opinionated and advanced setup.  
If you're getting started with Hyperapp or JS in general, 
you can still progressively use it's features.



## In a nutshell

ES7 with JSX  
PostCSS with rucksack enhancements  
Code generators included for common use cases  
Uses Parcel for compilation, dev server, watcher with live reload, hot modules...  

[Language details below](https://github.com/loteoo/hyperapp-boilerplate#syntaxes--language-specifications)



*Proposed project structure (to be changed according to your project's needs)*

```
├── _templates/                     # Hygen code generators
├── public/                         # Compiled static files (parcel output)
├── src/                            # Application source code
│   ├── app/                        # Global app files
│   │   ├── actions.js              # Global actions
│   │   ├── app.js                  # Hyperapp instantiation
│   │   ├── state.js                # Initial app state
│   │   ├── style.css               # Global css
│   │   ├── utils.js                # Utility functions
│   │   ├── view.jsx                # Root view
│   ├── components/                 # Vertically separated components
│   │   ├── common/                 # Utility components, ex: text input, modal container, etc.
│   │   ├── pages/                  # Pages are top level components, generally triggered by a router
│   │   ├── {ComponentName}/        # Advanced component example (sometimes, just a {ComponentName.jsx} file is enough)
│   │   │   ├── index.js
│   │   │   ├── actions.js
│   │   │   ├── view.jsx
│   │   │   ├── style.css
│   │   │   └── {other}.{svg,png,jpg,gif}
│   ├── assets/                     # Global application assets (favicon, twitter card, touch icons, fonts...)
│   ├── index.html                  # Parcel entry
│   ├── ...
├── ...
...
```





Generate new Hyperapp components like this:
```
.\node_modules\.bin\hygen component new --name 'my component'
```
http://www.hygen.io/

> I also suggest you install hygen globally, it's awesome




## Syntaxes & language specifications:

### JS 
If JSX or ES5/6/7 sound alien to you, here's a preview:  
```

// Example component

const FooBarComponent = ({
    items,
    veryLongTitle: title, // Rename props
    firstName,
    lastName,
    ...rest
  },

  children,

  // Computed variables in function declaration
  total = items ? items.length : 0,
  fullName = firstName + lastName

  // View
  ) => (
  <Component {...rest}>
    <h2>{title}</h2>
    <p>By: {fullName}</p>
    <div class="inner">
      {children}
    </div>
    {items.map(item => <Item {...item} />)}
    <p>Total: {total}</p>
  </Component>
)


// Example actions:

// Sets a value in the state from an input
export const setInputValue = (state, ev) => ({
  ...state,
  inputValue: ev.target.value
})

// Update an item by it's key in a key-value map
const setCacheItem (state, item) => ({
  ...state,
  itemCache: {
    ...state.itemCache,
    [id]: item
  }
})

// Converts an array of objects with ids to 
// a key-value map of each objects by their ids 
// and also creates an array with the ids only
const setItems: (state, items) => ({
  ...state,
  itemsIds: items.map(item => item.id),
  itemCache: items.reduce((cache, item) => ({...cache, [item.id]: item.value}), state.itemCache)
})



```




### CSS 
PostCSS is ready to go, with nested syntax & rucksack css enhancements.
An opinionated, 'best practices' css reset is loaded in the starterkit as well  
[sanitize.css](https://github.com/csstools/sanitize.css)

ex:
```
.container {
  font-size: responsive;
  position: relative;
  > .inner {
    position: absolute 0;
  }
}
```
https://www.rucksackcss.org/






## Hyperapp 2.0 TLDR:

State => Data of your app  
View => Maps a given state to a vDOM  
Actions => Takes in a state, some params, returns a new state  
Subscribtions => Trigger actions from the outside  
Effects => Interact with the outside world  

Use functional programming to describe an application 
and let Hyperapp bring it to life

https://github.com/jorgebucaran/hyperapp/pull/726

---  


https://github.com/loteoo/hyperapp-boilerplate

