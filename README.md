# hyperapp-boilerplate
> Hyperapp PWA boilerplate

```
// Clone project
git clone git@github.com:loteoo/hyperapp-boilerplate.git

npm install     // Install dependencies
npm start       // Dev server + live reload
npm run build   // Build for production
```


Disclaimer:
This is an advanced and opinionated setup. 
If you're getting started with Hyperapp or JS in general, this might not be for you.


## Starter kit for quickly starting Hyperapp projects with a supercharged developer experience.

ES6 + babel stage-3 & PostCSS + rucksackcss via Parcel
Language details below



Proposed project structure (to be changed according to your project's needs)

```
├── _templates/                    # hygen code generators
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







# Syntaxes / language specifications:

## JS 
The parcel setup allows for JSX for declaring your views. (recommended)
Babel stage-3 plugins are enabled.
Showcase:
```
const FooBar = (
  props,
  children,
  {
    items
    very_long_title: title,
    first_name,
    last_name,
  } = props,
  total = items.length || 0
  full_name = first_name + last_name
  ) => (
  <Component {...props}>
    <h2>{title}</h2>
    <p>By: {full_name}</p>
    <div>
      {children}
    </div>
    {items.map(item => <Item {...item} />)}
    <p>Total: {total}</p>
  </Component>
)
```


## CSS 
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


