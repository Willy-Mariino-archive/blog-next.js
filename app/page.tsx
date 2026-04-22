import { getAllPosts } from "@/lib/posts"
export default function Home() {


  const allPost = getAllPosts()

  return (
    <div>
      <h1>ciao</h1>

      {
        allPost.map((post, index) => (
          <div key={index}>
            {post.title}
          </div>
        )
        )
      }

    </div>
  );
}
