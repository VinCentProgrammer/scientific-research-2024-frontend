
import React from "react";
import RoleModel from "../models/RoleModel";

interface ResultInterface {
    result: RoleModel[];
    totalPages: number;
    totalRole: number;
}

export async function getRole(url: string): Promise<ResultInterface> {
    const result: RoleModel[] = [];
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
    const totalRole: number = responseData.page.totalElements;

    // Duyệt qua mảng dữ liệu để lấy thông tin của mỗi user
    responseData._embedded.roles.forEach((roleData: any) => {
        result.push({
            roleId: roleData.roleId,
            roleName: roleData.roleName,
            desc: roleData.desc,
            createdAt: roleData.createdAt,
            updatedAt: roleData.updatedAt,
            permissions: roleData.permissons
        });
    });

    return { result: result, totalRole: totalRole, totalPages: totalPages };
}

export async function getRoles(page: number): Promise<ResultInterface> {
    const url: string = `http://localhost:8080/role?sort=roleId,asc&size=4&page=${page}`;
    return getRole(url);
}


export async function deleteRole(id: number) {
    const url: string = `http://localhost:8080/role/${id}`;
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
        console.error('Error deleting role:', error);
        throw error; // Ném lỗi để xử lý tại nơi gọi hàm này nếu cần
    }
}


export async function getRoleById(id: number): Promise<RoleModel | null> {
    const url: string = `http://localhost:8080/role/${id}`;
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
            throw new Error(`Lỗi khi truy cập đến API lấy role! ${url}`);
        }
        // Nếu trả về OKE
        const roleData = await response.json();
        // Nếu không có sách nào cả
        if (!roleData) {
            throw new Error('User không tồn tài!');
        }
        // Có sách yêu cầu
        return {
            roleId: roleData.roleId,
            roleName: roleData.roleName,
            desc: roleData.desc,
            createdAt: roleData.createdAt,
            updatedAt: roleData.updatedAt,
            permissions: roleData.permissons
        }
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}
