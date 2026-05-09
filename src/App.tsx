/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Rocket, 
  Smartphone, 
  TerminalSquare, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Menu, 
  X,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck,
  MessageSquare,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 rounded bg-brand flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">NiNode<span className="text-brand">.</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('services')} className="text-text-secondary hover:text-white transition-colors">Layanan</button>
            <button onClick={() => scrollTo('features')} className="text-text-secondary hover:text-white transition-colors">Keunggulan</button>
            <button onClick={() => scrollTo('pricing')} className="text-text-secondary hover:text-white transition-colors">Harga</button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors font-semibold"
            >
              Mulai Proyek
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-text-secondary hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <button onClick={() => scrollTo('services')} className="text-2xl font-display font-medium text-left border-b border-border/50 pb-4">Layanan</button>
            <button onClick={() => scrollTo('features')} className="text-2xl font-display font-medium text-left border-b border-border/50 pb-4">Keunggulan</button>
            <button onClick={() => scrollTo('pricing')} className="text-2xl font-display font-medium text-left border-b border-border/50 pb-4">Harga</button>
            <button onClick={() => scrollTo('contact')} className="text-2xl font-display font-medium text-left text-brand">Mulai Proyek &rarr;</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={STAGGER_CHILDREN}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                  </span>
                  Menerima proyek baru
                </div>
              </motion.div>

              <motion.h1 
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                style={{ lineHeight: 1.1 }}
              >
                Membangun masa depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">digital</span>.
              </motion.h1>

              <motion.p 
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
              >
                Agensi web development premium yang merancang website, web app, dan solusi e-commerce berkinerja tinggi untuk bisnis Anda.
              </motion.p>

              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  Hubungi Kami <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollTo('services')}
                  className="w-full sm:w-auto px-8 py-4 bg-card border border-border rounded-full font-semibold hover:bg-border/50 hover:text-white text-text-secondary transition-colors"
                >
                  Lihat Layanan
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-card/30 border-y border-border/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER_CHILDREN}
              className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div className="max-w-2xl">
                <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl md:text-5xl font-bold mb-6">Layanan Kami.</motion.h2>
                <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-text-secondary text-lg">
                  Dari landing page yang menarik hingga aplikasi web berskala besar, kami memiliki kapabilitas teknis untuk memberikan yang terbaik.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={STAGGER_CHILDREN}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {[
                { icon: <Globe className="text-brand w-6 h-6" />, title: "Website Bisnis & Portofolio", desc: "Paket standar mencakup maksimal 5 halaman, desain responsif untuk semua perangkat, dan fitur formulir kontak. Tersedia juga opsi kustomisasi lanjutan sesuai dengan kebutuhan khusus bisnis Anda." },
                { icon: <TerminalSquare className="text-brand w-6 h-6" />, title: "Pembuatan Web Full Stack", desc: "Layanan menyeluruh meliputi desain UI/UX, pengembangan front-end (React/Vue), pengembangan back-end (Node.js/Python, database SQL/NoSQL), serta layanan deployment dan pemeliharaan rutin." },
                { icon: <Smartphone className="text-brand w-6 h-6" />, title: "E-Commerce & Landing Page", desc: "Spesialisasi memaksimalkan konversi penjualan, didukung optimasi SEO yang kuat, integrasi pembayaran otomatis, dan rancangan antarmuka yang sangat user-friendly." },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="p-8 rounded-3xl bg-card border border-border hover:border-brand/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section id="features" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={STAGGER_CHILDREN}
              >
                <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Mengapa Memilih Kami</motion.h2>
                <motion.h3 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl md:text-5xl font-bold mb-8">Diciptakan untuk cepat, <br/>dirancang untuk skalabilitas.</motion.h3>
                <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-text-secondary text-lg mb-10">
                  Kami tidak sekadar menulis kode. Kami merekayasa solusi. Setiap piksel dioptimalkan, setiap interaksi diperhatikan, dan setiap back-end dibuat kuat & aman.
                </motion.p>

                <div className="space-y-6">
                  {[
                    { title: "Performa Super Cepat", icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "Kami sangat memperhatikan Core Web Vitals untuk memastikan waktu pramuat dalam hitungan detik." },
                    { title: "Keamanan Tingkat Bank", icon: <ShieldCheck className="w-5 h-5 text-green-400" />, text: "Perlindungan data dan arsitektur yang aman telah ditanamkan ke dalam situs web langsung secara bawaan." },
                    { title: "Dioptimalkan Untuk SEO", icon: <Rocket className="w-5 h-5 text-purple-400" />, text: "Rangkaian markup dan semantik HTML disesuaikan untuk dapat berada di peringkat atas dalam hasil pencarian." },
                  ].map((feature, i) => (
                    <motion.div key={i} variants={FADE_UP_ANIMATION_VARIANTS} className="flex gap-4">
                      <div className="mt-1 w-10 h-10 rounded-full bg-card border border-border flex flex-shrink-0 items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                        <p className="text-text-secondary">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Code Block Image / visual */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative rounded-3xl bg-card border border-border overflow-hidden h-[500px] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent pointer-events-none" />
                <div className="p-8 font-mono text-sm sm:text-base text-text-secondary opacity-70">
                  <p className="text-brand mb-2">// architecture.ts</p>
                  <p><span className="text-purple-400">export function</span> <span className="text-blue-300">initProject</span>() {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> stack = <span className="text-yellow-300">"Modern"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> performance = <span className="text-blue-400">100</span>;</p>
                  <p className="pl-4 mt-4"><span className="text-purple-400">return</span> {'{'}</p>
                  <p className="pl-8 text-green-300">success: true,</p>
                  <p className="pl-8 text-green-300">scalable: true,</p>
                  <p className="pl-8 text-green-300">beautiful: true</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-card/20 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Harga yang transparan & jelas.</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan Anda. Tanpa biaya tersembunyi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Tugas Sekolah / Basic",
                  price: "Mulai Rp 25 Rb",
                  desc: "Cocok untuk tugas web statis tingkat SMP/SMK dengan harga sangat terjangkau.",
                  features: ["1-3 Halaman Statis", "HTML & CSS Murni", "Desain Responsif", "Gratis Hosting (Vercel/Github)", "Bebas Revisi Minor"],
                  cta: "Pilih Paket Ini",
                  popular: false
                },
                {
                  name: "Portofolio / Landing Page",
                  price: "Mulai Rp 150 Rb",
                  desc: "Sempurna untuk portofolio pribadi atau project akhir (Ujikom) SMK.",
                  features: ["Framework Modern (React/Vue)", "Animasi Interaktif", "Integrasi Formulir", "Setup SEO Dasar", "1x Revisi Mayor"],
                  cta: "Paling Laris",
                  popular: true
                },
                {
                  name: "Web Apps / Tugas Akhir",
                  price: "Rp 500 Rb - 1 Jt",
                  desc: "Aplikasi web canggih dengan database untuk keperluan Tugas Akhir / Skripsi ringan.",
                  features: ["Arsitektur Full-Stack", "Desain Database & Login", "Integrasi API", "Dashboard Admin", "Penjelasan Struktur Kode", "Support Deployment"],
                  cta: "Hubungi Kami",
                  popular: false
                }
              ].map((tier, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className={`p-8 rounded-3xl border flex flex-col h-full bg-card relative ${tier.popular ? 'border-brand/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : 'border-border'}`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-text-secondary mb-6 text-sm flex-grow">{tier.desc}</p>
                  <div className="text-4xl font-display font-bold mb-8">{tier.price}</div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold transition-colors mt-auto ${
                    tier.popular ? 'bg-brand hover:bg-brand-hover text-white' : 'bg-background hover:bg-border border border-border text-white'
                  }`}>
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand/5 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Siap membuat sesuatu yang <br className="hidden md:block"/> luar biasa?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            >
              Mari diskusikan proyek Anda. Kami sedang menerima klien proyek baru.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a href="https://wa.me/6282326933843" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" /> Chat via WhatsApp
              </a>
              <button className="px-8 py-4 bg-card border border-border rounded-full font-semibold hover:bg-border/50 text-white transition-colors inline-flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" /> Jadwalkan Panggilan
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-background py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-80">
            <Code2 className="text-brand w-5 h-5" />
            <span className="font-display font-bold text-lg">NiNode.</span>
          </div>
          
          <div className="flex gap-6 text-text-secondary text-sm">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-brand transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-brand transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:text-white hover:border-brand transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="text-center text-text-secondary text-xs mt-12 opacity-50">
          © {new Date().getFullYear()} NiNode Web Agency. Seluruh hak cipta.
        </div>
      </footer>
    </div>
  );
}

