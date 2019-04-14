import * as LZString from "lz-string";

export const playground = {
  kotlin: (code: string) =>
    `https://play.kotlinlang.org/#${btoa(
      unescape(
        encodeURIComponent(
          JSON.stringify({ code })
        )
      )
    )}`,

  swift: (code: string) =>
    `http://online.swiftplayground.run/?sourceURL=data:text/plain,${encodeURIComponent(
      code
    )}`,

  typescript: (code: string) =>
    `https://typescript-play.js.org/#code/${LZString.compressToEncodedURIComponent(
      code
    )}`,

  rust: (code: string) =>
    `https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=${encodeURIComponent(
      code
    )}`
};
