# PWA boilerplate
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
This is an advanced and opinionated setup.  
If you're getting started with Hyperapp or JS in general, 
you can still progressively use it's features.



## In a nutshell

TypeScript with JSX & ES7  
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
│   │   ├── actions.ts              # Global actions
│   │   ├── app.ts                  # Hyperapp instantiation
│   │   ├── state.ts                # Initial app state
│   │   ├── style.css               # Global css
│   │   ├── utils.ts                # Utility functions
│   │   ├── view.tsx                # Root view
│   ├── components/                 # Vertically separated components
│   │   ├── common/                 # Utility components, ex: text input, modal container, etc.
│   │   ├── pages/                  # Pages are top level components, generally triggered by a router
│   │   ├── {ComponentName}/        # Advanced component example (sometimes, just a {ComponentName.tsx} file can be enough)
│   │   │   ├── index.ts
│   │   │   ├── actions.ts
│   │   │   ├── view.tsx
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
If TypeScript, JSX or ES7 sound alien to you, here's a preview:  
```

// Fictional component
const FooBarComponent = (
  props,
  children,

  // Props deconstruction while keeping the full object
  {
    items,
    very_long_title: title, // Rename an prop
    first_name,
    last_name,
  } = props,

  // Computed variables in function declaration
  total = items.length || 0,
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


// Example nested & indexed setter action
const actions = {
  addArticleToCache: ({id, article}) => state => ({
    articlesCache: {
      ...state.articlesData,
      [id]: article
    }
  })
}



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



---


https://github.com/loteoo/hyperapp-boilerplate

