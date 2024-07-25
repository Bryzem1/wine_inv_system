const API_URL = process.env.REACT_APP_API_URL;

export const fetchWineLists = async () => {
    const response = await fetch(`${API_URL}/wine-lists`);
    return response.json();
};

export const fetchWineList = async (id: string) => {
    const response = await fetch(`${API_URL}/wine-list/${id}`);
    return response.json();
};
