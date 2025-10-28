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


// src/landingData.js/landingPagesData.js
export const landingPagesData = [
  // 1) E-Commerce Landing
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
    theme: { bg: "var(--color-bg)", primary: "var(--color-primary)", text: "var(--color-text)" },
    logo: "/assets/logos/modern1-logo.png",
    nav: [
      { name: "Product", route: "/product" },
      { name: "Solutions", route: "/solutions" },
      { name: "Resources", route: "/resources" },
      { name: "Pricing", route: "/pricing" }
    ],
    sections: [
      {
        type: "hero",
        layout: "hero-chat",
        data: {
          type: "chat",
          title: "Verified emails. Accurate Phone Numbers",
          subtitle: "The first prospecting tool that pulls live data in real-time.",
          buttons: [{ text: "Try for free", type: "primary" }, { text: "Book demo", type: "secondary" }],
          chatMessages: [
            { from: "bot", text: "Hi—what can I help you with today?" },
            { from: "user", text: "Show me leads for Product Managers in India." }
          ],
          contactCard: { name: "Emilia Smith", location: "California, USA", avatar: "https://via.placeholder.com/40", phone: "880-2999-872", email: "emilia@example.com" },
          tagLine: "Extract customers with AI"
        }
      },
      {
        type: "logos",
        layout: "scroll",
        data: [
          { src: "https://via.placeholder.com/80x40?text=Rakuten", alt: "Rakuten" },
          { src: "https://via.placeholder.com/80x40?text=NCR", alt: "NCR" },
          { src: "https://via.placeholder.com/80x40?text=Disney", alt: "Disney" }
        ]
      },
      {
        type: "pricing",
        layout: "table",
        data: {
          plans: [
            { name: "Starter", price: "₹0", bullets: ["Up to 100 credits", "Community support"] },
            { name: "Pro", price: "₹1999/mo", bullets: ["10k credits", "Email & Chat support"] },
            { name: "Enterprise", price: "Custom", bullets: ["Dedicated account", "SLA & Integrations"] }
          ]
        }
      },
      { type: "footer", layout: "default" }
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
  }
];
