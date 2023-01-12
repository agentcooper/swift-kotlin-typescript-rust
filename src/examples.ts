import { readFileSync } from "fs";

interface Code {
  swift: string;
  kotlin: string;
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
      kotlin: readFileSync(
        __dirname +
          "/../examples/protocols-interfaces-traits/stack.kt",
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
      ),
    },
  },
  {
    key: "collections",
    title: "Collections",
    code: {
      swift: readFileSync(
        __dirname +
          "/../examples/collections/collections.swift",
        "utf-8"
      ),
      kotlin: readFileSync(
        __dirname +
          "/../examples/collections/collections.kt",
        "utf-8"
      ),
      typescript: readFileSync(
        __dirname +
          "/../examples/collections/collections.ts",
        "utf-8"
      ),
      rust: readFileSync(
        __dirname +
          "/../examples/collections/collections.rs",
        "utf-8"
      ),
    },
  },
  {
    key: "higher-order-functions",
    title: "Higher-order functions",
    code: {
      swift: readFileSync(
        __dirname +
          "/../examples/higher-order-functions/map.swift",
        "utf-8"
      ),
      kotlin: readFileSync(
        __dirname +
          "/../examples/higher-order-functions/map.kt",
        "utf-8"
      ),
      typescript: readFileSync(
        __dirname +
          "/../examples/higher-order-functions/map.ts",
        "utf-8"
      ),
      rust: readFileSync(
        __dirname +
          "/../examples/higher-order-functions/map.rs",
        "utf-8"
      ),
    },
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
      kotlin: readFileSync(
        __dirname +
          "/../examples/algebraic-data-types/algebraic-data-types.kt",
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
      ),
    },
  },
  {
    key: "async-await",
    title: "Concurrency with async/await",
    code: {
      swift: readFileSync(
        __dirname +
          "/../examples/async-await/async-await.swift",
        "utf-8"
      ),
      kotlin: readFileSync(
        __dirname +
          "/../examples/async-await/async-await.kt",
        "utf-8"
      ),
      typescript: readFileSync(
        __dirname +
          "/../examples/async-await/async-await.ts",
        "utf-8"
      ),
      rust: readFileSync(
        __dirname +
          "/../examples/async-await/async-await.rs",
        "utf-8"
      ),
    },
  },
];
