import React from 'react'

export const Projects = () => {
    return (
        <section id="projects" class="py-16 bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-8">Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">

                        <img
                            src="tech.jpg"
                            alt="Project 1"
                            class="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-50 hover:blur-sm"
                        />
                         


                        <div class="absolute inset-0    flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20'>Real Time Study Platform
                            <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0  transition-opacity hover:opacity-100 hover:z-20' />

                            </p>
                        </div>
                    </div>

                    
                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">

                        <img
                            src="ease.jpg"
                            alt="Project 1"
                            class="  w-full h-full object-cover  transition-opacity duration-300 hover:opacity-50 hover:blur-sm"
                        />
                         


                         <div class="absolute inset-0   flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20'>Contact Management System
                            <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0  ' />
                            </p>
                        </div>
                    </div>
                    
                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">
                        <div>
                        
                        <img
                            src="time.jpg"
                            alt="Project 1"
                            class="w-full h-full object-cover  transition-opacity duration-300  hover:blur-sm"
                        />
                       
                        </div>


                        <div class="absolute inset-0   flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20'>Admission Counselling System
                            <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0  ' />
                            </p>
                        </div>
                    </div>
                    
                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">

                        <img
                            src="emerging.jpg"
                            alt="Project 1"
                            class="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-50 hover:blur-sm"
                        />
                        


                        <div class="absolute inset-0   flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20'>Machine Accident Protection System <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0  ' /></p>
                            
                        </div>
                    </div>
                    
                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">

                        <img
                            src="trends.jpg"
                            alt="Project 1"
                            class="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-50 hover:blur-sm"
                        />
                        


                        <div class="absolute inset-0   flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20'>Simon Says
                            <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0  ' />
                            </p>
                        </div>
                    </div>
                    
                    <div class="relative w-full h-48  transition-transform duration-300 hover:scale-105 ">

                        <img
                            src="Powercode.jpg"
                            alt="Project 1"
                            class="w-full h-full object-cover  transition-opacity duration-300 hover:opacity-50 hover:blur-sm"
                        />
                        


                        <div class=" absolute inset-0   flex items-end justify-start text-white text-xl font-bold opacity-0 hover:opacity-100 hover:underline transition-opacity duration-300">
                            <p className='w-20' 
                            >Instagram Clone
                             <img src="GitHublogo.png" alt="" className='absolute w-10 h-10 top-0 right-0 z-0 transition-opacity hover:opacity-100 hover:z-20' />
                            </p>
                           
                            
                        </div>
                    </div> 



                </div>
            </div>
        </section>
    )
}

