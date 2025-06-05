import type { Service, CaseStudy, FAQ } from "@/types/data"

export const services: Record<string, Service> = {
  outbound: {
    title: "Outbound Marketing That Achieves 10X More ROI",
    description:
      "We turn outbound into measurable success through a data-driven approach not just guesswork, by focusing on hyper-personalized, targeted outreach and precise strategies, we help you skyrocket your conversion rates, attract more high-value clients, and scale your business faster than ever before.",
    revenue: "$354K",
    goal: "8%",
    channels: [
      { name: "Email Marketing", amount: "$200K" },
      { name: "Paid Advertising", amount: "$154K" },
    ],
  },
  inbound: {
    title: "Turn Your Audience Into Paying Clients",
    description:
      "Transform your existing followers into loyal, paying clients and unlock that hidden revenue opportunity gap, by helping you build trust, boost conversions, and maximize the potential of your existing audience to drive growth and revenue.",
    revenue: "$92K",
    goal: "15%",
    channels: [
      { name: "LinkedIn", amount: "$35K" },
      { name: "YouTube", amount: "$32K" },
      { name: "SEO", amount: "$25K" },
    ],
  },
  leadgen: {
    title: "Leads That Are Ready To Convert",
    description:
      "We'll supply you with high-quality leads who are eager to use your solution. By focusing on a hyper-personalized approach and leveraging strong buying signals, we ensure that the leads you receive are primed for conversion. Our approach prioritizes quality over quantity, delivering nothing but high-quality leads to fuel your sales pipeline",
    revenue: "High Quality Leads",
    goal: "Premium",
    channels: [
      { name: "Fintech", amount: "Industry" },
      { name: "500+", amount: "Company Size" },
      { name: "C-Level", amount: "Roles" },
      { name: "$13M", amount: "Revenue" },
    ],
  },
}

export const faqs: FAQ[] = [
  {
    question: "Why should I go with SocialBloom? What makes you different from similar agencies?",
    answer:
      'Unlike other agencies, we deliver results not just "services". We stand out by delivering custom strategies, measurable outcomes, and ROI-focused solutions.',
  },
  {
    question: "What can I expect before I jump on the discovery call?",
    answer:
      "We'll discuss how our approach can benefit your business, and if we're a good fit for each other, we'll proceed with the onboarding process.",
  },
  {
    question: "Do you offer any sort of money-back guarantee?",
    answer:
      "Yes, if you don't achieve at least 2X ROI within the first 6 months you get your money back. No questions asked.",
  },
  {
    question: "Do you work with all industries?",
    answer:
      "If we believe we can drive impact, then yes, we work with a wide range of industries. As long as we can deliver measurable results, our approach is adaptable and focused on achieving success for your business.",
  },
  {
    question:
      "Will you be able to fully take care of our whole marketing from the infrastructure to the actual campaigns?",
    answer:
      "Absolutely, we provide an end-to-end solution, from infrastructure building to managing and optimizing multi-channel campaigns for you.",
  },
  {
    question: "I already have a good sales team, can you train them to implement your approach?",
    answer:
      "Yes, we offer coaching services tailored to your needs—whether it's outbound marketing, inbound, or lead generation. We can also integrate our sales experts with your team to provide additional support and help drive results.",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    client: "IFPG",
    revenue: "$8.6M Generated In 4.5 Years",
    year: "2020",
    service: "Outbound",
    overview:
      "IFPG is a membership-based organization connecting franchisors, brokers, and lenders to help candidates buy franchises, providing tools and support without referral fees.",
    challenges: [
      "Struggled to define their ICP, affecting targeting.",
      "Inconsistent lead generation.",
      "Lacked a structured marketing strategy.",
    ],
    process: [
      "Refined ICP for better audience targeting.",
      "Implemented data-driven lead generation.",
      "Built a full-funnel marketing system.",
    ],
    results: [
      "$8.6M revenue in 4.5 years.",
      "Increased conversions and steady growth.",
      "Scalable, predictable marketing system.",
    ],
    videoId: "1pFE4-0fLYiXcd8LEece9WUQ9CRfl5_jO",
  },
  {
    client: "Bifrost",
    revenue: "$12M Generated In 1 Year",
    year: "2024",
    service: "Outbound",
    overview:
      "Bifrost creates physically accurate synthetic datasets using advanced 3D simulations, revolutionizing AI training and validation by eliminating the reliance on real-world data.",
    challenges: [
      "Struggled to clarify their offer across 20 use cases.",
      "Found it hard to pinpoint their top 20 ICPs.",
    ],
    process: [
      "Narrowed down the 5 most valuable use cases.",
      "Clearly identified their 5 ICPs.",
      "Clarified their messaging to quickly convey value to prospects.",
    ],
    results: [
      "5.2% conversion rate.",
      "$12M generated in 2 years.",
      "They secured $13M in seed funding from investors.",
    ],
    videoId: "1mtiu0Euxt1i9cfzLrlwvQG3PpSf0JH14",
  },
  {
    client: "Grow Solo Media",
    revenue: "$113K Generated In 20 Days",
    year: "2024",
    service: "Lead Generation",
    overview:
      "Grow Solo Media is a LinkedIn marketing agency specializing in executive storytelling and growth marketing, offering comprehensive services to enhance the personal brands of executives and businesses.",
    challenges: ["They failed to identify their ICP.", "They struggled to generate high-quality leads."],
    process: [
      "Clearly defined their ICP to target the right audience.",
      "Crafted a messaging & offer that resonate with their audience.",
      "Delivered highly qualified leads eager to adopt their solution.",
    ],
    results: [
      "3.4% AVG reply rate and 60% interested replies.",
      "90% of the outreach process is automated.",
      "They generated $113K in just 20 days.",
    ],
    videoId: "1hhdZfSpvpLTJGeZLpz6POVCm5kF5M_1t",
  },
  {
    client: "Fitness Revolution",
    revenue: "$397K Generated In 5 Months",
    year: "2023",
    service: "Outbound",
    overview:
      "Fitness Revolution provides business coaching, strategic planning, and resources for gym owners, offering independence through structured systems, peer groups, and expert guidance to grow and streamline their businesses.",
    challenges: [
      "Struggled to define their ICP, affecting targeting.",
      "Inconsistent lead generation.",
      "Lacked a structured marketing strategy.",
    ],
    process: [
      "Refined ICP for better audience targeting.",
      "Implemented data-driven lead generation.",
      "Built a full-funnel marketing system.",
    ],
    results: [
      "$397K in revenue in 5 months.",
      "Increased conversions and steady growth.",
      "Scalable, predictable marketing system.",
    ],
    videoId: "1nBmko3ismv8fHDsp0blZ_OTiYH_IE9u9",
  },
]

export const testimonials = [
  {
    name: "Edward Liveikis",
    title: "Managing Partner @ Ardent Blue",
    quote:
      "We wouldn't have achieved this level of growth without SocialBloom. Thanks to them, we generated over $800K in less than a month.",
  },
  {
    name: "Jaafar Zerrouq",
    title: "Founder @ Luster Social",
    quote:
      "We literally generated over $400K in eight weeks -- incredible results! I love their approach and the way they work.",
  },
  {
    name: "Andrew Watson",
    title: "Head Of Sales @ Bifrost",
    quote:
      "Over the past 2.5 years, their strategies have helped us achieve $12 million generated. I can't recommend SocialBloom enough!",
  },
]

export const chartData = [
  { month: "Oct", percentage: "25%" },
  { month: "Nov", percentage: "50%" },
  { month: "Dec", percentage: "75%" },
  { month: "Jan", percentage: "155%" },
]

export const statsData = [
  { value: 180, suffix: "M", label: "Generated", color: "#2DE6C4" },
  { value: 43, suffix: "", label: "Clients", color: "#2DE6C4" },
  { value: 155, suffix: "%", label: "Growth", color: "#2DE6C4" },
]

export const ctaStats = [
  { value: "$180M", label: "Generated for our clients", color: "#2DE6C4" },
  { value: "43", label: "Clients we have", color: "#2DE6C4" },
  { value: "155%", label: "Growth driven so far", color: "#2DE6C4" },
]
