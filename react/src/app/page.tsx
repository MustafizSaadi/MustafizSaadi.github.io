const ProfilePage = () => {
  return (
    <div>

      {/* Header / Masthead */}
      <header className="text-center pt-12 pb-16">
        <div className="relative inline-block mb-6">
          <img 
            src="/assets/images/Mustafizur.png" 
            alt="Mustafizur Rahman" 
            className="w-32 h-32 rounded-full border-2 border-gray-700 mx-auto transition-transform hover:scale-105"
          />
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
          Mustafizur Rahman
        </h1>
        <p className="text-xl text-gray-400 font-light">DevOps Engineer</p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pb-20">
        <article className="prose prose-invert lg:prose-xl">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-800 pb-2">
            About me
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I am a Senior DevOps Engineer at{" "}
              <a href="https://www.enosisbd.com/" className="text-blue-400 hover:underline">
                Enosis Solutions
              </a>{" "}
              with over four years of prior experience in software development. This dual background 
              allows me to bring a unique perspective to the software development lifecycle, 
              focusing on building robust, scalable, and automated systems.
            </p>

            <p>
              I specialize in automating the software development lifecycle with CI/CD pipelines 
              including provisioning and configuring infrastructure utilizing IaC tools. My software 
              engineering background is in developing desktop applications with frameworks like 
              Qt, MFC, .NET, and Delphi, as well as web applications using .NET Core and ReactJS.
            </p>

            <p>
              I am driven to devising efficient solutions for complex problems, consistently meeting 
              project deadlines, and enthusiastically learning new technologies to stay ahead in a 
              dynamic industry.
            </p>

            <p>
              When I’m not working, I enjoy watching cricket and documentaries on history and politics.
            </p>
          </div>
        </article>
      </main>

    </div>
  );
};

export default ProfilePage;