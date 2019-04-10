export const playground = {
  rust: code =>
    `https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=${encodeURIComponent(
      code
    )}`,

  typescript: code =>
    `https://www.typescriptlang.org/play/index.html#src=${encodeURIComponent(
      code
    )}`,

  swift: code =>
    `http://online.swiftplayground.run/?sourceURL=data:text/plain,${encodeURIComponent(
      code
    )}`
};
