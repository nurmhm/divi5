// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module';

// Local dependencies.
import {FirstModuleAttrs} from './type';


export const placeholderContent: FirstModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholder.title,
      },
    }
  },
  content: {
    innerContent: {
      desktop: {
        value: placeholder.body,
      },
    }
  },
  image: {
    innerContent: {
      desktop: {
        value: {
          src: placeholder.image.landscape,
        },
      },
    },
  },
};
