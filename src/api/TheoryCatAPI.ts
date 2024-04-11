import TheoryCatModel from "../models/TheoryCatModel";

interface ResultInterface {
    result: TheoryCatModel[];
    totalPages: number;
    totalTheoryCat: number;
}

export async function getTheoryCat(url: string): Promise<ResultInterface> {
    const result: TheoryCatModel[] = [];
    // const token = localStorage.getItem('token');

    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    });

    const responseData = await response.json(); // Phải await để chờ dữ liệu JSON được trả về


    // Kiểm tra xem có lỗi trong phản hồi không
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseData.message}`);
    }

    const totalPages: number = responseData.page.totalPages;
    const totalTheoryCat: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.theoryCategories.forEach((theoryData: any) => {
        result.push({
            theoryCatId: theoryData.theoryCatId,
            theoryParentCatId: theoryData.theoryParentCatId,
            userId: theoryData.userId,
            name: theoryData.name,
            shortDesc: theoryData.shortDesc,
            createdAt: theoryData.createdAt
        });
    });

    return { result: result, totalTheoryCat: totalTheoryCat, totalPages: totalPages };
}

export async function getTheoryCats(): Promise<TheoryCatModel[]> {
    const url: string = `http://localhost:8080/theory-cat`;
    return (await getTheoryCat(url)).result;
}


export async function getListTheoryCat(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/theory-cat?sort=theoryCatId,asc&size=8&page=${page}`;
    return getTheoryCat(url);
}


export async function deleteTheoryCat(theoryCatId: number) {
    const url: string = `http://localhost:8080/theory-cat/${theoryCatId}`;
    const token = localStorage.getItem('token');

    // Kiểm tra xem token có tồn tại không
    if (!token) {
        throw new Error('Token not found in localStorage');
    }

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Kiểm tra xem có lỗi trong phản hồi không
        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(`Error ${response.status}: ${responseData.message}`);
        }
        // Kiểm tra xem có xóa user hiện tại đang login hay không

        return true; // Trả về true nếu xóa thành công
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; // Ném lỗi để xử lý tại nơi gọi hàm này nếu cần
    }
}


export async function getTheoryCatById(theoryCatId: number): Promise<TheoryCatModel | null> {
    const url: string = `http://localhost:8080/theory-cat/${theoryCatId}`;
    const token = localStorage.getItem('token');

    try {
        // Truy vấn đến đường dẫn
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Nếu trả về lỗi
        if (!response.ok) {
            throw new Error(`Lỗi khi truy cập đến API! ${url}`);
        }
        // Nếu trả về OKE
        const responseData = await response.json();
        // Nếu không có sách nào cả
        if (!responseData) {
            throw new Error('Không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            theoryCatId: responseData.theoryCatId,
            theoryParentCatId: responseData.theoryParentCatId,
            userId: responseData.userId,
            name: responseData.name,
            shortDesc: responseData.shortDesc,
            createdAt: responseData.createdAt
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
