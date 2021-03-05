// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
   
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
  return `## ${data.title} 
  ## Description
  * ${data.description}
  ## Install
  * ${data.install}
  ## Usage
  * ${data.usage}
  ## Contributions
  * ${data.contributing}
  ## Tests
  * ${data.tests}
  ## Contact 
  * ${data.username}
  ## Questions
  * ${data.email}
  ## License
  * ${data.License}`;
}

module.exports = generateMarkdown;
