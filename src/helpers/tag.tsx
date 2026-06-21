import { ElementType } from "react";

type IntrinsicTag = keyof JSX.IntrinsicElements;

/**
 * Creates a component for an intrinsic element with a fixed set of base
 * classes, merging any className passed at the call site. Replaces the
 * twin.macro `tw.div` style utility components with plain Tailwind classes.
 */
export function tag<T extends IntrinsicTag>(name: T, base: string) {
  const Component = ({ className, ...props }: JSX.IntrinsicElements[T]) => {
    const Element = name as ElementType;
    return <Element {...props} className={className ? `${base} ${className}` : base} />;
  };
  Component.displayName = `tag(${name})`;
  return Component;
}
