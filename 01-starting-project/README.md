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
        * eg: `const expenseDate = new Date(2023, 2, 25);` `<h2>{myNewDate.toISOString()}</h2>`
* Props (Properties)
  * HTML Elements have attributes, React Components can have "custom attributes": **props**
  * Props make our components reusable  
    * Components can't just use data stored in other components
    * We can pass data between components by adding an attribute: **props**
      
    


---
---
