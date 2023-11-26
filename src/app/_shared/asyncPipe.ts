function asyncPipe<A, B>(ab: (a: A) => Promise<B>): (a: Promise<A>) => Promise<B>;
function asyncPipe<A, B, C>(ab: (a: A) => Promise<B>, bc: (b: B) => Promise<C>): (a: Promise<A>) => Promise<C>;
function asyncPipe<A, B, C, D>(ab: (a: A) => Promise<B>, bc: (b: B) => Promise<C>, cd: (C: C) => Promise<D>): (a: Promise<A>) => Promise<D>;
function asyncPipe<A, B, C, D, E>(ab: (a: A) => Promise<B>, bc: (b: B) => Promise<C>, cd: (C: C) => Promise<D>, ef: (D: D) => Promise<E>): (a: Promise<A>) => Promise<E>;
function asyncPipe(...fns: Function[]) {
  return (x: any) => fns.reduce(async (y, fn) => {
    return fn(await y);
  }, x)
};

export default asyncPipe;
