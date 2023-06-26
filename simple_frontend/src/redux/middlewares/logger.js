export const logger = (store) => (next) => (action) => {};

const loggerWithStore = logger(store);
const loggerWithNext = loggerWithStore(() => {})