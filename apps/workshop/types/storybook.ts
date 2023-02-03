import type {
  AnnotatedStoryFn,
  ComponentAnnotations,
  StoryAnnotations,
  WebRenderer,
} from '@storybook/types'
import type { Component, ComponentProps } from 'solid-js'

type AnyComponent = Component<any>

interface SolidRenderer extends WebRenderer {
  component: AnyComponent
  storyResult: ReturnType<AnyComponent>
}

export type Meta<T extends AnyComponent> = ComponentAnnotations<SolidRenderer, ComponentProps<T>>

export type StoryObj<T extends AnyComponent> = StoryAnnotations<SolidRenderer, ComponentProps<T>>

export type StoryFn<T extends AnyComponent> = AnnotatedStoryFn<SolidRenderer, ComponentProps<T>>
