import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// ✅ Vite handles this perfectly with import
import whitepaper from "/whitepaper.pdf";

const WhitepaperIymra = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="min-h-screen bg-white px-4 py-8">
            <div className="max-w-6xl mx-auto shadow-xl rounded-2xl overflow-hidden border border-gray-200">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={whitepaper} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
        </div>
    );
};

export default WhitepaperIymra;