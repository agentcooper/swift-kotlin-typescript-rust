import {
  examples,
  Example,
  Languages
} from "./examples";
import { playground } from "./playground";

const examplesNode = document.querySelector<
  HTMLSelectElement
>("#examples");

examplesNode!.innerHTML = examples
  .map(
    example =>
      `<option value="${example.key}">${
        example.title
      }</option>`
  )
  .join("\n");

function findExample(
  exampleKey: string
): Example {
  const example = examples.find(
    example => example.key === exampleKey
  );

  if (!example) {
    throw new Error(
      `Example "${exampleKey}" not found.`
    );
  }

  return example;
}

examplesNode!.addEventListener(
  "change",
  event => {
    const exampleKey = (<HTMLInputElement>(
      event.target
    )).value;
    location.hash = exampleKey;
  }
);

function render(example: Example) {
  for (const [
    language,
    fileContent
  ] of Object.entries(example.code)) {
    const node = document.querySelector(
      `#${language}`
    );

    const code = node!.querySelector(".code");
    code!.textContent = fileContent;

    const anchor = node!.querySelector<
      HTMLAnchorElement
    >(".playground-link");
    if (anchor) {
      anchor.href = playground[
        language as Languages
      ](fileContent);
    }
  }

  examplesNode!.value = example.key;
  location.hash = example.key;
}

function renderFromHash() {
  const exampleKey = location.hash.slice(1);
  if (exampleKey) {
    render(findExample(exampleKey));
  }
}

window.addEventListener("hashchange", () => {
  renderFromHash();
});

if (location.hash) {
  renderFromHash();
} else {
  render(examples[0]);
}
