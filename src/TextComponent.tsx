import { ComponentProps } from 'react';
import { DittoComponent } from 'ditto-react';

import dittoJson from './ditto/text.json';
const dittoData = dittoJson.projects.ditto_component_library.components;

type ComponentId = keyof typeof dittoData;

type DittoComponentProps = ComponentProps<typeof DittoComponent>;
type DittoComponentPropsWithoutComponentId = Omit<
  DittoComponentProps,
  'componentId'
>;

type TextProps = DittoComponentPropsWithoutComponentId & {
  componentId: ComponentId;
};

export const TextComponent = (props: TextProps) => (
  <DittoComponent {...props} />
);
