// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module';

// Local dependencies.
import {CTAModuleAttrs} from './types';


export const placeholderContent: CTAModuleAttrs = {
  // you can add placeholer in your module all content
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
        value: "hello buddy",
      },
    }
  },
  button:{}


};
