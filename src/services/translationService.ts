export const translateText = async (
    text: string,
    from: string,
    to: string
  ): Promise<string> => {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${from}|${to}`;
  
    try {
      const response = await fetch(url);
  
      // Check for non-OK HTTP status
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Handle MyMemory API error responses
      if (data.responseStatus !== 200) {
        throw new Error(`API error: ${data.responseDetails}`);
      }
  
      return data.responseData.translatedText;
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      throw new Error(
        "Erro ao traduzir o texto. Por favor, tente novamente mais tarde."
      );
    }
  };
  