import { FileText, Award } from 'lucide-react';
export default function Resume() {
  return (
    <main id="main" className="w-full flex flex-grow flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8" aria-label="Content">
      <div className="max-w-4xl w-full flex flex-col items-center gap-6">  
        {/* Academic CV Card */}
        <div className="w-full max-w-2xl bg-[#1c1c1e] rounded-2xl hover:border-gray-700/80 transition-colors duration-300 border border-gray-800/80 p-6 flex flex-col justify-between">
          <div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg w-fit mb-4">
              <Award size={24} />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white text-gray-900 mb-2">Academic CV</h2>
            <p className="text-gray-500 text-sm mb-6">
              A comprehensive overview of my academic background, publications, research experience, and teaching history.
            </p>
          </div>
          <a 
            href="https://rb.gy/oi4l22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 block"
          >
            View CV
          </a>
        </div>

        {/* Resume Card */}
        <div className="w-full max-w-2xl bg-[#1c1c1e] rounded-2xl hover:border-gray-700/80 transition-colors duration-300 border border-gray-800/80 p-6 flex flex-col justify-between">
          <div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg w-fit mb-4">
              <FileText size={24} />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-2">Resume</h2>
            <p className="text-gray-500 text-sm mb-6">
              A concise summary of my professional work experience, technical skills, and key industry achievements.
            </p>
          </div>
          <a 
            href="https://rb.gy/49dvp9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 block"
          >
            View Resume
          </a>
        </div>

      </div>
    </main>
  );
}