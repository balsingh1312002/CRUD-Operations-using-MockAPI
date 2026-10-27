🚀 MockAPI CRUD Operations using JavaScript
📌 Project Description

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using JavaScript and MockAPI. It includes reusable asynchronous functions to manage user data through REST API endpoints, with console logging for API responses and comments explaining the code.

🎯 Features
✅ GET – Fetch all users
✅ GET by ID – Fetch a specific user
✅ POST – Create a new user
✅ PUT – Update existing user data
✅ DELETE – Delete a user by ID
✅ Reusable JavaScript functions to reduce code duplication
✅ Console logging to monitor API responses
✅ Comments explaining the logic of each function
🛠️ Technologies Used
JavaScript (ES6+)
MockAPI
REST API
Fetch API
Async/Await
📂 Project Structure
text
MockAPI-CRUD-Operations/
│
├── index.js       # CRUD functions and API logic
├── README.md      # Project documentation
└── package.json   # Project configuration (optional)

⚙️ Setup and Installation
1. Clone the Repository
bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

2. Navigate to the Project Folder
bash
cd YOUR-REPOSITORY

3. Create a MockAPI Project
Visit MockAPI.
Create a new project.
Create a resource named Users.
Copy your API endpoint URL.
4. Configure the API URL

Replace the placeholder URL in your JavaScript code with your MockAPI endpoint:

javascript
const API_URL = "https://YOUR-PROJECT.mockapi.io/Users";

5. Run the Project

Run the JavaScript file in your development environment or browser, depending on your project setup.

🔗 API Endpoints
HTTP Method	Endpoint	Description
GET	/Users	Fetch all users
GET	/Users/:id	Fetch a user by ID
POST	/Users	Create a new user
PUT	/Users/:id	Update an existing user
DELETE	/Users/:id	Delete a user
💻 Example Usage
javascript
// Fetch all users
getAllUsers();

// Fetch a user by ID
getUserById("1");

// Create a new user
createUser({
  name: "John Doe",
  email: "john@example.com"
});

// Update an existing user
updateUser("1", {
  name: "John Smith",
  email: "johnsmith@example.com"
});

// Delete a user
deleteUser("1");

Note: These examples assume your functions use the names shown above. Update the function names or arguments to match your implementation.
📚 Learning Objectives
Understand CRUD operations in REST APIs.
Learn to make HTTP requests using JavaScript's Fetch API.
Practice asynchronous programming with async/await.
Organize code into reusable functions.
Work with JSON data and API responses.
Learn how to manage resources using MockAPI.
🚀 Future Improvements
Add error handling with try...catch.
Implement input validation.
Display user data in a web interface.
Add loading indicators and success/error messages.
Integrate a frontend framework such as React.
👨‍💻 Author

Your Name

GitHub: YOUR-USERNAME
📄 License

This project is open-source and available under the MIT License.

⭐ If you find this project helpful, consider giving the repository a star!
