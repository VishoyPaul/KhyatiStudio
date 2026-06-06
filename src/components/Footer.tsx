export default function Footer() {
  return (
    <footer
      className="relative bg-[#D8C4AC] z-10"
      style={{
        paddingLeft: '24px',
        paddingRight: '24px',
        height: '130px',
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[1350px]">
          
          {/* Left Side */}
          <div className="flex flex-col justify-between h-[70px]">
            <h3
              className="
                font-['Playfair_Display']
                font-medium
                text-[22px]
                md:text-[35px]
                leading-[24px]
                md:leading-[40px]
                text-[#2D0004]
              "
            >
              STUDIO ARCHIVE
            </h3>

            <p
              className="
                font-['Helvetica']
                font-semibold
                text-[9px]
                md:text-[12px]
                leading-[12px]
                md:leading-[16px]
                tracking-[1.4px]
                md:tracking-[1.8px]
                uppercase
                text-[#544242]
                max-w-[150px]
                md:max-w-none
              "
            >
              © 2024 STUDIO ARCHIVE. CURATED EXCELLENCE.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end md:flex-row md:items-center gap-2 md:gap-8">
            <a
              href="https://www.instagram.com/_khyatii612?igsh=MXRnMXJzMXE1ZTV5aQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-['Helvetica']
                font-semibold
                text-[11px]
                md:text-[12px]
                leading-[16px]
                tracking-[1.5px]
                md:tracking-[1.8px]
                uppercase
                text-[#544242]
                underline
                decoration-[rgba(45,0,4,0.2)]
                underline-offset-2
                hover:text-[#2D0004]
                transition-colors
              "
            >
              Instagram
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-['Helvetica']
                font-semibold
                text-[11px]
                md:text-[12px]
                leading-[16px]
                tracking-[1.5px]
                md:tracking-[1.8px]
                uppercase
                text-[#544242]
                underline
                decoration-[rgba(45,0,4,0.2)]
                underline-offset-2
                hover:text-[#2D0004]
                transition-colors
              "
            >
              Behance
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}