function generateMarkdown(readme) {
  
  let criteria = `

  # ${readme.title}

  ## Description
  ${readme.description}


  ## Table of Contacts
  * [Installation](#installation)
* [utilization](#utilization)
* [License](#license)
* [Contributors](#contribors)
* [Tests](#tests)
* [Questions](#questions)
   
  ## Installation
  ${readme.installation}

  # Utilization
  ${readme.utilization}

  ## License
  ${readme.license}
  [![License: ${readme.license}](https://img.shields.io/badge/License-${readme.license}-green.svg)](https://opensource.org/licenses/${readme.license})
  
  

  ## Contributors
  ${readme.contributors}

  ## Tests
  ${readme.tests}

  ## Questions
  Please direct any questions to ${readme.email}
 





  ---

  `;

  return criteria; 

}

module.exports = generateMarkdown;
