import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface AboutSectionProps {
  onBack: () => void
}

export function AboutSection({ onBack }: AboutSectionProps) {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-white/60 hover:text-white hover:bg-white/5 p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Works
        </Button>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-80 h-80 bg-gray-900 rounded-full overflow-hidden mb-12 shadow-2xl">
            <ImageWithFallback
              src="https://i.imgur.com/kiCozTR.jpg"
              alt="Kraig Hamrick profile"
              className="w-full h-full object-cover object-top object-right"
            />
          </div>
          
          {/* Name and Title */}
          <div className="mb-12">
            <h1 className="text-5xl mb-6">Kraig Hamrick</h1>
            <h2 className="text-2xl text-white/70 mb-8">UX/UI - Full Stack Server Admin</h2>
          </div>
          
          {/* Bio */}
          <div className="space-y-6 text-white/80 leading-relaxed mb-16 max-w-3xl">
            <p>
              With over 10 years of experience in digital creation and server management, I've dedicated my passion to crafting compelling visual narratives through full-stack development and robust infrastructure solutions. From golf course websites to luxury resort platforms, I've worked across diverse industries to create immersive digital experiences backed by reliable server architecture.
            </p>
            
            <p>
              My development approach combines aesthetic elegance with technical precision and infrastructure reliability. Through clean code, intuitive design, seamless user experiences, and robust server management, I create digital platforms that not only resonate with users but also maintain high availability and performance standards.
            </p>
            
            <p>
              Specializing in full-stack development and server administration, I focus on creating sophisticated platforms that showcase the beauty and prestige of world-class destinations while ensuring reliable backend infrastructure, database management, and scalable hosting solutions for optimal performance and security.
            </p>
          </div>
          
          {/* Experience and Skills */}
          <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl mb-16">
            <div>
              <h3 className="text-xl mb-6">Experience</h3>
              <div className="space-y-4 text-white/70 text-left">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">Full-Stack Developer & Server Admin</span>
                    <span className="text-sm">2021 - Present</span>
                  </div>
                  <p className="text-sm">LinksDAO & Independent Projects</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">Freelance Developer</span>
                    <span className="text-sm">2017 - 2021</span>
                  </div>
                  <p className="text-sm">Web Development, Server Setup & Cloud Infrastructure</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">Chambers Bay Caddie</span>
                    <span className="text-sm">2013 - 2016</span>
                  </div>
                  <p className="text-sm">Chambers Bay Golf Course</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  'React', 'TypeScript', 'Next.js', 'Node.js', 'Express.js',
                  'Linux Server Admin', 'Docker', 'AWS', 'Nginx', 'PostgreSQL',
                  'MongoDB', 'Redis', 'CI/CD', 'DevOps', 'Cloud Infrastructure',
                  'Tailwind CSS', 'UI/UX Design', 'Responsive Design'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 transition-all duration-300 ease-out hover:bg-white/20 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Server Management & Infrastructure */}
          <div className="w-full max-w-4xl mb-16">
            <h3 className="text-2xl mb-8 text-center transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Server Management & Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-6 border border-gray-500/30 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group cursor-default">
                <h4 className="text-lg mb-4 text-white transition-all duration-300 ease-out group-hover:text-white/90">Cloud Infrastructure</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• AWS EC2, S3, RDS, and CloudFront management</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Linux server administration and optimization</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Docker containerization and orchestration</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Load balancing and auto-scaling configurations</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-gray-500/30 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group cursor-default">
                <h4 className="text-lg mb-4 text-white transition-all duration-300 ease-out group-hover:text-white/90">Database & Performance</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• PostgreSQL and MongoDB administration</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Redis caching and session management</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Database optimization and query tuning</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Backup strategies and disaster recovery</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-gray-500/30 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group cursor-default">
                <h4 className="text-lg mb-4 text-white transition-all duration-300 ease-out group-hover:text-white/90">DevOps & Automation</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• CI/CD pipeline setup and maintenance</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Nginx reverse proxy and SSL configuration</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Monitoring and logging with ELK stack</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Security hardening and vulnerability management</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-gray-500/30 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group cursor-default">
                <h4 className="text-lg mb-4 text-white transition-all duration-300 ease-out group-hover:text-white/90">High Availability</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Multi-server deployment strategies</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Failover and redundancy planning</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• Performance monitoring and alerting</li>
                  <li className="transition-all duration-300 ease-out group-hover:text-white/80">• 99.9% uptime maintenance</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}