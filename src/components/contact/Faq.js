import React from 'react'
const qs=[
    {
        title:'What is included in the startup website template?',
        content:'Our startup website template includes a range of essential features and components, such as responsive design, customizable layouts, pre-built sections, integration with popular CMS platforms, and access to a library of high-quality images and icons.'
    },
    {
        title:'Can I customize the template to match my brands identity?',
        content:'Absolutely! Our startup website template provides easy customization options, allowing you to personalize the colors, fonts, logo, and overall look and feel to align with your brand identity. You can create a unique and captivating online presence that reflects your startups vision.'
    },
    {
        title:'Is the template optimized for search engines (SEO)?',
        content:'Yes, our startup website template is designed with SEO best practices in mind. It includes clean code structure, fast loading times, meta tag optimization, and schema markup implementation. These elements contribute to better search engine visibility, helping your website rank higher in search results and attract more organic traffic.'
    },
    {
        title:'Do you offer support and updates for the template?',
        content:'Absolutely! We provide dedicated customer support to address any queries or concerns you may have while working with our startup website template. Additionally, we regularly release updates to ensure compatibility with the latest web technologies, security patches, and feature enhancements, ensuring your website stays up-to-date and optimized.'
    },
]
const Faq = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className="container px-5 mx-auto sm:w-[80%]">
      <div className="text-center">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>FAQs</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Answers to some of your questions</h1>
        <p className="text-base leading-relaxed sm:w-[70%] w-[90%] mx-auto text-gray-500s">Don’t find the answers you were looking for? Contact us at futuresphere@gmail.com</p>
    </div>
    </div>
  </section>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-10 mx-auto sm:w-[80%] flex flex-col items-center gap-10">
          <div className="flex flex-wrap -m-4">
           {qs.map((item,index)=>(
             <div key={index} className="p-2 md:w-1/2">
             <div className="flex rounded-lg h-full bg-white p-8 flex-col">
               <div className="mb-4">
                 <h2 className="text-indigo-300 text-lg title-font font-semibold">{item.title}</h2>
                 <hr className='mt-4 ' />
               </div>
               <div className="flex-grow">
                 <p className="leading-relaxed text-base">{item.content} </p>
               </div>
             </div>
           </div>
           ))}
          </div>
      <div>    <button className="inline-flex items-center text-gray-900 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">View all
            <img className='mt-1 ml-2' src="/contact/Vector.png" alt="" />
             </button>  </div>
        </div>
      </section>
    </>
  )
}

export default Faq
