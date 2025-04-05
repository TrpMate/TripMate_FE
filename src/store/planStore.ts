import { create } from "zustand";

type CourseType = {
  courseId: number;
  setCourseId: (courseId: number) => void;
};

export const useCourse = create<CourseType>((set) => ({
  courseId: 0,
  setCourseId: (courseId) => set({ courseId }),
}));
