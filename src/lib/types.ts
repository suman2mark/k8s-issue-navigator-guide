
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

export type SeverityType = 'critical' | 'high' | 'medium' | 'low' | 'all';
export type ComponentFilter = string | 'all';
export type CategoryFilter = string | 'all';
