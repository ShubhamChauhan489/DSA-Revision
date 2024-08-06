import React from 'react'

const What = () => {
    return (
        <div className="mt-8 px-4 w-full">
            <div>
            <h2 className="font-semibold text-2xl text-center">What's Included</h2>
           <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
               <img src="dsa-2.png" alt="image"  />
            <div className="flex flex-col items-center mt-4">
                <ul className="space-y-2 [&>li]:flex [&>li]:gap-4">
                    <li><img src="/public/check.svg" className="h-8 w-6"></img>Detailed solutions and explanations</li>
                    <li><img src="/public/check.svg" className="h-8 w-6"></img>Awesome resources, articles, blogs</li>
                    <li><img src="/public/check.svg" className="h-8 w-6"></img>Visualizers and animations included</li>
                    <li><img src="/public/check.svg" className="h-8 w-6"></img>100 pages of quality content</li>
                    <li><img src="/public/check.svg" className="h-8 w-6"></img> Concepts explained for beginners</li>
                    <li><img src="/public/check.svg" className="h-8 w-6"></img>All in one revision guide</li>
                </ul>
                <button className="bg-orange-500 font-semibold rounded-full py-4 px-6 text-white hover:bg-orange-400 mt-8">Download for free</button>
            </div>
            </div> 
        </div>
        
        </div>
    )
}

export default What
