import { motion } from "framer-motion";

const techStack = {
  development: [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#fff" },
    { name: "Laravel", color: "#FF2D20" },
    { name: "Node.js", color: "#339933" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Python", color: "#3776AB" },
  ],
  cloud: [
    { name: "AWS", color: "#FF9900" },
    { name: "Google Cloud", color: "#4285F4" },
    { name: "Vercel", color: "#fff" },
    { name: "Docker", color: "#2496ED" },
  ],
  marketing: [
    { name: "Google Ads", color: "#4285F4" },
    { name: "Meta Ads", color: "#0081FB" },
    { name: "Shopify", color: "#7AB55C" },
    { name: "HubSpot", color: "#FF7A59" },
  ],
  automation: [
    { name: "n8n", color: "#EA4B71" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Make", color: "#6D00CC" },
    { name: "Airtable", color: "#18BFFF" },
  ],
};

const industries = [
  "E-commerce",
  "SaaS",
  "FinTech",
  "Healthcare",
  "Real Estate",
  "Education",
  "Logistics",
  "Retail",
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--gradient-glow)] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tech Stack & Industries
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Powered by{" "}
            <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We leverage the latest tools and technologies to build scalable, 
            high-performance solutions across various industries.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(techStack).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold capitalize mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                    style={{ borderColor: `${tech.color}40` }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-heading font-semibold text-xl mb-6">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
