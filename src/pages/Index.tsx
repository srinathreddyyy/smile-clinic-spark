
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Star, Shield, Heart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">Smile Clinic</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Perfect <span className="text-blue-600">Smile</span> Awaits
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience world-class dental care with our state-of-the-art technology and compassionate team. 
            We're dedicated to making your smile brighter and healthier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive dental care for the whole family with the latest technology and techniques
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Dentistry",
                description: "Routine cleanings, fillings, and preventive care to maintain optimal oral health",
                icon: Shield,
                features: ["Regular Checkups", "Cleanings", "Fillings", "Preventive Care"]
              },
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with veneers, whitening, and aesthetic treatments",
                icon: Star,
                features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"]
              },
              {
                title: "Orthodontics",
                description: "Straighten your teeth with traditional braces or modern Invisalign treatment",
                icon: Users,
                features: ["Traditional Braces", "Invisalign", "Retainers", "Adult Orthodontics"]
              },
              {
                title: "Dental Implants",
                description: "Replace missing teeth with permanent, natural-looking implant solutions",
                icon: Heart,
                features: ["Single Implants", "Multiple Implants", "Full Mouth", "Implant Crowns"]
              },
              {
                title: "Emergency Care",
                description: "24/7 emergency dental services for urgent dental problems and pain relief",
                icon: Phone,
                features: ["24/7 Availability", "Pain Relief", "Urgent Repairs", "Same-Day Treatment"]
              },
              {
                title: "Pediatric Dentistry",
                description: "Specialized dental care for children in a friendly, comfortable environment",
                icon: Users,
                features: ["Kid-Friendly Care", "Preventive Treatments", "Education", "Comfort Techniques"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Smile Clinic?</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Smile Clinic, we combine cutting-edge technology with compassionate care to deliver 
                exceptional dental experiences. Our team of experienced professionals is committed to 
                your oral health and overall well-being.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Technology",
                    description: "State-of-the-art equipment for precise, comfortable treatments"
                  },
                  {
                    title: "Experienced Team",
                    description: "Board-certified dentists with over 15 years of experience"
                  },
                  {
                    title: "Patient-Centered Care",
                    description: "Personalized treatment plans tailored to your unique needs"
                  },
                  {
                    title: "Comfortable Environment",
                    description: "Modern, relaxing facilities designed for your comfort"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Patient Reviews</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Sarah Johnson",
                    rating: 5,
                    comment: "Exceptional care and friendly staff. My smile has never looked better!"
                  },
                  {
                    name: "Michael Chen",
                    rating: 5,
                    comment: "Professional, painless, and efficient. Highly recommend Smile Clinic."
                  },
                  {
                    name: "Emma Davis",
                    rating: 5,
                    comment: "Great with kids! My daughter actually looks forward to dental visits now."
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold text-gray-800">{review.name}</span>
                    </div>
                    <p className="text-gray-600 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ready to start your journey to a healthier, more beautiful smile? Contact us today!
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">(555) 123-SMILE</p>
              <p className="text-sm text-gray-500">24/7 Emergency Line</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">info@smileclinic.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">123 Dental Street<br />Suite 100, City, ST 12345</p>
              <p className="text-sm text-gray-500">Free parking available</p>
            </Card>
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-semibold text-gray-800 mb-2">Monday - Friday</div>
                <div className="text-gray-600">8:00 AM - 6:00 PM</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800 mb-2">Saturday</div>
                <div className="text-gray-600">9:00 AM - 4:00 PM</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800 mb-2">Sunday</div>
                <div className="text-gray-600">Closed</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800 mb-2">Emergency</div>
                <div className="text-gray-600">24/7 On-Call</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer to get the smile you've always wanted. Schedule your consultation today!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Smile Clinic</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for comprehensive dental care and beautiful smiles.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Dental Implants</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Patient Resources</li>
                <li>Insurance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>(555) 123-SMILE</div>
                <div>info@smileclinic.com</div>
                <div>123 Dental Street<br />Suite 100, City, ST 12345</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Smile Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
