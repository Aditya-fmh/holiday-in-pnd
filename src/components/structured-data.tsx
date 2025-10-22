'use client';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'localbusiness';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TravelVista",
          "url": "https://travelvista.com",
          "logo": "https://travelvista.com/travel-logo.png",
          "description": "Your trusted partner in creating unforgettable travel experiences. We specialize in crafting personalized vacation packages that exceed expectations.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Travel Street",
            "addressLocality": "Adventure City",
            "addressRegion": "AC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "info@travelvista.com"
          },
          "sameAs": [
            "https://facebook.com/travelvista",
            "https://instagram.com/travelvista",
            "https://twitter.com/travelvista"
          ],
          "foundingDate": "2010",
          "numberOfEmployees": "50",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "50000"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "TravelVista",
          "url": "https://travelvista.com",
          "description": "Explore breathtaking destinations with TravelVista. We offer outbound adventures, body rafting experiences, and city tours worldwide.",
          "publisher": {
            "@type": "Organization",
            "name": "TravelVista",
            "logo": {
              "@type": "ImageObject",
              "url": "https://travelvista.com/travel-logo.png"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://travelvista.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US"
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "TravelVista",
          "image": "https://travelvista.com/hero-bg.jpg",
          "url": "https://travelvista.com",
          "telephone": "+1-555-123-4567",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Travel Street",
            "addressLocality": "Adventure City",
            "addressRegion": "AC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "reservations"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vacation Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "European Explorer Package",
                  "description": "14 days across 5 European capitals"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Body Rafting Adventure",
                  "description": "Exciting river adventures for all skill levels"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "City Tours",
                  "description": "Guided tours of historic downtown and cultural landmarks"
                }
              }
            ]
          }
        };

      default:
        return {};
    }
  };

  const structuredData = generateStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}