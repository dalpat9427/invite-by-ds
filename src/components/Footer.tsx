export default function Footer() {
  return (
    <footer className="py-8 border-t border-line px-6 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-gold-soft font-serif text-2xl tracking-[0.2em] mb-2">INVITE BY DS</h2>
        
        <p className="text-muted text-sm mb-4 font-light tracking-wide">Elegant Digital Invitations for Every Special Occasion</p>
        
        <div className="w-16 h-px bg-gold/30 mb-4"></div>
        
        <p className="text-white/90 mb-1 font-sans uppercase tracking-widest text-xs">A Creative Venture by DPixonic Creatives</p>
        <a href="mailto:dpixoniccreatives@gmail.com" className="text-gold hover:text-gold-soft transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-4 text-sm">
          dpixoniccreatives@gmail.com
        </a>
        
        <div className="flex items-center gap-6 mb-6">
          <a href="https://www.instagram.com/invitebyds/" target="_blank" rel="noopener noreferrer" className="text-muted text-xs uppercase tracking-[0.15em] hover:text-gold-soft transition-colors">Instagram</a>
          <span className="text-line text-xs">•</span>
          <a href="#" className="text-muted text-xs uppercase tracking-[0.15em] hover:text-gold-soft transition-colors">Behance</a>
          <span className="text-line text-xs">•</span>
          <a href="#" className="text-muted text-xs uppercase tracking-[0.15em] hover:text-gold-soft transition-colors">LinkedIn</a>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted/40">
          © 2026 Invite By DS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
