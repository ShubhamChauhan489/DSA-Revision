import React from 'react'

const Hero = () => {
    return (
        <section className="px-4 mt-8 flex flex-col gap-14 md:flex-row">
        <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-3xl">Best way to revise for your next coding interview</h1>
            <p className="mt-4 text-gray-500">Get everything in a single guide: Data structures, algorithms, patterns, visualizers, questions, examples, solutions, explanations, and much more!</p>
            <button className=" mt-4 w-full py-2 bg-gray-300 hover:bg-pink-500">Buy free through the <span className="font-semibold">Gumroad</span></button>
            <div>
                <p className="mt-8 bg-gray-100 italic text-gray-500 border-l-4 border-yellow-400">
                "Awesome! Love how the concepts are explained + all the wonderful resources mentioned. Having everything in one guide is super helpful." 
                </p>
            </div>
        </div>
        <div className="relative">
            <img src="/public/dsa-main.png" alt="image" />
            <p className="absolute -top-10 right-0 bg-green-500 w-32 h-32 rounded-full flex justify-center items-center text-white font-semibold">New Release</p>
        </div>
        </section>
       
       
    )
}

export default Hero
