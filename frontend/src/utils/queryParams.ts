// Función para convertir objeto de parámetros de consulta a string
export function queryString(params: Record<string, string | number>) {
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join("&");
}

export function cleanParams(obj: Record<string, any>) {
  const filteredObj: Record<string, string> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}
