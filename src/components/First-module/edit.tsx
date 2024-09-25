// External Dependencies.
import { ModuleContainer } from "@divi/module";
import React, { ReactElement } from "react";

import { FirstModuleEditProps } from "./type";
import { ModuleStyles } from "./styles";
import { moduleClassnames } from "./module-classnames";
import { ModuleScriptData } from "./module-script-data";


console.log(ModuleStyles, "```````````````````````````````");
/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FirstModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */

// Get image attributes.
export const FirstModuleEdit = (props: FirstModuleEditProps): ReactElement => {
  const { attrs, elements, id, name } = props;

  const imageSrc = attrs?.image?.innerContent?.desktop?.value?.src ?? "";
  const imageAlt = attrs?.image?.innerContent?.desktop?.value?.alt ?? "";
  return (
    <ModuleContainer attrs={attrs}
     elements={elements} 
     id={id} 
     name={name}
     stylesComponent={ModuleStyles}
     classnamesFunction={moduleClassnames}
     scriptDataComponent={ModuleScriptData}
     >
       {elements.styleComponents({
        attrName: 'module',
      })}
       <div className="first_module__inner">

        <div className="first_module__content-container">
          {elements.render({
            attrName: 'title',
          })}
          <div>
            <h1>this is a static module</h1>
          </div>
        </div>

        <div className="first_module__image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </ModuleContainer>
  );
};
