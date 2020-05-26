import { Status } from "https://deno.land/std/http/http_status.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { h, render } from "../jsx/index.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      a: any;
      abbr: any;
      address: any;
      area: any;
      article: any;
      aside: any;
      audio: any;
      b: any;
      base: any;
      bdi: any;
      bdo: any;
      big: any;
      blockquote: any;
      body: any;
      br: any;
      button: any;
      canvas: any;
      caption: any;
      cite: any;
      code: any;
      col: any;
      colgroup: any;
      data: any;
      datalist: any;
      dd: any;
      del: any;
      details: any;
      dfn: any;
      dialog: any;
      div: any;
      dl: any;
      dt: any;
      em: any;
      embed: any;
      fieldset: any;
      figcaption: any;
      figure: any;
      footer: any;
      form: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      head: any;
      header: any;
      hr: any;
      html: any;
      i: any;
      iframe: any;
      img: any;
      input: any;
      ins: any;
      kbd: any;
      keygen: any;
      label: any;
      legend: any;
      li: any;
      link: any;
      main: any;
      map: any;
      mark: any;
      menu: any;
      menuitem: any;
      meta: any;
      meter: any;
      nav: any;
      noscript: any;
      object: any;
      ol: any;
      optgroup: any;
      option: any;
      output: any;
      p: any;
      param: any;
      picture: any;
      pre: any;
      progress: any;
      q: any;
      rp: any;
      rt: any;
      ruby: any;
      s: any;
      samp: any;
      script: any;
      section: any;
      select: any;
      small: any;
      source: any;
      span: any;
      strong: any;
      style: any;
      sub: any;
      summary: any;
      sup: any;
      table: any;
      tbody: any;
      td: any;
      textarea: any;
      tfoot: any;
      th: any;
      thead: any;
      time: any;
      title: any;
      tr: any;
      track: any;
      u: any;
      ul: any;
      "var": any;
      video: any;
      wbr: any;
    }
  }
}

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
