import { Issue, SeverityType, ComponentFilter, CategoryFilter } from "@/lib/types";

// This is a sample of issues from the k8s-500-prod-issues repository
// Full repository: https://github.com/vijay2181/k8s-500-prod-issues
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
  },
  {
    id: 11,
    title: "Cluster Autoscaler not functioning",
    description: "The cluster is not automatically scaling despite pods in pending state due to insufficient resources.",
    component: "Autoscaler",
    severity: "medium",
    resolution: "Verify autoscaler pod logs with 'kubectl logs -n kube-system -l app=cluster-autoscaler'. Check cloud provider permissions and quota limits. Ensure node groups are correctly configured.",
    tags: ["autoscaling", "nodes", "cloud-provider"],
    category: "Scaling"
  },
  {
    id: 12,
    title: "Pod evicted due to node pressure",
    description: "Pods are being evicted from nodes due to memory or disk pressure conditions.",
    component: "Node",
    severity: "medium",
    resolution: "Check node conditions with 'kubectl describe node <node-name>'. Increase resources on the node or optimize application resource requests and limits.",
    tags: ["eviction", "resources", "node-pressure"],
    category: "Node Issues"
  },
  {
    id: 13,
    title: "ImagePullBackOff error when creating pods",
    description: "Pods fail to start with ImagePullBackOff status due to issues with pulling container images.",
    component: "Pod",
    severity: "medium",
    resolution: "Verify image name is correct. Check for private registry authentication issues with 'kubectl get secret'. Ensure nodes have network connectivity to container registry.",
    tags: ["images", "registry", "container"],
    category: "Workload Issues"
  },
  {
    id: 14,
    title: "Certificate expiration in Kubernetes cluster",
    description: "API server certificates or kubelet certificates are expired or about to expire, causing authentication failures.",
    component: "Security",
    severity: "high",
    resolution: "Check certificate expiration with 'kubeadm certs check-expiration'. Renew certificates using 'kubeadm certs renew all' or the appropriate method for your cluster setup.",
    tags: ["certificates", "auth", "security"],
    category: "Security"
  },
  {
    id: 15,
    title: "Network policy not blocking traffic as expected",
    description: "Pod network isolation is not working correctly despite having NetworkPolicy resources defined.",
    component: "Networking",
    severity: "medium",
    resolution: "Verify CNI supports NetworkPolicy (Calico, Cilium, etc.). Check policy selectors match intended pods. Test with temporary debug pods to validate traffic flow.",
    tags: ["network-policy", "security", "isolation"],
    category: "Networking"
  },
  {
    id: 16,
    title: "Kube-proxy performance issues",
    description: "Service connectivity is slow or intermittent due to kube-proxy performance problems.",
    component: "Networking",
    severity: "medium",
    resolution: "Consider switching to ipvs proxy mode. Check kube-proxy logs for errors. Optimize conntrack settings on nodes if using iptables mode.",
    tags: ["kube-proxy", "networking", "performance"],
    category: "Networking"
  },
  {
    id: 17,
    title: "PersistentVolumeClaim stuck in pending state",
    description: "PVCs remain in pending state indefinitely, blocking pod initialization that depends on them.",
    component: "Storage",
    severity: "high",
    resolution: "Check storage class exists with 'kubectl get sc'. Verify storage provisioner is running. Ensure cloud provider has sufficient quota for requested storage.",
    tags: ["storage", "pvc", "volumes"],
    category: "Storage Issues"
  },
  {
    id: 18,
    title: "Failed to mount ConfigMap or Secret in pod",
    description: "Pod fails to start because it cannot mount the requested ConfigMap or Secret volume.",
    component: "Config",
    severity: "low",
    resolution: "Verify the ConfigMap or Secret exists in the same namespace as the pod. Check for typos in volume definitions. Ensure optional flag is set if the resource might not exist.",
    tags: ["configmap", "secret", "volumes"],
    category: "Configuration"
  },
  {
    id: 19,
    title: "Helm release failed upgrade",
    description: "Helm upgrade operation fails, leaving the release in a broken or inconsistent state.",
    component: "Helm",
    severity: "medium",
    resolution: "Check error messages from 'helm history' command. Use 'helm rollback' to revert to previous working release. Fix underlying issues in values or templates before retrying.",
    tags: ["helm", "deployment", "upgrade"],
    category: "Deployment"
  },
  {
    id: 20,
    title: "Prometheus high memory usage",
    description: "Prometheus server consuming excessive memory in the monitoring stack, leading to OOM kills.",
    component: "Monitoring",
    severity: "medium",
    resolution: "Adjust retention period and storage settings. Implement recording rules for frequently used queries. Consider vertical sharding for large deployments.",
    tags: ["prometheus", "monitoring", "memory"],
    category: "Observability"
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
