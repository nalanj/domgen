type DOMGenSpec = [string, unknown, string];

interface Document {
  createElement(tagName: string): Element;
  createTextNode(text: string): TextNode;
}

interface TextNode {
  wholeText(): string;
}

interface Element {
  ownerDocument: Document;
}

export default class DOMGen {
  spec: DOMGenSpec;

  root?: Element;

  constructor(spec: DOMGenSpec) {
    this.spec = spec;
  }

  get doc() {
    return this.root?.ownerDocument;
  }

  attachTo(root: Element) {
    this.root = root;
  }
}
