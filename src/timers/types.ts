type TTimerCallback = () => void;

export type TSetTimeout = (cb: TTimerCallback, timeout: number) => void;
