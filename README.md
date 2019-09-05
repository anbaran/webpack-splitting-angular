# webpack-splitting-angular
A minimal working sample to demonstrate splitting angular app with webpack

## Requirements
- there are multiple entry points which should result in the same output files but with correctly split code 
- it should be possible to load only some of the modules (for example on the html page there will only be included: main.bundle.js and feature1.bundle.js , the feature2.bundle.js is only included in certain cirmumstation)

## How to reproduce

- checkout the repository: `git clone https://github.com/anbaran/webpack-splitting-angular.git`
- `cd webpack-splitting-angular`

### Case 1 - without manual split code - `case1-webpack.config.js`

run: `npx webpack --config case1-webpack.config.js --progress --display-error-details`

Result:
#### OK 
- generated chunks contain runtime module (it is ok, they can run even if other chunk is missing)
#### Not OK
- chunks are not separated correctly i.e. 
- common-ui.bundle.js is empty (contains only runtime module)
- new bundle other than in entry point was generated (common-ui~feature1~feature2~main.bundle.js)
- main.bundle.js contains the feature1.bundle.js and feature2.module.js (code duplication in main.bundle.js and feature1.bundle.js, feature2.bundle.js )

### Case 2 - with manual split code - `case2-webpack.config.js`

run: `npx webpack --config case2-webpack.config.js --progress --display-error-details`

Result: 
#### OK 
- code is separated correctly, each functionality is in corresponding module/entry point
#### Not OK
- generated chunks don't contain runtime module (meaning they can only work if all other modules are present)
