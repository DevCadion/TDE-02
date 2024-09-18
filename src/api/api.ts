export function buscarEnderecoPorCEP(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Verifica se o CEP é válido
        if (data.erro) {
          throw new Error("CEP não encontrado");
        }
        return data;
      })
      .catch((error) => {
        console.error("Erro ao buscar o endereço:", error);
        throw error;
      });
  }