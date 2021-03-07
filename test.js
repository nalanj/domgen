import jsdom from "https://dev.jspm.io/jsdom";

function domDoc() {
  return new jsdom.JSDOM(`<!DOCTYPE html><div id="container"></div>`).window
    .document;
}

Deno.test("basic", () => {
  const doc = domDoc();
});
