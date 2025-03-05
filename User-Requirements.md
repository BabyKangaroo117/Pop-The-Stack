# Introduction
The user requirements for a software project contain the needs, expectations, and preferences of the people who will use the system. 

# Requirements
## User input
- A user shall enter a task with a title and optional description
- A user shall remove a task within a 24 hour period
- A user shall be able to update a tasks title and description
- A user shall access task statistics
- A user shall sign up with a valid email and password
- A user shall login with a registered email and password

## Task

### Registration
The registration state is when tasks are added for the current day and optionally the following day.
- A task shall be added for the current day between 12:00 am till 12:00 pm
- A task may be added for the following day
- A task shall have a delete option during initial setup time (this would not count towards stats)
- A task shall allow the title and description to be edited

### Active
The active state is when tasks can no longer be added for the current day
- A task shall only persist for the current day from 12:00 am to 12:59 pm
- A task shall have an option to mark as completed
- A task shall have an option to abandon after 12:00 pm for the current day (this would be considered in-complete)

## Statistics
- Statistics shall track the tasks that were completed
- Statistics shall track the tasks that were not completed
- Statistics shall track the time of day a task was completed

## User Interface
### Home Page
- Home page shall have a login and signup button
- Home page shall have a statistics button
- Home page shall have a central display for tasks
- Home page shall stack tasks on top of each other
- Home page shall have an input for user to enter tasks
- Home page shall display daily statistics
- Home page shall display a timer that countsdown to next days tasks

### Statistics Page
- Statistics page shall have a filter to select a date range of tasks
- Statistics page shall display the number of completions for each unique task
- Statistics page shall display the number of non-completions for each unique task
- Statistics page shall have a line chart for each unique task that shows the time of day a task was completed
- Statistics page shall have a summary of statistics for each unique task that can be added to in future project iterations.
