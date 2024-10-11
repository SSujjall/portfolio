function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-1 md:mb-3 font-extrabold 
                pointer-events-none">
                Sujal Maharjan
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl mb-3 font-bold">
                <span className="inline-block pointer-events-none">
                    {'{'}Software Developer{'}'}
                </span>
            </p>

            <p className='text-sm lg:text-base max-w-sm md:max-w-2xl lg:max-w-3xl mb-6'>
                I’m a passionate software developer with expertise in .NET and React.js,
                and strong foundation in Node.js, Express, MongoDB, PostgreSQL, and MSSQL.
                Woking to create efficient and scalable applications that enhance user
                experiences and solve real-world problems. With a deep interest in software
                development, I’m constantly exploring new technologies and best practices to
                stay at the forefront of the industry.
            </p>

            <div className="flex justify-center mb-8">
                <a href="https://drive.google.com/file/d/1VAd48bm-wIC1J08LMh7lHHamJT3gZ67P/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center inline-block px-8 
                    py-3 w-max text-base font-medium rounded-md
                    text-white dark:text-black bg-stone-900 
                    hover:bg-slate-700 dark:bg-stone-100 dark:hover:bg-stone-300
                    transition duration-300 ease-in-out">
                    CV
                </a>
            </div>
        </div>
    )
}

export default Intro;