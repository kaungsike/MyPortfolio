
import React from 'react'

const SecondSection = () => {
  return (

    <div className="border lg:p-5 rounded-2xl  px-3 py-4  flex flex-col bg-white/30 backdrop-blur-sm lg:rounded-3xl">
      {/* Header */}
      <div className="pb-2 flex flex-wrap justify-between items-center gap-2 border-b border-dashed border-gray-200">
        <h2 className="font-medium text-gray-800">Top posts</h2>
        <button
          type="button"
          className="px-2.5 flex items-center justify-center gap-x-1.5 border border-gray-200 text-gray-800 text-[13px] rounded-lg py-1 hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo-700 focus:outline-none focus:bg-indigo-50 focus:border-indigo-100 focus:text-indigo-700"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Featured Post 1 */}
      <div className="flex flex-col bg-white pb-4 border-b border-gray-200">
        <div className="pt-4 flex flex-col md:flex-row gap-5">
          <div className="relative aspect-4/2 md:aspect-4/3 w-full md:max-w-80 bg-gray-100 rounded-lg">
            <img
              className="absolute inset-0 size-full object-cover object-center rounded-lg"
              src="https://images.unsplash.com/photo-1737625773603-3f0acdb5bb3f?q=80&w=480&auto=format&fit=crop"
              alt="Post Image"
            />
          </div>
          <div className="grow">
            <div className="h-full flex flex-col">
              <p className="text-sm text-gray-500">Post title:</p>
              <h3 className="font-medium text-gray-800">Top posts</h3>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Position:</span>
                  <div className="flex items-center gap-x-1.5">
                    <span className="font-medium text-sm text-gray-800">#1</span>
                    <span className="flex justify-center items-center gap-x-1 text-sm text-green-600">
                      ↑ 11
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Published date:</span>
                  <span className="font-medium text-sm text-gray-800">June 19, 2025</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Author:</span>
                  <span className="font-medium text-sm text-gray-800">John Doe</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Category:</span>
                  <span className="font-medium text-sm text-gray-800">Travel</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Tags:</span>
                  <span className="font-medium text-sm text-gray-800">Adventure, Nature</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Views:</span>
                  <span className="font-medium text-sm text-gray-800">2,120</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <a
                  className="inline-flex items-center gap-x-0.5 text-[13px] text-indigo-700 underline underline-offset-2 hover:decoration-2"
                  href="#"
                >
                  View post →
                </a>
                <a
                  className="py-1.5 px-2.5 flex items-center gap-x-1.5 text-gray-500 text-[13px] rounded-lg hover:bg-gray-100"
                  href="#"
                >
                  Metrics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post 2 */}
      <div className="flex flex-col bg-white pb-4 border-b border-gray-200">
        <div className="pt-4 flex flex-col md:flex-row gap-5">
          <div className="relative aspect-4/2 md:aspect-4/3 w-full md:max-w-80 bg-gray-100 rounded-lg">
            <img
              className="absolute inset-0 size-full object-cover object-center rounded-lg"
              src="https://images.unsplash.com/photo-1673767296837-8106e1b94d34?q=80&w=480&auto=format&fit=crop"
              alt="Post Image"
            />
          </div>
          <div className="grow">
            <div className="h-full flex flex-col">
              <p className="text-sm text-gray-500">Post title:</p>
              <h3 className="font-medium text-gray-800">
                Video marketing best practices
              </h3>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Position:</span>
                  <div className="flex items-center gap-x-1.5">
                    <span className="font-medium text-sm text-gray-800">#2</span>
                    <span className="flex justify-center items-center gap-x-1 text-sm text-red-600">
                      ↓ 1
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Published date:</span>
                  <span className="font-medium text-sm text-gray-800">
                    March 11, 2025
                  </span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Author:</span>
                  <span className="font-medium text-sm text-gray-800">
                    Lisa Anderson
                  </span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Category:</span>
                  <span className="font-medium text-sm text-gray-800">Marketing</span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Tags:</span>
                  <span className="font-medium text-sm text-gray-800">
                    Video, Marketing
                  </span>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-[13px] text-gray-500">Views:</span>
                  <span className="font-medium text-sm text-gray-800">2,001</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <a
                  className="inline-flex items-center gap-x-0.5 text-[13px] text-indigo-700 underline underline-offset-2 hover:decoration-2"
                  href="#"
                >
                  View post →
                </a>
                <a
                  className="py-1.5 px-2.5 flex items-center gap-x-1.5 text-gray-500 text-[13px] rounded-lg hover:bg-gray-100"
                  href="#"
                >
                  Metrics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default SecondSection