# Introduction
Software requirements take the user requirements and translate them into detailed specifications outlining the functions, features, and constraints of a software system.

# Software Requirements

## User Input

### User Input for Task Management
- User input shall trigger a post request when a task is created with a title and an optional description.
- User input shall trigger a post request when a task is updated with a new title and/or description.
- User input shall trigger a post request when a task is deleted within the allowed time frame (before 12:00 pm for the current day).
- User input shall trigger a post request when a task is marked as completed.
- User input shall trigger a post request when a task is abandoned after 12:00 pm for the current day.
- User input shall receive a confirmation message when an action (e.g., add, update, delete, complete, abandon) is successfully performed on a task.
  
### User Input Errors
- User input shall receive an error message if a task is attempted to be added for the current day after 12:00 pm.
- User input shall receive an error message if a task is attempted to be edited for the current day after 12:00 pm.
- User input shall receive an error message if a task is attempted to be deleted for the current day after 12:00 pm.
- User input shall receive an error message if a task is attempted to be marked as completed after the task's allotted 24-hour period (past 12:00 am the following day).
- User input shall receive an error message if a task is attempted to be abandoned before the cutoff time (12:00 pm for the current day).

### User Input Redirection
- User input shall trigger a redirect to the statistics page when the "statistics" button is selected.
- User input shall trigger a redirect to the signup page when the "sign up" button is selected.
- User input shall trigger a redirect to the login page when the "login" button is selected.
- User input shall trigger a redirect to the logout page when the "logout" button is selected.

## Database
- Database shall have a table called *users* that holds each user's username and password (hashed and salted for security using bcrypt or Argon2).
- Database shall have a table called *tasks* to store each unique task, including task-specific statistics, and include a user_id foreign key to associate tasks with users. This table shall store the title, description, and status of the task.
- Database shall have a table called *task_completions* that logs the time and date each time a task is completed. This table shall include a user_id foreign key and task_id foreign key.
- Database shall have a table called *statistics* that tracks the number of task completions, non-completions, and other metrics. This table shall be updated automatically based on the user's actions (completion, abandonment, etc.).
- Database queries shall use prepared statements to prevent SQL injection.

## Server Side
- Server side shall update the *tasks* table's *completions* column when a task is successfully completed before 12:00 am the following day.
- Server side shall update the *tasks* table's *incomplete* column if a task is not completed by 12:00 am the following day.
- Server side shall update the *tasks* table's *incomplete* column if a task is abandoned after 12:00 pm for the current day.
- Server side shall update the *task_completions* table's *date* and *time* columns with the date and time a task was completed.
- Server side shall track task statistics, including the total number of tasks completed, abandoned, and remaining for each user.
- Server side shall provide the necessary data to populate the home page’s task display, daily statistics, and timer countdown to the next day’s tasks.
- The server shall handle errors gracefully by returning appropriate HTTP status codes and user-friendly error messages.
- Server-side operations shall be transactional where necessary to ensure consistency (e.g., task updates, user registrations).

## User Interface

### Home Page
- The home page shall have a login button and a signup button.
- The home page shall have a statistics button that redirects the user to the statistics page.
- The home page shall have a central display for tasks, which should stack tasks on top of each other.
- The home page shall allow the user to enter a new task, with fields for the title and an optional description.
- The home page shall display daily statistics, such as completed tasks, abandoned tasks, and pending tasks.
- The home page shall display a timer that counts down to the next day's tasks, starting at 12:00 am.
- The home page shall be responsive, ensuring usability across devices (mobile, tablet, desktop).

### Statistics Page
- The statistics page shall have a filter to select a date range of tasks for analysis (e.g., "today," "last week," "custom date range").
- The statistics page shall display the number of completions for each unique task within the selected date range.
- The statistics page shall display the number of non-completions for each unique task within the selected date range.
- The statistics page shall have a line chart for each unique task that shows the time of day a task was completed.
- The statistics page shall have a summary of statistics for each unique task, which will include:
  - Total completions
  - Total non-completions
  - Average completion time
  - Future iterations may add more statistics (e.g., completion success rate, average task duration).
- The statistics page shall allow users to view detailed historical task performance over time.

### User Interface Components
- The user interface shall use **React-Bootstrap** for interface components like buttons, forms, modals, and alerts.
- The UI shall display meaningful feedback when a user creates, updates, deletes, completes, or abandons a task (e.g., success or error messages).
- The UI shall follow basic accessibility principles, ensuring keyboard navigation and screen reader compatibility.

## Authentication and Security
- User authentication shall be implemented using secure login procedures with hashed and salted passwords using bcrypt.
- User input shall be sanitized and validated to avoid common vulnerabilities like SQL injection or cross-site scripting (XSS).
- User sessions shall be managed securely, with tokens stored in HttpOnly cookies for session management, and sessions shall expire after a period of inactivity.
- Rate limiting shall be applied to prevent brute force attacks on login endpoints.
