export default class TheoryExampleModel {
    exampleId: number;
    theoryDetailId: number;
    userId: number;
    name: string;
    answer: string;
    createdAt: string;
    updatedAt: string;

    constructor(
        exampleId: number,
        theoryDetailId: number,
        name: string,
        answer: string,
        userId: number,
        createdAt: string,
        updatedAt: string,
    ) {
        this.exampleId = exampleId;
        this.theoryDetailId = theoryDetailId;
        this.name = name;
        this.answer = answer;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}