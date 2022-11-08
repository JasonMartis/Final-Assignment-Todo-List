"use strict";

// REQUIREMENTS:

// .As a user, I want to see an input field in which I can enter my task.

// .As a user, I can press a button with the text "Add Task" so that your completed task is added to the list.

// .As a user, when I clicked the add button, I see the task appear in my task list.

// .Delete task: As a user, I can click in the task list on an icon of a trash can, to the right of the task,
//  which removes the task from my task list.

// API REQUIREMENTS:
// GET: Get the (initial) list of tasks from the database.
// POST: Update the task list with 1 new task. Send only {description: "blah", done: false}
// DELETE: Delete a task from the database. Use the id you get back as an identifier.
// Create a file called api-client.js as you have learned lately for all your requests.

// EXTRA BONUS:
// Additional requirements:

// .Cross out a task: As a user, I can click on a checkbox in the task list, to the left of the task, which crosses the text of the task.
// .As a user, I want to be able to click on my task and change the text.

// Additional API requirements (related to the above):

// .PUT: update an existing task the property done or not done.
// .PUT: update an existing task with the PUT method.

// TIPS
// .In this project, you will add event listeners to HTML elements added by Javascript.
//  If you want to link the event listener before the element is added, this fails.
//  This requires a different approach! Make sure you don't assign your event listeners until last, or do this: https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
// .You don't need any scripts, no authentication, and nothing extra to call the API. fetch is your friend!
// .fetch can do more than just fetch data; it can also send and update data.
//  Check this documentation on how to do that: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// .A method like getElementsByClassName returns an HtmlCollection.
//  This looks like an array in your console, but it's not! You can convert this to an array and then loop over it.
