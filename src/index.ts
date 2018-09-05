export * from './lib/async';
export * from './lib/hash';
export * from './lib/number';

async function initServer(): Promise<void> {
  console.log('hello');
}

// tslint:disable-next-line:no-expression-statement
initServer();
