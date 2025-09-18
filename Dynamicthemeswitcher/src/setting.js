export const settings = {
    theme:{
  default: {
    "--primary-text-color": "#111827",
    "--secondary-text-color": "#061d4bff",
    "--primary-bg-color": "conic-gradient(#f3f8ff, #deecff, #c6cfff);",
    "--secondary-bg-color": "#3a73e3c1",
    "--button-text-color": "#000",
    "--gradient-bg": "linear-gradient(135deg, #f9fafb, #d1d5db)"
  },
  pastel: {
    "--primary-text-color": "#1f2937",
    "--secondary-text-color": "#ffff",
    "--primary-bg-color": "#ffffff",
    "--secondary-bg-color": "#116196ff",
     "--button-text-color": "#000",
    "--gradient-bg": "linear-gradient(to right, #ffffff 0%, #fffff 70%, #c7d2fe 200%)",
  },
  dark: {
    "--primary-text-color": "#e0e7ff",
    "--secondary-text-color": "#94a3b8",
     "--primary-bg-color": "#ffffff",
    "--secondary-bg-color": "#334155",
   "--button-text-color": "#000",
    "--gradient-bg": "linear-gradient(135deg, #0f172a, #1e40af)"
  },
  green: {
    "--primary-text-color": "#065f46",
    "--secondary-text-color": "#16a34a",
    "--primary-bg-color": "#ffff",
    "--secondary-bg-color": "#3b5c46ff",
    "--button-text-color": "#000",
    "--gradient-bg": "linear-gradient(135deg, #bbf7d0, #86efac)"
  },
    purple: {
    "--primary-text-color": "#1a013b",
    "--secondary-text-color": "#4b0163",
     "--primary-bg-color": "#ffff",
    "--secondary-bg-color": " #d81f1f",
    "--button-text-color": "#000",
    "--gradient-bg": "linear-gradient(135deg, #ff01d5, #c701fe)"
  },
  
//   sunrise: {
//     "--primary-text-color": "#333333",
//     "--secondary-text-color": "#555555",
//     "--primary-bg-color": "#FFDAB9",
//     "--secondary-bg-color": "#FFE4E1",
//     "--button-text-color": "#FF7F50",
//     "--gradient-bg": "linear-gradient(135deg, #FFDAB9, #FF7F50)"
//   },
//   ocean: {
//     "--primary-text-color": "#023047",
//     "--secondary-text-color": "#219EBC",
//     "--primary-bg-color": "#ADE8F4",
//     "--secondary-bg-color": "#90E0EF",
//     "--button-text-color": "#0077B6",
//     "--gradient-bg": "linear-gradient(135deg, #ADE8F4, #023047)"
//   },
//   forest: {
//     "--primary-text-color": "#1B4332",
//     "--secondary-text-color": "#2D6A4F",
//     "--primary-bg-color": "#D8F3DC",
//     "--secondary-bg-color": "#B7E4C7",
//     "--button-text-color": "#40916C",
//     "--gradient-bg": "linear-gradient(135deg, #D8F3DC, #1B4332)"
//   },
//   lavender: {
//     "--primary-text-color": "#5D3A85",
//     "--secondary-text-color": "#7C4DFF",
//     "--primary-bg-color": "#E6E6FA",
//     "--secondary-bg-color": "#D8BFD8",
//     "--button-text-color": "#9370DB",
//     "--gradient-bg": "linear-gradient(135deg, #E6E6FA, #9370DB)"
//   },
//   sunset: {
//     "--primary-text-color": "#FF6F61",
//     "--secondary-text-color": "#FF9472",
//     "--primary-bg-color": "#FFE5D9",
//     "--secondary-bg-color": "#FFCDB2",
//     "--button-text-color": "#FF6F61",
//     "--gradient-bg": "linear-gradient(135deg, #FFE5D9, #FF6F61)"
//   },
//   midnight: {
//     "--primary-text-color": "#ECEFF1",
//     "--secondary-text-color": "#B0BEC5",
//     "--primary-bg-color": "#263238",
//     "--secondary-bg-color": "#37474F",
//     "--button-text-color": "#78909C",
//     "--gradient-bg": "linear-gradient(135deg, #263238, #37474F)"
//   },
//   peach: {
//     "--primary-text-color": "#FF7F50",
//     "--secondary-text-color": "#FFAD87",
//     "--primary-bg-color": "#FFE5B4",
//     "--secondary-bg-color": "#FFDAB9",
//     "--button-text-color": "#FF7F50",
//     "--gradient-bg": "linear-gradient(135deg, #FFE5B4, #FF7F50)"
//   },
//   mint: {
//     "--primary-text-color": "#00695C",
//     "--secondary-text-color": "#00796B",
//     "--primary-bg-color": "#B2DFDB",
//     "--secondary-bg-color": "#80CBC4",
//     "--button-text-color": "#004D40",
//     "--gradient-bg": "linear-gradient(135deg, #B2DFDB, #004D40)"
//   },
//   coral: {
//     "--primary-text-color": "#FF6F61",
//     "--secondary-text-color": "#FF8A65",
//     "--primary-bg-color": "#FFE0B2",
//     "--secondary-bg-color": "#FFCCBC",
//     "--button-text-color": "#FF7043",
//     "--gradient-bg": "linear-gradient(135deg, #FFE0B2, #FF6F61)"
//   },
//   ice: {
//     "--primary-text-color": "#0288D1",
//     "--secondary-text-color": "#03A9F4",
//     "--primary-bg-color": "#E1F5FE",
//     "--secondary-bg-color": "#B3E5FC",
//     "--button-text-color": "#01579B",
//     "--gradient-bg": "linear-gradient(135deg, #E1F5FE, #0288D1)"
//   },
//   pearl: {
//     "--primary-text-color": "#37474F",
//     "--secondary-text-color": "#455A64",
//     "--primary-bg-color": "#ECEFF1",
//     "--secondary-bg-color": "#CFD8DC",
//     "--button-text-color": "#607D8B",
//     "--gradient-bg": "linear-gradient(135deg, #ECEFF1, #607D8B)"
//   },
//   rose: {
//     "--primary-text-color": "#C2185B",
//     "--secondary-text-color": "#D81B60",
//     "--primary-bg-color": "#F8BBD0",
//     "--secondary-bg-color": "#F48FB1",
//     "--button-text-color": "#880E4F",
//     "--gradient-bg": "linear-gradient(135deg, #F8BBD0, #C2185B)"
//   },
//   lemon: {
//     "--primary-text-color": "#FBC02D",
//     "--secondary-text-color": "#FFEB3B",
//     "--primary-bg-color": "#FFFDE7",
//     "--secondary-bg-color": "#FFF9C4",
//     "--button-text-color": "#FDD835",
//     "--gradient-bg": "linear-gradient(135deg, #FFFDE7, #FBC02D)"
//   },
//   sky: {
//     "--primary-text-color": "#1976D2",
//     "--secondary-text-color": "#64B5F6",
//     "--primary-bg-color": "#E3F2FD",
//     "--secondary-bg-color": "#BBDEFB",
//     "--button-text-color": "#1565C0",
//     "--gradient-bg": "linear-gradient(135deg, #E3F2FD, #1976D2)"
//   },
//   citrus: {
//     "--primary-text-color": "#FFA000",
//     "--secondary-text-color": "#FFC107",
//     "--primary-bg-color": "#FFF8E1",
//     "--secondary-bg-color": "#FFECB3",
//     "--button-text-color": "#FF6F00",
//     "--gradient-bg": "linear-gradient(135deg, #FFF8E1, #FFA000)"
//   },
//   berry: {
//     "--primary-text-color": "#8E24AA",
//     "--secondary-text-color": "#AB47BC",
//     "--primary-bg-color": "#F3E5F5",
//     "--secondary-bg-color": "#E1BEE7",
//     "--button-text-color": "#6A1B9A",
//     "--gradient-bg": "linear-gradient(135deg, #F3E5F5, #8E24AA)"
//   },
//   earth: {
//     "--primary-text-color": "#6D4C41",
//     "--secondary-text-color": "#8D6E63",
//     "--primary-bg-color": "#D7CCC8",
//     "--secondary-bg-color": "#BCAAA4",
//     "--button-text-color": "#5D4037",
//     "--gradient-bg": "linear-gradient(135deg, #D7CCC8, #6D4C41)"
//   },
//   sunflower: {
//     "--primary-text-color": "#FFEB3B",
//     "--secondary-text-color": "#FFF176",
//     "--primary-bg-color": "#FFFDE7",
//     "--secondary-bg-color": "#FFF9C4",
//     "--button-text-color": "#FBC02D",
//     "--gradient-bg": "linear-gradient(135deg, #FFFDE7, #FFEB3B)"
//   },
//   steel: {
//     "--primary-text-color": "#546E7A",
//     "--secondary-text-color": "#78909C",
//     "--primary-bg-color": "#CFD8DC",
//     "--secondary-bg-color": "#B0BEC5",
//     "--button-text-color": "#455A64",
//     "--gradient-bg": "linear-gradient(135deg, #CFD8DC, #546E7A)"
//   }
 },

  gradients: {
    sunset: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    ocean: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    forest: "linear-gradient(135deg, #5a3f37, #2c7744)",
    fire: "linear-gradient(135deg, #f12711, #f5af19)",
    dawn: "linear-gradient(135deg, #ff512f, #dd2476)",
    dusk: "linear-gradient(135deg, #2c3e50, #fd746c)",
    aurora: "linear-gradient(135deg, #00c6ff, #0072ff)",
    lavender: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    candy: "linear-gradient(135deg, #f79d00, #64f38c)",
    berry: "linear-gradient(135deg, #ff6a00, #ee0979)",
    mint: "linear-gradient(135deg, #76b852, #8DC26F)",
    sky: "linear-gradient(135deg, #2980B9, #6DD5FA)",
    volcano: "linear-gradient(135deg, #e96443, #904e95)",
    oceanDeep: "linear-gradient(135deg, #2c3e50, #4ca1af)",
    peach: "linear-gradient(135deg, #ed4264, #ffedbc)",
    ice: "linear-gradient(135deg, #74ABE2, #5563DE)",
    sand: "linear-gradient(135deg, #f3e7e9, #e3eeff)",
    metal: "linear-gradient(135deg, #434343, #000000)",
    bubblegum: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    coffee: "linear-gradient(135deg, #b79891, #94716b)"
  },

  gradientTextColors: {
    sunset: "#000000",
    ocean: "#ffffff",
    forest: "#ffffff",
    fire: "#ffffff",
    dawn: "#ffffff",
    dusk: "#ffffff",
    aurora: "#ffffff",
    lavender: "#000000",
    candy: "#000000",
    berry: "#ffffff",
    mint: "#000000",
    sky: "#ffffff",
    volcano: "#ffffff",
    oceanDeep: "#ffffff",
    peach: "#000000",
    ice: "#000000",
    sand: "#000000",
    metal: "#ffffff",
    bubblegum: "#000000",
    coffee: "#ffffff"
  },

 fonts: {
    sans: "'Arial', sans-serif",
    serif: "'Georgia', serif",
    mono: "'Courier New', monospace",
    roboto: "'Roboto', sans-serif",
    openSans: "'Open Sans', sans-serif",
    lato: "'Lato', sans-serif",
    montserrat: "'Montserrat', sans-serif",
    nunito: "'Nunito', sans-serif",
    raleway: "'Raleway', sans-serif",
    ubuntu: "'Ubuntu', sans-serif",
    playfairDisplay: "'Playfair Display', serif",
    merriweather: "'Merriweather', serif",
    ptSerif: "'PT Serif', serif",
    sourceCodePro: "'Source Code Pro', monospace",
    workSans: "'Work Sans', sans-serif",
    bebasNeue: "'Bebas Neue', sans-serif",
    josefinSans: "'Josefin Sans', sans-serif",
    inconsolata: "'Inconsolata', monospace",
    firaCode: "'Fira Code', monospace",
    pacifico: "'Pacifico', cursive",
    dancingScript: "'Dancing Script', cursive",
    courierPrime: "'Courier Prime', monospace",
    cormorantGaramond: "'Cormorant Garamond', serif"
  }


};










  

 
 

//   "custom-theme-10": {
//     "--primary-text-color": "#1a0a3b",
//     "--secondary-text-color": "#4b0a63",
//     "--primary-bg-color": "#f0afce8",
//     "--secondary-bg-color": "#e00afe",
//     "--button-text-color": "#0e0ae9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0ad5, #c70afe)"
//   },
//   "custom-theme-11": {
//     "--primary-text-color": "#1a0b3b",
//     "--secondary-text-color": "#4b0b63",
//     "--primary-bg-color": "#f0bfce8",
//     "--secondary-bg-color": "#e00bfe",
//     "--button-text-color": "#0e0be9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0bd5, #c70bfe)"
//   },
//   "custom-theme-12": {
//     "--primary-text-color": "#1a0c3b",
//     "--secondary-text-color": "#4b0c63",
//     "--primary-bg-color": "#f0cfce8",
//     "--secondary-bg-color": "#e00cfe",
//     "--button-text-color": "#0e0ce9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0cd5, #c70cfe)"
//   },
//   "custom-theme-13": {
//     "--primary-text-color": "#1a0d3b",
//     "--secondary-text-color": "#4b0d63",
//     "--primary-bg-color": "#f0dfce8",
//     "--secondary-bg-color": "#e00dfe",
//     "--button-text-color": "#0e0de9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0dd5, #c70dfe)"
//   },
//   "custom-theme-14": {
//     "--primary-text-color": "#1a0e3b",
//     "--secondary-text-color": "#4b0e63",
//     "--primary-bg-color": "#f0efce8",
//     "--secondary-bg-color": "#e00efe",
//     "--button-text-color": "#0e0ee9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0ed5, #c70efe)"
//   },
//   "custom-theme-15": {
//     "--primary-text-color": "#1a0f3b",
//     "--secondary-text-color": "#4b0f63",
//     "--primary-bg-color": "#f0ffce8",
//     "--secondary-bg-color": "#e00ffe",
//     "--button-text-color": "#0e0fe9",
//     "--gradient-bg": "linear-gradient(135deg, #ff0fd5, #c70ffe)"
//   },
//   "custom-theme-16": {
//     "--primary-text-color": "#1a103b",
//     "--secondary-text-color": "#4b1063",
//     "--primary-bg-color": "#f10fce8",
//     "--secondary-bg-color": "#e010fe",
//     "--button-text-color": "#0e10e9",
//     "--gradient-bg": "linear-gradient(135deg, #ff10d5, #c710fe)"
//   },
//   "custom-theme-17": {
//     "--primary-text-color": "#1a113b",
//     "--secondary-text-color": "#4b1163",
//     "--primary-bg-color": "#f11fce8",
//     "--secondary-bg-color": "#e011fe",
//     "--button-text-color": "#0e11e9",
//     "--gradient-bg": "linear-gradient(135deg, #ff11d5, #c711fe)"
//   },
//   "custom-theme-18": {
//     "--primary-text-color": "#1a123b",
//     "--secondary-text-color": "#4b1263",
//     "--primary-bg-color": "#f12fce8",
//     "--secondary-bg-color": "#e012fe",
//     "--button-text-color": "#0e12e9",
//     "--gradient-bg": "linear-gradient(135deg, #ff12d5, #c712fe)"
//   },
//   "custom-theme-19": {
//     "--primary-text-color": "#1a133b",
//     "--secondary-text-color": "#4b1363",
//     "--primary-bg-color": "#f13fce8",
//     "--secondary-bg-color": "#e013fe",
//     "--button-text-color": "#0e13e9",
//     "--gradient-bg": "linear-gradient(135deg, #ff13d5, #c713fe)"
//   },
//   "custom-theme-20": {
//     "--primary-text-color": "#1a143b",
//     "--secondary-text-color": "#4b1463",
//     "--primary-bg-color": "#f14fce8",
//     "--secondary-bg-color": "#e014fe",
//     "--button-text-color": "#0e14e9",
//     "--gradient-bg": "linear-gradient(135deg, #ff14d5, #c714fe)"
//   }
// }