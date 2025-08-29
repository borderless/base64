export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toStrictEqualBytes(expected: Uint8Array): R;
    }
  }
}
