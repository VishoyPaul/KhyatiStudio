export default function Footer() {
  return (
    <footer
  className="relative bg-[#D8C4AC] z-10"
  style={{
    paddingLeft: "80px",
    paddingRight: "80px",
     height: "130px" 
  }}
>
  <div
    className="flex items-center justify-between w-full"
    style={{ height: "100%" }}
  >
        <div>
          <h3 className="font-['Playfair_Display'] font-medium text-[35px] leading-[40px] text-[#2D0004] mb-2">
            STUDIO ARCHIVE
          </h3>
          <p className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242]">
            © 2024 STUDIO ARCHIVE. CURATED EXCELLENCE.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/_khyatii612?igsh=MXRnMXJzMXE1ZTV5aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242] underline decoration-[rgba(45,0,4,0.2)] underline-offset-2 hover:text-[#2D0004] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242] underline decoration-[rgba(45,0,4,0.2)] underline-offset-2 hover:text-[#2D0004] transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
