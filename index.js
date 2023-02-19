import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "Description",
  },
  {
    name: "contents",
    message: "Table of Contents",
  },
  {
    name: "installation",
    message: "Installation",
  },
  {
    name: "usage",
    message: "useage",
  },
  {
    name: "license",
    type: "list",
    message: "Select a license",
    choices: [
      {
        key: "mit",
        name: "MIT License",
        url: "https://api.github.com/licenses/mit",
        badge:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        description:
          "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      },
      {
        key: "lgpl-3.0",
        name: "GNU Lesser General Public License v3.0",
        spdx_id: "LGPL-3.0",
        url: "https://api.github.com/licenses/lgpl-3.0",
        badge:
          "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        description:
          "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.",
      },
      {
        key: "mpl-2.0",
        name: "Mozilla Public License 2.0",
        spdx_id: "MPL-2.0",
        url: "https://api.github.com/licenses/mpl-2.0",
        badge:
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        description:
          "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
      },

      {
        key: "agpl-3.0",
        name: "GNU Affero General Public License v3.0",
        spdx_id: "AGPL-3.0",
        url: "https://api.github.com/licenses/agpl-3.0",
        badge:
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
        description:
          "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
      },

      {
        key: "unlicense",
        name: "The Unlicense",
        spdx_id: "Unlicense",
        url: "https://api.github.com/licenses/unlicense",
        badge:
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        description:
          "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
      },
      {
        key: "apache-2.0",
        name: "Apache License 2.0",
        spdx_id: "Apache-2.0",
        url: "https://api.github.com/licenses/apache-2.0",
        badge:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        description:
          "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      },
      {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
        badge:
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        description:
          "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
      },
    ],
  },
  {
    name: "contributing",
    message: "Contributing",
  },
  {
    name: "tests",
    message: "Tests",
  },
  {
    name: "questions",
    message: "questions",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

async function init() {
  // make init function asynchronous
  //   questions[5].choices = licenses; // set the choices property of the license question
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("./README.md", generateMarkdown(data));
    })
    .catch((error) => {
      console.error(error);
    });
}

init(); // call the init function
