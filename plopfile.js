/**
 * Generator
 * @param {import('plop').NodePlopAPI} plop Plop
 */
module.exports = function (plop) {
  plop.setGenerator('screen', {
    description: 'Create a new screen',
    prompts: [
      {
        type: 'input',
        name: 'screenName',
        message: 'Enter the screen name',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'app/screens/{{dashCase screenName}}/{{ pascalCase screenName }}Screen.tsx',
        templateFile: 'plop-templates/new-screen-component.hbs',
      },
      {
        type: 'add',
        path: 'app/screens/{{dashCase screenName}}/styles.ts',
        templateFile: 'plop-templates/new-screen-styles.hbs',
      },
    ],
  });
};
