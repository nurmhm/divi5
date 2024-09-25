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
  IconPickerContainer ,
  CodeContainer,
  MapContainer
} from "@divi/field-library";
import { type Module } from "@divi/types";

import { StaticModuleAttrs } from "./types";

console.log(IconPickerContainer);
export const SettingsContent = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<StaticModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
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
        label={__("Content", "d5-extension-example-modules")}
        description={__(
          "Input the main text content for your module here.",
          "d5-extension-example-modules"
        )}
        features={{
          sticky: false,
        }}
      >
        <RichTextContainer />
      </FieldContainer>
      <FieldContainer
        attrName="hello"
        label={__("Content copy", "d5-extension-example-modules")}
        description={__(
          "Input the main text content for your module here.",
          "d5-extension-example-modules"
        )}
        features={{
          sticky: false,
        }}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>

    <GroupContainer
      id="select_field"
      title={__("Select Field", "d5-extension-example-modules")}
    >
      <FieldContainer
        attrName="select_field"
        label={__("Choose Option", "d5-extension-example-modules")}
        description={__(
          "Select one of the available options.",
          "d5-extension-example-modules"
        )}
        features={{
          sticky: false,
        }}
      >
        <MapContainer />
      </FieldContainer>
    </GroupContainer>

    <GroupContainer
      id="image"
      title={__("Image", "d5-extension-example-modules")}
    >
      <FieldContainer
        attrName="image.innerContent"
        subName="src"
        label={__("Image", "d5-extension-example-modules")}
        description={__("Upload an Image", "d5-extension-example-modules")}
        features={{
          sticky: false,
        }}
      >
        <UploadContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup />
    <BackgroundGroup
      defaultGroupAttr={
        defaultSettingsAttrs?.module?.decoration?.background?.asMutable({
          deep: true,
        }) ?? {}
      }
    />
    <AdminLabelGroup />
  </React.Fragment>
);
