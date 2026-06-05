'use client';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        h-[75px]
        backdrop-blur-[40px]
        bg-[rgba(255,255,255,0.08)]
        border-b border-[rgba(255,255,255,0.15)]
        shadow-[0_8px_32px_rgba(0,0,0,0.06)]
      "
    >
      <div className="max-w-[1450px] mx-auto h-full px-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="relative left-16 font-['Playfair_Display'] font-medium text-[32px] leading-none tracking-[-1.2px] text-[#2D0004] hover:opacity-80 transition-opacity"
        >
          STUDIO ARCHIVE
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-14">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                font-sans
                font-medium
                text-[13px]
                tracking-[3px]
                uppercase
                transition-all
                pb-1
                ${
                  activeSection === item.id
                    ? 'text-[#2D0004] border-b border-[#2D0004]'
                    : 'text-[#544242] hover:text-[#2D0004]'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}