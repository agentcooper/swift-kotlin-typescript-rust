import { readFileSync } from "fs";

interface Code {
  swift: string;
  typescript: string;
  rust: string;
}

export type Languages = keyof Code;

export interface Example {
  key: string;
  title: string;
  code: Code;
}

/**
 * readFileSync calls are resolved statically by Parcel
 */
export const examples: Example[] = [
  {
    key: "protocols-interfaces-traits",
    title: "Protocols/interfaces/traits",
    code: {
      swift: readFileSync(
        __dirname +
          "/../examples/protocols-interfaces-traits/stack.swift",
        "utf-8"
      ),
      typescript: readFileSync(
        __dirname +
          "/../examples/protocols-interfaces-traits/stack.ts",
        "utf-8"
      ),
      rust: readFileSync(
        __dirname +
          "/../examples/protocols-interfaces-traits/stack.rs",
        "utf-8"
      )
    }
  },
  {
    key: "algebraic-data-types",
    title: "Algebraic data types",
    code: {
      swift: readFileSync(
        __dirname +
          "/../examples/algebraic-data-types/algebraic-data-types.swift",
        "utf-8"
      ),
      typescript: readFileSync(
        __dirname +
          "/../examples/algebraic-data-types/algebraic-data-types.ts",
        "utf-8"
      ),
      rust: readFileSync(
        __dirname +
          "/../examples/algebraic-data-types/algebraic-data-types.rs",
        "utf-8"
      )
    }
  }
];
