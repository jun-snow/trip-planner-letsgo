## Trip Planner - Let's Go

This is the front end component of the Trip Planner application.
Hosted on [AWS S3](http://trip-planner-letsgo.s3-website-us-west-1.amazonaws.com/).

**Language/Frameworks/Libraries used:**
- Javascript
- React
- Redux
- SCSS
- CSS modules


**Users can:**
- Add/edit/delete their trip information
- Create a todo list for each trip
- Filter trip title, destination, and todo items using the search bar
- Filter trips based on category with the radio menu

**Design decisions:**
- At first I thought about using Context and Hooks for state management, but I decided to go with Redux as it is optimized out of the box.
- Used SCSS, CSS modules, and flexbox for styling. CSS modules makes naming CSS classes easier due to its local scope.
- Reminder function was left out due to time constraints.
