
export type GalleryPhoto = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export type GalleryVideo = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "School Moments",
    category: "Campus",
    image:
      "https://www.centralacademysaraiinayatprayagraj.com/admin/uploads/WhatsApp%20Image%202026-07-21%20at%202.14.27%20AM%20%281%29.jpeg",
  },
  {
    id: 2,
    title: "Memorable Moments",
    category: "Events",
    image:
      "https://www.centralacademysaraiinayatprayagraj.com/admin/uploads/WhatsApp%20Image%202026-06-22%20at%209.56.11%20PM%20%2814%29.jpeg",
  },
  {
    id: 3,
    title: "Life at Central Academy",
    category: "Activities",
    image:
      "https://www.centralacademysaraiinayatprayagraj.com/admin/uploads/WhatsApp%20Image%202026-05-05%20at%2012.50.55%20AM%20%282%29.jpeg",
  },
  {
    id: 4,
    title: "Together We Learn",
    category: "School Life",
    image:
      "https://www.centralacademysaraiinayatprayagraj.com/admin/uploads/WhatsApp%20Image%202026-05-05%20at%2012.50.57%20AM%20%282%29.jpeg",
  },
];

export const galleryVideos: GalleryVideo[] = [];
