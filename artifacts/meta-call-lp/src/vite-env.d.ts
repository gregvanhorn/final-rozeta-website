/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JOTFORM_URL?: string;
  readonly VITE_VSL_URL?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_GTAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};
