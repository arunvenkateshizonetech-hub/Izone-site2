const CEOCard = ({ name, role, description, image }) => {
  const imageUrl = image || "https://www.izonetech.in/img/kesavan.jpg";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 flex flex-col md:flex-row items-center gap-12 md:gap-20 group relative overflow-hidden transition-all duration-500 hover:shadow-[hsl(var(--primary))]/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent rounded-bl-[10rem] transition-transform duration-700 group-hover:scale-110"></div>
      
      {/* Image */}
      <div className="relative shrink-0 z-10">
        <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
        <img
          src={imageUrl}
          alt={name}
          className="w-full max-w-[240px] md:max-w-[300px] rounded-[2.5rem] shadow-2xl shadow-slate-900/40 object-cover aspect-[4/5] relative z-20 border-4 border-white dark:border-slate-800 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <span className="px-4 py-1.5 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] font-bold text-xs uppercase tracking-widest mb-6 inline-block">
          Leadership
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-primary-foreground tracking-tight leading-tight">
          {name}
        </h2>

        <p className="text-xl font-bold text-[hsl(var(--accent))] mb-6 uppercase tracking-wide">{role}</p>

        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg font-medium">
          {description}
        </p>

        {/* Stats inline (no boxes) */}
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          <div className="space-y-1">
            <span className="text-3xl font-black text-slate-900 dark:text-primary-foreground block tracking-tighter">15+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Exp</span>
          </div>
          <div className="w-px h-12 bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
          <div className="space-y-1">
            <span className="text-3xl font-black text-slate-900 dark:text-primary-foreground block tracking-tighter">200+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projects</span>
          </div>
          <div className="w-px h-12 bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
          <div className="space-y-1">
            <span className="text-3xl font-black text-slate-900 dark:text-primary-foreground block tracking-tighter">200+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Team Size</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOCard;
