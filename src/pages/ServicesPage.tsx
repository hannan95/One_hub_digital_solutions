import  { Link } from 'react-router-dom';
import { BarChart, Users, Layout, MessageCircle, Search, FileText, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-emerald-50">
              Comprehensive meta advertising solutions tailored to your business goals and target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-neutral-600">
              Strategic services designed to enhance your brand's presence and performance in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Layout className="h-8 w-8" />}
              title="Meta Advertising"
              description="Strategic campaigns across Facebook, Instagram, and the entire Meta ecosystem to maximize visibility and conversions."
            />
            <ServiceCard 
              icon={<MessageCircle className="h-8 w-8" />}
              title="Social Media Management"
              description="Comprehensive content planning, creation, and community engagement to build your brand presence."
            />
            <ServiceCard 
              icon={<Search className="h-8 w-8" />}
              title="PPC & Search Marketing"
              description="Targeted paid campaigns to drive qualified traffic and increase conversions across search platforms."
            />
            <ServiceCard 
              icon={<FileText className="h-8 w-8" />}
              title="Content Strategy"
              description="Compelling content creation that resonates with your audience and strengthens brand positioning."
            />
            <ServiceCard 
              icon={<BarChart className="h-8 w-8" />}
              title="Analytics & Reporting"
              description="In-depth analysis of campaign performance with actionable insights for continuous improvement."
            />
            <ServiceCard 
              icon={<Globe className="h-8 w-8" />}
              title="Brand Development"
              description="Strategic positioning and identity development to differentiate your brand in competitive markets."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-neutral-600">
              A proven methodology that delivers results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-neutral-600">
                We analyze your business, competitors, and target audience to identify opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-neutral-600">
                We develop customized plans aligned with your business objectives and industry trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-neutral-600">
                We execute campaigns with precision, creativity, and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-neutral-600">
                We continuously monitor, analyze, and refine to maximize performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDB8fHx8MTc0Nzk5MDQwMHww&ixlib=rb-4.1.0" 
                alt="Digital marketing workspace" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meta Advertising Excellence</h2>
              <p className="text-neutral-600 mb-6">
                Our flagship service combines deep platform expertise with creative strategy to deliver exceptional results across the Meta ecosystem.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Advanced audience targeting and segmentation strategies</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Creative optimization for maximum engagement and conversions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Performance tracking and continuous campaign refinement</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p>Platform-specific strategies across Facebook, Instagram, and more</p>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-neutral-600">
              Tailored solutions to meet your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-neutral-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-1">$1,500<span className="text-base text-neutral-500">/month</span></div>
                <p className="text-neutral-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Meta advertising management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Basic content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Monthly performance reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-outline w-full">Choose Plan</Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-emerald-500 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-semibold">Popular</div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-1">$3,000<span className="text-base text-neutral-500">/month</span></div>
                <p className="text-neutral-600">Ideal for growing companies</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive meta advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Advanced content strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Bi-weekly performance reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Priority email & phone support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full">Choose Plan</Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-neutral-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-1">Custom</div>
                <p className="text-neutral-600">For large organizations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Full-service digital marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Custom content production</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time performance dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Senior strategy team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>24/7 priority support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-outline w-full">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-50">
            Schedule a consultation to discuss how our services can help achieve your business goals.
          </p>
          <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
  