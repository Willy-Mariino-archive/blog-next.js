import { Post } from "@/types"
import Link from "next/link"

interface PostCardProps {
    post: Post
}


function PostCard({ post }: PostCardProps) {

    return (
        <>

            <Link href={`/posts/${post.slug}`}>
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
            </Link>
        </>
    )
}

export default PostCard