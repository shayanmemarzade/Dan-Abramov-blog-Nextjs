import Image from 'next/image'
import Link from 'next/link'
import { formatDate, subDay } from '../utils/date-format';
import { Post } from '../model/post'

export default async function Home() {
  const posts = await getData()

  return (
    <main className="flex flex-col max-w-2xl m-auto">

      {
        posts?.map((post: Post) =>
          <article key={post.id} className='mb-12'>
            <header>
              <Link href={`/post/${post.id}`}>
                <h3 className='text-3xl dark:text-pink-300 text-pink-700 font-bold mb-2'>{post.title}</h3>
              </Link>
              <small className='dark:text-white'>{post.date} • ☕️☕️☕️ 14 min read</small>
            </header>
            <p className=' dark:text-white '>{post.body}</p>
          </article>
        )
      }
    </main>
  )
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  posts.forEach((post: Post) => {
    const post_date = subDay(post.id); // Calculate date based on ID
    post.date = formatDate(post_date); // Assign the formated date to the "date" key
  });
  // Sort the API response by the "date" field in ascending order
  posts.sort((a: any, b: any) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  return posts
}
