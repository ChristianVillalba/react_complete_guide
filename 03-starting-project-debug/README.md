# React: Debugging React Apps

Notes from:     
[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)  
Instructor: Maximilian Schwarzmüller 

## Description

In this module, I learnt how to debug React apps, in other words,     
how to find and fix errors.

The starting project is an altered version of the previous module:     
[A Tasks List App (02-starting-project) ](https://github.com/ChristianVillalba/react_complete_guide/tree/main/02-starting-project)      
And I found and fixed the problems in the project.

## What I have learnt with this project
* Understanding Error Messages
* Debugging  
* Analyzing Code Flow and Warnings 
* Using React DevTools

---
---

# Notes:

## Understanding Error Messages

Sometimes when you're writing code, we get errors.       
Errors which the React development process catches and froze at you.

Example: Compiling Error

We will recevie a **Message** telling us what the problem is and maybe a suggestion to solve it.    
We also get a hint at the **file**,       
And the **line of code** this error is stemming from.    
We even see the **code snippet** below the message.       
Even our **IDE can detect some errors** (It won't detect all the React Errors, though).     

Some Errors are easy to fix,       
even without fully understanding the processes involved.      
Because the error message clearly tells where it is and how to solve it.      

Now other common mistakes that are often made are, for example       
typos or incorrect names.

**Conclusion:** when receiving an Error Message:        
Don't panic,       
Read Error Messages,         
Look at the line or the file it's coming from,          
Look at the code snippet it might be showing you,       
Look at the problematic code snippet,      
Look at the error message,      
Connect the error message to the snippet it's pointing at,      
... and you will be able to solve most errors.

## Analyzing Code Flow and Warnings 

Other kind of errors won't lead to a compilation errors         
and won't show up on the main screen nor the terminal.        
So how can we now solve such errors?

Example: unwanted behaviour in the deleteion functionality:

Let's first of all go to the place where we have that deletion logic (App.js)       
In this case, the deletion logic in general it's working but it deletes the wrong item.       

Maybe the ID is wrong.      
So maybe we should go to the place where the IDs are generated and assigned (addGoalHandler).   
Here there is (was) a problem: a hard code id: "goal1"

Previously here we used math random to derive a pseudo unique ID.         
Now with the hard-coded string there is a logical error here:                 
**The Error** is that I assigned **the same ID to all goals**.        
So therefore they're **no** longer **distinguishable by ID**.       

That's a **logical mistake**         
and I was able to narrow it down by going through that complete **chain of events**.

This is other way that could help us:       
When adding a Goal Item, lets look at the console:      
We recevied some **warnings and errors** that are thrown by the library       
which don't crash the whole application necessarily.       
The warining states that we have two children with the same key.         
This is implicity related to our deletion problem,        
because if we got two children with the same ID (and same key)        
then we seem to have an error in our code (that will cause problems later on).       

In the **warning** we receive, we can even see that "goal1",         
the hard-coded key/id is the **problem**.

## Debugging using Breakpoints

We have the problem that we have the hard-coded ID.       
Let's say we didn't use any of the other two approaches.          
We overlooked that warning,         
and we don't know why it's behaving incorrectly.            

If you can't find the error or if you just prefer this approach:        
Inspect > Sources      
That includes your JavaScript code.    

This React development process, (this NPM start script in our Terminal),      
pushes code to the browser that is executable by the browser.       
But it also gives the browser extra information     
which the browser DevTools are able to pick up          
to allow us to actually debug our code in the raw form we wrote it in.  

So this React development process, gives the browser a bridge,      
between the code that runs in the browser and the code we wrote.       
and we can access this code here in the **sources tab**,

And then we could always dive into the different parts that you wanna analyze,        
and add a **Breakpoint** (rigth click on the line of code),        
In this case, that _deleteHandler_ function       
which is triggered when we click on the list item.      

Once you add such a **breakpoint**,      
when execute the action that triggers that code part where the breakpoint is placed,      
The code execution stops once it reaches that break point line.    
And now, we can step through our code step by step.     

In this case, we have a problem when when we try to delete an Item,    
So we add a Breakpoint to onDelete method in CourseGoalItem.js ,       
When we call this method, that means, when we try to delete an Item,     
The Execution will stop there and we can manually go to the next function that will be triggered.     

And you can also hover over variables here to see the values that are currently stored in them.      
in this case, lets go to the next function triggered: _deleteItemHandler _
if we hover on **goalId** we will see "goal1", our **hard-coded key/id**. 

To finish our debugging cycle (debuggind this item) we can now "resume script execution",       
and simply try this again and click on the next goal (item),        
and see that here we have the same goalId as before.       
if we have to same ID on two different goals when I clicked them,       
that seems to be the problem why the wrong goal was deleted.

We should dive back into the code where we actually add goals         
because that is where we set our IDs.       

So this is how we can use the **breakpoints** to step for our codes step by step      
and inspect values stored in variables and so on       
to find out why something behaves the way it does behave.      

**Breakpoints** are another useful tool for analyzing our code, for understanding it,       
and for finding and fixing errors

## React DevTools

**React Dev Tools**: they're a browser extension, which we can add to the browser (Chrome is recommended).          
You can simply search for **React Dev Tools** and you should find an entry here on chrome.google.com        
In our browser dev tools, we'll have two new tabs: Components and Profiler        

### Components

In the browser, we got the **Elements Tab** and there we see the entire DOM,        
that is implied by our Components.         
So that can also be useful for debugging our DOM and our UI.           

In the **Components** Tab we only see React Components and the Components structure,        
that is responsible for this UI output.         

We can click on the components and get more information about them:

#### Props
Example: _CourseGoalItem_ Component, we can see **a list of all props** that it's getting,       
including the **children props**, all the content passed between the opening and closing tag.       

#### Rendered by
We can  see which Components were responsible for **rendering** this.        
And these Components are ordered, depending on how close they are.        
The top most Component, is the Component which directly rendered _CourseGoalItem_.        
And the further down we go, the further away that Component is, in the main Component tree.         
In this case: _CourseGoalItem_ was rendered by the **CourseGoalList** that was rendered by **App**  

If we  CourseGoalList or App, we're taken to that Component.

#### Source

We also see the source code, where we can find information about the _CourseGoalItem_ .

#### Other Tools

We can also search for a Component in the Search Bar.     
And we can also configure what we see in the DevTools:     
The general theme, how it should be displayed and in general, we can play around with the settings.      

#### Hooks

The Components that use Hooks such as _CourseInput_, will show, not only the props,           
but also see the hooks that are being used here.        
In this case we are using two state Hooks.       
And here we can see and also change the current State.       
We can change the State here and it really will have an effect on the UI.








