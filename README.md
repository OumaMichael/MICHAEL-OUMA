<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Michael Ouma - Portfolio</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    /* Global Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background: #121212;
      color: #fff;
      line-height: 1.6;
      font-size: 18px; /* Increased base font size */
    }
    a {
      color: #1E90FF;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #63b3ed;
    }
    
    /* Navigation Bar */
    nav {
      background: #1a1a1a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    nav .logo a {
      font-size: 2rem; /* Increased for readability */
      font-weight: 2000;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }
    nav ul li a {
      font-weight: 800;
      font-size: 1.2rem;
    }
    
    /* Hero Section with Rain & Lightning Background */
    #home {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 120px 20px;
      /* Replace the technology image with your rain background */
      background: url('rain.402ac1f303abf9762d5a.png') no-repeat center center/cover;
      min-height: 100vh;
      z-index: 0;
    }
    #home::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* Lightning overlay image */
      background: url('lightining.3503a307e703e460c6ce.png') no-repeat center center/cover;
      opacity: 0;
      animation: lightning 8s linear infinite;
      z-index: 1;
    }
    @keyframes lightning {
      0%, 20%, 100% {
        opacity: 0;
      }
      21%, 23%, 24%, 40% {
        opacity: 1;
      }
    }
    #home h1 {
      position: relative;
      z-index: 2;
      font-size: 4rem; /* Increased font size */
      margin-bottom: 0.5rem;
    }
    #home p {
      position: relative;
      z-index: 2;
      font-size: 1.5rem; /* Increased font size */
      margin-bottom: 1rem;
    }
    
    /* Button Styling */
    .btn {
      position: relative;
      z-index: 2;
      display: inline-block;
      background: #007BFF; /* Strong blue color */
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 800;
      font-size: 1.2rem;
      transition: background 0.3s ease;
      margin-top: 1rem;
    }
    .btn:hover {
      background: #3399FF;
    }
    
    /* Sections */
    section {
      padding: 4rem 2rem;
    }
    section h2 {
      font-size: 3rem; /* Increased font size */
      margin-bottom: 1.5rem;
      text-align: center;
    }
    section h3 {
      font-size: 2rem; /* Increased font size */
      margin: 1.5rem 0 1rem;
    }
    section p {
      max-width: 800px;
      margin: 0 auto 1rem;
      text-align: center;
      font-size: 1.2rem; /* Increased font size */
    }
    
    /* Mission Section (replaces About Me) */
    #about .about-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      text-align: left;
    }
    #about .about-text {
      max-width: 800px;
    }
    
    /* Projects Section */
    #projects ul {
      max-width: 800px;
      margin: 2rem auto;
      list-style: none;
      padding: 0;
      font-size: 1.2rem; /* Increased font size */
    }
    #projects li {
      background: #1e1e1e;
      margin-bottom: 1rem;
      padding: 1.5rem;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    #projects li:hover {
      transform: translateY(-5px);
    }
    
    /* Project Gallery */
    .project-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .project-gallery img {
      width: 100%;
      border-radius: 8px;
    }
    
    /* Resume Section */
    #resume {
      background: #1a1a1a;
      padding: 4rem 2rem;
    }
    #resume .section-content {
      max-width: 900px;
      margin: 0 auto;
      text-align: left;
    }
    #resume ul {
      list-style-type: disc;
      margin-left: 2rem;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    #resume li {
      margin-bottom: 0.5rem;
    }
    
    /* Services Section */
    #services .service-content {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 1.2rem;
    }
    #services .service-item {
      background: #1a1a1a;
      padding: 1.5rem;
      border-radius: 8px;
    }
    #services .service-item h3 {
      margin-bottom: 0.5rem;
      text-align: left;
    }
    #services .service-item p {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    
    /* Contact Section */
    #contact p {
      text-align: center;
      margin: 0.5rem 0;
      font-size: 1.2rem;
    }
    
    /* Social Links under Contact */
    .social-links {
      text-align: center;
      margin-top: 1rem;
    }
    .social-links a {
      margin: 0 0.5rem;
    }
    .social-links img {
      width: 40px;
      height: 40px;
    }
    
    /* Footer */
    footer {
      background: #1a1a1a;
      text-align: center;
      padding: 1rem;
      font-size: 1rem;
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
      }
      nav ul {
        flex-direction: column;
        gap: 1rem;
      }
      #home h1 {
        font-size: 3rem;
      }
      #about .about-content,
      #services .service-content {
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div class="logo"><a href="#home">Michael Ouma</a></div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Mission</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  
  <!-- Hero Section with Download CV Button -->
  <section id="home">
    <h1>I'm Michael Ouma</h1>
    <p>Data Analyst | Statistician | Researcher</p>
    <a href="./CV1_4.pdf" download class="btn">Download CV</a>
  </section>
  
  <!-- Mission Section (replaces About Me) -->
  <section id="about">
    <h2>Mission</h2>
    <div class="about-content">
      <div class="about-text">
        <h3>Turning your data into insights</h3>
        <p>My name is Michael Ouma, a data scientist with a background in software engineering and a degree in Biostatistics.</p>
        <p>I work remotely as a freelance data scientist. Getting insights out of data is something that I really like. Data visualization and machine learning are some techniques that I am using to achieve this.</p>
        <p>I am a big open source believer since I think with sharing solutions we can achieve a lot more as a community. Therefore I prefer to use R and Python for my daily work.</p>
        <p>On my portfolio you can find some examples of my projects, most of them are interactive visualization.</p>
        <p>Have fun in browsing through the content and thank you for visiting!</p>
      </div>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>WFP Somalia:</strong> Conducted extensive data analysis to assess food security and humanitarian aid effectiveness.</li>
      <li><strong>Ugandan Women Cascade:</strong> Analyzed survey data to evaluate economic empowerment programs and their impact on women's financial stability.</li>
      <li><strong>Benin Market Vendor Study:</strong> Processed and visualized transaction data to understand market dynamics and vendor sales trends.</li>
    </ul>
    <!-- Project Gallery -->
    <div class="project-gallery">
      <img src="output1.png" alt="Project Output 1">
      <img src="output2.png" alt="Project Output 2">
      <img src="output3.png" alt="Project Output 3">
      <img src="output4.png" alt="Project Output 4">
      <img src="output5.png" alt="Project Output 5">
      <img src="output6.png" alt="Project Output 6">
      <img src="output7.png" alt="Project Output 7">
      <img src="output8.png" alt="Project Output 8">
      <img src="output9.png" alt="Project Output 9">
      <img src="output10.png" alt="Project Output 10">
      <img src="output11.png" alt="Project Output 11">
      <img src="output12.png" alt="Project Output 12">
    </div>
  </section>
  
  <!-- Resume Section -->
  <section id="resume">
    <div class="section-content">
      <h2>Resume</h2>
      <!-- Work Experience -->
      <div class="work-experience">
        <h3>Work Experience</h3>
        <div class="job">
          <h4>Data Analyst Consultant at Dalberg Research</h4>
          <p><em>Apr 2021 - Present, Two Rivers North Tower Lifestyle centre, Kenya</em></p>
          <ul>
            <li>Ensured the accuracy, completeness, and consistency of datasets by conducting thorough checks across various stages of the data lifecycle.</li>
            <li>Performed advanced data cleaning and statistical analysis using SPSS, R, Excel, and STATA to generate actionable insights.</li>
            <li>Accurately entered and managed data in platforms such as ODK and Excel, ensuring timely and efficient data processing.</li>
            <li>Conducted initial data coding to test and refine coding frameworks for open-ended responses and categorical variables.</li>
            <li>Compiled, reviewed, and categorized all open-ended responses for qualitative analysis.</li>
            <li>Authored comprehensive reports summarizing key findings, trends, and actionable recommendations for stakeholders.</li>
            <li>Developed and implemented automated quality control mechanisms to identify data inconsistencies and errors.</li>
            <li>Designed detailed codebooks to guide data coding and ensure uniformity in data interpretation.</li>
            <li>Created interactive and static data visualizations using Python Notebook, enabling stakeholders to easily interpret data insights.</li>
            <li>Developed and maintained a variety of reports, utilizing VLOOKUP, pivot tables, and other advanced Excel functions to streamline data summaries.</li>
            <li>Automated repetitive tasks and improved data processing efficiency by developing custom VBA Macros in Excel.</li>
          </ul>
        </div>
        <div class="job">
          <h4>Assistant Researcher at Kenya Industrial Research &amp; Development Institute</h4>
          <p><em>Jan 2020 - Apr 2022, Kisumu, Kenya</em></p>
          <ul>
            <li>Created questionnaire templates using Survey To Go and assisted in scripting questionnaires for data collection and processing.</li>
            <li>Collated, queried, and cleaned data from field sites by flagging inconsistencies and errors during routine checks.</li>
            <li>Performed various data manipulations, analyses, and generated reports and tables as required.</li>
            <li>Built daily progress reports for ongoing projects and reported to the Research Co-Coordinator.</li>
            <li>Cleaned and processed data from fieldwork using SPSS, generating meaningful custom tables.</li>
          </ul>
        </div>
        <div class="job">
          <h4>Junior Data Analyst at JKUATES</h4>
          <p><em>Jan 2020 - Apr 2022, Juja, Kenya</em></p>
          <ul>
            <li>Designed SQL queries to manage and retrieve data, improving overall data accessibility.</li>
            <li>Collaborated with the Data Science team to build predictive models, resulting in improved forecast accuracy for clients.</li>
            <li>Monitored and reported on data-related KPIs such as data accuracy rates, processing times, and project timelines.</li>
            <li>Implemented a data visualization solution using PowerBI for the sales team to understand sales trends.</li>
            <li>Pulled data from MySQL and Metabase and handled ETL processes to run models and support decision-making.</li>
          </ul>
        </div>
      </div>
      
      <!-- Education Background -->
      <div class="education">
        <h3>Education Background</h3>
        <ul>
          <li><strong>BSc. Biostatistics</strong> – JKUAT University (Sept 2020 to Apr 2024, Graduated)</li>
          <li><strong>Data Science with R</strong> – JKUATES (Jan 2021 to Apr 2021)</li>
          <li><strong>Data Science with Python</strong> – JKUATES (Jan 2021 to Apr 2021)</li>
          <li><strong>SQL</strong> – W3school (Jan 2024 to Apr 2024)</li>
          <li><strong>SPSS, STATA and Advanced Excel</strong> – Dalberg Research</li>
        </ul>
      </div>
      
      <!-- Skills -->
      <div class="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>Expertise in using Microsoft Excel</li>
          <li>Proficiency in statistical analysis tools and software (IBM SPSS, STATA)</li>
          <li>Proficiency in visualization tools (Microsoft Power BI)</li>
          <li>Programming skills in R and Python for data wrangling</li>
          <li>Good knowledge of SQL with experience in relational and NoSQL databases</li>
          <li>Ability to extract data from repositories such as data marts, warehouses, lakes, and pipelines</li>
          <li>Scripting questionnaires using Survey To Go and Survey Monkey</li>
        </ul>
        <h3>Functional Skills</h3>
        <ul>
          <li>Statistics: Analyze data, validate analysis, and identify logical errors</li>
          <li>Analytical: Research and interpret data to theorize and forecast trends</li>
          <li>Problem-solving: Develop solutions for complex challenges</li>
          <li>Probing: Identify and define core problem statements</li>
          <li>Data Visualization: Create clear visuals using Matplotlib and Plotly</li>
          <li>Project Management: Oversee processes, teams, and timelines effectively</li>
        </ul>
      </div>
      
      <!-- Achievements -->
      <div class="achievements">
        <h3>Achievements</h3>
        <p>Mentored junior associates in the Quality Control department at Dalberg Research, guiding statistical methodologies, data analysis techniques, and study designs to enhance research quality and productivity.</p>
      </div>
      
      <!-- Strengths -->
      <div class="strengths">
        <h3>Strengths</h3>
        <ul>
          <li><strong>Analytical Thinking:</strong> Adept at breaking down complex problems into manageable parts for comprehensive solutions.</li>
          <li><strong>Technical Proficiency:</strong> Skilled in data management and predictive model development using SQL, Python, and R.</li>
        </ul>
      </div>
      
      <!-- Referees -->
      <div class="referees">
        <h3>Referees</h3>
        <ul>
          <li>
            <strong>Dr. Caroline Mugo</strong><br>
            Department of Statistics and Actuarial Science, JKUAT<br>
            Tel: 0733388887<br>
            E-mail: <a href="mailto:cwmugo@jkuat.ac.ke">cwmugo@jkuat.ac.ke</a>
          </li>
          <li>
            <strong>Mr. Okuda Pascal</strong><br>
            Senior Data Analyst, Dalberg Research Institute<br>
            Two Rivers North Tower Lifestyle centre, Limuru Rd, Nairobi<br>
            Tel: 0719 716363<br>
            E-mail: <a href="mailto:anderapascal@gmail.com">anderapascal@gmail.com</a>
          </li>
          <li>
            <strong>Mr. Antony Macharia</strong><br>
            Senior Data Scientist, JKUAT Enterprises LTD<br>
            Tel: 0701728636<br>
            E-mail: <a href="mailto:machariaantony66@yahoo.com">machariaantony66@yahoo.com</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  
  <!-- Services Section -->
  <section id="services">
    <h2>Services</h2>
    <div class="service-content">
      <div class="service-item">
        <h3>Data Visualization</h3>
        <p>A picture says more than a thousand words... but what exactly do you want to visualize?</p>
        <p>I have seen a lot of examples of very good but also very bad visualizations. For example, a pie chart with more than 3 or 4 categories is not readable in my opinion. Because people are better at comparing lengths than areas, a bar chart is a better choice in many cases. I use rainbow colors only occasionally since there is no “greater than” ordering in colors, making it hard for a human to compare quantitative data. Until now, I have used R/Shiny, Plotly, and Python for my data visualizations, with most experience in the R, SPSS and Python.</p>
      </div>
      <div class="service-item">
        <h3>Machine Learning</h3>
        <p>Need to make predictions based on historical data? Or want to explore your data for certain patterns?</p>
        <p>Machine learning is a discipline that can be applied to a lot of domains. IBM Watson is changing the world of healthcare by applying machine learning, and many companies are working on self-driving cars which rely on these techniques.</p>
        <p>I have experience with supervised, unsupervised, and reinforcement learning. In recent projects, I have predicted nitrate levels from image analysis and built a fraud detection algorithm based on historical transactions.</p>
      </div>
      <div class="service-item">
        <h3>Remote Training</h3>
        <p>Are you interested in visualizing your data yourself? Do you want to start with R programming?</p>
        <p>I offer remote training for a variety of topics related to R. In only a half day, you can be up and running with R and start analyzing your data.</p>
        <p>Topics for beginners include: Introduction to R/RStudio, Git, RMarkdown, and Shiny. Please contact me for specific training needs.</p>
      </div>
      <div class="service-item">
        <h3>Data Collection</h3>
        <p>Need to collect data from the field effectively? I can help set up robust data collection systems using Kobotoolbox and SurveyToGo.</p>
        <p>These tools are ideal for remote and offline data collection. With Kobotoolbox's user-friendly interface and SurveyToGo's powerful survey capabilities, I ensure that your data is captured accurately and efficiently, whether you're working in urban environments or remote field locations.</p>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact</h2>
    <p>Phone: +254-759125389</p>
    <p>Location: Nairobi, Kenya</p>
    <!-- Social Links -->
    <div class="social-links">
      <a href="mailto:oumamichael108@gmail.com" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email">
      </a>
      <a href="https://ke.linkedin.com/in/michael-ouma-03b3522a1?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
      </a>
      <a href="https://github.com/OumaMichael" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub">
      </a>  
    </div>
  </section>
  
  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Michael Ouma. All rights reserved.</p>
  </footer>
  <script src="index.js"></script>
</body>
</html>
