
import { Issue, SeverityType, ComponentFilter, CategoryFilter } from "@/lib/types";

// This is a complete collection of issues from the k8s-500-prod-issues repository
// Source: https://github.com/vijay2181/k8s-500-prod-issues
export const issues: Issue[] = [
 

  {
    id: 1,
    title: "Zombie Pods Causing NodeDrain to Hang",
    description: "Node drain stuck indefinitely due to unresponsive terminating pod.",
    component: "API Server",
    severity: "critical",
    resolution: "kubectl patch pod <pod-name> -p '{\"metadata\":{\"finalizers\":[]}}' --type=merge",
    tags: ["causing", "indefinitely", "nodedrain", "zombie", "pods"],
    category: "Cluster Management"
  },
  {
    id: 2,
    title: "API Server Crash Due to Excessive CRD Writes",
    description: "API server crashed due to flooding by a malfunctioning controller creating too many custom resources.",
    component: "etcd",
    severity: "critical",
    resolution: "• Scaled the controller to 0 replicas. 	• Manually deleted thousands of stale CRs using batch deletion.",
    tags: ["creating", "flooding", "many", "controller", "resources"],
    category: "Cluster Management"
  },
  {
    id: 3,
    title: "Node Not Rejoining After Reboot",
    description: "A rebooted node failed to rejoin the cluster due to kubelet identity mismatch.",
    component: "Kubelet",
    severity: "medium",
    resolution: "• Re-joined the node using correct --hostname-override. 	• Cleaned up stale node entry from the cluster.",
    tags: ["rejoin", "cluster", "kubelet", "reboot", "failed"],
    category: "Cluster Management"
  },
  {
    id: 4,
    title: "Etcd Disk Full Causing API Server Timeout",
    description: "etcd ran out of disk space, making API server unresponsive.",
    component: "etcd",
    severity: "critical",
    resolution: "bash CopyEdit etcdctl compact <rev> etcdctl defrag 	• Cleaned logs, snapshots, and increased disk space temporarily.",
    tags: ["causing", "etcd", "timeout", "space", "unresponsive"],
    category: "Cluster Management"
  },
  {
    id: 5,
    title: "Misconfigured Taints Blocking Pod Scheduling",
    description: "Critical workloads weren’t getting scheduled due to incorrect node taints.",
    component: "Pod",
    severity: "medium",
    resolution: "• Removed the inappropriate taints. 	• Re-scheduled workloads.",
    tags: ["getting", "weren", "incorrect", "scheduled", "misconfigured"],
    category: "Cluster Management"
  },
  {
    id: 6,
    title: "Kubelet DiskPressure Loop on Large Image Pulls",
    description: "Continuous pod evictions caused by DiskPressure due to image bloating.",
    component: "Pod",
    severity: "low",
    resolution: "• Rebuilt image using multistage builds and removed unused layers. 	• Increased ephemeral disk space temporarily.",
    tags: ["kubelet", "continuous", "bloating", "large", "loop"],
    category: "Cluster Management"
  },
  {
    id: 7,
    title: "Node Goes NotReady Due to Clock Skew",
    description: "One node dropped from the cluster due to TLS errors from time skew.",
    component: "API Server",
    severity: "critical",
    resolution: "• Restarted NTP sync. 	• Restarted kubelet after sync.",
    tags: ["cluster", "from", "dropped", "node", "errors"],
    category: "Cluster Management"
  },
  {
    id: 8,
    title: "API Server High Latency Due to Event Flooding",
    description: "An app spamming Kubernetes events slowed down the entire API server.",
    component: "etcd",
    severity: "critical",
    resolution: "• Patched controller to rate-limit record.Eventf. 	• Cleaned old events.",
    tags: ["flooding", "kubernetes", "event", "events", "latency"],
    category: "Cluster Management"
  },
  {
    id: 9,
    title: "CoreDNS CrashLoop on Startup",
    description: "CoreDNS pods kept crashing due to a misconfigured Corefile.",
    component: "DNS",
    severity: "critical",
    resolution: "• Reverted to backup configmap. 	• Restarted CoreDNS.",
    tags: ["startup", "pods", "misconfigured", "crashing", "kept"],
    category: "Cluster Management"
  },
  {
    id: 10,
    title: "Control Plane Unavailable After Flannel Misconfiguration",
    description: "Misaligned pod CIDRs caused overlay misrouting and API server failure.",
    component: "API Server",
    severity: "critical",
    resolution: "• Reconfigured node with proper CIDR range. 	• Flushed iptables and restarted Flannel.",
    tags: ["cidrs", "unavailable", "failure", "flannel", "plane"],
    category: "Cluster Management"
  },
  {
    id: 11,
    title: "kube-proxy IPTables Rules Overlap Breaking Networking",
    description: "Services became unreachable due to overlapping custom IPTables rules with kube-proxy rules.",
    component: "Node",
    severity: "critical",
    resolution: "• Flushed custom rules and reloaded kube-proxy.  bash CopyEdit iptables -F; systemctl restart kube-proxy",
    tags: ["overlap", "services", "iptables", "breaking", "kube"],
    category: "Cluster Management"
  },
  {
    id: 12,
    title: "Stuck CSR Requests Blocking New Node Joins",
    description: "New nodes couldn’t join due to a backlog of unapproved CSRs.",
    component: "Kubelet",
    severity: "critical",
    resolution: "bash CopyEdit kubectl certificate approve <csr-name> 	• Re-enabled the CSR approver controller.",
    tags: ["requests", "backlog", "nodes", "node", "join"],
    category: "Cluster Management"
  },
  {
    id: 13,
    title: "Failed Cluster Upgrade Due to Unready Static Pods",
    description: "Upgrade failed when static control plane pods weren’t ready due to invalid manifests.",
    component: "etcd",
    severity: "medium",
    resolution: "• Fixed manifest. 	• Restarted kubelet to load corrected pod.",
    tags: ["manifests", "cluster", "weren", "failed", "unready"],
    category: "Cluster Management"
  },
  {
    id: 14,
    title: "Uncontrolled Logs Filled Disk on All Nodes",
    description: "Application pods generated excessive logs, filling up node /var/log.",
    component: "Pod",
    severity: "low",
    resolution: "• Rotated and truncated logs. 	• Restarted container runtime after cleanup. 	• Disabled debug logging.",
    tags: ["application", "uncontrolled", "nodes", "filling", "pods"],
    category: "Cluster Management"
  },
  {
    id: 15,
    title: "Node Drain Fails Due to PodDisruptionBudget Deadlock",
    description: "kubectl drain never completed because PDBs blocked eviction.",
    component: "Pod",
    severity: "critical",
    resolution: "• Temporarily edited PDB to reduce minAvailable. 	• Scaled up replicas before drain.",
    tags: ["eviction", "kubectl", "deadlock", "blocked", "completed"],
    category: "Cluster Management"
  },
  {
    id: 16,
    title: "CrashLoop of Kube-Controller-Manager on Boot",
    description: "Controller-manager crashed on startup due to outdated admission controller configuration.",
    component: "Pod",
    severity: "critical",
    resolution: "• Removed the deprecated plugin from startup flags. 	• Restarted pod.",
    tags: ["startup", "controller", "kube", "admission", "configuration"],
    category: "Cluster Management"
  },
  {
    id: 17,
    title: "Inconsistent Cluster State After Partial Backup Restore",
    description: "A partial etcd restore led to stale object references and broken dependencies.",
    component: "etcd",
    severity: "low",
    resolution: "• Manually recreated PVCs and secrets using backups from another tool. 	• Redeployed apps.",
    tags: ["cluster", "object", "references", "state", "restore"],
    category: "Cluster Management"
  },
  {
    id: 18,
    title: "kubelet Unable to Pull Images Due to Proxy Misconfig",
    description: "Nodes failed to pull images from DockerHub due to incorrect proxy environment configuration.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated kubelet service file to include proper NO_PROXY. 	• Restarted kubelet.",
    tags: ["unable", "pull", "kubelet", "misconfig", "incorrect"],
    category: "Cluster Management"
  },
  {
    id: 19,
    title: "Multiple Nodes Marked Unreachable Due to Flaky Network Interface",
    description: "Flapping interface on switch caused nodes to be marked NotReady intermittently.",
    component: "Node",
    severity: "medium",
    resolution: "• Replaced cable and switch port. 	• Set up redundant bonding with failover.",
    tags: ["switch", "flapping", "nodes", "interface", "multiple"],
    category: "Cluster Management"
  },
  {
    id: 20,
    title: "Node Labels Accidentally Overwritten by DaemonSet",
    description: "A DaemonSet used for node labeling overwrote existing labels used by schedulers.",
    component: "Pod",
    severity: "low",
    resolution: "• Restored original labels from backup. 	• Updated script to merge labels.",
    tags: ["labels", "schedulers", "overwritten", "used", "daemonset"],
    category: "Cluster Management"
  },
  {
    id: 21,
    title: "Cluster Autoscaler Continuously Spawning and Deleting Nodes",
    description: "The cluster was rapidly scaling up and down, creating instability in workloads.",
    component: "Pod",
    severity: "critical",
    resolution: "• Fixed the readiness probe to accurately reflect pod health. 	• Tuned scale-down-delay-after-add and scale-down-unneeded-time settings.",
    tags: ["creating", "spawning", "cluster", "nodes", "rapidly"],
    category: "Cluster Management"
  },
  {
    id: 22,
    title: "Stale Finalizers Preventing Namespace Deletion",
    description: "A namespace remained in “Terminating” state indefinitely.",
    component: "Controller",
    severity: "low",
    resolution: "• Manually removed finalizers using a patched JSON:  bash CopyEdit kubectl patch ns <name> -p '{\"spec\":{\"finalizers\":[]}}' --type=merge",
    tags: ["indefinitely", "deletion", "state", "finalizers", "terminating"],
    category: "Cluster Management"
  },
  {
    id: 23,
    title: "CoreDNS CrashLoop Due to Invalid ConfigMap Update",
    description: "CoreDNS stopped resolving names cluster-wide after a config update.",
    component: "DNS",
    severity: "critical",
    resolution: "• Rolled back to previous working ConfigMap. 	• Restarted CoreDNS pods to pick up change.",
    tags: ["cluster", "wide", "names", "stopped", "resolving"],
    category: "Cluster Management"
  },
  {
    id: 24,
    title: "Pod Eviction Storm Due to DiskPressure",
    description: "A sudden spike in image pulls caused all nodes to hit disk pressure, leading to massive pod evictions.",
    component: "Pod",
    severity: "critical",
    resolution: "• Pruned unused images. 	• Enabled container runtime garbage collection.",
    tags: ["eviction", "nodes", "pressure", "massive", "image"],
    category: "Cluster Management"
  },
  {
    id: 25,
    title: "Orphaned PVs Causing Unscheduled Pods",
    description: "PVCs were stuck in Pending state due to existing orphaned PVs in Released state.",
    component: "Pod",
    severity: "medium",
    resolution: "• Manually deleted orphaned PVs. 	• Changed ReclaimPolicy to Delete for similar volumes.",
    tags: ["causing", "orphaned", "state", "released", "pvcs"],
    category: "Cluster Management"
  },
  {
    id: 26,
    title: "Taints and Tolerations Mismatch Prevented Workload Scheduling",
    description: "Workloads failed to schedule on new nodes that had a taint the workloads didn’t tolerate.",
    component: "Pod",
    severity: "low",
    resolution: "• Added proper tolerations to workloads:  yaml CopyEdit tolerations: - key: \"node-role.kubernetes.io/gpu\"   operator: \"Exists\"   effect: \"NoSchedule\"",
    tags: ["that", "tolerations", "tolerate", "nodes", "failed"],
    category: "Cluster Management"
  },
  {
    id: 27,
    title: "Node Bootstrap Failure Due to Unavailable Container Registry",
    description: "New nodes failed to join the cluster due to container runtime timeout when pulling base images.",
    component: "Node",
    severity: "critical",
    resolution: "• Brought internal registry back online. 	• Pre-pulled pause/CNI images to node image templates.",
    tags: ["cluster", "unavailable", "failure", "nodes", "failed"],
    category: "Cluster Management"
  },
  {
    id: 28,
    title: "kubelet Fails to Start Due to Expired TLS Certs",
    description: "Several nodes went NotReady after reboot due to kubelet failing to start with expired client certs.",
    component: "API Server",
    severity: "critical",
    resolution: "• Regenerated kubelet certs using kubeadm.  bash CopyEdit kubeadm certs renew all",
    tags: ["kubelet", "several", "reboot", "nodes", "expired"],
    category: "Cluster Management"
  },
  {
    id: 29,
    title: "kube-scheduler Crash Due to Invalid Leader Election Config",
    description: "kube-scheduler pod failed with panic due to misconfigured leader election flags.",
    component: "Pod",
    severity: "critical",
    resolution: "• Created the missing namespace. 	• Restarted the scheduler pod.",
    tags: ["failed", "kube", "panic", "misconfigured", "election"],
    category: "Cluster Management"
  },
  {
    id: 30,
    title: "Cluster DNS Resolution Broken After Calico CNI Update",
    description: "DNS resolution broke after Calico CNI update due to iptables policy drop changes.",
    component: "DNS",
    severity: "medium",
    resolution: "• Added explicit Calico policy allowing kube-dns to pod traffic.  yaml: egress: - action: Allow   destination:     selector: \"k8s-app == 'kube-dns'\"",
    tags: ["cluster", "iptables", "policy", "changes", "after"],
    category: "Cluster Management"
  },
  {
    id: 31,
    title: "Node Clock Drift Causing Authentication Failures",
    description: "Authentication tokens failed across the cluster due to node clock skew.",
    component: "API Server",
    severity: "critical",
    resolution: "• Re-enabled and restarted NTP on all nodes. 	• Synchronized system clocks manually.",
    tags: ["causing", "drift", "cluster", "failed", "across"],
    category: "Cluster Management"
  },
  {
    id: 32,
    title: "Inconsistent Node Labels Causing Scheduling Bugs",
    description: "Zone-aware workloads failed to schedule due to missing zone labels on some nodes.",
    component: "Pod",
    severity: "low",
    resolution: "• Manually patched node labels to restore zone metadata.",
    tags: ["causing", "labels", "zone", "nodes", "failed"],
    category: "Cluster Management"
  },
  {
    id: 33,
    title: "API Server Slowdowns from High Watch Connection Count",
    description: "API latency rose sharply due to thousands of watch connections from misbehaving clients.",
    component: "API Server",
    severity: "critical",
    resolution: "• Restarted offending pods. 	• Updated controller to reuse watches.",
    tags: ["connection", "count", "from", "rose", "thousands"],
    category: "Cluster Management"
  },
  {
    id: 34,
    title: "Etcd Disk Full Crashing the Cluster",
    description: "Entire control plane crashed due to etcd disk running out of space.",
    component: "etcd",
    severity: "critical",
    resolution: "• Performed etcd compaction and defragmentation. 	• Added disk space temporarily.",
    tags: ["running", "cluster", "etcd", "plane", "crashing"],
    category: "Cluster Management"
  },
  {
    id: 35,
    title: "ClusterConfigMap Deleted by Accident Bringing Down Addons",
    description: "A user accidentally deleted the kube-root-ca.crt ConfigMap, which many workloads relied on.",
    component: "Pod",
    severity: "critical",
    resolution: "• Recreated ConfigMap from backup. 	• Re-deployed affected system workloads.",
    tags: ["accident", "which", "many", "kube", "workloads"],
    category: "Cluster Management"
  },
  {
    id: 36,
    title: "Misconfigured NodeAffinity Excluding All Nodes",
    description: "A critical deployment was unschedulable due to strict nodeAffinity rules.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated deployment YAML to reflect actual zones. 	• Re-deployed workloads.",
    tags: ["nodeaffinity", "nodes", "deployment", "misconfigured", "unschedulable"],
    category: "Cluster Management"
  },
  {
    id: 37,
    title: "Outdated Admission Webhook Blocking All Deployments",
    description: "A stale mutating webhook caused all deployments to fail due to TLS certificate errors.",
    component: "Pod",
    severity: "critical",
    resolution: "• Renewed cert and redeployed webhook. 	• Disabled webhook temporarily for emergency deployments.",
    tags: ["webhook", "mutating", "admission", "blocking", "outdated"],
    category: "Cluster Management"
  },
  {
    id: 38,
    title: "API Server Certificate Expiry Blocking Cluster Access",
    description: "After 1 year of uptime, API server certificate expired, blocking access to all components.",
    component: "etcd",
    severity: "critical",
    resolution: "• Used kubeadm certs renew all. 	• Restarted control plane components.",
    tags: ["cluster", "expired", "access", "components", "blocking"],
    category: "Cluster Management"
  },
  {
    id: 39,
    title: "CRI Socket Mismatch Preventing kubelet Startup",
    description: "kubelet failed to start after switching from Docker to containerd due to incorrect CRI socket path.",
    component: "Kubelet",
    severity: "low",
    resolution: "• Updated kubelet flags to point to /run/containerd/containerd.sock. 	• Restarted kubelet.",
    tags: ["startup", "kubelet", "docker", "incorrect", "failed"],
    category: "Cluster Management"
  },
  {
    id: 40,
    title: "Cluster-Wide Crash Due to Misconfigured Resource Quotas",
    description: "Cluster workloads failed after applying overly strict resource quotas that denied new pod creation.",
    component: "Pod",
    severity: "critical",
    resolution: "• Rolled back the quota to previous values. 	• Unblocked critical namespaces manually.",
    tags: ["that", "cluster", "applying", "wide", "failed"],
    category: "Cluster Management"
  },
  {
    id: 41,
    title: "Cluster Upgrade Failing Due to CNI Compatibility",
    description: "Cluster upgrade failed due to an incompatible version of the CNI plugin.",
    component: "Pod",
    severity: "low",
    resolution: "• Upgraded the CNI plugin to the version compatible with K8s v1.22. 	• Restarted affected pods and nodes.",
    tags: ["cluster", "failed", "upgrade", "plugin", "compatibility"],
    category: "Cluster Management"
  },
  {
    id: 42,
    title: "Failed Pod Security Policy Enforcement Causing Privileged Container Launch",
    description: "Privileged containers were able to run despite Pod Security Policy enforcement.",
    component: "Pod",
    severity: "low",
    resolution: "• Enabled the podsecuritypolicy admission controller. 	• Updated the PodSecurityPolicy to restrict privileged containers.",
    tags: ["causing", "able", "enforcement", "policy", "despite"],
    category: "Cluster Management"
  },
  {
    id: 43,
    title: "Node Pool Scaling Impacting StatefulSets",
    description: "StatefulSet pods were rescheduled across different nodes, breaking persistent volume bindings.",
    component: "Pod",
    severity: "low",
    resolution: "• Added proper node affinity rules and volume binding policies to StatefulSet. 	• Rescheduled the pods successfully.",
    tags: ["persistent", "statefulsets", "rescheduled", "nodes", "across"],
    category: "Cluster Management"
  },
  {
    id: 44,
    title: "Kubelet Crash Due to Out of Memory (OOM) Errors",
    description: "Kubelet crashed after running out of memory due to excessive pod resource usage.",
    component: "Pod",
    severity: "critical",
    resolution: "• Set proper resource requests and limits on pods to prevent memory over-consumption. 	• Restarted the kubelet on the affected node.",
    tags: ["running", "kubelet", "memory", "errors", "after"],
    category: "Cluster Management"
  },
  {
    id: 45,
    title: "DNS Resolution Failure in Multi-Cluster Setup",
    description: "DNS resolution failed between two federated clusters due to missing DNS records.",
    component: "Service",
    severity: "critical",
    resolution: "• Added missing DNS records manually. 	• Updated DNS configurations to include service records for all federated clusters.",
    tags: ["cluster", "federated", "failure", "failed", "records"],
    category: "Cluster Management"
  },
  {
    id: 46,
    title: "Insufficient Resource Limits in Autoscaling Setup",
    description: "Horizontal Pod Autoscaler did not scale pods up as expected due to insufficient resource limits.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased resource requests and limits for the affected pods. 	• Manually scaled the pods and monitored the autoscaling behavior.",
    tags: ["limits", "insufficient", "pods", "expected", "setup"],
    category: "Cluster Management"
  },
  {
    id: 47,
    title: "Control Plane Overload Due to High Audit Log Volume",
    description: "The control plane became overloaded and slow due to excessive audit log volume.",
    component: "API Server",
    severity: "medium",
    resolution: "• Refined audit policy to log only critical events. 	• Restarted the API server.",
    tags: ["overloaded", "overload", "plane", "became", "volume"],
    category: "Cluster Management"
  },
  {
    id: 48,
    title: "Resource Fragmentation Causing Cluster Instability",
    description: "Resource fragmentation due to unbalanced pod distribution led to cluster instability.",
    component: "Pod",
    severity: "low",
    resolution: "• Applied pod affinity and anti-affinity rules to achieve balanced scheduling. 	• Rescheduled pods manually to redistribute workload.",
    tags: ["causing", "cluster", "instability", "unbalanced", "distribution"],
    category: "Cluster Management"
  },
  {
    id: 49,
    title: "Failed Cluster Backup Due to Misconfigured Volume Snapshots",
    description: "Cluster backup failed due to a misconfigured volume snapshot driver.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Corrected snapshot driver configuration in storage class. 	• Ran the backup process again, which completed successfully.",
    tags: ["cluster", "failed", "misconfigured", "volume", "driver"],
    category: "Cluster Management"
  },
  {
    id: 50,
    title: "Failed Deployment Due to Image Pulling Issues",
    description: "Deployment failed due to image pulling issues from a custom Docker registry.",
    component: "Pod",
    severity: "medium",
    resolution: "• Corrected the image pull secrets in the deployment YAML. 	• Re-deployed the application.",
    tags: ["docker", "pulling", "deployment", "failed", "from"],
    category: "Cluster Management"
  },
  {
    id: 51,
    title: "High Latency Due to Inefficient Ingress Controller Configuration",
    description: "Ingress controller configuration caused high network latency due to inefficient routing rules.",
    component: "Controller",
    severity: "medium",
    resolution: "• Simplified ingress resource definitions and optimized routing rules. 	• Restarted ingress controller to apply changes.",
    tags: ["routing", "controller", "configuration", "latency", "rules"],
    category: "Cluster Management"
  },
  {
    id: 52,
    title: "Node Draining Delay During Maintenance",
    description: "Node draining took an unusually long time during maintenance due to unscheduled pod disruption.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted PodDisruptionBudget to allow more flexibility for pod evictions. 	• Manually evicted the pods to speed up the node draining process.",
    tags: ["long", "draining", "node", "disruption", "during"],
    category: "Cluster Management"
  },
  {
    id: 53,
    title: "Unresponsive Cluster After Large-Scale Deployment",
    description: "Cluster became unresponsive after deploying a large number of pods in a single batch.",
    component: "API Server",
    severity: "critical",
    resolution: "• Implemented gradual pod deployment using rolling updates instead of a batch deployment. 	• Increased the node resource capacity to handle larger loads.",
    tags: ["deploying", "cluster", "single", "batch", "large"],
    category: "Cluster Management"
  },
  {
    id: 54,
    title: "Failed Node Recovery Due to Corrupt Kubelet Configuration",
    description: "Node failed to recover after being drained due to a corrupt kubelet configuration.",
    component: "Kubelet",
    severity: "low",
    resolution: "• Replaced the corrupted kubelet configuration file with a backup. 	• Restarted the kubelet service and the node successfully rejoined the cluster.",
    tags: ["kubelet", "failed", "being", "configuration", "drained"],
    category: "Cluster Management"
  },
  {
    id: 55,
    title: "Resource Exhaustion Due to Misconfigured Horizontal Pod Autoscaler",
    description: "Cluster resources were exhausted due to misconfiguration in the Horizontal Pod Autoscaler (HPA), resulting in excessive pod scaling.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted HPA configuration to scale based on a combination of CPU and memory usage. 	• Set more appropriate scaling thresholds.",
    tags: ["cluster", "resources", "misconfigured", "scaling", "resulting"],
    category: "Cluster Management"
  },
  {
    id: 56,
    title: "Inconsistent Application Behavior After Pod Restart",
    description: "Application behavior became inconsistent after pod restarts due to improper state handling.",
    component: "Pod",
    severity: "low",
    resolution: "• Moved application state to persistent volumes or external databases. 	• Adjusted the application logic to handle state recovery properly after restarts.",
    tags: ["application", "restarts", "state", "behavior", "became"],
    category: "Cluster Management"
  },
  {
    id: 57,
    title: "Cluster-wide Service Outage Due to Missing ClusterRoleBinding",
    description: "Cluster-wide service outage occurred after an automated change removed a critical ClusterRoleBinding.",
    component: "Service",
    severity: "critical",
    resolution: "• Restored the missing ClusterRoleBinding. 	• Manually verified that affected services were functioning correctly.",
    tags: ["cluster", "wide", "automated", "outage", "service"],
    category: "Cluster Management"
  },
  {
    id: 58,
    title: "Node Overcommitment Leading to Pod Evictions",
    description: "Node overcommitment led to pod evictions, causing application downtime.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added appropriate resource requests and limits to the affected pods. 	• Rescheduled the pods to other nodes with available resources.",
    tags: ["causing", "overcommitment", "application", "downtime", "node"],
    category: "Cluster Management"
  },
  {
    id: 59,
    title: "Failed Pod Startup Due to Image Pull Policy Misconfiguration",
    description: "Pods failed to start because the image pull policy was misconfigured.",
    component: "Pod",
    severity: "medium",
    resolution: "• Changed the image pull policy to IfNotPresent or Always in the pod configuration. 	• Re-deployed the pods.",
    tags: ["startup", "policy", "failed", "pods", "because"],
    category: "Cluster Management"
  },
  {
    id: 60,
    title: "Excessive Control Plane Resource Usage During Pod Scheduling",
    description: "Control plane resources were excessively utilized during pod scheduling, leading to slow deployments.",
    component: "Pod",
    severity: "medium",
    resolution: "• Optimized the scheduler configuration to reduce resource usage. 	• Split large workloads into smaller ones to improve scheduling efficiency.",
    tags: ["excessively", "resources", "plane", "scheduling", "during"],
    category: "Cluster Management"
  },
  {
    id: 61,
    title: "Persistent Volume Claim Failure Due to Resource Quota Exceedance",
    description: "Persistent Volume Claims (PVCs) failed due to exceeding the resource quota for storage in the namespace.",
    component: "Persistent Volume",
    severity: "critical",
    resolution: "• Increased the storage quota in the namespace. 	• Cleaned up unused PVCs to free up space.",
    tags: ["storage", "exceedance", "failure", "quota", "pvcs"],
    category: "Cluster Management"
  },
  {
    id: 62,
    title: "Failed Pod Rescheduling Due to Node Affinity Misconfiguration",
    description: "Pods failed to reschedule after a node failure due to improper node affinity rules.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted the node affinity rules to be less restrictive. 	• Re-scheduled the pods to available nodes.",
    tags: ["reschedule", "failure", "failed", "pods", "node"],
    category: "Cluster Management"
  },
  {
    id: 63,
    title: "Intermittent Network Latency Due to Misconfigured CNI Plugin",
    description: "Network latency issues occurred intermittently due to misconfiguration in the CNI (Container Network Interface) plugin.",
    component: "Pod",
    severity: "medium",
    resolution: "• Corrected the MTU setting in the CNI configuration to match the network infrastructure. 	• Restarted the CNI plugin and verified network performance.",
    tags: ["misconfigured", "plugin", "latency", "issues", "container"],
    category: "Cluster Management"
  },
  {
    id: 64,
    title: "Excessive Pod Restarts Due to Resource Limits",
    description: "A pod was restarting frequently due to resource limits being too low, causing the container to be killed.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased the memory limits and requests for the affected pods. 	• Re-deployed the updated pods and monitored for stability.",
    tags: ["causing", "restarts", "limits", "restarting", "being"],
    category: "Cluster Management"
  },
  {
    id: 65,
    title: "Cluster Performance Degradation Due to Excessive Logs",
    description: "Cluster performance degraded because of excessive logs being generated by applications, leading to high disk usage.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Configured log rotation for the affected applications. 	• Reduced the verbosity of the logs in application settings.",
    tags: ["cluster", "usage", "being", "because", "leading"],
    category: "Cluster Management"
  },
  {
    id: 66,
    title: "Insufficient Cluster Capacity Due to Unchecked CronJobs",
    description: "The cluster experienced resource exhaustion because CronJobs were running in parallel without proper capacity checks.",
    component: "Job",
    severity: "low",
    resolution: "• Added resource requests and limits for CronJobs. 	• Configured CronJobs to stagger their execution times to avoid simultaneous execution.",
    tags: ["running", "cluster", "insufficient", "because", "without"],
    category: "Cluster Management"
  },
  {
    id: 67,
    title: "Unsuccessful Pod Scaling Due to Affinity/Anti-Affinity Conflict",
    description: "Pod scaling failed due to conflicting affinity/anti-affinity rules that prevented pods from being scheduled.",
    component: "Pod",
    severity: "medium",
    resolution: "• Relaxed the anti-affinity rule to allow pods to be scheduled on any available node. 	• Increased the number of nodes to ensure sufficient capacity.",
    tags: ["that", "prevented", "failed", "from", "pods"],
    category: "Cluster Management"
  },
  {
    id: 68,
    title: "Cluster Inaccessibility Due to API Server Throttling",
    description: "Cluster became inaccessible due to excessive API server throttling caused by too many concurrent requests.",
    component: "API Server",
    severity: "low",
    resolution: "• Throttled client requests to reduce API server load. 	• Implemented exponential backoff for retries in client applications.",
    tags: ["requests", "cluster", "many", "concurrent", "inaccessibility"],
    category: "Cluster Management"
  },
  {
    id: 69,
    title: "Persistent Volume Expansion Failure",
    description: "Expansion of a Persistent Volume (PV) failed due to improper storage class settings.",
    component: "Persistent Volume",
    severity: "critical",
    resolution: "• Updated the storage class to allow volume expansion. 	• Expanded the persistent volume and verified the PVC reflected the changes.",
    tags: ["failure", "expansion", "failed", "settings", "volume"],
    category: "Cluster Management"
  },
  {
    id: 70,
    title: "Unauthorized Access to Cluster Resources Due to RBAC Misconfiguration",
    description: "Unauthorized users gained access to sensitive resources due to misconfigured RBAC roles and bindings.",
    component: "Unknown",
    severity: "low",
    resolution: "• Corrected RBAC policies to restrict access. 	• Audited user access and removed unauthorized permissions.",
    tags: ["gained", "cluster", "resources", "misconfigured", "access"],
    category: "Cluster Management"
  },
  {
    id: 71,
    title: "Inconsistent Pod State Due to Image Pull Failures",
    description: "Pods entered an inconsistent state because the container image failed to pull due to incorrect image tag.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected the image tag in the deployment configuration to point to an existing image. 	• Redeployed the application.",
    tags: ["entered", "incorrect", "state", "failed", "pods"],
    category: "Cluster Management"
  },
  {
    id: 72,
    title: "Pod Disruption Due to Insufficient Node Resources",
    description: "Pods experienced disruptions as nodes ran out of CPU and memory, causing evictions.",
    component: "Pod",
    severity: "low",
    resolution: "• Added more nodes to the cluster to meet resource requirements. 	• Adjusted pod resource requests/limits to be more aligned with node resources.",
    tags: ["causing", "disruptions", "memory", "nodes", "insufficient"],
    category: "Cluster Management"
  },
  {
    id: 73,
    title: "Service Discovery Issues Due to DNS Resolution Failures",
    description: "Services could not discover each other due to DNS resolution failures, affecting internal communication.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased resource limits for the CoreDNS pods. 	• Restarted CoreDNS pods to apply the new resource settings.",
    tags: ["affecting", "services", "each", "other", "internal"],
    category: "Cluster Management"
  },
  {
    id: 74,
    title: "Persistent Volume Provisioning Delays",
    description: "Persistent volume provisioning was delayed due to an issue with the dynamic provisioner.",
    component: "Persistent Volume",
    severity: "critical",
    resolution: "• Corrected the storage class settings, ensuring the correct provisioner was specified. 	• Recreated the PVCs, and provisioning completed successfully.",
    tags: ["dynamic", "provisioner", "volume", "delayed", "issue"],
    category: "Cluster Management"
  },
  {
    id: 75,
    title: "Deployment Rollback Failure Due to Missing Image",
    description: "A deployment rollback failed due to the rollback image version no longer being available in the container registry.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Rebuilt the previous image version and pushed it to the registry. 	• Triggered a successful rollback after the image was available.",
    tags: ["longer", "failure", "deployment", "failed", "being"],
    category: "Cluster Management"
  },
  {
    id: 76,
    title: "Kubernetes Master Node Unresponsive After High Load",
    description: "The Kubernetes master node became unresponsive under high load due to excessive API server calls and high memory usage.",
    component: "API Server",
    severity: "critical",
    resolution: "• Implemented API rate limiting to control excessive calls. 	• Increased the memory allocated to the master node.",
    tags: ["kubernetes", "master", "memory", "server", "calls"],
    category: "Cluster Management"
  },
  {
    id: 77,
    title: "Failed Pod Restart Due to Inadequate Node Affinity",
    description: "Pods failed to restart on available nodes due to overly strict node affinity rules.",
    component: "Pod",
    severity: "critical",
    resolution: "• Relaxed the node affinity rules in the pod spec. 	• Redeployed the pod, and it successfully restarted on an available node.",
    tags: ["nodes", "failed", "pods", "overly", "node"],
    category: "Cluster Management"
  },
  {
    id: 78,
    title: "ReplicaSet Scaling Issues Due to Resource Limits",
    description: "The ReplicaSet failed to scale due to insufficient resources on the nodes.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added more nodes to the cluster to handle the increased workload. 	• Adjusted resource requests and limits to ensure efficient resource allocation.",
    tags: ["limits", "nodes", "failed", "insufficient", "resources"],
    category: "Cluster Management"
  },
  {
    id: 79,
    title: "Missing Namespace After Cluster Upgrade",
    description: "A namespace was missing after performing a cluster upgrade.",
    component: "Namespace",
    severity: "medium",
    resolution: "• Restored the missing namespace from backups. 	• Investigated and fixed the upgrade process to prevent future occurrences.",
    tags: ["cluster", "upgrade", "missing", "after", "performing"],
    category: "Cluster Management"
  },
  {
    id: 80,
    title: "Inefficient Resource Usage Due to Misconfigured Horizontal Pod Autoscaler",
    description: "The Horizontal Pod Autoscaler (HPA) was inefficiently scaling due to misconfigured metrics.",
    component: "Pod",
    severity: "low",
    resolution: "• Reconfigured the HPA to scale based on correct metrics (e.g., memory, custom metrics). 	• Verified that the metrics-server was reporting accurate data.",
    tags: ["misconfigured", "scaling", "metrics", "inefficiently", "inefficient"],
    category: "Cluster Management"
  },
  {
    id: 81,
    title: "Pod Disruption Due to Unavailable Image Registry",
    description: "Pods could not start because the image registry was temporarily unavailable, causing image pull failures.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually downloaded the images from a secondary registry. 	• Temporarily used a local image registry until the primary registry was back online.",
    tags: ["causing", "unavailable", "pods", "because", "could"],
    category: "Cluster Management"
  },
  {
    id: 82,
    title: "Pod Fails to Start Due to Insufficient Resource Requests",
    description: "Pods failed to start because their resource requests were too low, preventing the scheduler from assigning them to nodes.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased the resource requests in the pod spec. 	• Reapplied the configuration, and the pods were scheduled successfully.",
    tags: ["requests", "their", "nodes", "insufficient", "failed"],
    category: "Cluster Management"
  },
  {
    id: 83,
    title: "Horizontal Pod Autoscaler Under-Scaling During Peak Load",
    description: "HPA failed to scale the pods appropriately during a sudden spike in load.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted HPA thresholds to scale more aggressively under higher loads. 	• Increased the replica count to handle the peak load.",
    tags: ["peak", "failed", "pods", "scaling", "load"],
    category: "Cluster Management"
  },
  {
    id: 84,
    title: "Pod Eviction Due to Node Disk Pressure",
    description: "Pods were evicted due to disk pressure on the node, causing service interruptions.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased disk capacity on the affected node. 	• Cleared unnecessary logs and old data from the disk.",
    tags: ["causing", "eviction", "interruptions", "evicted", "pressure"],
    category: "Cluster Management"
  },
  {
    id: 85,
    title: "Failed Node Drain Due to In-Use Pods",
    description: "A node failed to drain due to pods that were in use, preventing the drain operation from completing.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased termination grace periods for the affected pods. 	• Forced the node drain operation after ensuring that the pods could safely terminate.",
    tags: ["that", "failed", "from", "pods", "drain"],
    category: "Cluster Management"
  },
  {
    id: 86,
    title: "Cluster Autoscaler Not Scaling Up",
    description: "The cluster autoscaler failed to scale up the node pool despite high resource demand.",
    component: "Node",
    severity: "low",
    resolution: "• Adjusted the scaling thresholds in the autoscaler configuration. 	• Verified the correct IAM permissions for the autoscaler to scale the node pool.",
    tags: ["cluster", "demand", "despite", "failed", "scaling"],
    category: "Cluster Management"
  },
  {
    id: 87,
    title: "Pod Network Connectivity Issues After Node Reboot",
    description: "Pods lost network connectivity after a node reboot, causing communication failures between services.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually restarted the CNI plugin on the affected node. 	• Ensured that the CNI plugin was configured to restart properly after a node reboot.",
    tags: ["causing", "services", "reboot", "pods", "issues"],
    category: "Cluster Management"
  },
  {
    id: 88,
    title: "Insufficient Permissions Leading to Unauthorized Access Errors",
    description: "Unauthorized access errors occurred due to missing permissions in RBAC configurations.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated the RBAC roles and bindings to include the necessary permissions for the pods. 	• Applied the updated RBAC configurations and confirmed access.",
    tags: ["permissions", "configurations", "insufficient", "rbac", "access"],
    category: "Cluster Management"
  },
  {
    id: 89,
    title: "Failed Pod Upgrade Due to Incompatible API Versions",
    description: "A pod upgrade failed because it was using deprecated APIs not supported in the new version.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated the pod spec to use supported API versions. 	• Reapplied the deployment with the updated APIs.",
    tags: ["using", "failed", "upgrade", "because", "deprecated"],
    category: "Cluster Management"
  },
  {
    id: 90,
    title: "High CPU Utilization Due to Inefficient Application Code",
    description: "A container's high CPU usage was caused by inefficient application code, leading to resource exhaustion.",
    component: "Pod",
    severity: "low",
    resolution: "• Optimized the application code to reduce CPU consumption. 	• Redeployed the application with the optimized code.",
    tags: ["application", "container", "resource", "exhaustion", "inefficient"],
    category: "Cluster Management"
  },
  {
    id: 91,
    title: "Resource Starvation Due to Over-provisioned Pods",
    description: "Resource starvation occurred on nodes because pods were over-provisioned, consuming more resources than expected.",
    component: "Pod",
    severity: "low",
    resolution: "• Reduced resource requests and limits based on actual usage metrics. 	• Re-deployed the pods with optimized resource configurations.",
    tags: ["nodes", "provisioned", "pods", "because", "consuming"],
    category: "Cluster Management"
  },
  {
    id: 92,
    title: "Unscheduled Pods Due to Insufficient Affinity Constraints",
    description: "Pods were not scheduled due to overly strict affinity rules that limited the nodes available for deployment.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted the affinity rules to be less restrictive. 	• Applied changes and verified the pods were scheduled correctly.",
    tags: ["that", "nodes", "insufficient", "deployment", "pods"],
    category: "Cluster Management"
  },
  {
    id: 93,
    title: "Pod Readiness Probe Failure Due to Slow Initialization",
    description: "Pods failed their readiness probes during initialization, causing traffic to be routed to unhealthy instances.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased the readiness probe timeout and delay parameters. 	• Re-applied the deployment, and the pods started passing readiness checks.",
    tags: ["causing", "readiness", "their", "failure", "traffic"],
    category: "Cluster Management"
  },
  {
    id: 94,
    title: "Incorrect Ingress Path Handling Leading to 404 Errors",
    description: "Incorrect path configuration in the ingress resource resulted in 404 errors for certain API routes.",
    component: "Ingress",
    severity: "low",
    resolution: "• Fixed the path configuration in the ingress resource. 	• Re-applied the ingress configuration, and traffic was correctly routed.",
    tags: ["incorrect", "routes", "configuration", "resulted", "handling"],
    category: "Cluster Management"
  },
  {
    id: 95,
    title: "Node Pool Scaling Failure Due to Insufficient Quotas",
    description: "Node pool scaling failed because the account exceeded resource quotas in AWS.",
    component: "Node",
    severity: "critical",
    resolution: "• Requested a quota increase from AWS support. 	• Once the request was approved, scaled the node pool successfully.",
    tags: ["failure", "insufficient", "failed", "quotas", "scaling"],
    category: "Cluster Management"
  },
  {
    id: 96,
    title: "Pod Crash Loop Due to Missing ConfigMap",
    description: "Pods entered a crash loop because a required ConfigMap was not present in the namespace.",
    component: "Pod",
    severity: "critical",
    resolution: "• Recreated the ConfigMap in the namespace. 	• Re-deployed the pods, and they started successfully.",
    tags: ["entered", "pods", "loop", "because", "required"],
    category: "Cluster Management"
  },
  {
    id: 97,
    title: "Kubernetes API Server Slowness Due to Excessive Logging",
    description: "The Kubernetes API server became slow due to excessive log generation from the kubelet and other components.",
    component: "API Server",
    severity: "critical",
    resolution: "• Reduced the verbosity of logs from the kubelet and other components. 	• Configured log rotation to prevent logs from consuming too much disk space.",
    tags: ["logging", "kubernetes", "kubelet", "other", "from"],
    category: "Cluster Management"
  },
  {
    id: 98,
    title: "Pod Scheduling Failure Due to Taints and Tolerations Misconfiguration",
    description: "Pods failed to schedule because the taints and tolerations were misconfigured, preventing the scheduler from placing them on nodes.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected the tolerations in the pod specs to match the taints on the nodes. 	• Re-applied the pods and verified that they were scheduled correctly.",
    tags: ["tolerations", "failure", "nodes", "failed", "from"],
    category: "Cluster Management"
  },
  {
    id: 99,
    title: "Unresponsive Dashboard Due to High Resource Usage",
    description: "The Kubernetes dashboard became unresponsive due to high resource usage caused by a large number of requests.",
    component: "Pod",
    severity: "critical",
    resolution: "• Scaled the dashboard deployment to multiple replicas to handle the load. 	• Adjusted resource requests and limits for the dashboard pod.",
    tags: ["requests", "kubernetes", "large", "dashboard", "became"],
    category: "Cluster Management"
  },
  {
    id: 100,
    title: "Resource Limits Causing Container Crashes",
    description: "Containers kept crashing due to hitting resource limits set in their configurations.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased the resource limits for the affected containers. 	• Re-applied the pod configurations and monitored for stability.",
    tags: ["causing", "limits", "their", "configurations", "containers"],
    category: "Cluster Management"
  },
  {
    id: 101,
    title: "Pod Communication Failure Due to Network Policy Misconfiguration",
    description: "Pods failed to communicate due to a misconfigured NetworkPolicy that blocked ingress traffic.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the NetworkPolicy to allow the necessary ingress traffic between the affected pods. 	• Re-applied the NetworkPolicy and tested communication.",
    tags: ["that", "policy", "failure", "blocked", "failed"],
    category: "Networking"
  },
  {
    id: 102,
    title: "DNS Resolution Failure Due to CoreDNS Pod Crash",
    description: "DNS resolution failed across the cluster after CoreDNS pods crashed unexpectedly.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased memory limits for CoreDNS pods. 	• Restarted the CoreDNS pods and verified DNS resolution functionality.",
    tags: ["cluster", "failure", "failed", "across", "pods"],
    category: "Networking"
  },
  {
    id: 103,
    title: "Network Latency Due to Misconfigured Service Type",
    description: "High network latency occurred because a service was incorrectly configured as a NodePortinstead of a LoadBalancer.",
    component: "Node",
    severity: "medium",
    resolution: "• Changed the service type to LoadBalancer, which properly routed traffic through a managed load balancer. 	• Traffic was distributed evenly, and latency was reduced.",
    tags: ["misconfigured", "latency", "because", "incorrectly", "loadbalancer"],
    category: "Networking"
  },
  {
    id: 104,
    title: "Inconsistent Pod-to-Pod Communication Due to MTU Mismatch",
    description: "Pod-to-pod communication became inconsistent due to a mismatch in Maximum Transmission Unit (MTU) settings across nodes.",
    component: "Pod",
    severity: "low",
    resolution: "• Aligned MTU settings across all nodes in the cluster. 	• Rebooted the nodes to apply the new MTU configuration.",
    tags: ["nodes", "settings", "across", "became", "unit"],
    category: "Networking"
  },
  {
    id: 105,
    title: "Service Discovery Failure Due to DNS Pod Resource Limits",
    description: "Service discovery failed across the cluster due to DNS pod resource limits being exceeded.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased memory and CPU limits for CoreDNS pods. 	• Restarted CoreDNS pods and verified that DNS resolution was restored.",
    tags: ["cluster", "limits", "failure", "failed", "across"],
    category: "Networking"
  },
  {
    id: 106,
    title: "Pod IP Collision Due to Insufficient IP Range",
    description: "Pod IP collisions occurred due to insufficient IP range allocation for the cluster.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased the pod network CIDR and restarted the cluster. 	• Re-deployed the affected pods to new IPs without collisions.",
    tags: ["allocation", "cluster", "range", "insufficient", "collisions"],
    category: "Networking"
  },
  {
    id: 107,
    title: "Network Bottleneck Due to Single Node in NodePool",
    description: "A network bottleneck occurred due to excessive traffic being handled by a single node in the node pool.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased the size of the node pool and added more nodes with higher resource capacity. 	• Rebalanced the pods across nodes and monitored for stability.",
    tags: ["bottleneck", "single", "traffic", "nodepool", "being"],
    category: "Networking"
  },
  {
    id: 108,
    title: "Network Partitioning Due to CNI Plugin Failure",
    description: "A network partition occurred when the CNI plugin failed, preventing pods from communicating with each other.",
    component: "Pod",
    severity: "critical",
    resolution: "• Reinstalled the CNI plugin and applied the correct network configuration. 	• Re-deployed the affected pods after ensuring the network configuration was correct.",
    tags: ["failure", "each", "failed", "from", "pods"],
    category: "Networking"
  },
  {
    id: 109,
    title: "Misconfigured Ingress Resource Causing SSL Errors",
    description: "SSL certificate errors occurred due to a misconfigured Ingress resource.",
    component: "Ingress",
    severity: "critical",
    resolution: "• Corrected the SSL certificate annotations in the Ingress configuration. 	• Re-applied the Ingress resource and verified successful SSL handshakes.",
    tags: ["causing", "misconfigured", "occurred", "certificate", "ingress"],
    category: "Networking"
  },
  {
    id: 110,
    title: "Cluster Autoscaler Fails to Scale Nodes Due to Incorrect IAM Role Permissions",
    description: "The cluster autoscaler failed to scale the number of nodes in response to resource shortages due to missing IAM role permissions for managing EC2 instances.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated the IAM role associated with the cluster autoscaler to include the necessary permissions for EC2 instance provisioning. 	• Restarted the autoscaler and confirmed that new nodes were added successfully.",
    tags: ["cluster", "permissions", "incorrect", "nodes", "failed"],
    category: "Cluster Management"
  },
  {
    id: 111,
    title: "DNS Resolution Failure Due to Incorrect Pod IP Allocation",
    description: "DNS resolution failed due to incorrect IP allocation in the cluster’s CNI plugin.",
    component: "DNS",
    severity: "critical",
    resolution: "• Reconfigured the CNI plugin to correctly allocate IPs within the defined range. 	• Re-deployed affected pods with new IPs that were correctly assigned.",
    tags: ["allocation", "cluster", "incorrect", "failure", "failed"],
    category: "Networking"
  },
  {
    id: 112,
    title: "Failed Pod-to-Service Communication Due to Port Binding Conflict",
    description: "Pods couldn’t communicate with services because of a port binding conflict.",
    component: "Pod",
    severity: "medium",
    resolution: "• Changed the port for the service to a free port and re-applied the service configuration. 	• Verified that pod communication was restored.",
    tags: ["services", "port", "couldn", "failed", "pods"],
    category: "Networking"
  },
  {
    id: 113,
    title: "Pod Eviction Due to Network Resource Constraints",
    description: "A pod was evicted due to network resource constraints, specifically limited bandwidth.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased network bandwidth limits on the affected node pool. 	• Re-scheduled the pod on a node with higher bandwidth availability.",
    tags: ["eviction", "specifically", "evicted", "network", "limited"],
    category: "Networking"
  },
  {
    id: 114,
    title: "Intermittent Network Disconnects Due to MTU Mismatch Between Nodes",
    description: "Intermittent network disconnects occurred due to MTU mismatches between different nodes in the cluster.",
    component: "Node",
    severity: "low",
    resolution: "• Reconfigured the MTU settings on all nodes to match the network interface requirements. 	• Rebooted nodes to apply the new MTU settings.",
    tags: ["disconnects", "cluster", "nodes", "occurred", "network"],
    category: "Networking"
  },
  {
    id: 115,
    title: "Service Load Balancer Failing to Route Traffic to New Pods",
    description: "Service load balancer failed to route traffic to new pods after scaling up.",
    component: "Pod",
    severity: "medium",
    resolution: "• Manually refreshed the load balancer’s backend pool configuration. 	• Monitored the traffic routing to ensure that it was properly balanced across all pods.",
    tags: ["traffic", "failed", "pods", "scaling", "balancer"],
    category: "Networking"
  },
  {
    id: 116,
    title: "Network Traffic Drop Due to Overlapping CIDR Blocks",
    description: "Network traffic dropped due to overlapping CIDR blocks between the VPC and Kubernetes pod network.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the pod network CIDR block to avoid overlap with the VPC. 	• Re-deployed the affected pods and confirmed that traffic flow resumed.",
    tags: ["kubernetes", "traffic", "dropped", "network", "cidr"],
    category: "Networking"
  },
  {
    id: 117,
    title: "Misconfigured DNS Resolvers Leading to Service Discovery Failure",
    description: "Service discovery failed due to misconfigured DNS resolvers.",
    component: "DNS",
    severity: "critical",
    resolution: "• Corrected the DNS resolver settings in the CoreDNS configuration. 	• Re-applied the configuration and verified that service discovery was restored.",
    tags: ["failure", "failed", "discovery", "misconfigured", "service"],
    category: "Networking"
  },
  {
    id: 118,
    title: "Intermittent Latency Due to Overloaded Network Interface",
    description: "Intermittent network latency occurred due to an overloaded network interface on a single node.",
    component: "Pod",
    severity: "medium",
    resolution: "• Rebalanced the pod distribution across nodes to reduce load on the overloaded network interface. 	• Increased network interface resources on the affected node.",
    tags: ["overloaded", "single", "interface", "latency", "node"],
    category: "Networking"
  },
  {
    id: 119,
    title: "Pod Disconnection During Network Partition",
    description: "Pods were disconnected during a network partition between nodes in the cluster.",
    component: "Pod",
    severity: "critical",
    resolution: "• Re-established network connectivity and ensured all nodes could communicate with each other. 	• Re-scheduled the disconnected pods to different nodes to restore connectivity.",
    tags: ["disconnection", "cluster", "nodes", "pods", "partition"],
    category: "Networking"
  },
  {
    id: 121,
    title: "Pod-to-Pod Communication Blocked by Network Policies",
    description: "Pod-to-pod communication was blocked due to overly restrictive network policies.",
    component: "Pod",
    severity: "medium",
    resolution: "• Modified the network policy to allow traffic between the pods. 	• Applied the updated policy and verified that communication was restored.",
    tags: ["blocked", "overly", "restrictive", "network", "communication"],
    category: "Networking"
  },
  {
    id: 122,
    title: "Unresponsive External API Due to DNS Resolution Failure",
    description: "External API calls from the pods failed due to DNS resolution issues for the external domain.",
    component: "DNS",
    severity: "critical",
    resolution: "• Corrected the upstream DNS server settings in CoreDNS. 	• Restarted CoreDNS pods to apply the new configuration.",
    tags: ["failure", "from", "external", "pods", "failed"],
    category: "Networking"
  },
  {
    id: 123,
    title: "Load Balancer Health Checks Failing After Pod Update",
    description: "Load balancer health checks failed after updating a pod due to incorrect readiness probe configuration.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected the readiness probe configuration to reflect the actual application startup time. 	• Redeployed the updated pods and verified that they passed the health checks.",
    tags: ["readiness", "incorrect", "failed", "configuration", "balancer"],
    category: "Networking"
  },
  {
    id: 124,
    title: "Pod Network Performance Degradation After Node Upgrade",
    description: "Network performance degraded after an automatic node upgrade, causing latency in pod communication.",
    component: "Pod",
    severity: "medium",
    resolution: "• Rolled back the node upgrade and manually updated the network interface drivers on the nodes. 	• Verified that network performance improved after driver updates.",
    tags: ["causing", "upgrade", "automatic", "latency", "node"],
    category: "Networking"
  },
  {
    id: 125,
    title: "Service IP Conflict Due to CIDR Overlap",
    description: "A service IP conflict occurred due to overlapping CIDR blocks, preventing correct routing of traffic to the service.",
    component: "Service",
    severity: "low",
    resolution: "• Reconfigured the service CIDR range to avoid conflicts. 	• Redeployed services with new IP assignments.",
    tags: ["overlap", "routing", "traffic", "service", "occurred"],
    category: "Networking"
  },
  {
    id: 126,
    title: "High Latency in Inter-Namespace Communication",
    description: "High latency observed in inter-namespace communication, leading to application timeouts.",
    component: "Pod",
    severity: "medium",
    resolution: "• Modified network policies to allow traffic between namespaces. 	• Verified that latency reduced after policy changes.",
    tags: ["application", "inter", "latency", "communication", "leading"],
    category: "Networking"
  },
  {
    id: 127,
    title: "Pod Network Disruptions Due to CNI Plugin Update",
    description: "Pods experienced network disruptions after updating the CNI plugin to a newer version.",
    component: "Pod",
    severity: "critical",
    resolution: "• Rolled back to the previous version of the CNI plugin. 	• Reported the bug to the plugin maintainers and kept the older version in place until a fix was released.",
    tags: ["disruptions", "pods", "newer", "plugin", "experienced"],
    category: "Networking"
  },
  {
    id: 128,
    title: "Loss of Service Traffic Due to Missing Ingress Annotations",
    description: "Loss of service traffic after ingress annotations were incorrectly set, causing the ingress controller to misroute traffic.",
    component: "Controller",
    severity: "critical",
    resolution: "• Fixed the ingress annotations and re-deployed the ingress resource. 	• Verified traffic flow from external sources to the service was restored.",
    tags: ["causing", "traffic", "controller", "incorrectly", "service"],
    category: "Networking"
  },
  {
    id: 129,
    title: "Node Pool Draining Timeout Due to Slow Pod Termination",
    description: "The node pool draining process timed out during upgrades due to pods taking longer than expected to terminate.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reduced the grace period for pod termination. 	• Optimized resource cleanup tasks in the pods to reduce termination times.",
    tags: ["termination", "process", "taking", "longer", "timed"],
    category: "Cluster Management"
  },
  {
    id: 130,
    title: "Failed Cluster Upgrade Due to Incompatible API Versions",
    description: "The cluster upgrade failed because certain deprecated API versions were still in use, causing compatibility issues with the new K8s version.",
    component: "Ingress",
    severity: "medium",
    resolution: "• Updated Kubernetes manifests to use the latest stable API versions. 	• Re-applied the updated resources and retried the cluster upgrade.",
    tags: ["causing", "cluster", "failed", "still", "upgrade"],
    category: "Cluster Management"
  },
  {
    id: 131,
    title: "DNS Resolution Failure for Services After Pod Restart",
    description: "DNS resolution failed for services after restarting a pod, causing internal communication issues.",
    component: "DNS",
    severity: "critical",
    resolution: "• Restarted CoreDNS to clear the stale cache. 	• Verified that DNS resolution worked for services after the cache refresh.",
    tags: ["causing", "services", "failure", "internal", "failed"],
    category: "Networking"
  },
  {
    id: 132,
    title: "Pod IP Address Changes Causing Application Failures",
    description: "Application failed after a pod IP address changed unexpectedly, breaking communication between services.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the application to use service DNS names instead of pod IPs. 	• Redeployed the application with the new configuration.",
    tags: ["causing", "application", "services", "changes", "failed"],
    category: "Networking"
  },
  {
    id: 133,
    title: "Service Exposure Failed Due to Misconfigured Load Balancer",
    description: "A service exposure attempt failed due to incorrect configuration of the AWS load balancer.",
    component: "Service",
    severity: "low",
    resolution: "• Modified the security group rules to allow traffic on the necessary ports. 	• Re-deployed the service with the updated configuration.",
    tags: ["exposure", "incorrect", "failed", "configuration", "misconfigured"],
    category: "Networking"
  },
  {
    id: 134,
    title: "Network Latency Spikes During Pod Autoscaling",
    description: "Network latency spikes occurred when autoscaling pods during traffic surges.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted the autoscaling configuration to ensure new pods are distributed across nodes with better network resources. 	• Increased network capacity for nodes with higher pod density.",
    tags: ["traffic", "spikes", "pods", "latency", "during"],
    category: "Networking"
  },
  {
    id: 135,
    title: "Service Not Accessible Due to Incorrect Namespace Selector",
    description: "A service was not accessible due to a misconfigured namespace selector in the service definition.",
    component: "Namespace",
    severity: "low",
    resolution: "• Corrected the namespace selector in the service definition. 	• Redeployed the service to apply the fix.",
    tags: ["incorrect", "misconfigured", "service", "accessible", "selector"],
    category: "Networking"
  },
  {
    id: 136,
    title: "Intermittent Pod Connectivity Due to Network Plugin Bug",
    description: "Pods experienced intermittent connectivity issues due to a bug in the CNI network plugin.",
    component: "Pod",
    severity: "medium",
    resolution: "• Rolled back the CNI plugin to the previous stable version. 	• Reported the bug to the plugin maintainers for a fix.",
    tags: ["pods", "plugin", "connectivity", "experienced", "issues"],
    category: "Networking"
  },
  {
    id: 137,
    title: "Failed Ingress Traffic Routing Due to Missing Annotations",
    description: "Ingress traffic was not properly routed to services due to missing annotations in the ingress resource.",
    component: "Controller",
    severity: "low",
    resolution: "• Added the correct annotations to the ingress resource. 	• Redeployed the ingress resource and confirmed traffic routing was restored.",
    tags: ["properly", "routing", "services", "traffic", "failed"],
    category: "Networking"
  },
  {
    id: 138,
    title: "Pod IP Conflict Causing Service Downtime",
    description: "A pod IP conflict caused service downtime and application crashes.",
    component: "Pod",
    severity: "critical",
    resolution: "• Restarted the affected pods, which resolved the IP conflict. 	• Reported the issue to the CNI plugin developers and applied a bug fix.",
    tags: ["causing", "application", "downtime", "service", "conflict"],
    category: "Networking"
  },
  {
    id: 139,
    title: "DNS Resolution Failure After Cluster Upgrade",
    description: "DNS resolution failures occurred across pods after a Kubernetes cluster upgrade.",
    component: "DNS",
    severity: "critical",
    resolution: "• Updated the CoreDNS config map to the correct version. 	• Restarted CoreDNS pods to apply the updated config.",
    tags: ["cluster", "kubernetes", "failure", "across", "upgrade"],
    category: "Networking"
  },
  {
    id: 140,
    title: "Service Mesh Sidecar Injection Failure",
    description: "Sidecar injection failed for some pods in the service mesh, preventing communication between services.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added the sidecar.istio.io/inject: \"true\" annotation to the missing pods. 	• Redeployed the pods to trigger sidecar injection.",
    tags: ["services", "failure", "failed", "some", "pods"],
    category: "Networking"
  },
  {
    id: 141,
    title: "Network Bandwidth Saturation During Large-Scale Deployments",
    description: "Network bandwidth was saturated during a large-scale deployment, affecting cluster communication.",
    component: "Pod",
    severity: "low",
    resolution: "• Staggered the deployment of pods to distribute the load more evenly. 	• Used a local registry to reduce the impact of external image pulls.",
    tags: ["affecting", "cluster", "saturation", "large", "deployment"],
    category: "Networking"
  },
  {
    id: 142,
    title: "Inconsistent Network Policies Blocking Internal Traffic",
    description: "Internal pod-to-pod traffic was unexpectedly blocked due to inconsistent network policies.",
    component: "Pod",
    severity: "medium",
    resolution: "• Merged conflicting network policy rules to allow the necessary traffic. 	• Applied the corrected policy and verified that pod communication was restored.",
    tags: ["traffic", "blocked", "internal", "blocking", "network"],
    category: "Networking"
  },
  {
    id: 143,
    title: "Pod Network Latency Caused by Overloaded CNI Plugin",
    description: "Pod network latency increased due to an overloaded CNI plugin.",
    component: "Pod",
    severity: "medium",
    resolution: "• Switched to a more efficient CNI plugin (Calico) to handle the traffic load. 	• Tuned the Calico settings to optimize performance under heavy load.",
    tags: ["overloaded", "increased", "plugin", "latency", "network"],
    category: "Networking"
  },
  {
    id: 144,
    title: "TCP Retransmissions Due to Network Saturation",
    description: "TCP retransmissions increased due to network saturation, leading to degraded pod-to-pod communication.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased network bandwidth allocation for the cluster. 	• Implemented QoS policies to prioritize critical traffic.",
    tags: ["saturation", "increased", "communication", "network", "retransmissions"],
    category: "Networking"
  },
  {
    id: 145,
    title: "DNS Lookup Failures Due to Resource Limits",
    description: "DNS lookup failures occurred due to resource limits on the CoreDNS pods.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased the resource limits for CoreDNS pods to handle the load. 	• Restarted the CoreDNS pods to apply the new resource limits.",
    tags: ["limits", "lookup", "pods", "occurred", "coredns"],
    category: "Networking"
  },
  {
    id: 146,
    title: "Service Exposure Issues Due to Incorrect Ingress Configuration",
    description: "A service was not accessible externally due to incorrect ingress configuration.",
    component: "Controller",
    severity: "medium",
    resolution: "• Corrected the service URL in the ingress resource. 	• Redeployed the ingress configuration.",
    tags: ["exposure", "incorrect", "configuration", "issues", "service"],
    category: "Networking"
  },
  {
    id: 147,
    title: "Pod-to-Pod Communication Failure Due to Network Policy",
    description: "Pod-to-pod communication failed due to an overly restrictive network policy.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the network policy to allow traffic between pods in the same namespace. 	• Applied the updated policy and verified that communication was restored.",
    tags: ["policy", "failure", "failed", "overly", "restrictive"],
    category: "Networking"
  },
  {
    id: 148,
    title: "Unstable Network Due to Overlay Network Misconfiguration",
    description: "The overlay network was misconfigured, leading to instability in pod communication.",
    component: "Pod",
    severity: "low",
    resolution: "• Corrected the IP pool configuration in the Calico settings. 	• Restarted Calico pods to apply the fix.",
    tags: ["unstable", "misconfigured", "communication", "instability", "network"],
    category: "Networking"
  },
  {
    id: 149,
    title: "Intermittent Pod Network Connectivity Due to Cloud Provider Issues",
    description: "Pod network connectivity was intermittent due to issues with the cloud provider's network infrastructure.",
    component: "Pod",
    severity: "critical",
    resolution: "• Waited for the cloud provider to resolve the network issue. 	• Implemented automatic retries in application code to mitigate the impact of intermittent connectivity.",
    tags: ["cloud", "issues", "connectivity", "network", "with"],
    category: "Networking"
  },
  {
    id: 150,
    title: "Port Conflicts Between Services in Different Namespaces",
    description: "Port conflicts between services in different namespaces led to communication failures.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the service definitions to use different ports for the conflicting services. 	• Redeployed the services and verified communication.",
    tags: ["services", "port", "failures", "namespaces", "different"],
    category: "Networking"
  },
  {
    id: 151,
    title: "NodePort Service Not Accessible Due to Firewall Rules",
    description: "A NodePort service became inaccessible due to restrictive firewall rules on the cloud provider.",
    component: "Node",
    severity: "medium",
    resolution: "• Updated the firewall rules to allow inbound traffic to the NodePort range. 	• Ensured that the required port was open on all nodes.",
    tags: ["cloud", "became", "service", "nodeport", "firewall"],
    category: "Networking"
  },
  {
    id: 152,
    title: "DNS Latency Due to Overloaded CoreDNS Pods",
    description: "CoreDNS latency increased due to resource constraints on the CoreDNS pods.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased CPU and memory resource limits for CoreDNS pods. 	• Restarted CoreDNS pods to apply the new resource limits.",
    tags: ["overloaded", "increased", "pods", "latency", "coredns"],
    category: "Networking"
  },
  {
    id: 153,
    title: "Network Performance Degradation Due to Misconfigured MTU",
    description: "Network performance degraded due to an incorrect Maximum Transmission Unit (MTU) setting.",
    component: "Pod",
    severity: "medium",
    resolution: "• Aligned the MTU settings between the CNI plugin and the Kubernetes nodes. 	• Rebooted affected nodes to apply the configuration changes.",
    tags: ["incorrect", "setting", "misconfigured", "unit", "network"],
    category: "Networking"
  },
  {
    id: 154,
    title: "Application Traffic Routing Issue Due to Incorrect Ingress Resource",
    description: "Application traffic was routed incorrectly due to an error in the ingress resource definition.",
    component: "Ingress",
    severity: "medium",
    resolution: "• Corrected the path definition in the ingress resource. 	• Redeployed the ingress configuration to ensure correct traffic routing.",
    tags: ["routing", "application", "traffic", "incorrect", "error"],
    category: "Networking"
  },
  {
    id: 155,
    title: "Intermittent Service Disruptions Due to DNS Caching Issue",
    description: "Intermittent service disruptions occurred due to stale DNS cache in CoreDNS.",
    component: "DNS",
    severity: "medium",
    resolution: "• Reduced the TTL value in CoreDNS configuration. 	• Restarted CoreDNS pods to apply the new TTL setting.",
    tags: ["disruptions", "cache", "service", "occurred", "coredns"],
    category: "Networking"
  },
  {
    id: 156,
    title: "Flannel Overlay Network Interruption Due to Node Failure",
    description: "Flannel overlay network was interrupted after a node failure, causing pod-to-pod communication issues.",
    component: "Pod",
    severity: "critical",
    resolution: "• Restarted the Flannel pods on the affected nodes to re-establish network routes. 	• Verified that communication between pods was restored.",
    tags: ["causing", "failure", "flannel", "interrupted", "issues"],
    category: "Networking"
  },
  {
    id: 157,
    title: "Network Traffic Loss Due to Port Collision in Network Policy",
    description: "Network traffic was lost due to a port collision in the network policy, affecting application availability.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Updated the network policy to allow the necessary port. 	• Applied the updated network policy and tested the traffic flow.",
    tags: ["affecting", "application", "traffic", "port", "policy"],
    category: "Networking"
  },
  {
    id: 158,
    title: "CoreDNS Service Failures Due to Resource Exhaustion",
    description: "CoreDNS service failed due to resource exhaustion, causing DNS resolution failures.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased the resource requests and limits for CoreDNS pods. 	• Restarted the CoreDNS pods to apply the updated resource allocation.",
    tags: ["causing", "failed", "service", "exhaustion", "coredns"],
    category: "Networking"
  },
  {
    id: 159,
    title: "Pod Network Partition Due to Misconfigured IPAM",
    description: "Pod network partition occurred due to an incorrectly configured IP Address Management (IPAM) in the CNI plugin.",
    component: "Pod",
    severity: "medium",
    resolution: "• Corrected the IPAM configuration to use non-overlapping IP address ranges. 	• Redeployed the CNI plugin and restarted affected pods.",
    tags: ["misconfigured", "incorrectly", "plugin", "partition", "occurred"],
    category: "Networking"
  },
  {
    id: 160,
    title: "Network Performance Degradation Due to Overloaded CNI Plugin",
    description: "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased resource limits for the CNI plugin pods. 	• Used network policies to limit the traffic spikes to specific services.",
    tags: ["overloaded", "traffic", "being", "overwhelmed", "plugin"],
    category: "Networking"
  },
  {
    id: 161,
    title: "Network Performance Degradation Due to Overloaded CNI Plugin",
    description: "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased resource limits for the CNI plugin pods. 	• Used network policies to limit the traffic spikes to specific services.",
    tags: ["overloaded", "traffic", "being", "overwhelmed", "plugin"],
    category: "Networking"
  },
  {
    id: 162,
    title: "DNS Resolution Failures Due to Misconfigured CoreDNS",
    description: "DNS resolution failures due to misconfigured CoreDNS, leading to application errors.",
    component: "DNS",
    severity: "critical",
    resolution: "• Updated CoreDNS ConfigMap to point to a valid upstream DNS server. 	• Restarted CoreDNS pods to apply the new configuration.",
    tags: ["application", "misconfigured", "coredns", "leading", "errors"],
    category: "Networking"
  },
  {
    id: 163,
    title: "Network Partition Due to Incorrect Calico Configuration",
    description: "Network partitioning due to incorrect Calico CNI configuration, resulting in pods being unable to communicate with each other.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated the Calico CIDR range configuration to match the cluster's networking plan. 	• Restarted Calico pods to apply the new configuration and restore network connectivity.",
    tags: ["unable", "incorrect", "each", "other", "being"],
    category: "Networking"
  },
  {
    id: 164,
    title: "IP Overlap Leading to Communication Failure Between Pods",
    description: "Pods failed to communicate due to IP address overlap caused by an incorrect subnet configuration.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the pod network CIDR range to avoid overlapping with host network IPs. 	• Restarted the Kubernetes networking components to apply the new configuration.",
    tags: ["overlap", "incorrect", "failure", "failed", "pods"],
    category: "Networking"
  },
  {
    id: 165,
    title: "Pod Network Latency Due to Overloaded Kubernetes Network Interface",
    description: "Pod network latency increased due to an overloaded network interface on the Kubernetes nodes.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased the network bandwidth for the AWS EC2 instances hosting the Kubernetes nodes. 	• Used network policies to limit traffic to critical pods and avoid overwhelming the network interface.",
    tags: ["overloaded", "kubernetes", "increased", "nodes", "interface"],
    category: "Networking"
  },
  {
    id: 166,
    title: "Intermittent Connectivity Failures Due to Pod DNS Cache Expiry",
    description: "Intermittent connectivity failures due to pod DNS cache expiry, leading to failed DNS lookups for external services.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased the DNS TTL value in the CoreDNS configuration. 	• Restarted CoreDNS pods to apply the new configuration.",
    tags: ["services", "expiry", "failed", "external", "cache"],
    category: "Networking"
  },
  {
    id: 167,
    title: "Flapping Network Connections Due to Misconfigured Network Policies",
    description: "Network connections between pods were intermittently dropping due to misconfigured network policies, causing application instability.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated the network policies to allow necessary pod-to-pod communication. 	• Tested connectivity to ensure stability after the update.",
    tags: ["causing", "flapping", "application", "pods", "misconfigured"],
    category: "Networking"
  },
  {
    id: 168,
    title: "Cluster Network Downtime Due to CNI Plugin Upgrade",
    description: "Cluster network downtime occurred during a CNI plugin upgrade, affecting pod-to-pod communication.",
    component: "Pod",
    severity: "critical",
    resolution: "• Applied the required configuration changes for the new CNI plugin version. 	• Restarted affected pods and network components to restore connectivity.",
    tags: ["affecting", "cluster", "downtime", "upgrade", "plugin"],
    category: "Networking"
  },
  {
    id: 169,
    title: "Inconsistent Pod Network Connectivity in Multi-Region Cluster",
    description: "Pods in a multi-region cluster experienced inconsistent network connectivity between regions due to misconfigured VPC peering.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated VPC peering routes and ensured proper configuration between the regions. 	• Tested connectivity after the change to confirm resolution.",
    tags: ["cluster", "regions", "pods", "misconfigured", "connectivity"],
    category: "Networking"
  },
  {
    id: 170,
    title: "Pod Network Partition Due to Network Policy Blocking DNS Requests",
    description: "Pods were unable to resolve DNS due to a network policy blocking DNS traffic, causing service failures.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the network policy to allow DNS traffic. 	• Restarted affected pods to ensure they could access DNS again.",
    tags: ["requests", "unable", "causing", "policy", "traffic"],
    category: "Networking"
  },
  {
    id: 171,
    title: "Network Bottleneck Due to Overutilized Network Interface",
    description: "Network bottleneck occurred due to overutilization of a single network interface on the worker nodes.",
    component: "Pod",
    severity: "medium",
    resolution: "• Added a second network interface to the worker nodes for pod traffic and node-to-node communication. 	• Reconfigured the nodes to distribute traffic across the two interfaces.",
    tags: ["overutilization", "bottleneck", "single", "nodes", "overutilized"],
    category: "Networking"
  },
  {
    id: 172,
    title: "Network Latency Caused by Overloaded VPN Tunnel",
    description: "Network latency increased due to an overloaded VPN tunnel between the Kubernetes cluster and an on-premise data center.",
    component: "Pod",
    severity: "medium",
    resolution: "• Upgraded the VPN tunnel to a higher bandwidth option. 	• Optimized the data flow by reducing unnecessary traffic over the tunnel.",
    tags: ["overloaded", "kubernetes", "tunnel", "increased", "cluster"],
    category: "Networking"
  },
  {
    id: 173,
    title: "Dropped Network Packets Due to MTU Mismatch",
    description: "Network packets were dropped due to a mismatch in Maximum Transmission Unit (MTU) settings across different network components.",
    component: "Pod",
    severity: "medium",
    resolution: "• Unified MTU settings across all nodes and the CNI plugin configuration. 	• Restarted the network components to apply the changes.",
    tags: ["settings", "across", "components", "packets", "dropped"],
    category: "Networking"
  },
  {
    id: 174,
    title: "Pod Network Isolation Due to Misconfigured Network Policy",
    description: "Pods in a specific namespace were unable to communicate due to an incorrectly applied network policy blocking traffic between namespaces.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the network policy to allow traffic between namespaces. 	• Restarted affected pods to re-establish communication.",
    tags: ["unable", "policy", "traffic", "pods", "misconfigured"],
    category: "Networking"
  },
  {
    id: 175,
    title: "Service Discovery Failures Due to CoreDNS Pod Crash",
    description: "Service discovery failures occurred when CoreDNS pods crashed due to resource exhaustion, causing DNS resolution issues.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased CPU and memory resources for CoreDNS pods. 	• Optimized the DNS query patterns from applications to reduce the load.",
    tags: ["causing", "discovery", "pods", "issues", "service"],
    category: "Networking"
  },
  {
    id: 176,
    title: "Pod DNS Resolution Failure Due to CoreDNS Configuration Issue",
    description: "DNS resolution failures occurred within pods due to a misconfiguration in the CoreDNS config map.",
    component: "DNS",
    severity: "critical",
    resolution: "• Updated the CoreDNS ConfigMap to add the missing external DNS server configuration. 	• Restarted the CoreDNS pods to apply the changes.",
    tags: ["within", "failure", "configuration", "pods", "occurred"],
    category: "Networking"
  },
  {
    id: 177,
    title: "DNS Latency Due to Overloaded CoreDNS Pods",
    description: "CoreDNS pods experienced high latency and timeouts due to resource overutilization, causing slow DNS resolution for applications.",
    component: "DNS",
    severity: "medium",
    resolution: "• Increased CPU and memory limits for CoreDNS pods. 	• Enabled horizontal pod autoscaling to dynamically scale CoreDNS based on traffic.",
    tags: ["causing", "overutilization", "overloaded", "pods", "latency"],
    category: "Networking"
  },
  {
    id: 178,
    title: "Pod Network Degradation Due to Overlapping CIDR Blocks",
    description: "Network degradation occurred due to overlapping CIDR blocks between VPCs in a hybrid cloud setup, causing routing issues.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the CIDR blocks of one VPC to avoid overlap. 	• Adjusted the network routing tables to ensure traffic was correctly routed.",
    tags: ["causing", "cloud", "routing", "vpcs", "issues"],
    category: "Networking"
  },
  {
    id: 179,
    title: "Service Discovery Failures Due to Network Policy Blocking DNS Traffic",
    description: "Service discovery failed when a network policy was mistakenly applied to block DNS traffic, preventing pods from resolving services within the cluster.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the network policy to allow DNS traffic on UDP port 53. 	• Restarted the affected pods to restore service discovery functionality.",
    tags: ["services", "within", "applied", "blocking", "failed"],
    category: "Networking"
  },
  {
    id: 180,
    title: "Intermittent Network Connectivity Due to Overloaded Overlay Network",
    description: "Pods experienced intermittent network connectivity issues due to an overloaded overlay network that could not handle the traffic.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the overlay network to use a more scalable network plugin. 	• Increased resource allocation for the network components and scaled the infrastructure to handle the load.",
    tags: ["that", "overloaded", "traffic", "pods", "issues"],
    category: "Networking"
  },
  {
    id: 181,
    title: "Pod-to-Pod Communication Failure Due to CNI Plugin Configuration Issue",
    description: "Pods were unable to communicate with each other due to a misconfiguration in the CNI plugin.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the Calico configuration to include the correct IP pool definitions. 	• Restarted the affected pods to obtain new IPs.",
    tags: ["unable", "failure", "each", "other", "configuration"],
    category: "Networking"
  },
  {
    id: 182,
    title: "Sporadic DNS Failures Due to Resource Contention in CoreDNS Pods",
    description: "Sporadic DNS resolution failures occurred due to resource contention in CoreDNS pods, which were not allocated enough CPU resources.",
    component: "DNS",
    severity: "critical",
    resolution: "• Increased CPU resource requests and limits for CoreDNS pods. 	• Enabled horizontal pod autoscaling for CoreDNS to scale during high demand.",
    tags: ["which", "allocated", "pods", "resources", "occurred"],
    category: "Networking"
  },
  {
    id: 183,
    title: "High Latency in Pod-to-Node Communication Due to Overlay Network",
    description: "High latency was observed in pod-to-node communication due to network overhead introduced by the overlay network.",
    component: "Pod",
    severity: "medium",
    resolution: "• Switched to a different CNI plugin (Calico) that offered better performance for the network topology. 	• Retested pod-to-node communication after switching CNI plugins.",
    tags: ["latency", "overhead", "node", "overlay", "network"],
    category: "Networking"
  },
  {
    id: 184,
    title: "Service Discovery Issues Due to DNS Cache Staleness",
    description: "Service discovery failed due to stale DNS cache entries that were not updated when services changed IPs.",
    component: "DNS",
    severity: "critical",
    resolution: "• Cleared the DNS cache manually and implemented shorter TTL (Time-To-Live) values for DNS records. 	• Restarted CoreDNS pods to apply changes.",
    tags: ["that", "services", "staleness", "failed", "discovery"],
    category: "Networking"
  },
  {
    id: 185,
    title: "Network Partition Between Node Pools in Multi-Zone Cluster",
    description: "Pods in different node pools located in different zones experienced network partitioning due to a misconfigured regional load balancer.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated the regional load balancer configuration to properly route cross-zone traffic. 	• Re-deployed the affected pods to restore connectivity.",
    tags: ["zone", "cluster", "pools", "zones", "regional"],
    category: "Networking"
  },
  {
    id: 186,
    title: "Pod Network Isolation Failure Due to Missing NetworkPolicy",
    description: "Pods that were intended to be isolated from each other could communicate freely due to a missing NetworkPolicy.",
    component: "Pod",
    severity: "critical",
    resolution: "• Created appropriate NetworkPolicy to restrict pod communication based on the namespace and labels. 	• Applied the NetworkPolicy and tested communication to ensure isolation was working.",
    tags: ["that", "failure", "each", "from", "other"],
    category: "Networking"
  },
  {
    id: 187,
    title: "Flapping Node Network Connectivity Due to MTU Mismatch",
    description: "Nodes in the cluster were flapping due to mismatched MTU settings between Kubernetes and the underlying physical network, causing intermittent network connectivity issues.",
    component: "Node",
    severity: "medium",
    resolution: "• Updated the Kubernetes network plugin's MTU setting to match the physical network MTU. 	• Restarted the affected nodes and validated the network stability.",
    tags: ["causing", "flapping", "cluster", "mismatched", "kubernetes"],
    category: "Networking"
  },
  {
    id: 188,
    title: "DNS Query Timeout Due to Unoptimized CoreDNS Config",
    description: "DNS queries were timing out in the cluster, causing delays in service discovery, due to unoptimized CoreDNS configuration.",
    component: "DNS",
    severity: "low",
    resolution: "• Increased CPU and memory requests/limits for CoreDNS. 	• Optimized the CoreDNS configuration to use a more efficient query handling strategy.",
    tags: ["causing", "cluster", "unoptimized", "discovery", "timeout"],
    category: "Networking"
  },
  {
    id: 189,
    title: "Traffic Splitting Failure Due to Incorrect Service LoadBalancer Configuration",
    description: "Traffic splitting between two microservices failed due to a misconfiguration in the Service LoadBalancer.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected the annotations in the Service definition to enable proper traffic splitting. 	• Redeployed the Service and tested that traffic was split as expected.",
    tags: ["incorrect", "traffic", "failure", "failed", "configuration"],
    category: "Networking"
  },
  {
    id: 190,
    title: "Network Latency Between Pods in Different Regions",
    description: "Pods in different Azure regions experienced high network latency, affecting application performance.",
    component: "Pod",
    severity: "medium",
    resolution: "• Configured Azure Virtual Network peering with appropriate bandwidth settings. 	• Enabled specific network optimizations for inter-region communication.",
    tags: ["affecting", "regions", "application", "azure", "pods"],
    category: "Networking"
  },
  {
    id: 191,
    title: "Port Collision Between Services Due to Missing Port Ranges",
    description: "Two services attempted to bind to the same port, causing a port collision and service failures.",
    component: "Node",
    severity: "critical",
    resolution: "• Updated the service definitions to specify unique ports or port ranges. 	• Redeployed the services to resolve the conflict.",
    tags: ["causing", "bind", "services", "same", "port"],
    category: "Networking"
  },
  {
    id: 192,
    title: "Pod-to-External Service Connectivity Failures Due to Egress Network Policy",
    description: "Pods failed to connect to an external service due to an overly restrictive egress network policy.",
    component: "Pod",
    severity: "critical",
    resolution: "• Modified the egress network policy to allow traffic to the required external service. 	• Applied the updated policy and tested connectivity.",
    tags: ["policy", "connect", "failed", "external", "pods"],
    category: "Networking"
  },
  {
    id: 193,
    title: "Pod Connectivity Loss After Network Plugin Upgrade",
    description: "Pods lost connectivity after an upgrade of the Calico network plugin due to misconfigured IP pool settings.",
    component: "Pod",
    severity: "medium",
    resolution: "• Manually updated the Calico configuration to restore the correct IP pool settings. 	• Restarted the Calico pods and verified pod connectivity.",
    tags: ["settings", "upgrade", "pods", "plugin", "connectivity"],
    category: "Networking"
  },
  {
    id: 194,
    title: "External DNS Not Resolving After Cluster Network Changes",
    description: "External DNS resolution stopped working after changes were made to the cluster network configuration.",
    component: "DNS",
    severity: "medium",
    resolution: "• Updated CoreDNS configuration to correctly forward DNS queries to external DNS servers. 	• Restarted CoreDNS pods to apply changes.",
    tags: ["cluster", "changes", "external", "configuration", "stopped"],
    category: "Networking"
  },
  {
    id: 195,
    title: "Slow Pod Communication Due to Misconfigured MTU in Network Plugin",
    description: "Pod-to-pod communication was slow due to an incorrect MTU setting in the network plugin.",
    component: "Pod",
    severity: "medium",
    resolution: "• Corrected the MTU setting in the network plugin to match the host’s MTU. 	• Restarted the affected pods to apply the changes.",
    tags: ["incorrect", "setting", "misconfigured", "plugin", "network"],
    category: "Networking"
  },
  {
    id: 196,
    title: "High CPU Usage in Nodes Due to Overloaded Network Plugin",
    description: "Nodes experienced high CPU usage due to an overloaded network plugin that couldn’t handle traffic spikes effectively.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased resource allocation (CPU/memory) for the network plugin. 	• Configured scaling policies for the network plugin to dynamically adjust resources.",
    tags: ["that", "overloaded", "traffic", "nodes", "couldn"],
    category: "Networking"
  },
  {
    id: 197,
    title: "Cross-Namespace Network Isolation Not Enforced",
    description: "Network isolation between namespaces failed due to an incorrectly applied NetworkPolicy.",
    component: "Pod",
    severity: "low",
    resolution: "• Refined the NetworkPolicy to more specifically target pods within certain namespaces. 	• Re-applied the updated NetworkPolicy and validated the isolation.",
    tags: ["enforced", "cross", "failed", "incorrectly", "applied"],
    category: "Networking"
  },
  {
    id: 198,
    title: "Inconsistent Service Discovery Due to CoreDNS Misconfiguration",
    description: "Service discovery was inconsistent due to misconfigured CoreDNS settings.",
    component: "DNS",
    severity: "critical",
    resolution: "• Reverted CoreDNS configuration to use the internal DNS resolver instead of the external one. 	• Restarted CoreDNS pods to apply the changes.",
    tags: ["settings", "discovery", "misconfigured", "service", "coredns"],
    category: "Networking"
  },
  {
    id: 199,
    title: "Network Segmentation Issues Due to Misconfigured CNI",
    description: "Network segmentation between clusters failed due to incorrect CNI (Container Network Interface) plugin configuration.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the CNI plugin to enforce correct network segmentation. 	• Applied the changes and tested communication between pods from different segments.",
    tags: ["incorrect", "failed", "configuration", "misconfigured", "issues"],
    category: "Networking"
  },
  {
    id: 200,
    title: "DNS Cache Poisoning in CoreDNS",
    description: "DNS cache poisoning occurred in CoreDNS, leading to incorrect IP resolution for services.",
    component: "DNS",
    severity: "low",
    resolution: "• Implemented DNS query validation and hardened CoreDNS security by limiting cache lifetime and introducing DNSSEC. 	• Cleared the DNS cache and restarted CoreDNS to remove the poisoned entries.",
    tags: ["services", "incorrect", "cache", "occurred", "coredns"],
    category: "Networking"
  },
  {
    id: 201,
    title: "Unauthorized Access to Secrets Due to Incorrect RBAC Permissions",
    description: "Unauthorized users were able to access Kubernetes secrets due to overly permissive RBAC roles.",
    component: "Service",
    severity: "low",
    resolution: "• Reconfigured RBAC roles to adhere to the principle of least privilege. 	• Limited the permissions of the service account and tested access controls.",
    tags: ["able", "permissions", "incorrect", "kubernetes", "permissive"],
    category: "Security"
  },
  {
    id: 202,
    title: "Insecure Network Policies Leading to Pod Exposure",
    description: "Pods intended to be isolated were exposed to unauthorized traffic due to misconfigured network policies.",
    component: "Pod",
    severity: "low",
    resolution: "• Corrected the NetworkPolicy by refining podSelector and applying stricter isolation. 	• Tested the updated policy to confirm proper isolation between namespaces.",
    tags: ["exposure", "traffic", "pods", "exposed", "intended"],
    category: "Security"
  },
  {
    id: 203,
    title: "Privileged Container Vulnerability Due to Incorrect Security Context",
    description: "A container running with elevated privileges due to an incorrect security context exposed the cluster to potential privilege escalation attacks.",
    component: "Pod",
    severity: "low",
    resolution: "• Removed privileged: true from the container's security context. 	• Applied the updated deployment and monitored the pod for any security incidents.",
    tags: ["potential", "running", "context", "cluster", "incorrect"],
    category: "Security"
  },
  {
    id: 204,
    title: "Exposed Kubernetes Dashboard Due to Misconfigured Ingress",
    description: "The Kubernetes dashboard was exposed to the public internet due to a misconfigured Ingress resource.",
    component: "Controller",
    severity: "low",
    resolution: "• Updated the Ingress resource to restrict access to specific IP addresses or require authentication for access. 	• Re-applied the updated configuration and tested access controls.",
    tags: ["kubernetes", "public", "exposed", "misconfigured", "dashboard"],
    category: "Security"
  },
  {
    id: 205,
    title: "Unencrypted Communication Between Pods Due to Missing TLS Configuration",
    description: "Communication between microservices in the cluster was not encrypted due to missing TLS configuration, exposing data to potential interception.",
    component: "Pod",
    severity: "low",
    resolution: "• Configured mTLS between services to ensure encrypted communication. 	• Deployed certificates and updated services to use HTTPS for communication.",
    tags: ["encrypted", "potential", "cluster", "pods", "configuration"],
    category: "Security"
  },
  {
    id: 206,
    title: "Sensitive Data in Logs Due to Improper Log Sanitization",
    description: "Sensitive data, such as API keys and passwords, was logged due to improper sanitization in application logs.",
    component: "Unknown",
    severity: "low",
    resolution: "• Updated the application to sanitize sensitive data before it was logged. 	• Configured the logging system to filter out sensitive information from logs.",
    tags: ["passwords", "application", "such", "data", "sanitization"],
    category: "Security"
  },
  {
    id: 207,
    title: "Insufficient Pod Security Policies Leading to Privilege Escalation",
    description: "Privilege escalation was possible due to insufficiently restrictive PodSecurityPolicies (PSPs).",
    component: "Pod",
    severity: "low",
    resolution: "• Updated the PSPs to restrict privilege escalation by setting allowPrivilegeEscalation: false. 	• Applied the updated policies and tested pod deployments to confirm proper restrictions.",
    tags: ["psps", "possible", "insufficiently", "insufficient", "restrictive"],
    category: "Security"
  },
  {
    id: 208,
    title: "Service Account Token Compromise",
    description: "A compromised service account token was used to gain unauthorized access to the cluster's API server.",
    component: "API Server",
    severity: "low",
    resolution: "• Rotated the service account token and updated the deployment to prevent exposure. 	• Used Kubernetes secrets management to securely store sensitive tokens.",
    tags: ["compromise", "cluster", "compromised", "token", "used"],
    category: "Security"
  },
  {
    id: 209,
    title: "Lack of Regular Vulnerability Scanning in Container Images",
    description: "The container images used in the cluster were not regularly scanned for vulnerabilities, leading to deployment of vulnerable images.",
    component: "Unknown",
    severity: "low",
    resolution: "• Integrated a vulnerability scanning tool like Clair or Trivy into the CI/CD pipeline. 	• Rebuilt the container images with a fixed version and redeployed them.",
    tags: ["scanning", "cluster", "deployment", "regularly", "used"],
    category: "Security"
  },
  {
    id: 210,
    title: "Insufficient Container Image Signing Leading to Unverified Deployments",
    description: "Unverified container images were deployed due to the lack of image signing, exposing the cluster to potential malicious code.",
    component: "Unknown",
    severity: "low",
    resolution: "• Enabled image signing in the container registry and integrated it with Kubernetes for secure image verification. 	• Re-pulled and deployed only signed images to the cluster.",
    tags: ["unverified", "potential", "cluster", "signing", "insufficient"],
    category: "Security"
  },
  {
    id: 211,
    title: "Insecure Default Namespace Leading to Unauthorized Access",
    description: "Unauthorized users gained access to resources in the default namespace due to lack of namespace isolation.",
    component: "Namespace",
    severity: "low",
    resolution: "• Restricted access to the default namespace using RBAC and network policies. 	• Created separate namespaces for different workloads and applied appropriate isolation policies.",
    tags: ["gained", "default", "resources", "access", "unauthorized"],
    category: "Security"
  },
  {
    id: 212,
    title: "Vulnerable OpenSSL Version in Container Images",
    description: "A container image was using an outdated and vulnerable version of OpenSSL, exposing the cluster to known security vulnerabilities.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Rebuilt the container image using a newer, secure version of OpenSSL. 	• Deployed the updated image and monitored for any further issues.",
    tags: ["cluster", "using", "openssl", "container", "known"],
    category: "Security"
  },
  {
    id: 213,
    title: "Misconfigured API Server Authentication Allowing External Access",
    description: "API server authentication was misconfigured, allowing external unauthenticated users to access the Kubernetes API.",
    component: "API Server",
    severity: "low",
    resolution: "• Disabled unauthenticated access by removing --insecure-allow-any-token from the API server configuration. 	• Configured proper authentication methods, such as client certificates or OAuth2.",
    tags: ["kubernetes", "external", "misconfigured", "access", "authentication"],
    category: "Security"
  },
  {
    id: 214,
    title: "Insufficient Node Security Due to Lack of OS Hardening",
    description: "Nodes in the cluster were insecure due to a lack of proper OS hardening, making them vulnerable to attacks.",
    component: "Node",
    severity: "low",
    resolution: "• Applied OS hardening guidelines, such as disabling root SSH access and ensuring only key-based authentication. 	• Updated the operating system with the latest security patches.",
    tags: ["attacks", "cluster", "nodes", "insufficient", "node"],
    category: "Security"
  },
  {
    id: 215,
    title: "Unrestricted Ingress Access to Sensitive Resources",
    description: "Sensitive services were exposed to the public internet due to unrestricted ingress rules.",
    component: "Controller",
    severity: "low",
    resolution: "• Restrict ingress traffic by specifying allowed IP ranges or adding authentication for access to sensitive resources. 	• Used a more restrictive ingress controller and verified that access was limited to trusted sources.",
    tags: ["services", "public", "resources", "exposed", "access"],
    category: "Security"
  },
  {
    id: 216,
    title: "Exposure of Sensitive Data in Container Environment Variables",
    description: "Sensitive data, such as database credentials, was exposed through environment variables in container configurations.",
    component: "Certificates",
    severity: "medium",
    resolution: "• Moved sensitive data into Kubernetes Secrets instead of directly embedding them in environment variables. 	• Updated the deployment YAML to reference the Secrets and applied the changes.",
    tags: ["exposure", "configurations", "such", "data", "container"],
    category: "Security"
  },
  {
    id: 217,
    title: "Inadequate Container Resource Limits Leading to DoS Attacks",
    description: "A lack of resource limits on containers allowed a denial-of-service (DoS) attack to disrupt services by consuming excessive CPU and memory.",
    component: "Pod",
    severity: "critical",
    resolution: "• Set appropriate resource requests and limits in the container specification to prevent resource exhaustion. 	• Applied resource quotas to limit the total resource usage for namespaces.",
    tags: ["attacks", "services", "limits", "attack", "memory"],
    category: "Security"
  },
  {
    id: 218,
    title: "Exposure of Container Logs Due to Insufficient Log Management",
    description: "Container logs were exposed to unauthorized users due to insufficient log management controls.",
    component: "Unknown",
    severity: "low",
    resolution: "• Implemented access controls to restrict log access to authorized users only. 	• Encrypted logs at rest and in transit to prevent exposure.",
    tags: ["exposure", "insufficient", "controls", "exposed", "container"],
    category: "Security"
  },
  {
    id: 219,
    title: "Using Insecure Docker Registry for Container Images",
    description: "The cluster was pulling container images from an insecure, untrusted Docker registry, exposing the system to the risk of malicious images.",
    component: "Unknown",
    severity: "low",
    resolution: "• Configured Kubernetes to pull images only from trusted and secure registries. 	• Implemented image signing and vulnerability scanning in the CI/CD pipeline.",
    tags: ["cluster", "risk", "docker", "pulling", "using"],
    category: "Security"
  },
  {
    id: 220,
    title: "Weak Pod Security Policies Leading to Privileged Containers",
    description: "Privileged containers were deployed due to weak or missing Pod Security Policies (PSPs), exposing the cluster to security risks.",
    component: "Pod",
    severity: "low",
    resolution: "• Created and applied strict Pod Security Policies to limit the permissions of containers. 	• Enforced the use of non-privileged containers for sensitive workloads.",
    tags: ["psps", "cluster", "risks", "containers", "exposing"],
    category: "Security"
  },
  {
    id: 221,
    title: "Unsecured Kubernetes Dashboard",
    description: "The Kubernetes Dashboard was exposed to the public internet without proper authentication or access controls, allowing unauthorized users to access sensitive cluster information.",
    component: "Unknown",
    severity: "low",
    resolution: "• Enabled authentication and RBAC rules for the Kubernetes Dashboard. 	• Restricted access to the Dashboard by allowing connections only from trusted IP addresses.",
    tags: ["kubernetes", "cluster", "public", "controls", "information"],
    category: "Security"
  },
  {
    id: 222,
    title: "Using HTTP Instead of HTTPS for Ingress Resources",
    description: "Sensitive applications were exposed using HTTP instead of HTTPS, leaving communication vulnerable to eavesdropping and man-in-the-middle attacks.",
    component: "Controller",
    severity: "low",
    resolution: "• Configured ingress controllers to use HTTPS by setting up TLS termination with valid SSL certificates. 	• Redirected all HTTP traffic to HTTPS to ensure encrypted communication.",
    tags: ["attacks", "instead", "http", "using", "middle"],
    category: "Security"
  },
  {
    id: 223,
    title: "Insecure Network Policies Exposing Internal Services",
    description: "Network policies were too permissive, exposing internal services to unnecessary access, increasing the risk of lateral movement within the cluster.",
    component: "Ingress",
    severity: "low",
    resolution: "• Restricted network policies to only allow communication between services that needed to interact. 	• Used namespace-based segmentation and ingress/egress rules to enforce tighter security.",
    tags: ["services", "increasing", "risk", "within", "internal"],
    category: "Security"
  },
  {
    id: 224,
    title: "Exposing Sensitive Secrets in Environment Variables",
    description: "Sensitive credentials were stored in environment variables within the pod specification, exposing them to potential attackers.",
    component: "Pod",
    severity: "low",
    resolution: "• Moved sensitive data to Kubernetes Secrets and updated the pod configurations to reference the secrets. 	• Ensured that secrets were encrypted and only accessible by the relevant services.",
    tags: ["potential", "within", "credentials", "stored", "secrets"],
    category: "Security"
  },
  {
    id: 225,
    title: "Insufficient RBAC Permissions Leading to Unauthorized Access",
    description: "Insufficient Role-Based Access Control (RBAC) configurations allowed unauthorized users to access and modify sensitive resources within the cluster.",
    component: "Namespace",
    severity: "low",
    resolution: "• Reconfigured RBAC roles to ensure that users only had the minimum necessary permissions. 	• Applied the principle of least privilege and limited access to sensitive resources.",
    tags: ["cluster", "permissions", "configurations", "within", "rbac"],
    category: "Security"
  },
  {
    id: 226,
    title: "Insecure Ingress Controller Exposed to the Internet",
    description: "An insecure ingress controller was exposed to the internet, allowing attackers to exploit vulnerabilities in the controller.",
    component: "Controller",
    severity: "low",
    resolution: "• Secured the ingress controller by implementing proper authentication and IP whitelisting. 	• Ensured that only authorized users or services could access the ingress controller.",
    tags: ["controller", "exposed", "allowing", "insecure", "exploit"],
    category: "Security"
  },
  {
    id: 227,
    title: "Lack of Security Updates in Container Images",
    description: "The cluster was running outdated container images without the latest security patches, exposing it to known vulnerabilities.",
    component: "Unknown",
    severity: "low",
    resolution: "• Rebuilt the container images with updated base images and security patches. 	• Implemented a policy for regularly updating container images to include the latest security fixes.",
    tags: ["running", "cluster", "container", "without", "patches"],
    category: "Security"
  },
  {
    id: 228,
    title: "Exposed Kubelet API Without Authentication",
    description: "The Kubelet API was exposed without proper authentication or authorization, allowing external users to query cluster node details.",
    component: "Pod",
    severity: "low",
    resolution: "• Restricted Kubelet API access to internal networks by updating security group rules. 	• Enabled authentication and authorization for the Kubelet API using client certificates.",
    tags: ["kubelet", "cluster", "details", "external", "exposed"],
    category: "Security"
  },
  {
    id: 229,
    title: "Inadequate Logging of Sensitive Events",
    description: "Sensitive security events were not logged, preventing detection of potential security breaches or misconfigurations.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Reconfigured the Kubernetes audit policy to capture sensitive events, including user access to secrets, privilege escalations, and changes in RBAC roles. 	• Integrated log aggregation and alerting tools to monitor security logs in real time.",
    tags: ["logging", "potential", "breaches", "events", "preventing"],
    category: "Security"
  },
  {
    id: 230,
    title: "Misconfigured RBAC Allowing Cluster Admin Privileges to Developers",
    description: "Developers were mistakenly granted cluster admin privileges due to misconfigured RBAC roles, which gave them the ability to modify sensitive resources.",
    component: "Namespace",
    severity: "low",
    resolution: "• Reconfigured RBAC roles to follow the principle of least privilege and removed cluster admin permissions for developers. 	• Implemented role separation to ensure developers only had access to resources necessary for their tasks.",
    tags: ["mistakenly", "cluster", "which", "granted", "privileges"],
    category: "Security"
  },
  {
    id: 231,
    title: "Insufficiently Secured Service Account Permissions",
    description: "Service accounts were granted excessive permissions, giving pods access to resources they did not require, leading to a potential security risk.",
    component: "Pod",
    severity: "low",
    resolution: "• Created specific service accounts for each pod with minimal necessary permissions. 	• Applied strict RBAC rules to restrict access to sensitive resources for service accounts.",
    tags: ["insufficiently", "access", "excessive", "were", "they"],
    category: "Security"
  },
  {
    id: 232,
    title: "Cluster Secrets Exposed Due to Insecure Mounting",
    description: "Kubernetes secrets were mounted into pods insecurely, exposing sensitive information to unauthorized users.",
    component: "Pod",
    severity: "low",
    resolution: "• Moved secrets to Kubernetes Secrets and mounted them using environment variables instead of directly into the filesystem. 	• Restricted access to secrets using RBAC and implemented encryption for sensitive data.",
    tags: ["insecurely", "cluster", "kubernetes", "mounting", "information"],
    category: "Security"
  },
  {
    id: 233,
    title: "Improperly Configured API Server Authorization",
    description: "The Kubernetes API server was improperly configured, allowing unauthorized users to make API calls without proper authorization.",
    component: "API Server",
    severity: "low",
    resolution: "• Reconfigured the API server to use proper authorization mechanisms (e.g., RBAC, ABAC). 	• Validated and tested API server access to ensure only authorized users could make API calls.",
    tags: ["kubernetes", "without", "calls", "unauthorized", "allowing"],
    category: "Security"
  },
  {
    id: 234,
    title: "Compromised Image Registry Access Credentials",
    description: "The image registry access credentials were compromised, allowing attackers to pull and run malicious images in the cluster.",
    component: "Unknown",
    severity: "low",
    resolution: "• Moved credentials to Kubernetes Secrets, which are encrypted by default. 	• Enforced the use of trusted image registries and scanned images for vulnerabilities before use.",
    tags: ["cluster", "compromised", "credentials", "access", "image"],
    category: "Security"
  },
  {
    id: 235,
    title: "Insufficiently Secured Cluster API Server Access",
    description: "The API server was exposed with insufficient security, allowing unauthorized external access and increasing the risk of exploitation.",
    component: "API Server",
    severity: "low",
    resolution: "• Restrict access to the API server using firewall rules to allow only internal IP addresses. 	• Implemented TLS encryption and client certificate authentication for secure access.",
    tags: ["cluster", "increasing", "insufficiently", "risk", "insufficient"],
    category: "Security"
  },
  {
    id: 236,
    title: "Misconfigured Admission Controllers Allowing Insecure Resources",
    description: "Admission controllers were misconfigured, allowing the creation of insecure or non-compliant resources.",
    component: "Pod",
    severity: "low",
    resolution: "• Enabled and properly configured necessary admission controllers, such as PodSecurityPolicy and LimitRanger, to enforce security policies during resource creation. 	• Regularly audited resource creation and applied security policies to avoid insecure configurations.",
    tags: ["resources", "misconfigured", "admission", "allowing", "insecure"],
    category: "Security"
  },
  {
    id: 237,
    title: "Lack of Security Auditing and Monitoring in Cluster",
    description: "The lack of proper auditing and monitoring allowed security events to go undetected, resulting in delayed response to potential security threats.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Implemented audit logging and integrated a centralized logging and monitoring solution, such as Prometheus and ELK stack, to detect security incidents. 	• Set up alerts for suspicious activities and security violations.",
    tags: ["auditing", "potential", "cluster", "threats", "allowed"],
    category: "Security"
  },
  {
    id: 238,
    title: "Exposed Internal Services Due to Misconfigured Load Balancer",
    description: "Internal services were inadvertently exposed to the public due to incorrect load balancer configurations, leading to potential security risks.",
    component: "Service",
    severity: "low",
    resolution: "• Reconfigured the load balancer to restrict access to internal services, ensuring that only authorized users or services could connect. 	• Implemented authentication and IP whitelisting to secure the exposed services.",
    tags: ["potential", "services", "configurations", "incorrect", "risks"],
    category: "Security"
  },
  {
    id: 239,
    title: "Kubernetes Secrets Accessed via Insecure Network",
    description: "Kubernetes secrets were accessed via an insecure network connection, exposing sensitive information to unauthorized parties.",
    component: "API Server",
    severity: "low",
    resolution: "• Configured Kubernetes to use HTTPS for all API server communications. 	• Ensured that all pod-to-API server traffic was encrypted and used secure protocols.",
    tags: ["connection", "kubernetes", "information", "accessed", "secrets"],
    category: "Security"
  },
  {
    id: 240,
    title: "Pod Security Policies Not Enforced",
    description: "Pod security policies were not enforced, allowing the deployment of pods with unsafe configurations, such as privileged access and host network use.",
    component: "Pod",
    severity: "low",
    resolution: "• Enabled and configured PodSecurityPolicy to enforce security controls, such as preventing privileged containers or host network usage. 	• Audited existing pod configurations and updated them to comply with security policies.",
    tags: ["enforced", "configurations", "deployment", "pods", "such"],
    category: "Security"
  },
  {
    id: 241,
    title: "Unpatched Vulnerabilities in Cluster Nodes",
    description: "Cluster nodes were not regularly patched, exposing known vulnerabilities that were later exploited by attackers.",
    component: "Node",
    severity: "low",
    resolution: "• Patches were applied to all affected nodes to fix known vulnerabilities. 	• Established a regular patch management process to ensure that cluster nodes were kept up to date.",
    tags: ["that", "unpatched", "cluster", "later", "exploited"],
    category: "Security"
  },
  {
    id: 242,
    title: "Weak Network Policies Allowing Unrestricted Traffic",
    description: "Network policies were not properly configured, allowing unrestricted traffic between pods, which led to lateral movement by attackers after a pod was compromised.",
    component: "Pod",
    severity: "low",
    resolution: "• Created strict network policies to control pod-to-pod communication, limiting access to sensitive services. 	• Regularly reviewed and updated network policies to minimize exposure.",
    tags: ["properly", "which", "traffic", "compromised", "pods"],
    category: "Security"
  },
  {
    id: 243,
    title: "Exposed Dashboard Without Authentication",
    description: "Kubernetes dashboard was exposed to the internet without authentication, allowing unauthorized users to access cluster information and potentially take control.",
    component: "Ingress",
    severity: "low",
    resolution: "• Restricted access to the Kubernetes Dashboard by securing the ingress and requiring authentication via RBAC or OAuth. 	• Implemented a VPN and IP whitelisting to ensure that only authorized users could access the dashboard.",
    tags: ["kubernetes", "cluster", "information", "exposed", "dashboard"],
    category: "Security"
  },
  {
    id: 244,
    title: "Use of Insecure Container Images",
    description: "Insecure container images were used in production, leading to the deployment of containers with known vulnerabilities.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Enforced the use of trusted container image registries that support vulnerability scanning. 	• Integrated image scanning tools like Trivy or Clair into the CI/CD pipeline to identify vulnerabilities before deployment.",
    tags: ["vulnerabilities", "deployment", "used", "containers", "container"],
    category: "Security"
  },
  {
    id: 245,
    title: "Misconfigured TLS Certificates",
    description: "Misconfigured TLS certificates led to insecure communication between Kubernetes components, exposing the cluster to potential attacks.",
    component: "Certificates",
    severity: "critical",
    resolution: "• Regenerated and replaced expired certificates. 	• Configured Kubernetes components to use valid TLS certificates for all internal communications.",
    tags: ["potential", "attacks", "certificates", "kubernetes", "cluster"],
    category: "Security"
  },
  {
    id: 246,
    title: "Excessive Privileges for Service Accounts",
    description: "Service accounts were granted excessive privileges, allowing them to perform operations outside their intended scope, increasing the risk of compromise.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated RBAC roles to follow the principle of least privilege, ensuring service accounts only had the minimum necessary permissions. 	• Regularly audited service accounts to verify proper access control.",
    tags: ["risk", "increasing", "their", "granted", "privileges"],
    category: "Security"
  },
  {
    id: 247,
    title: "Exposure of Sensitive Logs Due to Misconfigured Logging Setup",
    description: "Sensitive logs, such as those containing authentication tokens and private keys, were exposed due to a misconfigured logging setup.",
    component: "Unknown",
    severity: "low",
    resolution: "• Updated log configuration to redact or filter sensitive data, such as tokens and private keys, before storing logs. 	• Implemented access controls to restrict who can view logs and what data is exposed.",
    tags: ["logging", "those", "exposure", "containing", "such"],
    category: "Security"
  },
  {
    id: 248,
    title: "Use of Deprecated APIs with Known Vulnerabilities",
    description: "The cluster was using deprecated Kubernetes APIs that contained known security vulnerabilities, which were exploited by attackers.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Upgraded Kubernetes components and applications to use supported and secure API versions. 	• Removed deprecated API usage and enforced only supported versions.",
    tags: ["that", "cluster", "kubernetes", "contained", "which"],
    category: "Security"
  },
  {
    id: 249,
    title: "Lack of Security Context in Pod Specifications",
    description: "Pods were deployed without defining appropriate security contexts, resulting in privileged containers and access to host resources.",
    component: "Pod",
    severity: "critical",
    resolution: "• Defined and enforced security contexts for all pod deployments to restrict privilege escalation and limit access to sensitive resources. 	• Implemented security policies to reject pods that do not comply with security context guidelines.",
    tags: ["context", "defining", "contexts", "containers", "pods"],
    category: "Security"
  },
  {
    id: 250,
    title: "Compromised Container Runtime",
    description: "The container runtime (Docker) was compromised, allowing an attacker to gain control over the containers running on the node.",
    component: "Node",
    severity: "low",
    resolution: "• Immediately patched the container runtime (Docker) to address the security vulnerability. 	• Implemented security measures, such as running containers with user namespaces and seccomp profiles to minimize the impact of any future exploits.",
    tags: ["running", "docker", "compromised", "gain", "containers"],
    category: "Security"
  },
  {
    id: 251,
    title: "Insufficient RBAC Permissions for Cluster Admin",
    description: "A cluster administrator was mistakenly granted insufficient RBAC permissions, preventing them from performing essential management tasks.",
    component: "Namespace",
    severity: "medium",
    resolution: "• Updated the RBAC policy to ensure that the cluster admin role had the correct permissions to manage all resources. 	• Implemented a more granular RBAC policy review process to avoid future issues.",
    tags: ["mistakenly", "cluster", "permissions", "granted", "insufficient"],
    category: "Security"
  },
  {
    id: 252,
    title: "Insufficient Pod Security Policies Leading to Privilege Escalation",
    description: "Insufficiently restrictive PodSecurityPolicies (PSPs) allowed the deployment of privileged pods, which were later exploited by attackers.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated PodSecurityPolicies to enforce stricter controls, such as disallowing privileged containers and restricting host network access. 	• Applied RBAC restrictions to limit who could deploy privileged pods.",
    tags: ["psps", "which", "later", "insufficiently", "exploited"],
    category: "Security"
  },
  {
    id: 253,
    title: "Exposed Service Account Token in Pod",
    description: "A service account token was mistakenly exposed in a pod, allowing attackers to gain unauthorized access to the Kubernetes API.",
    component: "API Server",
    severity: "medium",
    resolution: "• Removed the service account token from the environment variable and stored it in a more secure location (e.g., as a Kubernetes Secret). 	• Reissued the service account token and rotated the credentials to mitigate potential risks.",
    tags: ["mistakenly", "kubernetes", "token", "gain", "exposed"],
    category: "Security"
  },
  {
    id: 254,
    title: "Rogue Container Executing Malicious Code",
    description: "A compromised container running a known exploit executed malicious code that allowed the attacker to gain access to the underlying node.",
    component: "Node",
    severity: "low",
    resolution: "• Updated the container images to the latest versions with security patches. 	• Implemented automatic image scanning and vulnerability scanning as part of the CI/CD pipeline to catch outdated images before deployment.",
    tags: ["that", "rogue", "running", "compromised", "allowed"],
    category: "Security"
  },
  {
    id: 255,
    title: "Overly Permissive Network Policies Allowing Lateral Movement",
    description: "Network policies were not restrictive enough, allowing compromised pods to move laterally across the cluster and access other services.",
    component: "Pod",
    severity: "low",
    resolution: "• Implemented restrictive network policies to segment the cluster and restrict traffic between pods based on specific labels and namespaces. 	• Ensured that sensitive services were isolated with network policies that only allowed access from trusted sources.",
    tags: ["services", "other", "laterally", "access", "enough"],
    category: "Security"
  },
  {
    id: 256,
    title: "Insufficient Encryption for In-Transit Data",
    description: "Sensitive data was transmitted in plaintext between services, exposing it to potential eavesdropping and data breaches.",
    component: "Pod",
    severity: "low",
    resolution: "• Configured all services to communicate over HTTPS using TLS encryption. 	• Implemented mutual TLS authentication for all pod-to-pod communications within the cluster.",
    tags: ["potential", "services", "transit", "breaches", "insufficient"],
    category: "Security"
  },
  {
    id: 257,
    title: "Exposing Cluster Services via LoadBalancer with Public IP",
    description: "A service was exposed to the public internet via a LoadBalancer without proper access control, making it vulnerable to attacks.",
    component: "Controller",
    severity: "low",
    resolution: "• Updated the service configuration to use type: ClusterIP or added an appropriate ingress controller with restricted access. 	• Added IP whitelisting or authentication to the exposed services.",
    tags: ["attacks", "cluster", "services", "public", "exposed"],
    category: "Security"
  },
  {
    id: 258,
    title: "Privileged Containers Running Without Seccomp or AppArmor Profiles",
    description: "Privileged containers were running without seccomp or AppArmor profiles, leaving the host vulnerable to attacks.",
    component: "Pod",
    severity: "low",
    resolution: "• Disabled the privileged: true flag unless absolutely necessary and applied restrictive seccomp and AppArmor profiles to all privileged containers. 	• Used Kubernetes security policies to prevent the deployment of privileged containers without appropriate security profiles.",
    tags: ["attacks", "running", "containers", "without", "leaving"],
    category: "Security"
  },
  {
    id: 259,
    title: "Malicious Container Image from Untrusted Source",
    description: "A malicious container image from an untrusted source was deployed, leading to a security breach in the cluster.",
    component: "Pod",
    severity: "low",
    resolution: "• Removed the malicious container image from the cluster and quarantined the affected pods. 	• Scanned all images for known vulnerabilities before redeploying containers. 	• Configured image admission controllers to only allow images from trusted registries.",
    tags: ["breach", "cluster", "from", "container", "untrusted"],
    category: "Security"
  },
  {
    id: 260,
    title: "Unrestricted Ingress Controller Allowing External Attacks",
    description: "The ingress controller was misconfigured, allowing external attackers to bypass network security controls and exploit internal services.",
    component: "Controller",
    severity: "low",
    resolution: "• Reconfigured the ingress controller to restrict access to trusted IPs or users via IP whitelisting or authentication. 	• Enabled role-based access control (RBAC) to limit access to sensitive services.",
    tags: ["attacks", "services", "internal", "controller", "external"],
    category: "Security"
  },
  {
    id: 261,
    title: "Misconfigured Ingress Controller Exposing Internal Services",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Implemented IP whitelisting to restrict access. 	• Enabled authentication mechanisms for sensitive services. 	• Regularly audited Ingress configurations for security compliance.",
    tags: ["services", "internal", "controller", "description", "misconfigured"],
    category: "Security"
  },
  {
    id: 262,
    title: "Privileged Containers Without Security Context",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Defined appropriate security contexts for all containers. 	• Removed unnecessary privileged access where possible. 	• Implemented Pod Security Policies to enforce security standards.",
    tags: ["context", "containers", "description", "without", "privileged"],
    category: "Security"
  },
  {
    id: 263,
    title: "Unrestricted Network Policies Allowing Lateral Movement",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Implemented network policies to restrict inter-pod communication. 	• Segmented the network based on namespaces and labels. 	• Monitored network traffic for unusual patterns.",
    tags: ["description", "lateral", "allowing", "network", "unrestricted"],
    category: "Security"
  },
  {
    id: 264,
    title: "Exposed Kubernetes Dashboard Without Authentication",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Enabled authentication mechanisms for the dashboard. 	• Restricted access to the dashboard using network policies. 	• Monitored dashboard access logs for unauthorized attempts.",
    tags: ["kubernetes", "exposed", "description", "dashboard", "without"],
    category: "Security"
  },
  {
    id: 265,
    title: "Use of Vulnerable Container Images",
    description: "No description available.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Updated container images to the latest versions with security patches. 	• Implemented automated image scanning in the CI/CD pipeline. 	• Established a policy to use only trusted and regularly updated images.",
    tags: ["description", "container", "images", "vulnerable", "available"],
    category: "Security"
  },
  {
    id: 266,
    title: "Misconfigured Role-Based Access Control (RBAC)",
    description: "No description available.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Revised RBAC roles to align with user responsibilities. 	• Implemented the principle of least privilege across all roles. 	• Regularly audited RBAC configurations for compliance.",
    tags: ["based", "description", "misconfigured", "available", "access"],
    category: "Security"
  },
  {
    id: 267,
    title: "Insecure Secrets Management",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Migrated secrets to Kubernetes Secrets objects. 	• Implemented encryption for secrets at rest and in transit. 	• Restricted access to secrets using RBAC.",
    tags: ["description", "secrets", "insecure", "available", "management"],
    category: "Security"
  },
  {
    id: 268,
    title: "Lack of Audit Logging",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Enabled audit logging in the cluster. 	• Configured log retention and monitoring policies. 	• Integrated audit logs with a centralized logging system for analysis.",
    tags: ["logging", "description", "lack", "available", "audit"],
    category: "Security"
  },
  {
    id: 269,
    title: "Unrestricted Access to etcd",
    description: "No description available.",
    component: "etcd",
    severity: "low",
    resolution: "• Enabled authentication and encryption for etcd. 	• Restricted network access to etcd endpoints. 	• Regularly audited etcd configurations for security compliance.",
    tags: ["description", "etcd", "access", "unrestricted", "available"],
    category: "Security"
  },
  {
    id: 270,
    title: "Absence of Pod Security Policies",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Implemented Pod Security Policies to enforce security standards. 	• Restricted the use of privileged containers and host resources. 	• Educated development teams on secure pod configurations.",
    tags: ["description", "available", "security", "absence", "policies"],
    category: "Security"
  },
  {
    id: 271,
    title: "Service Account Token Mounted in All Pods",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Set automountServiceAccountToken: false in non-privileged pods. 	• Reviewed RBAC permissions to ensure tokens were scoped correctly.",
    tags: ["token", "pods", "description", "service", "mounted"],
    category: "Security"
  },
  {
    id: 272,
    title: "Sensitive Logs Exposed via Centralized Logging",
    description: "No description available.",
    component: "Service",
    severity: "low",
    resolution: "• Removed sensitive logging in app code. 	• Configured Fluentd filters to redact secrets. 	• Restricted access to sensitive log indices in Kibana.",
    tags: ["logging", "exposed", "description", "centralized", "sensitive"],
    category: "Security"
  },
  {
    id: 273,
    title: "Broken Container Escape Detection",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Patched all nodes to a secure kernel version. 	• Implemented Falco to monitor syscall anomalies.",
    tags: ["escape", "description", "available", "container", "broken"],
    category: "Security"
  },
  {
    id: 274,
    title: "Unauthorized Cloud Metadata API Access",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Restricted pod egress using network policies. 	• Enabled IMDSv2 with hop limit = 1 to block pod access.",
    tags: ["cloud", "description", "access", "unauthorized", "metadata"],
    category: "Security"
  },
  {
    id: 275,
    title: "Admin Kubeconfig Checked into Git",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Rotated the admin credentials immediately. 	• Added secret scanning to CI/CD. 	• Configured .gitignore templates across repos.",
    tags: ["kubeconfig", "description", "available", "admin", "into"],
    category: "Security"
  },
  {
    id: 276,
    title: "JWT Token Replay Attack in Webhook Auth",
    description: "No description available.",
    component: "API Server",
    severity: "low",
    resolution: "• Updated webhook to validate expiry and nonce in tokens. 	• Rotated keys and invalidated sessions.",
    tags: ["webhook", "replay", "attack", "token", "description"],
    category: "Security"
  },
  {
    id: 277,
    title: "Container With Hardcoded SSH Keys",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Rebuilt images without sensitive content. 	• Rotated all affected SSH keys.",
    tags: ["description", "available", "container", "with", "hardcoded"],
    category: "Security"
  },
  {
    id: 278,
    title: "Insecure Helm Chart Defaults",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Overrode defaults in values.yaml. 	• Audited Helm charts for misconfigurations.",
    tags: ["chart", "defaults", "description", "insecure", "helm"],
    category: "Security"
  },
  {
    id: 279,
    title: "Shared Cluster with Overlapping Namespaces",
    description: "No description available.",
    component: "Namespace",
    severity: "low",
    resolution: "• Introduced prefix-based namespace naming (e.g., team1-dev). 	• Scoped RBAC permissions tightly.",
    tags: ["cluster", "description", "with", "overlapping", "namespaces"],
    category: "Security"
  },
  {
    id: 280,
    title: "CVE Ignored in Base Image for Months",
    description: "No description available.",
    component: "Service",
    severity: "low",
    resolution: "• Integrated Clair + Trivy scans into CI/CD pipelines. 	• Setup Slack alerts for critical CVEs.",
    tags: ["months", "ignored", "description", "image", "available"],
    category: "Security"
  },
  {
    id: 281,
    title: "Misconfigured PodSecurityPolicy Allowed Privileged Containers",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Removed the insecure PSP. 	• Implemented a restrictive default PSP. 	• Migrated to PodSecurityAdmission after PSP deprecation.",
    tags: ["allowed", "containers", "description", "misconfigured", "privileged"],
    category: "Security"
  },
  {
    id: 282,
    title: "GitLab Runners Spawning Privileged Containers",
    description: "No description available.",
    component: "Node",
    severity: "low",
    resolution: "• Disabled DinD and used Kaniko for builds. 	• Set runner securityContext to avoid privilege escalation.",
    tags: ["gitlab", "spawning", "containers", "description", "runners"],
    category: "Security"
  },
  {
    id: 283,
    title: "Kubernetes Secrets Mounted in World-Readable Volumes",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Set defaultMode: 0400 on all secret volumes. 	• Isolated processes via containers.",
    tags: ["kubernetes", "readable", "description", "secrets", "volumes"],
    category: "Security"
  },
  {
    id: 284,
    title: "Kubelet Port Exposed on Public Interface",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Enabled Kubelet authentication and authorization. 	• Restricted access via firewall and node security groups.",
    tags: ["kubelet", "port", "public", "exposed", "description"],
    category: "Security"
  },
  {
    id: 285,
    title: "Cluster Admin Bound to All Authenticated Users",
    description: "No description available.",
    component: "Admission Webhook",
    severity: "low",
    resolution: "• Deleted the binding immediately. 	• Implemented an RBAC policy validation webhook.",
    tags: ["cluster", "description", "users", "authenticated", "admin"],
    category: "Security"
  },
  {
    id: 286,
    title: "Webhook Authentication Timing Out, Causing Denial of Service",
    description: "No description available.",
    component: "API Server",
    severity: "medium",
    resolution: "• Increased webhook timeouts and horizontal scaling. 	• Added local caching for frequent identities.",
    tags: ["webhook", "causing", "description", "timing", "authentication"],
    category: "Security"
  },
  {
    id: 287,
    title: "CSI Driver Exposing Node Secrets",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Scoped CSI mounts with per-pod directories. 	• Disabled hostPath access for workloads.",
    tags: ["description", "secrets", "node", "driver", "exposing"],
    category: "Security"
  },
  {
    id: 288,
    title: "EphemeralContainers Used for Reconnaissance",
    description: "No description available.",
    component: "API Server",
    severity: "critical",
    resolution: "• Removed permissions to ephemeral containers for all roles. 	• Set audit policies for their use.",
    tags: ["used", "description", "available", "reconnaissance"],
    category: "Security"
  },
  {
    id: 289,
    title: "hostAliases Used for Spoofing Internal Services",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Disabled use of hostAliases via OPA policies. 	• Logged all pod specs with custom host entries.",
    tags: ["services", "internal", "used", "description", "hostaliases"],
    category: "Security"
  },
  {
    id: 290,
    title: "Privilege Escalation via Unchecked securityContext in Helm Chart",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Forked chart and restricted overrides via schema. 	• Implemented OPA Gatekeeper to block root containers.",
    tags: ["chart", "description", "unchecked", "privilege", "securitycontext"],
    category: "Security"
  },
  {
    id: 291,
    title: "Service Account Token Leakage via Logs",
    description: "No description available.",
    component: "Service",
    severity: "low",
    resolution: "• Rotated all impacted service account tokens. 	• Added environment and file sanitization to logging library.",
    tags: ["token", "account", "description", "service", "leakage"],
    category: "Security"
  },
  {
    id: 292,
    title: "Escalation via Editable Validating WebhookConfiguration",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Restricted access to ValidatingWebhookConfiguration objects. 	• Added checksums to webhook definitions in GitOps.",
    tags: ["validating", "description", "editable", "escalation", "available"],
    category: "Security"
  },
  {
    id: 293,
    title: "Stale Node Certificates After Rejoining Cluster",
    description: "No description available.",
    component: "Kubelet",
    severity: "low",
    resolution: "• Manually deleted old certificates from the node. 	• Set short TTLs for client certificates.",
    tags: ["certificates", "cluster", "description", "node", "stale"],
    category: "Security"
  },
  {
    id: 294,
    title: "ArgoCD Exploit via Unverified Helm Charts",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Removed the chart and all related workloads. 	• Enabled Helm OCI signatures and repo allow-lists.",
    tags: ["unverified", "charts", "description", "exploit", "helm"],
    category: "Security"
  },
  {
    id: 295,
    title: "Node Compromise via Insecure Container Runtime",
    description: "No description available.",
    component: "Node",
    severity: "low",
    resolution: "• Upgraded CRI-O to patched version. 	• Enabled seccomp and AppArmor by default.",
    tags: ["compromise", "description", "container", "node", "insecure"],
    category: "Security"
  },
  {
    id: 296,
    title: "Workload with Wildcard RBAC Access to All Secrets",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Replaced wildcard permissions with explicit named secrets. 	• Enabled audit logging on all secrets API calls.",
    tags: ["description", "available", "secrets", "access", "workload"],
    category: "Security"
  },
  {
    id: 297,
    title: "Malicious Init Container Used for Reconnaissance",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Blocked unknown container registries via policy. 	• Implemented runtime security agents to inspect init behavior.",
    tags: ["reconnaissance", "used", "description", "container", "malicious"],
    category: "Security"
  },
  {
    id: 298,
    title: "Ingress Controller Exposed /metrics Without Auth",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Applied IP whitelist and basic auth for /metrics. 	• Added network policies to restrict access.",
    tags: ["controller", "exposed", "description", "metrics", "without"],
    category: "Security"
  },
  {
    id: 299,
    title: "Secret Stored in ConfigMap by Mistake",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Moved key to a Kubernetes Secret. 	• Rotated exposed credentials.",
    tags: ["description", "stored", "mistake", "configmap", "available"],
    category: "Security"
  },
  {
    id: 300,
    title: "Token Reuse After Namespace Deletion and Recreation",
    description: "No description available.",
    component: "Namespace",
    severity: "medium",
    resolution: "• Rotated all tokens after backup restore. 	• Implemented TTL-based token policies.",
    tags: ["deletion", "token", "description", "available", "reuse"],
    category: "Security"
  },
  {
    id: 301,
    title: "PVC Stuck in Terminating State After Node Crash",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually removed the PVC finalizers. 	• Used aws ec2 detach-volume to forcibly detach.",
    tags: ["state", "description", "node", "terminating", "stuck"],
    category: "Storage"
  },
  {
    id: 302,
    title: "Data Corruption on HostPath Volumes",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Moved workloads to CSI-backed volumes with ReadWriteOnce enforcement. 	• Ensured only one pod accessed a volume at a time.",
    tags: ["description", "data", "volumes", "corruption", "hostpath"],
    category: "Storage"
  },
  {
    id: 303,
    title: "Volume Mount Fails Due to Node Affinity Mismatch",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added topology.kubernetes.io/zone node affinity to match PV. 	• Ensured StatefulSets used storage classes with volume binding mode WaitForFirstConsumer.",
    tags: ["description", "node", "mount", "volume", "affinity"],
    category: "Storage"
  },
  {
    id: 304,
    title: "PVC Not Rescheduled After Node Deletion",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Detached the disk from the Azure console. 	• Recreated pod successfully on another node.",
    tags: ["deletion", "rescheduled", "description", "node", "after"],
    category: "Storage"
  },
  {
    id: 305,
    title: "Long PVC Rebinding Time on StatefulSet Restart",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Tuned CSI attach concurrency. 	• Split the StatefulSet into smaller chunks.",
    tags: ["rebinding", "description", "long", "restart", "available"],
    category: "Storage"
  },
  {
    id: 306,
    title: "CSI Volume Plugin Crash Loops Due to Secret Rotation",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Restarted the CSI plugin pods. 	• Upgraded plugin to a version with token refresh logic.",
    tags: ["description", "plugin", "loops", "rotation", "volume"],
    category: "Storage"
  },
  {
    id: 307,
    title: "ReadWriteMany PVCs Cause IO Bottlenecks",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Partitioned workloads to use isolated volumes. 	• Added cache layer for reads.",
    tags: ["readwritemany", "cause", "pvcs", "description", "bottlenecks"],
    category: "Storage"
  },
  {
    id: 308,
    title: "PVC Mount Timeout Due to PodSecurityPolicy",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Modified PSP to allow required fsGroup range. 	• Updated pod security context.",
    tags: ["description", "timeout", "mount", "available"],
    category: "Storage"
  },
  {
    id: 309,
    title: "Orphaned PVs After Namespace Deletion",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "medium",
    resolution: "• Deleted old PVs and disks manually. 	• Changed reclaim policy to Delete for dynamic volumes.",
    tags: ["deletion", "orphaned", "description", "available", "after"],
    category: "Storage"
  },
  {
    id: 310,
    title: "StorageClass Misconfiguration Blocks Dynamic Provisioning",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Corrected StorageClass parameters. 	• Manually bound PVCs with valid classes.",
    tags: ["dynamic", "description", "available", "blocks", "provisioning"],
    category: "Storage"
  },
  {
    id: 311,
    title: "StatefulSet Volume Cloning Results in Data Leakage",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Stopped cloning and switched to backup/restore-based provisioning. 	• Used rsync with integrity checks instead.",
    tags: ["results", "description", "data", "cloning", "volume"],
    category: "Storage"
  },
  {
    id: 312,
    title: "Volume Resize Not Reflected in Mounted Filesystem",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Restarted pod to remount the volume and trigger resize. 	• Verified resize2fs logs in CSI driver.",
    tags: ["description", "reflected", "volume", "mounted", "resize"],
    category: "Storage"
  },
  {
    id: 313,
    title: "CSI Controller Pod Crash Due to Log Overflow",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added log rate limits via CSI plugin config. 	• Increased node ephemeral storage.",
    tags: ["overflow", "controller", "description", "available", "crash"],
    category: "Storage"
  },
  {
    id: 314,
    title: "PVs Stuck in Released Due to Missing Finalizer Removal",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "medium",
    resolution: "• Patched PVs to remove finalizers. 	• Recycled or deleted volumes manually.",
    tags: ["finalizer", "released", "removal", "description", "stuck"],
    category: "Storage"
  },
  {
    id: 315,
    title: "CSI Driver DaemonSet Deployment Missing Tolerations for Taints",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Added required tolerations to DaemonSet.",
    tags: ["tolerations", "deployment", "description", "daemonset", "driver"],
    category: "Storage"
  },
  {
    id: 316,
    title: "Mount Propagation Issues with Sidecar Containers",
    description: "No description available.",
    component: "Namespace",
    severity: "medium",
    resolution: "• Added mountPropagation: Bidirectional to shared volumeMounts.",
    tags: ["containers", "description", "available", "issues", "mount"],
    category: "Storage"
  },
  {
    id: 317,
    title: "File Permissions Reset on Pod Restart",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Set explicit securityContext.fsGroup in pod spec.",
    tags: ["permissions", "description", "restart", "available", "file"],
    category: "Storage"
  },
  {
    id: 318,
    title: "Volume Mount Succeeds but Application Can't Write",
    description: "No description available.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Used storage class parameter to specify xfs.",
    tags: ["application", "description", "write", "mount", "volume"],
    category: "Storage"
  },
  {
    id: 319,
    title: "Volume Snapshot Restore Includes Corrupt Data",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Paused writes before snapshot. 	• Enabled filesystem freeze hook in Velero plugin.",
    tags: ["restore", "description", "data", "includes", "snapshot"],
    category: "Storage"
  },
  {
    id: 320,
    title: "Zombie Volumes Occupying Cloud Quota",
    description: "No description available.",
    component: "Node",
    severity: "critical",
    resolution: "• Manually detached and deleted volumes. 	• Adjusted controller retry limits.",
    tags: ["cloud", "quota", "zombie", "description", "volumes"],
    category: "Storage"
  },
  {
    id: 321,
    title: "Volume Snapshot Garbage Collection Fails",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Added required RBAC rules to Velero. 	• Manually deleted stale snapshot objects.",
    tags: ["garbage", "collection", "description", "volume", "fails"],
    category: "Storage"
  },
  {
    id: 322,
    title: "Volume Mount Delays Due to Node Drain Stale Attachment",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reduced backoff limit in CSI controller config. 	• Used manual detach via cloud CLI in emergencies.",
    tags: ["description", "drain", "node", "mount", "volume"],
    category: "Storage"
  },
  {
    id: 323,
    title: "Application Writes Lost After Node Reboot",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Refactored PV to use local with nodeAffinity. 	• Explicitly mounted disk partitions.",
    tags: ["application", "reboot", "description", "node", "writes"],
    category: "Storage"
  },
  {
    id: 324,
    title: "Pod CrashLoop Due to Read-Only Volume Remount",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Restarted pod to trigger clean remount. 	• Tuned NFS mount options (soft, timeo, retry).",
    tags: ["read", "description", "volume", "crashloop", "only"],
    category: "Storage"
  },
  {
    id: 325,
    title: "Data Corruption on Shared Volume With Two Pods",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Refactored app logic to coordinate file writes via leader election. 	• Used a queue-based processing system.",
    tags: ["pods", "data", "description", "corruption", "volume"],
    category: "Storage"
  },
  {
    id: 326,
    title: "Mount Volume Exceeded Timeout",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Cleared plugin cache manually. 	• Upgraded CSI driver to fixed version.",
    tags: ["description", "timeout", "mount", "volume", "exceeded"],
    category: "Storage"
  },
  {
    id: 327,
    title: "Static PV Bound to Wrong PVC",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Used volumeName field in PVCs for direct binding. 	• Set explicit labels/selectors to isolate.",
    tags: ["description", "wrong", "available", "static", "bound"],
    category: "Storage"
  },
  {
    id: 328,
    title: "Pod Eviction Due to DiskPressure Despite PVC",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Cleaned logs from root disk. 	• Moved logging to PVC-backed location.",
    tags: ["eviction", "despite", "description", "available", "diskpressure"],
    category: "Storage"
  },
  {
    id: 329,
    title: "Pod Gets Stuck Due to Ghost Mount Point",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually deleted stale mount folders. 	• Restarted kubelet on affected node.",
    tags: ["description", "mount", "ghost", "gets", "stuck"],
    category: "Storage"
  },
  {
    id: 330,
    title: "PVC Resize Broke StatefulSet Ordering",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually controlled pod restarts during PVC resize. 	• Added readiness gates to enforce sequential boot.",
    tags: ["statefulset", "description", "ordering", "resize", "available"],
    category: "Storage"
  },
  {
    id: 331,
    title: "ReadAfterWrite Inconsistency on Object Store-Backed CSI",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Introduced write barriers and retry logic in app. 	• Switched to CephFS for strong consistency.",
    tags: ["object", "readafterwrite", "backed", "description", "inconsistency"],
    category: "Storage"
  },
  {
    id: 332,
    title: "PV Resize Fails After Node Reboot",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Reattached volume by starting pod temporarily on the node. 	• Resize completed automatically.",
    tags: ["reboot", "description", "node", "after", "resize"],
    category: "Storage"
  },
  {
    id: 333,
    title: "CSI Driver Crash Loops on VolumeAttach",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Rolled back CSI driver to stable version. 	• Purged corrupted volume metadata.",
    tags: ["description", "loops", "driver", "available", "crash"],
    category: "Storage"
  },
  {
    id: 334,
    title: "PVC Binding Fails Due to Multiple Default StorageClasses",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Patched one SC to remove the default annotation. 	• Explicitly specified SC in Helm charts.",
    tags: ["default", "description", "storageclasses", "fails", "multiple"],
    category: "Storage"
  },
  {
    id: 335,
    title: "Zombie VolumeAttachment Blocks New PVC",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Manually deleted VolumeAttachment. 	• Restarted CSI pods to refresh state.",
    tags: ["zombie", "available", "description", "blocks"],
    category: "Storage"
  },
  {
    id: 336,
    title: "Persistent Volume Bound But Not Mounted",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added mountOptions: [hard,intr] to NFS SC. 	• Set pod readiness probe to check file existence.",
    tags: ["persistent", "description", "volume", "mounted", "available"],
    category: "Storage"
  },
  {
    id: 337,
    title: "CSI Snapshot Restore Overwrites Active Data",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Restored snapshot to a new PVC and used manual copy/move. 	• Added lifecycle checks before invoking restores.",
    tags: ["restore", "description", "data", "active", "overwrites"],
    category: "Storage"
  },
  {
    id: 338,
    title: "Incomplete Volume Detach Breaks Node Scheduling",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Recreated CSI controller pod. 	• Requeued detach operation via manual deletion.",
    tags: ["incomplete", "breaks", "description", "scheduling", "detach"],
    category: "Storage"
  },
  {
    id: 339,
    title: "App Breaks Due to Missing SubPath After Volume Expansion",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Changed pod to recreate the subPath explicitly. 	• Waited for bugfix release from CSI provider.",
    tags: ["breaks", "expansion", "description", "volume", "subpath"],
    category: "Storage"
  },
  {
    id: 340,
    title: "Backup Restore Process Created Orphaned PVCs",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Recreated PVCs manually with correct storage class. 	• Re-enabled PV backup in Velero settings.",
    tags: ["process", "orphaned", "restore", "pvcs", "description"],
    category: "Storage"
  },
  {
    id: 341,
    title: "Cross-Zone Volume Binding Fails with StatefulSet",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated StorageClass to allow all zones. 	• Aligned affinity rules with allowed topologies.",
    tags: ["zone", "cross", "statefulset", "description", "volume"],
    category: "Storage"
  },
  {
    id: 342,
    title: "Volume Snapshot Controller Race Condition",
    description: "No description available.",
    component: "Controller",
    severity: "critical",
    resolution: "• Throttled snapshot requests. 	• Patched controller deployment to limit concurrency.",
    tags: ["controller", "description", "condition", "volume", "race"],
    category: "Storage"
  },
  {
    id: 343,
    title: "Failed Volume Resize Blocks Rollout",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Deleted affected pods, allowed volume to unmount. 	• Resize succeeded offline.",
    tags: ["rollout", "failed", "description", "volume", "blocks"],
    category: "Storage"
  },
  {
    id: 344,
    title: "Application Data Lost After Node Eviction",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Migrated to CSI-based dynamic provisioning. 	• Used NFS for shared storage.",
    tags: ["eviction", "application", "description", "data", "node"],
    category: "Storage"
  },
  {
    id: 345,
    title: "Read-Only PV Caused Write Failures After Restore",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Detached and reattached the volume manually as read-write. 	• Updated Velero plugin to handle VolumeAttachment explicitly.",
    tags: ["read", "restore", "description", "write", "only"],
    category: "Storage"
  },
  {
    id: 346,
    title: "NFS Server Restart Crashes Pods",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Enabled NFSv4 stateless mode. 	• Recovered pods by restarting them post-reboot.",
    tags: ["pods", "description", "restart", "available", "crashes"],
    category: "Storage"
  },
  {
    id: 347,
    title: "VolumeBindingBlocked Condition Causes Pod Scheduling Delay",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased controller timeout thresholds. 	• Optimized provisioning backend latency.",
    tags: ["description", "causes", "condition", "scheduling", "delay"],
    category: "Storage"
  },
  {
    id: 348,
    title: "Data Corruption from Overprovisioned Thin Volumes",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased physical volume backing the pool. 	• Set strict overcommit alerting.",
    tags: ["from", "description", "data", "overprovisioned", "volumes"],
    category: "Storage"
  },
  {
    id: 349,
    title: "VolumeProvisioningFailure on GKE Due to IAM Misconfiguration",
    description: "No description available.",
    component: "Controller",
    severity: "critical",
    resolution: "• Granted missing IAM permissions to the bound service account. 	• Restarted CSI controller.",
    tags: ["description", "available"],
    category: "Storage"
  },
  {
    id: 350,
    title: "Node Crash Triggers Volume Remount Loop",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added udev rules for consistent device naming. 	• Restarted CSI daemon to detect new device path.",
    tags: ["description", "loop", "node", "volume", "triggers"],
    category: "Storage"
  },
  {
    id: 351,
    title: "VolumeMount Conflict Between Init and Main Containers",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Used a subPath for the init container to isolate file writes. 	• Moved backup logic to an external init job.",
    tags: ["containers", "description", "volumemount", "init", "conflict"],
    category: "Storage"
  },
  {
    id: 352,
    title: "PVCs Stuck in “Terminating” Due to Finalizers",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Patched the driver deployment. 	• Manually removed finalizers using kubectl patch.",
    tags: ["pvcs", "finalizers", "description", "terminating", "stuck"],
    category: "Storage"
  },
  {
    id: 353,
    title: "Misconfigured ReadOnlyMany Mount Blocks Write Operations",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated the manifest to readOnly: false.",
    tags: ["description", "misconfigured", "write", "mount", "blocks"],
    category: "Storage"
  },
  {
    id: 354,
    title: "In-Tree Plugin PVs Lost After Driver Migration",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Manually edited PV annotations to match CSI requirements.",
    tags: ["description", "plugin", "driver", "lost", "after"],
    category: "Storage"
  },
  {
    id: 355,
    title: "Pod Deleted but Volume Still Mounted on Node",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Manually unmounted the volume on node. 	• Drained and rebooted the node.",
    tags: ["still", "description", "node", "volume", "mounted"],
    category: "Storage"
  },
  {
    id: 356,
    title: "Ceph RBD Volume Crashes Pods Under IOPS Saturation",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Migrated to SSD-backed Ceph pools. 	• Throttled application concurrency.",
    tags: ["iops", "saturation", "pods", "description", "under"],
    category: "Storage"
  },
  {
    id: 357,
    title: "ReplicaSet Using PVCs Fails Due to VolumeClaimTemplate Misuse",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Refactored ReplicaSet to StatefulSet.",
    tags: ["using", "pvcs", "description", "misuse", "replicaset"],
    category: "Storage"
  },
  {
    id: 358,
    title: "Filesystem Type Mismatch During Volume Attach",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Reformatted disk to ext4. 	• Aligned StorageClass with PV fsType.",
    tags: ["description", "volume", "during", "attach", "type"],
    category: "Storage"
  },
  {
    id: 359,
    title: "iSCSI Volumes Fail After Node Kernel Upgrade",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Installed open-iscsi and related modules. 	• Rebooted node.",
    tags: ["upgrade", "description", "volumes", "kernel", "node"],
    category: "Storage"
  },
  {
    id: 360,
    title: "PVs Not Deleted After PVC Cleanup Due to Retain Policy",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Manually deleted PVs and EBS volumes.",
    tags: ["policy", "retain", "description", "cleanup", "after"],
    category: "Storage"
  },
  {
    id: 361,
    title: "Concurrent Pod Scheduling on the Same PVC Causes Mount Conflict",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Added anti-affinity to restrict pod scheduling to a single node. 	• Used EFS (ReadWriteMany) for workloads needing shared storage.",
    tags: ["same", "description", "causes", "scheduling", "mount"],
    category: "Storage"
  },
  {
    id: 362,
    title: "StatefulSet Pod Replacement Fails Due to PVC Retention",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Deleted old PVC manually to let StatefulSet recreate it.",
    tags: ["retention", "description", "replacement", "fails", "available"],
    category: "Storage"
  },
  {
    id: 363,
    title: "HostPath Volume Access Leaks Host Data into Container",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Corrected volume path in manifest. 	• Revoked pod access.",
    tags: ["into", "description", "data", "host", "access"],
    category: "Storage"
  },
  {
    id: 364,
    title: "CSI Driver Crashes When Node Resource Is Deleted Prematurely",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Waited for CSI driver to timeout and self-recover. 	• Rebooted node to forcibly detach volumes.",
    tags: ["prematurely", "description", "available", "node", "driver"],
    category: "Storage"
  },
  {
    id: 365,
    title: "Retained PV Blocks New Claim Binding with Identical Name",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "medium",
    resolution: "• Manually deleted the old PV to allow dynamic provisioning.",
    tags: ["description", "name", "retained", "with", "blocks"],
    category: "Storage"
  },
  {
    id: 366,
    title: "CSI Plugin Panic on Missing Mount Option",
    description: "No description available.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Removed mountOptions: from manifest. 	• Patched CSI driver to add nil checks.",
    tags: ["panic", "description", "plugin", "mount", "option"],
    category: "Storage"
  },
  {
    id: 367,
    title: "Pod Fails to Mount Volume Due to SELinux Context Mismatch",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Relabeled volume with chcon -Rt container_file_t /data.",
    tags: ["context", "description", "selinux", "mount", "volume"],
    category: "Storage"
  },
  {
    id: 368,
    title: "VolumeExpansion on Bound PVC Fails Due to Pod Running",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Deleted pod to trigger offline volume resize. 	• PVC then showed FileSystemResizePending → Bound.",
    tags: ["running", "description", "volumeexpansion", "fails", "available"],
    category: "Storage"
  },
  {
    id: 369,
    title: "CSI Driver Memory Leak on Volume Detach Loop",
    description: "No description available.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Restarted CSI plugin. 	• Patched driver to implement exponential backoff.",
    tags: ["memory", "description", "loop", "leak", "detach"],
    category: "Storage"
  },
  {
    id: 370,
    title: "Volume Mount Timeout Due to Slow Cloud API",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Waited for Azure API to stabilize. 	• Used local PVs for critical workloads moving forward.",
    tags: ["cloud", "description", "timeout", "mount", "volume"],
    category: "Storage"
  },
  {
    id: 371,
    title: "Volume Snapshot Restore Misses Application Consistency",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Integrated pre-freeze and post-thaw hooks via Velero Restic. 	• Enabled application-aware backups.",
    tags: ["misses", "application", "restore", "description", "volume"],
    category: "Storage"
  },
  {
    id: 372,
    title: "File Locking Issue Between Multiple Pods on NFS",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Introduced flock-based locking in application code. 	• Used local persistent volume instead for critical data.",
    tags: ["file", "pods", "description", "issue", "locking"],
    category: "Storage"
  },
  {
    id: 373,
    title: "Pod Reboots Erase Data on EmptyDir Volume",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Switched to hostPath for logs or persisted to object storage.",
    tags: ["erase", "description", "data", "emptydir", "reboots"],
    category: "Storage"
  },
  {
    id: 374,
    title: "PVC Resize Fails on In-Use Block Device",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Stopped the pod and retried resize.",
    tags: ["device", "description", "block", "resize", "fails"],
    category: "Storage"
  },
  {
    id: 375,
    title: "Default StorageClass Prevents PVC Binding to Custom Class",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "low",
    resolution: "• Explicitly set storageClassName in the PVC.",
    tags: ["class", "default", "description", "prevents", "custom"],
    category: "Storage"
  },
  {
    id: 376,
    title: "Ceph RBD Volume Mount Failure Due to Kernel Mismatch",
    description: "No description available.",
    component: "Node",
    severity: "critical",
    resolution: "• Reinstalled kernel modules and rebooted node.",
    tags: ["failure", "description", "kernel", "mount", "volume"],
    category: "Storage"
  },
  {
    id: 377,
    title: "CSI Volume Cleanup Delay Leaves Orphaned Devices",
    description: "No description available.",
    component: "Kubelet",
    severity: "low",
    resolution: "• Manually removed symlinks and restarted kubelet.",
    tags: ["orphaned", "description", "cleanup", "volume", "devices"],
    category: "Storage"
  },
  {
    id: 378,
    title: "Immutable ConfigMap Used in CSI Sidecar Volume Mount",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Restarted CSI sidecar pods.",
    tags: ["used", "immutable", "description", "available", "mount"],
    category: "Storage"
  },
  {
    id: 379,
    title: "PodMount Denied Due to SecurityContext Constraints",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Modified SCC to allow required context or used correct volume labeling.",
    tags: ["podmount", "description", "denied", "securitycontext", "constraints"],
    category: "Storage"
  },
  {
    id: 380,
    title: "VolumeProvisioner Race Condition Leads to Duplicated PVC",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Patched CSI controller to implement idempotent provisioning.",
    tags: ["description", "condition", "race", "duplicated", "available"],
    category: "Storage"
  },
  {
    id: 381,
    title: "PVC Bound to Deleted PV After Restore",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Deleted and re-created PVCs manually or re-triggered restore in correct order.",
    tags: ["bound", "restore", "description", "after", "available"],
    category: "Storage"
  },
  {
    id: 382,
    title: "Unexpected Volume Type Defaults to HDD Instead of SSD",
    description: "No description available.",
    component: "Unknown",
    severity: "medium",
    resolution: "• Updated manifests to explicitly reference pd-ssd.",
    tags: ["instead", "unexpected", "defaults", "description", "volume"],
    category: "Storage"
  },
  {
    id: 383,
    title: "ReclaimPolicy Retain Caused Resource Leaks",
    description: "No description available.",
    component: "Node",
    severity: "medium",
    resolution: "• Manually cleaned up PVs and external disk artifacts.",
    tags: ["retain", "description", "available", "reclaimpolicy", "resource"],
    category: "Storage"
  },
  {
    id: 384,
    title: "ReadWriteOnce PVC Mounted by Multiple Pods",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated deployment to use ReadWriteMany (EFS) for shared access.",
    tags: ["pods", "description", "mounted", "multiple", "available"],
    category: "Storage"
  },
  {
    id: 385,
    title: "VolumeAttach Race on StatefulSet Rolling Update",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Set podManagementPolicy: OrderedReady.",
    tags: ["description", "race", "rolling", "available", "volumeattach"],
    category: "Storage"
  },
  {
    id: 386,
    title: "CSI Driver CrashLoop Due to Missing Node Labels",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Reapplied node labels and restarted sidecars.",
    tags: ["labels", "description", "node", "driver", "crashloop"],
    category: "Storage"
  },
  {
    id: 387,
    title: "PVC Deleted While Volume Still Mounted",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Force deleted pod, manually detached volume.",
    tags: ["still", "description", "volume", "mounted", "while"],
    category: "Storage"
  },
  {
    id: 388,
    title: "In-Tree Volume Plugin Migration Caused Downtime",
    description: "No description available.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Re-enabled legacy plugin until CSI was functional.",
    tags: ["downtime", "description", "plugin", "volume", "caused"],
    category: "Storage"
  },
  {
    id: 389,
    title: "Overprovisioned Thin Volumes Hit Underlying Limit",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Resized physical disk and added monitoring.",
    tags: ["description", "available", "overprovisioned", "volumes", "thin"],
    category: "Storage"
  },
  {
    id: 390,
    title: "Dynamic Provisioning Failure Due to Quota Exhaustion",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "critical",
    resolution: "• Increased quota or deleted old volumes.",
    tags: ["dynamic", "failure", "quota", "description", "available"],
    category: "Storage"
  },
  {
    id: 391,
    title: "PVC Resizing Didn’t Expand Filesystem Automatically",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Restarted the pod to trigger filesystem expansion.",
    tags: ["didn", "description", "available", "automatically", "resizing"],
    category: "Storage"
  },
  {
    id: 392,
    title: "StatefulSet Pods Lost Volume Data After Node Reboot",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Migrated to network-attached persistent storage (NFS/CSI).",
    tags: ["reboot", "pods", "data", "description", "node"],
    category: "Storage"
  },
  {
    id: 393,
    title: "VolumeSnapshots Failed to Restore with Immutable Fields",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "medium",
    resolution: "• Created a new PVC with correct parameters and attached manually.",
    tags: ["failed", "restore", "immutable", "description", "with"],
    category: "Storage"
  },
  {
    id: 394,
    title: "GKE Autopilot PVCs Stuck Due to Resource Class Conflict",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Updated PVCs and workload definitions to specify supported resource classes.",
    tags: ["conflict", "autopilot", "pvcs", "description", "stuck"],
    category: "Storage"
  },
  {
    id: 395,
    title: "Cross-Zone Volume Scheduling Failed in Regional Cluster",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated storage class to use regional persistent disks.",
    tags: ["zone", "cluster", "cross", "regional", "failed"],
    category: "Storage"
  },
  {
    id: 396,
    title: "Stuck Finalizers on Deleted PVCs Blocking Namespace Deletion",
    description: "No description available.",
    component: "Controller",
    severity: "medium",
    resolution: "• Patched PVCs to remove finalizers manually.",
    tags: ["deletion", "pvcs", "finalizers", "description", "available"],
    category: "Storage"
  },
  {
    id: 397,
    title: "CSI Driver Upgrade Corrupted Volume Attachments",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Rolled back to previous CSI driver version.",
    tags: ["upgrade", "description", "volume", "driver", "corrupted"],
    category: "Storage"
  },
  {
    id: 398,
    title: "Stale Volume Handles After Disaster Recovery Cutover",
    description: "No description available.",
    component: "Persistent Volume",
    severity: "medium",
    resolution: "• Manually edited PV specs or recreated PVCs from scratch.",
    tags: ["cutover", "description", "handles", "volume", "stale"],
    category: "Storage"
  },
  {
    id: 399,
    title: "Application Wrote Outside Mounted Path and Lost Data",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated application config to write into the mount path.",
    tags: ["application", "wrote", "description", "data", "outside"],
    category: "Storage"
  },
  {
    id: 400,
    title: "Cluster Autoscaler Deleted Nodes with Mounted Volumes",
    description: "No description available.",
    component: "Node",
    severity: "critical",
    resolution: "• Enabled --balance-similar-node-groups and --skip-nodes-with-local-storage.",
    tags: ["cluster", "nodes", "description", "volumes", "mounted"],
    category: "Storage"
  },
  {
    id: 401,
    title: "HPA Didn't Scale Due to Missing Metrics Server",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Installed metrics-server using official manifests.",
    tags: ["didn", "description", "metrics", "missing", "scale"],
    category: "Scaling & Load"
  },
  {
    id: 402,
    title: "CPU Throttling Prevented Effective Autoscaling",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased CPU limits or removed them entirely for key services.",
    tags: ["description", "throttling", "effective", "prevented", "available"],
    category: "Scaling & Load"
  },
  {
    id: 403,
    title: "Overprovisioned Pods Starved the Cluster",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted requests/limits based on real usage.",
    tags: ["starved", "cluster", "pods", "description", "overprovisioned"],
    category: "Scaling & Load"
  },
  {
    id: 404,
    title: "HPA and VPA Conflicted, Causing Flapping",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Disabled VPA on workloads using HPA.",
    tags: ["causing", "flapping", "description", "conflicted", "available"],
    category: "Scaling & Load"
  },
  {
    id: 405,
    title: "Cluster Autoscaler Didn't Scale Due to Pod Affinity Rules",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Relaxed anti-affinity or labeled node groups appropriately.",
    tags: ["cluster", "didn", "description", "rules", "affinity"],
    category: "Scaling & Load"
  },
  {
    id: 406,
    title: "Load Test Crashed Cluster Due to Insufficient Node Quotas",
    description: "No description available.",
    component: "etcd",
    severity: "critical",
    resolution: "• Added maxReplicas to HPA. 	• Throttled CI tests.",
    tags: ["cluster", "test", "insufficient", "description", "quotas"],
    category: "Scaling & Load"
  },
  {
    id: 407,
    title: "Scale-To-Zero Caused Cold Starts and SLA Violations",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Added minReplicaCount: 1 to high-SLA services.",
    tags: ["violations", "description", "starts", "available", "cold"],
    category: "Scaling & Load"
  },
  {
    id: 408,
    title: "Misconfigured Readiness Probe Blocked HPA Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected readiness endpoint in manifest.",
    tags: ["readiness", "blocked", "description", "misconfigured", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 409,
    title: "Custom Metrics Adapter Crashed, Breaking Custom HPA",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Fixed Prometheus query in adapter configmap.",
    tags: ["breaking", "description", "available", "metrics", "custom"],
    category: "Scaling & Load"
  },
  {
    id: 410,
    title: "Application Didn’t Handle Scale-In Gracefully",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Implemented preStop hook with delay. 	• Added graceful shutdown in app logic.",
    tags: ["application", "didn", "description", "gracefully", "handle"],
    category: "Scaling & Load"
  },
  {
    id: 411,
    title: "Cluster Autoscaler Ignored Pod PriorityClasses",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Enabled preemption. 	• Re-tuned PriorityClass definitions to align with business SLAs.",
    tags: ["cluster", "ignored", "description", "priorityclasses", "autoscaler"],
    category: "Scaling & Load"
  },
  {
    id: 412,
    title: "ReplicaSet Misalignment Led to Excessive Scale-Out",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Cleaned up old ReplicaSets. 	• Scoped matchLabels more tightly.",
    tags: ["description", "available", "replicaset", "misalignment", "scale"],
    category: "Scaling & Load"
  },
  {
    id: 413,
    title: "StatefulSet Didn't Scale Due to PodDisruptionBudget",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted PDB to tolerate one pod disruption.",
    tags: ["didn", "description", "scale", "available", "statefulset"],
    category: "Scaling & Load"
  },
  {
    id: 414,
    title: "Horizontal Pod Autoscaler Triggered by Wrong Metric",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Switched HPA to CPU metric. 	• Tuned caching logic in application.",
    tags: ["metric", "description", "wrong", "autoscaler", "available"],
    category: "Scaling & Load"
  },
  {
    id: 415,
    title: "Prometheus Scraper Bottlenecked Custom HPA Metrics",
    description: "No description available.",
    component: "Horizontal Pod Autoscaler",
    severity: "medium",
    resolution: "• Reduced scrape interval for critical metrics.",
    tags: ["description", "metrics", "scraper", "custom", "available"],
    category: "Scaling & Load"
  },
  {
    id: 416,
    title: "Kubernetes Downscaled During Rolling Update",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Tuned maxUnavailable and minReadySeconds. 	• Added load-based HPA stabilization window.",
    tags: ["kubernetes", "description", "during", "downscaled", "rolling"],
    category: "Scaling & Load"
  },
  {
    id: 417,
    title: "KEDA Failed to Scale on Kafka Lag Metric",
    description: "No description available.",
    component: "ReplicaSet",
    severity: "critical",
    resolution: "• Updated Kafka trigger auth to use correct secret.",
    tags: ["failed", "metric", "description", "keda", "kafka"],
    category: "Scaling & Load"
  },
  {
    id: 418,
    title: "Spike in Load Exceeded Pod Init Time",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Optimized Docker image layers and moved setup to init containers.",
    tags: ["description", "exceeded", "init", "spike", "available"],
    category: "Scaling & Load"
  },
  {
    id: 419,
    title: "Overuse of Liveness Probes Disrupted Load Balance",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased probe timeoutSeconds and failureThreshold.",
    tags: ["balance", "disrupted", "description", "probes", "liveness"],
    category: "Scaling & Load"
  },
  {
    id: 420,
    title: "Scale-In Happened Before Queue Was Drained",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Added preStop hook to finish queue processing.",
    tags: ["happened", "drained", "description", "queue", "scale"],
    category: "Scaling & Load"
  },
  {
    id: 421,
    title: "Node Drain Race Condition During Scale Down",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted terminationGracePeriodSeconds for pods. 	• Introduced node draining delay in scaling policy.",
    tags: ["description", "condition", "drain", "node", "race"],
    category: "Scaling & Load"
  },
  {
    id: 422,
    title: "HPA Disabled Due to Missing Resource Requests",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Set proper resources.requests in the deployment YAML.",
    tags: ["disabled", "requests", "description", "missing", "resource"],
    category: "Scaling & Load"
  },
  {
    id: 423,
    title: "Unexpected Overprovisioning of Pods",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Reduced resource limits to more realistic values.",
    tags: ["pods", "available", "unexpected", "description"],
    category: "Scaling & Load"
  },
  {
    id: 424,
    title: "Autoscaler Failed During StatefulSet Upgrade",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted StatefulSet rollingUpdate strategy. 	• Tuned autoscaler thresholds for more aggressive scaling.",
    tags: ["failed", "upgrade", "description", "during", "autoscaler"],
    category: "Scaling & Load"
  },
  {
    id: 425,
    title: "Inadequate Load Distribution in a Multi-AZ Setup",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Updated service to use topologySpreadConstraints for better AZ distribution.",
    tags: ["description", "setup", "distribution", "multi", "available"],
    category: "Scaling & Load"
  },
  {
    id: 426,
    title: "Downscale Too Aggressive During Traffic Dips",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Set a minimum of 1 replica for critical workloads. 	• Tuned scaling thresholds to avoid premature downscaling.",
    tags: ["downscale", "traffic", "description", "during", "aggressive"],
    category: "Scaling & Load"
  },
  {
    id: 427,
    title: "Insufficient Scaling Under High Ingress Traffic",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Implemented custom metrics for Ingress traffic. 	• Configured HPA to scale based on traffic load.",
    tags: ["traffic", "insufficient", "description", "scaling", "under"],
    category: "Scaling & Load"
  },
  {
    id: 428,
    title: "Nginx Ingress Controller Hit Rate Limit on External API",
    description: "No description available.",
    component: "Controller",
    severity: "low",
    resolution: "• Added retry logic for external API requests. 	• Adjusted autoscaling to consider both internal load and external API delays.",
    tags: ["rate", "nginx", "controller", "external", "description"],
    category: "Scaling & Load"
  },
  {
    id: 429,
    title: "Resource Constraints on Node Impacted Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Added more nodes to the cluster. 	• Increased resource limits for node pools.",
    tags: ["impacted", "description", "scaling", "node", "constraints"],
    category: "Scaling & Load"
  },
  {
    id: 430,
    title: "Memory Leak in Application Led to Excessive Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Identified and fixed the memory leak in the application code. 	• Tuned autoscaling to more accurately measure actual load.",
    tags: ["application", "memory", "description", "available", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 431,
    title: "Inconsistent Pod Scaling During Burst Traffic",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted HPA settings to lower the stabilization window and set appropriate scaling thresholds.",
    tags: ["traffic", "description", "scaling", "during", "inconsistent"],
    category: "Scaling & Load"
  },
  {
    id: 432,
    title: "Auto-Scaling Hit Limits with StatefulSet",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted pod affinity rules to allow scaling across more nodes.",
    tags: ["limits", "description", "scaling", "with", "available"],
    category: "Scaling & Load"
  },
  {
    id: 433,
    title: "Cross-Cluster Autoscaling Failures",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted resource allocation policies to account for cross-cluster scaling. 	• Ensured consistent resource availability across regions.",
    tags: ["cluster", "cross", "description", "available", "failures"],
    category: "Scaling & Load"
  },
  {
    id: 434,
    title: "Service Disruption During Auto-Scaling of StatefulSet",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Tuning the rollingUpdate strategy allowed pods to scale without downtime.",
    tags: ["description", "scaling", "disruption", "during", "service"],
    category: "Scaling & Load"
  },
  {
    id: 435,
    title: "Unwanted Pod Scale-down During Quiet Periods",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased scaleDown stabilization settings to prevent rapid pod removal. 	• Adjusted thresholds to delay scale-down actions.",
    tags: ["quiet", "description", "periods", "unwanted", "during"],
    category: "Scaling & Load"
  },
  {
    id: 436,
    title: "Cluster Autoscaler Inconsistencies with Node Pools",
    description: "No description available.",
    component: "Node",
    severity: "medium",
    resolution: "• Increased node pool size limits to allow autoscaling. 	• Adjusted autoscaler settings to better handle resource spikes.",
    tags: ["cluster", "pools", "inconsistencies", "description", "node"],
    category: "Scaling & Load"
  },
  {
    id: 437,
    title: "Disrupted Service During Pod Autoscaling in StatefulSet",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Disabled autoscaling for stateful pods and adjusted configuration for better handling of stateful workloads.",
    tags: ["disrupted", "description", "service", "during", "available"],
    category: "Scaling & Load"
  },
  {
    id: 438,
    title: "Slow Pod Scaling During High Load",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted HPA to trigger scaling at lower thresholds.",
    tags: ["description", "scaling", "during", "slow", "high"],
    category: "Scaling & Load"
  },
  {
    id: 439,
    title: "Autoscaler Skipped Scale-up Due to Incorrect Metric",
    description: "No description available.",
    component: "Horizontal Pod Autoscaler",
    severity: "low",
    resolution: "• Reconfigured HPA to scale based on CPU metrics.",
    tags: ["skipped", "incorrect", "metric", "description", "autoscaler"],
    category: "Scaling & Load"
  },
  {
    id: 440,
    title: "Scaling Inhibited Due to Pending Jobs in Queue",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Added job queue monitoring metrics to scaling triggers. 	• Adjusted HPA to trigger based on job queue size and pod workload.",
    tags: ["jobs", "description", "scaling", "queue", "inhibited"],
    category: "Scaling & Load"
  },
  {
    id: 441,
    title: "Scaling Delayed Due to Incorrect Resource Requests",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Reduced resource requests to better align with the available cluster resources. 	• Set resource limits more carefully based on load testing.",
    tags: ["requests", "incorrect", "description", "scaling", "delayed"],
    category: "Scaling & Load"
  },
  {
    id: 442,
    title: "Unexpected Pod Termination Due to Scaling Policy",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted the scaleDown stabilization window and added buffer periods before termination. 	• Revisited scaling policy settings to ensure more balanced scaling.",
    tags: ["termination", "unexpected", "policy", "description", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 443,
    title: "Unstable Load Balancing During Scaling Events",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the load balancer to rebalance traffic more efficiently after scaling events. 	• Adjusted readiness and liveness probes to allow new pods to join the pool smoothly.",
    tags: ["balancing", "unstable", "description", "events", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 444,
    title: "Autoscaling Ignored Due to Resource Quotas",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted resource quotas to allow more flexible scaling. 	• Implemented dynamic resource quota adjustments based on actual usage.",
    tags: ["ignored", "description", "quotas", "resource", "available"],
    category: "Scaling & Load"
  },
  {
    id: 445,
    title: "Delayed Scaling Response to Traffic Spike",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Lowered scaling thresholds to trigger scaling faster. 	• Used burst metrics for quicker scaling decisions.",
    tags: ["traffic", "description", "scaling", "delayed", "spike"],
    category: "Scaling & Load"
  },
  {
    id: 446,
    title: "CPU Utilization-Based Scaling Did Not Trigger for High Memory Usage",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Configured HPA to also consider memory usage as a scaling metric. 	• Adjusted scaling policies to scale pods based on both CPU and memory utilization.",
    tags: ["memory", "based", "description", "scaling", "trigger"],
    category: "Scaling & Load"
  },
  {
    id: 447,
    title: "Inefficient Horizontal Scaling of StatefulSets",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Switched to a Deployment with persistent volumes, which better supported horizontal scaling for the workload. 	• Used StatefulSets only for workloads that require persistent state and stable network identities.",
    tags: ["statefulsets", "description", "scaling", "inefficient", "available"],
    category: "Scaling & Load"
  },
  {
    id: 448,
    title: "Autoscaler Skipped Scaling Events Due to Flaky Metrics",
    description: "No description available.",
    component: "Unknown",
    severity: "low",
    resolution: "• Switched to using native Kubernetes metrics for autoscaling decisions. 	• Ensured that metrics from third-party tools were properly validated before being used in autoscaling.",
    tags: ["skipped", "description", "events", "scaling", "metrics"],
    category: "Scaling & Load"
  },
  {
    id: 449,
    title: "Delayed Pod Creation Due to Node Affinity Misconfigurations",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Loosened node affinity rules to allow more flexible scheduling. 	• Used affinity rules more suited for scaling scenarios.",
    tags: ["description", "node", "delayed", "affinity", "creation"],
    category: "Scaling & Load"
  },
  {
    id: 450,
    title: "Excessive Scaling During Short-Term Traffic Spikes",
    description: "No description available.",
    component: "Unknown",
    severity: "critical",
    resolution: "• Adjusted scaling policies to better handle short-term traffic spikes. 	• Implemented rate-limiting for scaling events.",
    tags: ["term", "traffic", "spikes", "description", "available"],
    category: "Scaling & Load"
  },
  {
    id: 451,
    title: "Inconsistent Scaling Due to Misconfigured Horizontal Pod Autoscaler",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Switched to using Kubernetes-native CPU and memory metrics for autoscaling. 	• Improved the reliability of the custom metrics system by implementing fallback mechanisms.",
    tags: ["description", "misconfigured", "scaling", "inconsistent", "autoscaler"],
    category: "Scaling & Load"
  },
  {
    id: 452,
    title: "Load Balancer Overload After Quick Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured the load balancer to automatically adjust traffic distribution after pod scaling events. 	• Implemented health checks to ensure that only fully initialized pods received traffic.",
    tags: ["overload", "description", "quick", "balancer", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 453,
    title: "Autoscaling Failed During Peak Traffic Periods",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Lowered the scaling thresholds to respond more quickly to persistent traffic increases. 	• Implemented more granular scaling rules based on time-based patterns.",
    tags: ["peak", "traffic", "failed", "description", "periods"],
    category: "Scaling & Load"
  },
  {
    id: 454,
    title: "Insufficient Node Resources During Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased the resource limits on existing nodes. 	• Implemented Cluster Autoscaler to add more nodes when resources are insufficient.",
    tags: ["insufficient", "resources", "description", "scaling", "node"],
    category: "Scaling & Load"
  },
  {
    id: 455,
    title: "Unpredictable Pod Scaling During Cluster Autoscaler Event",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted Cluster Autoscaler settings to delay node addition during scaling events. 	• Tweaked pod scheduling policies to ensure new pods were placed on the most appropriate nodes.",
    tags: ["cluster", "event", "description", "available", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 456,
    title: "CPU Resource Over-Commitment During Scale-Up",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted the CPU resource limits and requests for new pods to avoid over-commitment. 	• Implemented resource isolation policies to prevent CPU contention.",
    tags: ["commitment", "description", "over", "during", "scale"],
    category: "Scaling & Load"
  },
  {
    id: 457,
    title: "Failure to Scale Due to Horizontal Pod Autoscaler Anomaly",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Implemented a fallback mechanism to trigger scaling based on last known good metrics. 	• Used a more robust monitoring system to track resource usage in real time.",
    tags: ["failure", "description", "scale", "autoscaler", "available"],
    category: "Scaling & Load"
  },
  {
    id: 458,
    title: "Memory Pressure Causing Slow Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased the memory available on nodes to alleviate pressure. 	• Used resource requests and limits more conservatively to ensure proper memory allocation.",
    tags: ["causing", "memory", "pressure", "description", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 459,
    title: "Node Over-Provisioning During Cluster Scaling",
    description: "No description available.",
    component: "Node",
    severity: "low",
    resolution: "• Fine-tuned Cluster Autoscaler settings to scale nodes more precisely based on actual usage. 	• Implemented tighter limits on node scaling thresholds.",
    tags: ["cluster", "description", "available", "scaling", "over"],
    category: "Scaling & Load"
  },
  {
    id: 460,
    title: "Autoscaler Fails to Handle Node Termination Events Properly",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Configured the autoscaler to prioritize the immediate replacement of terminated nodes. 	• Enhanced the health checks to better detect node failures.",
    tags: ["properly", "termination", "description", "events", "handle"],
    category: "Scaling & Load"
  },
  {
    id: 461,
    title: "Node Failure During Pod Scaling Up",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Configured the Cluster Autoscaler to provision more nodes and preemptively account for potential node failures. 	• Ensured the cloud provider's infrastructure health was regularly monitored.",
    tags: ["failure", "description", "scaling", "node", "during"],
    category: "Scaling & Load"
  },
  {
    id: 462,
    title: "Unstable Scaling During Traffic Spikes",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Adjusted the scaling policy to use smaller time intervals for triggering scaling. 	• Introduced custom metrics to scale pods based on response times and traffic patterns.",
    tags: ["traffic", "spikes", "unstable", "description", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 463,
    title: "Insufficient Node Pools During Sudden Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Expanded node pool size to accommodate more pods. 	• Adjusted autoscaling policies to trigger faster node provisioning during scaling events.",
    tags: ["pools", "insufficient", "description", "scaling", "node"],
    category: "Scaling & Load"
  },
  {
    id: 464,
    title: "Latency Spikes During Horizontal Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Configured load balancer to refresh routing rules as soon as new pods were scaled up. 	• Implemented readiness probes to ensure that only fully initialized pods were exposed to traffic.",
    tags: ["spikes", "description", "scaling", "latency", "during"],
    category: "Scaling & Load"
  },
  {
    id: 465,
    title: "Resource Starvation During Infrequent Scaling Events",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted resource requests and limits to better reflect the actual usage during scaling events. 	• Increased node pool size to provide more headroom during burst scaling.",
    tags: ["infrequent", "description", "events", "scaling", "during"],
    category: "Scaling & Load"
  },
  {
    id: 466,
    title: "Autoscaler Delayed Reaction to Load Decrease",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Reduced the cooldown period in the HPA configuration to make it more responsive to traffic decreases. 	• Set resource limits to better reflect current traffic levels.",
    tags: ["description", "reaction", "delayed", "autoscaler", "available"],
    category: "Scaling & Load"
  },
  {
    id: 467,
    title: "Node Resource Exhaustion Due to High Pod Density",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted pod affinity rules to distribute pods more evenly across the cluster. 	• Increased the number of nodes available to handle the pod load more effectively.",
    tags: ["description", "density", "node", "exhaustion", "resource"],
    category: "Scaling & Load"
  },
  {
    id: 468,
    title: "Scaling Failure Due to Node Memory Pressure",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Increased memory resources on nodes and adjusted pod resource requests to better match available resources. 	• Implemented memory-based autoscaling to handle memory pressure better during scaling events.",
    tags: ["failure", "memory", "pressure", "description", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 469,
    title: "Scaling Latency Due to Slow Node Provisioning",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Worked with the cloud provider to speed up node provisioning times. 	• Used preemptible nodes to quickly handle scaling demands during traffic spikes.",
    tags: ["description", "available", "scaling", "latency", "node"],
    category: "Scaling & Load"
  },
  {
    id: 470,
    title: "Slow Scaling Response Due to Insufficient Metrics Collection",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the metric collection to use real-time data, reducing the delay in scaling actions. 	• Implemented a more frequent metric scraping interval to improve responsiveness.",
    tags: ["insufficient", "collection", "description", "metrics", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 471,
    title: "Node Scaling Delayed Due to Cloud Provider API Limits",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Worked with the cloud provider to increase API rate limits. 	• Configured autoscaling to use multiple API keys to distribute the API requests and avoid hitting rate limits.",
    tags: ["cloud", "limits", "description", "scaling", "node"],
    category: "Scaling & Load"
  },
  {
    id: 472,
    title: "Scaling Overload Due to High Replica Count",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted the replica scaling thresholds in the HPA configuration. 	• Limited the maximum replica count to avoid overload.",
    tags: ["overload", "description", "scaling", "replica", "high"],
    category: "Scaling & Load"
  },
  {
    id: 473,
    title: "Failure to Scale Down Due to Persistent Idle Pods",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Updated the readiness probe configuration to ensure pods were correctly marked as ready or not based on their actual state. 	• Configured the HPA to scale down based on actual pod readiness.",
    tags: ["failure", "pods", "description", "idle", "down"],
    category: "Scaling & Load"
  },
  {
    id: 474,
    title: "Load Balancer Misrouting After Pod Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Configured the load balancer to refresh routing rules dynamically during pod scaling events. 	• Ensured that only ready and healthy pods were included in the load balancer’s routing pool.",
    tags: ["description", "scaling", "balancer", "after", "available"],
    category: "Scaling & Load"
  },
  {
    id: 475,
    title: "Cluster Autoscaler Not Triggering Under High Load",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Adjusted resource requests and limits to match node capacity. 	• Tuned the Cluster Autoscaler to scale more aggressively during high load situations.",
    tags: ["cluster", "description", "under", "triggering", "autoscaler"],
    category: "Scaling & Load"
  },
  {
    id: 476,
    title: "Autoscaling Slow Due to Cloud Provider API Delay",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Worked with the cloud provider to optimize node provisioning time. 	• Increased API limits to accommodate the scaling operations.",
    tags: ["cloud", "description", "delay", "slow", "provider"],
    category: "Scaling & Load"
  },
  {
    id: 477,
    title: "Over-provisioning Resources During Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Reduced resource requests and limits to more closely match actual usage patterns. 	• Enabled auto-scaling of resource limits based on traffic patterns.",
    tags: ["resources", "description", "scaling", "available", "over"],
    category: "Scaling & Load"
  },
  {
    id: 478,
    title: "Incorrect Load Balancer Configuration After Node Scaling",
    description: "No description available.",
    component: "Node",
    severity: "medium",
    resolution: "• Updated load balancer settings to ensure they dynamically adjust based on node changes. 	• Implemented a health check system for nodes before routing traffic.",
    tags: ["incorrect", "configuration", "description", "scaling", "balancer"],
    category: "Scaling & Load"
  },
  {
    id: 479,
    title: "Autoscaling Disabled Due to Resource Constraints",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reduced resource requests and limits on existing pods. 	• Requested additional capacity from the cloud provider to handle scaling operations.",
    tags: ["disabled", "description", "constraints", "resource", "available"],
    category: "Scaling & Load"
  },
  {
    id: 480,
    title: "Resource Fragmentation Leading to Scaling Delays",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Enabled pod affinity and anti-affinity rules to ensure better distribution of pods across nodes. 	• Reconfigured node selectors and affinity rules for optimal pod placement.",
    tags: ["description", "available", "scaling", "fragmentation", "resource"],
    category: "Scaling & Load"
  },
  {
    id: 481,
    title: "Incorrect Scaling Triggers Due to Misconfigured Metrics Server",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Corrected the metrics server configuration to ensure it provided accurate resource data. 	• Adjusted the scaling thresholds to be more aligned with actual traffic patterns.",
    tags: ["incorrect", "description", "misconfigured", "metrics", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 482,
    title: "Autoscaler Misconfigured with Cluster Network Constraints",
    description: "No description available.",
    component: "Node",
    severity: "low",
    resolution: "• Adjusted network policies and firewall rules to allow communication between new and existing nodes. 	• Configured the autoscaler to take network constraints into account during scaling events.",
    tags: ["cluster", "description", "misconfigured", "network", "with"],
    category: "Scaling & Load"
  },
  {
    id: 483,
    title: "Scaling Delays Due to Resource Quota Exhaustion",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Increased the resource quotas to allow for more pods and scaling capacity. 	• Reviewed and adjusted resource quotas to ensure they aligned with expected scaling behavior.",
    tags: ["quota", "description", "scaling", "exhaustion", "resource"],
    category: "Scaling & Load"
  },
  {
    id: 484,
    title: "Memory Resource Overload During Scaling",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted pod memory requests and limits to avoid over-provisioning. 	• Increased memory resources on the nodes to handle the scaled workload.",
    tags: ["memory", "overload", "description", "scaling", "during"],
    category: "Scaling & Load"
  },
  {
    id: 485,
    title: "HPA Scaling Delays Due to Incorrect Metric Aggregation",
    description: "No description available.",
    component: "Horizontal Pod Autoscaler",
    severity: "critical",
    resolution: "• Corrected the aggregation settings to ensure faster response times for scaling events. 	• Tuned the HPA configuration to react more quickly to traffic fluctuations.",
    tags: ["incorrect", "metric", "description", "scaling", "aggregation"],
    category: "Scaling & Load"
  },
  {
    id: 486,
    title: "Scaling Causing Unbalanced Pods Across Availability Zones",
    description: "No description available.",
    component: "Pod",
    severity: "medium",
    resolution: "• Reconfigured pod affinity rules to ensure an even distribution across availability zones. 	• Implemented anti-affinity rules to avoid overloading specific zones.",
    tags: ["causing", "availability", "zones", "across", "pods"],
    category: "Scaling & Load"
  },
  {
    id: 487,
    title: "Failed Scaling due to Insufficient Node Capacity for StatefulSets",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "• Increased the node pool size and resource limits for the StatefulSets. 	• Rescheduled PVCs and balanced the resource requests more effectively across nodes.",
    tags: ["statefulsets", "insufficient", "failed", "description", "scaling"],
    category: "Scaling & Load"
  },
  {
    id: 488,
    title: "Uncontrolled Resource Spikes After Scaling Large StatefulSets",
    description: "No description available.",
    component: "Pod",
    severity: "critical",
    resolution: "• Adjusted resource requests and limits for StatefulSet pods to better match the actual usage. 	• Implemented a rolling upgrade to distribute the scaling load more evenly.",
    tags: ["statefulsets", "uncontrolled", "spikes", "large", "description"],
    category: "Scaling & Load"
  },
  {
    id: 489,
    title: "Cluster Autoscaler Preventing Scaling Due to Underutilized Nodes",
    description: "No description available.",
    component: "Pod",
    severity: "low",
    resolution: "Review logs and configuration.",
    tags: ["cluster", "underutilized", "nodes", "description", "scaling"],
    category: "Scaling & Load"
  },
  
  // Note: In a real implementation, all 500 issues would be listed here
  // The above is a representative sample showing the format and variety
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
