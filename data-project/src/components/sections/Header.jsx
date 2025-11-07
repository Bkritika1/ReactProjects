// import React from "react";

// export default function Header({ data }) {
//   const { logo = "Brand", nav = [], align = "left", style = {} } = data || {};
//   return (
//     <header className="header container" style={style}>
//       <div className="logo">{logo}</div>
//       <nav className="nav" style={{ justifyContent: align }}>
//         {nav.map((n, i) => (
//           <a key={i} href={n.href || "#"}>{n.label}</a>
//         ))}
//       </nav>
//     </header>
//   );
// }
import React from "react";

export default function Header({
  logo = "Brand",
  nav = [],
  align = "left",
  style = {},
  layout = "default",
  buttons = [],
}) {
  // Layouts: default | centered | productStyle etc.
  const isProductStyle = layout === "productStyle";

  return (
    <header
      className="header container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        ...style,
      }}
    >
      {/* Left logo */}
      <div className="logo" style={{ fontWeight: "bold", fontSize: "20px" }}>
        {logo}
      </div>

      {/* Centered nav */}
      <nav
        className="nav"
        style={{
          display: "flex",
          gap: "24px",
          flex: isProductStyle ? 1 : "unset",
          justifyContent: isProductStyle ? "center" : align === "right" ? "flex-end" : "flex-start",
        }}
      >
        {nav.map((n, i) => (
          <a key={i} href={n.href || "#"} style={{ textDecoration: "none", color: "#333" }}>
            {n.label}
          </a>
        ))}
      </nav>

      {/* Right buttons */}
      {buttons.length > 0 && (
        <div style={{ display: "flex", gap: "10px" }}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`btn ${btn.variant || "primary"}`}
              style={{
                background: btn.variant === "secondary" ? "#fff" : btn.color || "var(--primary)",
                color: btn.variant === "secondary" ? "var(--primary)" : "#fff",
                border: "1px solid var(--primary)",
                borderRadius: "999px",
                fontWeight: "600",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}


/* 
/HTML
    const data = [
        {
            "tag": "section",
            "class": "hero",
            id: 521
        },
        {
            "tag": "div",
            "content": "Hello World!",
            "class": "main",
            id: 951,
            parentId: 521
        },
        {
            "tag": "input",
            "placeholder": "Hello",
            "inputType": "text",
            "class": "ggs",
            id: 856,
            parentId: 951
        },
        {
            "tag": "input",
            "placeholder": "Submit",
            "inputType": "button",
            "onClick": "function()",
            id: 10025,
            parentId: 951
        }
    ]

    //CSS
    const defaultCssData = [
        {
            className: "main",
            styles: {
                margin: "10px",
                border: "1px solid black"
            }
        }
    ]
    //
    const template1CSS = [
        {
            className: "ggs"
        }
    ]

    //HTML
    const data = [
        {
            "tag": "section",
            "class": "hero",
            "child": [
                {
                    "tag": "div",
                    "content": "Hello World!",
                    "class": "main",
                    "child": [
                        {
                            "tag": "input",
                            "placeholder": "Hello",
                            "inputType": "text",
                            "class": "ggs"
                        },
                        {
                            "tag": "input",
                            "placeholder": "Submit",
                            "inputType": "button",
                            "onClick": "function()"
                        }
                    ]
                }
            ]
        }
    ]

    //CSS
    const defaultCssData=[
        {
            className: "main",
            styles: {
                margin: "10px",
                border: "1px solid black"
            }
        }
    ]
    //
    const template1CSS= [
        {
            className: "ggs"
        }
    ]

Saloni Rana
23:54
{ id: 2, tag: "div", class: "main", parentId: 1 },
  { id: 3, tag: "h1", content: "Hello World!", parentId: 2 },
  { id: 4, tag: "button", content: "Click", parentId: 2 }

*/