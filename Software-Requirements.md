# Introduction
Software requirements take the user requirements and translate them into detailed specifications outlining the functions, features, and constraints of a software system.

# Software Requirements

# User Input

## User Input for Task Management
- User input shall trigger a post request when a task is created with a title and description
- User input shall trigger a post request when a task is updated
- User input shall trigger a post request when a task is deleted
- User input shall trigger a post request when a task is completed
- User input shall trigger a post request when a task is abandoned
- User input shall recieve a confirmation message when an action is successfully performed on a task

### User Input Errors
- User input shall recieve an error message if a task is attemted to be added for the current day after 12:00 pm
- User input shall recieve an error message if a task is attempted to be edited for the current day after 12:00 pm
- User input shall recieve an error message if a task is attempted to be deleted for the current day after 12:00 pm

## User Input Redirection
- User input shall trigger a redirect to the statistics page when selected
- User input shall trigger a redirect to the signup page when selected
- User input shall trigger a redirect to the login page when selected
- User input shall trigger a redirect to the logout page when selected

# Database
- Database shall have a table called *users* that holds each user's username and password (hashed and salted for security)
- Database shall have a table called *tasks* to store each unique task and task-specific statistics. This table shall include a user_id foreign key.
- Database shall have a table called *task_completions* that logs the time and date each time a task was completed. This table shall include a user_id and task_id foreign key.

# Server Side
- Server side shall update tasks table completions column when a task is successfully completed before 12:00 am the following day
- Server side shall update tasks table incomplete column if a task is not completed by 12:00 am the following day
- Server side shall update tasks table incomplete column if a task is abandoned after 12:00 pm
- Server side shall update task completions table date and time columns with the date and time a task was completed
