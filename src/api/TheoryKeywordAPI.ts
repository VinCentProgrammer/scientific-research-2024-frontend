import TheoryKeywordModel from "../models/TheoryKeywordModel";

interface ResultInterface {
    result: TheoryKeywordModel[];
    totalPages: number;
    totalTheoryKeyword: number;
}

export async function getTheoryKeyword(url: string): Promise<ResultInterface> {
    const result: TheoryKeywordModel[] = [];
    const token = localStorage.getItem('token');

    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const responseData = await response.json(); // Phải await để chờ dữ liệu JSON được trả về


    // Kiểm tra xem có lỗi trong phản hồi không
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseData.message}`);
    }

    const totalPages: number = responseData.page.totalPages;
    const totalTheoryKeyword: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.theoryKeywords.forEach((theoryKeywordData: any) => {
        result.push({
            keywordId: theoryKeywordData.keywordId,
            theoryDetailId: theoryKeywordData.theoryDetailId,
            keyword: theoryKeywordData.keyword,
            userId: theoryKeywordData.userId,
            createdAt: theoryKeywordData.createdAt,
        });
    });

    return { result: result, totalTheoryKeyword: totalTheoryKeyword, totalPages: totalPages };
}

export async function getTheoryKeywords(): Promise<TheoryKeywordModel[]> {
    const url: string = `http://localhost:8080/theory-keyword`;
    return (await getTheoryKeyword(url)).result;
}


export async function getListTheoryKeyword(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/theory-keyword?sort=keywordId,asc&size=8&page=${page}`;
    return getTheoryKeyword(url);
}


export async function deleteTheoryKeyword(keywordId: number) {
    const url: string = `http://localhost:8080/theory-keyword/${keywordId}`;
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


export async function getTheoryKeywordById(keywordId: number): Promise<TheoryKeywordModel | null> {
    const url: string = `http://localhost:8080/theory-keyword/${keywordId}`;
    // const token = localStorage.getItem('token');

    try {
        // Truy vấn đến đường dẫn
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
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
            keywordId: responseData.keywordId,
            theoryDetailId: responseData.theoryDetailId,
            keyword: responseData.keyword,
            userId: responseData.userId,
            createdAt: responseData.createdAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
