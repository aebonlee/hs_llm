import React, { lazy, Suspense, ComponentType } from 'react';

export function lazyImport<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): T {
  return lazy(factory) as unknown as T;
}

export function withSuspense<P extends object>(
  Component: ComponentType<P>,
  fallback: React.ReactNode = null
) {
  return (props: P) => React.createElement(
    Suspense,
    { fallback },
    React.createElement(Component, props)
  );
}