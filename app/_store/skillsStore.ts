import { create } from 'zustand';

interface Skill {
  id: string;
  name: string;
  icon: string;
  alt: string;
  targetHours: number;
  loggedHours: number;
}

interface SkillsStore {
  skills: Skill[];
  fetchSkills: () => Promise<void>;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  fetchSkills: async () => {
    try {
      const res = await fetch('/api/skills');
      const data = await res.json();
      set({ skills: data });
    } catch (err) {
      console.error('Failed to fetch skills:', err);
    }
  },
}));
