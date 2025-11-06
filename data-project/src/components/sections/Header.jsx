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

export default function Header({ data }) {
  const {
    logo = "Brand",
    nav = [],
    align = "left",
    style = {},
    layout = "default",
    buttons = []
  } = data || {};

  // Layouts: default | centered | productStyle etc.
  const isProductStyle = layout === "productStyle";

  return (
    <header
      className="header container"
      style={{
        justifyContent: isProductStyle ? "space-between" : "space-between",
        ...style,
      }}
    >
      {/* Left logo */}
      <div className="logo">{logo}</div>

      {/* Centered nav (if layout == productStyle) */}
      <nav
        className="nav"
        style={{
          justifyContent: align,
          flex: isProductStyle ? 1 : "unset",
          display: "flex",
          gap: "24px",
          justifyContent: isProductStyle ? "center" : "flex-end",
        }}
      >
        {nav.map((n, i) => (
          <a key={i} href={n.href || "#"}>
            {n.label}
          </a>
        ))}
      </nav>

      {/* Right buttons (only if provided in data) */}
      {buttons.length > 0 && (
        <div style={{ display: "flex", gap: "10px" }}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`btn ${btn.variant || "primary"}`}
              style={{
                background: btn.variant === "secondary" ? "#fff" : btn.color || "var(--primary)",
                color: btn.variant === "secondary" ? "var(--primary)" : "#fff",
                borderRadius: "999px",
                fontWeight: "600",
                padding: "8px 16px",
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