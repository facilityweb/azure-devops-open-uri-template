# Custom Control for the Work Item Form

[Learn how to build your own custom control for the work item form.](https://www.visualstudio.com/en-us/docs/integrate/extensions/develop/custom-control)

![Control](img/logo.png)

### Usage ###

1. Download the repository.
2. Open the Command Prompt and change to the directory where you cloned the project. 
3. Make This Steps : 
    1. Run `npm install` to install required dependencies.
    2. Run `npm install -g grunt` to install a global copy of grunt.
    3. Run `npm install -g tfx-cli`
    4. Check the category value in the 'vss-extension.json' file 
        1. "Plan and track" for TFS 2017
        2. "Azure Boards" for TFS 2019
    5. Run `grunt package-dev`.
    6. Navigate to your TFS. and Go to Marketplace. 
    7. Click "Browse local extensions".
    8. Scroll down and click on the "Manage Extensions".
    9. Click "Upload new extension".
    10. Drag and Drop the generated file from your packaged project (vsix). 
    11. Click "Upload".
    12. Hover over the extension when it appears in the list, and click "Install".
