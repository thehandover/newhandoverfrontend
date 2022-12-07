import { parseCookies } from "nookies"

export function cookies(req: any) {
  
  const cookies = parseCookies(req ? req.headers.cookie : document.cookie);

  return cookies;
}