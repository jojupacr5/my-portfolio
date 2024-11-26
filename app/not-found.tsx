import { Link } from "@nextui-org/link";

 
export default function NotFound() {
  return (
    <section className="place-self-center relative col-start-1 col-end-13 sm:my-0 sm:col-start-2 sm:col-span-11">
      <div className="mx-auto text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <Link href="/" className="inline-flex text-secondary bg-white-secondary hover:bg-primary hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 dark:bg-secondary dark:text-white-primary dark:hover:bg-primary">Back to Homepage</Link>
      </div>
    </section>
  )
}