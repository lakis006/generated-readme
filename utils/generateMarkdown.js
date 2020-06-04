function generateMarkdown(readme) {
  
  let criteria = `

  # ${readme.title}

  ## Description
  ${readme.description}
   
  ## Installation
  ${readme.installation}

  # Utilization
  ${readme.utilization}

  ## License
  ${readme.license}
  [![License: ${readme.license}](https://img.shields.io/badge/License-${readme.license}-green.svg)](https://opensource.org/licenses/${readme.license}
  
  

  ## Contributors
  ${readme.contributors}

  ## Tests
  ${readme.tests}

  ## Questions
  Please direct any questions to ${readme.email}
 



  ## Additional-Badges 
  ![alt text](https://img.shields.io/github/license/${readme.userName}/${readme.title}.svg "Top Language Used")

  ---

  `;

  return criteria; 

}

module.exports = generateMarkdown;
