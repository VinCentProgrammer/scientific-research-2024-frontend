
import React from "react";
import TheoryModel from "../models/TheoryModel";

interface ResultInterface {
    result: TheoryModel[];
    totalPages: number;
    totalTheory: number;
}

export async function getTheory(url: string): Promise<ResultInterface> {
    const result: TheoryModel[] = [];
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
    const totalTheory: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.theoryDetails.forEach((theoryData: any) => {
        result.push({
            theoryDetailId: theoryData.theoryDetailId,
            theoryCatId: theoryData.theoryCatId,
            title: theoryData.title,
            content: theoryData.content,
            userId: theoryData.userId,
            createdAt: theoryData.createdAt,
        });
    });

    return { result: result, totalTheory: totalTheory, totalPages: totalPages };
}

export async function getTheories(): Promise<TheoryModel[]> {
    const url: string = `http://localhost:8080/theory-detail`;
    return (await getTheory(url)).result;
}


export async function getListTheory(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/theory-detail?sort=theoryId,asc&size=8&page=${page}`;
    return getTheory(url);
}


export async function deleteTheory(theoryId: number) {
    const url: string = `http://localhost:8080/theory-detail/${theoryId}`;
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


export async function getTheoryById(theoryId: number): Promise<TheoryModel | null> {
    const url: string = `http://localhost:8080/theory-detail/${theoryId}`;
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
            theoryDetailId: responseData.theoryDetailId,
            theoryCatId: responseData.theoryCatId,
            title: responseData.title,
            content: responseData.content,
            userId: responseData.userId,
            createdAt: responseData.createdAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
