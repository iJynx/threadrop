import React from 'react'

function Features() {
    return (
        <>



            <section className="text-gray-400 bg-grey-dark body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500" />
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Why us?</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Why should you pick us over other services?</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Large Community</h2>
                            <p className="text-base leading-relaxed mt-2">Our community of over 500 artists are sure to create a design that fits your desires.</p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">We give back.</h2>
                            <p className="text-base leading-relaxed mt-2">60% of all sales go back to independant creators, so you can be sure that your dollar goes to someone who deserves it!</p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Integrated Tools</h2>
                            <p className="text-base leading-relaxed mt-2">Our integrated developer is sure to let you plan and design to you hearts content.</p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
