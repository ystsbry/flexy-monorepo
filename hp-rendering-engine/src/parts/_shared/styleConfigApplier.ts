type Styles = {
  [cssVarName: string]: string;
};

export type StyleConfigApplier<C> = (config: C) => Styles;
