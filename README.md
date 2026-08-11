# Todo Application

A simple Todo application built with **Next.js**, **Prisma**, and **SQLite** for COMS3011A Lab 1.

## Features

* Create new tasks
* Edit existing tasks
* Archive tasks (tasks are not deleted)
* View archived tasks in a sidebar
* Sort tasks by:

  * Due Date
  * Topic
  * Status
* Highlight overdue tasks
* Persist data using SQLite

---

# Third-Party Code

| Library / Package | Reason for Use                                                                 |
| ----------------- | ------------------------------------------------------------------------------ |
| Next.js           | Provides the framework, routing system and API routes for the application.     |
| React             | Used to build the user interface with reusable components.                     |
| Prisma            | ORM used to communicate with the SQLite database using TypeScript.             |
| SQLite            | Lightweight local database used to persist tasks between application restarts. |
| Tailwind CSS      | Used to style the application quickly with utility classes.                    |
| Vitest            | Used to create and run automated tests for the application.                    |

---

# Database Design

The application uses a single SQLite database managed through Prisma.

## Task Table

| Column      | Type     | Description                                         |
| ----------- | -------- | --------------------------------------------------- |
| id          | Integer  | Primary key, automatically generated.               |
| title       | String   | Title of the task.                                  |
| description | String   | Description of the task.                            |
| topic       | String   | Topic associated with the task.                     |
| dueDate     | DateTime | Due date of the task.                               |
| status      | Enum     | Task status (`TODO`, `IN_PROGRESS`, or `COMPLETE`). |
| archived    | Boolean  | Indicates whether the task has been archived.       |
| createdAt   | DateTime | Date and time the task was created.                 |
| updatedAt   | DateTime | Automatically updated whenever the task changes.    |

### Relationships

The application contains only one table (`Task`), so there are no relationships with other tables.

### Design Decisions

* Tasks are **archived instead of deleted** by using the `archived` Boolean field.
* The **overdue** state is **not stored** in the database. It is calculated dynamically by comparing the current date with the task's due date and checking that the task is not marked as `COMPLETE`.
* Task status is restricted to three fixed values:

  * `TODO`
  * `IN_PROGRESS`
  * `COMPLETE`

---

# Running It

## Requirements

* Node.js v22.x (or your installed Node.js version)
* npm

## Installation

# Install Git

*If Git is not already installed, download and install it from the official Git website:*

https://git-scm.com/install/windows

After installation, Open Git Bash and verify it:

```bash
git --version
```

# Install Node.js

Install Node.js from:

https://nodejs.org/en/download

**Close and reopen Git Bash**

Then verify:
```bash
node --version
npm --version
```

Clone the repository:

```bash
git clone https://github.com/2888986-cs/COMS3011A-Lab1-TodoApp.git
```

Go to the folder

```bash
cd COMS3011A-Lab1-TodoApp
```

**Create the Environment File**

Create a .env file in the project root:

```bash
touch .env
```

Open the *.env* file using the nano text editor:

```bash
nano .env
```

Add the following line:

```bash
DATABASE_URL="file:./dev.db"
```

Save and exit nano:

```bash
Press **Ctrl + O** to save.
Press **Enter** to confirm the filename.
Press **Ctrl + X** to exit.
```

Verify that the *.env* file contains the database URL:

```bash
cat .env
```

It should display:

```bash
DATABASE_URL="file:./dev.db"
```

Install dependencies:

```bash
npm install
```

Create the SQLite database and apply migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client (if required):

```bash
npx prisma generate
```

Run the application:

```bash
npm run dev
```

On your browser, open:

```
http://localhost:3000
```

---

# Running Tests

Run all automated tests:

```bash
npm test
```

---

# Project Structure

```
app/
components/
lib/
prisma/
public/
tests/
```

---

# Technologies Used

* Next.js
* React
* Prisma ORM
* SQLite
* Tailwind CSS
* TypeScript
* Vitest
* Postman

## AI Usage

This repository makes use of AI code generation using the following tools:

* ChatGPT Web [GPT-5.5]

This repository does not use AI in-line editing tools.

This repository makes use of AI code review using the following tools:

* ChatGPT Web [GPT-5.5]

**AI Declaration**

The preceding lab was reviewed and edited with the assistance of:

* ChatGPT Web [GPT-5.5]

**Transcript of AI usage**

https://chatgpt.com/share/6a7128a3-50e8-83ea-948c-cfb5c7715e77
