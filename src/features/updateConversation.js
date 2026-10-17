import api from "../../utils/axios";

export const updateConversation = async ({ id, title }) => {
  try {
    const { data } = await api.patch(
      `/api/chat/conversations/${id}`,
      { title },
    );
    return data;
  } catch (error) {
    console.error("updateConversation error:", error?.response?.data || error);
    return null;
  }
};

export default updateConversation;