/* ================== Canvas API 扩展类型 ================== */
interface CanvasRenderingContext2D {
  letterSpacingText(text: string, x: number, y: number, letterSpacing?: number): void;
  wrapText(text: string, x: number, y: number, maxWidth?: number, lineHeight?: number, stroke?: boolean): void;
  fillTextVertical(text: string, x: number, y: number): void;
}

/* ================== Watermark 配置类型 ================== */
export interface AddTextOptions {
  text?: string | string[];
  fontSize?: string | number;
  fontFamily?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  stroke?: boolean;
  globalAlpha?: number;
  rotateAngle?: number;
  maxWidth?: number;
  xMoveDistance?: number;
  yMoveDistance?: number;
}

export interface AddPixelTextOptions {
  text?: string;
  big?: {
    fontSize?: number;
    fontFamily?: string;
    textAlign?: "left" | "center" | "right";
    rotateAngle?: number;
    stroke?: boolean;
  };
  small?: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    textAlign?: "left" | "center" | "right";
    globalAlpha?: number;
  };
}

export interface AddImageOptions {
  imageArray: HTMLImageElement[];
  width?: number;
  height?: number;
  globalAlpha?: number;
  rotateAngle?: number;
  xMoveDistance?: number;
  yMoveDistance?: number;
}

export interface CalcTextMoveDistanceOptions {
  text?: string | string[];
  fontSize?: number;
  fontFamily?: string;
  rotateAngle?: number;
  maxWidth?: number;
  gap?: number;
}

/* ================== Watermark 主类类型 ================== */
export default class Watermark {
  dataUrl: string | null;
  sizes: { width: number; height: number } | null;
  $canvas: HTMLCanvasElement | null;

  constructor();

  setFile(file: File): Promise<boolean>;
  setImage(src: string): Promise<boolean>;
  hasImage(): boolean;
  getSize(): { width: number; height: number } | null;
  clearMark(): void;

  addText(opts?: AddTextOptions): void;
  addPixelText(opts?: AddPixelTextOptions): void;
  addImage(opts: AddImageOptions): false | void;

  getPreview(): string | null;
  render(type?: "jpeg" | "png"): string;
  renderBlob(): Promise<string>;

  calcTextMoveDistance(opts: CalcTextMoveDistanceOptions): {
    xMoveDistance: number;
    yMoveDistance: number;
  };
}
