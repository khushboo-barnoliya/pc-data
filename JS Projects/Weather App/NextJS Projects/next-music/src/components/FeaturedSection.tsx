'use client'

import Link from 'next/link';
import courseData from '../data/music_courses.json';
import { BackgroundGradient } from "./ui/background-gradient";


interface Course {
  id: Number,
  title: String,
  slug: String,
  description: String,
  price: Number,
  instructor: String,
  isFeatured: Boolean,
}

function FeaturedSection() {

  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h1 className='uppercase text-base text-teal-600 font-semibold tracking-wide'>Featured Courses</h1>
          <p className='mt-2 text-3xl leading-8 font-bold tracking-normal text-white sm:text-4xl'>Learn With the Best</p>
        </div>
      </div>


      <div className='mt-10 p-3 sm:p-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {
            featuredCourses.map((course) => (
              <div className='flex justify-center' key={course.id}>
                <BackgroundGradient className='flex flex-col max-w-sm rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full'>
                  <div className="flex flex-col items-center flex-grow p-4 sm:p-6">

                    <p className='mt-4 mb-2 text-lg text-center sm:text-xl text-black dark:text-neutral-400'>{course.title}</p>

                    <p className="text-sm flex-grow text-neutral-700 text-center dark:text-neutral-500">{course.description}</p>

                    <Link href={`/courses/${course.slug}`}>Learn More</Link>

                  </div>
                </BackgroundGradient>
              </div>
            ))
          }
        </div>
      </div>


      <div className='mt-10 sm:mt-20 text-center'>
        <Link href={"/courses"} className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-slate-300 transition-all duration-200">View all Courses</Link>
      </div>
    </div>
  )
}

export default FeaturedSection
