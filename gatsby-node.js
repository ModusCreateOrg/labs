/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slug = require('slug');
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
                team {
                  name
                  twitter
                }
                title
                screenshots {
                  screen
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
        const projectDetailsTemplate = path.resolve(`src/templates/ProjectDetails.js`);
        result.data.allProjectsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/details/${slug(node.name).toLowerCase()}`,
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
