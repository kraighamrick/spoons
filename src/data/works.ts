/**
 * Work Data Management File
 * 
 * When adding a new work:
 * 1. Add a new object to the array below
 * 2. Enter the required information
 * 3. Use Unsplash URL for thumbnail images
 * 4. Project URL should be the live website URL
 */

export interface Work {
  id: string                    // Unique ID (e.g., '1', '2', '3'...)
  title: string                 // Work title
  category: 'Web Development' | 'E-commerce' | 'Corporate' | 'Portfolio'  // Category
  year: number                  // Production year
  client?: string               // Client name
  duration: string              // Project type (e.g., 'Website', 'Web App', 'Platform')
  thumbnail: string             // Thumbnail image URL
  projectUrl: string            // Project URL
  description: string           // Work description
  credits: {                    // Credit information
    developer: string
    designer?: string
    photographer?: string
    agency?: string
  }
}

export const works: Work[] = [
  {
    id: '1',
    title: 'Linksdao.io',
    category: 'Web Development',
    year: 2022,
    client: 'LinksDAO',
    duration: 'Website',
    thumbnail: 'https://www.linksdao.io/opengraph-image.png?141bc99611faeb22',
    projectUrl: 'https://linksdao.io',
    description: 'A cutting-edge Web3 platform for golf enthusiasts and NFT collectors. Features modern blockchain integration, community-driven governance, and immersive digital experiences that bridge traditional golf culture with decentralized technology.',
    credits: {
      developer: 'Kraig Hamrick',
      designer: 'Web3 Design Studio',
      agency: 'LinksDAO Development Team'
    }
  },
  {
    id: '2',
    title: 'Pebble Beach Golf Club',
    category: 'Web Development',
    year: 2024,
    client: 'Pebble Beach Resorts',
    duration: 'Website',
    thumbnail: 'https://images.ctfassets.net/56u5qdsjym8c/6r21Rq3lVV057ySsVC2rjb/465257c0a91d9384c1b4bc4ca2779387/Pebble_Beach_Difficult_Courses_4x5.jpg',
    projectUrl: 'https://example.com/pebble-beach',
    description: 'A premium golf course website featuring stunning aerial photography, interactive course maps, and seamless booking integration. Designed to capture the elegance and prestige of one of America\'s most iconic golf destinations.',
    credits: {
      developer: 'Kraig Hamrick',
      photographer: 'Aerial Photography Team',
      agency: 'Digital Golf Solutions'
    }
  },
  {
    id: '3',
    title: 'Augusta National Experience',
    category: 'Web Development',
    year: 2024,
    client: 'Augusta National Golf Club',
    duration: 'Website',
    thumbnail: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDlhaWdkc2JocnJ3ODh4MWl6dDJkeXo2amY0M3Y4ajEyM3FzdmNtNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3rMFbbrDNXztHKbGPR/giphy.gif',
    projectUrl: 'https://example.com/augusta',
    description: 'An immersive digital experience showcasing the Masters Tournament grounds. Features high-definition course photography, historical content, and interactive virtual tours that bring the magic of Augusta National to life.',
    credits: {
      developer: 'Kraig Hamrick',
      agency: 'Golf Digital Media'
    }
  },
  {
    id: '4',
    title: 'St. Andrews Links',
    category: 'Web Development',
    year: 2023,
    client: 'St. Andrews Links Trust',
    duration: 'Website',
    thumbnail: 'https://images.unsplash.com/photo-1687291133565-767706032bed?q=80&w=800&h=600&fit=crop',
    projectUrl: 'https://example.com/st-andrews',
    description: 'A heritage-focused website for the Home of Golf. Combines traditional Scottish aesthetics with modern functionality, featuring course information, booking systems, and rich historical content about golf\'s birthplace.',
    credits: {
      developer: 'Kraig Hamrick',
      photographer: 'Scottish Heritage Media'
    }
  },
  {
    id: '5',
    title: 'Pinehurst Resort',
    category: 'Web Development',
    year: 2023,
    client: 'Pinehurst Resort & Country Club',
    duration: 'Website',
    thumbnail: 'https://i.imgur.com/3bXiQ9a.jpeg',
    projectUrl: 'https://example.com/pinehurst',
    description: 'A comprehensive resort website showcasing nine championship golf courses. Features elegant design, detailed course information, accommodation options, and seamless reservation systems for the ultimate golf destination.',
    credits: {
      developer: 'Kraig Hamrick',
      photographer: 'Resort Photography Studio'
    }
  },
  {
    id: '6',
    title: 'Fairway Atlas',
    category: 'Web Development',
    year: 2024,
    client: 'Golf Community',
    duration: 'Platform',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&fit=crop',
    projectUrl: 'https://preview-real-estate-home-page-kzmjztzq5q0bqbi1ieem.vusercontent.net/',
    description: 'A comprehensive golf course discovery and mapping platform. Features interactive course directories, detailed course information, user reviews, and advanced search functionality for golf enthusiasts worldwide.',
    credits: {
      developer: 'Kraig Hamrick',
      designer: 'Kraig Hamrick'
    }
  },
  {
    id: '7',
    title: 'TPC Sawgrass',
    category: 'Web Development',
    year: 2022,
    client: 'TPC Network',
    duration: 'Website',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1712767020985-a7f5a5e6581c?q=80&w=800&h=600&fit=crop',
    projectUrl: 'https://example.com/tpc-sawgrass',
    description: 'A dynamic website for the iconic TPC Sawgrass, home of THE PLAYERS Championship. Features interactive course tours, tournament information, and premium membership details with sophisticated user experience design.',
    credits: {
      director: 'Kraig Hamrick',
      editor: 'Kraig Hamrick'
    }
  }

  /*
  // To add new web development projects, use the following template:
  
  {
    id: '8',                     // Next number
    title: 'Project Name',       // Project title
    category: 'Web Development', // 'Web Development', 'E-commerce', 'Corporate', or 'Portfolio'
    year: 2024,                  // Year
    client: 'Client Name',       // Client name
    duration: 'Website',         // Project type (Website, Web App, Platform, etc.)
    thumbnail: 'https://images.unsplash.com/photo-xxxxxxxxx',  // Project-related Unsplash image
    projectUrl: 'https://example.com/project-url',             // Live project URL
    description: 'Description of the web development project and its features.',
    credits: {
      developer: 'Kraig Hamrick',
      designer: 'Design Team (optional)',
      photographer: 'Photography Team (optional)',
      agency: 'Agency Name (optional)'
    }
  }
  */
]

/**
 * Function to return works sorted by year (newest first)
 */
export const getWorksSortedByYear = () => {
  return [...works].sort((a, b) => b.year - a.year)
}

/**
 * Function to get works by category
 */
export const getWorksByCategory = (category: Work['category']) => {
  return works.filter(work => work.category === category)
}