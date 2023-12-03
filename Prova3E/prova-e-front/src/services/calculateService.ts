export const calcularOperacao = async (
  a: string,
  b: string,
  operation: string
): Promise<string> => {
  const url = `http://localhost:3501/${a}/${b}/${operation}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.response;
};
