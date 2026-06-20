import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.933 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.359 1.058.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.756 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const BehanceIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}
  >
    <path d="M22 7h-7v2h7v-2zm1.876 5.567c-.201-1.89-1.99-3.235-4.223-3.235-2.28 0-4.004 1.34-4.004 3.738 0 2.219 1.6 3.93 4 3.93 1.705 0 3.254-.836 3.794-2.327h-1.856c-.347.531-1.07.82-1.916.82-.98 0-1.768-.501-1.928-1.57h6.143c.01-.131.026-.43.026-.549l-.036-.807zm-4.133-1.611c.882 0 1.62.518 1.78 1.48h-3.649c.148-.962.868-1.48 1.869-1.48zm-11.239-1.61c1.33 0 2.449-.806 2.449-2.296 0-1.39-1.01-2.05-2.09-2.05h-4.863v12h5.183c2.051 0 3.31-1.05 3.31-2.82 0-1.6-1.129-2.338-2.128-2.528l.189-.101c1.3-.491 1.95-1.521 1.95-2.731 0-1.551-1.181-2.481-2.583-2.481h-1.418v5.007h-1.419v-5.007h1.419v5.007h1.418c1.07 0 1.921-.69 1.921-1.83 0-1.111-.84-2.002-1.96-2.002h-1.66v-1.69h1.72c1.07 0 1.76-.63 1.76-1.65 0-1.1-.739-1.62-1.789-1.62h-1.699v3.25h1.699z"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full">
      <section id="home" className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto pt-24 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="uppercase tracking-[4px] text-muted mb-4">Luxury Digital Invitations</p>
            <h1 className="hero-title font-serif">Crafting Timeless Invitations.</h1>
            <p className="text-lg text-muted max-w-xl mt-6 mb-8">Premium digital invitation cards & animated invitation videos for every celebration.</p>
            <a href="#gallery" className="btn-gold">View Designs</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="preview-slider mt-16"
          >
            <div className="preview-card relative group flex items-center justify-center bg-black/40">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain absolute inset-0 z-20"
              >
                <source src="/wedding-invite.mp4#t=0.001" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-transparent z-30 pointer-events-none"></div>
              <span className="absolute bottom-4 left-6 z-40 text-gold-soft font-serif text-2xl drop-shadow-lg pointer-events-none">Wedding</span>
            </div>
            <div className="preview-card relative group flex items-center justify-center bg-black/40">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain absolute inset-0 z-20"
              >
                <source src="/birthday-invite.mp4#t=0.001" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-transparent z-30 pointer-events-none"></div>
              <span className="absolute bottom-4 left-6 z-40 text-gold-soft font-serif text-2xl drop-shadow-lg pointer-events-none">Birthday</span>
            </div>
            <div className="preview-card relative group flex items-center justify-center bg-black/40">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain absolute inset-0 z-20"
              >
                <source src="/engagement-invite.mp4#t=0.001" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-transparent z-30 pointer-events-none"></div>
              <span className="absolute bottom-4 left-6 z-40 text-gold-soft font-serif text-2xl drop-shadow-lg pointer-events-none">Engagement</span>
            </div>
            <div className="preview-card relative group flex items-center justify-center bg-black/40">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain absolute inset-0 z-20"
              >
                <source src="/babyshower-invite.mp4#t=0.001" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080605] via-transparent to-transparent z-30 pointer-events-none"></div>
              <span className="absolute bottom-4 left-6 z-40 text-gold-soft font-serif text-2xl drop-shadow-lg pointer-events-none">Baby Shower</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 shrink-0">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl text-center mb-16"
          >
            Invitation Gallery
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Wedding', 'Birthday', 'Corporate', 'Engagement', 'Baby Shower', 'Custom'].map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => navigate(`/category/${item.toLowerCase().replace(' ', '-')}`)}
                className="glass p-8 card-hover cursor-pointer text-center group"
              >
                <p className="text-2xl font-serif text-gold-soft group-hover:text-gold transition-colors">{item}</p>
                <p className="text-muted/80 text-sm mt-3 transition-colors group-hover:text-gold-soft">View Collection &rarr;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="founders" className="py-24 px-6 shrink-0 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl text-center mb-12"
          >
            Meet the Founders
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass p-8 flex flex-col items-center text-center card-hover overflow-hidden"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-line p-1">
                <img src="/Dalpat.jpg" alt="Founder" loading="lazy" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-serif text-3xl mb-2 text-gold-soft">Dalpat Thakor</h3>
              <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Founder & Creative Director</p>
              <p className="text-muted leading-relaxed text-sm mb-6">Leading the creative vision behind every invitation, transforming special moments into beautifully designed digital experiences.</p>
              <div className="mt-auto flex flex-col items-center w-full pt-4 border-t border-line/30">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted/60 mb-4 font-medium">Follow Our Work</span>
                <div className="flex gap-6">
                  <a title="Connect on LinkedIn" href="https://www.linkedin.com/in/dalpat-edits-56005a391/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><LinkedinIcon size={20} /></a>
                  <a title="View Instagram" href="https://www.instagram.com/dalpat.visuals/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><InstagramIcon size={20} /></a>
                  <a title="View Portfolio" href="https://www.behance.net/dalpatthakor2" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><BehanceIcon size={20} /></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 flex flex-col items-center text-center card-hover overflow-hidden"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-line p-1">
                <img src="/Shweta.jpg" alt="Graphic Designer" loading="lazy" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-serif text-3xl mb-2 text-gold-soft">Shweta Nayka</h3>
              <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Co-Founder & Design Lead</p>
              <p className="text-muted leading-relaxed text-sm mb-6">Bringing ideas to life through thoughtful design, elegant layouts, and a commitment to exceptional visual quality.</p>
              <div className="mt-auto flex flex-col items-center w-full pt-4 border-t border-line/30">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted/60 mb-4 font-medium">Follow Our Work</span>
                <div className="flex gap-6">
                  <a title="Connect on LinkedIn" href="https://www.linkedin.com/in/shweta-patel-ba39a6416/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><LinkedinIcon size={20} /></a>
                  <a title="View Instagram" href="https://www.instagram.com/shwetanayka.design/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><InstagramIcon size={20} /></a>
                  <a title="View Portfolio" href="https://www.behance.net/shwetapatel30" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold-soft hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 transform"><BehanceIcon size={20} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 shrink-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass p-10"
        >
          <h2 className="font-serif text-5xl mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 text-muted">
            <div className="text-lg flex items-center justify-center text-center p-4">1. Share details</div>
            <div className="text-lg flex items-center justify-center text-center p-4">2. Choose style</div>
            <div className="text-lg flex items-center justify-center text-center p-4">3. Approve design</div>
            <div className="text-lg flex items-center justify-center text-center p-4">4. Get your invite</div>
          </div>
        </motion.div>
      </section>

      <section id="pricing" className="py-24 px-6 shrink-0 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass p-10"
        >
          <h2 className="font-serif text-5xl mb-6">
            Pricing
          </h2>
          <p className="text-white text-2xl mb-4 tracking-wide font-sans">Elegant Digital Invitations from <span className="text-gold-soft font-serif text-3xl">₹299</span></p>
          <p className="text-muted text-lg font-light">Personalized designs crafted for your special moments.</p>
        </motion.div>
      </section>

      <section id="contact" className="py-24 px-6 shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass p-10"
        >
          <h2 className="font-serif text-5xl mb-6 text-center">Book Your Invitation</h2>
          <form className="space-y-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              className="w-full p-4 rounded-xl bg-white/5 border border-line text-text-main placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors font-sans" 
              placeholder="Your Name" 
            />
            <input 
              type="tel" 
              className="w-full p-4 rounded-xl bg-white/5 border border-line text-text-main placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors font-sans" 
              placeholder="WhatsApp Number" 
            />
            <textarea 
              rows={5} 
              className="w-full p-4 rounded-xl bg-white/5 border border-line text-text-main placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors font-sans resize-y" 
              placeholder="Tell us about your event"
            ></textarea>
            <div className="text-center pt-4">
              <button type="submit" className="btn-gold cursor-pointer w-full md:w-auto px-10">Send Inquiry</button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
