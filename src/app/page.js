import Link from "next/link"

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className='flex items-center justify-center max-sm:mt-6'>
            <img src="/logo.png" alt="Hero" className="w-48" />
          </div>
      <section className="bg-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            আপনার
            <span className="text-purple-600"> আইগেমিং</span> সফটওয়্যার প্রদানকারী
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            একটি আন্তর্জাতিক iGaming সফটওয়্যার প্রদানকারী যা বিভিন্ন রকমের পণ্য এবং সমাধান প্রদান করে, যা অপারেটরদের দ্রুত তাদের ব্যবসা এবং উন্নতি করতে সহায়তা করে।
          </p>
          <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
            <Link href="https://t.me/nuxgame_retail_bd">Get Proposal</Link>
          </button>
        </div>
        <div className="flex-1">
          <img src="/01.png" alt="Hero" className="w-full" />
        </div>
      </section>
    </div>
  )
}

export default page
