import PostCatModel from "./PostCatModel";

export default class PostModel {
    postId: number;
    title: string;
    desc: string;
    detail: string;
    thumbnail: string;
    postCategory: PostCatModel;
    userId: number;
    createdAt: string;
    updatedAt: string;

    constructor(
        postId: number,
        title: string,
        desc: string,
        detail: string,
        thumbnail: string,
        postCategory: PostCatModel,
        userId: number,
        createdAt: string,
        updatedAt: string
    ) {
        this.postId = postId;
        this.title = title;
        this.desc = desc;
        this.detail = detail;
        this.thumbnail = thumbnail;
        this.postCategory = postCategory;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}