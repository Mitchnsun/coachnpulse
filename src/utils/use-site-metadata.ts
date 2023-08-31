
import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  goals: string[]
  sessions: string[]
}

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          goals
          sessions
        }
      }
    }
  `)

  return data.site.siteMetadata as SiteMetadata
}