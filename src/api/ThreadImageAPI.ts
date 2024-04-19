import ThreadImageModel from "../models/ThreadImageModel";

interface ResultInterface {
    result: ThreadImageModel[];
    totalPages: number;
    totalThreadImage: number;
}

export async function getThreadImage(url: string): Promise<ResultInterface> {
    const result: ThreadImageModel[] = [];
    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseData.message}`);
    }

    const totalPages: number = responseData.page.totalPages;
    const totalThreadImage: number = responseData.page.totalElements;

    responseData._embedded.threadImages.forEach((threadImage: any) => {
        result.push({
            imgId: threadImage.imgId,
            name: threadImage.name,
            path: threadImage.path,
            threadId: threadImage.threadId,
            createdAt: threadImage.createdAt,
            updatedAt: threadImage.updatedAt,
        });
    });

    return { result: result, totalThreadImage: totalThreadImage, totalPages: totalPages };
}

export async function getThreadImages(): Promise<ThreadImageModel[]> {
    const url: string = `http://localhost:8080/thread-image`;
    return (await getThreadImage(url)).result;
}


export async function getListThreadImage(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/thread-image?sort=imgId,asc&size=8&page=${page}`;
    return getThreadImage(url);
}

export async function deleteThreadImage(imgId: number) {
    const url: string = `http://localhost:8080/thread-image/${imgId}`;
    const token = localStorage.getItem('token');

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

        if (!response.ok) {
            const responseData = await response.json();
            throw new Error(`Error ${response.status}: ${responseData.message}`);
        }

        return true; // Trả về true nếu xóa thành công
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; // Ném lỗi để xử lý tại nơi gọi hàm này nếu cần
    }
}


export async function getThreadImageById(imgId: number): Promise<ThreadImageModel | null> {
    const url: string = `http://localhost:8080/thread-image/${imgId}`;
    const token = localStorage.getItem('token');
    try {
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Lỗi khi truy cập đến API! ${url}`);
        }
        const threadImage = await response.json();
        if (!threadImage) {
            throw new Error('Không tồn tài!');
        }
        return {
            imgId: threadImage.imgId,
            name: threadImage.name,
            path: threadImage.path,
            threadId: threadImage.threadId,
            createdAt: threadImage.createdAt,
            updatedAt: threadImage.updatedAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}



export async function getThreadImageByThreadId(threadId: number): Promise<ThreadImageModel[] | null> {
    const result: ThreadImageModel[] = [];
    const url: string = `http://localhost:8080/thread/${threadId}/threadImages`;
    const response: Response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseData.message}`);
    }

    responseData._embedded.threadImages.forEach((threadImage: any) => {
        result.push({
            imgId: threadImage.imgId,
            name: threadImage.name,
            path: threadImage.path,
            threadId: threadImage.threadId,
            createdAt: threadImage.createdAt,
            updatedAt: threadImage.updatedAt,
        });
    });

    return result;
}

