# GAIA React Components #

## Description ##

The components library based on React and Typescript, represented with Storybook and 
tested with React Testing Library

Explore [GAIA components](https://stryberventures.github.io/stryber-react-ui-components-v2) for Web

## Docs

* [Getting Started](https://github.com/stryberventures/stryber-react-ui-components-v2/wiki/1.-Getting-started)
* [Setup Theme](https://github.com/stryberventures/stryber-react-ui-components-v2/wiki/2.-Theme)
* [How to use Form](https://github.com/stryberventures/stryber-react-ui-components-v2/wiki/3.-Form)
* [Build and Deploy](https://github.com/stryberventures/stryber-react-ui-components-v2/wiki/4.-Build-and-deploy)

## To run the project ##

1) Install dependencies

```shell script
npm install
```

2) Run the project

```shell script
npm run start
```

## To run tests ##

The test setup is based on React Testing Library with Jest runner. To run tests:
```shell script
npm run test 
```

## Components website ##

[Components website](https://stryberventures.github.io/stryber-react-ui-components-v2)
is hosted on Github Pages and it builds and deploys the sources automatically
based on Github actions (.github/workflows/storybook.yml)

### Deploying from a branch
It's also possible to deploy a feature branch to be tested in the website. To do that, it's easy as:
1. Go to the [Actions tab](https://github.com/stryberventures/stryber-react-ui-components-v2/actions)
2. Select [`Deploy from a branch`](https://github.com/stryberventures/stryber-react-ui-components-v2/actions/workflows/deploy_from_branch.yml) on the left sidebar
3. On the right panel click the `Run workflow` button 
4. Once clicked, it will display a combo box with the available branches 
5. Select the desired branch to be deployed 
6. After selecting the branch, click the green `Run workflow` button
7. After the pipeline is over and successful, the code for that branch should be live.

PS: It's always good to bring the state of the website back to what is was before; to do that, just do the same steps described above but now select branch `dev` in step 5. Gaia should be back to its previous state once the pipeline has finished.
