export type BlogPost = {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "total-lunar-eclipse-september-2025",
    title: "Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide",
    excerpt:
      "Mark your calendars for September 7, 2025. Witness the spectacular total lunar eclipse visible across Asia, Europe, Africa, and Australia with viewing times, visibility notes, and photography tips.",
    category: "Astronomy",
    readTime: "10 min read",
    publishDate: "2025-09-02",
    image: "total-lunar-eclipse-september-2025.jpg",
    featured: true,
  },
  {
    id: "golden-hour-photography-guide",
    title: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques",
    excerpt:
      "Master golden hour photography with practical timing advice, camera settings, and composition ideas for stronger sunrise and sunset images.",
    category: "Photography",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    image: "golden-hour-sunset-photography.png",
    featured: true,
  },
  {
    id: "moon-phases-photography",
    title: "Moon Phase Calendar 2025: Best Times for Night Photography",
    excerpt:
      "Use moon phases to plan Milky Way sessions, moonlit landscapes, and night shoots with a practical lunar calendar for photographers.",
    category: "Astronomy",
    readTime: "6 min read",
    publishDate: "2024-12-12",
    image: "moon-phases-night-sky-photography.png",
    featured: true,
  },
  {
    id: "aurora-prediction-guide",
    title: "How to Predict Aurora Activity for Perfect Northern Lights Photos",
    excerpt:
      "Learn how KP index, solar wind, cloud cover, and timing work together so you can plan better aurora photography sessions.",
    category: "Aurora",
    readTime: "10 min read",
    publishDate: "2024-12-10",
    image: "northern-lights-aurora-borealis-photography.png",
    featured: false,
  },
  {
    id: "weather-patterns-sky-photography",
    title: "Weather Patterns Every Sky Photographer Should Know",
    excerpt:
      "Understand cloud formations, fronts, and atmospheric patterns that create dramatic skies for sunrise, sunset, and storm photography.",
    category: "Weather",
    readTime: "7 min read",
    publishDate: "2024-12-08",
    image: "dramatic-storm-clouds-weather-photography.png",
    featured: false,
  },
  {
    id: "perseid-meteor-shower-2025",
    title: "Perseid Meteor Shower 2025: Complete Photography Guide",
    excerpt:
      "Everything you need to know about peak dates, viewing windows, camera settings, and dark-sky planning for the Perseid meteor shower.",
    category: "Astronomy",
    readTime: "9 min read",
    publishDate: "2024-12-18",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
  },
  {
    id: "partial-lunar-eclipse-september-2025",
    title: "Partial Lunar Eclipse September 7, 2025: Photography Guide",
    excerpt:
      "Plan the September 7, 2025 partial lunar eclipse with eclipse timing, visibility notes, and practical moon photography advice.",
    category: "Astronomy",
    readTime: "8 min read",
    publishDate: "2024-12-20",
    image: "partial-lunar-eclipse-september-2025.png",
    featured: false,
  },
]

export const featuredBlogPosts = blogPosts.filter((post) => post.featured)
export const evergreenBlogPosts = blogPosts.filter((post) =>
  [
    "golden-hour-photography-guide",
    "moon-phases-photography",
    "aurora-prediction-guide",
    "weather-patterns-sky-photography",
  ].includes(post.id),
)
