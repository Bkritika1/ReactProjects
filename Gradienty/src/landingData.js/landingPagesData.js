// // src/data/landingPagesData.js
// import EcommerceLanding from "../Page/EcommerceLanding";
// import ModernLanding from "../Page/ModernLanding";
// import ModeranLanding1 from "../Page/ModernLanding1";
// import Modern from "../Page/Modern";

// export const landingPagesData = [
//   {
//     id: "ecommerce",
//     name: "E-Commerce Landing",
//     path: "/ecommerce",
//     component: EcommerceLanding,
//   },
//   {
//     id: "moderan",
//     name: "Modern Landing",
//     path: "/moderan",
//     component: ModernLanding,
//   },
//   {
//     id: "moderan1",
//     name: "Modern Landing 1",
//     path: "/moderan1",
//     component: ModeranLanding1,
//   },
//   {
//     id: "moderan2",
//     name: "Modern Landing 2",
//     path: "/moderan2",
//     component: Modern,
//   },
// ];


// export const landingPagesData = [
//   {
//     id: "ecommerce",
//     name: "E-Commerce Landing",
//     layout: "hero-left",
//     theme: { bg: "#fff3f4", primary: "#ff4d6d", text: "#111" },
//     logo: "/assets/logos/ecommerce-logo.png",
//     nav: [
//       { name: "Home", route: "/" },
//       { name: "Shop", route: "/shop" },
//       { name: "Features", route: "/features" },
//       { name: "Contact", route: "/contact" }
//     ],
//     hero: {
//       title: "Shop the Future",
//       subtitle: "Your favorite products just a click away.",
//       image: "/assets/images/ecommerce-hero.png",
//       buttonText: "Shop Now",
//     },
//     features: [
//       { title: "Fast Delivery", desc: "Get your orders within 24 hours" },
//       { title: "Secure Payment", desc: "Trusted by 1M+ customers" },
//       { title: "24/7 Support", desc: "We’re always here for you" },
//     ],
//   },
  

//   {
//     id: "portfolio",
//     name: "Portfolio Landing",
//     layout: "hero-center",
//     theme: { bg: "#f0f4ff", primary: "#4d79ff", text: "#222" },
//     logo: "/assets/logos/portfolio-logo.png",
//     nav: [
//       { name: "Home", route: "/" },
//       { name: "Portfolio", route: "/portfolio" },
//       { name: "About", route: "/about" },
//       { name: "Contact", route: "/contact" }
//     ],
//     hero: {
//       title: "Showcase Your Creativity",
//       subtitle: "Beautiful portfolio templates to impress clients.",
//       image: "/assets/images/portfolio-hero.png",
//       buttonText: "Explore Now",
//     },
//     features: [
//       { title: "Modern Design", desc: "Elegant and minimalistic layouts" },
//       { title: "Customizable", desc: "Easily edit your content anytime" },
//     ],
//   },
//   {
//   id: "modern1",
//   name: "Modern AI Landing",
//   layout: "hero-chat", // new layout type
//   theme: { bg: "#f9f9f9", primary: "#4d79ff", text: "#111" },
//   logo: "/assets/logos/modern1-logo.png",
//   nav: [
//     { name: "Product", route: "/product" },
//     { name: "Solutions", route: "/solutions" },
//     { name: "Resources", route: "/resources" },
//     { name: "Pricing", route: "/pricing" },
//   ],
//   hero: {
//     type: "chat",
//     title: "Verified emails. Accurate Phone Numbers",
//     subtitle: "The first prospecting tool that pulls live data in real-time...",
//     buttons: [
//       { text: "Try Tiro for free", type: "primary" },
//       { text: "Book a demo", type: "secondary" },
//     ],
//     chatMessages: [
//       { from: "bot", text: "Hi, what can I help you with today?" },
//       { from: "user", text: 'Hey Tiro, Can you please extract information "Emilia Smith" Url "linkedin.com/Emilia1"' },
//       { from: "bot", text: "Generating ..." },
//     ],
//     contactCard: {
//       name: "Emilia Smith",
//       location: "California, United States",
//       avatar: "https://via.placeholder.com/40",
//       phone: "880-2999-872",
//       email: "emilia@example.com",
//     },
//     tagLine: "Extract your customers with AI",
//   },
//   footerLogos: [
//     { src: "https://via.placeholder.com/80x40?text=Rakuten", alt: "Rakuten" },
//     { src: "https://via.placeholder.com/80x40?text=NCR", alt: "NCR" },
//     { src: "https://via.placeholder.com/80x40?text=monday.com", alt: "Monday" },
//     { src: "https://via.placeholder.com/80x40?text=Disney", alt: "Disney" },
//     { src: "https://via.placeholder.com/80x40?text=Dropbox", alt: "Dropbox" },
//   ],
// },

// ];


// export const landingPagesData = [
//   // 🛍️ E-Commerce Landing Page
//   {
//     id: "ecommerce",
//     name: "E-Commerce Landing",
//     theme: { bg: "#fff3f4", primary: "#ff4d6d", text: "#111" },
//     logo: "/assets/logos/ecommerce-logo.png",
//     nav: [
//       { name: "Home", route: "/" },
//       { name: "Shop", route: "/shop" },
//       { name: "Features", route: "/features" },
//       { name: "Contact", route: "/contact" }
//     ],
//     sections: [
//       {
//         type: "hero",
//         layout: "hero-left",
//         data: {
//           title: "Shop the Future",
//           subtitle: "Your favorite products just a click away.",
//           image: "/assets/images/ecommerce-hero.png",
//           buttonText: "Shop Now"
//         }
//       },
//       {
//         type: "features",
//         layout: "grid-3",
//         data: [
//           { title: "Fast Delivery", desc: "Get your orders within 24 hours" },
//           { title: "Secure Payment", desc: "Trusted by 1M+ customers" },
//           { title: "24/7 Support", desc: "We’re always here for you" }
//         ]
//       },
//       {
//         type: "cta",
//         layout: "center",
//         data: {
//           title: "Ready to start shopping?",
//           buttonText: "Explore Products"
//         }
//       },
//       { type: "footer", layout: "default" }
//     ]
//   },

//   // 🎨 Portfolio Landing
//   {
//     id: "portfolio",
//     name: "Portfolio Landing",
//     theme: { bg: "#f0f4ff", primary: "#4d79ff", text: "#222" },
//     logo: "/assets/logos/portfolio-logo.png",
//     nav: [
//       { name: "Home", route: "/" },
//       { name: "Portfolio", route: "/portfolio" },
//       { name: "About", route: "/about" },
//       { name: "Contact", route: "/contact" }
//     ],
//     sections: [
//       {
//         type: "hero",
//         layout: "hero-center",
//         data: {
//           title: "Showcase Your Creativity",
//           subtitle: "Beautiful portfolio templates to impress clients.",
//           image: "/assets/images/portfolio-hero.png",
//           buttonText: "Explore Now"
//         }
//       },
//       {
//         type: "features",
//         layout: "cards",
//         data: [
//           { title: "Modern Design", desc: "Elegant and minimalistic layouts" },
//           { title: "Customizable", desc: "Easily edit your content anytime" }
//         ]
//       },
//       {
//         type: "cta",
//         layout: "gradient",
//         data: {
//           title: "Build Your Personal Brand Today",
//           buttonText: "Get Started"
//         }
//       },
//       { type: "footer", layout: "default" }
//     ]
//   },

//   // 🤖 Modern AI Landing
//   {
//     id: "modern1",
//     name: "Modern AI Landing",
//     theme: { bg: "#f9f9f9", primary: "#4d79ff", text: "#111" },
//     logo: "/assets/logos/modern1-logo.png",
//     nav: [
//       { name: "Product", route: "/product" },
//       { name: "Solutions", route: "/solutions" },
//       { name: "Resources", route: "/resources" },
//       { name: "Pricing", route: "/pricing" }
//     ],
//     sections: [
//       {
//         type: "hero",
//         layout: "hero-chat",
//         data: {
//           type: "chat",
//           title: "Verified emails. Accurate Phone Numbers",
//           subtitle: "The first prospecting tool that pulls live data in real-time...",
//           buttons: [
//             { text: "Try Tiro for free", type: "primary" },
//             { text: "Book a demo", type: "secondary" }
//           ],
//           chatMessages: [
//             { from: "bot", text: "Hi, what can I help you with today?" },
//             {
//               from: "user",
//               text: 'Hey Tiro, Can you please extract info for "Emilia Smith" (linkedin.com/Emilia1)'
//             },
//             { from: "bot", text: "Generating ..." }
//           ],
//           contactCard: {
//             name: "Emilia Smith",
//             location: "California, United States",
//             avatar: "https://via.placeholder.com/40",
//             phone: "880-2999-872",
//             email: "emilia@example.com"
//           },
//           tagLine: "Extract your customers with AI"
//         }
//       },
//       {
//         type: "logos",
//         layout: "scroll",
//         data: [
//           { src: "https://via.placeholder.com/80x40?text=Rakuten", alt: "Rakuten" },
//           { src: "https://via.placeholder.com/80x40?text=NCR", alt: "NCR" },
//           { src: "https://via.placeholder.com/80x40?text=monday.com", alt: "Monday" },
//           { src: "https://via.placeholder.com/80x40?text=Disney", alt: "Disney" },
//           { src: "https://via.placeholder.com/80x40?text=Dropbox", alt: "Dropbox" }
//         ]
//       },
//       {
//         type: "cta",
//         layout: "center",
//         data: {
//           title: "Start Prospecting Smarter Today",
//           buttonText: "Get Started Free"
//         }
//       },
//       { type: "footer", layout: "default" }
//     ]
//   }
// ];


export const landingPagesData = [
  {
    id: "ecommerce",
    name: "E-Commerce Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/ecommerce-logo.png",
    nav: [
      { name: "Home", route: "/" },
      { name: "Shop", route: "/shop" },
      { name: "Features", route: "/features" },
      { name: "Contact", route: "/contact" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: {
          title: "Shop the Future",
          subtitle: "Your favorite products delivered fast and safely.",
          image: "/assets/images/ecommerce-hero.png",
          buttonText: "Shop Now",
          badge: "Free shipping over ₹999"
        }
      },
      {
        type: "features",
        layout: "grid-3",
        data: [
          { title: "Fast Delivery", desc: "Get orders within 24 hours" },
          { title: "Secure Payment", desc: "Encrypted & trusted." },
          { title: "24/7 Support", desc: "Always here to help." }
        ]
      },
      {
        type: "stats",
        layout: "default",
        data: { items: [{ label: "Orders Delivered", value: "1M+" }, { label: "Happy Customers", value: "500k+" }, { label: "Cities Served", value: "120+" }] }
      },
      {
        type: "cta",
        layout: "center",
        data: { title: "Ready to start shopping?", buttonText: "Explore Products" }
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 2) Portfolio Landing
  {
    id: "portfolio",
    name: "Portfolio Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/portfolio-logo.png",
    nav: [
      { name: "Home", route: "/" },
      { name: "Portfolio", route: "/portfolio" },
      { name: "About", route: "/about" },
      { name: "Contact", route: "/contact" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-center",
        data: {
          title: "Showcase Your Creativity",
          subtitle: "Beautiful, minimal portfolio templates that get you hired.",
          image: "/assets/images/portfolio-hero.png",
          buttonText: "View Templates"
        }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Modern Design", desc: "Elegant and minimalistic layouts" },
          { title: "Customizable", desc: "Easily edit your content" },
          { title: "Responsive", desc: "Looks great on every device" }
        ]
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          { name: "Maya R.", role: "UI Designer", quote: "Designed my dream portfolio in minutes.", avatar: "https://via.placeholder.com/48" },
          { name: "Arjun S.", role: "Freelancer", quote: "Clients loved the clean look.", avatar: "https://via.placeholder.com/48" }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 3) Modern AI Landing
{
  id: "modern1",
  name: "Modern AI Landing",
  theme: { 
    bg: "var(--color-bg)", 
    primary: "var(--color-primary)", 
    text: "var(--color-text)" 
  },
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtkaFc9zaGeJVxG0WuJXycSZd5fGknK8W-w&s",
  nav: [
    { name: "Features", route: "/features" },
    { name: "Solutions", route: "/solutions" },
    { name: "Resources", route: "/resources" },
    { name: "Pricing", route: "/pricing" }
  ],
  sections: [
    {
      type: "hero",
      layout: "hero-chat",
      data: {
       title: "Your Complete Rewarding Ad Network",
    subtitle:
      "Increase revenue, boost engagement, and maximize conversions with our reward-based ad solution.",
    button1: "Monetize",
    button2: "Advertise",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcdA_i5Oo9aVAQLRwI08sbNdd4xvDxqqWag&s" ,
        chatMessages: [
          { from: "bot", text: "👋 Hi there! Looking for high-intent leads today?" },
          { from: "user", text: "Yes, find B2B decision-makers in the US." },
          { from: "bot", text: "Got it. Fetching verified emails & phone numbers..." }
        ],
        contactCard: { 
          name: "Sophia Turner", 
          location: "New York, USA", 
          avatar: "https://randomuser.me/api/portraits/women/44.jpg", 
          phone: "+1-202-334-9982", 
          email: "sophia.ai@leadgen.com" 
        },
        tagLine: "Smart AI Prospecting Made Effortless ⚡"
      }
    },

    {
  type: "stats",
  layout: "default",
  data: {
    items: [
      { label: "Total Companies", value: "657,786+", icon: "FaBuilding" },
      { label: "Active Users", value: "987,890+", icon: "FaUsers" },
      { label: "Happy Clients", value: "997,098+", icon: "FaStar" }
    ]
  }
},
{
  type: "info",
  layout: "default",
  data: {
    subtitle: "Learn More About",
    highlight: "Lootably",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit anim id est laborum.",
    buttonText: "Learn More",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbttKhfvYx6G5-0KSd1skU4fwbEh9Ydlo-g&s"
  }
},
{
  type: "features",
  layout: "grid-3",
  data: {
    title: "Why Work With Us?",
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate",
    items: [
      {
        icon: "fa-solid fa-plug",
        title: "Easy Integration",
        desc: "Easily integrate with your existing workflow in minutes.",
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "High eCPMs",
        desc: "Maximize your revenue with top-performing campaigns.",
      },
      {
        icon: "fa-solid fa-gift",
        title: "Exclusive Offers",
        desc: "Access premium offers and deals curated just for you.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Fraud Protection",
        desc: "Keep your data and transactions secure with advanced protection.",
      },
      {
        icon: "fa-solid fa-wallet",
        title: "Monthly Payments",
        desc: "Get paid on time, every month, without any hassle.",
      },
      {
        icon: "fa-solid fa-user-tie",
        title: "Dedicated Account Manager",
        desc: "Get personalized support from your own account manager.",
      },
    ],
    buttonText: "Browse All Categories",
  },
},
{
  type: "features",
  layout: "showcase",
  data: [
    {
      title: "Offerwall",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "View Documentation →",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnn9BWnMx4Qpx1XlHYdOCFDhZZ3vYJyik6Q&s"
    },
    {
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnn9BWnMx4Qpx1XlHYdOCFDhZZ3vYJyik6Q&s",
      title: "Loot.tv",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "Visit Loot.tv →",
     
    }
  ]
},





   
   
    {
      type: "footer",
      layout: "default",
      data: {
        columns: [
          {
            title: "Product",
            links: ["Features", "Integrations", "Updates"]
          },
          {
            title: "Company",
            links: ["About Us", "Careers", "Contact"]
          },
          {
            title: "Resources",
            links: ["Blog", "Help Center", "Developers"]
          }
        ],
        social: [
          { icon: "fa-twitter", url: "https://twitter.com" },
          { icon: "fa-linkedin", url: "https://linkedin.com" },
          { icon: "fa-github", url: "https://github.com" }
        ],
        copyright: "© 2025 ModernAI. All rights reserved."
      }
    }
  ]
},


  // 4) SaaS Product Landing
  {
    id: "saas",
    name: "SaaS Product",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/saas-logo.png",
    nav: [
      { name: "Overview", route: "/overview" },
      { name: "Features", route: "/features" },
      { name: "Security", route: "/security" },
      { name: "Pricing", route: "/pricing" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: {
          title: "Run your business, effortlessly",
          subtitle: "All-in-one platform to manage teams, billing and analytics.",
          image: "/assets/images/saas-hero.png",
          buttonText: "Get Started"
        }
      },
      {
        type: "stats",
        layout: "default",
        data: { items: [{ label: "Companies", value: "30k+" }, { label: "Active Users", value: "120k+" }, { label: "Uptime", value: "99.99%" }] }
      },
      {
        type: "features",
        layout: "grid-3",
        data: [
          { title: "Team Management", desc: "Organize people & permissions" },
          { title: "Billing", desc: "Smart invoicing & payments" },
          { title: "Analytics", desc: "Actionable reports" }
        ]
      },
      {
        type: "cta",
        layout: "center",
        data: { title: "Try SaaS free for 14 days", buttonText: "Start Free Trial" }
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 5) Fitness App Landing
  {
    id: "fitness",
    name: "Fitness App",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/fitness-logo.png",
    nav: [
      { name: "Home", route: "/" },
      { name: "Workouts", route: "/workouts" },
      { name: "Plans", route: "/plans" },
      { name: "Community", route: "/community" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-center",
        data: { title: "Get fit with daily plans", subtitle: "Workout plans tailored to you.", image: "/assets/images/fitness-hero.png", buttonText: "Start Free" }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Personalized Plans", desc: "Based on goals & fitness level" },
          { title: "Trainer Support", desc: "Chat with pro trainers" },
          { title: "Nutrition Guides", desc: "Meal plans & recipes" }
        ]
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          { name: "Ravi K.", role: "Student", quote: "I lost 8kg in 2 months.", avatar: "https://via.placeholder.com/48" },
          { name: "Simran P.", role: "Designer", quote: "Plans fit my schedule perfectly.", avatar: "https://via.placeholder.com/48" }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 6) Travel Agency Landing
  {
    id: "travel",
    name: "Travel Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/travel-logo.png",
    nav: [
      { name: "Destinations", route: "/destinations" },
      { name: "Tours", route: "/tours" },
      { name: "Blog", route: "/blog" },
      { name: "Contact", route: "/contact" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: { title: "Explore the world", subtitle: "Handcrafted trips & local guides.", image: "/assets/images/travel-hero.png", buttonText: "Plan My Trip" }
      },
      {
        type: "features",
        layout: "grid-3",
        data: [
          { title: "Local Guides", desc: "Insider experiences" },
          { title: "Custom Tours", desc: "Built around you" },
          { title: "Easy Bookings", desc: "Hassle-free travel" }
        ]
      },
      {
        type: "logos",
        layout: "scroll",
        data: [
          { src: "https://via.placeholder.com/80x40?text=AirlineA", alt: "AirlineA" },
          { src: "https://via.placeholder.com/80x40?text=HotelB", alt: "HotelB" }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 7) Education / Course Landing
  {
    id: "education",
    name: "Education Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/edu-logo.png",
    nav: [
      { name: "Courses", route: "/courses" },
      { name: "Instructors", route: "/instructors" },
      { name: "Pricing", route: "/pricing" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-center",
        data: { title: "Learn in-demand skills", subtitle: "Courses designed by industry experts.", image: "/assets/images/edu-hero.png", buttonText: "Browse Courses" }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Industry Experts", desc: "Learn from professionals" },
          { title: "Certification", desc: "Get recognized credentials" }
        ]
      },
      {
        type: "pricing",
        layout: "table",
        data: {
          plans: [
            { name: "Basic", price: "₹499", bullets: ["Access to 10 courses"] },
            { name: "Pro", price: "₹1499", bullets: ["All courses + certificate"] }
          ]
        }
      },
      {
        type: "faq",
        layout: "default",
        data: [
          { q: "Do I get lifetime access?", a: "Yes — all paid courses include lifetime access." },
          { q: "Are there refunds?", a: "30-day money-back guarantee." }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 8) Restaurant Landing
  {
    id: "restaurant",
    name: "Restaurant Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/restaurant-logo.png",
    nav: [
      { name: "Menu", route: "/menu" },
      { name: "Reservations", route: "/reservations" },
      { name: "Catering", route: "/catering" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: { title: "Taste the Difference", subtitle: "Seasonal ingredients & chef’s specials.", image: "/assets/images/restaurant-hero.png", buttonText: "Book a Table" }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Farm Fresh", desc: "Local produce" },
          { title: "Chef's Choice", desc: "Signature dishes" },
          { title: "Private Dining", desc: "Book for events" }
        ]
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          { name: "Gaurav", role: "Food Critic", quote: "A remarkable dining experience.", avatar: "https://via.placeholder.com/48" }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 9) Crypto / Fintech Landing
  {
    id: "crypto",
    name: "Crypto Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/crypto-logo.png",
    nav: [
      { name: "Markets", route: "/markets" },
      { name: "Wallet", route: "/wallet" },
      { name: "Support", route: "/support" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-center",
        data: { title: "Secure. Fast. Global.", subtitle: "Buy, sell and store crypto confidently.", image: "/assets/images/crypto-hero.png", buttonText: "Create Wallet" }
      },
      {
        type: "stats",
        layout: "default",
        data: { items: [{ label: "Traders", value: "1M+" }, { label: "24h Volume", value: "$2B+" }, { label: "Countries", value: "100+" }] }
      },
      {
        type: "cta",
        layout: "center",
        data: { title: "Start trading crypto today", buttonText: "Get Started" }
      },
      {
        type: "faq",
        layout: "default",
        data: [
          { q: "Is crypto safe?", a: "We follow strict security best practices and cold storage options." },
          { q: "How to deposit?", a: "Deposit via bank transfer or card." }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 10) Real Estate Landing
  {
    id: "realestate",
    name: "Real Estate Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/realestate-logo.png",
    nav: [
      { name: "Buy", route: "/buy" },
      { name: "Rent", route: "/rent" },
      { name: "Sell", route: "/sell" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: { title: "Find your next home", subtitle: "Verified listings & local agents near you.", image: "/assets/images/realestate-hero.png", buttonText: "Search Listings" }
      },
      {
        type: "features",
        layout: "grid-3",
        data: [
          { title: "Verified Listings", desc: "No spam or fake posts" },
          { title: "Local Agents", desc: "Trusted professionals" },
          { title: "Mortgage Help", desc: "Easy financing options" }
        ]
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          { name: "Neha", role: "Homeowner", quote: "Found my dream home quickly.", avatar: "https://via.placeholder.com/48" }
        ]
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 11) NGO / Cause Landing
  {
    id: "ngo",
    name: "NGO Landing",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/ngo-logo.png",
    nav: [
      { name: "About", route: "/about" },
      { name: "Programs", route: "/programs" },
      { name: "Donate", route: "/donate" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-center",
        data: { title: "Make a real impact", subtitle: "Support education & healthcare initiatives.", image: "/assets/images/ngo-hero.png", buttonText: "Donate Now" }
      },
      {
        type: "stats",
        layout: "default",
        data: { items: [{ label: "Lives Changed", value: "50k+" }, { label: "Volunteers", value: "2k+" }] }
      },
      {
        type: "cta",
        layout: "center",
        data: { title: "Partner with us to create change", buttonText: "Become a Partner" }
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 12) Creative Agency Landing
  {
    id: "agency",
    name: "Creative Agency",
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/agency-logo.png",
    nav: [
      { name: "Work", route: "/work" },
      { name: "Services", route: "/services" },
      { name: "Contact", route: "/contact" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-left",
        data: { title: "Design that drives results", subtitle: "Brand, product & growth design for modern teams.", image: "/assets/images/agency-hero.png", buttonText: "See Our Work" }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Brand Strategy", desc: "Positioning & identity" },
          { title: "Product Design", desc: "UX & UI that convert" },
          { title: "Growth Marketing", desc: "Creative campaigns" }
        ]
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          { name: "Rhea P.", role: "CMO", quote: "Their design doubled our conversions.", avatar: "https://via.placeholder.com/48" }
        ]
      },
      {
        type: "cta",
        layout: "center",
        data: { title: "Let’s build something together", buttonText: "Get in Touch" }
      },
      { type: "footer", layout: "default" }
    ]
  },
  {
    id: "modern-aii",
    name: "Modern AI Landing",
    theme: {
      bg: "#f8f9fc",
      primary: "#3b82f6",
      text: "#111827",
    },
    logo: "data:image/png;base64,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",
    nav: [
      { name: "Product", route: "/product" },
      { name: "Solutions", route: "/solutions" },
      { name: "Resources", route: "/resources" },
      { name: "Pricing", route: "/pricing" },
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-modern",
        data: {
          title: "Verified Emails. Accurate Phone Numbers.",
          subtitle: "The first prospecting tool that pulls live data in real-time.",
          tagLine: "Extract customers with AI",
          buttons: [
            { text: "Try for free", type: "primary" },
            { text: "Book demo", type: "secondary" },
          ],
          chatMessages: [
            { from: "bot", text: "Hi—what can I help you with today?" },
            { from: "user", text: "Show me leads for Product Managers in India." },
          ],
          contactCard: {
            name: "Emilia Smith",
            location: "California, USA",
            avatar: "https://via.placeholder.com/40",
            phone: "880-2999-872",
            email: "emilia@example.com",
          },
          image: "/assets/images/hero-ai.png",
        },
      },
      {
        type: "logos",
        layout: "scroll",
        data: [
          { src: "https://via.placeholder.com/80x40?text=Rakuten", alt: "Rakuten" },
          { src: "https://via.placeholder.com/80x40?text=NCR", alt: "NCR" },
          { src: "https://via.placeholder.com/80x40?text=Disney", alt: "Disney" },
          { src: "https://via.placeholder.com/80x40?text=Netflix", alt: "Netflix" },
          { src: "https://via.placeholder.com/80x40?text=Figma", alt: "Figma" },
        ],
      },
      {
        type: "features",
        layout: "cards",
        data: [
          {
            icon: "💬",
            title: "AI Chat Prospecting",
            desc: "Find and verify prospects instantly using conversational AI.",
          },
          {
            icon: "⚡",
            title: "Real-time Data",
            desc: "Our system pulls live verified information in seconds.",
          },
          {
            icon: "🔒",
            title: "Secure & Private",
            desc: "We protect your data with enterprise-grade security.",
          },
        ],
      },
      {
        type: "pricing",
        layout: "table",
        data: {
          plans: [
            {
              name: "Starter",
              price: "₹0",
              bullets: ["Up to 100 credits", "Community support"],
              button: "Start Free",
            },
            {
              name: "Pro",
              price: "₹1999/mo",
              bullets: ["10k credits", "Email & Chat support"],
              button: "Upgrade",
            },
            {
              name: "Enterprise",
              price: "Custom",
              bullets: ["Dedicated account", "SLA & Integrations"],
              button: "Contact Us",
            },
          ],
        },
      },
      {
        type: "testimonials",
        layout: "default",
        data: [
          {
            name: "James Carter",
            role: "Product Manager at Syncify",
            quote:
              "This AI tool changed the way we find leads. Verified data in seconds — absolutely amazing!",
            avatar: "https://via.placeholder.com/60",
          },
          {
            name: "Ava Brown",
            role: "Growth Lead at Nova",
            quote:
              "We cut down 70% of manual search time. The accuracy is unbelievable!",
            avatar: "https://via.placeholder.com/60",
          },
        ],
      },
      {
        type: "cta",
        layout: "center",
        data: {
          title: "Ready to extract customers with AI?",
          subtitle: "Start for free — no credit card required.",
          buttonText: "Get Started",
        },
      },
      {
        type: "footer",
        layout: "default",
        data: {
          links: [
            { name: "Privacy Policy", route: "/privacy" },
            { name: "Terms of Service", route: "/terms" },
            { name: "Contact", route: "/contact" },
          ],
          social: [
            { name: "Twitter", icon: "fa-brands fa-twitter" },
            { name: "LinkedIn", icon: "fa-brands fa-linkedin" },
          ],
        },
      },
    ],
  },
   {
    id: "color-mesh-premium",
    name: "Color Mesh Premium Landing",
    theme: {
      bgGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      text: "#1a1a1a",
      button: {
        bg: "#ff4d6d",
        hover: "#ff758f",
        text: "#ffffff"
      }
    },
    sections: [
      {
        type: "hero",
        layout: "blobGradient",
        data: {
          title: "Design Beyond Colors",
          subtitle: "Create stunning, mesh-gradient landing pages effortlessly.",
          buttonText: "Get Started",
          image:
            "https://cdn.pixabay.com/photo/2016/03/09/09/17/woman-1245817_1280.jpg"
        }
      },
      {
        type: "features",
        layout: "gradientCards",
        data: {
          heading: "Why Choose Color Mesh?",
          features: [
            {
              title: "🎨 Gradient Power",
              desc: "Beautiful color meshes that feel alive."
            },
            {
              title: "⚡ Fast Performance",
              desc: "Optimized for speed and smooth animations."
            },
            {
              title: "🧩 Modular Design",
              desc: "Completely data-driven and reusable layouts."
            }
          ]
        }
      }
    ]
  },
  
  
];
