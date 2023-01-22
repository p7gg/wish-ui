import type { Component, ComponentProps, JSX } from 'solid-js'

/** Useful to flatten the type output to improve type hints shown in editors. And also to transform an interface into a type to aide with assignability. */
export type Simplify<T> = T extends any ? { [KeyType in keyof T]: T[KeyType] } : T

/** Any HTML element or SolidJS component. */
export type ValidComponent = keyof JSX.IntrinsicElements | Component<any> | (string & {})

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideProps<Source = {}, Override = {}> = Omit<Source, keyof Override> & Override

/** Props object that includes the `as` prop. */
export type PolymorphicProps<Type extends ValidComponent, Props = {}> = Simplify<
  OverrideProps<ComponentProps<Type>, Props & { as?: Type | ValidComponent }>
>

/** A component with the `as` prop. */
export type PolymorphicComponent<DefaultType extends ValidComponent, Props = {}> = {
  <Type extends ValidComponent>(
    props: PolymorphicProps<Type, Props> & { component: Type },
  ): JSX.Element
  (props: PolymorphicProps<DefaultType, Props>): JSX.Element
}

/**
 * Create a component with the type cast to `PolymorphicComponent`.
 * You have to use `Dynamic` internally and pass the `as` prop to handle polymorphism correctly.
 */
export const createPolymorphicComponent = <DefaultType extends ValidComponent, Props = {}>(
  component: Component<PolymorphicProps<DefaultType, Props>>,
): PolymorphicComponent<DefaultType, Props> => component
