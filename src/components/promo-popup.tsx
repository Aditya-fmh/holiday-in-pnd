'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Calendar, Star, Gift } from 'lucide-react';

interface PromoPopupProps {
  onClose?: () => void;
}

export default function PromoPopup({ onClose }: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on every visit/refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleBookNow = () => {
    handleClose();
    // Scroll to packages section
    const packagesSection = document.querySelector('#packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 z-10 h-8 w-8 rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={handleClose}
          aria-label="Close promotion popup"
        >
          <X className="h-4 w-4" />
        </Button>

        <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden">
          {/* Promo Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground text-center">
            <div className="flex justify-center mb-2">
              <Gift className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold mb-2">
              Limited Time Offer!
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-base">
              Exclusive Summer Travel Deals
            </CardDescription>
          </div>

          <CardContent className="p-6">
            {/* Main Offer */}
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">
                30% OFF
              </div>
              <p className="text-lg font-semibold mb-1">
                All Vacation Packages
              </p>
              <p className="text-muted-foreground text-sm">
                Book by July 31st, 2024
              </p>
            </div>

            {/* Promo Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Early Bird Special</p>
                  <p className="text-sm text-muted-foreground">
                    Save an additional 10% when you book 60 days in advance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Flexible Dates</p>
                  <p className="text-sm text-muted-foreground">
                    Free date changes up to 30 days before departure
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Gift className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Free Extras</p>
                  <p className="text-sm text-muted-foreground">
                    Complimentary travel insurance and welcome gift
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleBookNow}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Book Now & Save 30%
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="w-full"
              >
                Maybe Later
              </Button>
            </div>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              *Terms and conditions apply. Offer valid for new bookings only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}