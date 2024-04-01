import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const blogs=[
    {
        img:'Blogs Featured Image.png',
        category:'Healthcare',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Healthcare',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Healthcare',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Business',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Business',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Business',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Cloud Computing',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Cloud Computing',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        category:'Cloud Computing',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
]
const Section = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <section className="text-gray-600 body-font">
        <div className="container sm:first-line:px-5 lg:py-15 md:py-10 py-5 mx-auto sm:w-[80%] w-[90%]">
          <div className="flex items-center justify-center gap-4 mb-12">
            <button className={`p-3 px-4 rounded-full ${selectedCategory==null?"text-white bg-indigo-300":'text-gray-600'}`} onClick={() => handleCategoryClick(null)}>All</button>
            <button className={`p-3 rounded-3xl ${selectedCategory=='Healthcare'?"text-white bg-indigo-300":'text-gray-600'}`} onClick={() => handleCategoryClick('Healthcare')}>Healthcare</button>
            <button className={`p-3 rounded-3xl ${selectedCategory=='Business'?"text-white bg-indigo-300":'text-gray-600'}`} onClick={() => handleCategoryClick('Business')}>Business</button>
            <button className={`p-3 rounded-3xl ${selectedCategory=='Cloud Computing'?"text-white bg-indigo-300":'text-gray-600'}`} onClick={() => handleCategoryClick('Cloud Computing')}>Cloud Computing</button>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 rounded-3xl">
            {filteredBlogs.map((item, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`/home/${item.img}`} alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-4 "><span className='p-2 rounded-3xl bg-indigo-200 text-white'>{item.category}</span></h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                    <p className="leading-relaxed mb-3">{item.content}</p>
                    <div className="flex justify-end">
                      <Link to='/blogs/blog' className="text-gray-400 inline-flex items-end md:mb-2 lg:mb-0 border-b-2 border-gray-500">to="/"</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Section;
