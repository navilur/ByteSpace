export interface AboutData {
  title: string;
  description: string;
  studentCount: number;
  coursesCount: number;
  creatorsCount: number;
  image: string;
  alt: string;
}

export interface AboutData2 {
  title: string;
  description: string;
  image: string;
  alt: string;
  items: { text: string }[];
}

export const aboutData: AboutData = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  studentCount: 12000,
  coursesCount: 70,
  creatorsCount: 16,
  image: "/about_image1.png",
  alt: "About Image 1",
};

export const aboutData2: AboutData2 = {
  title: "Create & Manage Courses Easily.",
  description:
    "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses. ",
  image: "/about_image2.png",
  alt: "About Image 2",
  items: [
    {
      text: "Share Your Expertise",
    },
    {
      text: "Monetize Your Passion",
    },
    {
      text: "Flexibility and Autonomy",
    },
    {
      text: "Build a Community",
    },
  ],
};
