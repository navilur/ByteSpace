import Image from "next/image";
import type { Course } from "@/app/constants/CoursesData";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="max-w-93.25 w-full rounded-3xl border border-[#CED0D3] p-4 transition-all duration-300 ease-out hover:-translate-y-2  hover:border-[#D4FB20] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
      <div>
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={300}
          className="mb-5 rounded-xl"
        />
        <div className="flex items-center justify-around">
          <div className="flex flex-none flex-col items-center justify-center rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-xs">
            <span className="flex items-center justify-center font-[Satoshi] text-[12px] font-medium leading-[120%] text-center text-[#4F4F4F]">
              {course.lessons} Lessons
            </span>
          </div>
          <div className="flex flex-none flex-col items-center justify-center rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-xs">
            <span className="flex items-center justify-center font-[Satoshi] text-[12px] font-medium leading-[120%] text-center text-[#4F4F4F]">
              {course.hours} hours {course.minutes} mins
            </span>
          </div>
          <div className="flex flex-none flex-col items-center justify-center rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-xs">
            <span className="flex items-center justify-center font-[Satoshi] text-[12px] font-medium leading-[120%] text-center text-[#4F4F4F]">
              {course.comments} Comments
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">{course.title}</h3>

          <p className="font-[Satoshi] text-xs font-medium text-[#4F4F4F]">
            by <span className="text-[#003BE2]">{course.instructor}</span>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <p className="font-[Satoshi] text-lg font-normal text-[#4F4F4F]">
            {course.rating}
          </p>

          <Image src="/star.svg" alt="Star Rating" width={20} height={20} />
        </div>
      </div>

      <div className="mb-4 mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-2">
          <Image
            src="/signal_cellular_alt.svg"
            alt="Course Level"
            width={20}
            height={20}
          />

          <p className="font-[Satoshi] text-xs font-normal text-[#4B4C53]">
            {course.level}
          </p>
        </div>

        <Image
          src={course.peopleImage}
          alt="Students"
          width={128}
          height={32}
        />
      </div>

      <div>
        <h5 className="text-xl font-semibold text-[#003BE2]">
          ${course.price}
          <small className="font-[Satoshi] text-xs font-normal text-[#4F4F4F]">
            /{course.duration}
          </small>
        </h5>
      </div>
    </div>
  );
};

export default CourseCard;
