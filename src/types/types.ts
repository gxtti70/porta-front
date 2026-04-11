export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  category: string;
  explanation?: string;
  images?: string;
  link_repo?: string;
  link_demo?: string;
}

export const _FixVite = true; // <--- Añade esto al final