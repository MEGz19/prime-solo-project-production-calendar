# PRODUCTION ASSISTANT
Duration: 2-Week Sprint

One of the biggest problems theater makers face during the pre-production process is gathering the necessary contact and availability information from every actor who auditions. With 50-100 actors auditioning for five roles in a production, it gets to be a lot of people to keep track of. Currently, many theater companies, especially the smaller organizations, are collecting this information on hand-written forms that are filled out by the actors before they audition.

As one can imagine, this gets to be a lot of paper to keep track of, making it easy to misplace someone's form. Additionally, with any handwritten item, there involves the chance that it may be difficult to read. Production Assistant allows all of this information to be stored in one place. Now, actors can create an account and type their information directly into the app. The director, or anyone with administrative access, can then login to the app and view everyone's availability information to find the best times to rehearse. 

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `production_assistant` and use the code in the database.sql file to build out the database.

## Development Setup Instructions

* Open your editor of choice and run `npm install`
* Start postgres if not running already by entering the command `brew services start postgresql` in your terminal.
* Run `npm run server` in your terminal.
* Run `npm run client` in your terminal.
* The `npm run client` command will open up a new browser tab for you that should say `localhost:3000`.

## Acknowledgments

Thank you to the Prime Digital Academy instructors, particularly Dane Smith, for not only teaching me the tools needed to build this project, but for all the support offered throughout the course of this project.