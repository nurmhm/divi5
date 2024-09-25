import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { CTAModuleAttrs } from './types';


/**
 * Module classnames function for Static Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<StaticModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams< CTAModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
