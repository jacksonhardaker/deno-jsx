import { serve } from "https://deno.land/std/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";

import { render } from './jsx/index.ts';
import home from "./pages/home.tsx";

const { OK, NotFound } = Status;
const s = serve({ port: 3333 });

console.log(`🦕🦖: http://localhost:3333`);

for await (const req of s) {
  const { url } = req;

  switch (url) {
    case "/":
      req.respond({
        status: OK,
        body: render(home),
      });
      break;
    default:
      req.respond({
        status: NotFound,
        body: "Not found",
      });
  }
}
