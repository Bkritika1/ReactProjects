// import "./EcommerceLanding.css";
// import { Link } from "react-router-dom";

// export default function EcommerceLanding() {
//   return (
//     <div className="ecommerce-landing">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Discover Modern Styles</h1>
//           <p>Explore your colors on a stunning e-commerce layout.</p>
//           <button className="cta-btn">Shop Now</button>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="products-section">
//         <h2>Featured Products</h2>
//         <div className="product-grid">
//           {[
//             {
//               id: 1,
//               name: "Elegant Chair",
//               price: "$120",
//               img: "https://images.unsplash.com/photo-1567016549469-2f3f7b3d8f9a?auto=format&fit=crop&w=600&q=60",
//             },
//             {
//               id: 2,
//               name: "Wooden Table",
//               price: "$240",
//               img: "https://images.unsplash.com/photo-1602526218333-8b92a0b1d91d?auto=format&fit=crop&w=600&q=60",
//             },
//             {
//               id: 3,
//               name: "Minimal Lamp",
//               price: "$80",
//               img: "https://images.unsplash.com/photo-1606813909355-4e0d6e0a6c13?auto=format&fit=crop&w=600&q=60",
//             },
//             {
//               id: 4,
//               name: "Soft Cushion",
//               price: "$40",
//               img: "https://images.unsplash.com/photo-1616627452291-d3f79b5df260?auto=format&fit=crop&w=600&q=60",
//             },
//             {
//               id: 5,
//               name: "Wall Frame",
//               price: "$65",
//               img: "https://images.unsplash.com/photo-1598300042247-6e8b9eeb9a64?auto=format&fit=crop&w=600&q=60",
//             },
//             {
//               id: 6,
//               name: "Cozy Sofa",
//               price: "$360",
//               img: "https://images.unsplash.com/photo-1616627895848-04b60d22a2c3?auto=format&fit=crop&w=600&q=60",
//             },
//           ].map((item) => (
//             <div className="product-card" key={item.id}>
//               <div className="image-wrapper">
//                 <img src={item.img} alt={item.name} />
//               </div>
//               <div className="product-info">
//                 <h3>{item.name}</h3>
//                 <p>{item.price}</p>
//                 <button className="buy-btn">Buy Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Back Button */}
//       <div className="back-link">
//         <Link to="/features">← Back to All Landing Pages</Link>
//       </div>
//     </div>
//   );
// }
