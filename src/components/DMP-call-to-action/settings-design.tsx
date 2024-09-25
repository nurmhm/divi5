// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
  BackgroundComponent,
  BackgroundGroup,
} from '@divi/module';
import {
  type Module,
} from '@divi/types';
import { BodyContainer, GroupContainer } from '@divi/modal';

// Local dependencies.
import {CTAModuleAttrs} from "./types";

export const SettingsDesign = ({
   defaultSettingsAttrs,
 }: Module.Settings.Panel.Props<CTAModuleAttrs>): ReactElement => (
  <React.Fragment>
    <TextGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.advanced?.text}
    />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: false,
        },
      }}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
    />
    <FontBodyGroup/>
    {/* this is for button style */}
    <GroupContainer id="button" title="Button">
      <BorderGroup attrName='button.decoration.border' grouped={false}/>
      <SpacingGroup attrName='button.decoration.spacing' grouped={false}/>
      <BackgroundGroup attrName="button.decoration.background" grouped={false} defaultGroupAttr={defaultSettingsAttrs?.button?.decoration?.background?.asMutable({ deep: true }) ?? {}}/>
      <SizingGroup attrName="button.decoration.sizing" grouped={false}/>

      <FontGroup groupLabel={__('Button Text', 'd5-extension-example-modules')} attrName="button.decoration.font" defaultGroupAttr={defaultSettingsAttrs?.button?.decoration?.font?.asMutable({ deep: true }) ?? {}}/>
    </GroupContainer>
    <SizingGroup />
    <SpacingGroup />
    <BorderGroup />
    <BoxShadowGroup />
    <FiltersGroup />
    <TransformGroup />
    <AnimationGroup />
  </React.Fragment>
);
