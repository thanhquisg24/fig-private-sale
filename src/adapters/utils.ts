export function getApiCatchErr(err: any): Error {
  if (err.response.data.message) {
    return new Error(err.response.data.message);
  }
  return new Error(err);
}
