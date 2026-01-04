export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Trivasia Overseas",
    "url": "https://www.trivasia.com",
    "logo": "https://www.trivasia.com/logo.png",
    "description": "Leading education and travel consultancy providing study abroad, holiday packages, and immigration services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.13, Poraniyar Valaagam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9629557788",
      "contactType": "Customer Service",
      "email": "admission@trivasia.com",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.google.com/maps/place/Trivasia+Overseas/@10.9617128,78.0741202,17z"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "371"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trivasia Overseas",
    "image": "https://www.trivasia.com/logo.png",
    "telephone": "+91-9629557788",
    "email": "admission@trivasia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.13, Poraniyar Valaagam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.9617128,
      "longitude": 78.0766951
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
