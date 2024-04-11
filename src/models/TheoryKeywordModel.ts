export default class TheoryKeywordModel {
    keywordId: number;
    theoryDetailId: number;
    userId: number;
    keyword: string;
    createdAt: string;

    constructor(
        keywordId: number,
        theoryDetailId: number,
        keyword: string,
        userId: number,
        createdAt: string,
    ) {
        this.keywordId = keywordId;
        this.theoryDetailId = theoryDetailId;
        this.keyword = keyword;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}