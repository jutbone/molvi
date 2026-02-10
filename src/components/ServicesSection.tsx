import { motion } from "framer-motion";
import { 
  Megaphone, 
  Code2, 
  Database, 
  Workflow, 
  Youtube, 
  ShoppingCart, 
  ShoppingBag, 
  Store, 
  Palette, 
  Search,
  ArrowUpRight
} from "lucide-react";

import shopifyLogo from "@/assets/logos/shopify.svg";
import tiktokLogo from "@/assets/logos/tiktok.svg";
import ebayLogo from "@/assets/logos/ebay.svg";
import youtubeLogo from "@/assets/logos/youtube.svg";
import googleAdsLogo from "@/assets/logos/google-ads.svg";
import metaLogo from "@/assets/logos/meta.svg";
import snapchatLogo from "@/assets/logos/snapchat.svg";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-spectrum advertising across every major platform to maximize your ROI.",
    features: ["Google & Meta Ads", "Snapchat & TikTok Ads", "SEO & Content", "Social Media Management", "Sales Funnels"],
    gradient: "from-blue-500 to-cyan-500",
    logos: [googleAdsLogo, metaLogo, snapchatLogo, tiktokLogo],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Custom web and mobile applications built with cutting-edge technologies.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Architecture"],
    gradient: "from-purple-500 to-pink-500",
    logos: [],
  },
  {
    icon: Database,
    title: "CRM Development",
    description: "Custom CRM systems tailored to your business workflows and processes.",
    features: ["Custom CRM", "Lead Management", "Pipeline Automation", "Analytics Dashboard"],
    gradient: "from-green-500 to-emerald-500",
    logos: [],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Powerful workflow automation to eliminate repetitive tasks and boost efficiency.",
    features: ["Workflow Design", "API Integration", "Data Sync", "Process Automation"],
    gradient: "from-orange-500 to-amber-500",
    logos: [],
  },
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "End-to-end YouTube growth strategies from content to monetization.",
    features: ["Content Strategy", "Channel Growth", "Monetization", "Analytics"],
    gradient: "from-red-500 to-rose-500",
    logos: [youtubeLogo],
  },
  {
    icon: ShoppingCart,
    title: "Shopify Store",
    description: "Complete Shopify store setup, customization, and growth optimization.",
    features: ["Store Setup", "Theme Customization", "App Integration", "Conversion Optimization"],
    gradient: "from-green-400 to-emerald-600",
    logos: [shopifyLogo],
  },
  {
    icon: ShoppingBag,
    title: "TikTok Shop",
    description: "Launch and scale your TikTok Shop with viral product strategies.",
    features: ["Shop Setup", "Product Listing", "Creator Outreach", "Viral Strategy"],
    gradient: "from-pink-500 to-rose-500",
    logos: [tiktokLogo],
  },
  {
    icon: Store,
    title: "eBay Store",
    description: "Professional eBay store management and listing optimization for maximum sales.",
    features: ["Store Setup", "Listing Optimization", "Repricing Strategy", "Inventory Management"],
    gradient: "from-yellow-500 to-orange-500",
    logos: [ebayLogo],
  },
  {
    icon: Palette,
    title: "Branding & UI/UX",
    description: "Stunning visual identities and user experiences that convert.",
    features: ["Brand Identity", "UI/UX Design", "Design Systems", "Prototyping"],
    gradient: "from-violet-500 to-purple-500",
    logos: [],
  },
  {
    icon: Search,
    title: "Product Hunting",
    description: "Data-driven product research and market analysis for e-commerce success.",
    features: ["Market Research", "Trend Analysis", "Competitor Analysis", "Product Selection"],
    gradient: "from-teal-500 to-green-500",
    logos: [],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Grow Digitally</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions under one roof. From development to marketing, 
            we've got every aspect of your digital growth covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 gradient-border glow-effect">
                {/* Icon + Logos */}
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.logos.length === 1 ? (
                    <img src={service.logos[0]} alt={service.title} className="w-6 h-6 brightness-0 invert" />
                  ) : service.logos.length > 1 ? (
                    <div className="grid grid-cols-2 gap-0.5">
                      {service.logos.slice(0, 4).map((logo, i) => (
                        <img key={i} src={logo} alt="Brand logo" className="w-4 h-4 brightness-0 invert" />
                      ))}
                    </div>
                  ) : (
                    <service.icon className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
