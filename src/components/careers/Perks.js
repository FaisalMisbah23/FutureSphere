import React from 'react'
const perks=[
    {
        title:'Flexible Work Environment',
        content:'Enjoy the freedom to work from anywhere in the world, whether it is the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs.'
    },
    {
        title:'Cultural Diversity',
        content:'Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth.'
    },
    {
        title:'Professional Development',
        content:'Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry.'
    },
    {
        title:'Travel Opportunities',
        content:'Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments.'
    },
    {
        title:'Global Networking',
        content:'Connect with professionals from around the world and build a vast network. Exchange ideas, share experiences, and create meaningful connections that can open doors to future collaborations and career growth.'
    },
    {
        title:'Competitive Compensation',
        content:'Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly.'
    },
]
const Perks = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex lg:py-21 md:py-14 py-7 md:flex-row-reverse flex-col-reverse items-center bg-white sm:w-[80%] w-[90%] rounded-3xl">
        <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pl-18 md:pl-12 flex flex-col items-start md:text-left md:mb-0">
          <h3 className='mb-10'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-[25px] sm:text-xl text-md'>Perks</span></h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Perks That Go Beyond Borders</h1>
            <p className="mb-8 leading-relaxed">Experience a world of benefits with our global presence. Enjoy flexible work environments, cultural diversity, professional development opportunities, travel adventures, global networking, and competitive compensation.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl sm:mb-0 mb-12">
            <img className="object-cover object-center rounded" alt="hero" src="/careers/Image Wrapper.png" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-2 lg:py-8 lg:pb-20 md:py-14 md:pb-8 py-6 pb-10 mx-auto sm:w-[80%] w-[90%]">
          <div className="flex flex-wrap -m-4">
           {perks.map((item,index)=>(
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
        </div>
      </section>
    </>
  )
}

export default Perks
