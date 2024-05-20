export const Home: React.FC = () => {
  return (
    <>
      <header className="bg-gray-100 py-12 dark:bg-gray-800 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Explore Our Blog
              </h1>
              <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
                Discover a wealth of insights and perspectives on the latest trends, technologies,
                and industry news.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="#"
              >
                Random article
              </a>
            </div>
            <div className="hidden lg:block">
              <img
                alt="Blog hero"
                className="rounded-xl object-cover"
                height="400"
                src="https://picsum.photos/400/400"
                style={{
                  aspectRatio: '400/400',
                  objectFit: 'cover',
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[3fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
            <div className="mt-8 grid gap-8">
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr]">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-xl object-cover"
                  height="150"
                  src="https://picsum.photos/200/150"
                  style={{
                    aspectRatio: '200/150',
                    objectFit: 'cover',
                  }}
                  width="200"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    <a href="#">Unlocking the Power of React Hooks: A Comprehensive Guide</a>
                  </h3>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">
                    Discover how React Hooks can revolutionize your web development workflow. From
                    state management to custom hooks, this guide covers it all.
                  </p>
                </div>
              </div>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr]">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-xl object-cover"
                  height="150"
                  src="https://picsum.photos/200/150"
                  style={{
                    aspectRatio: '200/150',
                    objectFit: 'cover',
                  }}
                  width="200"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    <a href="#">
                      Mastering Responsive Design: Techniques for Building Future-Proof Websites
                    </a>
                  </h3>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">
                    Learn the essential techniques for creating responsive websites that adapt
                    seamlessly to any device. Ensure your web presence is accessible and visually
                    stunning.
                  </p>
                </div>
              </div>
              <div className="grid items-start gap-4 md:grid-cols-[200px_1fr]">
                <img
                  alt="Blog post thumbnail"
                  className="rounded-xl object-cover"
                  height="150"
                  src="https://picsum.photos/200/150"
                  style={{
                    aspectRatio: '200/150',
                    objectFit: 'cover',
                  }}
                  width="200"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    <a href="#">
                      Unleashing the Potential of Serverless Architecture: A Practical Guide
                    </a>
                  </h3>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">
                    Explore the benefits of serverless computing and learn how to implement it in
                    your projects. Reduce infrastructure overhead and focus on building innovative
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Categories</h3>
              <div className="mt-4 grid gap-2">
                <a
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Web Development
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Design
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Technology
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Business
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Popular Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  React
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  JavaScript
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Design
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Serverless
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Web Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-8 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Your Blog. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
