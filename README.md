# script-kitties-ca.github.io
This repository contains the front-end code for the Script Kitties website.

Hosted site can be found at https://www.scriptkitties.ca/.

## Development
Configure your environment to use Node 18. If using `nvm`, run `nvm install` and `nvm use` to pull the correct version from the `.nvmrc` file.

This site is built using the React-

[Yarn](https://yarnpkg.com/) is the package manager for this project.

Basic setup:
```sh
# Configure node version.
nvm install
nvm use

# Install packages to node_modules.
yarn install
```

### Develop
Compiles and serves a development build of the site.
```sh
yarn develop
```

### Format
Formats the source code using [Prettier](https://prettier.io/).
```sh
yarn format
```

### Build
Compiles your site for production.
```sh
yarn build
```

### Serve
Serves the production build of the site for testing prior to deployment.
```sh
yarn serve
```

### Clean
Deletes the `.cache` and `public` directories.
```sh
yarn clean
```

## Deployment
Deployment of this website is done using GitHub Actions to GitHub Pages. The pipeline is triggered when commits are merged to the `main` branch.

You can view any current workflows under the [Actions](https://github.com/Script-Kitties-CA/script-kitties-ca.github.io/actions) tab above.
