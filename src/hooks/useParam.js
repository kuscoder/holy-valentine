export function useParam(key, defaultValue) {
   return new URLSearchParams(location.search).get(key) || defaultValue
}
