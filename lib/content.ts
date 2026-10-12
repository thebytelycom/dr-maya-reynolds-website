// ---------------------------------------------------------------------------
// ALL website copy lives here, and every line is derived from Dr. Maya
// Reynolds' profile. Edit text here, not inside the components.
// ---------------------------------------------------------------------------

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  // TODO: replace with the real deployed URL (used for canonical + Open Graph)
  url: "https://dr-maya-reynolds.vercel.app",
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds",
  description:
    "Anxiety, trauma & burnout therapy for adults in Santa Monica, CA. Dr. Maya Reynolds, PsyD offers CBT and EMDR in person and by telehealth across California.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapist Santa Monica CA",
    "EMDR therapy Santa Monica",
    "burnout therapy Santa Monica",
    "clinical psychologist Santa Monica",
    "telehealth therapy California",
  ],
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    region: "CA",
    zip: "90401",
  },
};

export const images = {
  hero1: {
    src: "/images/hero-1.jpg",
    alt: "Illustration of a soft sunrise over a calm Pacific coastline",
  },
  hero2: {
    src: "/images/hero-2.jpg",
    alt: "Illustration of smooth sea-glass pebbles in teal, white and gold",
  },
  intro: {
    src: "/images/intro-coast.jpg",
    alt: "Illustration of a quiet, empty beach meeting a calm sea",
  },
  whoAnxiety: {
    src: "/images/who-anxiety.jpg",
    alt: "Illustration of an arched window letting calming light into a quiet room",
  },
  whoBurnout: {
    src: "/images/who-burnout.jpg",
    alt: "Illustration of a slow-paced desk with a notebook, warm tea and a small plant",
  },
  whoTrauma: {
    src: "/images/who-trauma.jpg",
    alt: "Illustration of a gentle path winding through coastal dunes",
  },
  maya: {
    src: "/images/maya-reynolds.jpg",
    alt: "Portrait of Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica",
  },
  services: {
    src: "/images/services-side.jpg",
    alt: "Illustration of gentle ripples spreading across calm teal water",
  },
  office1: {
    src: "/images/office-1.jpg",
    alt: "Sunlit therapy room with a gray sofa, glass coffee table and tall windows beside exposed brick",
  },
  office2: {
    src: "/images/office-2.jpg",
    alt: "Calm counseling space with a gray sofa, leather armchair, olive tree and bookshelf",
  },
  cta: {
    src: "/images/cta-coast.jpg",
    alt: "Illustration of golden-hour light over the Santa Monica shoreline",
  },
};

export const services = [
  {
    id: "anxiety-therapy",
    title: "Anxiety & Panic Therapy",
    text: "For adults caught in constant worry, overthinking, panic, or the feeling that something is about to go wrong. We use cognitive-behavioral therapy (CBT), mindfulness-based practices, and body-oriented techniques to understand both the emotional and the physical sides of anxiety, from racing thoughts to tension and trouble sleeping.",
  },
  {
    id: "trauma-therapy",
    title: "Trauma Therapy & EMDR",
    text: "Support for single-incident trauma and for long-standing patterns rooted in childhood, relationships, or chronic stress. EMDR is woven in with other evidence-based methods, and the work is paced carefully around safety and stabilization, so you feel more regulated in daily life, not only in session.",
  },
  {
    id: "burnout-counseling",
    title: "Burnout & Perfectionism Counseling",
    text: "For entrepreneurs, creatives, and professionals running on high internal pressure who feel disconnected from themselves after years of pushing through. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", children: services },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & secure telehealth across California",
  h1Start: "Anxiety & trauma therapy in Santa Monica, CA, to help you feel ",
  h1Em: "steady again.",
  sub: "I'm Dr. Maya Reynolds, a licensed clinical psychologist helping thoughtful, high-achieving adults work through anxiety, panic, burnout, and the lingering effects of past experiences.",
  primaryCta: "Book a consultation",
  secondaryCta: "Meet Dr. Reynolds",
};

export const intro = {
  h2: "You keep showing up. You're also exhausted, and that's worth taking seriously.",
  tagline: "Therapy can be the place where you finally slow down.",
  p1: "From the outside, you're functioning. On the inside, there may be constant worry, tension in your body, difficulty sleeping, or a sense that you're always bracing for something to go wrong. Feeling stuck in overthinking doesn't mean you're doing something wrong; it often means you've been carrying a lot for a long time.",
  p2: "As a clinical psychologist in Santa Monica, I offer a warm, collaborative, and grounded space where you feel respected and understood, and where we can work on both the emotional and the physical sides of what you're experiencing.",
};

export const who = {
  h2Start: "Who I ",
  h2Em: "help",
  sub: "Adults who are tired of holding it all together.",
  cards: [
    {
      title: "Adults with anxiety & panic",
      text: "If constant worry, overthinking, or panic keeps you on edge, we'll look at the thoughts and the physical tension behind them, using CBT, mindfulness, and body-oriented tools.",
      image: images.whoAnxiety,
    },
    {
      title: "Professionals facing burnout",
      text: "Entrepreneurs, creatives, and professionals often feel disconnected from themselves after years of pushing through stress. Together we make room for rest, perspective, and a more sustainable pace.",
      image: images.whoBurnout,
    },
    {
      title: "Adults healing from trauma",
      text: "Whether it was a single event or long-standing patterns from childhood, relationships, or chronic stress, we move carefully, with safety and stabilization coming first.",
      image: images.whoTrauma,
    },
  ],
};

export const band = {
  h2: "You've been bracing for a long time. Therapy can be where you finally put some of it down.",
  listHeading: "Areas of focus",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "Chronic stress",
    "Difficulty sleeping",
    "Complex trauma",
    "Tension in the body",
    "Confidence",
    "Relationships",
  ],
  more: "…and more.",
};

export const about = {
  eyebrow: "How I work",
  h2: "Warm, grounded, and evidence-based, with room for depth.",
  credential: "Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist",
  paragraphs: [
    "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "Sessions are structured enough to feel supportive, while still leaving space for reflection. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand what's happening emotionally and physiologically.",
    "I believe therapy works best when you feel respected, understood, and actively involved. My goal isn't only symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.",
  ],
  methods: [
    "CBT",
    "EMDR",
    "Mindfulness-based practices",
    "Body-oriented techniques",
  ],
  cta: "Book a consultation",
};

export const servicesSection = {
  h2: "Therapy for anxiety, trauma, and burnout in Santa Monica",
  sub: "Practical tools combined with depth-oriented work, for people living and working in a fast-paced environment.",
  link: "Start with a consultation",
};

export const office = {
  eyebrow: "Our Office",
  h2: "A calm, private space in Santa Monica",
  p1: "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
  p2: "Prefer to meet from home? Secure telehealth sessions are available for clients located in California.",
  details: [
    {
      label: "Location",
      value: "123th Street 45 W, Santa Monica, CA 90401",
    },
    { label: "In person", value: "Sessions at the Santa Monica office" },
    {
      label: "Telehealth",
      value: "Secure video sessions for clients located in California",
    },
  ],
};

export const faqs = [
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes. I see clients in person at my Santa Monica office and offer secure telehealth sessions for clients located in California.",
  },
  {
    q: "Who do you work with?",
    a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware, including entrepreneurs, creatives, and professionals who feel exhausted or stuck in overthinking.",
  },
  {
    q: "What does anxiety therapy with you involve?",
    a: "Sessions are structured enough to feel supportive, with space for reflection and depth. I draw on cognitive-behavioral therapy (CBT), mindfulness-based practices, and body-oriented techniques so you can understand both the emotional and the physical sides of anxiety, such as constant worry, tension, and trouble sleeping.",
  },
  {
    q: "How do you approach trauma therapy?",
    a: "I work with single-incident trauma as well as long-standing patterns that may stem from childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety and stabilization, and I use EMDR alongside other evidence-based methods to help you feel more regulated in daily life, not just during sessions.",
  },
  {
    q: "I seem to be coping well. Could therapy still help?",
    a: "Yes. Many of my clients look \"functional\" on the outside while quietly dealing with constant worry, burnout, or high internal pressure. Therapy can give you a space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
  },
  {
    q: "Is telehealth available if I live outside California?",
    a: "Telehealth sessions are offered to clients located in California. If you're nearby, in-person sessions are available at my Santa Monica office.",
  },
];

export const cta = {
  eyebrow: "Schedule a consultation",
  h2: "Find the right support for what you've been carrying.",
  text: "Reaching out is a good first step. Tell me a little about what's been weighing on you and whether you'd prefer to meet in person in Santa Monica or by telehealth.",
  submit: "Request a consultation",
  thanks: "Your request has been noted. Thank you for reaching out.",
};

export const footer = {
  blurb:
    "Anxiety, trauma, and burnout therapy for adults in Santa Monica, California, in person and by secure telehealth.",
  serving:
    "Serving adults in Santa Monica and clients located throughout California via telehealth.",
  crisis:
    "If you are in crisis or need immediate support in the U.S., call or text 988.",
};
