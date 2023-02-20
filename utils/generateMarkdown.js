// function to generate markdown for README

function generateMarkdown(data, licenseInfo) {
  return `
# ${data.title}

${licenseInfo.badge}

## Description

${data.description}

## Table of Contents

${data.contents}

## Installation

${data.installation}

## Usage

${data.usage}

## ${data.license}

${licenseInfo.description}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}


`;
}

// function licenseData(data) {
//   let licenseBadge;
//   let licenseInfo;

//   if (data.license === "Apache License 2.0") {
//     console.log("license worked");
//     licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`);
//     licenseInfo = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
//   } else {
//     console.log("license didnt work");
//     return string;
//   }
// }

export default generateMarkdown;
// module.exports = generateMarkdown;
// console.log(module);
