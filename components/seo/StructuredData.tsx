import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amankhan.dev";
const profileImageUrl = process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || `${siteUrl}/images/profile.jpeg`;

// Person Schema - Primary identity for Google Knowledge Panel
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Aman Khan",
  givenName: "Aman",
  familyName: "Khan",
  alternateName: ["Aman Khan Developer", "Aman Khan Frontend"],
  jobTitle: "Senior Frontend Developer & Tech Lead",
  description:
    "Senior Frontend Developer & Tech Lead with 8+ years of experience in full-stack web development. Expert in React, Next.js, Node.js, and Kubernetes. Building scalable applications and leading high-performance engineering teams.",
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: profileImageUrl,
    width: 400,
    height: 400,
    caption: "Aman Khan - Frontend Developer & Tech Lead",
  },
  email: "mailto:aman2810khan@gmail.com",
  telephone: "+91-9911233029",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "India",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/khan-builds-tech",
    "https://github.com/khan-builds-tech",
    "https://www.youtube.com/@khan-builds-tech",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "IIIT Delhi",
    sameAs: "https://iiitd.ac.in",
  },
  worksFor: {
    "@type": "Organization",
    name: "Innovaccer",
    sameAs: "https://innovaccer.com",
    logo: `${siteUrl}/images/innovaccer.png`,
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "Microservices",
    "Full Stack Development",
    "Web Development",
    "Software Engineering",
    "Frontend Development",
    "Backend Development",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "Python",
    "Django",
    "AWS",
    "CI/CD",
    "Agile Development",
    "Team Leadership",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Developer",
    occupationalCategory: "15-1252.00",
    description: "Senior Frontend Developer and Tech Lead specializing in React and Node.js",
    skills: "React, Next.js, Node.js, TypeScript, Kubernetes, Docker, Microservices",
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "INR",
      duration: "P1Y",
    },
  },
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Aman Khan — Frontend Developer & Tech Lead Portfolio",
  alternateName: "Aman Khan Portfolio",
  url: siteUrl,
  description:
    "Portfolio website of Aman Khan, Senior Frontend Developer & Tech Lead with 8+ years of experience in React, Next.js, and Node.js",
  publisher: { "@id": `${siteUrl}/#person` },
  author: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-US",
  copyrightYear: 2024,
  copyrightHolder: { "@id": `${siteUrl}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ProfilePage Schema
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  name: "Aman Khan — Frontend Developer Portfolio",
  url: siteUrl,
  mainEntity: { "@id": `${siteUrl}/#person` },
  about: { "@id": `${siteUrl}/#person` },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
};

// BreadcrumbList Schema - Helps Google understand site structure
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Experience",
      item: `${siteUrl}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Projects",
      item: `${siteUrl}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Knowledge Sharing",
      item: `${siteUrl}/#knowledge-sharing`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Skills",
      item: `${siteUrl}/#skills`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Achievements",
      item: `${siteUrl}/#achievements`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Contact",
      item: `${siteUrl}/#contact`,
    },
  ],
};

// Work Experience Schema - ItemList with OrganizationRole
const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#experience`,
  name: "Professional Experience - Aman Khan",
  description: "Work experience timeline of Aman Khan - Frontend Developer & Tech Lead",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "OrganizationRole",
        roleName: "SDE-3 / Tech Lead",
        startDate: "2021-03",
        description: "Leading frontend development for healthcare data platform. Building scalable React applications with TypeScript and Kubernetes.",
        memberOf: {
          "@type": "Organization",
          name: "Innovaccer",
          sameAs: "https://innovaccer.com",
          logo: `${siteUrl}/images/innovaccer.png`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "OrganizationRole",
        roleName: "SDE-2 / Full Stack Engineer",
        startDate: "2019-08",
        endDate: "2021-03",
        description: "Full stack development for education platform using React, Node.js, and MongoDB.",
        memberOf: {
          "@type": "Organization",
          name: "Collegedunia",
          sameAs: "https://collegedunia.com",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "OrganizationRole",
        roleName: "Software Engineer",
        startDate: "2017-07",
        endDate: "2019-08",
        description: "Enterprise software development and Java applications.",
        memberOf: {
          "@type": "Organization",
          name: "Newgen Software",
          sameAs: "https://newgensoft.com",
        },
      },
    },
  ],
};

// FAQPage Schema - Can help with rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies does Aman Khan specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aman Khan specializes in React.js, Next.js, Node.js, TypeScript, Kubernetes, Docker, and Microservices architecture. He has 8+ years of experience in full-stack web development.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Aman Khan currently work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aman Khan currently works as a Tech Lead (SDE-3) at Innovaccer, a healthcare data platform company, where he leads frontend development initiatives.",
      },
    },
    {
      "@type": "Question",
      name: "How to contact Aman Khan for job opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Aman Khan via email at aman2810khan@gmail.com or connect with him on LinkedIn at linkedin.com/in/khan-builds-tech",
      },
    },
    {
      "@type": "Question",
      name: "What is Aman Khan's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aman Khan holds a B.Tech degree in Computer Science and Engineering from IIIT Delhi (Indraprastha Institute of Information Technology Delhi).",
      },
    },
  ],
};

// Combined schema graph
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    websiteSchema,
    profilePageSchema,
    breadcrumbSchema,
    workExperienceSchema,
    faqSchema,
  ],
};

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph),
      }}
    />
  );
}
