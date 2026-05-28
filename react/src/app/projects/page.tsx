export default function Projects() {
  return (
    <main id="main" className="w-full py-12 px-4 sm:px-6 lg:px-8" aria-label="Content">
      <article className="max-w-4xl mx-auto bg-[#161616] rounded-2xl border border-gray-800/60 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-10">
          
          {/* Page Header */}
          <header className="border-b border-gray-800 pb-6 mb-8">
            <h1 id="page-title" className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Projects
            </h1>
          </header>

          {/* Page Content */}
          <div className="space-y-12">
            
            {/* --- SECTION 1: Undergraduate Thesis --- */}
            <section aria-labelledby="thesis-heading">
              <h2 id="thesis-heading" className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                Undergraduate Thesis
              </h2>
              <div className="bg-[#1c1c1e] p-6 rounded-xl border border-indigo-500/10 hover:border-indigo-500/20 transition-colors">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Speeding up Sub-Optimal Multi-Agent Path Finding Algorithms
                </h3>
                <p className="text-xs font-medium text-indigo-400 italic mt-1">
                  Undergraduate Thesis, 2020-21
                </p>
                
                <div className="mt-4 space-y-3 text-sm text-gray-400 leading-relaxed">
                  <p>
                    <strong className="text-gray-200 font-semibold block mb-1">Description:</strong> 
                    A research work to improve the state-of-the-art Sub-Optimal Multi-Agent Path Finding (MAPF) algorithms, namely, Priority Inheritance with Backtracking (PIBT) and Enhanced Conflict Based Search (ECBS). To improve the runtime of PIBT, a Shortest Distance Vector is utilized which stores the cost of the conflict-free shortest path among the agents. Besides, an adaptive agent-specific sub-optimal bounding approach, called ASB-ECBS is utilized to reduce the runtime of ECBS, which assigns sub-optimal bound to each agent considering the total number of conflicts occurring with other agents. The improvements were tested on benchmark maps both qualitatively and quantitively and they were found to be reducing the runtime of the Sub-Optimal MAPF algorithms without compromising the solution quality.
                  </p>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500 border-t border-gray-800/60 mt-4">
                    <p><strong className="text-gray-400 font-medium">Domain:</strong> Multi-Agent Systems, Path Finding Algorithms</p>
                    <p><strong className="text-gray-400 font-medium">Group Member:</strong> Md. Ahasanul Alam</p>
                    <p className="sm:col-span-2"><strong className="text-gray-400 font-medium">Supervisor:</strong> Dr. Ismat Rahman, Associate Professor, CSE, University of Dhaka</p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- SECTION 2: Personal Projects --- */}
            <section aria-labelledby="personal-heading">
              <h2 id="personal-heading" className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Personal Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* DevOps Section */}
                <div className="md:col-span-2 p-6 bg-[#111] text-gray-300 rounded-xl border border-gray-800 shadow-inner space-y-6">
                  <div className="border-b border-gray-800 pb-2">
                    <h3 className="text-base font-semibold text-emerald-400 tracking-wide">[DevOps Activities]</h3>
                  </div>

                  {/* DevOps Item 1 */}
                  <div className="text-sm space-y-2">
                    <p className="text-gray-400 leading-relaxed">
                      Deployment of a dockerized WordPress application in Kubernetes infrastructure with Redis cache and PostgreSQL database. Integrated Datadog as a sidecar manner with the WordPress application to monitor the application centrally.
                    </p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-emerald-500">Tools:</span> Kubernetes, Docker, Datadog</p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-400">Responsibilities:</span> Design and development of the infrastructure. Deployment of the application and Datadog monitoring tool.</p>
                  </div>

                  {/* DevOps Item 2 */}
                  <div className="text-sm space-y-2 pt-4 border-t border-gray-800/50">
                    <p className="text-gray-400 leading-relaxed">
                      Created a Jenkins CI/CD pipeline for deploying a NodeJS application utilizing Helm and the application is exposed through Ingress Nginx. The NodeJS application is dockerized and pushed to a Docker Hub private registry. The image is pulled and deployed through Helm from the private registry.
                    </p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-emerald-500">Tools:</span> Jenkins, Docker, Kubernetes, Helm</p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-400">Responsibilities:</span> Design and development of the CI/CD pipeline and the infrastructure. Deployment of the application and expose utilizing Ingress Nginx reverse proxy.</p>
                  </div>

                  {/* DevOps Item 3 */}
                  <div className="text-sm space-y-2 pt-4 border-t border-gray-800/50">
                    <p className="text-gray-400 leading-relaxed">
                      Provision AWS resources (ALB, VPC, Subnets, Security groups, and EC2) utilizing CloudFormation tools to host an Apache server. Install and configure Apache servers for dev and prod utilizing Chef. Create an AMI with the preconfigured Apache utilizing Packer.
                    </p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-emerald-500">Tools:</span> CloudFormation, Chef, Packer</p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-400">Responsibilities:</span> Design and development of the infrastructure. Expose Apache server utilizing ALB.</p>
                  </div>
                </div>

                {/* Gallery Application */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-white">[Gallery Application]</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      A desktop application that helps the user to upload an image from a local drive, download an image from google drive, and capture an image from the attached camera. The user can also create albums and see the image from the corresponding album.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> C++, QML, Qt, SQLite</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the application</div>
                  </div>
                </div>

                {/* Devices & Services Manager */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://shorturl.at/pSYZ6" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
                        Devices &amp; Services Manager App 
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      A desktop application based on Windows OS to manage all the devices and services that are installed in the machine. Features auto-restart monitors and contextual live notification behaviors.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> C++, QML, Qt, Windows APIs</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the application</div>
                  </div>
                </div>

                {/* Todo Management */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://github.com/MustafizSaadi/Todo-Management" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
                        Todo Management App
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      A web application for managing todo lists. A user can seamlessly add, update, and delete todo items asynchronously.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> TypeScript, React</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the application</div>
                  </div>
                </div>

                {/* Flower Store */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-white">[Flower Store]</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      A web application for an e-commerce flower store layout. Dynamic user carts, seller interface listings, and full balance operations.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> TypeScript, NodeJS, React, Sequelize, PostgreSQL</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the application</div>
                  </div>
                </div>

                {/* Rent-A-Car Backend */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-white">[Rent-A-Car Backend]</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      Engineered order assignment schedulers based on date matrices. Automated notification messaging queues via integrated transactional emails.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> TypeScript, NodeJS, Sequelize, PostgreSQL</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Database design and development of the backend application</div>
                  </div>
                </div>

                {/* Gradio Spreadsheet Component */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://huggingface.co/spaces/Mustafiz996/gradio_spreadsheetcomponent" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
                        Gradio Spreadsheet Component
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      Custom structural Python plugin utilizing Google TAPAS model for programmatic analysis, execution, and queries directly over spreadsheets.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> Python, Gradio, Google Tapas Model</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the library</div>
                  </div>
                </div>

              </div>
            </section>

            {/* --- SECTION 3: Academic Projects --- */}
            <section aria-labelledby="academic-heading">
              <h2 id="academic-heading" className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                Academic Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* DU Doctor */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://github.com/tishat-ahasan/DU-Doctor" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1">
                        DU Doctor
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      A web platform for Dhaka university students and medical staff to communicate with each other.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> Python, HTML, CSS, JS, Django, SQLite</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Contributed to frontend design and backend development.</div>
                  </div>
                </div>

                {/* Object Distinguishing System */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://github.com/tishat-ahasan/10_22_microcontroller_project" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1">
                        Object Distinguishing and arranging System
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      An automated machine is designed and constructed using Arduino and OpenCV library. This machine can detect and arrange the similar objects in a basket.
                    </p>
                    <div className="mt-3">
                      <a href="https://youtu.be/XIEZoDLEcUc" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded">
                        ▶ Demonstration Video
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> Python, C++, Arduino, OpenCV</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Contributed to hardware design and software development of the machine</div>
                  </div>
                </div>

                {/* MedAdvisor */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://github.com/MustafizSaadi/MedAdvisor4" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1">
                        MedAdvisor
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      An android app that will help people to understand different kinds of diseases and their diagnosis and medication.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> Java, XML, Android Studio, Firebase</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Contributed to frontend design and backend development</div>
                  </div>
                </div>

                {/* Admission Help System */}
                <div className="p-5 bg-[#1c1c1e] rounded-xl border border-gray-800/80 hover:border-gray-700/80 flex flex-col justify-between transition-colors">
                  <div>
                    <h3 className="text-base font-bold">
                      <a href="https://github.com/defender01/admissionHelpSystem" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1">
                        Admission Help System
                        <span className="text-xs text-gray-600">↗</span>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      A Desktop Application that helps undergrad admission seeking students to find information about different public universities. It also recommends suitable public universities to students according to their information.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800/60 text-xs text-gray-500 space-y-1">
                    <div><span className="font-medium text-gray-400">Stack:</span> Java, Java Swing</div>
                    <div><span className="font-medium text-gray-400">Role:</span> Design and development of the software</div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </article>
    </main>
  );
}