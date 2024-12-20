# Cypress Testing Demo Repository

Welcome to my Cypress testing repository! This project demonstrates how I approach testing web applications with a focus on clean code, readability, and maintainability. The tests are divided into two project folders: **frontend-testing-demo** and an **api-testing-demo**.  

For the frontend, I used [Sauce Demo](https://www.saucedemo.com/) to write simple login-related tests. For the API, I created a test using an endpoint from [React Shopping Cart](https://react-shopping-cart-67954.firebaseapp.com/).

## Frontend Tests

The frontend tests cover basic login, logout, and login error scenarios. While the tests themselves are simple, my goal was to demonstrate best practices for maintainable and scalable tests. Some of the key approaches I used include:  

- **Custom Cypress Commands**: To reduce repetitive code and improve readability.  
- **Page Object Model (POM)**: This keeps selectors, URLs, and error messages separate from test files, making the code cleaner and easier to maintain.  
- **Meaningful Naming Conventions**: For better readability and clarity.  
- **`data-test` Attributes**: I always prioritize using `data-test` attributes over IDs or classes for element selection. This ensures selectors are stable and not impacted by styling changes.  

I decided to use Sauce Demo because it makes good use of `data-test` attributes. However, it’s worth noting that Sauce Demo is purely a frontend application and doesn’t make API calls, which is a shame as I would have really liked to have included assertions to test login API calls.  

NOTE: While best practice is to ensure tests don't depend on each other, for some reason, it seems the `login-error.spec.js` test doesn’t run properly unless either the `login-success.spec.js` or `logout.spec.js` test has already run. I’ve attempted a few fixes, such as setting `testIsolation: true` in the Cypress config file and creating a custom command to clear session storage before navigating to the test page. However, due to time constraints, this issue remains unresolved. (I'm going to be cheeky and blame it on the website for now :))

## API Test

For the API test, I used the products endpoint from React Shopping Cart. The test validates that:  

- The request returns a `200` status code.  
- The response body is an object containing a `products` array.  
- Each product in the array includes the expected fields with the correct data types.  

Admittedly, I’m not as confident with API testing as I’d like to be, but I still wanted to include this test to show some level of understanding.

## Why Use Live Sites?

Due to time constraints, I decided to test live sites instead of cloning repositories. This allowed me to focus entirely on writing tests and demonstrating clean, maintainable practices. While React Shopping Cart was used for the API test, I would have preferred to use it for frontend testing as well. Unfortunately, it doesn’t use `data-test` attributes, which I consider essential for stable and maintainable tests.  

## Future Improvements

There are always ways to grow and improve, and here are a few things I’d like to work on:  

- **Using TypeScript**: While I’ve used TypeScript before, I’m currently more comfortable with JavaScript. Moving to TypeScript would improve documentation, readability, and robustness.  
- **Expanding API Testing Skills**: I aim to deepen my understanding of API testing and add more advanced scenarios to future projects.  
- **Adding Accessibility Testing**: Integrating tools like `cypress-axe` to identify and fix accessibility issues in frontend tests.

## How to Run the Tests

### Prerequisites
Before running the tests, ensure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps to Run the Tests
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/cbot95/automation-demo-repo.git
   ```

2. Navigate to the folder for the type of test you want to run:

   **For frontend tests:**
     ```bash
     cd frontend-testing-demo
     ```
   **For API tests:**
     ```bash
     cd api-testing-demo
     ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

5. Run Cypress in interactive mode:
   ```bash
   npm run cypress:open
   ```

6. In the Cypress Test Runner, select the desired browser to run the test and then select the test file to execute. Cypress will automatically launch the browser and run the selected test.



   Thank you for taking the time to review my work!

