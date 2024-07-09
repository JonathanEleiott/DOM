# DOM (Document Object Model)

- allows programming languages to interact with the page
- each item on the DOM is known as a node

## Data flow

- initial load of the HTML
- user interaction
- change the data based on user interaction
- use the updated data to change the UI

## DOM Selectors

- ways we can grab nodes (elements) from the DOM
- document.querySelector('CSS Selector');
  - grabs the first element that matches the CSS Selector
  - single element
- document.querySelectorAll('CSS Selector')
  - grabs all of the elements that match the CSS Selector
  - array-like object (not exactly the same as a JS array)

- OLDER options
  - document.getElementsByTagName('tagName')
  - document.getElementById('id')
  - document.getElementsByClassName('className')

## DOM Manipulation

- document.createElement('elementName');
  - creates a new element
  - DOES NOT put the element on the page
- append
  - puts an element onto the page inside of another element

## Making a new array

- [...originalArrayName]
- spread operator

## Set Interval and Clear Interval

- setInterval -> used to repeatedly run code based on a passed in timer
- clearInterval -> used to stop a setInterval

## Events

- a signal that something has occurred in the browser
  - mouse click
  - button click
  - form submission
  - timer
  - page being loaded

## Event Listener

- addEventListener('eventName', (event) => { code })
- attaches an event to an event handler

## Event Handler

- a function that runs when a specified event is triggered
- event.target is the most specific (child) element that triggered the event

## Form Submission

- by default will refresh the page
- event.preventDefualt() stops the page from refreshing