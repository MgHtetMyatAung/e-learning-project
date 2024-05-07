import { Courses1, Courses2, Courses3, Courses4, Courses5, Courses6 } from "./assets/images"

const monthly = {
        normal :{
            plan : "Free Plan",
            fee : 0,
            access : [
                "Access to selected free courses.",
                "Limited course materials and resources.",
                "Basic community support.",
                "No certification upon completion.",
                "Ad-supported platform.",
            ],
            notAccess : [
                "Access to exclusive Pro Plan community forums.",
                "Early access to new courses and updates.",
            ]
        },
        pro : {
            plan : "Pro Plan",
            fee : 79,
            access : [
                "Unlimited access to all courses.",
                "Unlimited course materials and resources.",
                "Priority support from instructors.",
                "Course completion certificates.",
                "Ad-free experience.",
                "Access to exclusive Pro Plan community forums.",
                "Early access to new courses and updates.",

            ],
            notAccess : "",
        }

    }

const yearly = {
    normal :{
        plan : "Free Plan",
        fee : 0,
        access : [
            "Access to selected free courses.",
            "Limited course materials and resources.",
            "Basic community support.",
            "No certification upon completion.",
            "Ad-supported platform.",
        ],
        notAccess : [
            "Access to exclusive Pro Plan community forums.",
            "Early access to new courses and updates.",
        ]
    },
    pro : {
        plan : "Pro Plan",
        fee : 59,
        access : [
            "Unlimited access to all courses.",
            "Unlimited course materials and resources.",
            "Priority support from instructors.",
            "Course completion certificates.",
            "Ad-free experience.",
            "Access to exclusive Pro Plan community forums.",
            "Early access to new courses and updates.",

        ],
        notAccess : "",
    }

}

const FAQ = [
    {
        id : 1,
        head : "Can I enroll in multiple courses at once?",
        body : "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
        id : 2,
        head : "What kind of support can I expect from instructors?",
        body : "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
        id : 3,
        head : "Are the courses self-paced or do they have specific start and end dates?",
        body : "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
        id : 4,
        head : "Can I download the course materials for offline access?",
        body : "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
]

const benefits = [
    {
        id : 1,
        head : "Flexible Learning Schedule",
        body : "Fit your coursework around your existing commitments and obligations.",
    },
    {
        id : 2,
        head : "Expert Instruction",
        body : "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
        id : 3,
        head : "Diverse Course Offerings",
        body : "Explore a wide range of design and development courses covering various topics.",
    },
    {
        id : 4,
        head : "Updated Curriculum",
        body : "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
        id : 5,
        head : "Practical Projects and Assignments",
        body : "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
        id : 6,
        head : "Interactive Learning Environment",
        body : "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
]

const courses = [
    {
        id : 1,
        src : Courses1,
        week :"4 Weeks",
        tag :'Beginner',
        author :'John Smith',
        head :'Web Design Fundamentals',
        body :'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    },
    {
        id : 2,
        src : Courses2,
        week : '6 Weeks',
        tag : 'Intermediate',
        author : 'Emily Johnson',
        head : 'UI/UX Design',
        body : 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',

    },
    {
        id : 3,
        src : Courses3,
        week : '8 Weeks',
        tag : 'Intermediate',
        author : 'David Brown',
        head : 'Mobile App Development',
        body : 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',

    },
    {
        id : 4,
        src : Courses4,
        week : '10 Weeks',
        tag : 'Beginner',
        author : 'Sarah Thompson',
        head : 'Graphic Design for Beginners',
        body : 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    },
    {
        id : 5,
        src : Courses5,
        week : '10 Weeks',
        tag : 'Intermediate',
        author : 'Michael Adams',
        head : 'Front-End Web Development',
        body : 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    },
    {
        id : 6,
        src : Courses6,
        week : '6 Weeks',
        tag : 'Advance',
        author : 'Jennifer Wilson',
        head : 'Advanced JavaScript',
        body : 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',

    }
]
export { monthly, yearly, FAQ, benefits, courses }