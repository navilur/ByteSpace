"use client";

import { useState } from "react";

import { skills } from "@/app/constants/SkillsData";
import { courses } from "@/app/constants/CoursesData";
import CourseCard from "../ui/CourseCards";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0]?.slug ?? "");

  const visibleSkills = skills.slice(0, 18);

  const firstRow = visibleSkills.slice(0, 8);
  const secondRow = visibleSkills.slice(8, 14);
  const thirdRow = visibleSkills.slice(14, 18);

  const activeCourses = courses.filter(
    (course) => course.skillSlug === activeSkill,
  );

  const renderSkill = (skill: (typeof skills)[number]) => {
    const isActive = activeSkill === skill.slug;

    return (
      <button
        key={skill.slug}
        type="button"
        onClick={() => setActiveSkill(skill.slug)}
        className={`
          rounded-full
          px-4
          py-3
          font-[Satoshi]
          text-md
          font-medium
          transition-all
          duration-300
          ${
            isActive
              ? "bg-[#D4FB20] text-[#242528]"
              : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#EDEDEE]"
          }
        `}
      >
        {skill.title}
      </button>
    );
  };

  return (
    <section className="mt-18 max-w-7xl mx-auto px-2">
      <div className="text-center">
        <h2 className="mb-4 text-[44px] font-semibold text-[#040819] max-w-147 mx-auto">
          Discover Your Passion, Build Your Skills
        </h2>

        <p className="mx-auto mb-10 max-w-229.25 font-[Satoshi] text-lg font-normal text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
        <div className="mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {firstRow.map(renderSkill)}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {secondRow.map(renderSkill)}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {thirdRow.map(renderSkill)}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
