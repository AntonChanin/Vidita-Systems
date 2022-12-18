/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_CANCEL: string
    readonly VITE_API_ENDPOINT_1: string;
    readonly VITE_API_ENDPOINT_2: string;
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}