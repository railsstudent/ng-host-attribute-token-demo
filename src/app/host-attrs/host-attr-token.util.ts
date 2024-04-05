import { HostAttributeToken, assertInInjectionContext, inject } from "@angular/core";

export function injectHostAttrToken<T = string>(key: string, defaultValue: T) {
  assertInInjectionContext(injectHostAttrToken);

  const token = new HostAttributeToken(key);
  return (inject(token, { optional: true }) || defaultValue) as T;    
}