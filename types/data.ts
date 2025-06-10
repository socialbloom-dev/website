export interface Service {
  title: string
  description: string
  revenue: string
  goal: string
  channels: Array<{ name: string; amount: string }>
}

export interface CaseStudy {
  client: string
  revenue: string
  year: string
  service: string
  overview: string
  challenges: string[]
  process: string[]
  results: string[]
  videoId: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: {
    value: any
    blocks?: any[]
    links?: any[]
  } | null
  author: string
  publishedAt: string
  tags?: string[]
  featured?: boolean
  readTime?: number
}
