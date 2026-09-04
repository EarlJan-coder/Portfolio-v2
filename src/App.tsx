import Silk from './components/Silk';
import StaggeredMenu from './components/StaggeredMenu';
import StrokeText from './components/StrokeText';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/#hero' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/#services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function App() {
  return (
    <div className="w-full relative overflow-hidden">
      <Silk
        speed={5}
        scale={1}
        color="#EF4444"
        noiseIntensity={1.5}
        rotation={0}
      />

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-6xl font-bold tracking-tight mb-4 drop-shadow-[0_2px_40px_rgba(0,0,0,0.8)]">
            Earl Jhon Malatag
          </h1>
          <p className="text-xl text-white/70 tracking-widest uppercase drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            Full Stack Developer
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen relative flex items-center justify-center"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0808 50%, #0a0a0a 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <StrokeText
              text="About Me"
              strokeColor="#EF4444"
              fillColor="#FFFFFF"
              strokeWidth={2}
              drawDuration={1.2}
              fillDelay={0.3}
              stagger={0.08}
              ease="power2.out"
              trigger="scroll"
              fillMode="wipe"
              fontSize={72}
              fontWeight={800}
              letterSpacing={-2}
              align="left"
              className="text-left"
            />

            <p className="text-lg text-white/90 leading-relaxed">
              I am a passionate Full Stack Developer with experience in building
              modern web applications. I specialize in creating responsive,
              user-friendly interfaces and robust backend systems.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              With a strong foundation in React, TypeScript, and Node.js, I
              continuously strive to learn and adapt to new technologies. I enjoy
              tackling complex problems and turning ideas into functional,
              beautiful software.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Three.js', 'GSAP'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-md border-4 border-white/20 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl">EJ</span>
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-white/10 -z-10" />
              <div className="absolute -inset-8 rounded-full border border-white/5 -z-20" />
            </div>
          </div>
        </div>
      </section>

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#EF4444', '#B91C1C']}
        isFixed={true}
        accentColor="#EF4444"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
}

export default App;