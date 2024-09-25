// External dependencies.
import React, { ReactElement } from "react";

// Divi dependencies.
import { StyleContainer, StylesProps, CssStyle, TextStyle } from "@divi/module";
import { FirstModuleAttrs } from "./type";
import { cssFields } from "./custom-css";

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
}: StylesProps<FirstModuleAttrs>): ReactElement => {
  const textSelector = `${orderClass} .first_module__content-container`;

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {/* Module */}
      {elements.style({
        attrName: "module",
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle selector={textSelector} attr={attrs?.module?.advanced?.text} />
      <CssStyle selector={orderClass} attr={attrs.css} cssFields={cssFields} />
      
      {/* Image */}
      {elements.style({
        attrName: "image",
      })}

      {/* Title */}
      {elements.style({
        attrName: "title",
      })}
    </StyleContainer>
  );
};
