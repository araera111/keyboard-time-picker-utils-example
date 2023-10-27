/** @type {import('plop').NodePlopAPI} */
import { readdirSync } from "fs";
const features = readdirSync("src/features").map((it) => ({
  name: it,
  value: it,
}));

const componentList = [
  { name: "basic", value: "basic" },
  { name: "modal", value: "modal" },
  { name: "button", value: "button" },
];

export default function (plop) {
  plop.setGenerator("feature", {
    description: "generate a new feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "feature name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{name}}/index.ts",
        templateFile: "plopTemplates/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/features/{{name}}/components/{{pascalCase name}}.tsx",
        templateFile: "plopTemplates/components/Component.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("component", {
    description: "generate a new component",
    prompts: [
      {
        type: "list",
        name: "parentPath",
        message: "src/features/{path please}/components/...",
        choices: features,
      },
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
      {
        type: "list",
        name: "type",
        message: "component type please",
        choices: componentList,
      },
    ],
    actions: (data) => {
      let actions = [];
      if (data.type === "basic") {
        actions.push({
          type: "add",
          path: "src/features/{{parentPath}}/components/{{pascalCase name}}.tsx",
          templateFile: "plopTemplates/components/Component.tsx.hbs",
        });
      }

      if (data.type === "modal") {
        actions.push({
          type: "add",
          path: "src/features/{{parentPath}}/components/{{pascalCase name}}.tsx",
          templateFile: "plopTemplates/components/ModalComponent.tsx.hbs",
        });
      }

      if (data.type === "button") {
        actions.push({
          type: "add",
          path: "src/features/{{parentPath}}/components/{{pascalCase name}}.tsx",
          templateFile: "plopTemplates/components/ButtonComponent.tsx.hbs",
        });
      }

      return actions;
    },
  });
  /* store作成 */
  plop.setGenerator("store", {
    description: "generate a new store",
    prompts: [
      {
        type: "list",
        name: "parentPath",
        message: "src/features/{path please}/components/...",
        choices: features,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{parentPath}}/stores/{{camelCase parentPath}}Store.ts",
        templateFile: "plopTemplates/stores/store.ts.hbs",
      },
    ],
  });

  /* hook作成 */
  plop.setGenerator("hook", {
    description: "generate a new hook",
    prompts: [
      {
        type: "list",
        name: "parentPath",
        message: "src/features/{path please}/components/...",
        choices: features,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{parentPath}}/hooks/{{camelCase parentPath}}Hook.ts",
        templateFile: "plopTemplates/hooks/hook.ts.hbs",
      },
    ],
  });
}
