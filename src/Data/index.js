import outfitmu from '../assets/projects/E-COMMERCE.png'
import bukalapak from '../assets/projects/bukalapak.png'
import logistik from '../assets/projects/Logistik.png'
import pos from '../assets/projects/POS.png'
import apkhrd from '../assets/projects/APLIKASI-HRD.png'
import sertif1 from '../assets/Sertif/FE.png'
import sertif2 from '../assets/Sertif/BASDAT.png'
import sertif3 from '../assets/Sertif/Python.png'

export const linkCv = "your-cv-link";
export const linkGit = "https://github.com/nanangarr";
export const linkLinkedin = "https://www.linkedin.com/in/nanang-ard/";
export const linkEmail = "mailto:ardiansyahnanang984@gmail.com";
export const linkInstagram = "https://www.instagram.com/nanangrdn/";

const projects = [
    {
        name: "outfitMU",
        image: outfitmu,
        url_github: "https://github.com/nanangarr/OutfitMU",
        url_demo: "https://outfit-mu.vercel.app/",
        category: "frontend",
        stack: ["HTML", 'Javascript', "React", "Tailwindcss"]
    },
    {
        name: "SISTEM Company",
        image: bukalapak,
        url_github: "https://github.com/adityardiansyah/bukalapak",
        url_demo: "https://bukalapak-landing.vercel.app/",
        category: "frontend",
        stack: ["HTML", "Tailwind", 'Javascript', 'Vue']
    },
    {
        name: "Mobile App Design HRD",
        image: apkhrd,
        url_github: "https://www.figma.com/design/HZBjqLIZZnhvUeAJ1ByR9i/Aplikasi-HRD?node-id=174-1041&t=MUAOiqREfdnxOjeN-1",
        url_demo: "https://www.figma.com/proto/HZBjqLIZZnhvUeAJ1ByR9i/Aplikasi-HRD?node-id=227-4505&p=f&t=aaAdmyhAgF6NtS9u-0&scaling=scale-down&content-scaling=fixed&page-id=174%3A1041&starting-point-node-id=227%3A4505",
        category: "ui/ux",
        stack: ["Figma", "UI Design", 'Prototype']
    },
    {
        name: "POS (Point Of Sales)",
        image: pos,
        url_github: "https://www.figma.com/design/yxZK0pddh4SSqn0zXxmptS/Aplikasi-Kasir?node-id=0-1&t=MUAOiqREfdnxOjeN-1",
        url_demo: "https://www.figma.com/proto/yxZK0pddh4SSqn0zXxmptS/Aplikasi-Kasir?t=MUAOiqREfdnxOjeN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
        category: "ui/ux",
        stack: ["Figma", "UI Design", 'Prototype']
    },
    {
        name: "Logistik NAXpress",
        image: logistik,
        url_github: "https://www.figma.com/design/5frmynkJoco9N0gJNTz3YZ/Website-Logistik?t=MUAOiqREfdnxOjeN-1",
        url_demo: "https://www.figma.com/proto/5frmynkJoco9N0gJNTz3YZ/Website-Logistik?t=MUAOiqREfdnxOjeN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
        category: "ui/ux",
        stack: ["Figma", "UI Design", 'Prototype']
    },
]

export const numberPortofolio = [
    { title: "Years Experience", number: 0 },
    { title: "Completed Projects", number: 6 },
    { title: "Certificate", number: 6 },
    { title: "Satisfied Clients", number: 3 },
];

export const certificates = [
    {
        title: "Frontend Developer",
        image: sertif1,
        issuer: "SISTEM Bootcamp",
        pdfUrl: "https://drive.google.com/file/d/160fDemKj0NnRv0MZtjJU0u2ou9d8rMbx/view?usp=sharing"
    },
    {
        title: "Database Design",
        image: sertif2,
        issuer: "Oracle Academy",
        pdfUrl: "https://drive.google.com/file/d/1AysXCUcCVBlDffu-mUqeLrT2LAiaD67g/view?usp=sharing"
    },
    {
        title: "PCAP: Programming Essentials in Python",
        image: sertif3,
        issuer: "Python Institute",
        pdfUrl: "https://drive.google.com/file/d/1QMwGCW6zjsu-DmBZYCY-FjuvasCe4_Y0/view?usp=sharing"
    }
];

export { projects }