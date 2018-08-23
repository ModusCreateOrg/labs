# Modus Labs Website

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/v1531492623/labs/logo-black.svg)](https://labsmoduscreate.com)

## List of Projects
Take a look at current [Modus Labs projects](https://github.com/ModusCreateOrg/labs/tree/master/src/data/projects) in JSON format.

### Add a new project
* Copy one of the project JSON files and change properties
* New JSON file will automatically generate a project on the web site
* Changes will automatically apply on each merge

### Properties
| Property name | Description |
| -- | -- |
| `name` | Project name |
| `featured` | Set to `true` to appear at the top of the page. Keep max 4 featured projects |
| `weight` | The higher the number, the closer to the top the project will show. This is useful to sort projects |
| `repo` | Repository URL (https) |
| `headline` | Short pitch, < 250 characters |
| `description` | Meaningful description. < 600 characters. Use all the right keywords |
| `image` | File name stored in Cloudinary. Responsive images will be generated automatically |
| `stack` | Array of technologies used. Use `react`, `react-native`, `vue`, `ionic`, `angular`, or `aws`. The list may get bigger, but we need to prepare a logo for each. |
| `tags` | Keywords |
| `team` | Array of objects with `name` and `twitter` properties for the team who contributed to this project |

# License
MIT
