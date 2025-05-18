
export interface Issue {
  id: number;
  title: string;
  description: string;
  component?: string;
  severity?: 'critical' | 'high' | 'medium' | 'low';
  resolution?: string;
  tags?: string[];
  category?: string;
}

export type CategoryFilter = string | 'all';
