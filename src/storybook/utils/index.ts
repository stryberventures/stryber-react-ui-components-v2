import { components, name } from '../../../export.config.json';
const componentsList = Object.keys(components);

// takes list of properties names and builds argsTypes object
export const buildExcludeArgTypes = (keys: string[]) => {
  const argTypes: Record<string, any> = {};
  keys.forEach((key) => {
    argTypes[key] = {
      table: {
        disable: true,
      }
    }
  });
  return argTypes;
}

export const replacePaths = (sources: string) => {
  return componentsList.reduce((acc, key) => {
    const regExp = new RegExp(`(\\.{2}\\/)+components/${key}(?![\\w\\d])`, 'g');
    return acc.replace(regExp, `${name}.${components[key as keyof typeof components]}`)
  }, sources);
}
