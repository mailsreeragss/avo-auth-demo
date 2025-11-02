AVO Automation Curl 
Step 1: Install all : npm install
Step 2: Start: npm run start
Step 3:  Open postman and copy below curl to test apis
1. 

curl --location 'http://localhost:8082/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{"email": "mailsreeragss@gmail.com", "password": "mySecret123"}'


2. 


curl --location 'http://localhost:8082/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{"email": "pranav@gmail.com", "password": "mySecret123", "name": "Pranav", "userId": 3, "role": "ADMIN"}'


3. 


curl --location 'http://localhost:8082/api/users/get-all-users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJTcmVlcmFnIiwicm9sZSI6WyJBRE1JTiJdLCJpYXQiOjE3NjIwOTA5NDgsImV4cCI6MTc2MjE3NzM0OH0.A9cK3daIKBt9nLx75mEgDG7VAc2Q5AZZs1bmI9p4B7k'


PS: Change Token using 1st Curl Request.




<img width="451" height="498" alt="image" src="https://github.com/user-attachments/assets/65ec4bd6-0d1d-421b-8469-ae50a1b7ee81" />
