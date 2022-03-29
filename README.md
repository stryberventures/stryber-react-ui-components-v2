# Stryber React UI Components v2 #

## Description ##

The components library based on React and Typescript, represented with Storybook and 
tested with React Testing Library

## To run the project ##

1) Install dependencies

```shell script
npm install
```

2) Run the project

```shell script
npm run start
```

## To deploy the component to npm ##

1) Build the project

```shell script
npm run build
```

2) Navigate to the component's folder you want to publish, for example build / Button

```shell script
cd build/Button
```

3) Publish the component

```shell script
npm publish --access public
```

## To run tests ##

The test setup is based on React Testing Library with Jest runner. To run tests:
```shell script
npm run test 
```

## Components website ##

Components website is built with Github Pages and it builds and deploys automatically
with Github actions (.github/workflows/storybook.yml)
https://stryberventures.github.io/stryber-react-ui-components-v2
