import React, { useEffect } from 'react'
import Jobs from './components/about/Jobs'

const ProductManager = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    
        const scrollToHash = () => {
          if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        scrollToHash();
    
        window.addEventListener('hashchange', scrollToHash);
    
        return () => {
          window.removeEventListener('hashchange', scrollToHash);
        };
      }, []);
  return (
    <div id='top' className='bg-indigo-100 pb-12'>
        <div className='container px-5 py-10 mx-auto sm:w-[85%]'>
        <div className='bg-white'>
      
            <div className='relative sm:h-[358px]'>
            <div className='absolute right-0 object-cover'>
                <img src="/Globe Mask.png" alt="" />
            </div>
                <div className='p-10 flex flex-col items-start sm:gap-4 gap-2'>
                <button className='px-3 py-1 bg-indigo-50 text-indigo-300 rounded-3xl'>Design</button>
                <h1 className='text-5xl font-bold'>Product Manager</h1>
                <h2 className='text-2xl text-indigo-300 font-semibold'>Full Time - On site</h2>
                <div className='flex items-start gap-4'>
                <img src="/Icon.png" alt="" />
                <h3 className='flex flex-col gap-1'>
                    <span className='text-indigo-300 flex items-center gap-3'>San Francisco</span>
                    <span className='text-gray-400'>123 Main Street, Suite 200</span>
                    <span>(555) 123-4567</span>
                </h3></div>
                </div>
            </div>
        </div>
        </div>
        <div className='container md:px-5 py-10 mx-auto lg:w-[60%] md:w-[85%] w-[90%] flex flex-col gap-8'>
        <div className='flex flex-col gap-4 items-start'>
            <h1 className='sm:text-3xl text-2xl font-bold'>Education and Experience</h1>
                <p className='text-gray-400'> To excel in the role of Product Manager, the following education and experience are typically required:</p>
            <ul className='text-gray-400 list-disc px-5 '>
                <li>Bachelor's degree in Business Administration, Computer Science, Engineering, or a related field (or equivalent work experience)
</li>
                <li>Proven experience of at least 3 years in product management or related roles, preferably in the technology industry
</li>
                <li>Experience with Agile development methodologies and product lifecycle manageme
</li>
            </ul>           
        </div>
        <div className='flex flex-col gap-4 items-start'>
            <h1 className='sm:text-3xl text-2xl font-bold'> Technical Skills</h1>
                <p className='text-gray-400'>As a Product Manager, you should possess the following technical skills:</p>
            <ul className='text-gray-400 list-disc px-5 '>
                <li>Strong understanding of product development processes and principles
</li>
                <li>Proficiency in using project management tools such as JIRA or Asana
</li>
                <li>Familiarity with prototyping tools like Sketch, Adobe XD, or InVision
</li>
<li>Knowledge of data analysis and visualization tools (e.g., Excel, Tableau, or Google Analytics)</li>
<li>Familiarity with software development languages and frameworks (e.g., HTML, CSS, JavaScript)</li>
            </ul>           
        </div>
        <div className='flex flex-col gap-4 items-start'>
            <h1 className='sm:text-3xl text-2xl font-bold'> Core Competencies</h1>
                <p className='text-gray-400'>The successful candidate should demonstrate the following core competencies:</p>
            <ul className='text-gray-400 list-disc px-5 '>
                <li>Strategic Thinking: Ability to analyze market trends, customer needs, and business goals to develop a strategic product roadmap
</li>
                <li>Leadership: Strong leadership skills to guide cross-functional teams and stakeholders in delivering successful products
</li>
                <li>Communication: Excellent written and verbal communication skills to effectively convey product vision, requirements, and updates to various stakeholders
</li>
<li>Problem-Solving: Strong analytical and problem-solving skills to identify challenges, devise solutions, and make data-driven decisions
</li>
<li>Collaboration: Proven ability to collaborate with design, engineering, marketing, and sales teams to align product strategy with business objectives</li>

            </ul>           
        </div>

        <div className='flex flex-col gap-4 items-start'>
            <h1 className='sm:text-3xl text-2xl font-bold'> Desired Qualities</h1>
                <p className='text-gray-400'>The ideal candidate will possess the following qualities:</p>
            <ul className='text-gray-400 list-disc px-5 '>
                <li>Passion for Technology: A genuine interest in emerging technologies, industry trends, and innovation
</li>
                <li>Customer-Centric Mindset: Ability to understand customer needs, conduct user research, and translate feedback into product enhancements
</li>
                <li>Adaptability: Flexibility to work in a fast-paced, dynamic environment and adapt to changing priorities and requirements
</li>
<li>Detail-Oriented: Strong attention to detail to ensure product quality and accuracy
</li>
<li>Results-Driven: A track record of delivering successful products and achieving measurable results
</li>

            </ul>           
        </div>

        </div>
        <Jobs />
    </div>
  )
}

export default ProductManager

