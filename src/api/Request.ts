
export async function my_request(url: string) {
    // Truy vấn đến đường dẫn
    const response = await fetch(url);

    // Nếu trả về lỗi
    if(!response.ok) {
        throw new Error(`Không thể truy cập ${url}`);
    }

    // Nếu trả về OKE
    return response.json();
} 