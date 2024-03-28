export default class PermissionModel {
    permissionId: number;
    name: string;
    desc: string;
    slug: string;
    createdAt: string;

    constructor(permissionId: number,
        name: string,
        desc: string,
        slug: string,
        createdAt: string
    ) {
        this.permissionId = permissionId;
        this.name = name;
        this.desc = name;
        this.slug = slug;
        this.createdAt = createdAt;
    }
}