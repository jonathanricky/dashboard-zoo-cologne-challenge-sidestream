# Cologne Zoo Dashboard

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/dashboard-zoo-cologne-challenge-rajnqp)

## Table of Contents

- [Description](#Description)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
  - [Configuration](#Configuration)
  - [Running the Project](#Running-the-Project)
  - [Testing](#Testing)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Project Status](#Project-Status)
- [Contact Information](#Contact-Information)

### Description

In the aftermath of a recent cyberattack launched by the Duisburg Zoo, the Cologne Zoo's IT infrastructure has been left in disarray. As the newly appointed IT Director, your mission is to resurrect and revamp the Cologne Zoo's digital dashboard, restoring it to its former glory. 🐻 🐵

This project aims to rebuild the Cologne Zoo's dashboard, which suffered significant damage due to the cyber assault. The previous IT Director resigned, unable to cope with the aftermath, leaving the task of rejuvenation in your capable hands.

### Tech Stack

Our project is built with a modern tech stack, designed for efficiency and maintainability. The tool we use here is called `stackblitz`. It functions as a fully integrated development environment (IDE).

Here's a closer look at the technologies and tools that drive our application:

- Frontend: Vue3, Nuxt3, TypeScript, TailwindCSS
- Backend: Node.js
- Testing: Vitest
- Linting: ESLint

Please note that Storybook is currently disabled in StackBlitz due to compatibility issues.

#### NPM Scripts

To streamline development and testing, we have defined helper commands for development that are runnable via `npm run X` where X is the command, checkout the `package.json` for more:

- dev: Start the development server with `nuxi dev`.
- build: Build the application with `nuxi build`.
- lint: Lint the codebase, including type checking with `nuxi typecheck` and style linting with ESLint.
- test: Run tests using Vitest.
- test:watch: Run tests continuously for ongoing development.
- prepare: Install Husky, which helps with Git hooks.
- test-for-reviewer: Build the application and run tests for the reviewer.
- hello: Display a message to guide the IT Director in the project's initial tasks. The message can be found in `TASKS.md`.

### Getting Started

#### Prerequisites

Before diving into the revitalization process, ensure you have the following tools and technologies in place:

`Node.js (v16.14.2)`: You'll need Node.js installed on your system. If it's not already installed, you can download it from [Node.js](https://nodejs.org/en) Official Website.

`npm (v8.5.0)`: The Node.js installation comes with npm, the Node Package Manager. Make sure it's available in your environment.

#### Installation

Follow these steps to set up the project and get it running on your local machine:

```
git clone https://github.com/your-username/dashboard-cologne-zoo.git
cd dashboard-cologne-zoo
```

#### Install Dependencies:

Use `npm` to install the project dependencies. This step will ensure you have all the required libraries and packages.

```
npm install
```

#### Configuration

In the early stages of the project, no specific configuration steps are necessary. The core focus is on restoring and modernizing the existing codebase.

#### Running the Project

To initiate the development server and access the Cologne Zoo's dashboard, execute the following command:

```
npm run dev
```

You can access the application through your web browser at http://localhost:3000. Explore the codebase, work on enhancements, and bring life back to the zoo's dashboard!

#### Testing

Ensuring the reliability and stability of our application is a top priority. We use `Vitest`, a testing framework, to validate our code and components. Here's how testing works:

```
npm run test
```

### Usage

Our application serves as an essential dashboard for the Cologne Zoo, offering zookeepers and administrators a comprehensive overview of the zoo's animals and their health data.

### Contributing

We welcome contributions from fellow developers to enhance the Cologne Zoo's dashboard. If you're interested in contributing, please follow these guidelines:

- Fork this repository and create your own branch for your contributions.
- Make sure your code adheres to our coding standards and conventions.
- Submit a pull request with a clear description of your changes.
- Our team will review your pull request, provide feedback, and merge it if it aligns with the project's goals.

### Project Status

The Cologne Zoo's dashboard project is actively maintained and under ongoing development. We are committed to improving and expanding its features to meet the evolving needs of zookeepers and administrators.

### Contact Information

For questions, feedback, or collaboration inquiries, feel free to reach out to our support resources:

Email: [admin@zoo-cologne.de](admin@zoo-cologne.de)

We value your input and look forward to hearing from you.✌️
