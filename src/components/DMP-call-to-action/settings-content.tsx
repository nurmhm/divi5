// External dependencies.
import React, { ReactElement } from "react";

// WordPress dependencies
import { __ } from "@wordpress/i18n";

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
} from "@divi/module";
import { GroupContainer } from "@divi/modal";
import {
  RichTextContainer,
  TextContainer,
  UploadContainer,
} from "@divi/field-library";
import { type Module } from "@divi/types";

import { CTAModuleAttrs } from "./types";

export const SettingsContent = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<CTAModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="background"
      title={__("Background", "d5-extension-example-modules")}
    >
      <FieldContainer
        attrName="module.decoration.background"
        label={__("Background", "d5-extension-example-modules")}
        description={__(
          "Input your value to action title here.",
          "d5-extension-example-modules"
        )}
        features={{
          sticky: false,
        }}
      >
        <BackgroundGroup
          defaultGroupAttr={
            defaultSettingsAttrs?.module?.decoration?.background?.asMutable({
              deep: true,
            }) ?? {}
          }
        />
      </FieldContainer>
    </GroupContainer>
    <GroupContainer
      id="mainContent" /// a unique id
      title={__("Text", "d5-extension-example-modules")}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__("Title", "d5-extension-example-modules")}
        description={__(
          "Input your value to action title here.",
          "d5-extension-example-modules"
        )}
        features={{
          sticky: false,
        }}
      >
        <TextContainer />
      </FieldContainer>

    <FieldContainer
    attrName="content.innerContent"
    label={__("Content", "d5-extention-example-modules")}
    description={__("Please input your Contennt text")}
    features={{
      sticky:false
    }}
    >
      <RichTextContainer/>
    </FieldContainer>

    <FieldContainer
    attrName="button.innerContent"
    label={__("Button", "d5-extention-example-modules")}
      description={__("Please input Your Button text")}
      features={{
        sticky:false
      }}
    >
      <TextContainer/>
    </FieldContainer>

    </GroupContainer>
    <LinkGroup />
    <AdminLabelGroup />
  </React.Fragment>
);
