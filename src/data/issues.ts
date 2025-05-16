
import { Issue } from "@/lib/types";

// This is a sample of issues - in a real app, you would fetch all 500 from an API
export const issues: Issue[] = [
  {
    id: 1,
    title: "Pod stuck in Terminating state",
    description: "Pods remain stuck in Terminating state and cannot be deleted even with --force flag.",
    component: "Pod",
    severity: "medium",
    resolution: "Identify the finalizers on the pod with 'kubectl get pod <pod-name> -o yaml' and remove them with 'kubectl patch pod <pod-name> -p '{\"metadata\":{\"finalizers\":[]}}' --type=merge'",
    tags: ["pods", "termination", "finalizers"],
    category: "Workload Issues"
  },
  {
    id: 2,
    title: "etcd cluster failure causing control plane outage",
    description: "Multiple etcd members are unhealthy, causing the Kubernetes API server to become unresponsive.",
    component: "etcd",
    severity: "critical",
    resolution: "Check etcd member health, restore from backup if necessary. Ensure proper quorum and network connectivity between etcd members.",
    tags: ["etcd", "control-plane", "outage"],
    category: "Control Plane"
  },
  {
    id: 3,
    title: "NodeNotReady due to container runtime issues",
    description: "Node shows NotReady status due to container runtime (containerd) failing to respond to health checks.",
    component: "Node",
    severity: "high",
    resolution: "Restart the container runtime service with 'systemctl restart containerd'. Check logs with 'journalctl -u containerd' to identify root cause. Verify disk space isn't full.",
    tags: ["node", "containerd", "runtime"],
    category: "Node Issues"
  },
  {
    id: 4,
    title: "Persistent volume fails to mount",
    description: "Pod cannot start because a persistent volume claim cannot be mounted, showing 'FailedMount' in events.",
    component: "Storage",
    severity: "medium",
    resolution: "Verify that the storage provider is healthy. Check if PV and PVC are correctly bound with 'kubectl get pv,pvc'. Ensure node has required storage drivers.",
    tags: ["storage", "volumes", "pvc"],
    category: "Storage Issues"
  },
  {
    id: 5,
    title: "CoreDNS pods cycling with CrashLoopBackOff",
    description: "CoreDNS pods repeatedly crash and restart, causing DNS resolution failures within the cluster.",
    component: "CoreDNS",
    severity: "high",
    resolution: "Check CoreDNS pod logs with 'kubectl logs -n kube-system -l k8s-app=kube-dns'. Verify configmap is valid and DNS upstream resolvers are accessible.",
    tags: ["dns", "coredns", "networking"],
    category: "Networking"
  },
  {
    id: 6,
    title: "Ingress controller not routing traffic correctly",
    description: "External traffic is not being routed to services even though Ingress resources are correctly defined.",
    component: "Ingress",
    severity: "medium",
    resolution: "Check ingress controller logs. Verify that the Ingress class matches the controller. Ensure TLS certificates are valid if using HTTPS.",
    tags: ["ingress", "networking", "routing"],
    category: "Networking"
  },
  {
    id: 7,
    title: "Node out of disk space",
    description: "Kubelet evicting pods because node filesystem is near full capacity.",
    component: "Node",
    severity: "high",
    resolution: "Clean up unused images with 'crictl rmi --prune' or equivalent. Check for large log files. Consider adding persistent storage for application data instead of using node disk.",
    tags: ["node", "storage", "eviction"],
    category: "Node Issues"
  },
  {
    id: 8,
    title: "RBAC permissions preventing deployment creation",
    description: "Users or service accounts cannot create deployments due to insufficient RBAC permissions.",
    component: "RBAC",
    severity: "low",
    resolution: "Check current permissions with 'kubectl auth can-i create deployments'. Create appropriate Role and RoleBinding or ClusterRole and ClusterRoleBinding.",
    tags: ["rbac", "security", "permissions"],
    category: "Security"
  },
  {
    id: 9,
    title: "Horizontal Pod Autoscaler not scaling workload",
    description: "HPA resource exists but pods are not scaling despite increased load on the service.",
    component: "HPA",
    severity: "medium",
    resolution: "Verify metrics-server is running. Check HPA status with 'kubectl describe hpa'. Ensure resource metrics or custom metrics are being collected properly.",
    tags: ["hpa", "scaling", "metrics"],
    category: "Scaling"
  },
  {
    id: 10,
    title: "Service account token mount failures",
    description: "Pods failing to start with error about mounting service account token volume.",
    component: "Auth",
    severity: "high",
    resolution: "Check if service account exists in the namespace. Verify that the API server can communicate with token controller. Restart kube-controller-manager if necessary.",
    tags: ["serviceaccount", "auth", "volumes"],
    category: "Security"
  }
];

// Helper function to get unique values for filters
export function getUniqueValues<T>(items: Issue[], key: keyof Issue): T[] {
  const values = new Set<T>();
  items.forEach(item => {
    if (item[key]) {
      values.add(item[key] as T);
    }
  });
  return Array.from(values);
}

export function getUniqueComponents(): string[] {
  return getUniqueValues<string>(issues, 'component');
}

export function getUniqueCategories(): string[] {
  return getUniqueValues<string>(issues, 'category');
}

export function getUniqueSeverities(): string[] {
  return getUniqueValues<string>(issues, 'severity');
}

export function searchIssues(query: string, component: ComponentFilter, severity: SeverityType, category: CategoryFilter): Issue[] {
  return issues.filter(issue => {
    // Text search
    const searchMatch = !query || 
      issue.title.toLowerCase().includes(query.toLowerCase()) || 
      issue.description.toLowerCase().includes(query.toLowerCase()) ||
      (issue.tags && issue.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())));
    
    // Component filter
    const componentMatch = component === 'all' || issue.component === component;
    
    // Severity filter
    const severityMatch = severity === 'all' || issue.severity === severity;
    
    // Category filter
    const categoryMatch = category === 'all' || issue.category === category;
    
    return searchMatch && componentMatch && severityMatch && categoryMatch;
  });
}
