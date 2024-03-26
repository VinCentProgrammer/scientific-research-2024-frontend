

export const checkExistedEmail = async (email: string)  => {
    // Endpoint
    const url = `http://localhost:8080/user/search/existsByEmail?email=${email}`;
    // Call API
    try {
        const response = await fetch(url);
        const data = await response.text();
        if (data === 'true') {
            return true;
        }
    } catch (error) {
        console.error("Lỗi khi kiểm tra email: " + error);
        return false;
    }
}