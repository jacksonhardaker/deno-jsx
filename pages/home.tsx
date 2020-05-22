import { Status } from 'https://deno.land/std/http/http_status.ts';
import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { h, render } from '../jsx/index.ts';

const template = (
  <html className="one two three">
    <head>
      <meta charset="utf-8" />
      <title>SSR JSX without React on Deno</title>
    </head>
    <body>
      <h1>Welcome to JSX 🦕🦖</h1>
      <img
        src="https://cdn.britannica.com/s:800x1000/83/211283-131-3DB62136/Tyrannosaurus-Rex-Struthiomimus-dinosaurs.jpg"
        alt=""
      />
    </body>
  </html>
);

export default (req: ServerRequest) =>
  req.respond({
    status: Status.OK,
    body: render(template),
  });
