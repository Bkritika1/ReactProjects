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
   
    sections: [
  {
  type: "header",
  layout: "default",
  data: {
    logo: "Wagory",
    nav: ["Shop", "Food", "Journal", "Contact"],
    buttons: [
      { text: "Login", type: "secondary" },
      { text: "Shop now ➜", type: "primary" }
    ]
  }
},
  {
      type: "hero",
      layout: "hero-section",
      data: {
  tagline: "🐾 All in one place",
  title: "Ensure the Best Bite Every Time",
  description:
    "Give your pets the nutrition they deserve — premium ingredients, crafted by experts, delivered fresh to your door.",
  buttonText: "Browse products",
  stats: {
    count: "300+",
    label: "Food Items",
  },
  products: [
    {
      id: 1,
      name: "Encore Cat Food",
      price: "$19",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Royal Canin Dog Food",
      price: "$29",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "North Paw",
      price: "$60",
      img: "data:image/jpeg;base64,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",
    },
  ],
  petsImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjLKgzAaXXKfnh1QYR8PPLJnYW3nKTlloHw&s", // Dog & cat combo
}
    },
   {
  type: "features",
  layout: "below-hero",
  data: {
    title: "We Help To Keep Your Pet Safe",
    features: [
      { title: "We Bring the Best Food!", image: "/images/pet-food.jpg" },
      { title: "Healthy Pets, Always.", image: "/images/pet-cat.jpg" },
      { title: "Best Toys for your Pets", image: "/images/pet-dog.jpg" },
      { title: "Their Cozy Corner", image: "/images/pet-bed.jpg" }
    ],
    categories: [
      { name: "Food", icon: "dogBowl" },
      { name: "Toys", icon: "bone" },
      { name: "Beds", icon: "house" },
      { name: "Wellness", icon: "potion" },
      { name: "Collars", icon: "dog" },
      { name: "Bowls", icon: "cat" }
    ]
  }
},
{
type:'features',
layout:'hero-below',
data:{
   
  tagline: "Products",
  title: "Top Picks for Happy Healthy Pets",
  products: [
    {
      name: "1st Choice Sterilized Cat Kibble",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-food.png",
    },
    {
      name: "Perfect Fit Junior Dog Formula",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/dog-food.png",
    },
    {
      name: "Royal Canin Digest Sensitive Wet",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-wet-food.png",
    },
    {
      name: "Cozy Paws Plush Pet Bed",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/pet-bed.png",
    },
  ],
}
},
      {
        type: "stats",
        layout: "default",
        data: { items: [{ label: "Companies", value: "30k+" }, { label: "Active Users", value: "120k+" }, { label: "Uptime", value: "99.99%" }] }
      },
      {
type:'features',
layout:'hero-below',
data:{
   
  tagline: "Best Selling",
  title: "Our Popular Picked",
  products: [
    {
      name: "1st Choice Sterilized Cat Kibble",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-food.png",
    },
    {
      name: "Perfect Fit Junior Dog Formula",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/dog-food.png",
    },
    {
      name: "Royal Canin Digest Sensitive Wet",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-wet-food.png",
    },
    {
      name: "Cozy Paws Plush Pet Bed",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/pet-bed.png",
    },
     {
      name: "1st Choice Sterilized Cat Kibble",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-food.png",
    },
    {
      name: "Perfect Fit Junior Dog Formula",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/dog-food.png",
    },
     {
      name: "Royal Canin Digest Sensitive Wet",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-wet-food.png",
    },
    {
      name: "Cozy Paws Plush Pet Bed",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/pet-bed.png",
    },
     {
      name: "1st Choice Sterilized Cat Kibble",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/cat-food.png",
    },
    {
      name: "Perfect Fit Junior Dog Formula",
      price: 26,
      oldPrice: 35,
      rating: 4.9,
      image: "/images/dog-food.png",
    },
  ],
}
},
      // {
      //   type: "features",
      //   layout: "grid-3",
      //   data: [
      //     { title: "Team Management", desc: "Organize people & permissions" },
      //     { title: "Billing", desc: "Smart invoicing & payments" },
      //     { title: "Analytics", desc: "Actionable reports" }
      //   ]
      // },
      {
        type: "cta",
        layout: "center",
        data: { title: "Try SaaS free for 14 days", buttonText: "Start Free Trial" }
      },
      {
  type: "contact",
  layout: "contact-box",
  data: {
    title: "Get Tail-Wagging Updates in Your Inbox! 🐾",
    description:
      "Join our pack for exclusive offers, product launches, and pet care tips — no spam, just the good stuff.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    bgColor: "#c9e1ff"
  }
},
     {
  type: "footer",
  layout: "pet-footer",
  data: {
    logo: "Wagory",
    description:
      "We’re on a mission to make mealtime the healthiest and happiest part of your pet’s day — with real ingredients, thoughtful care, and a whole lot of love.",
    columns: [
      {
        title: "Shop",
        links: ["Dog Products", "Cat Products", "Best Sellers", "New Arrivals", "Gift Cards"]
      },
      {
        title: "Food",
        links: ["Dry Food", "Wet Food", "Treats & Snacks", "Special Diets", "Puppy & Kitten Meals"]
      },
      {
        title: "Journal",
        links: ["Pet Care Tips", "Nutrition Advice", "Training Guides", "Behind the Brand", "Vet Q&A"]
      },
      {
        title: "Contact",
        links: ["Customer Support", "Track My Order", "Shipping & Returns", "Wholesale Inquiry", "FAQ"]
      }
    ],
   socials: [
  { icon: "FaFacebookF", link: "#" },
  { icon: "FaTwitter", link: "#" },
  { icon: "FaInstagram", link: "#" },
  { icon: "FaLinkedinIn", link: "#" }
]
  }
},
    ]
  },


{
  id: "shopify",
  name: "Shopify Landing",
  theme: { bg: "#ffffff", primary: "#000000", text: "#111111" },
  sections: [
    {
      type: "header",
      layout: "shopify-style",
      data: {
        logo: "/images/shopify-logo.png",
        navLinks: [
          { label: "Products", dropdown: true },
          { label: "Customer Stories" },
          { label: "Resources" },
          { label: "Pricing" }
        ],
        buttons: [
          { text: "Book a Demo", primary: false },
          { text: "Get Started", primary: true }
        ]
      }
    },
    {
      type: "hero",
      layout: "shopify-style",
      data: {
        tagline: "PRODUCTS / LIVE STREAM SHOPPING",
        title: "Sell Live Products Globally Everywhere At One",
        description:
          "Enhance your shopping events by going live, boosting conversions, and fostering vibrant communities.",
        ctaButtons: [
          { text: "Get Started — For Free!", primary: true },
          { text: "Book A Demo", primary: false }
        ],
        stats: "↑ 32% Uplift Conversions",
        heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0dTREQ1UEfseAxK-UnMGzH3-6quumcnQKA&s"
      }
    },
    {
  type: "features",
  layout: "shopify-style",
  data: [
    {
      step: "STEP 2",
      title: "AI-Driven Livestream Chat",
      description:
        "Loaded with an array of captivating widgets designed to enhance immersive shopping videos on your store, including video carousels.",
      image: "/images/feature-yellow.png",
      bgColor: "#FFF480", // Yellow
      textColor: "#111111"
    },
    {
      step: "STEP 3",
      title: "Go Live Everywhere",
      description:
        "Loaded with an array of captivating widgets designed to showcase interactive shopping videos on store fronts, including video carousels, Instagram-style entries, pop-ups, video grids, and more.",
      image: "/images/feature-purple.png",
      bgColor: "#CDBAFF", // Purple
      textColor: "#111111"
    }
  ]
},
{
  type: "achievementStats",
  layout: "default",
  data: {
    badgeText: "Product Stats",
    title: "Get Achieving Superior Industry Marks",
    subtitle: "ReelUp ranks No.1 app on the Shopify app store",
    stats: [
      { value: "392%", label: "Increased user engagement", bg: "#fce7f3", icon: "📈" },
      { value: "11.17 mins", label: "Videos watch time by user", bg: "#fff7c2", icon: "🎥" },
      { value: "20X", label: "Jump in product discovery", bg: "#e2d6ff", icon: "🔍" },
      { value: "288%", label: "Uplift Conversions", bg: "#ccf6e5", icon: "⚡" },
    ],
  },
},
 {
  type: "features",
  layout: "pink",
  data: {
    backgroundColor: "#f9c9e0",
    heading: "Drive Higher Click Rates With Awesome Features",
    tags: ["Coupons", "Polls", "Question & Answers", "Product Cards", "Pins", "Comments"],
    imageSection: {
      bgBoxOpacity: 0.08,
      mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7c8QHYwXrqJRxaSRp3RDmake9f8BWRghkw&s",
    },
    contentSection: {
      title: "Let users swipe through videos to find the products they love.",
      subtitle: "Ideal for: UGC Videos, Influencers Videos, Video Reviews, and more...",
      buttons: [
        { text: "View Live Demo", type: "dark" },
        { text: "Get Started — For Free!", type: "light" },
      ],
    },
  },
},
  {
        type: "cta",
        layout: "center",
        data: { title: "Try SaaS free for 14 days", buttonText: "Start Free Trial" }
      },

{
  type: "footer",
  layout: "footertwo",
  data: {
  logoText: "ReelUp",
  company: {
    title: "Company",
    links: ["About Us", "Case Studies", "Blogs", "Book a Demo"],
  },
  resources: {
    title: "Resources",
    links: ["Integrations", "Blog", "Become a Partner", "Partners Directory", "Demo store"],
  },
  product: {
    title: "Product",
    links: [
      "On-store Shoppable Videos",
      "Interactive & Quiz Videos",
      "Video Marketing",
      "Live stream shopping",
    ],
  },
  social: [
    { name: "linkedin", url: "#" },
    { name: "instagram", url: "#" },
    { name: "facebook", url: "#" },
    { name: "youtube", url: "#" },
    { name: "twitter", url: "#" },
  ],
  copyright: "© 2023 ReelUp.io - All rights reserved.",
  policies: ["Privacy Policy", "Security", "Terms of Use"],
},
}




  ]
},

{
  id: "flowblox",
  name: "Flowblox Landing",
  theme: {
    background: "#fdf8f5",
    text: "#1a1a1a",
    primary: "#111111",
    accent: "#e9d8a6",
  },
  sections: [
    {
      type: "header",
      layout: "flowblox-style",
      data: {
        logo: "Flowblox",
        navLinks: [
          { label: "Services", url: "#" },
          { label: "Features", url: "#" },
          { label: "Blog", url: "#" },
          { label: "Solutions", url: "#" },
        ],
        rightLinks: [
          { label: "About", url: "#" },
          { label: "Pricing", url: "#" },
          { label: "Contact", url: "#" },
        ],
        button: { text: "Get started", primary: true },
      },
    },

    {
      type: "hero",
      layout: "flowblox-hero",
      data: {
        titleLine1: "Streamline Your Team,",
        titleLine2: "Supercharge Your Workflow",
        description:
          "All-in-one platform to plan, collaborate, and deliver — faster and smarter.",
        ctaButton: { text: "Get started for Free", primary: true },
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1614283626804-1a998f5d1b17?auto=format&fit=crop&w=400&q=60",
            title: "Real-Time Collaboration",
            description:
              "Communicate seamlessly with your team and bring all your work together.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=400&q=60",
            title: "Task & Project Tracking",
            description:
              "Assign tasks, monitor progress, and meet your deadlines faster.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60",
            title: "Performance Insights",
            description:
              "Make data-driven decisions with advanced analytics and workload balance.",
          },
        ],
      },
    },

    {
      type: "features",
      layout: "flowblox-features",
      data: {
        heading: "Everything Your Team Needs to Work Smarter",
        subtext:
          "From task tracking to real-time chat, our features are built to keep your team connected, organized, and moving forward—together.",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=60",
            label: "Built-In Team Chat",
            description:
              "Communicate with your team instantly and manage projects with built-in chat.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=60",
            label: "Task Assignment",
            description:
              "Easily assign and track tasks, keeping everyone aligned and accountable.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60",
            label: "Performance Tracking",
            description:
              "Get instant insights into productivity and optimize your workflow effortlessly.",
          },
        ],
      },
    },

    {
      type: "footer",
      layout: "flowblox-footer",
      data: {
        logoText: "Flowblox",
        navLinks: [
          { label: "Privacy Policy", url: "#" },
          { label: "Terms", url: "#" },
          { label: "Support", url: "#" },
        ],
        copyright: "© 2025 Flowblox Inc. All rights reserved.",
      },
    },
  ],
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
