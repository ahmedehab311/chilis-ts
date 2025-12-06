import axios from "axios";
export const fetchIamgeSlider = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/slider/1`);

    return response.data.data.slider;
  } catch (error) {
    console.error("Error fetching Orders:", error);
    throw error;
  }
};
