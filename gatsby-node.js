const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allProjectsJson {
            edges {
              node {
                name
                description
                headline
                stack
                tags
                repo
                image
                featured
                weight
                route
                team {
                  name
                  twitter
                }
                content {
                  title
                  screenshots {
                    screen
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each project detail
        const projectDetailsTemplate = path.resolve(`src/templates/ProjectLandingPage/index.js`);
        result.data.allProjectsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.route.toLowerCase()}`,
            component: slash(projectDetailsTemplate),
            context: {
              project: { ...node },
            },
          });
        });
        return;
      })
    );
  });
};
