const weakMap = new WeakMap();

function queryAPI(endPoint) {
  const nbrCalls = weakMap.get(endPoint) ? weakMap.get(endPoint) + 1 : 1;

  if (nbrCalls >= 5) { throw new Error('Endpoint load is high'); }

  weakMap.set(endPoint, nbrCalls);
}

export { queryAPI, weakMap };
