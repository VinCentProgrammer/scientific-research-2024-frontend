class UserModel {
    userId: number;
    username: string;
    email: string;
    active: boolean;
    gender: boolean;
    createdAt: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    avatar?: string;
    phoneNumber?: string;

    constructor(
        userId: number,
        username: string,
        email: string,
        active: boolean,
        gender: boolean,
        createdAt: string,
        firstname?: string,
        lastname?: string,
        address?: string,
        avatar?: string,
        phoneNumber?: string,
    ) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.active = active;
        this.gender = gender;
        this.createdAt = createdAt;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.avatar = avatar;
        this.phoneNumber = phoneNumber;
    }
}

export default UserModel;