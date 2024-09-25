// External Dependencies.
import React, { ReactElement } from "react";
import classnames from "classnames";

// Divi Dependencies.
import { ModuleContainer } from "@divi/module";

// Local Dependencies.
import { CTAModuleEditProps } from "./types";

import { ModuleStyles } from "./styles";
import { moduleClassnames } from "./module-classnames";
import { ModuleScriptData } from "./module-script-data";

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {StaticModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */

export const CTAModule = (props: CTAModuleEditProps): ReactElement => {
  /// akan a staticModuleEdit change kor nijar module name bosa ta hova
  const { attrs, elements, id, name } = props;
  console.log(attrs)

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {elements.styleComponents({
        attrName: "module",
      })}
      <div className="cta_module__inner">
        <div style={{height:"100vh"}} className="cta_module__content_container">
          {elements.render({
            attrName: "title",
          })}
          <div>
          {elements.render({
              attrName: 'content',
            })}
          </div>
          <div className="cta_module__button_container">

            <div className="cta_frist_button">  {elements.render({
              attrName: 'button'
            })}</div>
          
          </div>
        </div>
      </div>
    </ModuleContainer>
  );
};
