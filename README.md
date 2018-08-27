# PWA boilerplate
> Hyperapp starter kit with development on steroids

```
// Clone project
git clone git@github.com:loteoo/hyperapp-boilerplate.git

cd hyperapp-boilerplate

npm install     // Install dependencies
npm start       // Dev server + live reload
```

```
npm run build   // Build for production
```



## Starter kit for quickly starting Hyperapp projects with a supercharged developer experience.

ES6 + babel stage-3 & PostCSS + rucksackcss via Parcel

[Language details below](https://github.com/loteoo/hyperapp-boilerplate#syntaxes--language-specifications)



*Proposed project structure (to be changed according to your project's needs)*

```
├── _templates/                    # Hygen code generators
├── public/                        # Compiled static files (parcel output)
├── src/                           # Application source code
│   ├── actions/                   # Global actions
│   ├── icons/                     # Application's icons (favicon, touch icon...)
│   ├── state/                     # Initial app state
│   ├── utils/                     # Generic utility functions
│   ├── views/                     # Application views
│   │   ├── {ComponentName}/           # Vertically separated components
│   │   │   ├── {ComponentName}.js
│   │   │   ├── {component-name}.css
│   │   │   └── {other}.{svg,png,jpg,gif}
│   │   ├── common/                # Utility components, ex: text input, modal container, etc.
│   │   ├── pages/                 # Top level components, generally triggered by a router
│   │   ├── index.js               # Root view
│   │   ├── global.css             # Global css
│   ├── app.js/                    # Hyperapp instantiation
│   ├── index.html                 # Parcel entry
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

#### JS 
The parcel setup allows for JSX for declaring your views. (recommended)
Babel stage-3 plugins are enabled.
Showcase:
```

// Component
const FooBarComponent = (
  props,
  children,

  // Props deconstruction while keeping the full object
  {
    items
    very_long_title: title, // Rename an prop
    first_name,
    last_name,
  } = props,

  // Computed variables in function declaration
  total = items.length || 0
  full_name = first_name + last_name

  // View
  ) => (
  <Component {...props}> // JSX spread attribute
    <h2>{title}</h2>
    <p>By: {full_name}</p>
    <div class="inner">
      {children}
    </div>
    {items.map(item => <Item {...item} />)}
    <p>Total: {total}</p>
  </Component>
)


// Indexed nested setter action
const actions = {
  setArticlesData: ({id, article}) => state => ({
    articlesData: {
      ...state.articlesData,
      [id]: article
    }
  })
}


// Object rest spread
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };


```
https://babeljs.io/




#### CSS 
PostCSS is ready to go, with nested syntax & rucksack css enhancements.
An opinionated, 'best practices' css reset is included as well (sanitize.css)

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



---



Original repo:

https://github.com/loteoo/hyperapp-boilerplate


> Disclaimer:
This is an advanced and opinionated setup. 
If you're getting started with Hyperapp or JS in general, this might not be for you.
