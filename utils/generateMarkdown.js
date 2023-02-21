function generateMarkdown(data, licenseInfo) {
  return `
# ${data.title}

${licenseInfo.badge}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## <a id="license"></a>${data.license}

${licenseInfo.description}

## Contributing

${data.contributing}

## Questions

GitHub profile: <https://github.com/${data.github}>

If you have any additional questions feel free to **[email me](mailto:${data.email})**

`;
}

export default generateMarkdown;
