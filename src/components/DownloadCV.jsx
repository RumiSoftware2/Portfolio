import { FileText } from 'lucide-react';

function DownloadCV() {
  return (
    <div className="w-full flex justify-center mt-12 mb-8">
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg"
      >
        <FileText className="w-6 h-6" />
        Ver mi CV (PDF)
      </a>
    </div>
  );
}

export default DownloadCV; 