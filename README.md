# fullstack-react-node-with-db ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)
This project consist in a fullstack app.
The frontent is a SPA made with React.js. The backend runs on Node.js and works as a REST API providing data retrieved from a MySQL database.

The project was bootstrapped with react-boilerplate.

## Getting started
To get a working local copy of this project, clone this repo to your machine and install the dependencies with `$ npm install`.

Please note that you'll need MySQL up and running, or a MySQL server you can connect to.
To store the DB connection data, create a `.env` file in the project root and then add the following variables:

```
DB_HOST=your_host
DB_NAME=your_db_name
DB_USER=your_user
DB_PASS=your_password
```

To start the server just use `$ npm start`.
You can then check if the connection to your DB is successfully established by reaching the following URL: `http://localhost:3000/api/v1/test-db`. As a response you should get:

```json
{
  "message": "Connection to DB established correctly."
}
```

If you want to use `nodemon` to reload Node every time the source code is changed, you can use `$ npm run start:be`. 

## Available features and routes
At this stage, the endpoints defined are:

* [**GET**] `/api/v1/test-db` &rarr; trys to connect to the database and returns a success or failure message.
* [**GET**] `/api/v1/create-table` &rarr; creates the table `user` (the structure is defined in `/server/api/models`). If the table already exists, drops and reinitializes it.
* [**GET**] `/api/v1/users` &rarr; returns all records in the `user` table.
* [**GET**] `/api/v1/users/:id` &rarr; returns the record with the given `id`.
* [**POST**] `/api/v1/users/add` &rarr; adds a record to the `user` table.
* [**PUT**] `/api/v1/users/:id` &rarr; edits the user with the given `id`.
* [**DELETE**] `/api/v1/users/:id` &rarr; deletes the user with the given `id`.

For `POST` and `PUT` calls, structure the request body as follows:

```json
{
  "firstName": "firstNameValue",
  "lastName": "lastNameValue",
  "email": "emailValue",
  "username": "usernameValue",
  "password": "passwordValue"
}
```

## WIP
This project is currently a work in progress, as such what you find here is just a draft.
More detailed documentation will be published as the work will proceed.