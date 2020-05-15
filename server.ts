import { serve } from "https://deno.land/std/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";

import home from "./pages/home.tsx";

const s = serve({ port: 3333 });

console.log(`🦕🦖: http://localhost:3333`);

for await (const req of s) {
  const { url } = req;

  switch (url) {
    case "/":
      home(req);
      break;
    default:
      req.respond({
        status: Status.NotFound,
        body: "Not found",
      });
  }
}
