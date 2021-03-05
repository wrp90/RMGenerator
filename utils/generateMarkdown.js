// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    switch(data.License) {
        case 'Apache':
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Table of Contents: 
  - [Description](#Description)
  - [Installation](#Install)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Contact](#Github)
  - [Questions](#Questions)
  - [Contributions](#Contributions)
  - [License](#License)
  ## Description
  ${data.description}
  ## Install
  ${data.install}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Github
  ${data.username}
  ## Questions
  ${data.email}
  ## Contributions
  ${data.contributing}
  ## License
  ${data.License}`;
}

module.exports = generateMarkdown;
