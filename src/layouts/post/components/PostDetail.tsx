import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../../utils/ScrollToTopButton";
import { useEffect, useState } from "react";
import PostModel from "../../../models/PostModel";
import { getPostById } from "../../../api/PostAPI";

function PostDetail() {
    const { postIdParam } = useParams();
    const [post, setPost] = useState<PostModel | null>(null);

    let postId = 0;
    try {
        postId = parseInt(postIdParam + '');
    } catch (error) {
        postId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(postId))
        postId = 0;

    useEffect(() => {
        getPostById(postId)
            .then(
                result => {
                    setPost(result);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [postId]);

    return (
        <section className="py-5 text-start">
            <ScrollToTopButton />
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center mt-lg-5 mb-4">
                            <img className="img-fluid rounded-circle" src={post?.thumbnail} alt="..." />
                            <div className="ms-3">
                                <div className="fw-bold">Admin</div>
                                <div className="text-muted">News, Combinatorics</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                                <div className="text-muted fst-italic mb-2">January 1, 2023</div>
                                <a className="badge bg-secondary text-decoration-none link-light" href="#!">Discrete Math</a>
                                <a className="badge bg-secondary text-decoration-none link-light" href="#!">Ontology</a>
                            </header>
                            <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                            <section className="mb-5">
                                <p className="fs-5 mb-4">Discrete mathematics is the study of mathematical structures that are countable or otherwise distinct and separable. Examples of structures that are discrete are combinations, graphs, and logical statements. Discrete structures can be finite or infinite. Discrete mathematics is in contrast to continuous mathematics, which deals with structures which can range in value over the real numbers, or have some non-separable quality.</p>
                                <p className="fs-5 mb-4">Since the time of Isaac Newton and until quite recently, almost the entire emphasis of applied mathematics has been on continuously varying processes, modeled by the mathematical continuum and using methods derived from the diﬀerential and integral calculus. In contrast, discrete mathematics concerns itself mainly with finite collections of discrete objects. With the growth of digital devices, especially computers, discrete mathematics has become more and more important.</p>
                                <p className="fs-5 mb-4">Discrete structures can be counted, arranged, placed into sets, and put into ratios with one another. Although discrete mathematics is a wide and varied field, there are certain rules that carry over into many topics. The concept of independent events and the rules of product, sum, and PIE are shared among combinatorics, set theory, and probability. In addition, De Morgan's laws are applicable in many fields of discrete mathematics.</p>
                                <h2 className="fw-bolder mb-4 mt-5">Combinatorics</h2>
                                <p className="fs-5 mb-4">Combinatorics is the mathematics of counting and arranging. Of course, most people know how to count, but combinatorics applies mathematical operations to count things that are much too large to be counted the conventional way.</p>
                                <p className="fs-5 mb-4">Combinatorics is especially useful in computer science. Combinatorics methods can be used to develop estimates about how many operations a computer algorithm will require. Combinatorics is also important for the study of discrete probability. Combinatorics methods can be used to count possible outcomes in a uniform probability experiment.</p>
                            </section>
                        </article>
                        <section>
                            <div className="card bg-light">
                                <div className="card-body">
                                    <form className="mb-4"><textarea className="form-control" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">Commenter Name</div>
                                            If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                            <div className="d-flex mt-4">
                                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div className="ms-3">
                                                    <div className="fw-bold">Commenter Name</div>
                                                    And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4">
                                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div className="ms-3">
                                                    <div className="fw-bold">Commenter Name</div>
                                                    When you put money directly to a problem, it makes a good headline.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">Commenter Name</div>
                                            When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostDetail;