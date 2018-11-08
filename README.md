[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/v1531492623/labs/logo-black.svg)](https://labsmoduscreate.com)

# Modus Labs Website

🔗 [https://labs.moduscreate.com](https://labs.moduscreate.com)

[![powered_by Modus_Create](https://img.shields.io/badge/powered_by-Modus_Create-blue.svg?longCache=true&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDMwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOTguODI0IDE0OS40OThjMCAxMi41Ny0yLjM1NiAyNC41ODItNi42MzcgMzUuNjM3LTQ5LjEtMjQuODEtODIuNzc1LTc1LjY5Mi04Mi43NzUtMTM0LjQ2IDAtMTcuNzgyIDMuMDkxLTM0LjgzOCA4Ljc0OS01MC42NzVhMTQ5LjUzNSAxNDkuNTM1IDAgMCAxIDQxLjEyNCAxMS4wNDYgMTA3Ljg3NyAxMDcuODc3IDAgMCAwLTcuNTIgMzkuNjI4YzAgMzYuODQyIDE4LjQyMyA2OS4zNiA0Ni41NDQgODguOTAzLjMyNiAzLjI2NS41MTUgNi41Ny41MTUgOS45MjF6TTY3LjgyIDE1LjAxOGM0OS4xIDI0LjgxMSA4Mi43NjggNzUuNzExIDgyLjc2OCAxMzQuNDggMCA4My4xNjgtNjcuNDIgMTUwLjU4OC0xNTAuNTg4IDE1MC41ODh2LTQyLjM1M2M1OS43NzggMCAxMDguMjM1LTQ4LjQ1OSAxMDguMjM1LTEwOC4yMzUgMC0zNi44NS0xOC40My02OS4zOC00Ni41NjItODguOTI3YTk5Ljk0OSA5OS45NDkgMCAwIDEtLjQ5Ny05Ljg5NyA5OC41MTIgOTguNTEyIDAgMCAxIDYuNjQ0LTM1LjY1NnptMTU1LjI5MiAxODIuNzE4YzE3LjczNyAzNS41NTggNTQuNDUgNTkuOTk3IDk2Ljg4OCA1OS45OTd2NDIuMzUzYy02MS45NTUgMC0xMTUuMTYyLTM3LjQyLTEzOC4yOC05MC44ODZhMTU4LjgxMSAxNTguODExIDAgMCAwIDQxLjM5Mi0xMS40NjR6bS0xMC4yNi02My41ODlhOTguMjMyIDk4LjIzMiAwIDAgMS00My40MjggMTQuODg5QzE2OS42NTQgNzIuMjI0IDIyNy4zOSA4Ljk1IDMwMS44NDUuMDAzYzQuNzAxIDEzLjE1MiA3LjU5MyAyNy4xNiA4LjQ1IDQxLjcxNC01MC4xMzMgNC40Ni05MC40MzMgNDMuMDgtOTcuNDQzIDkyLjQzem01NC4yNzgtNjguMTA1YzEyLjc5NC04LjEyNyAyNy41NjctMTMuNDA3IDQzLjQ1Mi0xNC45MTEtLjI0NyA4Mi45NTctNjcuNTY3IDE1MC4xMzItMTUwLjU4MiAxNTAuMTMyLTIuODQ2IDAtNS42NzMtLjA4OC04LjQ4LS4yNDNhMTU5LjM3OCAxNTkuMzc4IDAgMCAwIDguMTk4LTQyLjExOGMuMDk0IDAgLjE4Ny4wMDguMjgyLjAwOCA1NC41NTcgMCA5OS42NjUtNDAuMzczIDEwNy4xMy05Mi44Njh6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+)](https://moduscreate.com)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?longCache=true&style=flat?style=flat-square)](https://github.com/ModusCreateOrg/react-idle/blob/master/LICENSE)
![React](https://img.shields.io/badge/React-orange.svg?longCache=true&style=flat)
![Gatsby](https://img.shields.io/badge/Gatsby-orange.svg?longCache=true&style=flat)
![PWA](https://img.shields.io/badge/Progressive_web_app-brightgreen.svg?longCache=true&style=flat)

- [Developing](#developing)
  - [Server-side rendering](#ssr)
  - [Setup](#setup)
  - [Code organization](#code-organization)
  - [Styling](#styling)
- [Add a new project](#add-a-new-project)
  - [Project config properties](#properties)
- [Deployment pipeline](#deployment-pipeline)
- [Modus Create](#modus-create)
- [License](#license)

# Developing

[Gatsby](https://www.gatsbyjs.org/) is a React-based static web generator. React code is pre-built and served as static HTML. All resources such as images, CSS, and JS are pre-built, too. Users will receive rendered HTML and Javascript. Once Javascript is bootstraped, the page will silently re-render and enable active content.

### SSR

React developers should understand the traits of Server Side Rendering when developing this web site.

- Do not rely on browser-specific globals such as `window` or `document`. They may not exist in node environment.
- `componentDidMount` does not fire during SSR. There's no mounting at that stage
- Use [React Helmet](https://github.com/nfl/react-helmet) to work with tags that go in `<head>`
- Use [React Idle](https://github.com/ModusCreateOrg/react-idle/) to omit parts of the web site that doesn't need to be rendered on the server. You will want to avoid the parts that do not contribute to [Above the Fold](https://en.wikipedia.org/wiki/Above_the_fold) or [Critical Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) content.

### Setup

This site can be built on any system that supports **Node v6.9+**.

```sh
git clone git@github.com:ModusCreateOrg/labs.git
cd labs
npm install
```

##### Dev server

```sh
npm run develop
```

##### Build static web for production

```sh
npm run build
```

### Code organization

| File/Folder                          | Description                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [components](./src/components)       | Data-agnostic atomic components                                                                                  |
| [containers](./src/containers)       | Reusable combinations of components built using a specific layout that represents a meaningful portion of a view |
| [data/projects](./src/data/projects) | JSON-formatted representation of projects. See [the docs](#properties).                                          |
| [pages](./src/pages)                 | Pages or routes for this web site                                                                                |
| [theme](./src/theme)                 | Sass globals and variables                                                                                       |
| [html.js](./src/html.js)             | HTML template formatted for Server Side Rendering                                                                |

### Styling

We use Sass for styling. All variables are in the [theme](./src/theme) folder

# Projects

Take a look at current [Modus Labs projects](https://github.com/ModusCreateOrg/labs/tree/master/src/data/projects) in JSON format.

### Add a new project

- Copy one of the project JSON files and change properties
- New JSON file will automatically generate a project on the web site
- Changes will automatically apply on each merge

### Properties

| Property name | Description                                                                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | Project name                                                                                                                                                   |
| `featured`    | Set to `true` to appear at the top of the page. Keep max 4 featured projects                                                                                   |
| `weight`      | The higher the number, the closer to the top the project will show. This is useful to sort projects                                                            |
| `repo`        | Repository URL (https)                                                                                                                                         |
| `headline`    | Short pitch < 250 characters                                                                                                                                   |
| `description` | Meaningful description. < 600 characters. Use all the right keywords                                                                                           |
| `image`       | File name stored in Cloudinary. Responsive images will be generated automatically                                                                              |
| `stack`       | Array of technologies used. Use `react`, `react-native`, `vue`, `ionic`, `angular`, or `aws`. The list may get bigger, but we need to prepare a logo for each. |
| `tags`        | Keywords                                                                                                                                                       |
| `team`        | Array of objects with `name` and `twitter` properties for the team who contributed to this project                                                             |
| `title`       | Short pitch < 50 characters                                                                                                                                    |
| `screenShots` | Array of objects with `screen` to explain the working app flow                                                                                                 |

# Deployment pipeline

[![Capsule](https://res.cloudinary.com/modus-labs/image/upload/w_240,e_trim/v1535019553/labs/logo-ionic-vue.png)](https://labs.moduscreate.com/capsule-aws-static-web-app-service)

The [Modus Labs](https://labs.moduscreate.com) web site is [deployed on AWS, powered by Capsule](https://labs.moduscreate.com/capsule-aws-static-web-app-service).

Here's how it works:

1.  Create a Pull Request using [GitHub Flow](https://guides.github.com/introduction/flow/)
2.  Capsule will use AWS CodeBuild service to build the site from your branch
3.  If build is successful, the Pull Request checks section will go green.
4.  Once the Pull Request is merged, Capsule will rebuild the `master` branch and deploy a new version of the web site to AWS CloudFront

# Modus Create

[Modus Create](https://moduscreate.com) is a digital product consultancy. We use a distributed team of the best talent in the world to offer a full suite of digital product design-build services; ranging from consumer facing apps, to digital migration, to agile development training, and business transformation.

[![Modus Create](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1533109874/modus/logo-long-black.png)](https://moduscreate.com)

# License

MIT
