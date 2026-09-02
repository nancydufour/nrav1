/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_UK_HERO_VIDEO_URL: string;
  readonly VITE_UK_GALLERY_IMAGE_1_URL: string;
  readonly VITE_UK_GALLERY_IMAGE_2_URL: string;
  readonly VITE_UK_GALLERY_VIDEO_1_URL: string;
  readonly VITE_UK_GALLERY_VIDEO_2_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
