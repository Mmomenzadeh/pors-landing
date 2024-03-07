/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },

        orange: {
          550: "#fd7130",
        },

        zinc: {
          550: "#2F2F2F",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px 0px #0000000D",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        30: "120px",
      },
      backgroundImage: {
        "home-header-desktop": "url(../images/headerBgDesktop.webp)",
        "home-header-mobile": "url(../images/headerBgMobile.webp)",
      },
    },

    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0.625rem",
      },
    },
  },

  darkMode: "class",

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
      addVariant("even-child", "&:nth-child(even)");
    },
  ],
};
