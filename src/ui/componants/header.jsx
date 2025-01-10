import React from "react";
export const Header = () => {
	return (
		<header class="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg ">
			{" "}
			<div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 ">
				<img src="portfoliologo.jpg" alt="Portfolio" className="w-20 h-20 rounded-full" />
				<nav>
					<ul class=" hidden sm:flex space-x-6">
						<li>
							<a href="#hero" class="hover:text-blue-500">
								Home
							</a>
						</li>
						<li>
							<a href="#about" class="hover:text-blue-500">
								About
							</a>
						</li>
						<li>
							<a href="#projects" class="hover:text-blue-500">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" class="hover:text-blue-500">
								Contact
							</a>
						</li>
						<button
							type="button"
							className="bg-yellow-600 rounded-2xl p-[0.5vw]  m -top-0 hover:text-blue-500"
						>
							Resume ▶
						</button>
           
						
					</ul>
          <img src="backremove.png" alt="" className="w-10 h-10 sm:hidden  " />
				</nav>
			</div>
		</header>
	);
};
