# Test Suite for <Project Name>

This repository contains automated tests written using Cypress. The tests are organized into two categories: 
- **Frontend Tests**: Tests for UI interactions and end-to-end workflows.
- **API Tests**: Tests for validating API functionality and responses.

## Best Practices Followed

### Page Object Model
All selectors (e.g., URLs, error messages, and `data-test` attributes) are stored in separate Page Object files to improve readability and maintainability. This ensures:
- No hardcoded strings or selectors in the test files.
- Easier updates when selectors or messages change.

### Custom Commands
Reusable logic (e.g., asserting visibility) is encapsulated in custom Cypress commands to:
- Reduce code duplication.
- Improve test readability.
- Make the tests easier to maintain.

### Using `data-test` Attributes
Selectors use `data-test` attributes instead of IDs or classes. This helps:
- Ensure test stability even when layout or styling changes.
- Separate test logic from application styling.

### Naming Conventions
Tests, commands, and selectors follow clear naming conventions to improve readability.

## How to Run the Tests
1. Clone the repository:
