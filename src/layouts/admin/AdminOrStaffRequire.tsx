import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../../models/JwtPayLoad";

const AdminOrStaffRequire = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAdminCheck: React.FC<P> = (props) => {
        const navigate = useNavigate();
        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate("/login");
                return;
            } else {
                // Giải mã token
                const decodedToken = jwtDecode(token) as JwtPayload;

                // Lấy thông tin cụ thể
                const isAdmin = decodedToken.isAdmin;
                const isStaff = decodedToken.isStaff;
                

                // Kiểm tra không phải là admin hoac khong phai la staff
                if (!isAdmin && !isStaff) {
                    navigate("/page/403");
                    return;
                }
            }
        }, [navigate]);
        return <WrappedComponent {...props} />
    }
    return WithAdminCheck;
}

export default AdminOrStaffRequire;