'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Star, Calendar, Users, DollarSign, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import StructuredData from '@/components/structured-data';
import PromoPopup from '@/components/promo-popup';

export default function VacationLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      // Check if the clicked element is an anchor link or if it's inside a button/element with an anchor link
      const anchorLink = target.closest('a[href^="#"]');
      const buttonLink = target.closest('button[onclick*="scrollToSection"]');
      
      let targetId = '';
      
      if (anchorLink) {
        targetId = anchorLink.getAttribute('href') || '';
      } else if (buttonLink) {
        // Extract the section ID from the onclick attribute
        const onclickAttr = buttonLink.getAttribute('onclick') || '';
        const match = onclickAttr.match(/scrollToSection\('([^']+)'\)/);
        if (match) {
          targetId = match[1];
        }
      }
      
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = 64; // Height of the sticky header
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          // Close mobile menu if open
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Handle both click and touch events for mobile
    document.addEventListener('click', handleSmoothScroll as EventListener);
    document.addEventListener('touchstart', handleSmoothScroll as EventListener);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll as EventListener);
      document.removeEventListener('touchstart', handleSmoothScroll as EventListener);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData type="organization" data={{}} />
      <StructuredData type="website" data={{}} />
      <StructuredData type="localbusiness" data={{}} />
      
      {/* Promo Popup */}
      <PromoPopup />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[80%]">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <img 
                  src="/travel-logo.png" 
                  alt="TravelVista Logo - Your Trusted Travel Partner" 
                  className="h-10 w-10"
                  width="40"
                  height="40"
                />
                <span className="text-2xl font-bold text-primary">TravelVista</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
                <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
                <a href="#packages" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">Packages</a>
                <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">About</a>
                <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">Contact</a>
              </nav>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div id="mobile-menu" className="md:hidden border-t bg-background">
                <nav className="px-2 pt-2 pb-3 space-y-1" aria-label="Mobile navigation">
                  <button
                    onClick={() => handleMobileMenuClick('#home')}
                    className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleMobileMenuClick('#packages')}
                    className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors cursor-pointer"
                  >
                    Packages
                  </button>
                  <button
                    onClick={() => handleMobileMenuClick('#about')}
                    className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors cursor-pointer"
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleMobileMenuClick('#contact')}
                    className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <main>
          <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
            <div className="absolute inset-0">
              <img 
                src="/hero-bg.jpg" 
                alt="Beautiful tropical vacation destination with crystal clear water and palm trees" 
                className="w-full h-full object-cover"
                width="1440"
                height="720"
                priority
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            </div>
            
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Your Perfect <span className="text-primary">Getaway</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Experience breathtaking destinations, thrilling adventures, and unforgettable memories with our expertly crafted vacation packages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg touch-manipulation"
                  onClick={() => scrollToSection('#packages')}
                  aria-label="Explore vacation packages"
                >
                  Explore Packages
                </Button>
              </div>
              
              <nav className="flex justify-center space-x-6" aria-label="Social media links">
                <a 
                  href="#" 
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Follow TravelVista on Facebook"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Follow TravelVista on Instagram"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Follow TravelVista on Twitter"
                >
                  <Twitter className="h-8 w-8" />
                </a>
              </nav>
            </div>
          </section>

          {/* Features Section - Packages */}
          <section id="packages" className="py-20 bg-muted/50" aria-labelledby="packages-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[80%]">
              <div className="text-center mb-16">
                <h2 id="packages-heading" className="text-3xl sm:text-4xl font-bold mb-4">Our Exclusive Packages</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose from our carefully curated vacation packages designed to create unforgettable experiences.
                </p>
              </div>

              {/* Outbound Packages */}
              <article className="mb-16">
                <div className="flex items-center mb-8">
                  <img 
                    src="/outbound-package.jpg" 
                    alt="Luxury outbound vacation package with mountains and adventure travel" 
                    className="w-16 h-16 rounded-lg mr-4 object-cover"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Outbound Adventures</h3>
                    <p className="text-muted-foreground">Explore international destinations with our premium packages</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>European Explorer</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.9 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.9</span>
                        </div>
                      </div>
                      <CardDescription>14 days across 5 European capitals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>14 Days / 13 Nights</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Up to 25 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $2,499</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about European Explorer package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Asian Discovery</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.8 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                      <CardDescription>10 days through Southeast Asia's wonders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>10 Days / 9 Nights</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Up to 20 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $1,899</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Asian Discovery package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>American Dream</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.7 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.7</span>
                        </div>
                      </div>
                      <CardDescription>12 days across the USA's iconic cities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>12 Days / 11 Nights</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Up to 30 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $2,199</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about American Dream package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>

              {/* Body Rafting Packages */}
              <article className="mb-16">
                <div className="flex items-center mb-8">
                  <img 
                    src="/body-rafting.jpg" 
                    alt="Exciting body rafting adventure in tropical river with rapids and safety equipment" 
                    className="w-16 h-16 rounded-lg mr-4 object-cover"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Body Rafting Adventures</h3>
                    <p className="text-muted-foreground">Experience the thrill of river adventures</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Beginner's Rapids</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.9 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.9</span>
                        </div>
                      </div>
                      <CardDescription>Perfect for first-time rafters</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Half Day Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>6-12 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $89</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Beginner's Rapids package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Advanced Rapids</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.8 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                      <CardDescription>For experienced adventure seekers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Full Day Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>4-8 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $149</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Advanced Rapids package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Family Adventure</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 5.0 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">5.0</span>
                        </div>
                      </div>
                      <CardDescription>Safe fun for the whole family</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>3 Hour Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>4-15 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $65</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Family Adventure package">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>

              {/* City Tour Packages */}
              <article className="mb-16">
                <div className="flex items-center mb-8">
                  <img 
                    src="/city-tour.jpg" 
                    alt="Beautiful city tour with historic architecture, cultural landmarks, and urban tourism" 
                    className="w-16 h-16 rounded-lg mr-4 object-cover"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">City Tours</h3>
                    <p className="text-muted-foreground">Discover urban treasures and cultural heritage</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Historic Downtown</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.9 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.9</span>
                        </div>
                      </div>
                      <CardDescription>Explore the heart of the city</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>2 Hour Walking Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Up to 20 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $35</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Historic Downtown tour">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Cultural Heritage</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.8 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                      <CardDescription>Museums, galleries, and landmarks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>4 Hour Guided Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Up to 15 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $55</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Cultural Heritage tour">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>Food & Nightlife</CardTitle>
                        <div className="flex items-center text-yellow-500" aria-label="Rating: 4.7 out of 5 stars">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">4.7</span>
                        </div>
                      </div>
                      <CardDescription>Taste the local cuisine and culture</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>3 Hour Evening Tour</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>8-12 people</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>Starting from $75</span>
                        </div>
                        <Button className="w-full mt-4" aria-label="Learn more about Food & Nightlife tour">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </article>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-background" aria-labelledby="about-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[80%]">
              <div className="text-center mb-16">
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-4">About TravelVista</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We are passionate about creating extraordinary travel experiences that last a lifetime.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <article>
                  <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2010, TravelVista has been at the forefront of creating exceptional travel experiences for adventurers, families, and solo travelers alike. Our journey began with a simple mission: to make travel accessible, enjoyable, and unforgettable for everyone.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    With over a decade of experience, we've curated partnerships with the best hotels, tour operators, and local guides worldwide to ensure your journey is nothing short of extraordinary.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                      <div className="text-sm text-muted-foreground">Happy Travelers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">100+</div>
                      <div className="text-sm text-muted-foreground">Destinations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </article>
                
                <article>
                  <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Expert Guidance</h4>
                        <p className="text-muted-foreground text-sm">Professional travel consultants with extensive destination knowledge</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">24/7 Support</h4>
                        <p className="text-muted-foreground text-sm">Round-the-clock assistance during your travels</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Best Price Guarantee</h4>
                        <p className="text-muted-foreground text-sm">Competitive pricing with no hidden fees</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Customized Itineraries</h4>
                        <p className="text-muted-foreground text-sm">Personalized travel plans tailored to your preferences</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="contact" className="bg-primary text-primary-foreground py-12" aria-labelledby="footer-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/travel-logo.png" 
                    alt="TravelVista Logo" 
                    className="h-10 w-10"
                    width="40"
                    height="40"
                  />
                  <span className="text-2xl font-bold">TravelVista</span>
                </div>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  Your trusted partner in creating unforgettable travel experiences. We specialize in crafting personalized vacation packages that exceed expectations.
                </p>
                <nav className="flex space-x-4" aria-label="Social media links">
                  <a 
                    href="#" 
                    className="text-primary-foreground hover:text-white transition-colors"
                    aria-label="Follow TravelVista on Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-primary-foreground hover:text-white transition-colors"
                    aria-label="Follow TravelVista on Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="text-primary-foreground hover:text-white transition-colors"
                    aria-label="Follow TravelVista on Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </nav>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-2">
                    <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#packages" className="text-primary-foreground/80 hover:text-white transition-colors">Packages</a></li>
                    <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </nav>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <address className="space-y-3 not-italic">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="text-primary-foreground/80 text-sm">123 Travel Street, Adventure City</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <a href="tel:+15551234567" className="text-primary-foreground/80 text-sm hover:text-white transition-colors">+1 (555) 123-4567</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <a href="mailto:info@travelvista.com" className="text-primary-foreground/80 text-sm hover:text-white transition-colors">info@travelvista.com</a>
                  </div>
                </address>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 TravelVista. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}