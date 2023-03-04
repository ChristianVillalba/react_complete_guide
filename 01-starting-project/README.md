# React: Expenses Tracker App

Notes from:     
[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)  
Instructor: Maximilian Schwarzmüller 

## Description

This project is an expense tracker created using React.

We can see our expenses, showing the concept, the date and the amount.        
The expenes can be filtered by year.        
There is a chart, divided by months that shows in a visual our expenses.        
We can also add a new expenses using a Form        
When a new expense is added, it shows up and the chart updates.        

## What I have learnt with this project
* JSX
* React Components
* Props
* Adding CSS
* Styling React Components
* Adding JavaScript Logic to Components
* Composition: Children props
* Listening to Events & Event Handlers
* State
* Hook: useState
  * Working with multiple states
  * One single state affecting multiple components
  * States that depends on other states
* Form Inputs
  * Using State with Form Inputs 
  * Handling Form Submission
* Two-way binding React
* Child-to-Parent Component Communication (Bottom-up)
  * Props: to pass data from parent to child (components)
  * Pointers: to pass data from child to parent       
  eg: data generated in a form (child component)      
  what need to be passed to a parent component
* Passing data betweeen Components
  * From parent to child (Pass state data via props)      
  * From child to parent (Lifting the state up)        
  * We can not skip intermediate components
* Difference: Controlled & Uncotrolled Components
* Difference: Stateful & Stateless Components
* Rendering a List of Data
  * Using Stateful List
* Key Value
  * Useful when rendering a List of data
  * It helps React to identify the individual items
  * You need to set a **unique value per item**
  * Index as key: (discouraged to use) it isn't directly attached to the content of the item
  * Databases use unique id's 
* Conditional Renderig
* Dynamic Styles
  
---

## Notes

* React
  * Building complex, interactive and reactive user interfaces. 
  * Declarative Programming:
    * Define the desired target (state) and React will figure out the JS DOM instructions 
    * We are declaring how User Interface should look under differnt conditions dependent upon the state 
* React Components
  * Combinations of HTML, CSS & JS
  * Split chunks of code into multiple smaller functions
  * Reusability
    * Don't repeat yourself    
  * Separation of Concerns
    * Don't do too many things in the same place (function)
* Expressions in JSX: Outputting Dynamic Data
  * Dynamic Data: 
    * Not hard coded  
    * Received (eg: user-form or database) and then output it dynamically 
  * { } Curly Braces
    * Allows to run JS Expressions
    * The expression inside can point to a variable or const
      * The expression will retrieve the value from that variable/constant
      * A value Object will crash our app
        * eg: Date Object can't be rendered as text ( JS String >> HTML)
        * It must be converted to string first using the method: `toISOString()`
        * eg: 
        ```javascript 
        const myNewDate = new Date(2023, 2, 25); 
        ...
        <h2>{myNewDate.toISOString()}</h2>
        ```
* Props (Properties)
  * HTML Elements have attributes, React Components can have "custom attributes": **props**
  * Props make our components reusable  
    * Components can't just use data stored in other components
    * We can pass data between components by adding an attribute: **props**
  * We can use Curly Braces `{}` to pass values to attributes-props
  * Passing **props** as parameter in our **Component**
    * One parameter will be an object which holds all the received attributes as properties
    * Objects: key-value pairs `title: beer`
    * Key: the attribute name
    * Values the values of those attributes
* Adding JavaScript Logic to Components
  * Example: Formatting a Date 
  * [The toLocaleString() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
  * [Everything You Need to Know About Date in JavaScript](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/) > Formatting a date
  ```javascript 
        // Creating the variables:
        const day = props.date.toLocaleString("en-GB", { month: "2-digit" });
        const month = props.date.toLocaleString("en-GB", { month: "long" });
        const year = props.date.getFullYear();
        ...
        // Injecting the values
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
        ```
* Splitting Components
  * There is no hard rule when to build a new component
  * Every component should focused on one core task
  * We must keep every component on its own relatively small and manageable
* Composition
  * The approach of building an user interface from smaller building blocks
  * In order to avoid repetition, we can extract the common values. eg: styles 
  * Some components are configured through props
  * We can also pass content between the opening and closing tags of our components:
  * `<div>{props.children}</div>`
    * **children** is a reserved name
    * It will always be the content between the opening and closing tags of your custom component.
    * All the default HTML components supports className for adding CSS classes
    * Custom Components only support what you tell them to support.
    
     ```javascript
    function Card(props) {
        const classes = "card" + props.className;
        return (
          <div className={classes}>
              {props.children}
          </div>
        );
    }
    export default Card;```
  
  * Complex Wrapper Components which might have a more complex JSX structure
  * Being able to extract components allows:  
     * Save a lot of code duplication 
     * Keep our other components clean
* Closer look at JSX
  * Developer Tools > JavaScript code
  * Looks different to what we wrote (JSX code isn't supported by the browser)
  * In package.json, we've got dependencies, two are related to React:
     * React and React-dom
     * React-dom is imported in the index.js file
     * Modern React project don't need React imports
     * React is still being used when use JSX code
* Organizing Components Files 
  * Big projects: Organize components into sub folders
  * Remember to update the imports
  * It's up to you how to organize them.
  * You and any team members Should be comfortable working with these files.
* Alternative Function Syntax:
  * Two ways to create Components:
  * `function MyComponent(props){}`
  * `const myComponent = (props) => {}`
  * It's 100% optional. It doesn't offer any benefits
  * [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* Events Listeners and Event Handlers
  * Some **events** are only available on specific elements 
  (based on default DOM behavior)
  * React exposes the default events as props which start with on
  * [HTML Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
  * React needs CamelCased Event Attributes eg: onclick > onClick
* State
  * State is actually not a React specific concept but it is a key concept in React  
  * By default, if a variable changes, React ignores it.
  * We add state to data that should result in any component being re-evaluated
  * To add **state** we use useState, it is a so-called **React hook**
* React hooks
  * They start with the word "use" in their name
  * All these **hooks** must only be called inside of **React component functions**

---
---
