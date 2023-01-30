import type { AnyObject } from '../types'
import type { Component, ComponentProps, JSX } from 'solid-js'

/** Any HTML element or SolidJS component. */
export type ValidComponent = keyof JSX.IntrinsicElements | Component<any> | (string & {})

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideProps<Source extends AnyObject = {}, Override extends AnyObject = {}> = Omit<
  Source,
  keyof Override
> &
  Override

/** Props objects with Intrinsic props aswell as `as` prop. */
export type PolymorphicProps<
  Type extends ValidComponent,
  Props extends AnyObject = {},
> = OverrideProps<ComponentProps<Type>, Props & { as?: Type | ValidComponent }>

/** Props object with Intrinsic props */
export type MonomorphicProps<
  Type extends ValidComponent,
  Props extends AnyObject = {},
> = OverrideProps<ComponentProps<Type>, Props>

/** A component with the `as` prop. */
export type PolymorphicComponent<
  DefaultType extends ValidComponent,
  Props extends AnyObject = {},
  Compositions extends AnyObject = {},
> = {
  <Type extends ValidComponent = DefaultType>(
    props: PolymorphicProps<Type, Props> & { as?: Type | ValidComponent },
  ): JSX.Element
} & Compositions

/** A component with the Intrinsic props */
export type MonomorphicComponent<
  DefaultType extends ValidComponent,
  Props extends AnyObject = {},
  Compositions extends AnyObject = {},
> = {
  <Type extends ValidComponent = DefaultType>(props: MonomorphicProps<Type, Props>): JSX.Element
} & Compositions

/**
 * Create a component with the type cast to `PolymorphicComponent`.
 * You have to use `Dynamic` internally and pass the `as` prop to handle polymorphism correctly.
 */
export const createPolymorphicComponent = <
  DefaultType extends ValidComponent,
  Props extends AnyObject = {},
  Compositions extends AnyObject = {},
>(
  component: Component<PolymorphicProps<DefaultType, Props>>,
) => component as PolymorphicComponent<DefaultType, Props, Compositions>

/**
 * Create a component with the type cast to `MonomorphicComponent`.
 */
export const createComponent = <
  DefaultType extends ValidComponent,
  Props extends AnyObject = {},
  Compositions extends AnyObject = {},
>(
  component: Component<MonomorphicProps<DefaultType, Props>>,
) => component as MonomorphicComponent<DefaultType, Props, Compositions>
