import { readFileSync } from "fs";

const files = {
  rust: readFileSync(__dirname + "/../content/stack/stack.rs", "utf-8"),
  swift: readFileSync(__dirname + "/../content/stack/stack.swift", "utf-8"),
  typescript: readFileSync(__dirname + "/../content/stack/stack.ts", "utf-8"),
};

const playground = {
  rust: code =>
    `https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=${encodeURIComponent(
      code,
    )}`,

  typescript: code =>
    `https://www.typescriptlang.org/play/index.html#src=${encodeURIComponent(
      code,
    )}`,

  swift: code =>
    `http://online.swiftplayground.run/?sourceURL=data:text/plain,${encodeURIComponent(
      code,
    )}`,
};

for (const [language, fileContent] of Object.entries(files)) {
  const node = document.querySelector(`#${language}`);

  const code = node.querySelector(".code");
  code.textContent = fileContent;

  const anchor = node.querySelector<HTMLAnchorElement>(".playground-link");
  if (anchor) {
    anchor.href = playground[language](fileContent);
  }
}
