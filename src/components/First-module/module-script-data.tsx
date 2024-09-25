import React ,{ Fragment, ReactElement } from "react";

import { ModuleScriptDataProps } from '@divi/module';
import { FirstModuleAttrs } from './type';

/**
 * Static module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<StaticModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
    elements,
}: ModuleScriptDataProps<FirstModuleAttrs>): ReactElement => (
    <Fragment>
        {elements.scriptData({
            attrName: 'module',
        })}
    </Fragment>
)