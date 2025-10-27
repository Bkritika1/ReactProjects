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


export const landingPagesData = [
  // 🛍️ E-Commerce Landing Page
  {
    id: "ecommerce",
    name: "E-Commerce Landing",
    theme: { bg: "#fff3f4", primary: "#ff4d6d", text: "#111" },
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
          subtitle: "Your favorite products just a click away.",
          image: "/assets/images/ecommerce-hero.png",
          buttonText: "Shop Now"
        }
      },
      {
        type: "features",
        layout: "grid-3",
        data: [
          { title: "Fast Delivery", desc: "Get your orders within 24 hours" },
          { title: "Secure Payment", desc: "Trusted by 1M+ customers" },
          { title: "24/7 Support", desc: "We’re always here for you" }
        ]
      },
      {
        type: "cta",
        layout: "center",
        data: {
          title: "Ready to start shopping?",
          buttonText: "Explore Products"
        }
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 🎨 Portfolio Landing
  {
    id: "portfolio",
    name: "Portfolio Landing",
    theme: { bg: "#f0f4ff", primary: "#4d79ff", text: "#222" },
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
          subtitle: "Beautiful portfolio templates to impress clients.",
          image: "/assets/images/portfolio-hero.png",
          buttonText: "Explore Now"
        }
      },
      {
        type: "features",
        layout: "cards",
        data: [
          { title: "Modern Design", desc: "Elegant and minimalistic layouts" },
          { title: "Customizable", desc: "Easily edit your content anytime" }
        ]
      },
      {
        type: "cta",
        layout: "gradient",
        data: {
          title: "Build Your Personal Brand Today",
          buttonText: "Get Started"
        }
      },
      { type: "footer", layout: "default" }
    ]
  },

  // 🤖 Modern AI Landing
  {
    id: "modern1",
    name: "Modern AI Landing",
    theme: { bg: "#f9f9f9", primary: "#4d79ff", text: "#111" },
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
          subtitle: "The first prospecting tool that pulls live data in real-time...",
          buttons: [
            { text: "Try Tiro for free", type: "primary" },
            { text: "Book a demo", type: "secondary" }
          ],
          chatMessages: [
            { from: "bot", text: "Hi, what can I help you with today?" },
            {
              from: "user",
              text: 'Hey Tiro, Can you please extract info for "Emilia Smith" (linkedin.com/Emilia1)'
            },
            { from: "bot", text: "Generating ..." }
          ],
          contactCard: {
            name: "Emilia Smith",
            location: "California, United States",
            avatar: "https://via.placeholder.com/40",
            phone: "880-2999-872",
            email: "emilia@example.com"
          },
          tagLine: "Extract your customers with AI"
        }
      },
      {
        type: "logos",
        layout: "scroll",
        data: [
          { src: "https://via.placeholder.com/80x40?text=Rakuten", alt: "Rakuten" },
          { src: "https://via.placeholder.com/80x40?text=NCR", alt: "NCR" },
          { src: "https://via.placeholder.com/80x40?text=monday.com", alt: "Monday" },
          { src: "https://via.placeholder.com/80x40?text=Disney", alt: "Disney" },
          { src: "https://via.placeholder.com/80x40?text=Dropbox", alt: "Dropbox" }
        ]
      },
      {
        type: "cta",
        layout: "center",
        data: {
          title: "Start Prospecting Smarter Today",
          buttonText: "Get Started Free"
        }
      },
      { type: "footer", layout: "default" }
    ]
  }
];
