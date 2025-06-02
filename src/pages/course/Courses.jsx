import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import BscCsitNotes from '../../components/course/BscCsitNotes';
import Navbar from '../../components/Navbar';

const semestersData = {
  1: [{
  id: 1,
  title: 'Introduction to Information Technology',
  description: '',
  link: 'https://docs.google.com/document/d/1t4LGSPSIqa8SButLigLmzBlBf6RX2bLa/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true',
  chapters: [
    {
      title: 'Chapter 1: Introduction to Computer',
      link: 'https://drive.google.com/your-ch1-link'
    },
    {
      title: 'Chapter 2: The Computer System Hardware',
      link: 'https://drive.google.com/your-ch2-link'
    },
    {
      title: 'Chapter 3: Computer Memory',
      link: 'https://drive.google.com/your-ch3-link'
    },
    {
      title: 'Chapter 4: Input and Output Devices',
      link: 'https://drive.google.com/your-ch4-link'
    },
    {
      title: 'Chapter 5: Data Representation',
      link: 'https://drive.google.com/your-ch5-link'
    },
    {
      title: 'Chapter 6: Computer Software',
      link: 'https://drive.google.com/your-ch6-link'
    },
    {
      title: 'Chapter 7: Data Communication and Computer Network',
      link: 'https://drive.google.com/your-ch7-link'
    },
    {
      title: 'Chapter 8: The Internet and Internet Services',
      link: 'https://drive.google.com/your-ch8-link'
    },
    {
      title: 'Chapter 9: Fundamentals of Database',
      link: 'https://drive.google.com/your-ch9-link'
    },
    {
      title: 'Chapter 10: Multimedia',
      link: 'https://drive.google.com/your-ch10-link'
    },
    {
      title: 'Chapter 11: Computer Security',
      link: 'https://drive.google.com/your-ch11-link'
    }
  ]
},
    {
  id: 2,
  title: 'C Programming',
  description: '',
  link: 'https://drive.google.com/your-c-link', // Replace with your main link for C Programming notes
  chapters: [
    {
      title: 'Chapter 1: Problem Solving with Computer',
      link: 'https://drive.google.com/your-c-ch1'
    },
    {
      title: 'Chapter 2: Elements of C',
      link: 'https://drive.google.com/your-c-ch2'
    },
    {
      title: 'Chapter 3: Input and Output',
      link: 'https://drive.google.com/your-c-ch3'
    },
    {
      title: 'Chapter 4: Operators and Expression',
      link: 'https://drive.google.com/your-c-ch4'
    },
    {
      title: 'Chapter 5: Control Statement',
      link: 'https://drive.google.com/your-c-ch5'
    },
    {
      title: 'Chapter 6: Arrays',
      link: 'https://drive.google.com/your-c-ch6'
    },
    {
      title: 'Chapter 7: Functions',
      link: 'https://drive.google.com/your-c-ch7'
    },
    {
      title: 'Chapter 8: Structure and Union',
      link: 'https://drive.google.com/your-c-ch8'
    },
    {
      title: 'Chapter 9: Pointers',
      link: 'https://drive.google.com/your-c-ch9'
    },
    {
      title: 'Chapter 10: File Handling in C',
      link: 'https://drive.google.com/your-c-ch10'
    },
    {
      title: 'Chapter 11: Introduction to Graphics',
      link: 'https://drive.google.com/your-c-ch11'
    }
  ]
}
,
   {
  id: 3,
  title: 'Digital Logic',
  description: '',
  link: 'https://drive.google.com/your-digital-logic-link', // Replace with your main link for Digital Logic notes
  chapters: [
    {
      title: 'Chapter 1: Binary Systems',
      link: 'https://drive.google.com/your-dl-ch1'
    },
    {
      title: 'Chapter 2: Boolean Algebra and Logic Gates',
      link: 'https://drive.google.com/your-dl-ch2'
    },
    {
      title: 'Chapter 3: Simplification of Boolean Functions',
      link: 'https://drive.google.com/your-dl-ch3'
    },
    {
      title: 'Chapter 4: Combinational Logic',
      link: 'https://drive.google.com/your-dl-ch4'
    },
    {
      title: 'Chapter 5: Combinational Logic with MSI and LSI',
      link: 'https://drive.google.com/your-dl-ch5'
    },
    {
      title: 'Chapter 6: Synchronous and Asynchronous Sequential Logic',
      link: 'https://drive.google.com/your-dl-ch6'
    },
    {
      title: 'Chapter 7: Registers and Counters',
      link: 'https://drive.google.com/your-dl-ch7'
    }
  ]
}
,
    {
  id: 4,
  title: 'Mathematics I',
  description: '',
  link: 'https://drive.google.com/your-math1-main-link', // Replace with your main link for Mathematics I notes
  chapters: [
    {
      title: 'Chapter 1: Function of One Variable',
      link: 'https://drive.google.com/your-math1-ch1'
    },
    {
      title: 'Chapter 2: Limits and Continuity',
      link: 'https://drive.google.com/your-math1-ch2'
    },
    {
      title: 'Chapter 3: Derivatives',
      link: 'https://drive.google.com/your-math1-ch3'
    },
    {
      title: 'Chapter 4: Applications of Derivatives',
      link: 'https://drive.google.com/your-math1-ch4'
    },
    {
      title: 'Chapter 5: Antiderivatives',
      link: 'https://drive.google.com/your-math1-ch5'
    },
    {
      title: 'Chapter 6: Applications of Antiderivatives',
      link: 'https://drive.google.com/your-math1-ch6'
    },
    {
      title: 'Chapter 7: Ordinary Differential Equations',
      link: 'https://drive.google.com/your-math1-ch7'
    },
    {
      title: 'Chapter 8: Infinite Sequence and Series',
      link: 'https://drive.google.com/your-math1-ch8'
    },
    {
      title: 'Chapter 9: Plane and Space Vectors',
      link: 'https://drive.google.com/your-math1-ch9'
    },
    {
      title: 'Chapter 10: Partial Derivatives and Multiple Integrals',
      link: 'https://drive.google.com/your-math1-ch10'
    }
  ]
}
,
   {
  id: 5,
  title: 'Physics',
  description: '',
  link: 'https://drive.google.com/your-physics-main-link', // Replace with your main physics notes link
  chapters: [
    {
      title: 'Chapter 1: Rotational Dynamics and Oscillatory Motion',
      link: 'https://drive.google.com/your-physics-ch1'
    },
    {
      title: 'Chapter 2: Electric and Magnetic Field',
      link: 'https://drive.google.com/your-physics-ch2'
    },
    {
      title: 'Chapter 3: Fundamentals of Atomic Theory',
      link: 'https://drive.google.com/your-physics-ch3'
    },
    {
      title: 'Chapter 4: Methods of Quantum Mechanics',
      link: 'https://drive.google.com/your-physics-ch4'
    },
    {
      title: 'Chapter 5: Fundamentals of Solid State Physics',
      link: 'https://drive.google.com/your-physics-ch5'
    },
    {
      title: 'Chapter 6: Semiconductor and Semiconductor devices',
      link: 'https://drive.google.com/your-physics-ch6'
    },
    {
      title: 'Chapter 7: Universal Gates and Physics of Integrated Circuits',
      link: 'https://drive.google.com/your-physics-ch7'
    }
  ]
},
  ],
  2: [
   {
  id: 6,
  title: 'Discrete Structures',
  description: '',
  link: 'https://drive.google.com/your-discrete-structures-main-link', 
  chapters: [
    {
      title: 'Chapter 1: Basic Discrete Structures',
      link: 'https://docs.google.com/document/d/1t4LGSPSIqa8SButLigLmzBlBf6RX2bLa/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 2: Integers and Matrices',
      link: 'https://docs.google.com/document/d/19bnB8JtH4OeXHDXu1k8KNQ6FiICQoi_8/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 3: Logic and Proof Methods',
      link: 'https://docs.google.com/document/d/11GfbXK9DYcM4RQXeBy_Rth4HB0o9YkVB/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 4: Induction and Recursion',
      link: 'https://docs.google.com/document/d/19wkcvxm-DweyZAk_1v9AOf2EAQ6uZ4_H/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 5: Counting and Discrete Probability',
      link: 'https://docs.google.com/document/d/1oseNdSCWVBU95Li5Co2uDb12lHEPimnz/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 6: Relations and Graphs',
      link: 'https://docs.google.com/document/d/1Ov6bxi5BxCUaSEAllsKIhVQ9WdRX--2J/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    }
  ]
}
,
   {
  id: 7,
  title: 'Object Oriented Programming',
  description: '',
  link: 'https://drive.google.com/your-oop-main-link', // Replace with your main notes link
  chapters: [
    {
      title: 'Chapter 1: Introduction to Object Oriented Programming',
      link: 'https://docs.google.com/document/d/1NtXB9cnfT8zMpY_gVwejSkgsB-rB0jjK/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 2: Basics of C++ Programming',
      link: 'https://docs.google.com/document/d/1Zk3gGzKVxtPT1daF542N_tcOiMfnFvkN/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 3: Classes & Objects',
      link: 'https://docs.google.com/document/d/1R_8VqNO1crtRg5LVSgBV3BI0_cHybZDk/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 4: Operator Overloading',
      link: 'https://docs.google.com/document/d/1PBJISaUkJJLIShpwu2yZGXWPLX_bOJQf/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 5: Inheritance',
      link: 'https://docs.google.com/document/d/1Pzqk26ALGKXoSQSKDwd-TR1Q9M1YPt2i/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 6: Virtual Functions, Polymorphism, and Miscellaneous Features',
      link: 'https://docs.google.com/document/d/1kY9xHirnHV9GtlDZ8ReqHJHlsrAPOriV/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 7: Function Templates and Exception Handling',
      link: 'https://docs.google.com/document/d/1-R3VPvm2vELfsT70sAnRB9zy7ulfcgg8/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 8: File Handling',
      link: 'https://docs.google.com/document/d/1uQCP854tWzlXamjX1X7EwJRZNpjqG9SF/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    }
  ]
}
,
  {
  id: 8,
  title: 'Microprocessor',
  description: '',
  link: 'https://drive.google.com/your-microprocessor-main-link', // Replace with your main notes link
  chapters: [
    {
      title: 'Chapter 1: Introduction',
      link: 'https://docs.google.com/document/d/1CB3fONt7bpNZ2J0qnd7xvin062Pc2ggp/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 2: Basic Architecture',
      link: 'https://docs.google.com/document/d/1MG9Udnv-5qgMY8yy6rWdEdSXb7uC197J/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 3: Instruction Cycle',
      link: 'https://docs.google.com/document/d/1WMhNrMt77yvABNE4WCggR-sgaQeX9fr_/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 4: Assembly Language Programming',
      link: 'https://docs.google.com/document/d/18UEM-dWaLxJPWUlTeByV1V0_jdXyjc1Z/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 5: Basic I/O, Memory R/W and Interrupt Operations',
      link: 'https://docs.google.com/document/d/12MHGSuGqq7Mr8yr0jXUt7FiasLkAf1fQ/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 6: Input/Output Interfaces',
      link: 'https://docs.google.com/document/d/1nIpw0B4_hW21wfpeK-4ISzviCShZ8ddj/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    },
    {
      title: 'Chapter 7: Advanced Microprocessors',
      link: 'https://docs.google.com/document/d/1MZoDA02ZhN5qOqPytYvX_7th6FF01T6o/edit?usp=drive_link&ouid=112507515226477997904&rtpof=true&sd=true'
    }
  ]
}
,
   {
  id: 9,
  title: 'Mathematics II',
  description: '',
  link: 'https://drive.google.com/your-math2-main-link', // Replace with your main notes link
  chapters: [
    {
      title: 'Chapter 1: Linear Equations in Linear Algebra',
      link: 'https://drive.google.com/your-math2-ch1'
    },
    {
      title: 'Chapter 2: Transformation',
      link: 'https://drive.google.com/your-math2-ch2'
    },
    {
      title: 'Chapter 3: Matrix Algebra',
      link: 'https://drive.google.com/your-math2-ch3'
    },
    {
      title: 'Chapter 4: Determinants',
      link: 'https://drive.google.com/your-math2-ch4'
    },
    {
      title: 'Chapter 5: Vector Spaces',
      link: 'https://drive.google.com/your-math2-ch5'
    },
    {
      title: 'Chapter 6: Vector Space Continued',
      link: 'https://drive.google.com/your-math2-ch6'
    },
    {
      title: 'Chapter 7: Eigenvalues and Eigenvectors',
      link: 'https://drive.google.com/your-math2-ch7'
    },
    {
      title: 'Chapter 8: Orthogonality and Least Squares',
      link: 'https://drive.google.com/your-math2-ch8'
    },
    {
      title: 'Chapter 9: Groups and Subgroups',
      link: 'https://drive.google.com/your-math2-ch9'
    },
    {
      title: 'Chapter 10: Rings and Fields',
      link: 'https://drive.google.com/your-math2-ch10'
    }
  ]
}
,
    {
  id: 10,
  title: 'Statistics I',
  description: '',
  link: 'https://drive.google.com/your-statistics1-main-link', // Replace with your main notes link
  chapters: [
    {
      title: 'Chapter 1: Introduction',
      link: 'https://drive.google.com/your-statistics1-ch1'
    },
    {
      title: 'Chapter 2: Descriptive Statistics',
      link: 'https://drive.google.com/your-statistics1-ch2'
    },
    {
      title: 'Chapter 3: Introduction to Probability',
      link: 'https://drive.google.com/your-statistics1-ch3'
    },
    {
      title: 'Chapter 4: Sampling',
      link: 'https://drive.google.com/your-statistics1-ch4'
    },
    {
      title: 'Chapter 5: Random Variables and Mathematical Expectation',
      link: 'https://drive.google.com/your-statistics1-ch5'
    },
    {
      title: 'Chapter 6: Probability Distributions',
      link: 'https://drive.google.com/your-statistics1-ch6'
    },
    {
      title: 'Chapter 7: Correlation and Linear Regression',
      link: 'https://drive.google.com/your-statistics1-ch7'
    }
  ]
}
,
  ],
  3: [
    {
  id: 11,
  title: 'Data Structures and Algorithms',
  description: '',
  link: 'https://drive.google.com/your-dsa-main-link',  // Replace with your main folder link
  chapters: [
    {
      title: 'Chapter 1: Introduction to Data Structures & Algorithms',
      link: 'https://drive.google.com/your-dsa-ch1-link'
    },
    {
      title: 'Chapter 2: Stack',
      link: 'https://drive.google.com/your-dsa-ch2-link'
    },
    {
      title: 'Chapter 3: Queue',
      link: 'https://drive.google.com/your-dsa-ch3-link'
    },
    {
      title: 'Chapter 4: Recursion',
      link: 'https://drive.google.com/your-dsa-ch4-link'
    },
    {
      title: 'Chapter 5: Lists',
      link: 'https://drive.google.com/your-dsa-ch5-link'
    },
    {
      title: 'Chapter 6: Sorting',
      link: 'https://drive.google.com/your-dsa-ch6-link'
    },
    {
      title: 'Chapter 7: Searching and Hashing',
      link: 'https://drive.google.com/your-dsa-ch7-link'
    },
    {
      title: 'Chapter 8: Trees and Graphs',
      link: 'https://drive.google.com/your-dsa-ch8-link'
    }
  ]
}
,
    {
  id: 12,
  title: 'Numerical Method',
  description: '',
  link: 'https://drive.google.com/your-numerical-method-main-link',  // Replace with your main folder link
  chapters: [
    {
      title: 'Chapter 1: Solution of Nonlinear Equations',
      link: 'https://drive.google.com/your-numerical-method-ch1-link'
    },
    {
      title: 'Chapter 2: Interpolation and Regression',
      link: 'https://drive.google.com/your-numerical-method-ch2-link'
    },
    {
      title: 'Chapter 3: Numerical Differentiation and Integration',
      link: 'https://drive.google.com/your-numerical-method-ch3-link'
    },
    {
      title: 'Chapter 4: Solving System of Linear Equations',
      link: 'https://drive.google.com/your-numerical-method-ch4-link'
    },
    {
      title: 'Chapter 5: Solution of Ordinary Differential Equations',
      link: 'https://drive.google.com/your-numerical-method-ch5-link'
    },
    {
      title: 'Chapter 6: Solution of Partial Differential Equations',
      link: 'https://drive.google.com/your-numerical-method-ch6-link'
    }
  ]
}
,
    {
  id: 13,
  title: 'Computer Architecture',
  description: '',
  link: 'https://drive.google.com/your-computer-architecture-main-link', // Main folder link for the course
  chapters: [
    {
      title: 'Chapter 1: Data Representation',
      link: 'https://drive.google.com/your-computer-architecture-ch1-link'
    },
    {
      title: 'Chapter 2: Register Transfer and Microoperations',
      link: 'https://drive.google.com/your-computer-architecture-ch2-link'
    },
    {
      title: 'Chapter 3: Basic Computer Organization and Design',
      link: 'https://drive.google.com/your-computer-architecture-ch3-link'
    },
    {
      title: 'Chapter 4: Microprogrammed Control',
      link: 'https://drive.google.com/your-computer-architecture-ch4-link'
    },
    {
      title: 'Chapter 5: Central Processing Unit',
      link: 'https://drive.google.com/your-computer-architecture-ch5-link'
    },
    {
      title: 'Chapter 6: Pipelining',
      link: 'https://drive.google.com/your-computer-architecture-ch6-link'
    },
    {
      title: 'Chapter 7: Computer Arithmetic',
      link: 'https://drive.google.com/your-computer-architecture-ch7-link'
    },
    {
      title: 'Chapter 8: Input Output Organization',
      link: 'https://drive.google.com/your-computer-architecture-ch8-link'
    },
    {
      title: 'Chapter 9: Memory Organization',
      link: 'https://drive.google.com/your-computer-architecture-ch9-link'
    }
  ]
}
,
   {
  id: 14,
  title: 'Computer Graphics',
  description: '',
  link: 'https://drive.google.com/your-computer-graphics-main-link', // Main folder for course materials
  chapters: [
    {
      title: 'Chapter 1: Introduction to Computer Graphics',
      link: 'https://drive.google.com/your-link-ch1'
    },
    {
      title: 'Chapter 2: Scan Conversion Algorithms',
      link: 'https://drive.google.com/your-link-ch2'
    },
    {
      title: 'Chapter 3: Two-Dimensional Geometric Transformations',
      link: 'https://drive.google.com/your-link-ch3'
    },
    {
      title: 'Chapter 4: Three-Dimensional Geometric Transformations',
      link: 'https://drive.google.com/your-link-ch4'
    },
    {
      title: 'Chapter 5: 3D Object Representation',
      link: 'https://drive.google.com/your-link-ch5'
    },
    {
      title: 'Chapter 6: Solid Modeling',
      link: 'https://drive.google.com/your-link-ch6'
    },
    {
      title: 'Chapter 7: Visible Surface Detection',
      link: 'https://drive.google.com/your-link-ch7'
    },
    {
      title: 'Chapter 8: Illumination Models and Surface Rendering',
      link: 'https://drive.google.com/your-link-ch8'
    },
    {
      title: 'Chapter 9: Introduction to Virtual Reality',
      link: 'https://drive.google.com/your-link-ch9'
    },
    {
      title: 'Chapter 10: Introduction to OpenGL',
      link: 'https://drive.google.com/your-link-ch10'
    }
  ]
},
   {
  id: 15,
  title: 'Statistics II',
  description: '',
  link: 'https://drive.google.com/your-statistics-ii-main-link', // Main folder for course materials
  chapters: [
    {
      title: 'Chapter 1: Sampling Distribution and Estimation',
      link: 'https://drive.google.com/your-link-ch1'
    },
    {
      title: 'Chapter 2: Testing of Hypothesis',
      link: 'https://drive.google.com/your-link-ch2'
    },
    {
      title: 'Chapter 3: Non-Parametric Tests',
      link: 'https://drive.google.com/your-link-ch3'
    },
    {
      title: 'Chapter 4: Multiple Correlation and Regression',
      link: 'https://drive.google.com/your-link-ch4'
    },
    {
      title: 'Chapter 5: Design of Experiment',
      link: 'https://drive.google.com/your-link-ch5'
    },
    {
      title: 'Chapter 6: Stochastic Process',
      link: 'https://drive.google.com/your-link-ch6'
    }
  ]
}
,
  ],
  4: [
   {
  "id": 16,
  "title": "Theory of Computation",
  "description": "This course presents a study of Finite State Machines and their languages, including finite automata, regular expressions, context free grammars, push-down automata, Turing machines, and basics of undecidability and intractability.",
  "link": "https://drive.google.com/your-theory-of-computation-main-link",
  "chapters": [
    {
      "title": "Unit I: Basic Foundations",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit II: Introduction to Finite Automata",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit III: Regular Expressions",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit IV: Context Free Grammar",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit V: Push Down Automata",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit VI: Turing Machines",
      "link": "https://drive.google.com/your-link-unit6"
    },
    {
      "title": "Unit VII: Undecidability and Intractability",
      "link": "https://drive.google.com/your-link-unit7"
    }
  ]
}
,
    {
  "id": 17,
  "title": "Computer Networks",
  "description": "This course introduces concepts of computer networking and discusses the different layers of networking model including topologies, protocols, IPv4/IPv6 addressing, routing, and latest networking standards.",
  "link": "https://drive.google.com/your-computer-networks-main-link",
  "chapters": [
    {
      "title": "Unit 1: Introduction to Computer Network",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit 2: Physical Layer and Network Media",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit 3: Data Link Layer",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit 4: Network Layer",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit 5: Transport Layer",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit 6: Application Layer",
      "link": "https://drive.google.com/your-link-unit6"
    },
    {
      "title": "Unit 7: Multimedia & Future Networking",
      "link": "https://drive.google.com/your-link-unit7"
    }
  ]
}
,
    {
  "id": 18,
  "title": "Operating Systems",
  "description": "This course covers the basic components and concepts of operating systems including process and memory management, synchronization, deadlocks, file systems, and I/O device handling. It also includes a Linux case study and practical lab simulations.",
  "link": "https://drive.google.com/your-operating-systems-main-link",
  "chapters": [
    {
      "title": "Unit 1: Operating System Overview",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit 2: Process Management",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit 3: Process Deadlocks",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit 4: Memory Management",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit 5: File Management",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit 6: Device Management",
      "link": "https://drive.google.com/your-link-unit6"
    },
    {
      "title": "Unit 7: Linux Case Study",
      "link": "https://drive.google.com/your-link-unit7"
    }
  ]
},
   {
  "id": 19,
  "title": "Database Management System",
  "description": "This course introduces the foundational concepts of database systems including architecture, data modeling with ER diagrams, relational models, SQL, normalization, transaction processing, concurrency control, and recovery techniques.",
  "link": "https://drive.google.com/your-dbms-main-link",
  "chapters": [
    {
      "title": "Unit 1: Database and Database Users",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit 2: Database System – Concepts and Architecture",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit 3: Data Modeling Using the Entity-Relational Model",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit 4: The Relational Data Model and Relational Database Constraints",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit 5: The Relational Algebra and Relational Calculus",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit 6: SQL",
      "link": "https://drive.google.com/your-link-unit6"
    },
    {
      "title": "Unit 7: Relational Database Design",
      "link": "https://drive.google.com/your-link-unit7"
    },
    {
      "title": "Unit 8: Introduction to Transaction Processing Concepts and Theory",
      "link": "https://drive.google.com/your-link-unit8"
    },
    {
      "title": "Unit 9: Concurrency Control Techniques",
      "link": "https://drive.google.com/your-link-unit9"
    },
    {
      "title": "Unit 10: Database Recovery Techniques",
      "link": "https://drive.google.com/your-link-unit10"
    }
  ]
},
    {
  "id": 20,
  "title": "Artificial Intelligence",
  "description": "This course introduces the fundamental principles of artificial intelligence (AI) including intelligent agents, problem solving through search, knowledge representation, probabilistic reasoning, machine learning, neural networks, and natural language processing.",
  "link": "https://drive.google.com/your-ai-main-link",
  "chapters": [
    {
      "title": "Unit I: Introduction",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit II: Intelligent Agents",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit III: Problem Solving by Searching",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit IV: Knowledge Representation",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit V: Machine Learning",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit VI: Applications of AI",
      "link": "https://drive.google.com/your-link-unit6"
    }
  ]
},
  ],
  5: [
    {
  "id": 21,
  "title": "Design and Analysis of Algorithms",
  "description": "This course introduces basic elements of the design and analysis of computer algorithms. Topics include asymptotic notations and analysis, divide and conquer strategy, greedy methods, dynamic programming, basic graph algorithms, NP-completeness, and approximation algorithms.",
  "link": "https://drive.google.com/your-daa-main",
  "chapters": [
    {
      "title": "Chapter 1: Foundation of Algorithm Analysis",
      "link": "https://drive.google.com/your-daa-ch1"
    },
    {
      "title": "Chapter 2: Iterative Algorithms",
      "link": "https://drive.google.com/your-daa-ch2"
    },
    {
      "title": "Chapter 3: Divide and Conquer Algorithms",
      "link": "https://drive.google.com/your-daa-ch3"
    },
    {
      "title": "Chapter 4: Greedy Algorithms",
      "link": "https://drive.google.com/your-daa-ch4"
    },
    {
      "title": "Chapter 5: Dynamic Programming",
      "link": "https://drive.google.com/your-daa-ch5"
    },
    {
      "title": "Chapter 6: Backtracking",
      "link": "https://drive.google.com/your-daa-ch6"
    },
    {
      "title": "Chapter 7: Number Theoretic Algorithms",
      "link": "https://drive.google.com/your-daa-ch7"
    },
    {
      "title": "Chapter 8: NP Completeness and Approximation Algorithms",
      "link": "https://drive.google.com/your-daa-ch8"
    },
    {
      "title": "Lab Work: Algorithm Implementation and Analysis",
      "link": "https://drive.google.com/your-daa-lab"
    }
  ]
}
,
   {
  "id": 22,
  "title": "System Analysis and Design",
  "description": "This course covers the basic concepts of system analysis and design including SDLC, system planning, requirement analysis, process and data modeling, design of databases and interfaces, implementation, maintenance, and object-oriented system development.",
  "link": "https://drive.google.com/your-sad-main",
  "chapters": [
    {
      "title": "Chapter 1: Foundations for Systems Development",
      "link": "https://drive.google.com/your-sad-ch1"
    },
    {
      "title": "Chapter 2: Planning",
      "link": "https://drive.google.com/your-sad-ch2"
    },
    {
      "title": "Chapter 3: Analysis",
      "link": "https://drive.google.com/your-sad-ch3"
    },
    {
      "title": "Chapter 4: Design",
      "link": "https://drive.google.com/your-sad-ch4"
    },
    {
      "title": "Chapter 5: Implementation and Maintenance",
      "link": "https://drive.google.com/your-sad-ch5"
    },
    {
      "title": "Chapter 6: Introduction to Object-Oriented Development",
      "link": "https://drive.google.com/your-sad-ch6"
    },
    {
      "title": "Lab Work: System Analysis and Design Case Studies & Modeling",
      "link": "https://drive.google.com/your-sad-lab"
    }
  ]
}
,
  {
  "id": 23,
  "title": "Cryptography",
  "description": "This course introduces the principles and design of cryptosystems, covering classical and modern ciphers, symmetric and asymmetric encryption, hash functions, authentication, digital signatures, network security, and malicious logic.",
  "link": "https://drive.google.com/your-crypto-main",
  "chapters": [
    {
      "title": "Chapter 1: Introduction and Classical Ciphers",
      "link": "https://drive.google.com/your-crypto-ch1"
    },
    {
      "title": "Chapter 2: Symmetric Ciphers",
      "link": "https://drive.google.com/your-crypto-ch2"
    },
    {
      "title": "Chapter 3: Asymmetric Ciphers",
      "link": "https://drive.google.com/your-crypto-ch3"
    },
    {
      "title": "Chapter 4: Cryptographic Hash Functions and Digital Signatures",
      "link": "https://drive.google.com/your-crypto-ch4"
    },
    {
      "title": "Chapter 5: Authentication",
      "link": "https://drive.google.com/your-crypto-ch5"
    },
    {
      "title": "Chapter 6: Network Security and Public Key Infrastructure",
      "link": "https://drive.google.com/your-crypto-ch6"
    },
    {
      "title": "Chapter 7: Malicious Logic",
      "link": "https://drive.google.com/your-crypto-ch7"
    },
    {
      "title": "Lab Work: Cryptographic Algorithms and Network Security",
      "link": "https://drive.google.com/your-crypto-lab"
    }
  ]
}
,
   {
  "id": 24,
  "title": "Simulation and Modelling",
  "description": "This course provides an introduction to the modeling and simulation of systems. Topics include system components, types of models, continuous and discrete simulation, queuing theory, Markov chains, random number generation, model validation and verification, analysis of simulation output, and simulation tools and languages like GPSS.",
  "link": "https://drive.google.com/your-simulation-main",
  "chapters": [
    {
      "title": "Chapter 1: Introduction to Simulation",
      "link": "https://drive.google.com/your-simulation-ch1"
    },
    {
      "title": "Chapter 2: Simulation of Continuous and Discrete System",
      "link": "https://drive.google.com/your-simulation-ch2"
    },
    {
      "title": "Chapter 3: Queuing System",
      "link": "https://drive.google.com/your-simulation-ch3"
    },
    {
      "title": "Chapter 4: Markov Chains",
      "link": "https://drive.google.com/your-simulation-ch4"
    },
    {
      "title": "Chapter 5: Random Numbers",
      "link": "https://drive.google.com/your-simulation-ch5"
    },
    {
      "title": "Chapter 6: Verification and Validation",
      "link": "https://drive.google.com/your-simulation-ch6"
    },
    {
      "title": "Chapter 7: Analysis of Simulation Output",
      "link": "https://drive.google.com/your-simulation-ch7"
    },
    {
      "title": "Chapter 8: Simulation of Computer Systems",
      "link": "https://drive.google.com/your-simulation-ch8"
    },
    {
      "title": "Lab Work: Simulation Exercises and Tools (GPSS, Random Generation, Monte Carlo, Queues)",
      "link": "https://drive.google.com/your-simulation-lab"
    }
  ]
}
,
    {
  "id": 25,
  "title": "Web Technology",
  "description": "This course covers the fundamental concepts of HTML, CSS, JavaScript, XML, and PHP. It aims to provide basic knowledge of web design, client-side scripting, handling web data, and server-side scripting.",
  "link": "https://drive.google.com/your-webtech-main-link",
  "chapters": [
    {
      "title": "Unit 1: Introduction",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit 2: Hyper Text Markup Language",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit 3: Cascading Style Sheets",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit 4: Client Side Scripting with JavaScript",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit 5: AJAX and XML",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit 6: Server Side Scripting using PHP",
      "link": "https://drive.google.com/your-link-unit6"
    }
  ]
},
  ],
  6: [
    {
  "id": 26,
  "title": "Software Engineering",
  "description": "This course familiarizes students with different concepts of software engineering mainly focusing on software process models, agile development, requirements engineering, models, design, implementation, testing, evolution, and software project management.",
  "link": "https://drive.google.com/your-software-engineering-main-link",
  "chapters": [
    {
      "title": "Unit 1: Introduction",
      "link": "https://drive.google.com/your-link-unit1"
    },
    {
      "title": "Unit 2: Software Processes",
      "link": "https://drive.google.com/your-link-unit2"
    },
    {
      "title": "Unit 3: Agile Software Development",
      "link": "https://drive.google.com/your-link-unit3"
    },
    {
      "title": "Unit 4: Requirements Engineering",
      "link": "https://drive.google.com/your-link-unit4"
    },
    {
      "title": "Unit 5: System Modeling",
      "link": "https://drive.google.com/your-link-unit5"
    },
    {
      "title": "Unit 6: Architectural Design",
      "link": "https://drive.google.com/your-link-unit6"
    },
    {
      "title": "Unit 7: Design and Implementation",
      "link": "https://drive.google.com/your-link-unit7"
    },
    {
      "title": "Unit 8: Software Testing",
      "link": "https://drive.google.com/your-link-unit8"
    },
    {
      "title": "Unit 9: Software Evolution",
      "link": "https://drive.google.com/your-link-unit9"
    },
    {
      "title": "Unit 10: Software Management",
      "link": "https://drive.google.com/your-link-unit10"
    }
  ]
}
,
    {
  "id": 27,
  "title": "Compiler Design and Construction",
  "description": "This course develops understanding of compiler architecture, focusing on the various phases including lexical analysis, parsing, syntax-directed translation, type checking, intermediate code generation, and optimization. Students will gain practical skills in building components of compilers.",
  "link": "https://drive.google.com/your-compiler-main",
  "chapters": [
    {
      "title": "Unit 1: Introduction to Compiler",
      "link": "https://drive.google.com/your-compiler-unit1"
    },
    {
      "title": "Unit 2: Lexical Analyzer",
      "link": "https://drive.google.com/your-compiler-unit2"
    },
    {
      "title": "Unit 3: Symbol Table Design and Runtime Storage Management",
      "link": "https://drive.google.com/your-compiler-unit3"
    },
    {
      "title": "Unit 4: Intermediate Code Generator, Code Generator, Optimization and Case studies",
      "link": "https://drive.google.com/your-compiler-unit4"
    }
  ]
}
,
   {
  "id": 28,
  "title": "E-Governance",
  "description": "This course familiarizes students with concepts of E-Government and E-Governance, including models, infrastructure development, security, and the application of data warehousing and data mining in governance.",
  "link": "https://drive.google.com/your-e-governance-main",
  "chapters": [
    {
      "title": "Unit 1: Introduction to E-Government and E-Governance",
      "link": "https://drive.google.com/your-e-governance-unit1"
    },
    {
      "title": "Unit 2: Models of E-Governance",
      "link": "https://drive.google.com/your-e-governance-unit2"
    },
    {
      "title": "Unit 3: E-Government Infrastructure Development",
      "link": "https://drive.google.com/your-e-governance-unit3"
    },
    {
      "title": "Unit 4: Security for e-Government",
      "link": "https://drive.google.com/your-e-governance-unit4"
    },
    {
      "title": "Unit 5: Applications of Data Warehousing and Data Mining in Government",
      "link": "https://drive.google.com/your-e-governance-unit5"
    },
    {
      "title": "Unit 6: Case Studies",
      "link": "https://drive.google.com/your-e-governance-unit6"
    }
  ]
}
,
    {
  "id": 29,
  "title": "NET Centric Computing",
  "description": "This course covers concepts of cross-platform web application development using the ASP.NET Core MVC framework with C# programming language.",
  "link": "https://drive.google.com/your-net-centric-main",
  "chapters": [
    {
      "title": "Unit 1: Language Preliminaries",
      "link": "https://drive.google.com/your-net-centric-unit1"
    },
    {
      "title": "Unit 2: Introduction to ASP.NET",
      "link": "https://drive.google.com/your-net-centric-unit2"
    },
    {
      "title": "Unit 3: HTTP and ASP.NET Core",
      "link": "https://drive.google.com/your-net-centric-unit3"
    },
    {
      "title": "Unit 4: Creating ASP.NET core MVC applications",
      "link": "https://drive.google.com/your-net-centric-unit4"
    },
    {
      "title": "Unit 5: Working with Database",
      "link": "https://drive.google.com/your-net-centric-unit5"
    },
    {
      "title": "Unit 6: State Management on ASP.NET Core Application",
      "link": "https://drive.google.com/your-net-centric-unit6"
    },
    {
      "title": "Unit 7: Client-side Development in ASP.NET Core",
      "link": "https://drive.google.com/your-net-centric-unit7"
    },
    {
      "title": "Unit 8: Securing in ASP.NET Core Application",
      "link": "https://drive.google.com/your-net-centric-unit8"
    },
    {
      "title": "Unit 9: Hosting and Deploying ASP.NET Core Application",
      "link": "https://drive.google.com/your-net-centric-unit9"
    }
  ]
}
,
    {
  "id": 30,
  "title": "Technical Writing",
  "description": "This course is designed to enhance students' skills for workplace writing, focusing on listening, researching, planning, composing, revising, and editing documents used in business, science, hi-tech, and other practical fields.",
  "link": "https://drive.google.com/your-technical-writing-main",
  "chapters": [
    {
      "title": "Unit 1: What Is Technical Writing",
      "link": "https://drive.google.com/your-technical-writing-unit1"
    },
    {
      "title": "Unit 2: Audience and Purpose",
      "link": "https://drive.google.com/your-technical-writing-unit2"
    },
    {
      "title": "Unit 3: Writing Process",
      "link": "https://drive.google.com/your-technical-writing-unit3"
    },
    {
      "title": "Unit 4: Brief Correspondence",
      "link": "https://drive.google.com/your-technical-writing-unit4"
    },
    {
      "title": "Unit 5: Document Design and Graphics",
      "link": "https://drive.google.com/your-technical-writing-unit5"
    },
    {
      "title": "Unit 6: Writing for the Web",
      "link": "https://drive.google.com/your-technical-writing-unit6"
    },
    {
      "title": "Unit 7: Information Reports",
      "link": "https://drive.google.com/your-technical-writing-unit7"
    },
    {
      "title": "Unit 8: Employment Communication",
      "link": "https://drive.google.com/your-technical-writing-unit8"
    },
    {
      "title": "Unit 9: Presentations",
      "link": "https://drive.google.com/your-technical-writing-unit9"
    },
    {
      "title": "Unit 10: Recommendation Reports",
      "link": "https://drive.google.com/your-technical-writing-unit10"
    },
    {
      "title": "Unit 11: Proposals",
      "link": "https://drive.google.com/your-technical-writing-unit11"
    },
    {
      "title": "Unit 12: Ethics in the Workplace",
      "link": "https://drive.google.com/your-technical-writing-unit12"
    }
  ]
}
,
  ],
  7: [
    {
  "id": 31,
  "title": "Advanced Java Programming",
  "description": "This course familiarizes students with basic as well as advanced features of Java Programming. Emphasis is given to GUI and event-driven programming, Database Connectivity, Socket Programming, Servlets and JSP Technology, and Distributed Programming.",
  "link": "https://drive.google.com/your-advanced-java-main",
  "chapters": [
    {
      "title": "Unit 1: Programming in Java",
      "link": "https://drive.google.com/your-advanced-java-unit1"
    },
    {
      "title": "Unit 2: User Interface Components with Swing",
      "link": "https://drive.google.com/your-advanced-java-unit2"
    },
    {
      "title": "Unit 3: Event Handling",
      "link": "https://drive.google.com/your-advanced-java-unit3"
    },
    {
      "title": "Unit 4: Database Connectivity",
      "link": "https://drive.google.com/your-advanced-java-unit4"
    },
    {
      "title": "Unit 5: Network Programming",
      "link": "https://drive.google.com/your-advanced-java-unit5"
    },
    {
      "title": "Unit 6: GUI with JavaFX",
      "link": "https://drive.google.com/your-advanced-java-unit6"
    },
    {
      "title": "Unit 7: Servlets and Java Server Pages",
      "link": "https://drive.google.com/your-advanced-java-unit7"
    },
    {
      "title": "Unit 8: RMI and CORBA",
      "link": "https://drive.google.com/your-advanced-java-unit8"
    }]
}
,
    {
  "id": 32,
  "title": "Data Warehousing and Data Mining",
  "description": "This course introduces advanced aspects of data warehousing and data mining, encompassing the principles, research results and commercial application of the current technologies.",
  "link": "https://drive.google.com/your-data-warehousing-mining-main",
  "chapters": [
    {
      "title": "Unit 1: Introduction to Data Warehousing",
      "link": "https://drive.google.com/your-data-warehousing-unit1"
    },
    {
      "title": "Unit 2: Introduction to Data Mining",
      "link": "https://drive.google.com/your-data-mining-unit2"
    },
    {
      "title": "Unit 3: Data Preprocessing",
      "link": "https://drive.google.com/your-data-preprocessing-unit3"
    },
    {
      "title": "Unit 4: Data Cube Technology",
      "link": "https://drive.google.com/your-data-cube-unit4"
    },
    {
      "title": "Unit 5: Mining Frequent Patterns",
      "link": "https://drive.google.com/your-frequent-patterns-unit5"
    },
    {
      "title": "Unit 6: Classification and Prediction",
      "link": "https://drive.google.com/your-classification-unit6"
    },
    {
      "title": "Unit 7: Cluster Analysis",
      "link": "https://drive.google.com/your-cluster-analysis-unit7"
    },
    {
      "title": "Unit 8: Graph Mining and Social Network Analysis",
      "link": "https://drive.google.com/your-graph-mining-unit8"
    },
    {
      "title": "Unit 9: Mining Spatial, Multimedia, Text and Web Data",
      "link": "https://drive.google.com/your-spatial-mining-unit9"
    }
  ],
}
,
    {
  "id": 33,
  "title": "Principles of Management",
  "description": "This course contains The Nature of Organizations, Introduction to Management, Evolution of Management Thought, Environmental Context of Management, Planning and Decision Making, Organizing Function, Leadership, Motivation, Communication, Control and Quality Management, Global Context of Management, Management Trends and Scenario in Nepal.",
  "link": "https://drive.google.com/your-principles-management-main",
  "chapters": [
    {
      "title": "Unit 1: The Nature of Organizations",
      "link": "https://drive.google.com/your-mgt411-unit1"
    },
    {
      "title": "Unit 2: Introduction to Management",
      "link": "https://drive.google.com/your-mgt411-unit2"
    },
    {
      "title": "Unit 3: Evolution of Management Thought",
      "link": "https://drive.google.com/your-mgt411-unit3"
    },
    {
      "title": "Unit 4: Environmental Context of Management",
      "link": "https://drive.google.com/your-mgt411-unit4"
    },
    {
      "title": "Unit 5: Planning and Decision Making",
      "link": "https://drive.google.com/your-mgt411-unit5"
    },
    {
      "title": "Unit 6: Organizing Function",
      "link": "https://drive.google.com/your-mgt411-unit6"
    },
    {
      "title": "Unit 7: Leadership & Conflict",
      "link": "https://drive.google.com/your-mgt411-unit7"
    },
    {
      "title": "Unit 8: Motivation",
      "link": "https://drive.google.com/your-mgt411-unit8"
    },
    {
      "title": "Unit 9: Communication",
      "link": "https://drive.google.com/your-mgt411-unit9"
    },
    {
      "title": "Unit 10: Control and Quality Management",
      "link": "https://drive.google.com/your-mgt411-unit10"
    },
    {
      "title": "Unit 11: Global Context of Management",
      "link": "https://drive.google.com/your-mgt411-unit11"
    },
    {
      "title": "Unit 12: Management Trends and Scenario in Nepal",
      "link": "https://drive.google.com/your-mgt411-unit12"
    }
  ],
}
,
    {
      id: 34,
      title: 'Project Work',
      description: '',
      link: 'https://drive.google.com/your-co-link',
      chapters: [],
    },
  ],
  8: [
    {
  "id": 35,
  "title": "Advanced Database",
  "description": "This course explores advanced concepts in database systems including enhanced E-R models, object and object-relational databases, query optimization, distributed databases, NoSQL systems, and Big Data processing with technologies like MapReduce and Hadoop. Students will gain both theoretical and practical knowledge in advanced data management technologies.",
  "link": "https://drive.google.com/your-advanced-db-main",
  "chapters": [
    {
      "title": "Chapter 1: Enhanced E-R Model and Relational Model",
      "link": "https://drive.google.com/your-advanced-db-ch1"
    },
    {
      "title": "Chapter 2: Object and Object Relational Databases",
      "link": "https://drive.google.com/your-advanced-db-ch2"
    },
    {
      "title": "Chapter 3: Query Processing and Optimization",
      "link": "https://drive.google.com/your-advanced-db-ch3"
    },
    {
      "title": "Chapter 4: Distributed Databases, NoSQL Systems, and BigData",
      "link": "https://drive.google.com/your-advanced-db-ch4"
    },
    {
      "title": "Chapter 5: Advanced Database Models, Systems, and Applications",
      "link": "https://drive.google.com/your-advanced-db-ch5"
    },
    {
      "title": "Lab Work: Advanced Database Implementation and Mini Project",
      "link": "https://drive.google.com/your-advanced-db-lab"
    }
  ]
}
,
   {
  "id": 36,
  "title": "Internship",
  "description": "This course provides real-world industry experience to students, allowing them to apply theoretical and practical knowledge in a professional environment. It emphasizes industry exposure, professional conduct, and the development of pragmatic skills.",
  "link": "https://drive.google.com/your-internship-main",
  "chapters": [
    {
      "title": "Unit 1: Internship Guidelines",
      "link": "https://drive.google.com/your-internship-guidelines"
    },
    {
      "title": "Unit 2: Internship Report Content",
      "link": "https://drive.google.com/your-internship-report"
    }
  ]
}
,
  ],
};



export default function Courses() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <main className="p-6 sm:p-10 md:p-14 lg:p-20 flex-1">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-10">📚 BSc CSIT Courses</h1>

          {/* Semester buttons */}
          <div className="mb-10 flex flex-wrap gap-4">
            {Object.keys(semestersData).map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(Number(sem))}
                className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-300
                  ${selectedSemester === Number(sem)
                    ? 'bg-blue-600 text-white scale-105'
                    : 'bg-white text-gray-800 hover:bg-blue-100'}`}
              >
                Semester {sem}
              </button>
            ))}
          </div>

          {/* Notes display */}
          <BscCsitNotes notes={semestersData[selectedSemester]} />
        </main>
      </div>
    </>
  );
}
