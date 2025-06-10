import React, { useState, useEffect } from 'react';
import { ChevronRight, BarChart3, Shield, ArrowRight, Menu, X, Activity, Layers, ArrowUpRight, Minus } from 'lucide-react';

const ZoneIQWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const metrics = [
    { value: "18%", label: "Higher production quality" },
    { value: "23%", label: "Faster cycle times" },
    { value: "76%", label: "Fewer defects" },
    { value: "2.4x", label: "First-year ROI" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-black rounded transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white transform -rotate-45" />
                  </div>
                </div>
                <div className="text-2xl tracking-tight">
                  <span className="font-light">Zone</span>
                  <span className="font-semibold">IQ</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              <a href="#platform" className="text-sm tracking-wide hover:opacity-60 transition-opacity">Platform</a>
              <a href="#approach" className="text-sm tracking-wide hover:opacity-60 transition-opacity">How It Works</a>
              <a href="#results" className="text-sm tracking-wide hover:opacity-60 transition-opacity">Impact</a>
              <a href="#company" className="text-sm tracking-wide hover:opacity-60 transition-opacity">Company</a>
              <button className="px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#platform" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Platform</a>
          <a href="#approach" className="text-2xl" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#results" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Impact</a>
          <a href="#company" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Company</a>
          <button className="px-12 py-4 bg-black text-white text-lg mt-8">
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 lg:px-16 pt-20">
        <div className="w-full">
          <div className="max-w-6xl">
            <h1 className="text-6xl lg:text-8xl font-light leading-none mb-8">
              Where you store
              <br />
              <span className="font-semibold">defines success</span>
            </h1>
            <div className="flex items-start justify-between">
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                The missing link between warehouse operations and production excellence. 
                ZoneIQ's ML discovers how material placement directly impacts 
                your production quality, speed, and efficiency.
              </p>
              <div className="hidden lg:block ml-16">
                <div className="text-right">
                  <div className="text-5xl font-light">{metrics[activeMetric].value}</div>
                  <div className="text-sm text-gray-500 mt-2 uppercase tracking-widest">{metrics[activeMetric].label}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 mt-16">
              <button className="group flex items-center space-x-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors">
                <span>Schedule Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-black hover:opacity-60 transition-opacity underline underline-offset-4">
                Watch Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 px-8 lg:px-16 border-t">
        <div className="flex flex-wrap items-center justify-between gap-8 text-sm text-gray-400 uppercase tracking-widest">
          <span>15M+ Correlations Discovered</span>
          <span>200+ Warehouses</span>
          <span>18% Avg Quality Improvement</span>
          <span>Real-time ML</span>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl lg:text-6xl font-light mb-8">
                The Platform
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                ZoneIQ bridges the gap between warehouse operations and production 
                excellence. Our ML platform discovers how storage decisions impact 
                production outcomes—defect rates, cycle times, quality scores—and 
                guides your team to data-driven placement strategies.
              </p>
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "Pattern Recognition",
                  description: "Identifies correlations between storage conditions and production success.",
                  metric: "1M+ patterns"
                },
                {
                  title: "Predictive Guidance",
                  description: "Recommends optimal zones based on material type and production requirements.",
                  metric: "95% accuracy"
                },
                {
                  title: "Continuous Learning",
                  description: "Improves recommendations with every production cycle completed.",
                  metric: "24/7 learning"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-light mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                    <div className={`text-3xl font-light transition-opacity ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                      {feature.metric}
                    </div>
                  </div>
                  <div className="h-px bg-gray-200 mt-8 origin-left transition-transform scale-x-100 group-hover:scale-x-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">The Missing Link</h3>
            <p className="text-xl text-gray-600">See how storage decisions directly impact production outcomes.</p>
          </div>
          
          <div className="bg-white p-12 shadow-sm">
            {/* Warehouse to Production Flow Visualization */}
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Warehouse Zones */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Warehouse Zones</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white font-semibold">
                      A1
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Climate Controlled</div>
                      <div className="text-xs text-gray-500">15°C, 45% humidity</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-amber-500 flex items-center justify-center text-white font-semibold">
                      B3
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Near Production</div>
                      <div className="text-xs text-gray-500">22°C, standard air</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white font-semibold">
                      C2
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">General Storage</div>
                      <div className="text-xs text-gray-500">Ambient, high traffic</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Indicator */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider text-gray-500 whitespace-nowrap">
                    ML Analysis
                  </div>
                </div>
              </div>

              {/* Production Outcomes */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Production Results</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 border-l-4 border-green-500">
                    <span className="text-sm font-medium">From Zone A1</span>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-700">98.5%</div>
                      <div className="text-xs text-gray-600">Quality Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-50 border-l-4 border-amber-500">
                    <span className="text-sm font-medium">From Zone B3</span>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-amber-700">12min</div>
                      <div className="text-xs text-gray-600">Cycle Time</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 border-l-4 border-red-500">
                    <span className="text-sm font-medium">From Zone C2</span>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-red-700">3.2%</div>
                      <div className="text-xs text-gray-600">Defect Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight Box */}
            <div className="mt-12 p-6 bg-black text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">ML Discovery</div>
                  <p className="text-lg">Temperature-sensitive materials in Zone A1 produce 21.7% fewer defects. Move batch #4821 from C2 to A1 for optimal results.</p>
                </div>
                <Activity className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-32 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-light mb-16 text-center">
            How It Works
          </h2>
          <div className="space-y-24">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Integrate warehouse scanners and production line systems to capture the complete material journey."
              },
              {
                number: "02",
                title: "Analyze",
                description: "Track how materials from different zones perform in production—quality rates, defects, cycle times."
              },
              {
                number: "03",
                title: "Discover",
                description: "ML algorithms identify patterns linking storage conditions to production outcomes."
              },
              {
                number: "04",
                title: "Optimize",
                description: "Real-time recommendations ensure materials are stored where they'll perform best in production."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-8 lg:space-x-16">
                <div className="text-6xl font-light text-gray-300">{step.number}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-light mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-32 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-light mb-16">
            Production Impact
          </h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { value: "18%", label: "Production quality increase", detail: "Average defect reduction" },
              { value: "23%", label: "Faster cycle times", detail: "From optimized material flow" },
              { value: "32%", label: "Less handling time", detail: "Smart zone allocation" },
              { value: "2.4x", label: "ROI in year one", detail: "From production improvements" }
            ].map((stat, index) => (
              <div key={index} className="border-t border-gray-800 pt-8">
                <div className="text-5xl font-light mb-4">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-24 p-12 border border-gray-800">
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
              "For years, we optimized our warehouse and production separately. 
              ZoneIQ showed us they're one system. Now we know exactly which zones 
              produce the best outcomes—it's been transformational."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
              <div>
                <div className="font-medium">Sarah Chen</div>
                <div className="text-sm text-gray-400">VP Operations, Global Logistics Corp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl lg:text-6xl font-light mb-8">
                About ZoneIQ
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We discovered a critical blind spot in warehouse management: 
                no one was measuring how storage decisions impact production outcomes. 
                Traditional WMS tracks where things are, but not how they perform.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                ZoneIQ changes that. Our platform reveals the hidden connections 
                between warehouse zones and production success, turning every 
                storage decision into a strategic advantage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Security</div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span>SOC 2 Type II</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span>ISO 27001</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span>GDPR Compliant</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Integration</div>
                <ul className="space-y-3 text-gray-600">
                  <li>SAP</li>
                  <li>Oracle WMS</li>
                  <li>Manhattan</li>
                  <li>Blue Yonder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-light mb-8">
            See the connection
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover how your storage decisions impact production success.
          </p>
          <button className="group inline-flex items-center space-x-3 px-12 py-5 bg-black text-white hover:bg-gray-800 transition-colors">
            <span className="text-lg">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-black rounded transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white transform -rotate-45" />
                  </div>
                </div>
                <div className="text-2xl tracking-tight">
                  <span className="font-light">Zone</span>
                  <span className="font-semibold">IQ</span>
                </div>
              </div>
              <p className="text-gray-600">
                Linking warehouse decisions to production outcomes through machine learning.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Platform</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Integration</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col lg:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; 2025 ZoneIQ. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 lg:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZoneIQWebsite;