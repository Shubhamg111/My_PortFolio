import blog1 from '../assets/blogproject.jpg'
import blog2 from '../assets/blogwebdevlop.avif'
import blog3 from '../assets/blogwebdesign.avif'


export const blogs = [
  {
  "id": "getting-started-with-python",
  "title": "Getting Started with Python for Absolute Beginners",
  "excerpt": "Learn how to install Python the right way, write your first script, and avoid common beginner mistakes — all explained in simple terms.",
  "author": "Subham Gupta",
  "date": "2024-02-10",
  "category": "Python",
  "cover": blog1,
  "readingMinutes": 8,
  "keywords": [
    "Python basics",
    "install python",
    "learn python nepal",
    "python instructor kathmandu",
    "python tutorial for beginners",
    "setup python windows mac linux"
  ],
  "content": "\n1. Introduction – Why Learn Python?\nPython is one of the most popular and beginner-friendly programming languages in the world. It’s easy to read, powerful, and widely used in areas like web development, data analysis, artificial intelligence, and automation. Whether you’re a student in Nepal or a self-learner abroad, Python is an ideal first language because it feels simple yet capable of handling complex tasks.\n\nPython’s syntax is clean and straightforward — meaning your code looks almost like plain English. This helps beginners focus on problem-solving instead of memorizing complicated rules. The best part? Python has a massive community. You can easily find tutorials, mentors, and local meetups in Kathmandu or online to help you grow.\n\n2. Installing Python the Right Way\nBefore you start writing code, you need to install Python properly. Here’s how to do it based on your operating system:\na. Windows:\nVisit python.org/downloads and download the latest version. During installation, make sure to check the box that says “Add Python to PATH.” This step ensures you can run Python directly from your command prompt.\n\nb. MacOS:\nMacOS often includes an outdated version of Python. It’s better to install the latest one using the official installer or Homebrew by running:\n  ```bash\n  brew install python\n  ```\n\nc. Linux:\nMost Linux systems already have Python installed. However, for more flexibility, use a version manager like `pyenv`:\n  ```bash\n  curl https://pyenv.run | bash\n  ```\n  This allows you to install and switch between multiple Python versions easily.\n\n💡 Tip: Always use `venv` or `pyenv` to keep your projects isolated. It helps avoid conflicts between different project dependencies.\n\n3. Writing Your First Python Script\nNow that Python is ready, let’s write your very first program. Open a text editor (VS Code is highly recommended) and create a new file named `hello.py`.\n\nType the following code:\n```python\nprint(\"Namaste, Kathmandu!\")\n```\n\nSave the file and open your terminal or command prompt. Then run:\n```bash\npython hello.py\n```\n\nIf you see this output:\n```\nNamaste, Kathmandu!\n```\nCongratulations! You’ve just written and executed your first Python script.\n\n4. Understanding the Basics – What to Learn Next\nOnce you’ve mastered running a simple script, it’s time to explore Python fundamentals. Focus on these essential concepts:\n\n▶️ Variables and Data Types – Learn how to store and use values in your code.\n▶️ Conditional Statements – Use `if`, `else`, and `elif` to make decisions.\n▶️ Loops – Repeat actions with `for` and `while` loops.\n▶️ Functions – Write reusable blocks of code.\n▶️ Lists, Tuples, and Dictionaries – Learn how to manage and organize data.\n\nStart small with mini projects such as:\n▶️ A Unit Converter that converts kilometers to miles.\n▶️ A To-Do List App that manages your daily tasks.\n▶️ A Simple Calculator that performs basic math operations.\n\nThese projects will give you hands-on experience and confidence to build real-world apps.\n\n5. Managing Environments with venv\nAs you work on more projects, you’ll need to manage different dependencies. Python’s built-in `venv` helps you create isolated environments.\n\nTo create a virtual environment:\n```bash\npython -m venv myenv\n```\nActivate it using:\n- Windows: `myenv\\Scripts\\activate`\n- Mac/Linux: `source myenv/bin/activate`\n\nNow any library you install will be saved only inside this environment — keeping your system clean and organized.\n\n6. Common Beginner Mistakes (and Fixes)\nWhen learning Python, beginners often face common issues. Here’s how to avoid them:\n\n  ❌ Problem: 'python' command not recognized\n  ✅ Fix: Reinstall Python and check the “Add to PATH” option during setup.\n\n  ❌ Problem: Mixing Python 2 and 3 code\n  ✅ Fix: Always use Python 3. Check your version with `python --version`.\n\n  ❌ Problem: Installing packages globally\n  ✅ Fix: Use `venv` or `pyenv` to isolate project dependencies.\n\n7. What’s Next – Your Python Journey\nLearning Python is just the beginning. Once you’re comfortable with the basics, explore areas that match your interest:\n\n▶️ Web Development using Django or Flask\n▶️ Data Analysis using Pandas and NumPy\n▶️ Automation using small scripts\n▶️ Machine Learning using Scikit-learn or TensorFlow\n\nTry writing one small Python script every day. The more you code, the more fluent you’ll become.\n\n8. Final Thoughts\nPython is not just a programming language — it’s a gateway to endless opportunities. Whether you want to become a full-stack developer, data scientist, or software engineer, Python will always be a strong foundation. Keep learning, stay consistent, and remember: every expert was once a beginner.\n\n9. SEO Keywords (for Visibility)\nPython basics, install python guide, learn python in Nepal, python instructor Kathmandu, python setup tutorial, python for beginners, start python programming, python tutorial step by step, how to install python, python environment setup.\n"
},
  {
    "id": "django-vs-flask",
    "title": "Django vs Flask: Which One Should You Choose in 2025?",
    "excerpt": "Understand the trade-offs between batteries-included Django and lightweight Flask for projects in Nepal\u2019s startup scene.",
    "author": "Subham Gupta",
    "date": "2024-03-11",
    "category": "Web Development",
    "cover": blog2,
    "readingMinutes": 10,
    "keywords": [
      "django vs flask",
      "python web frameworks",
      "best python instructor in kathmandu"
    ],
    "content": "\nDjango ships with ORM, admin, auth, and a structured philosophy. Flask is minimal and composable.\n\nChoose **Django** for CMS, e\u2011commerce, dashboards. Choose **Flask** for microservices, APIs, or when you want to pick every piece.\n\nPerformance is similar for most CRUD apps. Team size and maintainability should drive your choice.\n"
  },
  {
    "id": "seo-for-developers",
    "title": "SEO for Developers: Practical Guide for Kathmandu Businesses",
    "excerpt": "From meta tags to Core Web Vitals\u2014tune your site for local discovery.",
    "author": "Subham Gupta",
    "date": "2024-04-10",
    "category": "SEO",
    "cover": blog3,
    "readingMinutes": 9,
    "keywords": [
      "SEO Nepal",
      "best python tutor ktm",
      "web developer kathmandu"
    ],
    "content": "\n### Must-do SEO\n- Unique title and meta description per page\n- Canonical URLs\n- JSON\u2011LD for Person/Organization\n- Sitemap + robots.txt\n- Fast, mobile\u2011first UX\n"
  },
  {
    "id": "ai-in-web-dev",
    "title": "AI in Web Development: Smarter Interfaces in 2025",
    "excerpt": "Where AI helps today: content assist, personalization, accessibility cues.",
    "author": "Subham Gupta",
    "date": "2024-05-18",
    "category": "AI",
    "cover": blog2,
    "readingMinutes": 7,
    "keywords": [
      "AI web",
      "react ai",
      "chatbot nepal"
    ],
    "content": "\nAI augments UX through recommendations and summarization. Start with privacy\u2011first analytics and small assistants.\n"
  },
  {
    "id": "portfolio-best-practices",
    "title": "Portfolio Best Practices for Developers",
    "excerpt": "Show outcomes, not just stacks. Add case studies with problem \u2192 solution \u2192 impact.",
    "author": "Subham Gupta",
    "date": "2024-09-01",
    "category": "Career",
    "cover": blog1,
    "readingMinutes": 6,
    "keywords": [
      "developer portfolio",
      "hire python developer kathmandu"
    ],
    "content": "\nInclude metrics (load time, conversions), before/after screenshots, and client quotes. Keep it concise.\n"
  }
]