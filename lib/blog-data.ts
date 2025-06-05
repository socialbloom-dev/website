import type { BlogPost } from '@/types/data'

// Sample blog posts - replace this with your actual CMS or data source
export const blogPosts: BlogPost[] = [
  {
    slug: 'best-outbound-lead-generation-strategies',
    title: 'Best Outbound Lead Generation Strategies for 2024',
    excerpt: 'Discover the most effective outbound lead generation strategies that are driving results for B2B companies in 2024. Learn proven tactics to scale your pipeline.',
    content: `
      <h2>Introduction</h2>
      <p>Outbound lead generation remains one of the most effective ways to scale your B2B business. In this comprehensive guide, we'll explore the strategies that are working best in 2024.</p>
      
      <h2>1. Hyper-Personalized Email Outreach</h2>
      <p>Generic email blasts are dead. Today's successful outbound campaigns rely on deep personalization that shows genuine understanding of the prospect's business challenges.</p>
      
      <h2>2. Multi-Channel Approach</h2>
      <p>The most successful campaigns combine email, LinkedIn, phone calls, and even direct mail to create multiple touchpoints with prospects.</p>
      
      <h2>3. Data-Driven Targeting</h2>
      <p>Using advanced data analytics to identify and target your ideal customer profile (ICP) with precision.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing these strategies can help you achieve the kind of results our clients see - like the 155% growth rate we've helped businesses achieve.</p>
    `,
    author: 'Social Bloom Team',
    publishedAt: '2024-01-15',
    tags: ['outbound', 'lead-generation', 'b2b-marketing']
  },
  {
    slug: 'inbound-marketing-vs-outbound-marketing',
    title: 'Inbound vs Outbound Marketing: Which Strategy Wins in 2024?',
    excerpt: 'A comprehensive comparison of inbound and outbound marketing strategies, helping you decide which approach is best for your business goals.',
    content: `
      <h2>The Great Marketing Debate</h2>
      <p>The debate between inbound and outbound marketing has been ongoing for years. But in 2024, the most successful companies are using both strategies strategically.</p>
      
      <h2>Inbound Marketing Advantages</h2>
      <ul>
        <li>Builds long-term brand authority</li>
        <li>Attracts qualified leads organically</li>
        <li>Lower cost per acquisition over time</li>
      </ul>
      
      <h2>Outbound Marketing Advantages</h2>
      <ul>
        <li>Immediate results and faster pipeline growth</li>
        <li>Direct control over messaging and timing</li>
        <li>Ability to target specific accounts</li>
      </ul>
      
      <h2>The Winning Strategy: Integration</h2>
      <p>The most successful companies we work with use both approaches in a coordinated strategy that maximizes ROI.</p>
    `,
    author: 'Social Bloom Team',
    publishedAt: '2024-01-10',
    tags: ['inbound', 'outbound', 'marketing-strategy']
  },
  {
    slug: 'how-to-generate-qualified-leads',
    title: 'How to Generate High-Quality Leads That Actually Convert',
    excerpt: 'Learn the proven framework for generating leads that are ready to buy, not just browse. Discover the tactics that drive real revenue growth.',
    content: `
      <h2>Quality Over Quantity</h2>
      <p>Generating thousands of leads means nothing if they don't convert. Here's how to focus on quality leads that drive real revenue.</p>
      
      <h2>1. Define Your Ideal Customer Profile (ICP)</h2>
      <p>Before you can generate quality leads, you need to know exactly who you're targeting. This goes beyond basic demographics.</p>
      
      <h2>2. Use Buying Signals</h2>
      <p>Identify prospects who are showing active buying signals, such as visiting pricing pages, downloading comparison guides, or engaging with sales content.</p>
      
      <h2>3. Implement Lead Scoring</h2>
      <p>Not all leads are created equal. Implement a scoring system that prioritizes leads based on their likelihood to convert.</p>
      
      <h2>Results You Can Expect</h2>
      <p>Our clients typically see a 3-5x improvement in conversion rates when they implement these strategies properly.</p>
    `,
    author: 'Social Bloom Team',
    publishedAt: '2024-01-05',
    tags: ['lead-generation', 'conversion', 'sales']
  }
]

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Function to get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null
} 