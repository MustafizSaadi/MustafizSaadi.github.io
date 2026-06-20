export default function Publications() {
  return (
    <main id="main" className="w-full flex flex-grow flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8" aria-label="Content">
      <article className="max-w-4xl mx-auto bg-[#161616] rounded-2xl border border-gray-800/60 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-10">
          {/* Page Header */}
          <header className="border-b border-gray-800 pb-6 mb-8">
            <h1 id="page-title" className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Publications
            </h1>
          </header>

          
          <div className="page-content text-base leading-relaxed text-gray-400">
            <p>
              M. Rahman, M. A. Alam, M. M. Islam, I. Rahman, M. M. Khan and T. Iqbal, 
              “An Adaptive Agent-Specific Sub-Optimal Bounding Approach for Multi-Agent Path Finding,” 
              in IEEE Access, vol. 10, pp. 22226-22237, 2022.{' '}
              <a 
                href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=9712279" 
                className="font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                [pdf]
              </a>
            </p>

            <p className="mt-4">
              <strong>
                <a 
                  href="https://youtu.be/EfwXK4c4JnU" 
                  className="inline-flex items-center font-semibold text-red-600 hover:text-red-800 hover:underline transition-colors"
                >
                  Demonstration
                </a>
              </strong>
            </p>
          </div>
        </div>
      </article>      
    </main>
  );
};