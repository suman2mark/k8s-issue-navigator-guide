export type Issue = {
  id: number;
  title: string;
  description: string;
  component: string;
  severity: SeverityType;
  resolution: string;
  tags: string[];
  category: string;
};

export type SeverityType = "low" | "medium" | "high" | "critical";

export type ComponentFilter = "all" | string;

export type CategoryFilter = "all" | string;
