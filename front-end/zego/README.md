# Project Plan

## Overview

To tackle this project effectively, I will split it into manageable problems:

1. How to create the **Dynamic Form**?  
2. How to create and implement a **Config** for the form?  
3. What **E2E testing strategy** should I implement?

---

## Design Steps

### 1. Dynamic Form

A form consists of a set of `<inputs>`, `<labels>`, and `<buttons>`. My goal is to create React components that are:

- **Easy to customize:**  
  Customization is challenging when building dynamic components. I want users to have the freedom to customize their forms without constraints. Therefore, my components will be modular and flexible, avoiding dictating any particular form style.

- **Easy to layout:**  
  I want the ability to change layouts via configuration. Layout here means how components are organized within a bounded area.

- **Easy to style:**  
  Margin and padding are part of styling considerations. The form should be customizable to match brand colours and styles. TailwindCSS will be used as the CSS framework for its simplicity and great Next.js integration.

**Documentation approach:** 

I want to keep documentation minimal and self-maintained by leveraging code artifacts. I will achieve this by:

- writing tests first using **TDD (Test-Driven Development)**. The tests will document the code.
- using **Storybook**, which allows users to interactively play with components.
- keep comments to a minimum, as they are hard to maintain and sign of code smell.

---

### 2. Config

Inspired by *Dynamic Programming* and *Divide and Conquer* principles—although not perfectly aligned — the common idea is breaking down problems into smaller, manageable parts.
For this reason I'll break down the config into its smallest component and work my way upwards.

Example JSON configuration snippet for form elements, will defined more once working on it:

```json
[
  {
    "type": "enum", // Type of element to render
    "properties": {
      "type": "text",
      "id": "username",
      "name": "username",
      "text": "User Name"
    }
  }
]
```

## Implementation Notes

To keep things simple, no backend service will be created to fetch the data. Instead, I will load the config from a JSON file that simulates a database storing the configuration.

## 3. E2E Testing Strategy

This project allows a fully **Shift-Left** testing strategy due to its simplicity. I plan to integrate E2E testing early to catch issues sooner and reduce fixing costs.
The front end will be completely decoupled from backend parts and run on pull-request builds instead of a dedicated test environment, making E2E easier and cheaper.
Tests will run in the CI pipeline, with parallel execution to reduce build times.

### Shift-Left Strategy Overview

- Early and frequent integration of testing in development

### Benefits

- Reduces defect fixing costs by early detection
- Improves software quality before impacting users
- Faster feedback loops
- Encourages collaboration between developers and testers
- Automation of unit and integration tests

---

## BDD Test Example

```gherkin
Feature: Onboarding

Scenario: User completes onboarding form to get an insurance quote
  Given I visit the home page
  When I click on the 'car-insurance' radio input
  And I click on the Get Quote button
  Then I should see results logged
```

# Tasks

All tasks have been created inside this [github project](https://github.com/users/mgattello/projects/2/views/1)

## Tasks Planning

- NestJS setup with Jest  
- Storybook setup  
- Wrapper component for **Input**: (including TDD and Storybook story)  
- Wrapper component for **Label** 
- Wrapper component for **Button**
- Wrapper **Form** component
- Setup CI/CD pipeline
- Create and run Docker image  

- Create `/api/config` endpoint
- Create JSON config file
- Create wrapper components for Input, Label, and Button HTML tags to simplify rendering

- Setup Cucumber
- Implement step definitions for:
    - “Given I visit the home page”
    - “When I click on the 'car-insurance' radio input”
    - “And I click on the Get Quote button”
    - “Then I should see results logged”


## AI-Assisted Research

1. I used ChatGPT to organise documentation, format JSON and evaluate the best E2E testing frameworks for Next.js, focusing on scalability, ease of use, and CI/CD friendliness.

| Framework           | Pros                                                                                          | Cons                                   | Next.js Integration | Docker/CI/CD Friendly | Cost                          |
|---------------------|-----------------------------------------------------------------------------------------------|---------------------------------------|---------------------|----------------------|-------------------------------|
| Playwright          | Native multi-browser support, fast, reliable, screenshots & videos, modern API                 | No native BDD support (plugin needed) | Excellent           | Fully supported      | Free                          |
| Cypress + Cucumber  | Great DX, live GUI, cypress-cucumber-preprocessor, easy tests                                  | Chromium-only, flaky tests in CI, plugin maintenance varies | Excellent           | Good (watch memory)  | Free (optional paid dashboard)|
| WebdriverIO + Cucumber | First-class Cucumber support, works with Selenium/Grid, good for large BDD-heavy teams, cross-browser | Verbose setup, slower than others     | Good                | Fully supported      | Free                          |

2. Copilot to speed coding

## Glossary

- **Dynamic coding:** Writing code that adapts or generates itself based on runtime data or configuration.
- **TDD (Test-Driven Development):** Writing tests before code to drive design and ensure correctness.
- **BDD (Behavior-Driven Development):** Writing tests in human-readable language focusing on behavior and collaboration.
- **Divide and Conquer:** Breaking complex problems into simpler subproblems, solving each, and combining results.
- **Backward Compatibility:** Ensuring new versions of software remain compatible with older data/configurations/interfaces.

# Conclusion

The excercise was concluded without CI and Docker as tests where run during the development and before merging branches locally. If I had more time I would:

- enanche the current logic when selecting radio inputs
- add more unhappy paths tests
- add more integrations tests
- add more styled forms with the use of other inputs
- implement a database instead of the JSON
- implement CI and run unit tests and E2E before merging
- create docker image to run application locally and test in CI

## Getting Started

## Setup

```bash
nvm use
npm install
```

## Unit Tests

```bash
npm test
```

## E2E Tests

```bash
npm test:cucumber
```

## Development 

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
