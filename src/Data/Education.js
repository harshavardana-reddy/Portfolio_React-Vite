import Image1 from "../assets/edu_logos/BHASHYAM.png";
import Image2 from "../assets/edu_logos/BIIT.jpg";
import Image3 from "../assets/edu_logos/KLU.png";
const Education = {
    BTech: {
        name: "B.Tech in Computer Science and Engineering - Honors",
        status:"Pursuing",
        institution: "K L University",
        location:"Vijayawada, Andhra Pradesh, India",
        year: { start: 2022, end: 2026 },
        grade: "9.5 CGPA",
        logo:Image3
    },
    Intermediate: {
        name: "Intermediate - MPC",
        status: "Completed",
        institution: "BIIT Junior College",
        location: "Guntur, Andhra Pradesh, India",
        year: { start: 2020, end: 2022 },
        grade: "83%",
        logo:Image2
    },
    SSC: {
        name: "Secondary School Certificate",
        status: "Completed",
        institution: "Bhashyam E.M High School",
        location: "Vijayawada, Andhra Pradesh, India",
        year: { start: 2019, end: 2020 },
        grade: "10 GPA",
        logo:Image1
    }
}

export default Education;