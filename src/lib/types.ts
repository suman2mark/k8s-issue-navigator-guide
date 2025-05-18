
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

// Standard Kubernetes component types for reference
export const standardKubernetesComponents = [
  'API Server',
  'etcd',
  'Scheduler',
  'Controller Manager',
  'kubelet',
  'kube-proxy',
  'Container Runtime',
  'CoreDNS',
  'Networking',
  'Storage',
  'Authentication',
  'RBAC',
  'ConfigMap',
  'Secret',
  'Pod',
  'Deployment',
  'StatefulSet',
  'DaemonSet',
  'Job',
  'CronJob',
  'Service',
  'Ingress',
  'PersistentVolume',
  'PersistentVolumeClaim',
  'Namespace',
  'ResourceQuota',
  'LimitRange',
  'HorizontalPodAutoscaler',
  'VerticalPodAutoscaler',
  'NetworkPolicy',
  'PodSecurityPolicy',
  'ServiceAccount',
  'CustomResourceDefinition',
  'Operator',
  'Helm',
  'kubectl',
  'Monitoring',
  'Logging',
  'Dashboard',
  'Admission Controller'
];
