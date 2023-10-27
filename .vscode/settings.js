{
    "eslint.validate": ["javascript"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false, // required 
    "editor.formatOnType": false, // required
    "editor.formatOnSave": true, // optional 
    "editor.formatOnSaveMode": "file", // required to format on save
    "files.autoSave": "onFocusChange", // optional but recommended
    "vs-code-prettier-eslint.prettierLast": false, // set as "true" to run 'prettier' last not first
    "emmet.includeLanguages": {
        "ejs": "html",
      },
     "[html]": {
        "editor.defaultFormatter": "j69.ejs-beautify"
      },
  }