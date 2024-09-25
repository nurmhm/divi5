// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';


export interface CTAModuleCssAttr extends Module.Css.AttributeValue {
  contentContainer?: string;
  title?: string;
  content?: string;
  button?: string;
}

export type CTAModuleCssGroupAttr = FormatBreakpointStateAttr<CTAModuleCssAttr>;

export interface CTAModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: CTAModuleCssGroupAttr;

  // Module
  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
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


  // Title
  title?: Element.Types.Title.Attributes;

  // content
  content?:Element.Types.Content.Attributes;

  //button
  button?:{
    text?:Element.Types.Button.InnerContent.Attributes;
    decoration?:Element.Decoration.PickedAttributes<
    'border'|
    'spacing'|
    'font'|
    'background'|
    'sizing'
    >
  }
}

export type CTAModuleEditProps = ModuleEditProps<CTAModuleAttrs>;
