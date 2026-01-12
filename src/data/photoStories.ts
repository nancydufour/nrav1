export type Story = {
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

export const mediaData: Story[] = [
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
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited The Gbagada General Hospital in Lagos to extend love, care, and support. This is just the beginning of a story we can't wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
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
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited The Gbagada General Hospital in Lagos to extend love, care, and support. This is just the beginning of a story we can't wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
  },
  {
    id: 7,
    type: "video",
    title: "Odeda Local Government - Community Outreach",
    campaign: "Odeda Community Outreach",
    year: 2025,
    photographer: "Luyah Media",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1765704172/Village_2_Charity_dex4lx.mp4",
    alt: "Odeda Community Outreach at Abeokuta, Ogun State",
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited the Odeba local government community to extend love, care, and support. This is just the beginning of a story we can't wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
  },
  {
    id: 8,
    type: "video",
    title: "Abeokuta - Community Outreach",
    campaign: "Community Outreach",
    year: 2025,
    photographer: "Luyah Media",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1765704177/Village_1_Charity_vto08s.mp4",
    alt: "Community outreach at Abeokuta, Ogun State",
    impact: { beneficiaries: 450, story: "The Need Relief Africa team, by H.E.R Foundation, visited The Gbagada General Hospital in Lagos to extend love, care, and support. This is just the beginning of a story we can't wait to share — stay tuned as we reveal more about this heartfelt visit and the impact we hope to create. " },
  },
  {
    id: 9,
    type: "video",
    title: "Igbeti - Community Outreach",
    campaign: "Community Outreach",
    year: 2025,
    photographer: "Needy Relief Africa",
    poster: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1768251404/igbeti_community_outreach_hjlciz.jpg",
    video: "https://res.cloudinary.com/drnwxb8cm/video/upload/v1768161238/NRA1_v9lpgn.mp4",
    alt: "Community outreach",
    impact: { beneficiaries: 200, story: "The Igbeti Community Medical Outreach, organised by Needy Relief Africa, was a highly impactful healthcare initiative aimed at improving access to quality medical services for residents of Igbeti and its surrounding communities. The outreach was thoughtfully designed to address critical healthcare needs, reduce barriers to medical access, and promote healthier living within the community." },
  },
];
