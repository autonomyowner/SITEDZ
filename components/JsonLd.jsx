const JsonLd = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SiteDZ',
    description: "Algeria's premier digital agency crafting exceptional web and mobile experiences.",
    url: 'https://sitedz.com',
    logo: 'https://sitedz.com/favicon.svg',
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'SiteDZ Team',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressCountry: 'DZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+213797339451',
      contactType: 'customer service',
      email: 'hello@sitedz.com',
      availableLanguage: ['English', 'Arabic', 'French'],
    },
    sameAs: [
      'https://instagram.com/sitedz',
      'https://linkedin.com/company/sitedz',
      'https://twitter.com/sitedz',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Algeria',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SiteDZ',
    url: 'https://sitedz.com',
    description: "Algeria's premier digital agency crafting exceptional web and mobile experiences.",
    publisher: {
      '@type': 'Organization',
      name: 'SiteDZ',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sitedz.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SiteDZ',
    image: 'https://sitedz.com/favicon.svg',
    '@id': 'https://sitedz.com',
    url: 'https://sitedz.com',
    telephone: '+213797339451',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Algiers',
      addressCountry: 'DZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.7538,
      longitude: 3.0588,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '30',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SiteDZ Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies.',
        provider: {
          '@type': 'Organization',
          name: 'SiteDZ',
        },
        areaServed: 'Algeria',
      },
      {
        '@type': 'Service',
        name: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        provider: {
          '@type': 'Organization',
          name: 'SiteDZ',
        },
        areaServed: 'Algeria',
      },
      {
        '@type': 'Service',
        name: 'UI/UX Design',
        description: 'User-centered design that combines aesthetics with functionality.',
        provider: {
          '@type': 'Organization',
          name: 'SiteDZ',
        },
        areaServed: 'Algeria',
      },
      {
        '@type': 'Service',
        name: 'Tech Consulting',
        description: 'Strategic technology guidance to help your business grow.',
        provider: {
          '@type': 'Organization',
          name: 'SiteDZ',
        },
        areaServed: 'Algeria',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
};

export default JsonLd;
