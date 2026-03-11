// static/menus.jsx

// Header navigation links
const navLinks = [
  { name: "Home", href: "/", title: "" },
  { name: "About Us", href: "/about-us-liaison", title: "About Liaisonbank", alt: "" },
  { name: "Our Clients", href: "/client-liaison", title: "Our Clients Liaisonbank", alt: ""  },
  { name: "Completed", href: "/completed-liaison-bank", title: "Completed Liaisonbank", alt: ""  },
  { name: "On Going", href: "/ongoing-liaison-bank", title: "On Going Liaisonbank", alt: ""  },
  { 
    name: "Our Services", 
    title: "Liaisonbank Services",
    alt: "",
    submenu: [
      {
        name: "AMC", href: "/amc", title: "AMC", alt: "AMC Liaisonbank",
        items: [
          { name:"Licenses Renewal", href:"", title: "", alt: "", pdf: "/pdf/licenses-renewal.pdf"  },  
          { name:"PNG Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Fire Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Electric Audit and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Pest Control Service and Certification", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
          { name:"Water Tank Cleaning and Certification (Ongoing)", href:"", title: "", alt: "",  pdf: "/pdf/licenses-renewal.pdf"  },
        ]
      },
      {
        name: "Licensing", href: "/licensing", title: "Licensing", alt: "Licensing",
        items: [
          { name:"F&B", href:"", title: "", alt: "",
            children:[
               { name:"Licenses Renewal", href:"", title: "", alt: "", pdf: "/pdf/licenses-renewal.pdf"  },  
            ]
          },
        ]
      },
      {
        name: "Liaisoning", href: "/liaisoning", title: "Liaisoning", alt: "Liaisoning",
        items: [
          { name:"Licenses Renewal", href:"", title: "", alt: ""  },
        ]
      },
      { name: "Electrical ( SITC )", href: "", title: "Electrical Execution, Compliance & Maintenance Services", alt: "Electrical ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Fire ( SITC )", href: "", title: "Fire & Safety Systems and Compliance Solutions", alt: "Fire ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "PNG ( SITC )", href: "", title: "Piped Natural Gas (Png) Services & Regulatory Compliance", alt: "PNG ( SITC )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Equipment Solution Department ( ESD )", href: "", title: "Equipment Solution Department", alt: "( ESD )", pdf: "/pdf/electrical-sitc.pdf" },
      { name: "Group Profile", href: "", title: "Group Profile", alt: "( ESD )", pdf: "/pdf/electrical-sitc.pdf" },
      // { name: "Integrated Licensing & Compliance Solutions ( ILCS )", href: "", title: "Integrated Licensing & Compliance Solutions", alt: "( ILCS )" },
      // { name: "Integrated Liaisoning, Approvals & Compliance Solutions ( ILACS )", href: "", title: "Integrated Liaisoning, Approvals & Compliance Solutions", alt: "( ILACS )" },
    ]
  },  
  { name: "Press Release", href: "/press-release-liaison-bank", title: "Press Release Liaisonbank", alt: "Press Release Liaisonbank"  },
  // { name: "Process", href: "/process-liaison-bank", title: "Process Liaisonbank", alt: "Process Liaisonbank"  },
  { name: "Contact Us", href: "/contact-us-liaison-bank", title: "Contact Liaisonbank", alt: "Contact Liaisonbank"  },
  // { name: "Login", href: "/Login" },
]

// Footer links
const importantLinks = [
  { name: "Article", href: "/article-liaison-bank", title: "Article Liaisonbank", alt: "Article Liaisonbank" },
  { name: "CEO's Desk", href: "/ceos-desk", title: "CEO's Desk Liaisonbank", alt: "CEO's Desk Liaisonbank" },
  { name: "Careers", href: "/careers-liaison-bank/", title: "Careers Liaisonbank", alt: "Careers Liaisonbank" },
  { name: "Testimonials", href: "/testimonials-liaison-bank", title: "Testimonials Liaisonbank", alt: "Testimonials Liaisonbank" },
  { name: "Privacy Policy", href: "/privacy-policy", title: "Privacy Policy Liaisonbank", alt: "Privacy Policy Liaisonbank" },
  { name: "Terms of Service", href: "/terms-and-conditions", title: "Terms of Services Liaisonbank", alt: "Terms of Services Liaisonbank" },
  { name: "Sitemap", href: "/sitemap", title: "Sitemap Liaisonbank", alt: "Sitemap Liaisonbank" }
]

// Named exports
export { navLinks, importantLinks }
