## SunCityLA Solar Panel Project
## Table of Contents

* [Overview](#overview)
* [Our Mission](#Our-Mission)
* [Visual App Representation](#Visual-App-Representation)
* [Project Stack Set Up](#Project-Stack-Set-Up)
* [Team Project Documentation](#Team-Project-Documentation)
* [Our Amazing Team](#Our-Amazing-Team)
* [Installation](#installation)

## Overview
Solar Panels are aiming to provide sustainable, renewable energy by installing solar PV systems in a designated area, whether it is residential, commercial, or industrial. The system will capture sunlight through photovoltaic cells, convert it into electrical energy, and either supply power to the building or feed it into the electrical grid.

SunCityLA project is a full-stack application, designed to support residents, in one hand, to schedule/manage their appointments and City Hall Employees, in another hand, to manage/plan visits effectively and in a timely manner. The  residents can submit requests using preferred times and validated addresses,also allowing to receive notifications regarding their appointments. 
The app includes an admin interface for authorized City Hall Employees to view as well as resident interface, to plan visit schedules.

## Our Mission 
SunCityLA project is centered around promoting sustainable energy solutions by harnessing the power of the sun to reduce environmental impact, provide affordable electricity, and contribute to global energy independence. Also Support Economic Growth, Foster Technological Innovation, Encourage Environmental Responsibility, Promote Energy Security, and Inspire Future Generations! 

**Visual App Representation** 

![Screen 1](https://github.com/user-attachments/assets/e2308e3a-cbb2-43f8-b47e-bccb5e458103)
![Screen 2](https://github.com/user-attachments/assets/9a06fec0-ef94-4db6-b2d4-78bde358d4a0)
![Screen 4](https://github.com/user-attachments/assets/6cf2c200-7a5f-4080-b897-2e62b84ce98b)
![Screen 5](https://github.com/user-attachments/assets/d0e52dd8-14e8-4491-b50f-359aeec6c286)
![Screen 6](https://github.com/user-attachments/assets/e65420a4-b5be-428b-be19-9bd072c04291)
![Screen 6](https://github.com/user-attachments/assets/1e0ac834-47cb-464e-95fb-36882de026d8)








## Project Stack Set Up:
This Full-Stack app with both frontend and backend components built with NextJS, using the following:

**Framework-** Next.js(with TypeScript),Tailwind CSS, React Hook Form

**UI library-** Shadcn

**GitHub Authentication-** NextAuth.js

**Database-** Postgres
 
**Deployment Cloud-** Vercel

**Wireframe-** Figma Design

**Project Management Tool-** GitHub Projects, Google Drive

**Team Communication Tools-** Discord Channels, Google Meet


## Team Project Documentation:

**Chingu Product Backlog-** [Click here](https://github.com/orgs/chingu-voyages/projects/277/views/1)

**Google Product Backlog-** [Click here](https://docs.google.com/document/d/1KYfGvCHYQ9AB2acP4Q80EEOivD5hVsxkwRixL91ZFto/edit?tab=t.0)

**GitHub Repo:** [Click here](https://github.com/chingu-voyages/v52-tier3-team-35)

**Link for the App-** [Click here](https://v52-tier3-team-35-v8ru.vercel.app/)
           

## Our Amazing Team:

- Isslem Ouederni #1: [GitHub](https://github.com/EslemOuederni) / [LinkedIn](https://www.linkedin.com/in/isslem-ouederni-858a13182/)
- Mariana Farcas #2: [GitHub](https://github.com/MarianaFarcas) / [LinkedIn](https://linkedin.com/in/mariana-f-6592661b5) ...
- Abdulsamad Yusuf #3 : [GitHub](https://github.com/samad13) / [LinkedIn](www.linkedin.com/in/abdulsamad-yusuf-ba0064178)
- Anna Veselova #4: [GitHub](https://github.com/AnyaVeselova) / [LinkedIn](https://www.linkedin.com/in/anna-veselova-3640752a0/)
- Albert Ngodi #5: [GitHub](https://github.com/ngodi) / [LinkedIn](https://linkedin.com/in/albertngodi)
- Fouad Tabbara #6: - [GitHub](https://github.com/fmtabbara) 🥷

---

# Installation
Here's an updated and structured version of the README file with a **Setup Instructions** section that incorporates the steps shared by the developer:

## Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Prisma](https://www.prisma.io/) CLI (optional)

## Getting Started

Follow these steps to set up and run the application locally:

1. **Clone the Repository**  
   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/chingu-voyages/v52-tier3-team-35.git
   cd suncityla

2. **Create a .env File**  
   Inside the project root directory, create a .env file and add the following configuration:  

   ```env
   DATABASE_URL=<databse_url>
   NEXTAUTH_SECRET=<your-secret>
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=<your-github-id>
   GITHUB_SECRET=<your-github-secret>
   ```

   Make sure to create a github oath keys. You can follow this [guide](https://authjs.dev/guides/configuring-github) for more details.

3. **Install Dependencies**  
   Install the required dependencies using your preferred package manager:

   ```bash
   npm install
   # or
   pnpm install
   ```

4. **Update Prisma**  
   Run the Prisma commands to set up the database schema:

   ```bash
   npm run prisma:update
   ```

5. **Start the Development Server**  
   Start the application locally:

   ```bash
   npm run dev
   ```

6. **Access the Application**  
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

7. **Test Navigation**  
   Verify the application by accessing the following links:
   * /admins
   * /bookings``
  
     **Special Thanks to Chingu platform for making this project happened!**
