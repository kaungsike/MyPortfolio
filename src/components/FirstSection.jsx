import React from 'react'
import PixelTransition from './ReactBits/PixelTransition'
import GithubContributions from './github/GithubContributions'

const FirstSection = () => {
  return (
                <div className="rounded-2xl px-3 py-4 mb-7  border  bg-white/30 backdrop-blur-sm w-full  lg:rounded-3xl lg:p-5 flex lg:flex-row flex-col items-center lg:items-start  justify-between gap-3 lg:overflow-auto ">
                  <div className="w-full flex flex-col gap-5 lg:w-1/3 items-center lg:items-start">
                    <PixelTransition
                      firstContent={
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                          alt="default pixel transition content, a cat!"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          className="rounded-2xl w-full"
                        />
                      }
                      secondContent={
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: 900,
                              fontSize: "2rem",
                              color: "#ffffff",
                            }}
                          >
                            KaungSike.dev
                          </p>
                        </div>
                      }
                      gridSize={12}
                      pixelColor="#ffffff"
                      once={false}
                      animationStepDuration={0.4}
                      className="custom-pixel-card"
                    />
    
                    <div className="max-w-md w-full text-start lg:text-left">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Kaung Sike
                      </h2>
                      <p className="text-gray-700 mb-1">kaungsike9@gmail.com</p>
                      <p className="text-gray-700 leading-relaxed">
                        Hi there! I'm a Fullstack Web Developer, currently in my
                        fourth year at the University of Computer Studies, Hpa-An. I
                        am on track to graduate in 2027–2028 and passionate about
                        building modern, responsive, and interactive web
                        applications.
                      </p>
                    </div>
                  </div>
    
                  {/* GitHub Contributions and Stats */}
                  <div className="w-full h-full flex flex-col gap-5 lg:w-2/3">
                    <div className="w-full flex items-center justify-center">
                      <GithubContributions />
                    </div>
                    <img
                      src="https://github-readme-activity-graph.vercel.app/graph?username=kaungsike&theme=github-light&hide_border=true&area=true"
                      alt="Kaung Sike GitHub Activity"
                      className="w-full"
                    />
    
                    <div className="flex lg:flex-row flex-col lg:h-[220px]">
                      <img
                        src="https://github-readme-stats.vercel.app/api?username=kaungsike&show_icons=true&theme=default&hide_border=true"
                        alt="Kaung Sike GitHub Stats"
                        className="w-full"
                      />
                      <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaungsike&layout=compact&theme=default&hide_border=true"
                        alt="Top Languages"
                      />
                    </div>
                  </div>
                </div>
  )
}

export default FirstSection