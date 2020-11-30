const chalk = require('chalk');
const testGoogleScript = require('./cases/google');
const testLinkedinScript = require('./cases/linkedin');

const arguments = process.argv;
const scriptArguments = arguments.slice(3);

const defaultOptions = { headless: true };
const overridedOptions = getOptionsFromArg(arguments[2]);
const options = Object.assign(defaultOptions, overridedOptions);

const SCRIPT_GOOGLE = 'google';
const SCRIPT_LINKEDIN = 'linkedin';

function getOptionsFromArg(arg) {
  let argOptions = {};

  arg.split(',').forEach((option) => {
    const optionArr = option.split('=');
    const key = optionArr[0];
    const getValue = () => {
      if (optionArr[1] === 'true') return true;
      else if (optionArr[1] === 'false') return false;
      else optionArr[1];
    };

    argOptions[key] = getValue();
  });

  return argOptions;
}

async function testAllScripts() {
  const allScriptNames = [SCRIPT_GOOGLE, SCRIPT_LINKEDIN];
  await testRequestedScripts(allScriptNames);
}

async function testRequestedScripts(scriptNames) {
  let promises = [];

  for (let i = 0; i < scriptNames.length; i++) {
    const scriptName = scriptNames[i];
    const currentScriptPromise = executeScript(scriptName);
    promises.push(currentScriptPromise);
  }

  Promise.all(promises).then((promisedValues) => {
    promisedValues.forEach((value, key) => {
      const scriptName = chalk.bgYellow(chalk.black(scriptNames[key]));
      const resultText = Boolean(value)
        ? chalk.green('success')
        : chalk.red('failed');
      console.log(`>> test script ${scriptName} is ${resultText}`);
    });
  });
}

function executeScript(scriptName) {
  const launchOptions = {
    headless: options.headless,
  };

  switch (scriptName) {
    case SCRIPT_GOOGLE:
      return testGoogleScript(launchOptions);
    case SCRIPT_LINKEDIN:
      return testLinkedinScript(launchOptions);
    default:
      throw new Error('Script name unrecognized.');
  }
}

async function startTesting() {
  if (scriptArguments.indexOf('all') >= 0) {
    await testAllScripts();
  } else {
    await testRequestedScripts(scriptArguments);
  }
}

startTesting();
