export const NAV_ITEMS = [
  {
    label: "Services",
    mega: {
      sections: [
        {
          title: "Dispatch",
          items: [
            {
              label: "3PL Manifest Dispatch",
              description: "Structured multi-drop runs with SLA enforcement",
              icon: "📋",
              href: "/services/dispatch",
            },
            {
              label: "Same-Day Delivery",
              description: "Express tier — delivery within Lagos in hours",
              icon: "⚡",
              href: "/services/same-day",
            },
            {
              label: "Scheduled Runs",
              description: "Standard & bulk tiers for planned distribution",
              icon: "📅",
              href: "/services/scheduled",
            },
          ],
        },
        {
          title: "Task Marketplace",
          items: [
            {
              label: "On-Demand Taskers",
              description: "Vetted riders deployed in real time",
              icon: "🏍",
              href: "/services/taskers",
            },
            {
              label: "KYC-Verified Network",
              description: "Every tasker BVN/NIN verified before activation",
              icon: "✅",
              href: "/services/verification",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Solutions",
    mega: {
      sections: [
        {
          title: "By Industry",
          items: [
            {
              label: "Pharma & Health",
              description: "Temperature-sensitive, compliance-first delivery",
              icon: "💊",
              href: "/solutions/pharma",
            },
            {
              label: "Retail & FMCG",
              description: "High-volume replenishment across Lagos",
              icon: "🛒",
              href: "/solutions/retail",
            },
            {
              label: "Fashion & Boutiques",
              description: "White-glove same-day for VI & Lekki",
              icon: "👗",
              href: "/solutions/fashion",
            },
            {
              label: "Gift Businesses",
              description: "Timed, presentation-perfect deliveries",
              icon: "🎁",
              href: "/solutions/gifts",
            },
          ],
        },
        {
          title: "By Need",
          items: [
            {
              label: "Operator Dashboard",
              description: "Manifest builder, live tracking, reports",
              icon: "📊",
              href: "/solutions/dashboard",
            },
            {
              label: "API Integration",
              description: "Connect your stack to Tura's dispatch engine",
              icon: "🔌",
              href: "/solutions/api",
            },
          ],
        },
      ],
    },
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with Tura for my business?",
        a: "Getting started is simple. Sign up on the Tura platform, provide your business details, and our onboarding team will guide you through the setup process. You can start placing delivery orders within 24 hours of account verification.",
      },
      {
        q: "What types of businesses can use Tura?",
        a: "Tura is built for any business that moves products — ecommerce brands, retail stores, food businesses, pharmacies, FMCG distributors, fashion labels, and more. If you operate in Lagos and need reliable delivery coordination, Tura is designed for you.",
      },
    ],
  },
  {
    category: "Operations",
    items: [
      {
        q: "What areas in Lagos does Tura currently cover?",
        a: "Tura currently covers all major commercial and residential areas across Lagos — from Lagos Island and Victoria Island to the mainland, Surulere, Yaba, Ikeja, and beyond. Coverage is continuously expanding.",
      },
      {
        q: "How does Tura coordinate deliveries for my business?",
        a: "Once you submit an order through the dashboard, Tura matches it to the nearest available verified rider using proximity and load-balancing logic. You receive real-time status updates at every stage — pickup, in transit, and delivered.",
      },
      {
        q: "Can I track my deliveries in real time?",
        a: "Yes. Every order placed through Tura comes with live status notifications. You'll be updated the moment a rider accepts, picks up, and completes your delivery — keeping you and your customers fully informed.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    items: [
      {
        q: "How is pricing structured for delivery orders?",
        a: "Pricing is calculated based on distance, package size, and delivery priority. Businesses get access to competitive rates with transparent breakdowns — no hidden charges. Volume-based pricing is available for high-frequency businesses.",
      },
      {
        q: "Is there a minimum number of deliveries required?",
        a: "No minimum is required to get started. Whether you're running 5 deliveries a week or 500 a day, Tura scales to your volume without locking you into contracts.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        q: "What happens if a delivery is delayed or goes wrong?",
        a: "Tura has a dedicated support team to handle disputes and delivery issues. Every order is traceable and logged, making resolution fast and transparent. Businesses can flag issues directly from the dashboard.",
      },
      {
        q: "How do I contact Tura support?",
        a: "You can reach the Tura support team via WhatsApp, email, or the in-app help centre. Support is available during business hours with a target response time of under 30 minutes for active delivery issues.",
      },
    ],
  },
];

export const initialFormData = {
  fullName: "",
  businessName: "",
  role: "",
  email: "",
  phone: "",
  businessType: "",
  monthlyVolume: "",
  deliveryZones: "",
  currentSetup: "",
  primaryChallenges: [],
  tierInterest: "",
  timeline: "",
  message: "",
  consent: false,
};

export const businessTypes = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "retail", label: "Retail" },
  { value: "fmcg_distribution", label: "FMCG / distribution" },
  { value: "food_beverage", label: "Food and beverage" },
  { value: "fashion_apparel", label: "Fashion and apparel" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

export const volumeOptions = [
  { value: "under_50", label: "Under 50 deliveries" },
  { value: "50_200", label: "50–200 deliveries" },
  { value: "200_500", label: "200–500 deliveries" },
  { value: "500_1500", label: "500–1,500 deliveries" },
  { value: "over_1500", label: "Over 1,500 deliveries" },
];

export const setupOptions = [
  { value: "no_dedicated_setup", label: "No dedicated setup yet" },
  { value: "in_house_riders", label: "In-house riders" },
  { value: "third_party_dispatch", label: "Third-party dispatch riders" },
  { value: "mixed", label: "A mix of the above" },
];

export const challengeOptions = [
  { value: "reliability", label: "Reliability of deliveries" },
  { value: "visibility", label: "Tracking and visibility" },
  { value: "cost", label: "Cost per delivery" },
  { value: "accountability", label: "Accountability when things go wrong" },
  { value: "scaling", label: "Scaling with demand" },
];

export const tierOptions = [
  { value: "spark", label: "Spark" },
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "essential", label: "Essential" },
  { value: "scale", label: "Scale" },
  { value: "not_sure", label: "Not sure yet" },
];

export const timelineOptions = [
  { value: "immediately", label: "Immediately" },
  { value: "within_month", label: "Within a month" },
  { value: "one_to_three_months", label: "1–3 months" },
  { value: "exploring", label: "Just exploring" },
];
