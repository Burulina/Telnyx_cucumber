## Description 
This is cypress + cucumber project for testing telnyx.com (ver 1.0).

Documentation for project (test cases) is located in the root directory in the "Docs" folder.
## Setup
1. Before using cypress with cucumber, you need to download and install:
- [last version of VS Code](https://code.visualstudio.com/) or any other IDE (for your choice);
- [at least Node.js 14](https://nodejs.org/uk/download/).
2. Clone git repository:
``` console
git clone https://github.com/Burulina/Telnyx_cucumber
```
- and install node modules:
``` console
npm install
```
## Steps to run
1. To run auto tests manually on local machine with Cypress test runner:
``` console
npm run cy_open
```
- choose ***"E2E testing"*** and after ***"Chrome"*** in opened window;
- click ***"Start E2E testing in Chrome"***;
- click on ***"*.feature"*** file in opened window.

2. To run all auto tests manually on local machine with command line:
``` console
npm run cy_run
```
- Or with another config file:
``` console
npm run cy_staging_run
```
3. To generate HTML report after tests execution:
``` console
cy_generate_report
```
Generated report is located in the root directory in the "reports" folder, open ***"index.html"*** file to see report.