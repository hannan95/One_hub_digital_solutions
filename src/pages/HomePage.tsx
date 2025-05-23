import  { Link } from 'react-router-dom';
import { BarChart, Users, Layout, ArrowRight, CheckCircle, Layers, MessageCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Brand's Digital Presence
            </h1>
            <p className="text-xl mb-8 text-emerald-50">
              Onehub Solutions helps businesses thrive in the meta advertising landscape with innovative strategies and data-driven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50">
                Get Started
              </Link>
              <Link to="/services" className="btn bg-transparent border border-white hover:bg-emerald-700">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Onehub Solutions?</h2>
            <p className="text-neutral-600">We combine creativity with data-driven strategies to deliver exceptional results for your brand.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Strategies</h3>
              <p className="text-neutral-600">Cutting-edge approaches that keep your brand ahead of competitors in the digital landscape.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
              <p className="text-neutral-600">We analyze metrics to optimize campaigns for maximum ROI and audience engagement.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-neutral-600">Our specialists bring years of experience in meta advertising and digital marketing.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Hammad Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDB8fHx8MTc0Nzk5MDQwMHww&ixlib=rb-4.1.0" 
                alt="Elegant boardroom" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Led by Hammad Abdullah</h2>
              <p className="text-neutral-600 mb-6">
                With over a decade of experience in digital marketing, Hammad Abdullah founded Onehub Solutions to help brands navigate the evolving meta advertising landscape. His innovative approach combines creative strategy with data analytics to deliver exceptional results.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Certified Meta Business Partner with proven expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Successfully managed campaigns for Fortune 500 companies</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Pioneered innovative targeting strategies for increased ROI</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-neutral-600">Comprehensive meta advertising solutions to elevate your brand.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Layout className="h-8 w-8" />}
              title="Meta Advertising"
              description="Strategic ad campaigns across Facebook, Instagram, and the entire Meta ecosystem to reach your target audience effectively."
            />
            <ServiceCard 
              icon={<MessageCircle className="h-8 w-8" />}
              title="Social Media Management"
              description="Comprehensive content planning, creation, and community engagement to build your brand presence."
            />
            <ServiceCard 
              icon={<BarChart className="h-8 w-8" />}
              title="Analytics & Reporting"
              description="In-depth analysis of campaign performance with actionable insights for continuous improvement."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-50">
            Let's collaborate to create impactful meta advertising strategies that drive results for your business.
          </p>
          <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50">
            Schedule a Consultation
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-neutral-600">Hear what our clients have to say about working with Onehub Solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Onehub Solutions transformed our social media presence with strategic meta advertising that delivered real ROI. Hammad's expertise was invaluable."
              name="Sarah Johnson"
              title="Marketing Director"
              company="TechGrowth Inc."
            />
            <TestimonialCard 
              quote="Working with Hammad and his team doubled our engagement rates and significantly increased our conversion metrics across all platforms."
              name="Michael Chen"
              title="CEO"
              company="Innovate Retail"
            />
            <TestimonialCard 
              quote="The strategic insight and data-driven approach from Onehub Solutions helped us navigate our product launch with unprecedented success."
              name="Jessica Martinez"
              title="Brand Manager"
              company="FutureBrands"
            />
          </div>
        </div>
      </section>
      
      {/* Latest Work Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Work</h2>
            <p className="text-neutral-600">Explore some of our recent success stories and client projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg shadow-sm group">
              <img 
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDB8fHx8MTc0Nzk5MDQwMHww&ixlib=rb-4.1.0" 
                alt="Project 1" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">LuxuryBrand Campaign</h3>
                <p className="text-neutral-600 mb-4">Increased engagement by 150% through targeted meta advertising and content strategy.</p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm group">
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDB8fHx8MTc0Nzk5MDQwMHww&ixlib=rb-4.1.0" 
                alt="Project 2" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">TechStartup Launch</h3>
                <p className="text-neutral-600 mb-4">Comprehensive digital strategy that resulted in 10,000+ product signups within the first month.</p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
  