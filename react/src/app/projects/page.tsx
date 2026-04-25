export default function Projects() {
  return (
    <main className="p-8">
      <h3>Undergraduate Thesis</h3>
      <p><strong>Speeding up Sub-Optimal Multi-Agent Path Finding Algorithms</strong><br />
      <em>Undergraduate Thesis, 2020-21</em></p>
      <p><strong>Description:</strong> A research work to improve the state-of-the-art Sub-Optimal Multi-Agent Path Finding (MAPF) algorithms, namely, Priority Inheritance with Backtracking (PIBT) and Enhanced Conflict Based Search (ECBS). To improve the runtime of PIBT, a Shortest Distance Vector is utilized which stores the cost of the conflict-free shortest path among the agents. Besides, an adaptive agent-specific sub-optimal bounding approach, called ASB-ECBS is utilized to reduce the runtime of ECBS, which assigns sub-optimal bound to each agent considering the total number of conflicts occurring with other agents. The improvements were tested on benchmark maps both qualitatively and quantitively and they were found to be reducing the runtime of the Sub-Optimal MAPF algorithms without compromising the solution quality.<br />
      <strong>Domain:</strong> Multi-Agent Systems, Path Finding Algorithms<br />
      <strong>Group Member</strong> Md. Ahasanul Alam <br />
      <strong>Supervisor:</strong> Dr. Ismat Rahman, Associate Professor, CSE, University of Dhaka</p>

      <h3>Personal Project</h3>
      <p><strong>Gallery Application</strong></p>
      <p>A desktop application that helps the user to upload an image from a local drive, download an image from google drive, and capture an image from the attached camera. The user can also create albums and see the image from the corresponding album. Users can also resize, crop, brighten, and sharpen the image.</p>
      <ul>
        <li>Language(s): C++, QML</li>
        <li>Framework(s): Qt</li>
        <li>Database: SQLite</li>
        <li>Responsibility(s): Design and development of the application</li>
      </ul>

      <p><strong>Devices & Services Manager App</strong></p>
      <p>A desktop application based on Windows OS to manage all the devices and services that are installed in the machine. A user can enable/disable any device and also the applications responses with the pluging/unpluging of devices. In addition to that, a user can mark a service for auto-restart whenever the marked service stops. Moreover, through a status bar, the user is notified whenever any operation takes place in the application.</p>
      <ul>
        <li>Language(s): C++, QML</li>
        <li>Framework(s): Qt</li>
        <li>Misc: Windows APIs</li>
        <li>Responsibility(s): Design and development of the application</li>
      </ul>

      <p><strong>Todo Management App</strong></p>
      <p>A web application for managing todo lists. A user can add/update/delete todo lists.</p>
      <ul>
        <li>Language(s): Typescript</li>
        <li>Framework(s): React</li>
      </ul>
    </main>
  );
}