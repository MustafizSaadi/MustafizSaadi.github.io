import React from 'react';

export default function OnlineCertificates() {
  // Organizing data into a clean array for better maintainability
  const certificates = [
    { name: "Terraform Associate Certification: HashiCorp Certified", url: "https://learn.kodekloud.com/certificate/6ed03970-e334-49d3-812e-49fd95616ef2" },
    { name: "AWS - IAM", url: "https://learn.kodekloud.com/certificate/c0cea11e-1d16-4a03-8dd7-58b86ff770e5" },
    { name: "AWS CodePipeline (CI/CD Pipeline)", url: "https://learn.kodekloud.com/certificate/5b182fe2-d59c-4820-b11f-6b87262135e4" },
    { name: "GCP Cloud Digital Leader Certification", url: "https://learn.kodekloud.com/certificate/1253474f-9c20-46b1-b684-86a186773601" },
    { name: "Helm for Beginners", url: "https://learn.kodekloud.com/certificate/7c0252e3-efd4-44f8-b2f9-9caf734e88a8" },
    { name: "AI Agents Fundamentals", url: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Mustafiz996/2025-03-05.png" },
    { name: "OWASP TOP 10", url: "https://drive.google.com/file/d/1_IS1c6IvCizmv6f_LmxJgOOYNN6DzXaY/view?usp=sharing" },
    { name: "AWS Lambda", url: "https://learn.kodekloud.com/certificate/dd66e425-92c3-4edd-b002-932c6305c233" },
    { name: "Datadog-101: Site Reliability Engineer", url: "https://learn.datadoghq.com/certificates/4wjzkhjbm3" },
    { name: "Datadog Foundation", url: "https://learn.datadoghq.com/certificates/gqj6mnkeah" },
    { name: "Jenkins", url: "https://learn.kodekloud.com/certificate/37a422e4-5871-4d5c-a0ee-86ec10bdd317" },
    { name: "CKA Certification Course - Certified Kubernetes Administrator", url: "https://learn.kodekloud.com/certificate/44ad6341-5c42-4c28-9114-ca15edfeb4da" },
    { name: "Docker Training Course for the Absolute Beginner", url: "https://learn.kodekloud.com/certificate/31032823-0209-4497-8ccb-dfe185192d7c" },
    { name: "Design Patterns", url: "https://www.coursera.org/account/accomplishments/verify/YMZN45BVC6WC" },
    { name: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization", url: "https://coursera.org/share/2be4018a56bea5841e5511acb4ceb721" },
    { name: "Neural Networks and Deep Learning!", url: "https://coursera.org/share/03600cb67d27c2cd45af7d7ec10a08f5" },
    { name: "Machine Learning by Stanford University", url: "https://coursera.org/share/ce61007c466d9812ea47aec7bdc70381" },
    { name: "SQL Intermediate", url: "https://www.hackerrank.com/certificates/b39b39857b41" },
    { name: "SQL Basic", url: "https://www.hackerrank.com/certificates/4af164295b9e" },
  ];

  return (
    <main id="main" className="w-full flex flex-grow flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8" aria-label="Content">
      {/* - Width increased to w-[600px] to accommodate longer names nicely.
        - Height is completely auto (no bounds) to let the page scroll.
      */}
      <div className="w-full max-w-[600px] h-auto rounded-xl bg-[#161616] p-8 md:p-10 border border-gray-800 shadow-2xl">
        <header className="mb-8 border-b border-gray-800 pb-5">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Online Certificates
          </h1>
        </header>

        {/* - gap-5 creates wider spacing between items
          - Removed overflow bounds entirely
        */}
        <div className="flex flex-col gap-5">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group flex items-start space-x-3 text-base leading-relaxed text-gray-400 hover:text-white transition-colors duration-200"
            >
              {/* Enlarged diamond marker slightly */}
              <span className="text-blue-500 mt-1 select-none text-xs">❖</span>
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-left font-medium tracking-wide"
              >
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}