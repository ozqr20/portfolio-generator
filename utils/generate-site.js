const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
  
  // copying file
  const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };
  
  module.exports = { writeFile, copyFile };
  

  //  // get array of just featured projects
  //  const featuredProjects = projectsArr.filter(project => {
  //   if (project.feature) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // // get array of all non-featured projects
  // const nonFeaturedProjects = projectsArr.filter(project => {
  //   if (!project.feature) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
  //   return `
  //     <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
  //       <h3 class="portfolio-item-title text-light">${name}</h3>
  //       <h5 class="portfolio-languages">
  //         Built With:
  //         ${languages.join(', ')}
  //       </h5>
  //       <p>${description}</p>
  //       <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //     </div>
  //   `;
  // });

  // const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(
  //   ({ name, description, languages, link }) => {
  //     return `
  //       <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
  //         <h3 class="portfolio-item-title text-light">${name}</h3>
  //         <h5 class="portfolio-languages">
  //           Built With:
  //           ${languages.join(', ')}
  //         </h5>
  //         <p>${description}</p>
  //         <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //       </div>
  //     `;
  //   }
  // );