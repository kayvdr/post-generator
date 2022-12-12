interface Statistic {
  version?: string | undefined;
  size?: string | undefined;
  stars?: string | undefined;
  downloads?: string | undefined;
}

export interface StateContext {
  state: State;
  setState: (value: State) => void;
}

export interface State {
  scale: number;
  size: boolean;
  position: {
    initX: number | null;
    initY: number | null;
    x: number;
    y: number;
  };
  template: string;
  title?: string | undefined;
  titleGreen?: string | undefined;
  subtitle?: string | undefined;
  description?: string | undefined;
  descriptionImage?: string | undefined;
  codeHeader?: string | undefined;
  codeSnippet?: string | undefined;
  codeSnippetCenter: boolean;
  link: string | undefined;
  image?: string | undefined;
  imageWidth?: number;
  imagePositionTop?: number | undefined;
  imagePositionLeft?: number | undefined;
  showArrow: boolean;
  statistic?: Statistic | undefined;
}
