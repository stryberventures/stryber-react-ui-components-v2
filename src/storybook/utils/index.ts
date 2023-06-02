import { components, name } from '../../../export.config.json';
import { merge } from '../../components/Theme/utils';
const componentsList = Object.keys(components);

// takes list of properties names and builds argsTypes object
export const buildArgTypes = (keys: string[] = []) => {
  let argTypes: Record<string, any> = {};
  keys.forEach((key) => {
    argTypes[key] = {
      table: {
        disable: true,
      }
    }
  });

  argTypes = merge(argTypes, {
    dir: {
      control: {
        type: 'select',
        options: ['inherit', 'ltr', 'rtl'],
      }
    }
  })

  return argTypes;
}

export const replacePaths = (sources: string) => {
  return componentsList.reduce((acc, key) => {
    const regExp = new RegExp(`(\\.{2}\\/)+components/${key}(?![\\w\\d])`, 'g');
    return acc.replace(regExp, `${name}.${components[key as keyof typeof components]}`)
  }, sources);
}
