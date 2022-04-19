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

## To run tests ##

The test setup is based on React Testing Library with Jest runner. To run tests:
```shell script
npm run test 
```

## To deploy the component to npm ##

1) Update the version in the package.json file in 
the component's directory you want to publish or create package.json
file if it does not exist.


2) Build the project

```shell script
npm run build
```

3) Navigate to the component's folder you want to publish, for example the Button

```shell script
cd build/Button
```

4) Publish the component

```shell script
npm publish --access public
```

## To test the component before deployment ##
You can pack the component and install it locally to ensure that everything works as
expected. To do so, navigate to the component in the build directory
and run 'npm pack'

```shell script
cd build/Button
npm pack
```

It will create an .tgz archive, which you can copy to your project's root directory and 
then install like:

```shell script
npm i ./stryberventures-stryber-react-ui-components-v2.button-0.0.1.tgz
```

## Components website ##

Components website is built with Github Pages and it builds and deploys automatically
with Github actions (.github/workflows/storybook.yml)
https://stryberventures.github.io/stryber-react-ui-components-v2
