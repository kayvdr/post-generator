interface Statistic {
  version?: string | undefined;
  size?: string | undefined;
  stars?: string | undefined;
  downloads?: string | undefined;
}

export interface State {
  template: string;
  title?: string | undefined;
  titleGreen?: string | undefined;
  subtitle?: string | undefined;
  description?: string | undefined;
  codeHeader?: string | undefined;
  codeSnippet?: string | undefined;
  codeSnippetCenter: boolean;
  image?: string | undefined;
  imageWidth?: number;
  imagePositionTop?: number;
  imagePositionLeft?: number;
  showBar: boolean;
  showArrow: boolean;
  statistic?: Statistic | undefined;
}
