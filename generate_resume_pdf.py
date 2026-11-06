import os

def create_resume_pdf(output_path):
    lines_stream = []
    
    # PDF commands helper
    # Font 1 = Helvetica-Bold, Font 2 = Helvetica, Font 3 = Helvetica-Oblique
    
    commands = []
    
    # Helper to draw text
    def draw_text(font, size, x, y, text):
        # Normalize unicode dashes and quotes
        clean_text = text.replace('\u2014', '--').replace('\u2013', '-').replace('\u2018', "'").replace('\u2019', "'")
        clean_text = clean_text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        commands.append(f"BT /{font} {size} Tf {x:.1f} {y:.1f} Td ({clean_text}) Tj ET")
        
    def draw_line(x1, y1, x2, y2, r=0.2, g=0.2, b=0.2, width=0.8):
        commands.append(f"{r:.2f} {g:.2f} {b:.2f} RG {width:.1f} w {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S")

    # Header
    y = 750
    draw_text("F1", 20, 50, y, "PRIYANSHU TAYAL")
    y -= 16
    draw_text("F1", 11, 50, y, "FRONTEND DEVELOPER  |  React.js | JavaScript | TypeScript")
    y -= 14
    draw_text("F2", 9, 50, y, "Ghaziabad, Uttar Pradesh, India   |   +91 9027500401   |   priyanshutayal01@gmail.com")
    y -= 12
    draw_text("F2", 9, 50, y, "LinkedIn: linkedin.com/in/priyanshu-tayal-34949328a   |   GitHub: github.com/Priyanshu01Tayal")
    y -= 10
    draw_line(50, y, 562, y, 0.4, 0.3, 0.8, 1.2)
    y -= 16

    # Professional Summary
    draw_text("F1", 11, 50, y, "PROFESSIONAL SUMMARY")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 12
    summary_lines = [
        "Final-year B.Tech Computer Science student and Frontend Developer with hands-on experience building responsive,",
        "interactive web applications using React.js, JavaScript, HTML5 and CSS3. Experienced in developing reusable React",
        "components, integrating REST APIs, and connecting frontend workflows with Node.js/Express.js backends and ML services.",
        "Comfortable with TypeScript, Next.js, Git and GitHub, with a strong foundation in Data Structures & Algorithms",
        "(200+ problems solved on LeetCode and CodeChef)."
    ]
    for s_line in summary_lines:
        draw_text("F2", 9, 50, y, s_line)
        y -= 11

    y -= 6

    # Technical Skills
    draw_text("F1", 11, 50, y, "TECHNICAL SKILLS")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 12
    skills_data = [
        ("Frontend:", "React.js, JavaScript (ES6+), TypeScript, Next.js, HTML5, CSS3, Responsive Design, REST API Integration"),
        ("Backend & Databases:", "Node.js, Express.js, JWT Authentication, MongoDB, MySQL"),
        ("Development Tools:", "Git, GitHub, VS Code, Postman"),
        ("Additional Technologies:", "Python, Java, Scikit-learn, TensorFlow (Basic), OpenCV (Basic)"),
        ("Core Computer Science:", "Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Networks")
    ]
    for category, items in skills_data:
        draw_text("F1", 9, 50, y, category)
        draw_text("F2", 9, 175, y, items)
        y -= 11

    y -= 6

    # Experience
    draw_text("F1", 11, 50, y, "PROFESSIONAL EXPERIENCE")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 13
    
    # Exp 1
    draw_text("F1", 10, 50, y, "Web Development Intern")
    draw_text("F2", 9, 185, y, "— Mind Strong IT Services Private Limited")
    draw_text("F3", 9, 435, y, "July 2026 – September 2026")
    y -= 11
    draw_text("F2", 9, 60, y, "* Contributed to frontend development and backend integration for full-stack web applications.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Supported end-to-end application delivery and worked on database management tasks.")
    y -= 14

    # Exp 2
    draw_text("F1", 10, 50, y, "AI/ML Trainee")
    draw_text("F2", 9, 140, y, "— GI Ventures India")
    draw_text("F3", 9, 435, y, "September 2025 – May 2026")
    y -= 11
    draw_text("F2", 9, 60, y, "* Built machine learning pipelines in Python using NumPy, Pandas and Scikit-learn.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Performed data preprocessing, feature engineering, trained & evaluated regression and classification models.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Implemented train/test splits, cross-validation, and utilized AI-assisted coding workflows for experimentation.")
    y -= 15

    # Featured Projects
    draw_text("F1", 11, 50, y, "FEATURED PROJECTS")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 13

    # Project 1
    draw_text("F1", 10, 50, y, "AlzCare – Alzheimer MRI Detection & Cognitive Care Platform")
    draw_text("F3", 8.5, 360, y, "React.js, Express.js, FastAPI, Expo / React Native, MongoDB")
    y -= 11
    draw_text("F2", 9, 60, y, "* Developed responsive, interactive interfaces for doctor dashboard and patient rehabilitation exercise workflows.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Built reusable React components and integrated Express.js REST APIs with FastAPI-based ML microservice.")
    y -= 13

    # Project 2
    draw_text("F1", 10, 50, y, "NextAgro – Full Stack & AI-Enabled Web Application")
    draw_text("F3", 8.5, 350, y, "React.js, Node.js, Express.js, MongoDB, Python, TensorFlow, OpenCV")
    y -= 11
    draw_text("F2", 9, 60, y, "* Built full-stack agriculture platform with responsive React.js frontend connecting farmers directly with consumers.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Developed REST APIs and integrated CNN-based crop disease image classification using TensorFlow & OpenCV.")
    draw_text("F3", 8.5, 430, y, "(Live: nextagro-nu.vercel.app)")
    y -= 13

    # Project 3
    draw_text("F1", 10, 50, y, "Civic Issue Reporting System")
    draw_text("F3", 8.5, 365, y, "React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary")
    y -= 11
    draw_text("F2", 9, 60, y, "* Developed full-stack reporting web app with JWT authentication, role-based access control, and Cloudinary image upload.")
    y -= 10
    draw_text("F2", 9, 60, y, "* Implemented responsive UI with interactive dashboards and REST API CRUD operations for citizen and admin roles.")
    y -= 15

    # Education
    draw_text("F1", 11, 50, y, "EDUCATION")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 13
    draw_text("F1", 10, 50, y, "ABES Institute of Technology, Ghaziabad")
    draw_text("F3", 9, 445, y, "2023 – 2027")
    y -= 11
    draw_text("F2", 9, 50, y, "Bachelor of Technology – Computer Science & Engineering | Current CGPA: 8.3 / 10")
    y -= 10
    draw_text("F2", 8.5, 50, y, "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks")
    y -= 15

    # Achievements & Certifications
    draw_text("F1", 11, 50, y, "ACHIEVEMENTS & CERTIFICATIONS")
    y -= 6
    draw_line(50, y, 562, y, 0.7, 0.7, 0.8, 0.5)
    y -= 12
    draw_text("F2", 9, 50, y, "* Finalist – Smart India Hackathon (SIH 2025)   |   Winner – Codathon (2025)")
    y -= 10
    draw_text("F2", 9, 50, y, "* 200+ Problems Solved across LeetCode and CodeChef   |   Volunteer – Rubix Technical Club")
    y -= 10
    draw_text("F2", 9, 50, y, "* Certifications: GenAI Powered Data Analytics, Web Development (Apna College), Data Structures (CodeChef), AI/ML (GI Ventures)")

    content_stream = "\n".join(commands)
    stream_bytes = content_stream.encode('latin1')
    stream_len = len(stream_bytes)

    objects = []
    
    # 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    # 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    # 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>\nendobj\n")
    # 4: Font F1 Bold
    objects.append("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
    # 5: Font F2 Normal
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")
    # 6: Font F3 Oblique
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n")
    # 7: Contents
    objects.append(f"7 0 obj\n<< /Length {stream_len} >>\nstream\n{content_stream}\nendstream\nendobj\n")

    # Build PDF with xref
    header = "%PDF-1.4\n"
    offsets = [0]
    current_offset = len(header.encode('latin1'))
    
    body = ""
    for obj in objects:
        offsets.append(current_offset)
        body += obj
        current_offset += len(obj.encode('latin1'))

    xref_offset = current_offset
    xref = f"xref\n0 {len(offsets)}\n0000000000 65535 f \n"
    for off in offsets[1:]:
        xref += f"{off:010d} 00000 n \n"

    trailer = f"trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n"
    
    pdf_data = (header + body + xref + trailer).encode('latin1')
    with open(output_path, "wb") as f:
        f.write(pdf_data)
    print(f"Resume generated at {output_path} ({len(pdf_data)} bytes)")

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "public")
    os.makedirs(out_dir, exist_ok=True)
    create_resume_pdf(os.path.join(out_dir, "Priyanshu_Tayal_Frontend_Developer_Resume.pdf"))
