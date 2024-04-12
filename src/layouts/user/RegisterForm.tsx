import React, { useState } from 'react';
import getBase64 from '../../utils/Base64';

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [gender, setGender] = useState(1);
    const [avatar, setAvatar] = useState<File | null>(null);


    // Các biến báo lỗi
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRePassword, setErrorRePassword] = useState("");
    const [notification, setNotification] = useState("");


    // Handle submit form
    const handleSubmit = async (e: React.FormEvent) => {
        // Clear any previous error messages
        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorRePassword('');

        // Tránh click liên tục
        e.preventDefault();

        // Kiểm tra các điều kiện và gán kết quả vào biến
        const isUsernameValid = !await checkExistedUsername(username);
        const isEmailValid = !await checkExistedEmail(email);
        const isPasswordValid = !checkPassword(password);
        const isRePasswordValid = !checkRePassword(rePassword);

        // Kiểm tra tất cả các điều kiện
        if (isUsernameValid && isEmailValid && isPasswordValid && isRePasswordValid) {
            const base64Avatar = avatar ? await getBase64(avatar) : null;

            try {
                const url = 'http://localhost:8080/account/register';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                        firstname: firstname,
                        lastname: lastname,
                        phoneNumber: phoneNumber,
                        gender: gender,
                        active: 0,
                        activeCode: "",
                        avatar: base64Avatar
                    })
                }
                );

                if (response.ok) {
                    setNotification("Registration successful, please check your email to activate your account!");
                } else {
                    console.log(response.json());
                    setNotification("An error occurred during account registration.")
                }
            } catch (error) {
                setNotification("An error occurred during account registration.")
            }
        }

    }

    //////////////======CHECK USERNAME========///////////////////
    const checkExistedUsername = async (username: string) => {
        // Endpoint
        const url = `http://localhost:8080/user/search/existsByUsername?username=${username}`;
        // Call API
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === 'true') {
                setErrorUsername('Username available!');
                return true;
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra tên đăng nhập: " + error);
            return false;
        }
    }

    const handleUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        setErrorUsername('');
        return checkExistedUsername(e.target.value);
    }

    //////////////======CHECK EMAIL ========///////////////////
    const checkExistedEmail = async (email: string) => {
        // Endpoint
        const url = `http://localhost:8080/user/search/existsByEmail?email=${email}`;
        // Call API
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === 'true') {
                setErrorEmail('Email address already exists!');
                return true;
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra email: " + error);
            return false;
        }
    }

    const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setErrorEmail('');
        return checkExistedEmail(e.target.value);
    }

    //////////////======CHECK PASSWORD ========///////////////////
    const checkPassword = (password: string) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorPassword("Password must have at least 8 characters and include at least 1 special character (!@#$%^&*)");
            return true;
        } else {
            setErrorPassword("");
            return false;
        }
    }

    const handlePassOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setErrorPassword('');
        return checkPassword(e.target.value);
    }

    //////////////======CHECK RE PASSWORD ========///////////////////
    const checkRePassword = (rePassword: string) => {
        if (rePassword !== password) {
            setErrorRePassword("Passwords do not match.");
            return true;
        } else {
            setErrorRePassword(""); // Mật khẩu trùng khớp
            return false;
        }
    }

    const handleRePassOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
        setErrorRePassword('');
        return checkRePassword(e.target.value);
    }

    //////////////====== HANDLE AVATAR ========///////////////////
    const handleAvatarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setAvatar(file);
        }
    };

    return (
        <section className="py-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">

                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                            className="img-fluid" alt="Sample image" />
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                            {/* Username */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="username">Username <span className="text-danger">(*)</span>
                                                        <span style={{ color: "red", marginLeft: '10px' }}>{errorUsername}</span>
                                                    </label>
                                                    <input type="text" id="username"
                                                        value={username}
                                                        placeholder="Enter a valid username"
                                                        onChange={handleUsernameOnChange}
                                                        className="form-control" />
                                                </div>

                                            </div>


                                            {/* Email */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="email">Email <span className="text-danger">(*)</span>
                                                        <span style={{ color: "red", marginLeft: '10px' }}>{errorEmail}</span>
                                                    </label>
                                                    <input type="email" id="email"
                                                        value={email}
                                                        placeholder="Enter a valid email"
                                                        onChange={handleEmailOnChange}
                                                        className="form-control" />
                                                </div>
                                            </div>

                                            {/* Firstname */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-signature me-3"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="firstname">Firstname</label>
                                                    <input type="text" id="firstname" className="form-control"
                                                        value={firstname}
                                                        placeholder="Enter your firstname"
                                                        onChange={(e) => setFirstname(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Lastname */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-signature me-3"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="lastname">Lastname </label>
                                                    <input type="text" id="lastname" className="form-control"
                                                        value={lastname}
                                                        placeholder="Enter your lastname"
                                                        onChange={(e) => setLastname(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone number */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-phone-volume me-3"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="phoneNumber">Phone Number </label>
                                                    <input type="text" id="phoneNumber" className="form-control"
                                                        value={phoneNumber}
                                                        placeholder="Enter your phone number"
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Gender */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-venus-mars me-3"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="gender">Gender</label>
                                                    <div className="container row">
                                                        <div className="form-check col-md-3">
                                                            <input className="form-check-input" type="radio" name="exampleRadios" id="male" value={1}
                                                                onChange={e => setGender(parseInt(e.target.value))}
                                                                checked />
                                                            <label className="form-check-label" htmlFor="male">
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="form-check col-md-3">
                                                            <input className="form-check-input" type="radio" name="exampleRadios" id="female" value={0}
                                                                onChange={e => setGender(parseInt(e.target.value))} />
                                                            <label className="form-check-label" htmlFor="female">
                                                                Female
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Password */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="password">Password <span className="text-danger">(*)</span><span style={{ color: "red", marginLeft: '10px' }}>{errorPassword}</span></label>
                                                    <input type="password" id="password"
                                                        value={password}
                                                        placeholder="Enter your passowrd"
                                                        onChange={handlePassOnChange}
                                                        className="form-control" />
                                                </div>
                                            </div>

                                            {/* Repeat Password */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="passwordRepeat">Repeat password <span className="text-danger">(*)</span><span style={{ color: "red", marginLeft: '10px' }}>{errorRePassword}</span></label>
                                                    <input type="password" id="passwordRepeat"
                                                        value={rePassword}
                                                        placeholder="Enter your repeat password"
                                                        onChange={handleRePassOnChange}
                                                        className="form-control" />
                                                </div>
                                            </div>

                                            {/* Avatar */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-regular fa-image me-3"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="avatar">Avatar</label>
                                                    <input type="file" id="avatar" className="form-control"
                                                        accept='images/*'
                                                        onChange={handleAvatarOnChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                            <div style={{ color: "green" }}>{notification}</div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm;