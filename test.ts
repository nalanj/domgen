import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import DOMGen from "./mod.ts";

function root() {
  const doc = new DOMParser().parseFromString(
    `<!DOCTYPE html><div id="container"></div>`,
    "text/html",
  );

  const root = doc?.getElementById("container");
  if (root === null) {
    throw new Error("Root gen error");
  }

  return root;
}

Deno.test("basic elements", () => {
  const gen = new DOMGen(["p", {}, "Testing"]);
  gen.attachTo(root());
});
