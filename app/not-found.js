import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()
}


export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center">
      <img width={500} src="/404.png" alt="" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">Sorry, this page doesn't exist.</p>
    </div>
  );
}
