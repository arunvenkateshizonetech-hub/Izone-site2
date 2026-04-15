const fs = require('fs');
const content = fs.readFileSync('src/pages/Index.jsx', 'utf8');

const startIndex = content.indexOf('const Index = () => {');
if (startIndex === -1) throw new Error('Could not find const Index = () => {');

const newComponent = `const Index = () => {
  const { theme } = useTheme();
  const { popups, testimonials } = useAdmin();
  const activePopup = popups?.find((p) => p.isActive) ?? null;
  const [dismissed, setDismissed] = useState(false);

  return (
    <Layout>
      {/* Hero Popup */}
      <AnimatePresence>
        {activePopup && !dismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDismissed(true)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center shadow-2xl"
            >
              <button onClick={() => setDismissed(true)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
              <h3 className="text-2xl font-bold mb-4">{activePopup.title}</h3>
              <p className="text-muted-foreground mb-6">{activePopup.description}</p>
              <Button onClick={() => setDismissed(true)} className="rounded-xl px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all">Got it</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Glows to replace old '#025add' blue bg */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse float-anim"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen float-anim" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10 px-6">
          <div className="flex flex-wrap lg:flex-nowrap items-center">
            <div className="w-full lg:w-7/12 space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-[70px] font-extrabold leading-[1.1] text-foreground tracking-tight"
              >
                Delivering Superior <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Digital Excellence</span>
                <span className="text-foreground">.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium leading-relaxed"
              >
                Izone Technologies crafts exceptional web experiences that transform businesses. From concept to deployment, we bring your vision to life.
              </motion.p>

              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="flex flex-wrap gap-6 items-center"
              >
                <div className="flex gap-4 mb-4 md:mb-0">
                  <a href="#" className="w-12 h-12 rounded-xl border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all hover:shadow-md hover:-translate-y-1"><Twitter size={20} /></a>
                  <a href="#" className="w-12 h-12 rounded-xl border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white transition-all hover:shadow-md hover:-translate-y-1"><Users size={20} /></a>
                  <a href="#" className="w-12 h-12 rounded-xl border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all hover:shadow-md hover:-translate-y-1"><Award size={20} /></a>
                </div>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:scale-105">Get Quotes</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-border text-foreground hover:bg-muted font-semibold px-8 py-6 rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:scale-105">Get Started</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-card">
        <div className="container-custom px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-foreground tracking-tight">Services We Offer</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary font-medium">Transforming your digital vision into reality with expert solutions</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-10 bg-background border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="featured" className="py-24 bg-background relative overflow-hidden">
        <div className="container-custom px-6 text-center relative z-10">
          <div className="mb-16 space-y-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-foreground tracking-tight">Why Choose Us</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary font-medium">Excellence in every line of code we write</motion.p>
          </div>
          
          <div className="flex flex-wrap items-center">
            {/* Left Column */}
            <div className="w-full md:w-4/12 space-y-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-6 justify-end text-right group">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">Experience</h4>
                  <p className="text-sm text-muted-foreground">Decade of delivering cutting-edge digital solutions.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-card rounded-2xl flex items-center justify-center shadow-md border border-border group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                  <Star className="text-primary" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-6 justify-end text-right group">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">Products</h4>
                  <p className="text-sm text-muted-foreground">High-quality, scalable digital products for modern business.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-card rounded-2xl flex items-center justify-center shadow-md border border-border group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                  <Layers className="text-primary" />
                </div>
              </motion.div>
            </div>

            {/* Center Image */}
            <div className="w-full md:w-4/12 px-8 py-12 md:py-0">
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                 className="relative z-10 block"
                 style={{ display: "block" }}
               >
                 <div className="relative p-2 rounded-[3rem] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl">
                   <div className="absolute inset-2 bg-card rounded-[2.5rem]"></div>
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Features" className="rounded-[2.5rem] relative z-10 w-full object-cover aspect-square hover:scale-105 transition-transform duration-500" />
                 </div>
               </motion.div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-4/12 space-y-12 text-left">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-card rounded-2xl flex items-center justify-center shadow-md border border-border group-hover:border-secondary/50 group-hover:shadow-secondary/20 transition-all">
                   <Zap className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">Approach</h4>
                  <p className="text-sm text-muted-foreground">Agile and client-centric approach to every project.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-card rounded-2xl flex items-center justify-center shadow-md border border-border group-hover:border-accent/50 group-hover:shadow-accent/20 transition-all">
                   <Shield className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">Support</h4>
                  <p className="text-sm text-muted-foreground">Dedicated 24/7 support for all our digital partners.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card text-foreground relative border-y border-border overflow-hidden">
        {/* Glow behind stats to stand out from regular sections */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container-custom px-6 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {stats.map((s, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={i} 
                  className="space-y-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-md">
                     <Award className="w-8 h-8 text-white relative z-10" />
                   </div>
                   <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"><Counter value={s.value} /></div>
                   <div className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">{s.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container-custom px-6">
          <div className="text-center mb-16 space-y-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-foreground tracking-tight">Testimonials</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary font-medium">What our valued clients say about us</motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.slice(-3).map((t, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative"
              >
                <div className="flex gap-4 items-center mb-6 z-10 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0 p-[2px]">
                    <div className="w-full h-full rounded-full bg-card"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-lg">{t.name || t.author}</h5>
                    <p className="text-sm text-primary font-semibold">{t.designation || t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6 text-accent z-10 relative">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-accent text-accent" size={16} />)}
                </div>
                <p className="text-muted-foreground relative z-10 leading-relaxed italic">
                  <Quote className="absolute -top-4 -left-4 text-border w-16 h-16 -z-10 group-hover:text-primary/10 transition-colors" />
                  "{t.description || t.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-card overflow-hidden">
        <div className="container-custom px-6">
          <div className="text-center mb-16 space-y-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-foreground tracking-tight">Our Portfolio</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary font-medium">Showcasing our recent digital transformations</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-8">
                   <h5 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h5>
                   <p className="text-sm text-center text-slate-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
         <div className="container-custom px-full max-w-4xl px-6 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-card p-12 md:p-16 border border-border rounded-[2rem] shadow-xl space-y-8"
            >
               <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Let's Discuss your Projects</h2>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">We pride ourselves with our ability to perform and deliver results. Use the form below to discuss your project needs with our team, we will get back asap</p>
               <Link to="/contact">
                 <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-bold py-7 px-12 text-xl rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:scale-105">Contact Us Today</Button>
               </Link>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};
export default Index;
\`;

const head = content.slice(0, startIndex);
fs.writeFileSync('src/pages/Index.jsx', head + newComponent, 'utf8');
