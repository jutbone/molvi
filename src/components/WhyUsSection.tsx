import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Users, Clock, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Results-Driven Approach",
    description: "Every strategy is backed by data and designed to deliver measurable ROI for your business.",
  },
  {
    icon: Shield,
    title: "End-to-End Solutions",
    description: "From concept to deployment to growth, we handle every aspect of your digital journey.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Get a team of experts committed to your success, not just freelancers passing through.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Agile processes ensure quick delivery without compromising on quality or precision.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "150+ successful projects across industries from startups to established enterprises.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Process",
    description: "Clear communication, regular updates, and no surprises. You're always in the loop.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Your Digital Growth{" "}
              <span className="gradient-text">Partner for Success</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just build websites or run ads. We architect comprehensive digital 
              ecosystems that drive sustainable growth and give you a competitive edge.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {[
                "Custom solutions tailored to your business goals",
                "Cutting-edge technology stack for future-proof results",
                "Global team with diverse industry expertise",
                "Continuous optimization and performance monitoring",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
