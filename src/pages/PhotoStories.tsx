import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Calendar, User, Play, Heart, Share2, X } from "lucide-react";
import ParallaxSection from "../components/ParallaxSection";

type Story = {
  id: number;
  type: "image" | "video";
  title: string;
  campaign: string;
  year: number;
  photographer: string;
  img?: string;
  poster?: string;
  video?: string;
  alt: string;
  impact: {
    beneficiaries: number;
    story: string;
  };
};

const sampleData: Story[] = [
  // {
  //   id: 1,
  //   type: "image",
  //   title: "Clean Water Project - Lagos Community",
  //   campaign: "Water & Sanitation",
  //   year: 2024,
  //   photographer: "Ada Okafor",
  //   img: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  //   alt: "children collecting clean water",
  //   impact: { beneficiaries: 120, story: "New well reduced walking time by 2 hours per day and provided clean water access to 120 families." },
  // },
  {
    id: 1,
    type: "image",
    title: "School Feeding Program Launch",
    campaign: "Education & Nutrition",
    year: 2025,
    photographer: "Tunde Adebayo",
    img: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299689/_DSC0696_yrkiud.jpg",
    alt: "children receiving school meals",
    impact: { beneficiaries: 300, story: "School attendance increased by 40% after implementing daily meal programs." },
  },
  {
    id: 2,
    type: "video",
    title: "School Feeding Program Launch",
    campaign: "Education & Nutrition",
    year: 2025,
    photographer: "Ngozi Okwu",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1759420322/Vid4_RoyDek_Academy_k7mysg.mp4",
    alt: "children receiving school meals",
    impact: { beneficiaries: 300, story: "School attendance increased by 40% after implementing daily meal programs." },
  },
  {
    id: 3,
    type: "image",
    title: "Senior Health & Wellness Drive",
    campaign: "Healthcare Support",
    year: 2025,
    photographer: "Kemi Adeyemi",
    img: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734793/About4_uzfjoe.jpg",
    alt: "volunteers distributing care packages",
    impact: { beneficiaries: 100, story: "Care packages brought comfort and essential supplies to patients and families." },
  },
  {
    id: 4,
    type: "image",
    title: "Playground Construction",
    campaign: "Child Safety",
    year: 2025,
    photographer: "Samuel Okon",
    img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "children playing on new playground",
    impact: { beneficiaries: 500, story: "Safe playground provides recreational space for over 500 children in the community." },
  },
  // {
  //   id: 6,
  //   type: "image",
  //   title: "Emergency Shelter Support",
  //   campaign: "Housing & Shelter",
  //   year: 2023,
  //   photographer: "Grace Nwosu",
  //   img: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734808/SO9_alow7g.jpg",
  //   alt: "families receiving shelter support",
  //   impact: { beneficiaries: 80, story: "Emergency shelter and supplies provided to displaced families during crisis." },
  // },
  {
    id: 5,
    type: "video",
    title: "Gbagada General Hospital - Hospital Outreach",
    campaign: "Healthcare Support",
    year: 2025,
    photographer: "Ngozi Okwu",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1759420309/Vid2_Gbagada_GH_klj6ey.mp4",
    alt: "hospital outreach at Gbagada general Hosipital",
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited The Gbagada General Hospital in Lagos to extend love, care, and support. This is just the beginning of a story we can’t wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
  },
  {
    id: 6,
    type: "video",
    title: "Abeokuta - Community Outreach",
    campaign: "Community Outreach",
    year: 2025,
    photographer: "Ngozi Okwu",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1759420311/Vid3_Abeokuta_trqjml.mp4",
    alt: "Community outreach at Abeokuta, Ogun State",
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited The Gbagada General Hospital in Lagos to extend love, care, and support. This is just the beginning of a story we can’t wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
  },
];

export default function PhotoStories() {
  const [query, setQuery] = useState("");
  const [campaign, setCampaign] = useState("All");
  const [year, setYear] = useState("All");
  const [mediaType, setMediaType] = useState("All");
  const [layout, setLayout] = useState("masonry");
  const [visible, setVisible] = useState(sampleData);
  const [selected, setSelected] = useState<Story | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let filtered = sampleData.filter((s) => {
      if (campaign !== "All" && s.campaign !== campaign) return false;
      if (year !== "All" && String(s.year) !== String(year)) return false;
      if (mediaType !== "All" && s.type !== mediaType) return false;
      if (query && !s.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    setVisible(filtered);
  }, [query, campaign, year, mediaType]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        setIsVisible(prev => ({
          ...prev,
          [target.id]: entry.isIntersecting
        }));
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [visible]);

  const campaigns = ["All", "Community Outreach", "Education & Nutrition", "Green Nose Day", "Healthcare Support", "Child Safety"];
  const years = ["All", "2024", "2023", "2022"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-earth-green"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6"
          >
            Photo <span className="text-warm-yellow">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-lato text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Visual stories of impact, hope, and transformation across Africa. See the work, feel the impact.
          </motion.p>
        </div>
      </ParallaxSection>

      <section className="max-w-7xl mx-auto p-6 bg-white">
        {/* Filters and Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-charcoal">
              Impact Gallery
            </h2>
            <p className="font-lato text-gray-600 mt-1">
              Filter, browse, and explore our visual archive of transformation
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 font-lato text-sm w-48 focus:ring-2 focus:ring-deep-purple focus:border-transparent"
                placeholder="Search stories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 font-lato text-sm focus:ring-2 focus:ring-deep-purple focus:border-transparent" 
              value={campaign} 
              onChange={(e) => setCampaign(e.target.value)}
            >
              {campaigns.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 font-lato text-sm focus:ring-2 focus:ring-deep-purple focus:border-transparent" 
              value={year} 
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 font-lato text-sm focus:ring-2 focus:ring-deep-purple focus:border-transparent" 
              value={mediaType} 
              onChange={(e) => setMediaType(e.target.value)}
            >
              <option value="All">All Media</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
            </select>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button 
                className={`px-3 py-2 font-lato text-sm transition-colors ${layout === "masonry" ? "bg-deep-purple text-white" : "hover:bg-gray-50"}`} 
                onClick={() => setLayout("masonry")}
              >
                Masonry
              </button>
              <button 
                className={`px-3 py-2 font-lato text-sm transition-colors ${layout === "grid" ? "bg-deep-purple text-white" : "hover:bg-gray-50"}`} 
                onClick={() => setLayout("grid")}
              >
                Grid
              </button>
              <button 
                className={`px-3 py-2 font-lato text-sm transition-colors ${layout === "timeline" ? "bg-deep-purple text-white" : "hover:bg-gray-50"}`} 
                onClick={() => setLayout("timeline")}
              >
                Timeline
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Stories Strip */}
        <motion.div 
          initial={{ opacity: 0.6, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="font-montserrat font-semibold text-lg text-charcoal mb-4">Featured Stories</h3>
          <div className="flex gap-4 overflow-x-auto pb-3">
            {sampleData.slice(0, 6).map((s, index) => (
              <motion.article
                key={s.id}
                initial={{ opacity: 0.6, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer relative group"
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelected(s)}
              >
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  {s.type === "image" ? (
                    <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <>
                      <img src={s.poster} alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3 group-hover:bg-warm-yellow/80 transition-colors duration-300">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-3 left-3 bg-warm-yellow text-deep-purple px-2 py-1 rounded-md text-xs font-montserrat font-semibold">
                    {s.impact.beneficiaries} helped
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-montserrat font-semibold text-sm text-charcoal">{s.title}</h4>
                  <p className="font-lato text-xs text-gray-500 mt-1">{s.campaign} • {s.year}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Main Gallery */}
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {layout === "masonry" && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {visible.map((item, index) => (
                <motion.figure
                  key={item.id}
                  id={`item-${item.id}`}
                  data-animate
                  initial={{ opacity: 0.8, y: 30 }}
                  animate={{ 
                    opacity: isVisible[`item-${item.id}`] ? 1 : 0.3,
                    y: isVisible[`item-${item.id}`] ? 0 : 30 
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="break-inside-avoid rounded-xl overflow-hidden relative bg-white shadow-lg cursor-pointer group"
                  onClick={() => setSelected(item)}
                >
                  {item.type === "image" ? (
                    <img 
                      src={item.img} 
                      alt={item.alt} 
                      loading="lazy" 
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="relative">
                      <img 
                        src={item.poster} 
                        alt={item.alt} 
                        loading="lazy" 
                        className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3 group-hover:bg-warm-yellow/80 transition-colors duration-300">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  <figcaption className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-montserrat font-semibold text-charcoal">{item.title}</h5>
                        <p className="font-lato text-xs text-gray-500 mt-1">
                          <User className="inline h-3 w-3 mr-1" />
                          {item.photographer} • {item.campaign}
                        </p>
                      </div>
                      <div className="font-lato text-xs text-gray-400">{item.year}</div>
                    </div>
                  </figcaption>

                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-montserrat font-semibold text-deep-purple">
                    {item.impact.beneficiaries} helped
                  </div>
                </motion.figure>
              ))}
            </div>
          )}

          {layout === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((item, index) => (
                <motion.div 
                  key={item.id}
                  id={`grid-${item.id}`}
                  data-animate
                  initial={{ opacity: 0.7, scale: 0.9 }}
                  animate={{ 
                    opacity: isVisible[`grid-${item.id}`] ? 1 : 0.8,
                    scale: isVisible[`grid-${item.id}`] ? 1 : 0.9 
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group" 
                  onClick={() => setSelected(item)}
                >
                  {item.type === "image" ? (
                    <img src={item.img} alt={item.alt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="relative h-56">
                      <img src={item.poster} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3 group-hover:bg-warm-yellow/80 transition-colors duration-300">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    <h5 className="font-montserrat font-semibold text-charcoal">{item.title}</h5>
                    <p className="font-lato text-xs text-gray-500 mt-1">
                      <User className="inline h-3 w-3 mr-1" />
                      {item.photographer} • {item.campaign}
                    </p>
                    <div className="mt-2 text-xs text-warm-yellow font-montserrat font-semibold">
                      {item.impact.beneficiaries} people helped
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {layout === "timeline" && (
            <div className="space-y-8">
              {visible.sort((a,b) => b.year - a.year).map((item, index) => (
                <motion.div 
                  key={item.id}
                  id={`timeline-${item.id}`}
                  data-animate
                  initial={{ opacity: 0.8, x: -30 }}
                  animate={{ 
                    opacity: isVisible[`timeline-${item.id}`] ? 1 : 0.3,
                    x: isVisible[`timeline-${item.id}`] ? 0 : -30 
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-center"
                >
                  <div className="w-20 hidden md:block">
                    <div className="font-montserrat font-bold text-lg text-deep-purple">{item.year}</div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group" onClick={() => setSelected(item)}>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {item.type === "image" ? (
                        <img src={item.img} alt={item.alt} className="w-full h-48 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="relative">
                          <img src={item.poster} alt={item.alt} className="w-full h-48 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/50 rounded-full p-2">
                              <Play className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="p-6 md:col-span-2">
                        <h5 className="font-montserrat font-semibold text-lg text-charcoal">{item.title}</h5>
                        <p className="font-lato text-gray-600 mt-2">{item.impact.story}</p>
                        <div className="flex items-center justify-between mt-4">
                          <p className="font-lato text-xs text-gray-500">
                            <User className="inline h-3 w-3 mr-1" />
                            {item.photographer} • {item.campaign}
                          </p>
                          <div className="text-sm font-montserrat font-semibold text-warm-yellow">
                            {item.impact.beneficiaries} helped
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="font-lato text-gray-600">
            Showing {visible.length} of {sampleData.length} stories
          </p>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-80 lg:h-full bg-black relative">
                {selected && selected.type === "image" ? (
                <img src={selected.img} alt={selected.alt} className="w-full h-full object-cover" />
                ) : (
                selected && (
                  <video controls className="w-full h-full object-contain" src={selected.video} poster={selected.poster} />
                )
                )}
                <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                <span className="bg-warm-yellow text-deep-purple px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                  {selected?.campaign}
                </span>
                <span className="text-gray-500 font-lato text-sm">{selected?.year}</span>
                </div>

                <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-2">{selected?.title}</h3>
                <p className="font-lato text-sm text-gray-600 mb-6">
                <User className="inline h-4 w-4 mr-1" />
                Photo by {selected?.photographer}
                </p>

                <div className="mb-6">
                <p className="font-lato text-gray-700 leading-relaxed">{selected?.impact.story}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-cream rounded-lg p-4 text-center">
                  <div className="text-2xl font-montserrat font-bold text-deep-purple">{selected?.impact.beneficiaries}</div>
                  <div className="font-lato text-xs text-gray-600">People Helped</div>
                </div>
                <div className="bg-cream rounded-lg p-4 text-center">
                  <div className="text-2xl font-montserrat font-bold text-earth-green">100%</div>
                  <div className="font-lato text-xs text-gray-600">Success Rate</div>
                </div>
                </div>

                <div className="flex gap-3">
                <a 
                  href="/donate-options" 
                  className="flex-1 bg-deep-purple text-white px-6 py-3 rounded-lg font-montserrat font-semibold text-center hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Support This Cause
                </a>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}