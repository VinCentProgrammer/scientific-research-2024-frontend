
import React from "react";
import { my_request } from "./Request";
import PermissionModel from "../models/PermissionModel";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../models/JwtPayLoad";

interface ResultInterface {
    result: PermissionModel[];
    totalPages: number;
    totalPermission: number;
}

async function getPermission(url: string): Promise<ResultInterface> {
    const result: PermissionModel[] = [];
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
    const totalPermission: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.permissions.forEach((permissionData: any) => {
        result.push({
            permissionId: permissionData.permissionId,
            name: permissionData.name,
            slug: permissionData.slug,
            desc: permissionData.desc,
            createdAt: permissionData.createdAt
        });
    });

    return { result: result, totalPermission: totalPermission, totalPages: totalPages };
}

export async function getPermissions(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/permission?sort=permissionId,desc&size=8&page=${page}`;
    return getPermission(url);
}


export async function deletePermission(id: number) {
    const url: string = `http://localhost:8080/permission/${id}`;
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


export async function getPermissionById(id: number): Promise<PermissionModel | null> {
    const url: string = `http://localhost:8080/permission/${id}`;
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
            throw new Error(`Lỗi khi truy cập đến API lấy permission! ${url}`);
        }
        // Nếu trả về OKE
        const permissionData = await response.json();
        // Nếu không có sách nào cả
        if (!permissionData) {
            throw new Error('User không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            permissionId: permissionData.permissionId,
            name: permissionData.name,
            slug: permissionData.slug,
            desc: permissionData.desc,
            createdAt: permissionData.createdAt
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}

// export async function findUser(keyword: string): Promise<ResultInterface> {

//     const url: string = `http://localhost:8080/user/search/findByUsernameContaining?sort=userId,desc&size=8&page=0&username=${keyword}`;

//     return getUser(url);
// }

// export async function deleteUser(id: number) {
//     const url: string = `http://localhost:8080/user/${id}`;
//     const token = localStorage.getItem('token');

//     // Kiểm tra xem token có tồn tại không
//     if (!token) {
//         throw new Error('Token not found in localStorage');
//     }

//     try {
//         const response = await fetch(url, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             }
//         });

//         // Kiểm tra xem có lỗi trong phản hồi không
//         if (!response.ok) {
//             const responseData = await response.json();
//             throw new Error(`Error ${response.status}: ${responseData.message}`);
//         }
//         // Kiểm tra xem có xóa user hiện tại đang login hay không

//         return true; // Trả về true nếu xóa thành công
//     } catch (error) {
//         console.error('Error deleting user:', error);
//         throw error; // Ném lỗi để xử lý tại nơi gọi hàm này nếu cần
//     }
// }


// export async function laySachTheMaSach(maSach: number): Promise<PermissionModel | null> {
//     const url: string = `http://localhost:8080/sach/${maSach}`;
//     try {
//         // Truy vấn đến đường dẫn
//         const response = await fetch(url);
//         // Nếu trả về lỗi
//         if (!response.ok) {
//             throw new Error(`Lỗi khi truy cập đến API lấy sách! ${url}`);
//         }
//         // Nếu trả về OKE
//         const sachData = await response.json();
//         // Nếu không có sách nào cả
//         if (!sachData) {
//             throw new Error('Sách không tồn tài!');
//         }
//         // Có sách yêu cầu
//         return {
//             maSach: sachData.maSach,
//             tenSach: sachData.tenSach,
//             giaBan: sachData.giaBan,
//             giaNiemYet: sachData.giaNiemYet,
//             moTa: sachData.moTa,
//             soLuong: sachData.soLuong,
//             tenTacGia: sachData.tenTacGia,
//             trungBinhXepHang: sachData.trungBinhXepHang
//         }
//     } catch (error) {
//         console.error('Error: ', error);
//         return null;
//     }
// }