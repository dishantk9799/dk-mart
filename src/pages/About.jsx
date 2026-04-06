import { 
  FiPackage, FiUsers, FiStar, FiTruck, 
  FiShield, FiZap, FiHeart, FiAward,
  FiArrowRight, FiZap as FiLightning 
} from "react-icons/fi";
import shop from '/shop.svg'
import { Link } from 'react-router';

// Reusable Stat Card
const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-[#0c0c0e] border border-zinc-800/60 p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:border-[#CAFF00]/30 group">
    <Icon className="text-[#CAFF00] text-xl mb-3 opacity-80 group-hover:opacity-100" />
    <h3 className="text-2xl font-black text-white">{value}</h3>
    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{label}</p>
  </div>
);

// Reusable Value Card
const ValueCard = ({ icon: Icon, title, desc, color }) => (
  <div className="bg-[#0c0c0e] border border-zinc-800/60 p-6 rounded-2xl flex gap-5 items-start transition-all hover:border-zinc-700">
    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800`}>
      <Icon className={`text-xl ${color}`} />
    </div>
    <div>
      <h4 className="text-white font-black text-lg mb-1">{title}</h4>
      <p className="text-zinc-500 text-xs leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

// Team Member Card
const TeamCard = ({ name, role, initial, color }) => (
  <div className="bg-[#0c0c0e] border border-zinc-800/60 p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:border-zinc-700">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-black font-black text-xl mb-4 ${color}`}>
      {initial}
    </div>
    <h4 className="text-white font-bold text-base mb-1">{name}</h4>
    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* HEADER SECTION  */}
        <section className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-14 h-14 bg-[#CAFF00] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(202,255,0,0.2)]">
              <img src={shop} alt="logo" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-[#CAFF00]">DkMart</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            DkMart is a next-generation e-commerce platform built to make online 
            shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* STATS GRID */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={FiPackage} value="20K+" label="Products" />
          <StatCard icon={FiUsers} value="50K+" label="Happy Customers" />
          <StatCard icon={FiStar} value="4.9" label="Avg. Rating" />
          <StatCard icon={FiTruck} value="99%" label="On-time Delivery" />
        </section>

        {/* OUR STORY */}
        <section className="bg-zinc-900/20 border border-zinc-800/60 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-black text-white">Our Story</h2>
            <div className="space-y-4 text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
              <p>
                DkMart started in 2022 as a small side project — two engineers tired of bloated, 
                slow e-commerce experiences. We asked ourselves: <span className="text-zinc-300">what if shopping online was actually enjoyable?</span>
              </p>
              <p>
                Three years later, DkMart serves over 50,000 customers across the country. We stock electronics, 
                fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
              </p>
              <p>
                We're still the same team at heart: obsessed with speed, transparency, and making you feel 
                good about every purchase you make here.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES GRID */}
        <section className="space-y-12">
          <h2 className="text-center text-3xl font-black text-white">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ValueCard 
              icon={FiShield} title="Trust" color="text-yellow-500"
              desc="Every product is verified for quality and authenticity before listing." 
            />
            <ValueCard 
              icon={FiZap} title="Speed" color="text-[#CAFF00]"
              desc="We obsess over delivery times so your orders arrive when promised." 
            />
            <ValueCard 
              icon={FiHeart} title="Community" color="text-red-500"
              desc="Built around real customer feedback, not just business metrics." 
            />
            <ValueCard 
              icon={FiAward} title="Quality" color="text-blue-500"
              desc="We curate the best — no filler, no junk, just great products." 
            />
          </div>
        </section>

        {/* MEET THE TEAM */}
        <section className="space-y-12">
          <h2 className="text-center text-3xl font-black text-white">Meet the Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <TeamCard name="Dishant" role="Founder & CEO" initial="D" color="bg-[#CAFF00]" />
            <TeamCard name="Abhay" role="Head of Product" initial="A" color="bg-blue-500" />
            <TeamCard name="Sandeep" role="Lead Engineer" initial="S" color="bg-purple-500" />
            <TeamCard name="Ayush" role="Design Director" initial="A" color="bg-rose-500" />
          </div>
        </section>

        {/* READY TO SHOP CTA */}
        <section className="bg-zinc-900/20 border border-zinc-800/60 p-12 md:p-20 rounded-[3rem] text-center space-y-8">
           <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-white">Ready to shop?</h2>
            <p className="text-zinc-500 font-medium">Explore thousands of products at unbeatable prices.</p>
           </div>
           <Link to="/home/shop" className="bg-[#CAFF00] md:w-1/2 text-black px-10 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 mx-auto hover:brightness-110 active:scale-95 transition-all shadow-[0_20px_40px_rgba(202,255,0,0.1)]">
             Browse Products <FiArrowRight strokeWidth={3} />
           </Link>
        </section>

      </div>
    </div>
  );
};

export default About;