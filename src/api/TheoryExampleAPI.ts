import TheoryExampleModel from "../models/TheoryExampleModel";

interface ResultInterface {
    result: TheoryExampleModel[];
    totalPages: number;
    totalTheoryExample: number;
}

export async function getTheoryExample(url: string): Promise<ResultInterface> {
    const result: TheoryExampleModel[] = [];
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
    const totalTheoryExample: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.theoryExamples.forEach((theoryExampleData: any) => {
        result.push({
            exampleId: theoryExampleData.exampleId,
            theoryDetailId: theoryExampleData.theoryDetailId,
            name: theoryExampleData.name,
            answer: theoryExampleData.answer,
            userId: theoryExampleData.userId,
            createdAt: theoryExampleData.createdAt,
        });
    });

    return { result: result, totalTheoryExample: totalTheoryExample, totalPages: totalPages };
}

export async function getTheoryExamples(): Promise<TheoryExampleModel[]> {
    const url: string = `http://localhost:8080/theory-example`;
    return (await getTheoryExample(url)).result;
}


export async function getListTheoryExample(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/theory-example?sort=exampleId,asc&size=8&page=${page}`;
    return getTheoryExample(url);
}


export async function deleteTheoryExample(exampleId: number) {
    const url: string = `http://localhost:8080/theory-example/${exampleId}`;
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


export async function getTheoryExampleById(exampleId: number): Promise<TheoryExampleModel | null> {
    const url: string = `http://localhost:8080/theory-example/${exampleId}`;
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
            exampleId: responseData.exampleId,
            theoryDetailId: responseData.theoryDetailId,
            name: responseData.name,
            answer: responseData.answer,
            userId: responseData.userId,
            createdAt: responseData.createdAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
