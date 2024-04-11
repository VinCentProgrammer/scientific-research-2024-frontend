export default class TheoryModel {
    theoryDetailId: number;
    theoryCatId: number;
    userId: number;
    title: string;
    content: string;
    createdAt: string;

    constructor(
        theoryDetailId: number,
        theoryCatId: number,
        title: string,
        content: string,
        userId: number,
        createdAt: string,
    ) {
        this.theoryDetailId = theoryDetailId;
        this.theoryCatId = theoryCatId;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}