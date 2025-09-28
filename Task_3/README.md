
## Books REST API — Task 3
- A minimal Node.js and Express REST API for managing a list of books with full CRUD, using an in‑memory data store and tested via Postman as per the task brief..

## Tech stack
- Node.js and Express for the HTTP server and routing
- Postman for manual endpoint testing during development

## Project Setup:
In‑memory array for data persistence during runtime only
# 1) Create project folder and enter it
mkdir Task_3 && cd Task_3  

# 2) Initialize package.json
npm init -y  

# 3) Install Express locally
npm install express  

# 4) Install nodemon for dev restarts
npm install -D nodemon  


## Approach taken
- Initialized the project with npm init -y to create package.json in the Task_3 directory so local dependencies are correctly tracked and resolvable.

- Installed Express locally using npm install express to satisfy require('express') and built a basic server listening on port 3000.

- Added express.json middleware and defined an in‑memory books array to meet the no‑database constraint.

- Implemented RESTful routes for GET, POST, PUT, and DELETE on /books and /books/:id using appropriate HTTP status codes.

- Tested endpoints in Postman following the brief’s testing step and verified behavior across create, read, update, and delete flows.

## Testing guide
- Start the server and test with Postman using the listed endpoints and example payloads to validate CRUD behavior.

- Suggested flow: POST a book, GET all to confirm presence, PUT to update fields, then DELETE and GET again to confirm removal as part of manual verification.

