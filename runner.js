self.onmessage = event => {
  const logs = [];
  const safeConsole = { log: (...values) => logs.push(values.map(value => String(value)).join(' ')) };
  try {
    Function('console', `'use strict';\n${event.data}`)(safeConsole);
    self.postMessage({ output: logs.join('\n') });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
