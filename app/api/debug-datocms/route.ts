import { NextResponse } from 'next/server'
import { request, gql } from 'graphql-request'

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || '26a1da4041330b18f894f4e25db08f'
const DATOCMS_API_URL = 'https://graphql.datocms.com/'

// Type for schema introspection
interface SchemaType {
  name: string
  fields: Array<{
    name: string
    type: {
      name?: string
      kind: string
    }
  }>
}

interface SchemaResponse {
  __schema: {
    types: SchemaType[]
  }
}

// Introspection query to discover available fields
const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __schema {
      types {
        name
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  }
`

// Query with all the fields we discovered in the schema
const GET_BLOG_POSTS_WITH_ALL_FIELDS = gql`
  query GetBlogPostsWithAllFields {
    allBlogPosts {
      id
      _status
      _firstPublishedAt
      _createdAt
      _updatedAt
      _modelApiKey
      slug
      headings
      richText {
        value
        blocks
        links
      }
      date
      media {
        url
        alt
      }
      numbering
      seo {
        title
        description
      }
    }
  }
`

export async function GET() {
  try {
    console.log('Debug: Fetching all fields from DatoCMS...')
    
    const blogData = await request(
      DATOCMS_API_URL,
      GET_BLOG_POSTS_WITH_ALL_FIELDS,
      {},
      {
        Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
      }
    )

    console.log('Debug: Full Blog Posts Response:', JSON.stringify(blogData, null, 2))

    return NextResponse.json({
      success: true,
      blogPosts: blogData,
      message: 'Check the console logs for detailed information about all fields'
    })
  } catch (error) {
    console.error('Debug: Error fetching from DatoCMS:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Check the console logs for more details'
    })
  }
} 