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
                Experienced .NET Developer with a strong background in building scalable and maintainable
                applications using .NET Core, MVC, Clean Architecture, and EF Core. Proficient in developing
                dynamic web applications with Razor Pages and React, ensuring seamless front-end and back-end
                integration. Passionate about writing clean, efficient code and following best practices to
                deliver high-quality software solutions. Looking for opportunities to contribute my skills to
                innovative projects and grow in a dynamic development environment.
            </p>

            <div className="flex justify-center mb-8">
                <a href="https://drive.google.com/file/d/1QRG2UxRocqVbh6ezv8kARD0jM8JG72iJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center inline-block px-8 
                    py-3 w-max text-base font-medium rounded-md
                    text-white dark:text-black bg-stone-900 
                    hover:bg-slate-700 dark:bg-stone-100 dark:hover:bg-stone-300
                    transition duration-300 ease-in-out">
                    Download CV
                </a>
            </div>
        </div>
    )
}

export default Intro;
