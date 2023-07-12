/**
 * The MyDebounce function is a higher-order function that returns a debounced version of a given
 * function.
 * @param fn - `fn` is a function that you want to debounce. It is the function that will be called
 * after the debounce time has elapsed.
 * @param d - d is the delay time in milliseconds for the debounce function. It determines how long the
 * function should wait before executing after the last time it was called.
 * @returns The function `Debounce` is being returned.
 */
export const MyDebounce = <T extends (...args: any[]) => void>(fn: T, d: number) => {
  let timer: NodeJS.Timeout;

  const Debounce = (...args: Parameters<T>): void => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn(...args), d);
  };

  return Debounce;
};
