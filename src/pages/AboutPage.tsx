import  { Link } from 'react-router-dom';
import { Users, Award, Globe, Briefcase, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Onehub Solutions</h1>
            <p className="text-xl text-emerald-50">
              We're a team of digital marketing experts passionate about helping brands succeed in the evolving meta landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-6">
                Founded in 2018 by Hammad Abdullah, Onehub Solutions began with a vision to help businesses navigate the rapidly evolving digital marketing landscape. What started as a small consultancy has grown into a full-service meta advertising agency with a global client base.
              </p>
              <p className="text-neutral-600 mb-6">
                Our journey has been defined by staying ahead of digital trends, continuously innovating our approaches, and delivering measurable results for our clients. We've helped businesses of all sizes—from startups to Fortune 500 companies—achieve their marketing goals.
              </p>
              <p className="text-neutral-600">
                Today, we're proud to be recognized as leaders in meta advertising, combining creative strategies with data-driven insights to transform how brands connect with their audiences.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDB8fHx8MTc0Nzk5MDQwMHww&ixlib=rb-4.1.0" 
                alt="Our office" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-neutral-600">
              Guiding principles that drive everything we do at Onehub Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-600 mb-6">
                To empower businesses with innovative meta advertising strategies that drive meaningful connections, sustainable growth, and measurable ROI.
              </p>
              <p className="text-neutral-600">
                We're committed to staying at the forefront of digital marketing trends, continuously evolving our approaches to help our clients stay ahead in a competitive landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Excellence</span>
                    <span className="text-neutral-600">We hold ourselves to the highest standards in everything we do.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Innovation</span>
                    <span className="text-neutral-600">We embrace new ideas and technologies to deliver cutting-edge solutions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Collaboration</span>
                    <span className="text-neutral-600">We work closely with our clients, treating their goals as our own.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Integrity</span>
                    <span className="text-neutral-600">We operate with transparency, honesty, and ethical practices.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-neutral-600">
              Meet the team driving innovation and excellence at Onehub Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Hammad Abdullah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Hammad Abdullah</h3>
              <p className="text-emerald-600 mb-3">Founder & CEO</p>
              <p className="text-neutral-600">
                Digital marketing veteran with expertise in meta advertising strategies and business growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-emerald-600 mb-3">Creative Director</p>
              <p className="text-neutral-600">
                Award-winning creative with a passion for innovative campaigns that capture audience attention.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-emerald-600 mb-3">Head of Strategy</p>
              <p className="text-neutral-600">
                Data-driven strategist specializing in optimization and performance marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-50">
            Let's collaborate to create impactful meta advertising strategies that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50">
              Contact Us
            </Link>
            <Link to="/services" className="btn bg-transparent border border-white hover:bg-emerald-700">
              Our Services <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
  