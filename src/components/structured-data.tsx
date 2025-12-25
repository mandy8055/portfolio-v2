export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manuj Sankrit',
    alternateName: 'mandy8055',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in React, Next.js, and TypeScript. Arctic Code Vault Contributor and open-source evangelist.',
    url: 'https://manuj-sankrit-8055.vercel.app',
    image: 'https://manuj-sankrit-8055.vercel.app/og-image.png',
    sameAs: [
      'https://github.com/mandy8055',
      'https://linkedin.com/in/manuj-sankrit-b82175117',
      'https://twitter.com/mandy8055',
      'https://stackoverflow.com/users/19090048',
      'https://leetcode.com/mandy8055',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Software Engineering',
      'Cloud Architecture',
      'CI/CD',
    ],
    award: [
      'Arctic Code Vault Contributor',
      'AWS Certified Cloud Practitioner',
      'State Championship Swimming Medalist',
      'Q2 World Leading Award - Suncorp Group Ltd.',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
