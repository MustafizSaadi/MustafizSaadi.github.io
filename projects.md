---
layout: page
title:  "Projects"
permalink: /projects/
---
<h3> Undergraduate Thesis </h3>

**Speeding up Sub-Optimal Multi-Agent Path Finding Algorithms**  
*Undergraduate Thesis, 2020-21*

**Description:** A research work to improve the state-of-the-art Sub-Optimal Multi-Agent Path Finding (MAPF) algorithms, namely, Priority
Inheritance with Backtracking (PIBT) and Enhanced Conflict Based Search (ECBS). To improve the runtime of PIBT, a Shortest Distance Vector is utilized which stores the cost of the conflict-
free shortest path among the agents. Besides, an adaptive agent-specific sub-optimal bounding approach, called ASB-ECBS is utilized to reduce the runtime
of ECBS, which assigns sub-optimal bound to each agent considering the total number of conflicts occurring
with other agents. The improvements were tested on benchmark maps both qualitatively and quantitively and they were found to
be reducing the runtime of the Sub-Optimal MAPF algorithms without compromising the solution quality.  
**Domain:** Multi-Agent Systems, Path Finding Algorithms  
**Group Member** Md. Ahasanul Alam <br>
**Supervisor:** Dr. Ismat Rahman, Associate Professor, CSE, University of Dhaka  


<h3> Personal Project </h3>

**[Gallery Application]**  

A desktop application that helps the user to upload an image from a local drive, download an image from google drive, and capture an image from the attached camera. The user can also create albums and see the image from the corresponding album. Users can also resize, crop, brighten, and sharpen the image.
<ul>
    <li>Language(s): C++, QML </li>
    <li>Framework(s): Qt</li>
    <li>Database: SQLite</li>
    <li>Responsibility(s): Design and development of the application</li>
</ul>

**[Devices & Services Manager App](https://shorturl.at/pSYZ6)**  

A desktop application based on Windows OS to manage all the devices and services that are installed in the machine. A user can enable/disable any device and also the applications responses with the pluging/unpluging of devices. In addition to that, a user can mark a service for auto-restart whenever the marked service stops.
Moreover, through a status bar, the user is notified whenever any operation takes place in the application. 
<ul>
    <li>Language(s): C++, QML </li>
    <li>Framework(s): Qt</li>
    <li>Misc: Windows APIs</li>
    <li>Responsibility(s): Design and development of the application</li>
</ul>

**[Todo Management App](https://github.com/MustafizSaadi/Todo-Management)**  

A web application for managing todo lists. A user can add/update/delete todo lists.
<ul>
    <li>Language(s): Typescript </li>
    <li>Framework(s): React</li>
    <li>Responsibility(s): Design and development of the application</li>
</ul>

**[Flower Store]**  

A web application for a flower store. Seller can display all the available flowers and items for sell. A user can add the flowers/items to cart. A user can also update/delete the carts and eventually can also buy the items.
<ul>
    <li>Language(s): Typescript </li>
    <li>Framework(s): NodeJS, React</li>
    <li>Misc: Sequelize, PostgreSql</li>
    <li>Responsibility(s): Design and development of the application</li>
</ul>

**[Rent-A-Car Backend]**  

Created backend of a Rent-A-Car web application. Admin users can login and place order for cars for specific dates if the cars are available. Users will receive emails for order placement and gets reminder for order at the booking day.
<ul>
    <li>Language(s): Typescript </li>
    <li>Framework(s): NodeJS</li>
    <li>Misc: Sequelize, PostgreSql</li>
    <li>Responsibility(s): Database design and development of the backend application</li>
</ul>

**[Gradio Spreadsheet Component](https://huggingface.co/spaces/Mustafiz996/gradio_spreadsheetcomponent)**

Developed a custom Gradio (Python library) component for answering questions about spreadsheets using the Google TAPAS model. This library can be added as a UI component in python applications. Utilizing the component, a user can upload any excel file and ask any question about that. The library will answer the question.

<ul>
    <li>Language(s): Python </li>
    <li>Library(s): Gradio</li>
    <li>Misc: Google Tapas Model</li>
    <li>Responsibility(s): Design and development of the library</li>
</ul>

**[DevOps Activities]**  

Deployment of a dockerized wordpress application in kubernetes infrustructure with Redis cache and PostgreSql database. Integrated Datadog as a sidecar manner with the wordpress application to monitor the application centrally.
<ul>
    <li>Tools: Kubernetes, Docker, Datadog </li>
    <li>Responsibility(s): Design and development of the infrustructure. Deployment of the application and datadog monitoring tool</li>
</ul>

Created a Jenkins CI/CD pipeline for deploying a nodejs application utilizing helm and the application is exposed through ingress nginx. The nodejs application is dockerized and pushed to a dockerhub private registry. The image is pulled and deployed through helm from the private registry.
<ul>
    <li>Tools: Jenkins, Docker, Kubernetes, Helm </li>
    <li>Responsibility(s): Design and development of the CI/CD pipeline and the infrustructure. Deployment of the application and expose utilizing ingress nginx reverse proxy.</li>
</ul>

Provision AWS resources (ALB, VPC, Subnets, Security groups, and EC2) utilizing CloudFormation tools to host an apache server. Install and configure apache servers for dev and prod utilizing Chef. Create an AMI with the preconfigured apache utilizing packer.
<ul>
    <li>Tools: CloudFormation, Chef, Packer </li>
    <li>Responsibility(s): Design and development of the infrustructure. Expose apache server utilizing ALB.</li>
</ul>


<h3> Academic Projects </h3>

**[Du Doctor](https://github.com/tishat-ahasan/DU-Doctor)**  

A web platform for Dhaka university students and medical staff to communicate with each other.
<ul>
    <li>Language(s): Python, HTML, CSS, JS </li>
    <li>Framework(s): Django</li>
    <li>Database: SQLite</li>
    <li>Responsibility(s): Contributed to frontend design and backend development.</li>
</ul>

**[Object Distinguishing and arranging System](https://github.com/tishat-ahasan/10_22_microcontroller_project)**  

An automated machine is designed and constructed using Arduino and OpenCV library. This machine can detect and arrange the similar objects in a basket.
<ul>
    <li>Language(s): Python, C++ </li>
    <li>Framework(s): Arduino, OpenCV</li>
    <li>Responsibility(s): Contributed to hardware design and software development of the machine</li>
</ul>
[Demonstration](https://youtu.be/XIEZoDLEcUc)

**[MedAdvisor](https://github.com/MustafizSaadi/MedAdvisor4)**  

An android app that will help people to understand different kinds of diseases and their diagnosis and medication.
<ul>
    <li>Language(s): Java, XML </li>
    <li>Framework(s): Android Studio</li>
    <li>Database: Firebase</li>
    <li>Responsibility(s): Contributed to frontend design and backend development</li>
</ul>


**[Admission Help System](https://github.com/defender01/admissionHelpSystem)**  

A Desktop Application that helps undergrad admission seeking students to find information about different public universities. It also recommends suitable public universities to students according to their information.
<ul>
    <li>Language(s): Java </li>
    <li>Framework(s): Java Swing</li>
    <li>Responsibility(s): Design and development of the software</li>
</ul>
