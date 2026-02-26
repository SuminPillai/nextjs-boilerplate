// Structured Data (JSON-LD) for SEO
// Sanitize JSON to prevent XSS as per SEO guide

function SafeJsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, '\\u003c'),
            }}
        />
    );
}

export interface OrganizationSchemaProps {
    name?: string;
    url?: string;
    logo?: string;
    description?: string;
}

export function OrganizationSchema({
    name = "Anantadrishti Yoga",
    url = "https://www.anantadrishtiyoga.com",
    logo = "https://www.anantadrishtiyoga.com/img/logo.webp",
    description = "Yoga Alliance certified yoga school in Rishikesh, India offering 200-hour and 300-hour yoga teacher training, advanced pranayama courses, and yoga retreats."
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        url,
        logo: {
            "@type": "ImageObject",
            url: logo,
            width: 200,
            height: 200
        },
        description,
        sameAs: [
            "https://www.instagram.com/anantadrishtiyoga",
            "https://www.facebook.com/anantadrishtiyoga"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8979095535",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"]
        }
    };

    return <SafeJsonLd data={schema} />;
}

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["YogaStudio", "EducationalOrganization"],
        "@id": "https://www.anantadrishtiyoga.com/#localbusiness",
        name: "Anantadrishti Yoga",
        description: "Yoga Alliance certified yoga school in Rishikesh, India offering 200-hour and 300-hour yoga teacher training, advanced pranayama courses, and yoga retreats in the yoga capital of the world.",
        image: "https://www.anantadrishtiyoga.com/img/extern/herosection.jpg",
        url: "https://www.anantadrishtiyoga.com",
        telephone: "+91-8979095535",
        email: "anantadrishtiyogaschool@gmail.com",
        priceRange: "$800–$2500",
        currenciesAccepted: "INR, USD, EUR",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Near Moktan Coffee Shop, Lower Tapovan",
            addressLocality: "Rishikesh",
            addressRegion: "Uttarakhand",
            postalCode: "249192",
            addressCountry: "IN"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 30.1301,
            longitude: 78.3248
        },
        openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "06:00",
            closes: "20:00"
        }],
        sameAs: [
            "https://www.facebook.com/anantadrishtiyoga",
            "https://www.instagram.com/anantadrishtiyoga"
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127"
        }
    };

    return <SafeJsonLd data={schema} />;
}

export interface CourseInstance {
    name: string;
    startDate: string;
    endDate: string;
    courseMode?: string;
    courseWorkload?: string;
    location?: string;
    price?: string;
    priceCurrency?: string;
}

export interface CourseSchemaProps {
    name: string;
    description: string;
    url: string;
    provider?: {
        name: string;
        url: string;
    };
    instances?: CourseInstance[];
}

export function CourseSchema({
    name,
    description,
    url,
    provider = { name: "Anantadrishti Yoga", url: "https://www.anantadrishtiyoga.com" },
    instances = []
}: CourseSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name,
        description,
        provider: {
            "@type": "Organization",
            name: provider.name,
            sameAs: provider.url
        },
        url,
        hasCourseInstance: instances.map(instance => ({
            "@type": "CourseInstance",
            name: instance.name,
            startDate: instance.startDate,
            endDate: instance.endDate,
            courseMode: instance.courseMode || "Onsite",
            courseWorkload: instance.courseWorkload || "PT200H", // Default or dynamic
            inLanguage: "en",
            location: {
                "@type": "Place",
                name: instance.location || "Anantadrishti Yoga Shala",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Near Moktan Coffee Shop, Lower Tapovan",
                    addressLocality: "Rishikesh",
                    addressRegion: "Uttarakhand",
                    addressCountry: "IN"
                }
            },
            offers: {
                "@type": "Offer",
                price: instance.price,
                priceCurrency: instance.priceCurrency || "USD",
                availability: "https://schema.org/InStock"
            }
        }))
    };

    return <SafeJsonLd data={schema} />;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };

    return <SafeJsonLd data={schema} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };

    return <SafeJsonLd data={schema} />;
}

export function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.anantadrishtiyoga.com/#website",
        url: "https://www.anantadrishtiyoga.com",
        name: "Anantadrishti Yoga",
        description: "Yoga Alliance certified yoga teacher training, pranayama courses, and yoga retreats in Rishikesh, India — the yoga capital of the world.",
        publisher: {
            "@id": "https://www.anantadrishtiyoga.com/#organization"
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://www.anantadrishtiyoga.com/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return <SafeJsonLd data={schema} />;
}

// Combined component for homepage
export function HomePageSchema() {
    return (
        <>
            <OrganizationSchema />
            <LocalBusinessSchema />
            <WebsiteSchema />
        </>
    );
}
