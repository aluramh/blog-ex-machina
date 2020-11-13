import useLocalStorage from "./useLocalStorage";

function useSsrLocalStorage<T>(
  key: string,
  initial: string
): [string, React.Dispatch<string>] {
  return typeof window === "undefined"
    ? [initial, (value: string) => undefined]
    : useLocalStorage(key, initial);
}

export default useSsrLocalStorage;
