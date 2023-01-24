/**
 * @descrição do arquivo: Este é um arquivo de configuração do eslint para o projeto web com nextjs
 */
module.exports = {
  // Configuração de root
  root: true,
  // Ambiente de execução
  env: {
    browser: true,
    es2021: true,
  },
  // eslint parser para o projeto
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // extends do eslint para o projeto
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  // plugins do eslint para o projeto
  plugins: ['react'],
  // Eslint ignora esses arquivos
  ignorePatterns: ['.eslintrc.js'],
  // Regras do eslint
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'no-undef': 'off'
  },
  // Configurações extras do eslint
  settings: {
    react: {
      version: 'detect',
    },
  },
}
