
import {
    type Metadata,
    type ModuleLibrary,
} from '@divi/types';

import metadata from './module.json';
import { FirstModuleEdit } from './edit';
import { FirstModuleAttrs } from './type';
import { placeholderContent } from './placeholder-content';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';


//styles
import './module.scss';
import './style.scss';


export const firstModule : ModuleLibrary.Module.RegisterDefinition<FirstModuleAttrs> ={
    metadata : metadata as Metadata.Values<FirstModuleAttrs>,
    placeholderContent,
    settings : {
        content:  SettingsContent,
        design:   SettingsDesign,
        advanced: SettingsAdvanced,
    },
    renderers : {
        edit : FirstModuleEdit
    }
}