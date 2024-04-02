
import React from "react";
import PostCatModel from "../models/PostCatModel";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../models/JwtPayLoad";

interface ResultInterface {
    result: PostCatModel[];
    totalPages: number;
    totalPostCat: number;
}

export async function getPostCat(url: string): Promise<ResultInterface> {
    const result: PostCatModel[] = [];
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
    const totalPostCat: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.postCategories.forEach((postCatData: any) => {
        result.push({
            postCatId: postCatData.postCatId,
            postCatParentId: postCatData.postCatParentId,
            postCatName: postCatData.postCatName,
            desc: postCatData.desc,
            createdAt: postCatData.createdAt,
            updatedAt: postCatData.updatedAt,
        });
    });

    return { result: result, totalPostCat: totalPostCat, totalPages: totalPages };
}

export async function getPostCats(): Promise<PostCatModel[]> {
    const url: string = `http://localhost:8080/post-cat`;
    return (await getPostCat(url)).result;
}

export async function getPostCatByPostId(postId: number): Promise<PostCatModel | null> {
    const url: string = `http://localhost:8080/post-detail/${postId}/postCategory`;
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
        const postCatData = await response.json();
        // Nếu không có sách nào cả
        if (!postCatData) {
            throw new Error('Không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            postCatId: postCatData.postCatId,
            postCatParentId: postCatData.postCatParentId,
            postCatName: postCatData.postCatName,
            desc: postCatData.desc,
            createdAt: postCatData.createdAt,
            updatedAt: postCatData.updatedAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}


export async function getListPostCat(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/post-cat?sort=postCatId,desc&size=8&page=${page}`;
    return getPostCat(url);
}


export async function deletePostCat(postCatId: number) {
    const url: string = `http://localhost:8080/post-cat/${postCatId}`;
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


export async function getPostCatById(postCatId: number): Promise<PostCatModel | null> {
    const url: string = `http://localhost:8080/post-cat/${postCatId}`;
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
        const postCatData = await response.json();
        // Nếu không có sách nào cả
        if (!postCatData) {
            throw new Error('Không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            postCatId: postCatData.postCatId,
            postCatParentId: postCatData.postCatParentId,
            postCatName: postCatData.postCatName,
            desc: postCatData.desc,
            createdAt: postCatData.createdAt,
            updatedAt: postCatData.updatedAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
