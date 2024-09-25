// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';

import{
    FormatBreakpointStateAttr,
    InternalAttrs,
    type Element,
    type Module,
} from '@divi/types';

export interface Image{
    src?:string;
    alt?:string;
}

export interface FirstModuleCssAttr extends Module.Css.AttributeValue{
    contentContainer?:string;
    title?:string;
    content?:string;
    image?:string;
}

export type FirstModuleCssGroupAttr = FormatBreakpointStateAttr<FirstModuleCssAttr>

export interface FirstModuleAttrs extends InternalAttrs{
    css?:FirstModuleCssGroupAttr;

    module?:{
        meta?: Element.Meta.Attributes;
        advanced?:{
            link?: Element.Advanced.Link.Attributes;
            htmlAttributes?: Element.Advanced.IdClasses.Attributes;
            text?: Element.Advanced.Text.Attributes;
        };
        decoration?: Element.Decoration.PickedAttributes<
        'animation' |
        'background' |
        'border' |
        'boxShadow' |
        'disabledOn' |
        'filters' |
        'overflow' |
        'position' |
        'scroll' |
        'sizing' |
        'spacing' |
        'sticky' |
        'transform' |
        'transition' |
        'zIndex'
      >;
    };
    
    image?:{
        innerContent?:Element.Types.Image.InnerContent.Attributes;
        decaration?: Element.Decoration.PickedAttributes<
        'border'|
        'boxShadow'|
        'filters'|
        'spacing'
        >;
    };

    title?:Element.Types.Title.Attributes;

    content?:Element.Types.Content.Attributes;
}

export type FirstModuleEditProps = ModuleEditProps<FirstModuleAttrs>