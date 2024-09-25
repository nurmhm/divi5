import React, { ReactElement } from "react";

import {
    AttributesGroup,
    CssGroup,
    IdClassesGroup,
    PositionSettingsGroup,
    ScrollSettingsGroup,
    TransitionGroup,
    VisibilitySettingsGroup,
} from "@divi/module";
import { cssFields } from "./custom-css";
export const SettingsAdvanced = (): ReactElement => (
    <React.Fragment>
        <IdClassesGroup />
        <CssGroup
            mainSelector=".first_module"
            cssFields={cssFields}
        />
        <AttributesGroup />
        <VisibilitySettingsGroup />
        <TransitionGroup />
        <PositionSettingsGroup />
        <ScrollSettingsGroup />
    </React.Fragment>
)