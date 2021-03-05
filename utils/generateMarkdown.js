// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//     switch(data.license) {
//         case 'MIT':
//             licensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//             return licensebadge;
//         case 'Apache':
//             licensebadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//             return licensebadge;
//         case 'MPL':
//             licensbadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//             return licensbadge;
//         case 'GPL v3':
//             licensbadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
//             return licensbadge;
//         case 'None':
//             licensbadge = '';
//             return licensbadge;
//     }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  [![License: ISC](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/ISC)
  ## Description
  ${data.description}
  ## Table of Contents: 
  - [Description](#Description)
  - [Installation](#Install)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Contact](#Github)
  - [Questions](#Questions)
  - [Contributions](#Contributing)
  - [License](#License)
  ## Install
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  * ${data.email}
  * ${data.username}
  ## License
  This application is covered under the License: ${data.license}`;
}

module.exports = 
generateMarkdown;
// renderLicenseBadge;

