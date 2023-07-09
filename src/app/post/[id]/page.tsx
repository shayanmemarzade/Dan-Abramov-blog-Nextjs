import { formatDate, subDay } from '../../../utils/date-format';
import { Post } from '../../../model/post'

export default async function Post({ params }: { params: { id: number } }) {
  const { id } = params;
  const post: Post = await getData(id)

  return (
    <main className="flex flex-col max-w-2xl m-auto">

      {
        <article key={post.id} className='mb-12'>
          <header>
            <h3 className='text-3xl dark:text-pink-300 text-pink-700 font-bold mb-2'>{post.title}</h3>
            <small className='dark:text-white'>{post.date} • ☕️☕️☕️ 14 min read</small>
          </header>
          <p className='dark:text-white'>{post.body}</p>
        </article>
      }
    </main>
  )
}

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  const post_date = subDay(post.id); // Calculate date based on ID
  post.date = formatDate(post_date); // Assign the formated date to the "date" key
  return post
}
