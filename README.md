# RORY MCDANIEL  
Frederick, MD · 864-221-2405 · rory@rorymcdaniel.info  
[https://www.linkedin.com/in/rory-mcdaniel](https://www.linkedin.com/in/rory-mcdaniel)

**Senior Software Engineer · I Fix Things That Need Fixing**  

---

## EXPERIENCE  

### Headspace – Senior Software Engineer  
**September 2022 – Present**  
SME and lead contributor on clinical scheduling systems, driving refactors and DevEx improvements across the organization.

- Successfully completed a refactor of a search operation serving clinical scheduling systems across Headspace's cloud infrastructure, with equal parts focus on maintainability and performance. Reduced the median response time from 4.5s to 1s and the P95 from 15s to 2.5s, optimizing high-traffic systems deployed across multiple ECS Fargate instances. 
- Led a full redesign of authentication for secure clinical notes, replacing a cumbersome GraphQL-based 2FA system with Okta-integrated JWTs. Introduced JWT minting at the GraphQL gateway layer and downstream verification with AWS KMS, eliminating user friction and enabling a seamless, secure login flow. Rolled out the system to 100% of clinicians on time, resolving daily login issues and improving usability.  
- Led the team that created the official Django Conventions guide for Headspace, a comprehensive coding standards initiative designed to improve developer productivity across the engineering organization. Recruited team members, assigned action items, and solicited feedback from staff+ engineers and leadership to ensure the guide meets organizational needs and is positioned for successful adoption. 
- Contributed to the design and implementation of async job queues for e-prescription data migration between platforms, building a distributed system that processed sensitive records across multiple services. Ensured high accuracy of sensitive records and completed the project on time before vendor contract expiration.  
- Leading an initiative to improve developer experience through internal tools and workflows, including shared PyCharm run configs and AWS-aware scripting for local development. Built an automated onboarding script that installs necessary tooling (Homebrew, Node.js, AWS CLI, Docker) and provides clear guidance for manual steps, reducing onboarding time from hours/days to minutes. Improved local Docker Compose database import time from 6 hours to 30 minutes.   

### Red Ventures – Senior Software Engineer  
**November 2021 – September 2022**  
Modernized high-traffic financial APIs and led internal platform improvements to boost developer velocity.

- Modernized legacy Laravel APIs and decoupled frontend logic to improve maintainability and testability across high-traffic lead processing systems handling thousands of mortgage applications daily.  
- Built internal tooling using Lando to standardize local development environments across projects, significantly reducing onboarding time and setup inconsistencies.  
- Introduced a headless CMS to decouple content management from deployment cycles, reducing developer involvement in content updates and accelerating marketing turnaround.  
- Built and iterated on Datadog dashboards and alerting to improve real-time visibility into app health, enabling faster diagnosis of latency issues and system errors.  
- Integrated AWS Textract to automate file parsing and improve the reliability of document-based workflows.  

### RE/MAX – Senior Software Engineer / Scrum Master  
**June 2020 – November 2021**  
Led platform modernization and CI/CD automation while serving dual roles as backend engineer and scrum master.

- Led infrastructure modernization by migrating legacy codebases to new Laravel APIs with CI/CD pipelines and test automation.  
- Delivered a customer-facing marketing portal (Laravel + Vue), improving usability and performance.  
- Migrated CMS to Prismic, enabling multilingual content editing and decoupling content from deployments.  
- Extracted a focused microservice from a large monolithic API system, building the complete infrastructure (CI/CD pipelines, deployment automation, coding standards) needed to support reliable, independent service deployment.  
- Facilitated Agile ceremonies and process improvements as Scrum Master while actively contributing as a full-time developer.  
- Mentored teammates and coordinated closely with leadership during a six-month management gap.  

### Bright Oak – Lead Engineer  
**June 2011 – August 2020** *(Part-time 2011–2015, Full-time 2015–2020)*  
Fostered engineering maturity as the sole technical lead at a digital agency, delivering custom full-stack solutions.  

- Introduced Laravel and transitioned legacy projects from procedural PHP and WordPress to MVC architecture.  
- Built CI/CD pipelines using Git, Laravel Envoyer, and other tooling to automate deployments and enforce coding standards.  
- Led architecture and implementation of multi-tenant lead dashboards, headless CMS platforms, and third-party integrations (e.g., Salesforce, QuickBooks), building distributed systems that served multiple client organizations simultaneously.
- Built serverless infrastructure with Laravel Vapor and AWS Lambda for scalable delivery, demonstrating cloud-native architecture expertise.
- Developed automated product import system processing thousands of XML records daily using Redis-backed job queues and SOAP APIs, demonstrating experience with large-scale data processing and distributed job systems.
- Built real-time interactive sales tools utilizing AWS Lambda, WebSocket connections, and third-party API integrations (Salesforce, Google OAuth, Hellosign), showcasing full-stack distributed application development.  
- Mentored a distributed engineering team across time zones, improving code quality and consistency by championing evolving technical standards and tooling practices.  
- Scoped and delivered full-stack solutions on compressed timelines, balancing client requirements with technical feasibility to ensure timely, high-quality delivery.  
- Built serverless infrastructure with Laravel Vapor and AWS Lambda for scalable delivery.  

### Early Career: Educator Turned Engineer  
Before becoming a full-time engineer, I spent over a decade teaching music and technology in Title I schools, where I learned to break down complex ideas for diverse learners and lead technology adoption initiatives. I began coding to automate grading and administrative tasks — a path that sparked a career-long passion for building systems that empower others.

- Built custom Python tooling to automate student feedback and grade syncing.  
- Led school-wide 1:1 Chromebook deployment and trained faculty on educational tech, managing the deployment of hundreds of devices across multiple campuses and implementing centralized management systems.  
- Developed communication and mentorship skills now used to lead cross-functional teams and onboard engineers.  

---

## EDUCATION  

**Master of Education, Instrumental Music Education**  
Auburn University, Auburn, AL · August 2005  

**Bachelor of Science, Music Education**  
Bob Jones University, Greenville, SC · December 1999  

## TECHNOLOGIES

Python and Django are my day-to-day right now, but I’ve worked with everything on this list and can jump back into any of it without much ramp-up. I’m also a lifelong learner, and I genuinely enjoy adding to this list.

**Languages:** Python, TypeScript, PHP, JavaScript, SQL  
**Frameworks:** Django, Laravel, Vue.js, Node.js, Express  
**Tools & Platforms:** Docker, AWS (Lambda, ECS, RDS, S3, CloudFormation), GitHub Actions, Okta, Datadog, Prismic, Lando, Laravel Vapor, Redis, WebSockets  
**Testing & QA:** Pytest, PHPUnit, Cypress, Postman  
**Databases:** PostgreSQL, MySQL, DynamoDB, Redis  
**DevOps:** CI/CD, Docker Compose, GitHub Workflows, Laravel Envoyer  
**APIs:** REST, GraphQL, JSON API
