
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from "@wordpress/i18n";
import {
    AdminLabelGroup,
    BackgroundGroup,
    FieldContainer,
    LinkGroup,
} from '@divi/module';

import { GroupContainer } from '@divi/modal';
import {type Module} from '@divi/types';
import {
    RichTextContainer,
    TextContainer,
} from '@divi/field-library';


import {FirstModuleAttrs} from "./type";

export const SettingsContent = ({
    defaultSettingsAttrs,
}: Module.Settings.Panel.Props<FirstModuleAttrs>): ReactElement => (
    <React.Fragment>
        <GroupContainer
        id="mainContent"
        title={__("Text", "d5-extension-example-modules")}
        >

        <FieldContainer
        attrName='title.innerContent'
        label={__("Title", "d5-extension-example-modules")}
        description={__("Input your value to action title here.", "d5-extension-example-modules")}
        features={{
            sticky: false,
        }}
        >
        <TextContainer/>
        </FieldContainer>

        <FieldContainer
        attrName='content.innerContent'
        label='Content'
        description={__("Input the main text content for your module here.", "d5-extension-example-modules")}
        features={{
            sticky: false,
        }}
        >
        <RichTextContainer/>
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
) 