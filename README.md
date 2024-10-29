# Tech-Quiz-Test-Suite
This repository contains a test suite for a Tech Quiz application, built using Cypress. The tests cover both component-level and end-to-end (E2E) scenarios, ensuring that the application behaves as expected during various user interactions.

# Table of Contents
Features
Technologies Used
Setup Instructions
Running the Tests
Directory Structure
Contributing
License

# Features
Component tests for the Quiz component
End-to-end tests simulating full user interactions
Mock data for testing using Cypress fixtures
Comprehensive coverage of quiz functionality including:
Starting the quiz
Answering questions
Viewing scores
Restarting the quiz

# Technologies Used
Cypress - For testing
React - Frontend framework
JavaScript - Programming language

# Setup Instructions
Clone the repository
Install dependencies
Set up your application
Open Cypress

# Directory Structure

.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
    ├── component/          // Folder for component tests
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // Folder for end-to-end tests
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Configuration for Cypress
├── package.json
├── tsconfig.json
└── README.md              // This README file

# Video link