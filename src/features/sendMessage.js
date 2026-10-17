import api from "../../utils/axios";


const sendMessage = async ({ selectedAgent = "auto", formData }) => {
  try {
    const { data } = await api.post(`/api/agent/${selectedAgent}`, formData);
    return data;
  } catch (error) {
    console.error(
      "sendMessage error:",
      error?.response?.data || error.message,
    );
    return null;
  }
};

export default sendMessage;