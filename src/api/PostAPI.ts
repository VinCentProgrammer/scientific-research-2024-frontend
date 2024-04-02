
import React from "react";
import PostModel from "../models/PostModel";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../models/JwtPayLoad";

interface ResultInterface {
    result: PostModel[];
    totalPages: number;
    totalPost: number;
}

export async function getPost(url: string): Promise<ResultInterface> {
    const result: PostModel[] = [];
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
    const totalPost: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.postDetails.forEach((postData: any) => {
        result.push({
            postId: postData.postId,
            title: postData.title,
            detail: postData.detail,
            thumbnail: postData.thumbnail,
            desc: postData.desc,
            postCatId: postData.postCatId,
            userId: postData.userId,
            createdAt: postData.createdAt,
            updatedAt: postData.updatedAt,
        });
    });

    return { result: result, totalPost: totalPost, totalPages: totalPages };
}

export async function getPosts(): Promise<PostModel[]> {
    const url: string = `http://localhost:8080/post-detail`;
    return (await getPost(url)).result;
}


export async function getListPost(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/post-detail?sort=postId,desc&size=8&page=${page}`;
    return getPost(url);
}


export async function deletePost(postId: number) {
    const url: string = `http://localhost:8080/post-detail/${postId}`;
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


export async function getPostById(postId: number): Promise<PostModel | null> {
    const url: string = `http://localhost:8080/post-detail/${postId}`;
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
        const postData = await response.json();
        // Nếu không có sách nào cả
        if (!postData) {
            throw new Error('Không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            postId: postData.postId,
            title: postData.title,
            detail: postData.detail,
            thumbnail: postData.thumbnail,
            desc: postData.desc,
            postCatId: postData.postCatId,
            userId: postData.userId,
            createdAt: postData.createdAt,
            updatedAt: postData.updatedAt,
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
