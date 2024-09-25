// External dependencies.
import React, {ReactElement} from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  TextStyle,
} from '@divi/module';

// Local dependencies.
import {CTAModuleAttrs} from './types';
import {cssFields} from './custom-css';

/**
 * Static Module's style components.
 *
 * @since ??
 */
export const ModuleStyles = ({
    attrs,
    elements,
    settings,
    orderClass,
    mode,
    state,
    noStyleTag,
  }: StylesProps<CTAModuleAttrs>): ReactElement => {
  const textSelector = `${orderClass} .cta_module__content-container`; // yout text container selector

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {/* Module */}
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={textSelector}
        attr={attrs?.module?.advanced?.text}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs.css}
        cssFields={cssFields}
      />
      {/* Title */}
      {elements.style({
        attrName: 'title',
      })}

      {/* Content */}
      {elements.style({
        attrName: 'content',
      })}
      
      {/* Button */}
      {elements.style({
          attrName:"button"
        })
      }

    </StyleContainer>
  );
};
