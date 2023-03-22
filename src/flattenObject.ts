interface DeepObject {
  [key: string]: string | DeepObject;
}

interface FlattenedObject {
  [key: string]: string;
}
/* helper method recursion */
/*
export const flattenObject = (obj: DeepObject) => {
  const flattenedObject: {[key: string]: string} = {};

  (function fo(obj: DeepObject, baseKey?: string) {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = baseKey ? `${baseKey}.${key}` : key;
      if (typeof value === 'string') {
        flattenedObject[newKey] = value;
      } else {
        fo(value, newKey);
      }
    });
  })(obj);

  return flattenedObject;
};

*/

/* pure recursion */

export const flattenObject = (
  obj: DeepObject,
  flattenedObject: FlattenedObject = {},
  baseKey = ''
) => {
  return Object.entries(obj).reduce((flattenedObject, [key, value]) => {
    const newKey = baseKey ? `${baseKey}.${key}` : key;

    if (typeof value === 'string') {
      flattenedObject[newKey] = value;
    } else {
      flattenObject(value, flattenedObject, newKey);
    }

    return flattenedObject;
  }, flattenedObject);
};
