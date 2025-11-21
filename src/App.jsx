import React, { useState } from 'react'
import { Sparkles } from 'lucide-react'
import './App.css'


function AdPopup(props) {
    const [showAd, setShowAd] = useState(true);
    if(!showAd) return null;
    return(
        <div className={"ad-popup"}>
            <p><b>{props.saleName} Sale!</b> Sitewide deals from {props.bottomPrice}. Ends {props.endDate}.</p>
            <button onClick={() => setShowAd(false)}>X</button>
        </div>
    )
}

function Navbar(props) {
    return (
        <div className={"navbar"}>
            <img className={"UdemyLogo"} src={"https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"} alt={"Udemy Image"} />
            <a href={"https://udemy.com"}>Explore</a>
            <div className={"searchBox"}>
                <i className={"fas fa-search"}></i>
                <input placeholder={"Search for anything"}/>
            </div>
            <a href={"https://udemy.com"}>Plans & Pricing</a>
            <a href={"https://udemy.com"}>Udemy Business</a>
            <i className="fas fa-shopping-cart"></i>
            <button className={"loginButton"}><b>Log in</b></button>
            <button className={"signUpButton"}><b>Sign up</b></button>
            <i className="fas fa-globe"></i>
        </div>
    )
}


function Banner(props) {
    return (
        <div className={"bannerDiv"}>
            <img className={"banner"} src = {"https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg"} />
            <div className={"banner-text-box"}><h1>Learn more, spend less — Black Friday Sale from E£279.99</h1><p>Sitewide savings on thousands of courses. Ends Nov 28.</p></div>
        </div>
    )
}

// make generic text box class
function SkillsCarousel(props) {
    const skills = props.skills;

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3;

    const nextSlide = () => {
        if (currentIndex < skills.length - itemsPerSlide) {
            setCurrentIndex(currentIndex + itemsPerSlide);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerSlide);
        }
    };

    const visibleSkills = skills.slice(currentIndex, currentIndex + itemsPerSlide);
    const totalPages = Math.ceil(skills.length / itemsPerSlide);

    return (
        <>
        <div className={"learnSkillsContainer"}>
            <div className={"generic-text-box"}>
                <h2>Learn essential career and life skills</h2><p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
            </div>
            <div className={"carousel"}>
                {visibleSkills.map((skill) => (
                    <div className={"skill-card"} key={skill.name}>
                        <div className={"skill-card-image"} style={{backgroundImage: `url(${skill.background_image})`}}>
                            <div className={"skill-card-overlay"}>
                                <div className={"skill-card-text"}>
                                    <div className={"skill-card-participants"}>
                                        <i className={"fas fa-user-friends"}></i>
                                        <span className={"skill-participants-number"}>{skill.numberOfParticipants}</span>
                                    </div>
                                    <h3>{skill.name}</h3>
                                    <i className={"fas fa-arrow-right-long"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <div className={"Slider"}>
                <i className={"fas fa-arrow-left-long"} onClick={prevSlide} style={{cursor: 'pointer'}}></i>

                {Array.from({ length: totalPages }).map((_, index) => (
                    <i
                        key={index}
                        className={currentIndex / itemsPerSlide === index ? "fas fa-circle active-dot" : "fas fa-circle"}
                        onClick={() => setCurrentIndex(index * itemsPerSlide)}
                        style={{cursor: 'pointer'}}
                    ></i>
                ))}

                <i className={"fas fa-arrow-right-long"} onClick={nextSlide} style={{cursor: 'pointer'}}></i>
            </div>
        </>
    )
}

function PersonalPlan(){
    return (
        <div className={"personal-plan-container"}>
        <div className={"personal-plan"}>
            <h1>Reimagine your career in the AI era</h1>
            <p className={"plan-text"}>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
            <ul>
                <li><Sparkles size={16} className="ud-icon" /><span>   Learn AI and more</span></li>
                <li><i className={"fas fa-trophy"}></i><span>   Prep for a certification</span></li>
                <li><i className={"fas fa-message"}></i><span>   Practice with AI coaching</span></li>
                <li><i className={"fas fa-lightbulb"}></i><span>   Advance your career</span></li>
            </ul>
            <a className={"personal-plan-learn-more"} href={"https://udemy.com"}>Learn more</a>
            <div className={"learn-more-text"}>Starting at E£204.00/month</div>
        </div>
        <img src = "https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"/>
        </div>
    )
}

function CoursesCarousel(props) {
    const coursesArray = props.courses;
    const [chosenSkill, setSkill] = React.useState(coursesArray[0]?.skill);
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const coursesPerSlide = 4;

    function ChooseSkill(skillChoice) {
        setSkill(skillChoice);
        setCurrentCourseIndex(0); // Reset to first slide when changing skill
    }

    const currentSkillCourses = coursesArray
        .filter((skillCategory) => skillCategory.skill === chosenSkill)
        .flatMap((skillCategory) => skillCategory.courses);

    const visibleCourses = currentSkillCourses.slice(
        currentCourseIndex,
        currentCourseIndex + coursesPerSlide
    );

    const nextCourses = () => {
        if (currentCourseIndex < currentSkillCourses.length - coursesPerSlide) {
            setCurrentCourseIndex(currentCourseIndex + 1);
        }
    };

    const prevCourses = () => {
        if (currentCourseIndex > 0) {
            setCurrentCourseIndex(currentCourseIndex - 1);
        }
    };

    return(
        <div className={"courses-container"}>
            <div className={"courses-text"}>
                <h1>Skills to transform your career and life</h1>
                <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            </div>
            <div className={"skill-list"}>
                {coursesArray.map((course) => (
                    <div
                        className={course.skill === chosenSkill ? "skill-item skill-item-active" : "skill-item"}
                        key={course.skill}
                        onClick={() => ChooseSkill(course.skill)}
                    >
                        {course.skill}
                    </div>
                ))}
            </div>

            <div className={"courses-carousel-container"}>
                <button
                    className={"course-nav-button prev"}
                    onClick={prevCourses}
                    disabled={currentCourseIndex === 0}
                >
                    <i className={"fas fa-chevron-left"}></i>
                </button>

                <div className={"courses-carousel"}>
                    {visibleCourses.map((course, index) => (
                        <div
                            className={"course-item"}
                            key={course.courseName}
                            onMouseEnter={() => setHoveredCourse(course.courseName)}
                            onMouseLeave={() => setHoveredCourse(null)}
                        >
                            <img src={course.image} alt={course.courseName} />
                            <span className={"course-name"} style={{fontWeight: "bold"}}>{course.courseName}</span>
                            <div className={"course-author"}>{course.author}</div>
                            <div className={"course-preference"}>
                                {course.ribbon && <span className={"course-ribbon"}>{course.ribbon}</span>}
                                <span className={"course-rating"}>⭐{course.rating}</span>
                                <span className={"course-reviews"}>({course.reviews})</span>
                            </div>
                            <div className={"course-discounts"}>
                                <span className={"course-new-price"}>{course.discountedPrice}</span>
                                <span className={"course-old-price"}>{course.oldPrice}</span>
                            </div>

                            {hoveredCourse === course.courseName && (
                                <div className={index >= 2 ? "course-details-popup popup-left" : "course-details-popup popup-right"}>
                                    <h3>{course.courseName}</h3>
                                    <p className={"popup-author"}>By {course.author}</p>
                                    <p className={"popup-rating"}>⭐ {course.rating} ({course.reviews} ratings)</p>
                                    <div className={"popup-price"}>
                                        <span className={"popup-new-price"}>{course.discountedPrice}</span>
                                        <span className={"popup-old-price"}>{course.oldPrice}</span>
                                    </div>
                                    {course.ribbon && <span className={"popup-ribbon"}>{course.ribbon}</span>}
                                    <button className={"add-to-cart-btn"}>Add to Cart</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    className={"course-nav-button next"}
                    onClick={nextCourses}
                    disabled={currentCourseIndex >= currentSkillCourses.length - coursesPerSlide}
                >
                    <i className={"fas fa-chevron-right"}></i>
                </button>
            </div>
        </div>
    )
}
function Partners(props) {
    const partnersArray = props.partners;
    return (
        <div className={"partners"}>
            <p>Trusted by over 17,000 companies and millions of learners around the world</p>
            <div className={"partners-grid"}>
                {partnersArray.map((partner, index) => (
                    <div key={index} className={"partner-logo"}>
                        <img src={partner.image} alt={partner.alt}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

function App() {
    let skillsArray=[
        {
            numberOfParticipants: "17M+",
            name: "Generative AI",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png"
        },
        {
            numberOfParticipants: "14M+",
            name: "IT Certifications",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png"
        },
        {
            numberOfParticipants: "8.1M+",
            name: "Data Science",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png"
        },
        {
            numberOfParticipants: "5M+",
            name: "ChatGPT",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/6cHWrhYDsqfm3k3qfR6gTO/04e768400c598dfa316114282b192987/chat-gpt.png"
        },
        {
            numberOfParticipants: "730K+",
            name: "Prompt Engineering",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/q3tO2sZZ2Yac553k4toUk/83f80d69707016415b2c920f783544ee/prompt-engineering.png"
        },
        {
            numberOfParticipants: "19M+",
            name: "Microsoft Excel",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/k1oBUBSt7HkX1MNMZDSmu/847e2f3a8241e5ccfec6d463880a40b9/microsoft-excel.png"
        },
        {
            numberOfParticipants: "210K+",
            name: "Large Language Models",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/1YfP8zHzS2YiM6qZIEKnb5/f9489770caeae8f89a93176bac6f325f/llms.png"
        },
        {
            numberOfParticipants: "9.1M+",
            name: "Machine Learning",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/2SJtnzA20BNcQYEBhriorE/019b455cc5d0e9cb3857517f7701f0db/machine-learning.png"
        },
        {
            numberOfParticipants: "330K+",
            name: "AI Agents",
            background_image: "https://cms-images.udemycdn.com/96883mtakkm8/6mOgmhAwn7Z9aexIaKVm0/d19d702ccf6370c17592ce786aa0fc6d/ai-agents.png"}
    ];
    let coursesArray = [
        {
            skill: "Artificial Intelligence (AI)",
            courses: [
              {
                  courseName: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
                  author: "365 Careers",
                  ribbon: "Bestseller",
                  rating: 4.6,
                  reviews: "11,778",
                  discountedPrice: "E£309.99",
                  oldPrice: "E£349.99",
                  image: "https://img-c.udemycdn.com/course/240x135/6112535_7103.jpg"
              },
              {
                  courseName: "Intro to AI Agents and Agentic AI",
                  author: "365 Careers",
                  ribbon: "Bestseller",
                  rating: 4.4,
                  reviews: "1,806",
                  discountedPrice: "E£309.99",
                  oldPrice: "E£349.99",
                  image: "https://img-c.udemycdn.com/course/240x135/6791359_66d8_2.jpg"
              },
              {
                  courseName: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
                  author: "Hadelin de Ponteves, Kirill Eremenko, SuperDataScience Team, Ligency ​",
                  ribbon: "Premium",
                  rating: 4.4,
                  reviews: "4,859",
                  discountedPrice: "579.99",
                  oldPrice: "E£719.99",
                  image: "https://img-c.udemycdn.com/course/240x135/1990136_15e0_10.jpg"
              },
              {
                  courseName: "Data Science & AI Masters 2025 - From Python To Gen AI",
                  author: "Dr. Satyajit Pattnaik, Satyajit Pattnaik",
                  ribbon: "Bestseller",
                  rating: 4.5,
                  reviews: "1,623",
                  discountedPrice: "309.99",
                  oldPrice: "E£349.99",
                  image: "https://img-c.udemycdn.com/course/240x135/6342521_3968_2.jpg"
              },
              {
                  courseName: "AI Engineer Explorer Certificate Course",
                  author: "School of AI",
                  ribbon: "Premium",
                  rating: 4.5,
                  reviews: "188",
                  discountedPrice: "309.99",
                  oldPrice: "E£349.99",
                  image: "https://img-c.udemycdn.com/course/240x135/6667275_efc1_3.jpg"
              }
          ]
        },
        {
            skill: "Python",
            courses: [
                {
                    courseName: "100 Days of Code™: The Complete Python Pro Bootcamp",
                    author: "Dr. Angela Yu, Developer and Lead Instructor",
                    ribbon: "Bestseller",
                    rating: 4.7,
                    reviews: "400,508",
                    discountedPrice: "E£519.99",
                    oldPrice: "E£689.99",
                    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                },
                {
                    courseName: "The Complete Python Bootcamp From Zero to Hero in Python",
                    author: "Jose Portilla, Pierian Training",
                    ribbon: "Premium",
                    rating: 4.6,
                    reviews: "551,285",
                    discountedPrice: "E£399.99",
                    oldPrice: "E£539.99",
                    image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
                },
                {
                    courseName: "Complete Python with AI Skills to Get Your Dream IT Job",
                    author: "Imran Afzal",
                    ribbon: "Bestseller",
                    rating: 4.7,
                    reviews: "500",
                    discountedPrice: "E£309.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6258083_9a52_3.jpg"
                },
                {
                    courseName: "Automate the Boring Stuff with Python Programming",
                    author: "AI Sweigart",
                    ribbon: "Premium",
                    rating: 4.6,
                    reviews: "118,035",
                    discountedPrice: "E£539.99",
                    oldPrice: "E£719.99",
                    image: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg"
                },
                {
                    courseName: "The Ultimate Python Bootcamp: Learn by Building 50 Projects",
                    author: "Hitesh Choudhary",
                    ribbon: "Premium",
                    rating: 4.7,
                    reviews: "1,396",
                    discountedPrice: "E£259.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6629195_fdfd_3.jpg"
                }
            ]
        },
        {
            skill: "Microsoft Excel",
            courses: [
                {
                    courseName: "Microsoft Excel - Excel from Beginner to Advanced",
                    author: "Kyle Pew • 2,000,000+ Students, Office Newb",
                    ribbon: "Bestseller",
                    rating: 4.7,
                    reviews: "514,253",
                    discountedPrice: "E£279.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/793796_0e89_4.jpg"
                },
                {
                    courseName: "MICROSOFT EXCEL: Excel From Basic to Advanced Excel",
                    author: "MICROSOFT EXCEL: Excel From Basic to Advanced Excel (Ms Excel, Advanced Microsoft Excel, Excel Vba, Data Analysis)",
                    ribbon: "",
                    rating: 4.5,
                    reviews: "113",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6754755_fad5_2.jpg"
                },
                {
                    courseName: "Zero to Hero in Microsoft Excel: Complete Excel with Copilot",
                    author: "Start-Tech Academy",
                    ribbon: "Premium",
                    rating: 4.6,
                    reviews: "41,069",
                    discountedPrice: "E£279.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/2605732_e3d5_3.jpg"
                },
                {
                    courseName: "EXCEL: Master Microsoft Excel from Basics to Advanced Excel",
                    author: "EXCEL: Microsoft Excel Basic to Advanced Excel (data analytics I financial modeling I ms excel I data analyst)",
                    ribbon: "Hot & New",
                    rating: 4.5,
                    reviews: "81",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6807031_7bbf_3.jpg"
                },
                {
                    courseName: "Beginner to Pro in Excel: Financial Modeling and Valuation",
                    author: "365 Careers",
                    ribbon: "Bestseller",
                    rating: 4.6,
                    reviews: "59,226",
                    discountedPrice: "E£309.99",
                    oldPrice: "E£449.99",
                    image: "https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg"
                }
            ]
        },
        {
            skill: "AI Agents & Agentic AI",
            courses: [
                {
                    courseName: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
                    author: "Ed Donner, Ligency",
                    ribbon: "Bestseller",
                    rating: 4.7,
                    reviews: "21,332",
                    discountedPrice: "E£309.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6566789_2e8a_10.jpg"
                },
                {
                    courseName: "AI Engineer MLOps Track: Deploy Gen AI & Agentic AI at Scale",
                    author: "Ligency, Ed Donner",
                    ribbon: "Highest Rated",
                    rating: 4.8,
                    reviews: "950",
                    discountedPrice: "E£259.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6819669_be93_4.jpg"
                },
                {
                    courseName: "AI Agents & Workflows - The Practical Guide",
                    author: "Maximilian Schwarzmüller",
                    ribbon: "Bestseller",
                    rating: 4.6,
                    reviews: "1,954",
                    discountedPrice: "E£309.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6690685_91cb_3.jpg"
                },
                {
                    courseName: "AI Agents Crash Course: Build with Python & OpenAI",
                    author: "Sundog Education by Frank Kane, Zoltan C. Toth, Frank Kane",
                    ribbon: "Hot & New",
                    rating: 4.6,
                    reviews: "189",
                    discountedPrice: "E£259.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6829371_8c5e_2.jpg"
                },
                {
                    courseName: "AI Agents & AI Automation - The Practical Agentic AI Guide",
                    author: "Nikolai Schuler, Simon Coton",
                    ribbon: "Premium",
                    rating: 4.6,
                    reviews: "1,030",
                    discountedPrice: "E£309.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6629995_d645_5.jpg"
                }
            ]
        },
        {
            skill: "Digital Marketing",
            courses: [
                {
                    courseName: "Full Digital Marketing Course 2025: PPC, SEO, SMM, GTM, GA4",
                    author: "Digital School",
                    ribbon: "",
                    rating: 4.6,
                    reviews: "141",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6592573_f61f.jpg"
                },
                {
                    courseName: "The Complete Digital Marketing Guide - 27 Courses in 1",
                    author: "Robin & Jesper",
                    ribbon: "Bestseller",
                    rating: 4.6,
                    reviews: "49,761",
                    discountedPrice: "E£279.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/1659676_128a_19.jpg"
                },
                {
                    courseName: "Digital Marketing bootcamp 2025: SEO, PPC, SMM, GTM, Email!",
                    author: "Tanmoy Das",
                    ribbon: "",
                    rating: 456,
                    reviews: "40",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6707443_ef4a.jpg"
                },
                {
                    courseName: "AI for Creative Marketing and Customer Experience",
                    author: "John Doukasse | MoneyStars",
                    ribbon: "Bestseller",
                    rating: 4.8,
                    reviews: "25",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6736599_89fe_3.jpg"
                },
                {
                    courseName: "Full Digital Marketing Course 2025: SEO, Paid Ads, SMM, GTM!",
                    author: "Tanmoy Das",
                    ribbon: "Premium",
                    rating: 4.5,
                    reviews: "840",
                    discountedPrice: "E£249.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6256927_7f01.jpg"
                }
            ]
        },
        {
            skill: "Amazon AWS",
            courses: [
                {
                    courseName: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
                    author: "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
                    ribbon: "Bestseller",
                    rating: 4.7,
                    reviews: "271,013",
                    discountedPrice: "E£299.99",
                    oldPrice: "E£379.99",
                    image: "https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg"
                },
                {
                    courseName: "AWS From Zero to Hero - The Complete Guide",
                    author: "Memi Lavi",
                    ribbon: "",
                    rating: 4.6,
                    reviews: "71",
                    discountedPrice: "E£259.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6546289_05cc_2.jpg"
                },
                {
                    courseName: "AWS Certified Solutions Architect Associate (SAA-C03) Course",
                    author: "Neal Davis | AWS Certified Solutions Architect & Developer, Digital Cloud Training | AWS Certified Cloud Practitioner AWS Certified Solutions Architect, AWS Developer Associate",
                    ribbon: "Premium",
                    rating: "4.6",
                    reviews: "21,972",
                    discountedPrice: "E£279.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/2469516_ab87_11.jpg"
                },
                {
                    courseName: "AWS Essentials: A Complete Beginner's Guide",
                    author: "Learnify IT",
                    ribbon: "",
                    rating: 4.4,
                    reviews: "559",
                    discountedPrice: "E£259.99",
                    oldPrice: "E£349.99",
                    image: "https://img-c.udemycdn.com/course/240x135/6137243_6d44.jpg"
                },
                {
                    courseName: "AWS Certified Cloud Practictioner (CLF-C02) Exam Training",
                    author: "Neal Davis | AWS Certified Solutions Architect & Developer, Digital Cloud Training | AWS Certified Cloud Practitioner AWS Certified Solutions Architect, AWS Developer Associate",
                    ribbon: "Premium",
                    rating: 4.6,
                    reviews: "38,626",
                    discountedPrice: "E£299.99",
                    oldPrice: "E£379.99",
                    image: "https://img-c.udemycdn.com/course/240x135/2645936_2526_8.jpg"
                }
            ]
        }
    ];
    let partnersArray = [
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg",
            alt : "Volkswagen Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg",
            alt : "Samsung Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg",
            alt : "Cisco Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg",
            alt : "Vimeo Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg",
            alt : "P&G Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg",
            alt : "Hewlett Packard Enterprise Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg",
            alt : "Citi Logo"
        },
        {
            image : "https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg",
            alt : "Ericsson Logo"
        },
    ];
  return (
    <>
        <AdPopup saleName={"Black Friday"} bottomPrice={"E£279.99"} endDate={"Nov 28"}/>
        <Navbar />
        <Banner />
        <SkillsCarousel skills = {skillsArray} />
        <PersonalPlan />
        <CoursesCarousel courses = {coursesArray} />
        <Partners partners = {partnersArray} />
        {/*}
        <EssentialSkills>
            <div>
                <h2>Learn Essential career and life skills</h2>
                <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
            </div>
            <CardList>
                <BgIMG></BgIMG>
                <div className={"Info-box"}>
                    <div className={"pNum"}>
                        <image>ppl icon</image>
                        <p>number in millions</p>
                    </div>
                    <h3>Skill Name</h3>
                    <button>Go to -></button>
                </div>
            </CardList>
            <Slider>
                <button>Left</button>
                <Slider></Slider>
                <button>Right</button>
            </Slider>
        </EssentialSkills>

        <PersonalPlan>
            <h3>Reimagine your career in the AI era</h3>
            <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
            <ul>
                <li>
                    <image>AI Logo</image>
                    <p>Learn AI and more</p>
                </li>
                <li>
                    <image>Certification Logo</image>
                    <p>Prep for a certification</p>
                </li>
                <li>
                    <image>Chat Logo</image>
                    <p>Practice with AI coaching</p>
                </li>
                <li>
                    <image>Bulb Logo</image>
                    <p>Advance your career</p>
                </li>
            </ul>
            <button>Learn more</button>
            <p>Starting at E£204.00/month</p>
            <image>Black Guy</image>
        </PersonalPlan>

        <CourseSkillList>
            <h2>Skills to transform your career and life</h2>
            <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            <SkillList>
                <CourseList>
                    <CourseCard>
                        <image>Course image</image>
                        <h4>Course title</h4>
                        <p>Bio</p>
                        <div>
                            <span>Ribbon</span>
                            <span>Rating</span>
                            <span>Number Of Reviews</span>
                        </div>
                        <p>New Price <strike>Old Price</strike></p>
                    </CourseCard>
                </CourseList>
                <a>Show all Skill(AI) Courses</a>
            </SkillList>
        </CourseSkillList>

        <Partners>
            <p>Trusted by over 17,000 companies and millions of learners around the world</p>
            <PartnerList>4 per line</PartnerList>
        </Partners>
        */}
    </>
  )
}

export default App
