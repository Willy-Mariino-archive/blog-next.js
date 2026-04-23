import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/PostCard";

export default function Home() {


  const allPost = getAllPosts()

  return (
    <div>
      <h1>ciao</h1>

      <div className="posts-list">
        {
          allPost.map((post) => (

            <PostCard post={post} key={post.slug} />

          )
          )
        }
      </div>

    </div>
  );
}
