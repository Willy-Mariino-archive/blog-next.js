import { Post } from "@/types"

interface PostDetailProps {
    post: Post
}


function PostDetails({ post }: PostDetailProps) {

    return (
        <>
            <article className="post-card">
                <h2 className="post-title">
                    {post.title}
                </h2>
                <div className="post-date">
                    {post.date}
                </div>
                <p className="post-abstract">
                    {post.abstract}
                </p>
            </article>
        </>
    )
}

export default PostDetails