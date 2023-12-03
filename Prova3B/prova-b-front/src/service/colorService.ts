import axios from "axios";

export const getColorList = async () => {
  try {
    const response = await axios.get("http://localhost:3101/list");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do backend:", error);
    throw error;
  }
};

export const updateColor = async (id: number) => {
  try {
    await axios.get(`http://localhost:3101/update/${id}`);
  } catch (error) {
    console.error("Erro ao enviar clique para o backend:", error);
    throw error;
  }
};

export const resetColors = async () => {
  try {
    await axios.get("http://localhost:3101/reset");
  } catch (error) {
    console.error("Erro ao resetar contadores:", error);
    throw error;
  }
};
