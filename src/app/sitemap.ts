import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://www.rtrvr.ai',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1
    },
    {
        url: 'https://www.rtrvr.ai/explore-data-marketplace',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6
    },
    {
        url: 'https://www.rtrvr.ai/team',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5
    },
    {
      url: 'https://www.rtrvr.ai/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    }
  ]
}