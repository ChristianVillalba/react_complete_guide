# React: Expenses Tracker App

A project from:     
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
  * From parent to child  
  * From child to parent      
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
---

## Notes

Notes from:     
[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)  
Instructor: Maximilian Schwarzmüller 

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
      * State is separated on a per component instance basis
  * To add **state** we use useState, it is a so-called **React hook**
* React hooks
  * They start with the word "use" in their name
  * All these **hooks** must only be called inside of **React component functions**
* useState
  * Returns an array: 
  * The first value is the variable itself 
  * The second element is the updating function.
  * we can use **array destructuring** to store both elements in separate variables
  * `const [myVariable, updateVariable] = useState("InitialValue - Optional")`
* Form Inputs
  * Event Listener: **onChange**
    * It can be used for **all the inputs** 
  * **Event**: `console.log(event)`
    * We can see in the console the **target** & **the value**
  * **Target** fiel: Input + onChange + `console.log(event)` 
    * It points at the DOM Element for which the event occurred
    * The element will have many properties, one of them will be **value**
  * **Value** property
    * holds the current value of the input
    * It will always return an string , even if the value is a number or date
  * `event.target.value`
    * We can hold the **the value** of the specified **target** when some **event** occurs
* Working with Multiple States
  * We can call `useState("")` **only once**
  * To be used on multiple elements, they must be stored in variables
  * Multiple Sates Stored in Multiple Variables
    * ```javascript
      const[firstVariable, firstFunction] = useState("FirstInitialValue");
      const[secondVariable, secondFunction] = useState("SecondInitalValue");
      const[thirdVariable, thirdFunction] = useState("thirdInitalValue");
      
      const firstChangeHandler = (event) => {
        setFirstVariable(event.target.value)
      };
      const secondChangeHandler = (event) => {
        setSecondVariable(event.target.value)
      };
      const thirdChangeHandler = (event) => {
        setThirdVariable(event.target.value)
      };
      ```
  * One State storing Objects (an alterative)
    * ```javascript
      const [userInput, setUserInput] = useState({
        firstVariable:"" , 
        secondVariable:"" , 
        thirdVariable:"" , 
      });
      
      const firstVariableChangeHandler = (event) => {
        setUserInput({
        ...userInput,
        enteredFirstInput: event.target.value,
        })
      };
      const secondVariableChangeHandler = (event) => {
        setUserInput({
        ...userInput,
        enteredSecondInput: event.target.value,
        })
      };
      const firstVariableChangeHandler = (event) => {
        setUserInput({
        ...userInput,
        enteredThirdInput: event.target.value,
        })
      };
      ```
  * Spread Operator `...` necessary to keep data of the rest of variables when changing a particular one
    * It takes an object, pulls out all the key value pairs
    * Then, it adds them to the new object
    * And we can still override the targeted key value pair
  * By doing it like this, we ensure that the other values aren't thrown away, but are always a part of that new state
* Updating State that depends on the Previous State:
  * We should call the updating function and pass in a function to that function:
  ```javascript
    const firstVariableChangeHandler = (event) => {
        setUserInput( (prevState) => {
          return {...prevState, enteredFirstInput: event.target.value}
        }
      };
  ```
      
  * We call the `setUserInput` function and we pass an (anonymous) arrow function to it
  * That function will automatically be executed by React and it will receive the previous state `prevState`snapshot 
  * And it will return the new state snapshop
  * Reasons to use this method:
    * Reacts schedules state updates (it doesn't perform them instantly)
    * Theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot
    * `prevState` will guarantee that the state snapshot used will always be the latest state snapshot, keeping all scheduled state updates in mind
  * If your state update depends on the previous state, **use this function form**
* Handling Form Submission    
  * Default behaviour that we need to avoid: refresh page through submission
  * `event.preventDefault()` on the function that will handle the submission
  * Cleaning Inputs after submission:
    * Two way bindings: 
      * We can pass a new value back into the input.
      * In other words: we can **reset or change the input programmatically**.
        [inputs don't just listen to changes]
    * We add the **value** attribute
      * This will set the internal value property
      * We can set it to a new value
      ```javascript
        <input
          onChange={titleChangeHandler}
          value={enteredTitle}
          type="text"
        />
      ```
      * Now we don't just listen to changes in the input to update our state.
      * We also feed the state back into the input
      * So that when **we change the state**, **we also change input**.
      * The advantage is that when the form is submitted, we can call setEnteredTitle.
      * And set this back to an empty string (which also was our initial state).
      ```javascript
      // in the submitHandler function
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate(""); 
      ```
* Passing data betweeen Components
  * From parent to child
    * Pass data via props 
    * Props only pass data from parent to child.      
  * From child to parent 
    * Pass the data via pointers        
  * When passing data, We can not skip intermediate components
  * Example: Passing Data from Child to Parent:
    * We add a new prop to NewExpense: `onSaveExpenseData`
    ```javascript
    // NewExpense.js
    function NewExpense(props) {
      return <div className="new-expense">
        <ExpenseForm onSaveExpenseData /> 
        // onMyAction: (name convention) **value for this prop** is a **functions** that will triggered when something happens
      </div>;}
      ```
    * Now we need to define `onSaveExpenseData` function in this component using as a parameter the data entered using the form (ExpenseForm):
    ```javascript
     function NewExpense(props) {
       const onSaveExpenseData = (enteredDataExpense) => { // This function will need a parameter
         const expenseData = { // The object that we genereate using the submitHandler in ExpenseForm.js 
           ...enteredDataExpense,  // We extract the key: value pairs of that object adding them to our new obj (the funct param)
           id: Math.random().toString(); //We add a new id to the new created obj (we need to convert that to str)
         };
         console.log(expenseData); //Stil no database so lets use the console
       };
       return <div className="new-expense">
         <ExpenseForm onSaveExpenseData/>
       </div>;
      ```
     * We can add a pointer in `onSaveExpenseData` to `onSaveExpenseData`
     ```javascript
     <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
      ```
     * Now, the ExpenseForm Component, has a prop, onSaveExpenseData that receives onSaveExpenseData as a value
       * onSaveExpenseData is not executed there, it just points to the function that is passed to ExpenseForm (ExpenseForm.js)
       * We can use this function in our Custom component. We have to call the pass and function manually
     ```javascript
    // ExpenseFomr.js
    function ExpenseForm(props) {...  // ExpenseForm Component is receiving props from NewExpense
      const submitHandler = (event) => {
         ...
         props.onSaveExpenseData(expanseData); // the submitHandler, access and executes this function defined in NewExpsense.js
         // it passes expanseData as argument 
         ...
      ```
     * This is how you can communicate between components and how you can communicate up:
       * A child component, the ExpenseForm component here for example, 
       * Can communicate up to the parent component, the NewExpense component in this case
       * We can call a function in the new expense component and we can pass data as a parameter
  * Now we can continue passing data up to other Parent Component (App.js)
  ```javascript
    // App.js
    function App() { ...
      const addExpenseHandler = (expense) => {
        // logs to check if we receive the Data and where it is
        console.log("In App.js");  
        console.log(expenses);
      }
      return (
        <div>
          <h2>Expenses Tracker App</h2>
          <NewExpense onAddExpense={addExpenseHandler}/> // onMyAction = function pointer passed as argument 
          <Expenses items={expenses}/>
        </div>
      );
      ```
   * The pointer is on place, we can call the function in NewExpense.js
   ```javascript
     // NewExpense.js
     function NewExpense(props) {...
       const saveExpenseDataHandler = (enteredExpenseData) => {
         ...
         // We add here the function (as a value) that will be passed in App.js
         props.onAddExpense(expenseData); // Send data upstairs (App.js)
       }
       ...
      ```
* Lifting the State Up
  * We may generate (or fetch) data in a component but We might need that data in a different component.     
    Eg: data generated in a Form Component that must be added and displayed as an Expense Component (App Component in our case). 
  * There is no direct connection between sibiling components
  * We can olby communicate between parent-child (props) or child-parent (pointers)
  * To connect sibilings we need to use the closest parent component to access to both sibilings components     
    Eg: in our case, App.js have access to Expenses & NewExpenses Components 
  * In our application , we are lifting the state up from NewExpenses (Folder) to App, so it can be passed via props to Expenses (Folder)
    * The data is generated in ExpenseForm.js and passed to NewExpense.js so it can be lifted up to App
    * From App, It will be passed by props to Expenses (Folder) so it can be added and displayed as an Expense Item
  * The goal is to lift it up just as high as necessary 
* Controlled Component
  * a value which is used in the component is passed on to a parent component
  * Both the currently set value, as well as the function which handles the selected value, might be not part of that component 
  * eg: Expenses filter presents the DUI but the logic is on the parent compoent Expenses
* Unontrolled Component
  * We  
  


    
 

---
---
