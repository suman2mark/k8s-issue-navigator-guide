import { Issue, SeverityType, ComponentFilter, CategoryFilter } from "@/lib/types";

// This is a complete collection of issues from the k8s-500-prod-issues repository
// Source: https://github.com/vijay2181/k8s-500-prod-issues
export const issues: Issue[] = [

    {
    id: 1,
    title: "Zombie Pods Causing NodeDrain to Hang",
    description: "Node drain stuck indefinitely due to unresponsive terminating pod.",
    component: "Unknown",
    severity: "medium",
    resolution: `kubectl patch pod <pod-name> -p '{"metadata":{"finalizers":[]}}' --type=merge`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 2,
    title: "API Server Crash Due to Excessive CRD Writes",
    description: "API server crashed due to flooding by a malfunctioning controller creating too many custom resources.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Scaled the controller to 0 replicas.
	• Manually deleted thousands of stale CRs using batch deletion.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 3,
    title: "Node Not Rejoining After Reboot",
    description: "A rebooted node failed to rejoin the cluster due to kubelet identity mismatch.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Re-joined the node using correct --hostname-override.
	• Cleaned up stale node entry from the cluster.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 4,
    title: "Etcd Disk Full Causing API Server Timeout",
    description: "etcd ran out of disk space, making API server unresponsive.",
    component: "Unknown",
    severity: "medium",
    resolution: `bash
CopyEdit
etcdctl compact <rev>
etcdctl defrag
	• Cleaned logs, snapshots, and increased disk space temporarily.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 5,
    title: "Misconfigured Taints Blocking Pod Scheduling",
    description: "Critical workloads weren’t getting scheduled due to incorrect node taints.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the inappropriate taints.
	• Re-scheduled workloads.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 6,
    title: "Kubelet DiskPressure Loop on Large Image Pulls",
    description: "Continuous pod evictions caused by DiskPressure due to image bloating.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebuilt image using multistage builds and removed unused layers.
	• Increased ephemeral disk space temporarily.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 7,
    title: "Node Goes NotReady Due to Clock Skew",
    description: "One node dropped from the cluster due to TLS errors from time skew.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted NTP sync.
	• Restarted kubelet after sync.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 8,
    title: "API Server High Latency Due to Event Flooding",
    description: "An app spamming Kubernetes events slowed down the entire API server.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched controller to rate-limit record.Eventf.
	• Cleaned old events.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 9,
    title: "CoreDNS CrashLoop on Startup",
    description: "CoreDNS pods kept crashing due to a misconfigured Corefile.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reverted to backup configmap.
	• Restarted CoreDNS.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 10,
    title: "Control Plane Unavailable After Flannel Misconfiguration",
    description: "Misaligned pod CIDRs caused overlay misrouting and API server failure.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured node with proper CIDR range.
	• Flushed iptables and restarted Flannel.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 11,
    title: "kube-proxy IPTables Rules Overlap Breaking Networking",
    description: "Services became unreachable due to overlapping custom IPTables rules with kube-proxy rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Flushed custom rules and reloaded kube-proxy.

bash
CopyEdit
iptables -F; systemctl restart kube-proxy`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 12,
    title: "Stuck CSR Requests Blocking New Node Joins",
    description: "New nodes couldn’t join due to a backlog of unapproved CSRs.",
    component: "Unknown",
    severity: "medium",
    resolution: `bash
CopyEdit
kubectl certificate approve <csr-name>
	• Re-enabled the CSR approver controller.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 13,
    title: "Failed Cluster Upgrade Due to Unready Static Pods",
    description: "Upgrade failed when static control plane pods weren’t ready due to invalid manifests.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fixed manifest.
	• Restarted kubelet to load corrected pod.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 14,
    title: "Uncontrolled Logs Filled Disk on All Nodes",
    description: "Application pods generated excessive logs, filling up node /var/log.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rotated and truncated logs.
	• Restarted container runtime after cleanup.
	• Disabled debug logging.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 15,
    title: "Node Drain Fails Due to PodDisruptionBudget Deadlock",
    description: "kubectl drain never completed because PDBs blocked eviction.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Temporarily edited PDB to reduce minAvailable.
	• Scaled up replicas before drain.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 16,
    title: "CrashLoop of Kube-Controller-Manager on Boot",
    description: "Controller-manager crashed on startup due to outdated admission controller configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the deprecated plugin from startup flags.
	• Restarted pod.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 17,
    title: "Inconsistent Cluster State After Partial Backup Restore",
    description: "A partial etcd restore led to stale object references and broken dependencies.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually recreated PVCs and secrets using backups from another tool.
	• Redeployed apps.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 18,
    title: "kubelet Unable to Pull Images Due to Proxy Misconfig",
    description: "Nodes failed to pull images from DockerHub due to incorrect proxy environment configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated kubelet service file to include proper NO_PROXY.
	• Restarted kubelet.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 19,
    title: "Multiple Nodes Marked Unreachable Due to Flaky Network Interface",
    description: "Flapping interface on switch caused nodes to be marked NotReady intermittently.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Replaced cable and switch port.
	• Set up redundant bonding with failover.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 20,
    title: "Node Labels Accidentally Overwritten by DaemonSet",
    description: "A DaemonSet used for node labeling overwrote existing labels used by schedulers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restored original labels from backup.
	• Updated script to merge labels.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 21,
    title: "Cluster Autoscaler Continuously Spawning and Deleting Nodes",
    description: "The cluster was rapidly scaling up and down, creating instability in workloads.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fixed the readiness probe to accurately reflect pod health.
	• Tuned scale-down-delay-after-add and scale-down-unneeded-time settings.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 22,
    title: "Stale Finalizers Preventing Namespace Deletion",
    description: "A namespace remained in “Terminating” state indefinitely.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually removed finalizers using a patched JSON:

bash
CopyEdit
kubectl patch ns <name> -p '{"spec":{"finalizers":[]}}' --type=merge`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 23,
    title: "CoreDNS CrashLoop Due to Invalid ConfigMap Update",
    description: "CoreDNS stopped resolving names cluster-wide after a config update.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back to previous working ConfigMap.
	• Restarted CoreDNS pods to pick up change.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 24,
    title: "Pod Eviction Storm Due to DiskPressure",
    description: "A sudden spike in image pulls caused all nodes to hit disk pressure, leading to massive pod evictions.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Pruned unused images.
	• Enabled container runtime garbage collection.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 25,
    title: "Orphaned PVs Causing Unscheduled Pods",
    description: "PVCs were stuck in Pending state due to existing orphaned PVs in Released state.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted orphaned PVs.
	• Changed ReclaimPolicy to Delete for similar volumes.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 26,
    title: "Taints and Tolerations Mismatch Prevented Workload Scheduling",
    description: "Workloads failed to schedule on new nodes that had a taint the workloads didn’t tolerate.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added proper tolerations to workloads:

yaml
CopyEdit
tolerations:
- key: "node-role.kubernetes.io/gpu"
  operator: "Exists"
  effect: "NoSchedule"`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 27,
    title: "Node Bootstrap Failure Due to Unavailable Container Registry",
    description: "New nodes failed to join the cluster due to container runtime timeout when pulling base images.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Brought internal registry back online.
	• Pre-pulled pause/CNI images to node image templates.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 28,
    title: "kubelet Fails to Start Due to Expired TLS Certs",
    description: "Several nodes went NotReady after reboot due to kubelet failing to start with expired client certs.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Regenerated kubelet certs using kubeadm.

bash
CopyEdit
kubeadm certs renew all`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 29,
    title: "kube-scheduler Crash Due to Invalid Leader Election Config",
    description: "kube-scheduler pod failed with panic due to misconfigured leader election flags.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created the missing namespace.
	• Restarted the scheduler pod.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 30,
    title: "Cluster DNS Resolution Broken After Calico CNI Update",
    description: "DNS resolution broke after Calico CNI update due to iptables policy drop changes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added explicit Calico policy allowing kube-dns to pod traffic.

yaml:
egress:
- action: Allow
  destination:
    selector: "k8s-app == 'kube-dns'"`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 31,
    title: "Node Clock Drift Causing Authentication Failures",
    description: "Authentication tokens failed across the cluster due to node clock skew.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Re-enabled and restarted NTP on all nodes.
	• Synchronized system clocks manually.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 32,
    title: "Inconsistent Node Labels Causing Scheduling Bugs",
    description: "Zone-aware workloads failed to schedule due to missing zone labels on some nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually patched node labels to restore zone metadata.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 33,
    title: "API Server Slowdowns from High Watch Connection Count",
    description: "API latency rose sharply due to thousands of watch connections from misbehaving clients.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted offending pods.
	• Updated controller to reuse watches.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 34,
    title: "Etcd Disk Full Crashing the Cluster",
    description: "Entire control plane crashed due to etcd disk running out of space.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Performed etcd compaction and defragmentation.
	• Added disk space temporarily.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 35,
    title: "ClusterConfigMap Deleted by Accident Bringing Down Addons",
    description: "A user accidentally deleted the kube-root-ca.crt ConfigMap, which many workloads relied on.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Recreated ConfigMap from backup.
	• Re-deployed affected system workloads.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 36,
    title: "Misconfigured NodeAffinity Excluding All Nodes",
    description: "A critical deployment was unschedulable due to strict nodeAffinity rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated deployment YAML to reflect actual zones.
	• Re-deployed workloads.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 37,
    title: "Outdated Admission Webhook Blocking All Deployments",
    description: "A stale mutating webhook caused all deployments to fail due to TLS certificate errors.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Renewed cert and redeployed webhook.
	• Disabled webhook temporarily for emergency deployments.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 38,
    title: "API Server Certificate Expiry Blocking Cluster Access",
    description: "After 1 year of uptime, API server certificate expired, blocking access to all components.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Used kubeadm certs renew all.
	• Restarted control plane components.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 39,
    title: "CRI Socket Mismatch Preventing kubelet Startup",
    description: "kubelet failed to start after switching from Docker to containerd due to incorrect CRI socket path.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated kubelet flags to point to /run/containerd/containerd.sock.
	• Restarted kubelet.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 40,
    title: "Cluster-Wide Crash Due to Misconfigured Resource Quotas",
    description: "Cluster workloads failed after applying overly strict resource quotas that denied new pod creation.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back the quota to previous values.
	• Unblocked critical namespaces manually.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 41,
    title: "Cluster Upgrade Failing Due to CNI Compatibility",
    description: "Cluster upgrade failed due to an incompatible version of the CNI plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Upgraded the CNI plugin to the version compatible with K8s v1.22.
	• Restarted affected pods and nodes.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 42,
    title: "Failed Pod Security Policy Enforcement Causing Privileged Container Launch",
    description: "Privileged containers were able to run despite Pod Security Policy enforcement.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled the podsecuritypolicy admission controller.
	• Updated the PodSecurityPolicy to restrict privileged containers.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 43,
    title: "Node Pool Scaling Impacting StatefulSets",
    description: "StatefulSet pods were rescheduled across different nodes, breaking persistent volume bindings.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added proper node affinity rules and volume binding policies to StatefulSet.
	• Rescheduled the pods successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 44,
    title: "Kubelet Crash Due to Out of Memory (OOM) Errors",
    description: "Kubelet crashed after running out of memory due to excessive pod resource usage.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set proper resource requests and limits on pods to prevent memory over-consumption.
	• Restarted the kubelet on the affected node.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 45,
    title: "DNS Resolution Failure in Multi-Cluster Setup",
    description: "DNS resolution failed between two federated clusters due to missing DNS records.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added missing DNS records manually.
	• Updated DNS configurations to include service records for all federated clusters.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 46,
    title: "Insufficient Resource Limits in Autoscaling Setup",
    description: "Horizontal Pod Autoscaler did not scale pods up as expected due to insufficient resource limits.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased resource requests and limits for the affected pods.
	• Manually scaled the pods and monitored the autoscaling behavior.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 47,
    title: "Control Plane Overload Due to High Audit Log Volume",
    description: "The control plane became overloaded and slow due to excessive audit log volume.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Refined audit policy to log only critical events.
	• Restarted the API server.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 48,
    title: "Resource Fragmentation Causing Cluster Instability",
    description: "Resource fragmentation due to unbalanced pod distribution led to cluster instability.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Applied pod affinity and anti-affinity rules to achieve balanced scheduling.
	• Rescheduled pods manually to redistribute workload.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 49,
    title: "Failed Cluster Backup Due to Misconfigured Volume Snapshots",
    description: "Cluster backup failed due to a misconfigured volume snapshot driver.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected snapshot driver configuration in storage class.
	• Ran the backup process again, which completed successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 50,
    title: "Failed Deployment Due to Image Pulling Issues",
    description: "Deployment failed due to image pulling issues from a custom Docker registry.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the image pull secrets in the deployment YAML.
	• Re-deployed the application.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 51,
    title: "High Latency Due to Inefficient Ingress Controller Configuration",
    description: "Ingress controller configuration caused high network latency due to inefficient routing rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Simplified ingress resource definitions and optimized routing rules.
	• Restarted ingress controller to apply changes.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 52,
    title: "Node Draining Delay During Maintenance",
    description: "Node draining took an unusually long time during maintenance due to unscheduled pod disruption.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted PodDisruptionBudget to allow more flexibility for pod evictions.
	• Manually evicted the pods to speed up the node draining process.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 53,
    title: "Unresponsive Cluster After Large-Scale Deployment",
    description: "Cluster became unresponsive after deploying a large number of pods in a single batch.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented gradual pod deployment using rolling updates instead of a batch deployment.
	• Increased the node resource capacity to handle larger loads.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 54,
    title: "Failed Node Recovery Due to Corrupt Kubelet Configuration",
    description: "Node failed to recover after being drained due to a corrupt kubelet configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Replaced the corrupted kubelet configuration file with a backup.
	• Restarted the kubelet service and the node successfully rejoined the cluster.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 55,
    title: "Resource Exhaustion Due to Misconfigured Horizontal Pod Autoscaler",
    description: "Cluster resources were exhausted due to misconfiguration in the Horizontal Pod Autoscaler (HPA), resulting in excessive pod scaling.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted HPA configuration to scale based on a combination of CPU and memory usage.
	• Set more appropriate scaling thresholds.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 56,
    title: "Inconsistent Application Behavior After Pod Restart",
    description: "Application behavior became inconsistent after pod restarts due to improper state handling.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved application state to persistent volumes or external databases.
	• Adjusted the application logic to handle state recovery properly after restarts.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 57,
    title: "Cluster-wide Service Outage Due to Missing ClusterRoleBinding",
    description: "Cluster-wide service outage occurred after an automated change removed a critical ClusterRoleBinding.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restored the missing ClusterRoleBinding.
	• Manually verified that affected services were functioning correctly.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 58,
    title: "Node Overcommitment Leading to Pod Evictions",
    description: "Node overcommitment led to pod evictions, causing application downtime.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added appropriate resource requests and limits to the affected pods.
	• Rescheduled the pods to other nodes with available resources.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 59,
    title: "Failed Pod Startup Due to Image Pull Policy Misconfiguration",
    description: "Pods failed to start because the image pull policy was misconfigured.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Changed the image pull policy to IfNotPresent or Always in the pod configuration.
	• Re-deployed the pods.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 60,
    title: "Excessive Control Plane Resource Usage During Pod Scheduling",
    description: "Control plane resources were excessively utilized during pod scheduling, leading to slow deployments.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Optimized the scheduler configuration to reduce resource usage.
	• Split large workloads into smaller ones to improve scheduling efficiency.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 61,
    title: "Persistent Volume Claim Failure Due to Resource Quota Exceedance",
    description: "Persistent Volume Claims (PVCs) failed due to exceeding the resource quota for storage in the namespace.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the storage quota in the namespace.
	• Cleaned up unused PVCs to free up space.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 62,
    title: "Failed Pod Rescheduling Due to Node Affinity Misconfiguration",
    description: "Pods failed to reschedule after a node failure due to improper node affinity rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the node affinity rules to be less restrictive.
	• Re-scheduled the pods to available nodes.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 63,
    title: "Intermittent Network Latency Due to Misconfigured CNI Plugin",
    description: "Network latency issues occurred intermittently due to misconfiguration in the CNI (Container Network Interface) plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the MTU setting in the CNI configuration to match the network infrastructure.
	• Restarted the CNI plugin and verified network performance.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 64,
    title: "Excessive Pod Restarts Due to Resource Limits",
    description: "A pod was restarting frequently due to resource limits being too low, causing the container to be killed.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the memory limits and requests for the affected pods.
	• Re-deployed the updated pods and monitored for stability.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 65,
    title: "Cluster Performance Degradation Due to Excessive Logs",
    description: "Cluster performance degraded because of excessive logs being generated by applications, leading to high disk usage.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured log rotation for the affected applications.
	• Reduced the verbosity of the logs in application settings.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 66,
    title: "Insufficient Cluster Capacity Due to Unchecked CronJobs",
    description: "The cluster experienced resource exhaustion because CronJobs were running in parallel without proper capacity checks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added resource requests and limits for CronJobs.
	• Configured CronJobs to stagger their execution times to avoid simultaneous execution.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 67,
    title: "Unsuccessful Pod Scaling Due to Affinity/Anti-Affinity Conflict",
    description: "Pod scaling failed due to conflicting affinity/anti-affinity rules that prevented pods from being scheduled.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Relaxed the anti-affinity rule to allow pods to be scheduled on any available node.
	• Increased the number of nodes to ensure sufficient capacity.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 68,
    title: "Cluster Inaccessibility Due to API Server Throttling",
    description: "Cluster became inaccessible due to excessive API server throttling caused by too many concurrent requests.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Throttled client requests to reduce API server load.
	• Implemented exponential backoff for retries in client applications.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 69,
    title: "Persistent Volume Expansion Failure",
    description: "Expansion of a Persistent Volume (PV) failed due to improper storage class settings.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the storage class to allow volume expansion.
	• Expanded the persistent volume and verified the PVC reflected the changes.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 70,
    title: "Unauthorized Access to Cluster Resources Due to RBAC Misconfiguration",
    description: "Unauthorized users gained access to sensitive resources due to misconfigured RBAC roles and bindings.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected RBAC policies to restrict access.
	• Audited user access and removed unauthorized permissions.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 71,
    title: "Inconsistent Pod State Due to Image Pull Failures",
    description: "Pods entered an inconsistent state because the container image failed to pull due to incorrect image tag.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the image tag in the deployment configuration to point to an existing image.
	• Redeployed the application.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 72,
    title: "Pod Disruption Due to Insufficient Node Resources",
    description: "Pods experienced disruptions as nodes ran out of CPU and memory, causing evictions.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added more nodes to the cluster to meet resource requirements.
	• Adjusted pod resource requests/limits to be more aligned with node resources.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 73,
    title: "Service Discovery Issues Due to DNS Resolution Failures",
    description: "Services could not discover each other due to DNS resolution failures, affecting internal communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased resource limits for the CoreDNS pods.
	• Restarted CoreDNS pods to apply the new resource settings.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 74,
    title: "Persistent Volume Provisioning Delays",
    description: "Persistent volume provisioning was delayed due to an issue with the dynamic provisioner.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the storage class settings, ensuring the correct provisioner was specified.
	• Recreated the PVCs, and provisioning completed successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 75,
    title: "Deployment Rollback Failure Due to Missing Image",
    description: "A deployment rollback failed due to the rollback image version no longer being available in the container registry.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebuilt the previous image version and pushed it to the registry.
	• Triggered a successful rollback after the image was available.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 76,
    title: "Kubernetes Master Node Unresponsive After High Load",
    description: "The Kubernetes master node became unresponsive under high load due to excessive API server calls and high memory usage.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented API rate limiting to control excessive calls.
	• Increased the memory allocated to the master node.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 77,
    title: "Failed Pod Restart Due to Inadequate Node Affinity",
    description: "Pods failed to restart on available nodes due to overly strict node affinity rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Relaxed the node affinity rules in the pod spec.
	• Redeployed the pod, and it successfully restarted on an available node.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 78,
    title: "ReplicaSet Scaling Issues Due to Resource Limits",
    description: "The ReplicaSet failed to scale due to insufficient resources on the nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added more nodes to the cluster to handle the increased workload.
	• Adjusted resource requests and limits to ensure efficient resource allocation.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 79,
    title: "Missing Namespace After Cluster Upgrade",
    description: "A namespace was missing after performing a cluster upgrade.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restored the missing namespace from backups.
	• Investigated and fixed the upgrade process to prevent future occurrences.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 80,
    title: "Inefficient Resource Usage Due to Misconfigured Horizontal Pod Autoscaler",
    description: "The Horizontal Pod Autoscaler (HPA) was inefficiently scaling due to misconfigured metrics.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the HPA to scale based on correct metrics (e.g., memory, custom metrics).
	• Verified that the metrics-server was reporting accurate data.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 81,
    title: "Pod Disruption Due to Unavailable Image Registry",
    description: "Pods could not start because the image registry was temporarily unavailable, causing image pull failures.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually downloaded the images from a secondary registry.
	• Temporarily used a local image registry until the primary registry was back online.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 82,
    title: "Pod Fails to Start Due to Insufficient Resource Requests",
    description: "Pods failed to start because their resource requests were too low, preventing the scheduler from assigning them to nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource requests in the pod spec.
	• Reapplied the configuration, and the pods were scheduled successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 83,
    title: "Horizontal Pod Autoscaler Under-Scaling During Peak Load",
    description: "HPA failed to scale the pods appropriately during a sudden spike in load.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted HPA thresholds to scale more aggressively under higher loads.
	• Increased the replica count to handle the peak load.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 84,
    title: "Pod Eviction Due to Node Disk Pressure",
    description: "Pods were evicted due to disk pressure on the node, causing service interruptions.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased disk capacity on the affected node.
	• Cleared unnecessary logs and old data from the disk.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 85,
    title: "Failed Node Drain Due to In-Use Pods",
    description: "A node failed to drain due to pods that were in use, preventing the drain operation from completing.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased termination grace periods for the affected pods.
	• Forced the node drain operation after ensuring that the pods could safely terminate.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 86,
    title: "Cluster Autoscaler Not Scaling Up",
    description: "The cluster autoscaler failed to scale up the node pool despite high resource demand.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the scaling thresholds in the autoscaler configuration.
	• Verified the correct IAM permissions for the autoscaler to scale the node pool.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 87,
    title: "Pod Network Connectivity Issues After Node Reboot",
    description: "Pods lost network connectivity after a node reboot, causing communication failures between services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually restarted the CNI plugin on the affected node.
	• Ensured that the CNI plugin was configured to restart properly after a node reboot.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 88,
    title: "Insufficient Permissions Leading to Unauthorized Access Errors",
    description: "Unauthorized access errors occurred due to missing permissions in RBAC configurations.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the RBAC roles and bindings to include the necessary permissions for the pods.
	• Applied the updated RBAC configurations and confirmed access.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 89,
    title: "Failed Pod Upgrade Due to Incompatible API Versions",
    description: "A pod upgrade failed because it was using deprecated APIs not supported in the new version.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the pod spec to use supported API versions.
	• Reapplied the deployment with the updated APIs.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 90,
    title: "High CPU Utilization Due to Inefficient Application Code",
    description: "A container's high CPU usage was caused by inefficient application code, leading to resource exhaustion.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Optimized the application code to reduce CPU consumption.
	• Redeployed the application with the optimized code.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 91,
    title: "Resource Starvation Due to Over-provisioned Pods",
    description: "Resource starvation occurred on nodes because pods were over-provisioned, consuming more resources than expected.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced resource requests and limits based on actual usage metrics.
	• Re-deployed the pods with optimized resource configurations.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 92,
    title: "Unscheduled Pods Due to Insufficient Affinity Constraints",
    description: "Pods were not scheduled due to overly strict affinity rules that limited the nodes available for deployment.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the affinity rules to be less restrictive.
	• Applied changes and verified the pods were scheduled correctly.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 93,
    title: "Pod Readiness Probe Failure Due to Slow Initialization",
    description: "Pods failed their readiness probes during initialization, causing traffic to be routed to unhealthy instances.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the readiness probe timeout and delay parameters.
	• Re-applied the deployment, and the pods started passing readiness checks.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 94,
    title: "Incorrect Ingress Path Handling Leading to 404 Errors",
    description: "Incorrect path configuration in the ingress resource resulted in 404 errors for certain API routes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fixed the path configuration in the ingress resource.
	• Re-applied the ingress configuration, and traffic was correctly routed.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 95,
    title: "Node Pool Scaling Failure Due to Insufficient Quotas",
    description: "Node pool scaling failed because the account exceeded resource quotas in AWS.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Requested a quota increase from AWS support.
	• Once the request was approved, scaled the node pool successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 96,
    title: "Pod Crash Loop Due to Missing ConfigMap",
    description: "Pods entered a crash loop because a required ConfigMap was not present in the namespace.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Recreated the ConfigMap in the namespace.
	• Re-deployed the pods, and they started successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 97,
    title: "Kubernetes API Server Slowness Due to Excessive Logging",
    description: "The Kubernetes API server became slow due to excessive log generation from the kubelet and other components.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced the verbosity of logs from the kubelet and other components.
	• Configured log rotation to prevent logs from consuming too much disk space.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 98,
    title: "Pod Scheduling Failure Due to Taints and Tolerations Misconfiguration",
    description: "Pods failed to schedule because the taints and tolerations were misconfigured, preventing the scheduler from placing them on nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the tolerations in the pod specs to match the taints on the nodes.
	• Re-applied the pods and verified that they were scheduled correctly.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 99,
    title: "Unresponsive Dashboard Due to High Resource Usage",
    description: "The Kubernetes dashboard became unresponsive due to high resource usage caused by a large number of requests.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Scaled the dashboard deployment to multiple replicas to handle the load.
	• Adjusted resource requests and limits for the dashboard pod.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 100,
    title: "Resource Limits Causing Container Crashes",
    description: "Containers kept crashing due to hitting resource limits set in their configurations.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource limits for the affected containers.
	• Re-applied the pod configurations and monitored for stability.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 101,
    title: "Pod Communication Failure Due to Network Policy Misconfiguration",
    description: "Pods failed to communicate due to a misconfigured NetworkPolicy that blocked ingress traffic.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the NetworkPolicy to allow the necessary ingress traffic between the affected pods.
	• Re-applied the NetworkPolicy and tested communication.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 102,
    title: "DNS Resolution Failure Due to CoreDNS Pod Crash",
    description: "DNS resolution failed across the cluster after CoreDNS pods crashed unexpectedly.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased memory limits for CoreDNS pods.
	• Restarted the CoreDNS pods and verified DNS resolution functionality.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 103,
    title: "Network Latency Due to Misconfigured Service Type",
    description: "High network latency occurred because a service was incorrectly configured as a NodePortinstead of a LoadBalancer.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Changed the service type to LoadBalancer, which properly routed traffic through a managed load balancer.
	• Traffic was distributed evenly, and latency was reduced.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 104,
    title: "Inconsistent Pod-to-Pod Communication Due to MTU Mismatch",
    description: "Pod-to-pod communication became inconsistent due to a mismatch in Maximum Transmission Unit (MTU) settings across nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Aligned MTU settings across all nodes in the cluster.
	• Rebooted the nodes to apply the new MTU configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 105,
    title: "Service Discovery Failure Due to DNS Pod Resource Limits",
    description: "Service discovery failed across the cluster due to DNS pod resource limits being exceeded.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased memory and CPU limits for CoreDNS pods.
	• Restarted CoreDNS pods and verified that DNS resolution was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 106,
    title: "Pod IP Collision Due to Insufficient IP Range",
    description: "Pod IP collisions occurred due to insufficient IP range allocation for the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the pod network CIDR and restarted the cluster.
	• Re-deployed the affected pods to new IPs without collisions.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 107,
    title: "Network Bottleneck Due to Single Node in NodePool",
    description: "A network bottleneck occurred due to excessive traffic being handled by a single node in the node pool.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the size of the node pool and added more nodes with higher resource capacity.
	• Rebalanced the pods across nodes and monitored for stability.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 108,
    title: "Network Partitioning Due to CNI Plugin Failure",
    description: "A network partition occurred when the CNI plugin failed, preventing pods from communicating with each other.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reinstalled the CNI plugin and applied the correct network configuration.
	• Re-deployed the affected pods after ensuring the network configuration was correct.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 109,
    title: "Misconfigured Ingress Resource Causing SSL Errors",
    description: "SSL certificate errors occurred due to a misconfigured Ingress resource.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the SSL certificate annotations in the Ingress configuration.
	• Re-applied the Ingress resource and verified successful SSL handshakes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 110,
    title: "Cluster Autoscaler Fails to Scale Nodes Due to Incorrect IAM Role Permissions",
    description: "The cluster autoscaler failed to scale the number of nodes in response to resource shortages due to missing IAM role permissions for managing EC2 instances.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the IAM role associated with the cluster autoscaler to include the necessary permissions for EC2 instance provisioning.
	• Restarted the autoscaler and confirmed that new nodes were added successfully.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 111,
    title: "DNS Resolution Failure Due to Incorrect Pod IP Allocation",
    description: "DNS resolution failed due to incorrect IP allocation in the cluster’s CNI plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the CNI plugin to correctly allocate IPs within the defined range.
	• Re-deployed affected pods with new IPs that were correctly assigned.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 112,
    title: "Failed Pod-to-Service Communication Due to Port Binding Conflict",
    description: "Pods couldn’t communicate with services because of a port binding conflict.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Changed the port for the service to a free port and re-applied the service configuration.
	• Verified that pod communication was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 113,
    title: "Pod Eviction Due to Network Resource Constraints",
    description: "A pod was evicted due to network resource constraints, specifically limited bandwidth.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased network bandwidth limits on the affected node pool.
	• Re-scheduled the pod on a node with higher bandwidth availability.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 114,
    title: "Intermittent Network Disconnects Due to MTU Mismatch Between Nodes",
    description: "Intermittent network disconnects occurred due to MTU mismatches between different nodes in the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the MTU settings on all nodes to match the network interface requirements.
	• Rebooted nodes to apply the new MTU settings.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 115,
    title: "Service Load Balancer Failing to Route Traffic to New Pods",
    description: "Service load balancer failed to route traffic to new pods after scaling up.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually refreshed the load balancer’s backend pool configuration.
	• Monitored the traffic routing to ensure that it was properly balanced across all pods.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 116,
    title: "Network Traffic Drop Due to Overlapping CIDR Blocks",
    description: "Network traffic dropped due to overlapping CIDR blocks between the VPC and Kubernetes pod network.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the pod network CIDR block to avoid overlap with the VPC.
	• Re-deployed the affected pods and confirmed that traffic flow resumed.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 117,
    title: "Misconfigured DNS Resolvers Leading to Service Discovery Failure",
    description: "Service discovery failed due to misconfigured DNS resolvers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the DNS resolver settings in the CoreDNS configuration.
	• Re-applied the configuration and verified that service discovery was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 118,
    title: "Intermittent Latency Due to Overloaded Network Interface",
    description: "Intermittent network latency occurred due to an overloaded network interface on a single node.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebalanced the pod distribution across nodes to reduce load on the overloaded network interface.
	• Increased network interface resources on the affected node.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 119,
    title: "Pod Disconnection During Network Partition",
    description: "Pods were disconnected during a network partition between nodes in the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Re-established network connectivity and ensured all nodes could communicate with each other.
	• Re-scheduled the disconnected pods to different nodes to restore connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 121,
    title: "Pod-to-Pod Communication Blocked by Network Policies",
    description: "Pod-to-pod communication was blocked due to overly restrictive network policies.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified the network policy to allow traffic between the pods.
	• Applied the updated policy and verified that communication was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 122,
    title: "Unresponsive External API Due to DNS Resolution Failure",
    description: "External API calls from the pods failed due to DNS resolution issues for the external domain.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the upstream DNS server settings in CoreDNS.
	• Restarted CoreDNS pods to apply the new configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 123,
    title: "Load Balancer Health Checks Failing After Pod Update",
    description: "Load balancer health checks failed after updating a pod due to incorrect readiness probe configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the readiness probe configuration to reflect the actual application startup time.
	• Redeployed the updated pods and verified that they passed the health checks.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 124,
    title: "Pod Network Performance Degradation After Node Upgrade",
    description: "Network performance degraded after an automatic node upgrade, causing latency in pod communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back the node upgrade and manually updated the network interface drivers on the nodes.
	• Verified that network performance improved after driver updates.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 125,
    title: "Service IP Conflict Due to CIDR Overlap",
    description: "A service IP conflict occurred due to overlapping CIDR blocks, preventing correct routing of traffic to the service.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the service CIDR range to avoid conflicts.
	• Redeployed services with new IP assignments.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 126,
    title: "High Latency in Inter-Namespace Communication",
    description: "High latency observed in inter-namespace communication, leading to application timeouts.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified network policies to allow traffic between namespaces.
	• Verified that latency reduced after policy changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 127,
    title: "Pod Network Disruptions Due to CNI Plugin Update",
    description: "Pods experienced network disruptions after updating the CNI plugin to a newer version.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back to the previous version of the CNI plugin.
	• Reported the bug to the plugin maintainers and kept the older version in place until a fix was released.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 128,
    title: "Loss of Service Traffic Due to Missing Ingress Annotations",
    description: "Loss of service traffic after ingress annotations were incorrectly set, causing the ingress controller to misroute traffic.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fixed the ingress annotations and re-deployed the ingress resource.
	• Verified traffic flow from external sources to the service was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 129,
    title: "Node Pool Draining Timeout Due to Slow Pod Termination",
    description: "The node pool draining process timed out during upgrades due to pods taking longer than expected to terminate.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced the grace period for pod termination.
	• Optimized resource cleanup tasks in the pods to reduce termination times.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 130,
    title: "Failed Cluster Upgrade Due to Incompatible API Versions",
    description: "The cluster upgrade failed because certain deprecated API versions were still in use, causing compatibility issues with the new K8s version.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated Kubernetes manifests to use the latest stable API versions.
	• Re-applied the updated resources and retried the cluster upgrade.`,
    tags: [],
    category: "Cluster Management"
  },
  {
    id: 131,
    title: "DNS Resolution Failure for Services After Pod Restart",
    description: "DNS resolution failed for services after restarting a pod, causing internal communication issues.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted CoreDNS to clear the stale cache.
	• Verified that DNS resolution worked for services after the cache refresh.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 132,
    title: "Pod IP Address Changes Causing Application Failures",
    description: "Application failed after a pod IP address changed unexpectedly, breaking communication between services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the application to use service DNS names instead of pod IPs.
	• Redeployed the application with the new configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 133,
    title: "Service Exposure Failed Due to Misconfigured Load Balancer",
    description: "A service exposure attempt failed due to incorrect configuration of the AWS load balancer.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified the security group rules to allow traffic on the necessary ports.
	• Re-deployed the service with the updated configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 134,
    title: "Network Latency Spikes During Pod Autoscaling",
    description: "Network latency spikes occurred when autoscaling pods during traffic surges.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the autoscaling configuration to ensure new pods are distributed across nodes with better network resources.
	• Increased network capacity for nodes with higher pod density.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 135,
    title: "Service Not Accessible Due to Incorrect Namespace Selector",
    description: "A service was not accessible due to a misconfigured namespace selector in the service definition.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the namespace selector in the service definition.
	• Redeployed the service to apply the fix.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 136,
    title: "Intermittent Pod Connectivity Due to Network Plugin Bug",
    description: "Pods experienced intermittent connectivity issues due to a bug in the CNI network plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back the CNI plugin to the previous stable version.
	• Reported the bug to the plugin maintainers for a fix.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 137,
    title: "Failed Ingress Traffic Routing Due to Missing Annotations",
    description: "Ingress traffic was not properly routed to services due to missing annotations in the ingress resource.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added the correct annotations to the ingress resource.
	• Redeployed the ingress resource and confirmed traffic routing was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 138,
    title: "Pod IP Conflict Causing Service Downtime",
    description: "A pod IP conflict caused service downtime and application crashes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted the affected pods, which resolved the IP conflict.
	• Reported the issue to the CNI plugin developers and applied a bug fix.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 139,
    title: "Latency Due to Unoptimized Service Mesh Configuration",
    description: "Increased latency in service-to-service communication due to suboptimal configuration of Istio service mesh.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Optimized Istio retry policies to avoid excessive retries.
	• Adjusted timeouts and circuit breakers for better performance.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 139,
    title: "DNS Resolution Failure After Cluster Upgrade",
    description: "DNS resolution failures occurred across pods after a Kubernetes cluster upgrade.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the CoreDNS config map to the correct version.
	• Restarted CoreDNS pods to apply the updated config.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 140,
    title: "Service Mesh Sidecar Injection Failure",
    description: "Sidecar injection failed for some pods in the service mesh, preventing communication between services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added the sidecar.istio.io/inject: "true" annotation to the missing pods.
	• Redeployed the pods to trigger sidecar injection.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 141,
    title: "Network Bandwidth Saturation During Large-Scale Deployments",
    description: "Network bandwidth was saturated during a large-scale deployment, affecting cluster communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Staggered the deployment of pods to distribute the load more evenly.
	• Used a local registry to reduce the impact of external image pulls.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 142,
    title: "Inconsistent Network Policies Blocking Internal Traffic",
    description: "Internal pod-to-pod traffic was unexpectedly blocked due to inconsistent network policies.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Merged conflicting network policy rules to allow the necessary traffic.
	• Applied the corrected policy and verified that pod communication was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 143,
    title: "Pod Network Latency Caused by Overloaded CNI Plugin",
    description: "Pod network latency increased due to an overloaded CNI plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to a more efficient CNI plugin (Calico) to handle the traffic load.
	• Tuned the Calico settings to optimize performance under heavy load.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 144,
    title: "TCP Retransmissions Due to Network Saturation",
    description: "TCP retransmissions increased due to network saturation, leading to degraded pod-to-pod communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased network bandwidth allocation for the cluster.
	• Implemented QoS policies to prioritize critical traffic.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 145,
    title: "DNS Lookup Failures Due to Resource Limits",
    description: "DNS lookup failures occurred due to resource limits on the CoreDNS pods.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource limits for CoreDNS pods to handle the load.
	• Restarted the CoreDNS pods to apply the new resource limits.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 146,
    title: "Service Exposure Issues Due to Incorrect Ingress Configuration",
    description: "A service was not accessible externally due to incorrect ingress configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the service URL in the ingress resource.
	• Redeployed the ingress configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 147,
    title: "Pod-to-Pod Communication Failure Due to Network Policy",
    description: "Pod-to-pod communication failed due to an overly restrictive network policy.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policy to allow traffic between pods in the same namespace.
	• Applied the updated policy and verified that communication was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 148,
    title: "Unstable Network Due to Overlay Network Misconfiguration",
    description: "The overlay network was misconfigured, leading to instability in pod communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the IP pool configuration in the Calico settings.
	• Restarted Calico pods to apply the fix.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 149,
    title: "Intermittent Pod Network Connectivity Due to Cloud Provider Issues",
    description: "Pod network connectivity was intermittent due to issues with the cloud provider's network infrastructure.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Waited for the cloud provider to resolve the network issue.
	• Implemented automatic retries in application code to mitigate the impact of intermittent connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 150,
    title: "Port Conflicts Between Services in Different Namespaces",
    description: "Port conflicts between services in different namespaces led to communication failures.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the service definitions to use different ports for the conflicting services.
	• Redeployed the services and verified communication.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 151,
    title: "NodePort Service Not Accessible Due to Firewall Rules",
    description: "A NodePort service became inaccessible due to restrictive firewall rules on the cloud provider.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the firewall rules to allow inbound traffic to the NodePort range.
	• Ensured that the required port was open on all nodes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 152,
    title: "DNS Latency Due to Overloaded CoreDNS Pods",
    description: "CoreDNS latency increased due to resource constraints on the CoreDNS pods.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU and memory resource limits for CoreDNS pods.
	• Restarted CoreDNS pods to apply the new resource limits.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 153,
    title: "Network Performance Degradation Due to Misconfigured MTU",
    description: "Network performance degraded due to an incorrect Maximum Transmission Unit (MTU) setting.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Aligned the MTU settings between the CNI plugin and the Kubernetes nodes.
	• Rebooted affected nodes to apply the configuration changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 154,
    title: "Application Traffic Routing Issue Due to Incorrect Ingress Resource",
    description: "Application traffic was routed incorrectly due to an error in the ingress resource definition.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the path definition in the ingress resource.
	• Redeployed the ingress configuration to ensure correct traffic routing.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 155,
    title: "Intermittent Service Disruptions Due to DNS Caching Issue",
    description: "Intermittent service disruptions occurred due to stale DNS cache in CoreDNS.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced the TTL value in CoreDNS configuration.
	• Restarted CoreDNS pods to apply the new TTL setting.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 156,
    title: "Flannel Overlay Network Interruption Due to Node Failure",
    description: "Flannel overlay network was interrupted after a node failure, causing pod-to-pod communication issues.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted the Flannel pods on the affected nodes to re-establish network routes.
	• Verified that communication between pods was restored.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 157,
    title: "Network Traffic Loss Due to Port Collision in Network Policy",
    description: "Network traffic was lost due to a port collision in the network policy, affecting application availability.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policy to allow the necessary port.
	• Applied the updated network policy and tested the traffic flow.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 158,
    title: "CoreDNS Service Failures Due to Resource Exhaustion",
    description: "CoreDNS service failed due to resource exhaustion, causing DNS resolution failures.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource requests and limits for CoreDNS pods.
	• Restarted the CoreDNS pods to apply the updated resource allocation.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 159,
    title: "Pod Network Partition Due to Misconfigured IPAM",
    description: "Pod network partition occurred due to an incorrectly configured IP Address Management (IPAM) in the CNI plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the IPAM configuration to use non-overlapping IP address ranges.
	• Redeployed the CNI plugin and restarted affected pods.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 160,
    title: "Network Performance Degradation Due to Overloaded CNI Plugin",
    description: "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased resource limits for the CNI plugin pods.
	• Used network policies to limit the traffic spikes to specific services.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 161,
    title: "Network Performance Degradation Due to Overloaded CNI Plugin",
    description: "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased resource limits for the CNI plugin pods.
	• Used network policies to limit the traffic spikes to specific services.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 162,
    title: "DNS Resolution Failures Due to Misconfigured CoreDNS",
    description: "DNS resolution failures due to misconfigured CoreDNS, leading to application errors.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated CoreDNS ConfigMap to point to a valid upstream DNS server.
	• Restarted CoreDNS pods to apply the new configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 163,
    title: "Network Partition Due to Incorrect Calico Configuration",
    description: "Network partitioning due to incorrect Calico CNI configuration, resulting in pods being unable to communicate with each other.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the Calico CIDR range configuration to match the cluster's networking plan.
	• Restarted Calico pods to apply the new configuration and restore network connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 164,
    title: "IP Overlap Leading to Communication Failure Between Pods",
    description: "Pods failed to communicate due to IP address overlap caused by an incorrect subnet configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the pod network CIDR range to avoid overlapping with host network IPs.
	• Restarted the Kubernetes networking components to apply the new configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 165,
    title: "Pod Network Latency Due to Overloaded Kubernetes Network Interface",
    description: "Pod network latency increased due to an overloaded network interface on the Kubernetes nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the network bandwidth for the AWS EC2 instances hosting the Kubernetes nodes.
	• Used network policies to limit traffic to critical pods and avoid overwhelming the network interface.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 166,
    title: "Intermittent Connectivity Failures Due to Pod DNS Cache Expiry",
    description: "Intermittent connectivity failures due to pod DNS cache expiry, leading to failed DNS lookups for external services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the DNS TTL value in the CoreDNS configuration.
	• Restarted CoreDNS pods to apply the new configuration.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 167,
    title: "Flapping Network Connections Due to Misconfigured Network Policies",
    description: "Network connections between pods were intermittently dropping due to misconfigured network policies, causing application instability.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policies to allow necessary pod-to-pod communication.
	• Tested connectivity to ensure stability after the update.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 168,
    title: "Cluster Network Downtime Due to CNI Plugin Upgrade",
    description: "Cluster network downtime occurred during a CNI plugin upgrade, affecting pod-to-pod communication.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Applied the required configuration changes for the new CNI plugin version.
	• Restarted affected pods and network components to restore connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 169,
    title: "Inconsistent Pod Network Connectivity in Multi-Region Cluster",
    description: "Pods in a multi-region cluster experienced inconsistent network connectivity between regions due to misconfigured VPC peering.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated VPC peering routes and ensured proper configuration between the regions.
	• Tested connectivity after the change to confirm resolution.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 170,
    title: "Pod Network Partition Due to Network Policy Blocking DNS Requests",
    description: "Pods were unable to resolve DNS due to a network policy blocking DNS traffic, causing service failures.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policy to allow DNS traffic.
	• Restarted affected pods to ensure they could access DNS again.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 171,
    title: "Network Bottleneck Due to Overutilized Network Interface",
    description: "Network bottleneck occurred due to overutilization of a single network interface on the worker nodes.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added a second network interface to the worker nodes for pod traffic and node-to-node communication.
	• Reconfigured the nodes to distribute traffic across the two interfaces.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 172,
    title: "Network Latency Caused by Overloaded VPN Tunnel",
    description: "Network latency increased due to an overloaded VPN tunnel between the Kubernetes cluster and an on-premise data center.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Upgraded the VPN tunnel to a higher bandwidth option.
	• Optimized the data flow by reducing unnecessary traffic over the tunnel.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 173,
    title: "Dropped Network Packets Due to MTU Mismatch",
    description: "Network packets were dropped due to a mismatch in Maximum Transmission Unit (MTU) settings across different network components.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Unified MTU settings across all nodes and the CNI plugin configuration.
	• Restarted the network components to apply the changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 174,
    title: "Pod Network Isolation Due to Misconfigured Network Policy",
    description: "Pods in a specific namespace were unable to communicate due to an incorrectly applied network policy blocking traffic between namespaces.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policy to allow traffic between namespaces.
	• Restarted affected pods to re-establish communication.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 175,
    title: "Service Discovery Failures Due to CoreDNS Pod Crash",
    description: "Service discovery failures occurred when CoreDNS pods crashed due to resource exhaustion, causing DNS resolution issues.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU and memory resources for CoreDNS pods.
	• Optimized the DNS query patterns from applications to reduce the load.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 176,
    title: "Pod DNS Resolution Failure Due to CoreDNS Configuration Issue",
    description: "DNS resolution failures occurred within pods due to a misconfiguration in the CoreDNS config map.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the CoreDNS ConfigMap to add the missing external DNS server configuration.
	• Restarted the CoreDNS pods to apply the changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 177,
    title: "DNS Latency Due to Overloaded CoreDNS Pods",
    description: "CoreDNS pods experienced high latency and timeouts due to resource overutilization, causing slow DNS resolution for applications.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU and memory limits for CoreDNS pods.
	• Enabled horizontal pod autoscaling to dynamically scale CoreDNS based on traffic.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 178,
    title: "Pod Network Degradation Due to Overlapping CIDR Blocks",
    description: "Network degradation occurred due to overlapping CIDR blocks between VPCs in a hybrid cloud setup, causing routing issues.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the CIDR blocks of one VPC to avoid overlap.
	• Adjusted the network routing tables to ensure traffic was correctly routed.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 179,
    title: "Service Discovery Failures Due to Network Policy Blocking DNS Traffic",
    description: "Service discovery failed when a network policy was mistakenly applied to block DNS traffic, preventing pods from resolving services within the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the network policy to allow DNS traffic on UDP port 53.
	• Restarted the affected pods to restore service discovery functionality.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 180,
    title: "Intermittent Network Connectivity Due to Overloaded Overlay Network",
    description: "Pods experienced intermittent network connectivity issues due to an overloaded overlay network that could not handle the traffic.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the overlay network to use a more scalable network plugin.
	• Increased resource allocation for the network components and scaled the infrastructure to handle the load.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 181,
    title: "Pod-to-Pod Communication Failure Due to CNI Plugin Configuration Issue",
    description: "Pods were unable to communicate with each other due to a misconfiguration in the CNI plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the Calico configuration to include the correct IP pool definitions.
	• Restarted the affected pods to obtain new IPs.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 182,
    title: "Sporadic DNS Failures Due to Resource Contention in CoreDNS Pods",
    description: "Sporadic DNS resolution failures occurred due to resource contention in CoreDNS pods, which were not allocated enough CPU resources.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU resource requests and limits for CoreDNS pods.
	• Enabled horizontal pod autoscaling for CoreDNS to scale during high demand.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 183,
    title: "High Latency in Pod-to-Node Communication Due to Overlay Network",
    description: "High latency was observed in pod-to-node communication due to network overhead introduced by the overlay network.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to a different CNI plugin (Calico) that offered better performance for the network topology.
	• Retested pod-to-node communication after switching CNI plugins.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 184,
    title: "Service Discovery Issues Due to DNS Cache Staleness",
    description: "Service discovery failed due to stale DNS cache entries that were not updated when services changed IPs.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Cleared the DNS cache manually and implemented shorter TTL (Time-To-Live) values for DNS records.
	• Restarted CoreDNS pods to apply changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 185,
    title: "Network Partition Between Node Pools in Multi-Zone Cluster",
    description: "Pods in different node pools located in different zones experienced network partitioning due to a misconfigured regional load balancer.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the regional load balancer configuration to properly route cross-zone traffic.
	• Re-deployed the affected pods to restore connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 186,
    title: "Pod Network Isolation Failure Due to Missing NetworkPolicy",
    description: "Pods that were intended to be isolated from each other could communicate freely due to a missing NetworkPolicy.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created appropriate NetworkPolicy to restrict pod communication based on the namespace and labels.
	• Applied the NetworkPolicy and tested communication to ensure isolation was working.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 187,
    title: "Flapping Node Network Connectivity Due to MTU Mismatch",
    description: "Nodes in the cluster were flapping due to mismatched MTU settings between Kubernetes and the underlying physical network, causing intermittent network connectivity issues.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the Kubernetes network plugin's MTU setting to match the physical network MTU.
	• Restarted the affected nodes and validated the network stability.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 188,
    title: "DNS Query Timeout Due to Unoptimized CoreDNS Config",
    description: "DNS queries were timing out in the cluster, causing delays in service discovery, due to unoptimized CoreDNS configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU and memory requests/limits for CoreDNS.
	• Optimized the CoreDNS configuration to use a more efficient query handling strategy.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 189,
    title: "Traffic Splitting Failure Due to Incorrect Service LoadBalancer Configuration",
    description: "Traffic splitting between two microservices failed due to a misconfiguration in the Service LoadBalancer.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the annotations in the Service definition to enable proper traffic splitting.
	• Redeployed the Service and tested that traffic was split as expected.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 190,
    title: "Network Latency Between Pods in Different Regions",
    description: "Pods in different Azure regions experienced high network latency, affecting application performance.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured Azure Virtual Network peering with appropriate bandwidth settings.
	• Enabled specific network optimizations for inter-region communication.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 191,
    title: "Port Collision Between Services Due to Missing Port Ranges",
    description: "Two services attempted to bind to the same port, causing a port collision and service failures.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the service definitions to specify unique ports or port ranges.
	• Redeployed the services to resolve the conflict.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 192,
    title: "Pod-to-External Service Connectivity Failures Due to Egress Network Policy",
    description: "Pods failed to connect to an external service due to an overly restrictive egress network policy.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified the egress network policy to allow traffic to the required external service.
	• Applied the updated policy and tested connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 193,
    title: "Pod Connectivity Loss After Network Plugin Upgrade",
    description: "Pods lost connectivity after an upgrade of the Calico network plugin due to misconfigured IP pool settings.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually updated the Calico configuration to restore the correct IP pool settings.
	• Restarted the Calico pods and verified pod connectivity.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 194,
    title: "External DNS Not Resolving After Cluster Network Changes",
    description: "External DNS resolution stopped working after changes were made to the cluster network configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated CoreDNS configuration to correctly forward DNS queries to external DNS servers.
	• Restarted CoreDNS pods to apply changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 195,
    title: "Slow Pod Communication Due to Misconfigured MTU in Network Plugin",
    description: "Pod-to-pod communication was slow due to an incorrect MTU setting in the network plugin.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the MTU setting in the network plugin to match the host’s MTU.
	• Restarted the affected pods to apply the changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 196,
    title: "High CPU Usage in Nodes Due to Overloaded Network Plugin",
    description: "Nodes experienced high CPU usage due to an overloaded network plugin that couldn’t handle traffic spikes effectively.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased resource allocation (CPU/memory) for the network plugin.
	• Configured scaling policies for the network plugin to dynamically adjust resources.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 197,
    title: "Cross-Namespace Network Isolation Not Enforced",
    description: "Network isolation between namespaces failed due to an incorrectly applied NetworkPolicy.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Refined the NetworkPolicy to more specifically target pods within certain namespaces.
	• Re-applied the updated NetworkPolicy and validated the isolation.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 198,
    title: "Inconsistent Service Discovery Due to CoreDNS Misconfiguration",
    description: "Service discovery was inconsistent due to misconfigured CoreDNS settings.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reverted CoreDNS configuration to use the internal DNS resolver instead of the external one.
	• Restarted CoreDNS pods to apply the changes.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 199,
    title: "Network Segmentation Issues Due to Misconfigured CNI",
    description: "Network segmentation between clusters failed due to incorrect CNI (Container Network Interface) plugin configuration.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the CNI plugin to enforce correct network segmentation.
	• Applied the changes and tested communication between pods from different segments.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 200,
    title: "DNS Cache Poisoning in CoreDNS",
    description: "DNS cache poisoning occurred in CoreDNS, leading to incorrect IP resolution for services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented DNS query validation and hardened CoreDNS security by limiting cache lifetime and introducing DNSSEC.
	• Cleared the DNS cache and restarted CoreDNS to remove the poisoned entries.`,
    tags: [],
    category: "Networking"
  },
  {
    id: 201,
    title: "Unauthorized Access to Secrets Due to Incorrect RBAC Permissions",
    description: "Unauthorized users were able to access Kubernetes secrets due to overly permissive RBAC roles.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured RBAC roles to adhere to the principle of least privilege.
	• Limited the permissions of the service account and tested access controls.`,
    tags: [],
    category: "Security"
  },
  {
    id: 202,
    title: "Insecure Network Policies Leading to Pod Exposure",
    description: "Pods intended to be isolated were exposed to unauthorized traffic due to misconfigured network policies.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the NetworkPolicy by refining podSelector and applying stricter isolation.
	• Tested the updated policy to confirm proper isolation between namespaces.`,
    tags: [],
    category: "Security"
  },
  {
    id: 203,
    title: "Privileged Container Vulnerability Due to Incorrect Security Context",
    description: "A container running with elevated privileges due to an incorrect security context exposed the cluster to potential privilege escalation attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed privileged: true from the container's security context.
	• Applied the updated deployment and monitored the pod for any security incidents.`,
    tags: [],
    category: "Security"
  },
  {
    id: 204,
    title: "Exposed Kubernetes Dashboard Due to Misconfigured Ingress",
    description: "The Kubernetes dashboard was exposed to the public internet due to a misconfigured Ingress resource.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the Ingress resource to restrict access to specific IP addresses or require authentication for access.
	• Re-applied the updated configuration and tested access controls.`,
    tags: [],
    category: "Security"
  },
  {
    id: 205,
    title: "Unencrypted Communication Between Pods Due to Missing TLS Configuration",
    description: "Communication between microservices in the cluster was not encrypted due to missing TLS configuration, exposing data to potential interception.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured mTLS between services to ensure encrypted communication.
	• Deployed certificates and updated services to use HTTPS for communication.`,
    tags: [],
    category: "Security"
  },
  {
    id: 206,
    title: "Sensitive Data in Logs Due to Improper Log Sanitization",
    description: "Sensitive data, such as API keys and passwords, was logged due to improper sanitization in application logs.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the application to sanitize sensitive data before it was logged.
	• Configured the logging system to filter out sensitive information from logs.`,
    tags: [],
    category: "Security"
  },
  {
    id: 207,
    title: "Insufficient Pod Security Policies Leading to Privilege Escalation",
    description: "Privilege escalation was possible due to insufficiently restrictive PodSecurityPolicies (PSPs).",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the PSPs to restrict privilege escalation by setting allowPrivilegeEscalation: false.
	• Applied the updated policies and tested pod deployments to confirm proper restrictions.`,
    tags: [],
    category: "Security"
  },
  {
    id: 208,
    title: "Service Account Token Compromise",
    description: "A compromised service account token was used to gain unauthorized access to the cluster's API server.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rotated the service account token and updated the deployment to prevent exposure.
	• Used Kubernetes secrets management to securely store sensitive tokens.`,
    tags: [],
    category: "Security"
  },
  {
    id: 209,
    title: "Lack of Regular Vulnerability Scanning in Container Images",
    description: "The container images used in the cluster were not regularly scanned for vulnerabilities, leading to deployment of vulnerable images.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Integrated a vulnerability scanning tool like Clair or Trivy into the CI/CD pipeline.
	• Rebuilt the container images with a fixed version and redeployed them.`,
    tags: [],
    category: "Security"
  },
  {
    id: 210,
    title: "Insufficient Container Image Signing Leading to Unverified Deployments",
    description: "Unverified container images were deployed due to the lack of image signing, exposing the cluster to potential malicious code.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled image signing in the container registry and integrated it with Kubernetes for secure image verification.
	• Re-pulled and deployed only signed images to the cluster.`,
    tags: [],
    category: "Security"
  },
  {
    id: 211,
    title: "Insecure Default Namespace Leading to Unauthorized Access",
    description: "Unauthorized users gained access to resources in the default namespace due to lack of namespace isolation.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted access to the default namespace using RBAC and network policies.
	• Created separate namespaces for different workloads and applied appropriate isolation policies.`,
    tags: [],
    category: "Security"
  },
  {
    id: 212,
    title: "Vulnerable OpenSSL Version in Container Images",
    description: "A container image was using an outdated and vulnerable version of OpenSSL, exposing the cluster to known security vulnerabilities.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebuilt the container image using a newer, secure version of OpenSSL.
	• Deployed the updated image and monitored for any further issues.`,
    tags: [],
    category: "Security"
  },
  {
    id: 213,
    title: "Misconfigured API Server Authentication Allowing External Access",
    description: "API server authentication was misconfigured, allowing external unauthenticated users to access the Kubernetes API.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled unauthenticated access by removing --insecure-allow-any-token from the API server configuration.
	• Configured proper authentication methods, such as client certificates or OAuth2.`,
    tags: [],
    category: "Security"
  },
  {
    id: 214,
    title: "Insufficient Node Security Due to Lack of OS Hardening",
    description: "Nodes in the cluster were insecure due to a lack of proper OS hardening, making them vulnerable to attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Applied OS hardening guidelines, such as disabling root SSH access and ensuring only key-based authentication.
	• Updated the operating system with the latest security patches.`,
    tags: [],
    category: "Security"
  },
  {
    id: 215,
    title: "Unrestricted Ingress Access to Sensitive Resources",
    description: "Sensitive services were exposed to the public internet due to unrestricted ingress rules.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restrict ingress traffic by specifying allowed IP ranges or adding authentication for access to sensitive resources.
	• Used a more restrictive ingress controller and verified that access was limited to trusted sources.`,
    tags: [],
    category: "Security"
  },
  {
    id: 216,
    title: "Exposure of Sensitive Data in Container Environment Variables",
    description: "Sensitive data, such as database credentials, was exposed through environment variables in container configurations.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved sensitive data into Kubernetes Secrets instead of directly embedding them in environment variables.
	• Updated the deployment YAML to reference the Secrets and applied the changes.`,
    tags: [],
    category: "Security"
  },
  {
    id: 217,
    title: "Inadequate Container Resource Limits Leading to DoS Attacks",
    description: "A lack of resource limits on containers allowed a denial-of-service (DoS) attack to disrupt services by consuming excessive CPU and memory.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set appropriate resource requests and limits in the container specification to prevent resource exhaustion.
	• Applied resource quotas to limit the total resource usage for namespaces.`,
    tags: [],
    category: "Security"
  },
  {
    id: 218,
    title: "Exposure of Container Logs Due to Insufficient Log Management",
    description: "Container logs were exposed to unauthorized users due to insufficient log management controls.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented access controls to restrict log access to authorized users only.
	• Encrypted logs at rest and in transit to prevent exposure.`,
    tags: [],
    category: "Security"
  },
  {
    id: 219,
    title: "Using Insecure Docker Registry for Container Images",
    description: "The cluster was pulling container images from an insecure, untrusted Docker registry, exposing the system to the risk of malicious images.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured Kubernetes to pull images only from trusted and secure registries.
	• Implemented image signing and vulnerability scanning in the CI/CD pipeline.`,
    tags: [],
    category: "Security"
  },
  {
    id: 220,
    title: "Weak Pod Security Policies Leading to Privileged Containers",
    description: "Privileged containers were deployed due to weak or missing Pod Security Policies (PSPs), exposing the cluster to security risks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created and applied strict Pod Security Policies to limit the permissions of containers.
	• Enforced the use of non-privileged containers for sensitive workloads.`,
    tags: [],
    category: "Security"
  },
  {
    id: 221,
    title: "Unsecured Kubernetes Dashboard",
    description: "The Kubernetes Dashboard was exposed to the public internet without proper authentication or access controls, allowing unauthorized users to access sensitive cluster information.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled authentication and RBAC rules for the Kubernetes Dashboard.
	• Restricted access to the Dashboard by allowing connections only from trusted IP addresses.`,
    tags: [],
    category: "Security"
  },
  {
    id: 222,
    title: "Using HTTP Instead of HTTPS for Ingress Resources",
    description: "Sensitive applications were exposed using HTTP instead of HTTPS, leaving communication vulnerable to eavesdropping and man-in-the-middle attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured ingress controllers to use HTTPS by setting up TLS termination with valid SSL certificates.
	• Redirected all HTTP traffic to HTTPS to ensure encrypted communication.`,
    tags: [],
    category: "Security"
  },
  {
    id: 223,
    title: "Insecure Network Policies Exposing Internal Services",
    description: "Network policies were too permissive, exposing internal services to unnecessary access, increasing the risk of lateral movement within the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted network policies to only allow communication between services that needed to interact.
	• Used namespace-based segmentation and ingress/egress rules to enforce tighter security.`,
    tags: [],
    category: "Security"
  },
  {
    id: 224,
    title: "Exposing Sensitive Secrets in Environment Variables",
    description: "Sensitive credentials were stored in environment variables within the pod specification, exposing them to potential attackers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved sensitive data to Kubernetes Secrets and updated the pod configurations to reference the secrets.
	• Ensured that secrets were encrypted and only accessible by the relevant services.`,
    tags: [],
    category: "Security"
  },
  {
    id: 225,
    title: "Insufficient RBAC Permissions Leading to Unauthorized Access",
    description: "Insufficient Role-Based Access Control (RBAC) configurations allowed unauthorized users to access and modify sensitive resources within the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured RBAC roles to ensure that users only had the minimum necessary permissions.
	• Applied the principle of least privilege and limited access to sensitive resources.`,
    tags: [],
    category: "Security"
  },
  {
    id: 226,
    title: "Insecure Ingress Controller Exposed to the Internet",
    description: "An insecure ingress controller was exposed to the internet, allowing attackers to exploit vulnerabilities in the controller.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Secured the ingress controller by implementing proper authentication and IP whitelisting.
	• Ensured that only authorized users or services could access the ingress controller.`,
    tags: [],
    category: "Security"
  },
  {
    id: 227,
    title: "Lack of Security Updates in Container Images",
    description: "The cluster was running outdated container images without the latest security patches, exposing it to known vulnerabilities.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebuilt the container images with updated base images and security patches.
	• Implemented a policy for regularly updating container images to include the latest security fixes.`,
    tags: [],
    category: "Security"
  },
  {
    id: 228,
    title: "Exposed Kubelet API Without Authentication",
    description: "The Kubelet API was exposed without proper authentication or authorization, allowing external users to query cluster node details.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted Kubelet API access to internal networks by updating security group rules.
	• Enabled authentication and authorization for the Kubelet API using client certificates.`,
    tags: [],
    category: "Security"
  },
  {
    id: 229,
    title: "Inadequate Logging of Sensitive Events",
    description: "Sensitive security events were not logged, preventing detection of potential security breaches or misconfigurations.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the Kubernetes audit policy to capture sensitive events, including user access to secrets, privilege escalations, and changes in RBAC roles.
	• Integrated log aggregation and alerting tools to monitor security logs in real time.`,
    tags: [],
    category: "Security"
  },
  {
    id: 230,
    title: "Misconfigured RBAC Allowing Cluster Admin Privileges to Developers",
    description: "Developers were mistakenly granted cluster admin privileges due to misconfigured RBAC roles, which gave them the ability to modify sensitive resources.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured RBAC roles to follow the principle of least privilege and removed cluster admin permissions for developers.
	• Implemented role separation to ensure developers only had access to resources necessary for their tasks.`,
    tags: [],
    category: "Security"
  },
  {
    id: 231,
    title: "Insufficiently Secured Service Account Permissions",
    description: "Service accounts were granted excessive permissions, giving pods access to resources they did not require, leading to a potential security risk.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created specific service accounts for each pod with minimal necessary permissions.
	• Applied strict RBAC rules to restrict access to sensitive resources for service accounts.`,
    tags: [],
    category: "Security"
  },
  {
    id: 232,
    title: "Cluster Secrets Exposed Due to Insecure Mounting",
    description: "Kubernetes secrets were mounted into pods insecurely, exposing sensitive information to unauthorized users.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved secrets to Kubernetes Secrets and mounted them using environment variables instead of directly into the filesystem.
	• Restricted access to secrets using RBAC and implemented encryption for sensitive data.`,
    tags: [],
    category: "Security"
  },
  {
    id: 233,
    title: "Improperly Configured API Server Authorization",
    description: "The Kubernetes API server was improperly configured, allowing unauthorized users to make API calls without proper authorization.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the API server to use proper authorization mechanisms (e.g., RBAC, ABAC).
	• Validated and tested API server access to ensure only authorized users could make API calls.`,
    tags: [],
    category: "Security"
  },
  {
    id: 234,
    title: "Compromised Image Registry Access Credentials",
    description: "The image registry access credentials were compromised, allowing attackers to pull and run malicious images in the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved credentials to Kubernetes Secrets, which are encrypted by default.
	• Enforced the use of trusted image registries and scanned images for vulnerabilities before use.`,
    tags: [],
    category: "Security"
  },
  {
    id: 235,
    title: "Insufficiently Secured Cluster API Server Access",
    description: "The API server was exposed with insufficient security, allowing unauthorized external access and increasing the risk of exploitation.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restrict access to the API server using firewall rules to allow only internal IP addresses.
	• Implemented TLS encryption and client certificate authentication for secure access.`,
    tags: [],
    category: "Security"
  },
  {
    id: 236,
    title: "Misconfigured Admission Controllers Allowing Insecure Resources",
    description: "Admission controllers were misconfigured, allowing the creation of insecure or non-compliant resources.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled and properly configured necessary admission controllers, such as PodSecurityPolicy and LimitRanger, to enforce security policies during resource creation.
	• Regularly audited resource creation and applied security policies to avoid insecure configurations.`,
    tags: [],
    category: "Security"
  },
  {
    id: 237,
    title: "Lack of Security Auditing and Monitoring in Cluster",
    description: "The lack of proper auditing and monitoring allowed security events to go undetected, resulting in delayed response to potential security threats.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented audit logging and integrated a centralized logging and monitoring solution, such as Prometheus and ELK stack, to detect security incidents.
	• Set up alerts for suspicious activities and security violations.`,
    tags: [],
    category: "Security"
  },
  {
    id: 238,
    title: "Exposed Internal Services Due to Misconfigured Load Balancer",
    description: "Internal services were inadvertently exposed to the public due to incorrect load balancer configurations, leading to potential security risks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the load balancer to restrict access to internal services, ensuring that only authorized users or services could connect.
	• Implemented authentication and IP whitelisting to secure the exposed services.`,
    tags: [],
    category: "Security"
  },
  {
    id: 239,
    title: "Kubernetes Secrets Accessed via Insecure Network",
    description: "Kubernetes secrets were accessed via an insecure network connection, exposing sensitive information to unauthorized parties.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured Kubernetes to use HTTPS for all API server communications.
	• Ensured that all pod-to-API server traffic was encrypted and used secure protocols.`,
    tags: [],
    category: "Security"
  },
  {
    id: 240,
    title: "Pod Security Policies Not Enforced",
    description: "Pod security policies were not enforced, allowing the deployment of pods with unsafe configurations, such as privileged access and host network use.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled and configured PodSecurityPolicy to enforce security controls, such as preventing privileged containers or host network usage.
	• Audited existing pod configurations and updated them to comply with security policies.`,
    tags: [],
    category: "Security"
  },
  {
    id: 241,
    title: "Unpatched Vulnerabilities in Cluster Nodes",
    description: "Cluster nodes were not regularly patched, exposing known vulnerabilities that were later exploited by attackers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patches were applied to all affected nodes to fix known vulnerabilities.
	• Established a regular patch management process to ensure that cluster nodes were kept up to date.`,
    tags: [],
    category: "Security"
  },
  {
    id: 242,
    title: "Weak Network Policies Allowing Unrestricted Traffic",
    description: "Network policies were not properly configured, allowing unrestricted traffic between pods, which led to lateral movement by attackers after a pod was compromised.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created strict network policies to control pod-to-pod communication, limiting access to sensitive services.
	• Regularly reviewed and updated network policies to minimize exposure.`,
    tags: [],
    category: "Security"
  },
  {
    id: 243,
    title: "Exposed Dashboard Without Authentication",
    description: "Kubernetes dashboard was exposed to the internet without authentication, allowing unauthorized users to access cluster information and potentially take control.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted access to the Kubernetes Dashboard by securing the ingress and requiring authentication via RBAC or OAuth.
	• Implemented a VPN and IP whitelisting to ensure that only authorized users could access the dashboard.`,
    tags: [],
    category: "Security"
  },
  {
    id: 244,
    title: "Use of Insecure Container Images",
    description: "Insecure container images were used in production, leading to the deployment of containers with known vulnerabilities.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enforced the use of trusted container image registries that support vulnerability scanning.
	• Integrated image scanning tools like Trivy or Clair into the CI/CD pipeline to identify vulnerabilities before deployment.`,
    tags: [],
    category: "Security"
  },
  {
    id: 245,
    title: "Misconfigured TLS Certificates",
    description: "Misconfigured TLS certificates led to insecure communication between Kubernetes components, exposing the cluster to potential attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Regenerated and replaced expired certificates.
	• Configured Kubernetes components to use valid TLS certificates for all internal communications.`,
    tags: [],
    category: "Security"
  },
  {
    id: 246,
    title: "Excessive Privileges for Service Accounts",
    description: "Service accounts were granted excessive privileges, allowing them to perform operations outside their intended scope, increasing the risk of compromise.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated RBAC roles to follow the principle of least privilege, ensuring service accounts only had the minimum necessary permissions.
	• Regularly audited service accounts to verify proper access control.`,
    tags: [],
    category: "Security"
  },
  {
    id: 247,
    title: "Exposure of Sensitive Logs Due to Misconfigured Logging Setup",
    description: "Sensitive logs, such as those containing authentication tokens and private keys, were exposed due to a misconfigured logging setup.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated log configuration to redact or filter sensitive data, such as tokens and private keys, before storing logs.
	• Implemented access controls to restrict who can view logs and what data is exposed.`,
    tags: [],
    category: "Security"
  },
  {
    id: 248,
    title: "Use of Deprecated APIs with Known Vulnerabilities",
    description: "The cluster was using deprecated Kubernetes APIs that contained known security vulnerabilities, which were exploited by attackers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Upgraded Kubernetes components and applications to use supported and secure API versions.
	• Removed deprecated API usage and enforced only supported versions.`,
    tags: [],
    category: "Security"
  },
  {
    id: 249,
    title: "Lack of Security Context in Pod Specifications",
    description: "Pods were deployed without defining appropriate security contexts, resulting in privileged containers and access to host resources.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Defined and enforced security contexts for all pod deployments to restrict privilege escalation and limit access to sensitive resources.
	• Implemented security policies to reject pods that do not comply with security context guidelines.`,
    tags: [],
    category: "Security"
  },
  {
    id: 250,
    title: "Compromised Container Runtime",
    description: "The container runtime (Docker) was compromised, allowing an attacker to gain control over the containers running on the node.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Immediately patched the container runtime (Docker) to address the security vulnerability.
	• Implemented security measures, such as running containers with user namespaces and seccomp profiles to minimize the impact of any future exploits.`,
    tags: [],
    category: "Security"
  },
  {
    id: 251,
    title: "Insufficient RBAC Permissions for Cluster Admin",
    description: "A cluster administrator was mistakenly granted insufficient RBAC permissions, preventing them from performing essential management tasks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the RBAC policy to ensure that the cluster admin role had the correct permissions to manage all resources.
	• Implemented a more granular RBAC policy review process to avoid future issues.`,
    tags: [],
    category: "Security"
  },
  {
    id: 252,
    title: "Insufficient Pod Security Policies Leading to Privilege Escalation",
    description: "Insufficiently restrictive PodSecurityPolicies (PSPs) allowed the deployment of privileged pods, which were later exploited by attackers.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated PodSecurityPolicies to enforce stricter controls, such as disallowing privileged containers and restricting host network access.
	• Applied RBAC restrictions to limit who could deploy privileged pods.`,
    tags: [],
    category: "Security"
  },
  {
    id: 253,
    title: "Exposed Service Account Token in Pod",
    description: "A service account token was mistakenly exposed in a pod, allowing attackers to gain unauthorized access to the Kubernetes API.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the service account token from the environment variable and stored it in a more secure location (e.g., as a Kubernetes Secret).
	• Reissued the service account token and rotated the credentials to mitigate potential risks.`,
    tags: [],
    category: "Security"
  },
  {
    id: 254,
    title: "Rogue Container Executing Malicious Code",
    description: "A compromised container running a known exploit executed malicious code that allowed the attacker to gain access to the underlying node.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the container images to the latest versions with security patches.
	• Implemented automatic image scanning and vulnerability scanning as part of the CI/CD pipeline to catch outdated images before deployment.`,
    tags: [],
    category: "Security"
  },
  {
    id: 255,
    title: "Overly Permissive Network Policies Allowing Lateral Movement",
    description: "Network policies were not restrictive enough, allowing compromised pods to move laterally across the cluster and access other services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented restrictive network policies to segment the cluster and restrict traffic between pods based on specific labels and namespaces.
	• Ensured that sensitive services were isolated with network policies that only allowed access from trusted sources.`,
    tags: [],
    category: "Security"
  },
  {
    id: 256,
    title: "Insufficient Encryption for In-Transit Data",
    description: "Sensitive data was transmitted in plaintext between services, exposing it to potential eavesdropping and data breaches.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured all services to communicate over HTTPS using TLS encryption.
	• Implemented mutual TLS authentication for all pod-to-pod communications within the cluster.`,
    tags: [],
    category: "Security"
  },
  {
    id: 257,
    title: "Exposing Cluster Services via LoadBalancer with Public IP",
    description: "A service was exposed to the public internet via a LoadBalancer without proper access control, making it vulnerable to attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the service configuration to use type: ClusterIP or added an appropriate ingress controller with restricted access.
	• Added IP whitelisting or authentication to the exposed services.`,
    tags: [],
    category: "Security"
  },
  {
    id: 258,
    title: "Privileged Containers Running Without Seccomp or AppArmor Profiles",
    description: "Privileged containers were running without seccomp or AppArmor profiles, leaving the host vulnerable to attacks.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled the privileged: true flag unless absolutely necessary and applied restrictive seccomp and AppArmor profiles to all privileged containers.
	• Used Kubernetes security policies to prevent the deployment of privileged containers without appropriate security profiles.`,
    tags: [],
    category: "Security"
  },
  {
    id: 259,
    title: "Malicious Container Image from Untrusted Source",
    description: "A malicious container image from an untrusted source was deployed, leading to a security breach in the cluster.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the malicious container image from the cluster and quarantined the affected pods.
	• Scanned all images for known vulnerabilities before redeploying containers.
	• Configured image admission controllers to only allow images from trusted registries.`,
    tags: [],
    category: "Security"
  },
  {
    id: 260,
    title: "Unrestricted Ingress Controller Allowing External Attacks",
    description: "The ingress controller was misconfigured, allowing external attackers to bypass network security controls and exploit internal services.",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the ingress controller to restrict access to trusted IPs or users via IP whitelisting or authentication.
	• Enabled role-based access control (RBAC) to limit access to sensitive services.`,
    tags: [],
    category: "Security"
  },
  {
    id: 261,
    title: "Misconfigured Ingress Controller Exposing Internal Services",
    description: "Misconfigured Ingress Controller Exposing Internal Services",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented IP whitelisting to restrict access.
	• Enabled authentication mechanisms for sensitive services.
	• Regularly audited Ingress configurations for security compliance.`,
    tags: [],
    category: "Security"
  },
  {
    id: 262,
    title: "Privileged Containers Without Security Context",
    description: "Privileged Containers Without Security Context",
    component: "Unknown",
    severity: "medium",
    resolution: `• Defined appropriate security contexts for all containers.
	• Removed unnecessary privileged access where possible.
	• Implemented Pod Security Policies to enforce security standards.`,
    tags: [],
    category: "Security"
  },
  {
    id: 263,
    title: "Unrestricted Network Policies Allowing Lateral Movement",
    description: "Unrestricted Network Policies Allowing Lateral Movement",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented network policies to restrict inter-pod communication.
	• Segmented the network based on namespaces and labels.
	• Monitored network traffic for unusual patterns.`,
    tags: [],
    category: "Security"
  },
  {
    id: 264,
    title: "Exposed Kubernetes Dashboard Without Authentication",
    description: "Exposed Kubernetes Dashboard Without Authentication",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled authentication mechanisms for the dashboard.
	• Restricted access to the dashboard using network policies.
	• Monitored dashboard access logs for unauthorized attempts.`,
    tags: [],
    category: "Security"
  },
  {
    id: 265,
    title: "Use of Vulnerable Container Images",
    description: "Use of Vulnerable Container Images",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated container images to the latest versions with security patches.
	• Implemented automated image scanning in the CI/CD pipeline.
	• Established a policy to use only trusted and regularly updated images.`,
    tags: [],
    category: "Security"
  },
  {
    id: 266,
    title: "Misconfigured Role-Based Access Control (RBAC)",
    description: "Misconfigured Role-Based Access Control (RBAC)",
    component: "Unknown",
    severity: "medium",
    resolution: `• Revised RBAC roles to align with user responsibilities.
	• Implemented the principle of least privilege across all roles.
	• Regularly audited RBAC configurations for compliance.`,
    tags: [],
    category: "Security"
  },
  {
    id: 267,
    title: "Insecure Secrets Management",
    description: "Insecure Secrets Management",
    component: "Unknown",
    severity: "medium",
    resolution: `• Migrated secrets to Kubernetes Secrets objects.
	• Implemented encryption for secrets at rest and in transit.
	• Restricted access to secrets using RBAC.`,
    tags: [],
    category: "Security"
  },
  {
    id: 268,
    title: "Lack of Audit Logging",
    description: "Lack of Audit Logging",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled audit logging in the cluster.
	• Configured log retention and monitoring policies.
	• Integrated audit logs with a centralized logging system for analysis.`,
    tags: [],
    category: "Security"
  },
  {
    id: 269,
    title: "Unrestricted Access to etcd",
    description: "Unrestricted Access to etcd",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled authentication and encryption for etcd.
	• Restricted network access to etcd endpoints.
	• Regularly audited etcd configurations for security compliance.`,
    tags: [],
    category: "Security"
  },
  {
    id: 270,
    title: "Absence of Pod Security Policies",
    description: "Absence of Pod Security Policies",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented Pod Security Policies to enforce security standards.
	• Restricted the use of privileged containers and host resources.
	• Educated development teams on secure pod configurations.`,
    tags: [],
    category: "Security"
  },
  {
    id: 271,
    title: "Service Account Token Mounted in All Pods",
    description: "Service Account Token Mounted in All Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set automountServiceAccountToken: false in non-privileged pods.
	• Reviewed RBAC permissions to ensure tokens were scoped correctly.`,
    tags: [],
    category: "Security"
  },
  {
    id: 272,
    title: "Sensitive Logs Exposed via Centralized Logging",
    description: "Sensitive Logs Exposed via Centralized Logging",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed sensitive logging in app code.
	• Configured Fluentd filters to redact secrets.
	• Restricted access to sensitive log indices in Kibana.`,
    tags: [],
    category: "Security"
  },
  {
    id: 273,
    title: "Broken Container Escape Detection",
    description: "Broken Container Escape Detection",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched all nodes to a secure kernel version.
	• Implemented Falco to monitor syscall anomalies.`,
    tags: [],
    category: "Security"
  },
  {
    id: 274,
    title: "Unauthorized Cloud Metadata API Access",
    description: "Unauthorized Cloud Metadata API Access",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted pod egress using network policies.
	• Enabled IMDSv2 with hop limit = 1 to block pod access.`,
    tags: [],
    category: "Security"
  },
  {
    id: 275,
    title: "Admin Kubeconfig Checked into Git",
    description: "Admin Kubeconfig Checked into Git",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rotated the admin credentials immediately.
	• Added secret scanning to CI/CD.
	• Configured .gitignore templates across repos.`,
    tags: [],
    category: "Security"
  },
  {
    id: 276,
    title: "JWT Token Replay Attack in Webhook Auth",
    description: "JWT Token Replay Attack in Webhook Auth",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated webhook to validate expiry and nonce in tokens.
	• Rotated keys and invalidated sessions.`,
    tags: [],
    category: "Security"
  },
  {
    id: 277,
    title: "Container With Hardcoded SSH Keys",
    description: "Container With Hardcoded SSH Keys",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rebuilt images without sensitive content.
	• Rotated all affected SSH keys.`,
    tags: [],
    category: "Security"
  },
  {
    id: 278,
    title: "Insecure Helm Chart Defaults",
    description: "Insecure Helm Chart Defaults",
    component: "Unknown",
    severity: "medium",
    resolution: `• Overrode defaults in values.yaml.
	• Audited Helm charts for misconfigurations.`,
    tags: [],
    category: "Security"
  },
  {
    id: 279,
    title: "Shared Cluster with Overlapping Namespaces",
    description: "Shared Cluster with Overlapping Namespaces",
    component: "Unknown",
    severity: "medium",
    resolution: `• Introduced prefix-based namespace naming (e.g., team1-dev).
	• Scoped RBAC permissions tightly.`,
    tags: [],
    category: "Security"
  },
  {
    id: 280,
    title: "CVE Ignored in Base Image for Months",
    description: "CVE Ignored in Base Image for Months",
    component: "Unknown",
    severity: "medium",
    resolution: `• Integrated Clair + Trivy scans into CI/CD pipelines.
	• Setup Slack alerts for critical CVEs.`,
    tags: [],
    category: "Security"
  },
  {
    id: 281,
    title: "Misconfigured PodSecurityPolicy Allowed Privileged Containers",
    description: "Misconfigured PodSecurityPolicy Allowed Privileged Containers",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the insecure PSP.
	• Implemented a restrictive default PSP.
	• Migrated to PodSecurityAdmission after PSP deprecation.`,
    tags: [],
    category: "Security"
  },
  {
    id: 282,
    title: "GitLab Runners Spawning Privileged Containers",
    description: "GitLab Runners Spawning Privileged Containers",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled DinD and used Kaniko for builds.
	• Set runner securityContext to avoid privilege escalation.`,
    tags: [],
    category: "Security"
  },
  {
    id: 283,
    title: "Kubernetes Secrets Mounted in World-Readable Volumes",
    description: "Kubernetes Secrets Mounted in World-Readable Volumes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set defaultMode: 0400 on all secret volumes.
	• Isolated processes via containers.`,
    tags: [],
    category: "Security"
  },
  {
    id: 284,
    title: "Kubelet Port Exposed on Public Interface",
    description: "Kubelet Port Exposed on Public Interface",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled Kubelet authentication and authorization.
	• Restricted access via firewall and node security groups.`,
    tags: [],
    category: "Security"
  },
  {
    id: 285,
    title: "Cluster Admin Bound to All Authenticated Users",
    description: "Cluster Admin Bound to All Authenticated Users",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted the binding immediately.
	• Implemented an RBAC policy validation webhook.`,
    tags: [],
    category: "Security"
  },
  {
    id: 286,
    title: "Webhook Authentication Timing Out, Causing Denial of Service",
    description: "Webhook Authentication Timing Out, Causing Denial of Service",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased webhook timeouts and horizontal scaling.
	• Added local caching for frequent identities.`,
    tags: [],
    category: "Security"
  },
  {
    id: 287,
    title: "CSI Driver Exposing Node Secrets",
    description: "CSI Driver Exposing Node Secrets",
    component: "Unknown",
    severity: "medium",
    resolution: `• Scoped CSI mounts with per-pod directories.
	• Disabled hostPath access for workloads.`,
    tags: [],
    category: "Security"
  },
  {
    id: 288,
    title: "EphemeralContainers Used for Reconnaissance",
    description: "EphemeralContainers Used for Reconnaissance",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed permissions to ephemeral containers for all roles.
	• Set audit policies for their use.`,
    tags: [],
    category: "Security"
  },
  {
    id: 289,
    title: "hostAliases Used for Spoofing Internal Services",
    description: "hostAliases Used for Spoofing Internal Services",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled use of hostAliases via OPA policies.
	• Logged all pod specs with custom host entries.`,
    tags: [],
    category: "Security"
  },
  {
    id: 290,
    title: "Privilege Escalation via Unchecked securityContext in Helm Chart",
    description: "Privilege Escalation via Unchecked securityContext in Helm Chart",
    component: "Unknown",
    severity: "medium",
    resolution: `• Forked chart and restricted overrides via schema.
	• Implemented OPA Gatekeeper to block root containers.`,
    tags: [],
    category: "Security"
  },
  {
    id: 291,
    title: "Service Account Token Leakage via Logs",
    description: "Service Account Token Leakage via Logs",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rotated all impacted service account tokens.
	• Added environment and file sanitization to logging library.`,
    tags: [],
    category: "Security"
  },
  {
    id: 292,
    title: "Escalation via Editable Validating WebhookConfiguration",
    description: "Escalation via Editable Validating WebhookConfiguration",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restricted access to ValidatingWebhookConfiguration objects.
	• Added checksums to webhook definitions in GitOps.`,
    tags: [],
    category: "Security"
  },
  {
    id: 293,
    title: "Stale Node Certificates After Rejoining Cluster",
    description: "Stale Node Certificates After Rejoining Cluster",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted old certificates from the node.
	• Set short TTLs for client certificates.`,
    tags: [],
    category: "Security"
  },
  {
    id: 294,
    title: "ArgoCD Exploit via Unverified Helm Charts",
    description: "ArgoCD Exploit via Unverified Helm Charts",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed the chart and all related workloads.
	• Enabled Helm OCI signatures and repo allow-lists.`,
    tags: [],
    category: "Security"
  },
  {
    id: 295,
    title: "Node Compromise via Insecure Container Runtime",
    description: "Node Compromise via Insecure Container Runtime",
    component: "Unknown",
    severity: "medium",
    resolution: `• Upgraded CRI-O to patched version.
	• Enabled seccomp and AppArmor by default.`,
    tags: [],
    category: "Security"
  },
  {
    id: 296,
    title: "Workload with Wildcard RBAC Access to All Secrets",
    description: "Workload with Wildcard RBAC Access to All Secrets",
    component: "Unknown",
    severity: "medium",
    resolution: `• Replaced wildcard permissions with explicit named secrets.
	• Enabled audit logging on all secrets API calls.`,
    tags: [],
    category: "Security"
  },
  {
    id: 297,
    title: "Malicious Init Container Used for Reconnaissance",
    description: "Malicious Init Container Used for Reconnaissance",
    component: "Unknown",
    severity: "medium",
    resolution: `• Blocked unknown container registries via policy.
	• Implemented runtime security agents to inspect init behavior.`,
    tags: [],
    category: "Security"
  },
  {
    id: 298,
    title: "Ingress Controller Exposed /metrics Without Auth",
    description: "Ingress Controller Exposed /metrics Without Auth",
    component: "Unknown",
    severity: "medium",
    resolution: `• Applied IP whitelist and basic auth for /metrics.
	• Added network policies to restrict access.`,
    tags: [],
    category: "Security"
  },
  {
    id: 299,
    title: "Secret Stored in ConfigMap by Mistake",
    description: "Secret Stored in ConfigMap by Mistake",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved key to a Kubernetes Secret.
	• Rotated exposed credentials.`,
    tags: [],
    category: "Security"
  },
  {
    id: 300,
    title: "Token Reuse After Namespace Deletion and Recreation",
    description: "Token Reuse After Namespace Deletion and Recreation",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rotated all tokens after backup restore.
	• Implemented TTL-based token policies.`,
    tags: [],
    category: "Security"
  },
  {
    id: 301,
    title: "PVC Stuck in Terminating State After Node Crash",
    description: "PVC Stuck in Terminating State After Node Crash",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually removed the PVC finalizers.
	• Used aws ec2 detach-volume to forcibly detach.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 302,
    title: "Data Corruption on HostPath Volumes",
    description: "Data Corruption on HostPath Volumes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Moved workloads to CSI-backed volumes with ReadWriteOnce enforcement.
	• Ensured only one pod accessed a volume at a time.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 303,
    title: "Volume Mount Fails Due to Node Affinity Mismatch",
    description: "Volume Mount Fails Due to Node Affinity Mismatch",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added topology.kubernetes.io/zone node affinity to match PV.
	• Ensured StatefulSets used storage classes with volume binding mode WaitForFirstConsumer.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 304,
    title: "PVC Not Rescheduled After Node Deletion",
    description: "PVC Not Rescheduled After Node Deletion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Detached the disk from the Azure console.
	• Recreated pod successfully on another node.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 305,
    title: "Long PVC Rebinding Time on StatefulSet Restart",
    description: "Long PVC Rebinding Time on StatefulSet Restart",
    component: "Unknown",
    severity: "medium",
    resolution: `• Tuned CSI attach concurrency.
	• Split the StatefulSet into smaller chunks.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 306,
    title: "CSI Volume Plugin Crash Loops Due to Secret Rotation",
    description: "CSI Volume Plugin Crash Loops Due to Secret Rotation",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted the CSI plugin pods.
	• Upgraded plugin to a version with token refresh logic.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 307,
    title: "ReadWriteMany PVCs Cause IO Bottlenecks",
    description: "ReadWriteMany PVCs Cause IO Bottlenecks",
    component: "Unknown",
    severity: "medium",
    resolution: `• Partitioned workloads to use isolated volumes.
	• Added cache layer for reads.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 308,
    title: "PVC Mount Timeout Due to PodSecurityPolicy",
    description: "PVC Mount Timeout Due to PodSecurityPolicy",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified PSP to allow required fsGroup range.
	• Updated pod security context.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 309,
    title: "Orphaned PVs After Namespace Deletion",
    description: "Orphaned PVs After Namespace Deletion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted old PVs and disks manually.
	• Changed reclaim policy to Delete for dynamic volumes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 310,
    title: "StorageClass Misconfiguration Blocks Dynamic Provisioning",
    description: "StorageClass Misconfiguration Blocks Dynamic Provisioning",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected StorageClass parameters.
	• Manually bound PVCs with valid classes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 311,
    title: "StatefulSet Volume Cloning Results in Data Leakage",
    description: "StatefulSet Volume Cloning Results in Data Leakage",
    component: "Unknown",
    severity: "medium",
    resolution: `• Stopped cloning and switched to backup/restore-based provisioning.
	• Used rsync with integrity checks instead.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 312,
    title: "Volume Resize Not Reflected in Mounted Filesystem",
    description: "Volume Resize Not Reflected in Mounted Filesystem",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted pod to remount the volume and trigger resize.
	• Verified resize2fs logs in CSI driver.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 313,
    title: "CSI Controller Pod Crash Due to Log Overflow",
    description: "CSI Controller Pod Crash Due to Log Overflow",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added log rate limits via CSI plugin config.
	• Increased node ephemeral storage.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 314,
    title: "PVs Stuck in Released Due to Missing Finalizer Removal",
    description: "PVs Stuck in Released Due to Missing Finalizer Removal",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched PVs to remove finalizers.
	• Recycled or deleted volumes manually.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 315,
    title: "CSI Driver DaemonSet Deployment Missing Tolerations for Taints",
    description: "CSI Driver DaemonSet Deployment Missing Tolerations for Taints",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added required tolerations to DaemonSet.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 316,
    title: "Mount Propagation Issues with Sidecar Containers",
    description: "Mount Propagation Issues with Sidecar Containers",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added mountPropagation: Bidirectional to shared volumeMounts.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 317,
    title: "File Permissions Reset on Pod Restart",
    description: "File Permissions Reset on Pod Restart",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set explicit securityContext.fsGroup in pod spec.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 318,
    title: "Volume Mount Succeeds but Application Can't Write",
    description: "Volume Mount Succeeds but Application Can't Write",
    component: "Unknown",
    severity: "medium",
    resolution: `• Used storage class parameter to specify xfs.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 319,
    title: "Volume Snapshot Restore Includes Corrupt Data",
    description: "Volume Snapshot Restore Includes Corrupt Data",
    component: "Unknown",
    severity: "medium",
    resolution: `• Paused writes before snapshot.
	• Enabled filesystem freeze hook in Velero plugin.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 320,
    title: "Zombie Volumes Occupying Cloud Quota",
    description: "Zombie Volumes Occupying Cloud Quota",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually detached and deleted volumes.
	• Adjusted controller retry limits.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 321,
    title: "Volume Snapshot Garbage Collection Fails",
    description: "Volume Snapshot Garbage Collection Fails",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added required RBAC rules to Velero.
	• Manually deleted stale snapshot objects.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 322,
    title: "Volume Mount Delays Due to Node Drain Stale Attachment",
    description: "Volume Mount Delays Due to Node Drain Stale Attachment",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced backoff limit in CSI controller config.
	• Used manual detach via cloud CLI in emergencies.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 323,
    title: "Application Writes Lost After Node Reboot",
    description: "Application Writes Lost After Node Reboot",
    component: "Unknown",
    severity: "medium",
    resolution: `• Refactored PV to use local with nodeAffinity.
	• Explicitly mounted disk partitions.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 324,
    title: "Pod CrashLoop Due to Read-Only Volume Remount",
    description: "Pod CrashLoop Due to Read-Only Volume Remount",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted pod to trigger clean remount.
	• Tuned NFS mount options (soft, timeo, retry).`,
    tags: [],
    category: "Storage"
  },
  {
    id: 325,
    title: "Data Corruption on Shared Volume With Two Pods",
    description: "Data Corruption on Shared Volume With Two Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Refactored app logic to coordinate file writes via leader election.
	• Used a queue-based processing system.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 326,
    title: "Mount Volume Exceeded Timeout",
    description: "Mount Volume Exceeded Timeout",
    component: "Unknown",
    severity: "medium",
    resolution: `• Cleared plugin cache manually.
	• Upgraded CSI driver to fixed version.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 327,
    title: "Static PV Bound to Wrong PVC",
    description: "Static PV Bound to Wrong PVC",
    component: "Unknown",
    severity: "medium",
    resolution: `• Used volumeName field in PVCs for direct binding.
	• Set explicit labels/selectors to isolate.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 328,
    title: "Pod Eviction Due to DiskPressure Despite PVC",
    description: "Pod Eviction Due to DiskPressure Despite PVC",
    component: "Unknown",
    severity: "medium",
    resolution: `• Cleaned logs from root disk.
	• Moved logging to PVC-backed location.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 329,
    title: "Pod Gets Stuck Due to Ghost Mount Point",
    description: "Pod Gets Stuck Due to Ghost Mount Point",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted stale mount folders.
	• Restarted kubelet on affected node.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 330,
    title: "PVC Resize Broke StatefulSet Ordering",
    description: "PVC Resize Broke StatefulSet Ordering",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually controlled pod restarts during PVC resize.
	• Added readiness gates to enforce sequential boot.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 331,
    title: "ReadAfterWrite Inconsistency on Object Store-Backed CSI",
    description: "ReadAfterWrite Inconsistency on Object Store-Backed CSI",
    component: "Unknown",
    severity: "medium",
    resolution: `• Introduced write barriers and retry logic in app.
	• Switched to CephFS for strong consistency.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 332,
    title: "PV Resize Fails After Node Reboot",
    description: "PV Resize Fails After Node Reboot",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reattached volume by starting pod temporarily on the node.
	• Resize completed automatically.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 333,
    title: "CSI Driver Crash Loops on VolumeAttach",
    description: "CSI Driver Crash Loops on VolumeAttach",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back CSI driver to stable version.
	• Purged corrupted volume metadata.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 334,
    title: "PVC Binding Fails Due to Multiple Default StorageClasses",
    description: "PVC Binding Fails Due to Multiple Default StorageClasses",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched one SC to remove the default annotation.
	• Explicitly specified SC in Helm charts.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 335,
    title: "Zombie VolumeAttachment Blocks New PVC",
    description: "Zombie VolumeAttachment Blocks New PVC",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted VolumeAttachment.
	• Restarted CSI pods to refresh state.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 336,
    title: "Persistent Volume Bound But Not Mounted",
    description: "Persistent Volume Bound But Not Mounted",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added mountOptions: [hard,intr] to NFS SC.
	• Set pod readiness probe to check file existence.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 337,
    title: "CSI Snapshot Restore Overwrites Active Data",
    description: "CSI Snapshot Restore Overwrites Active Data",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restored snapshot to a new PVC and used manual copy/move.
	• Added lifecycle checks before invoking restores.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 338,
    title: "Incomplete Volume Detach Breaks Node Scheduling",
    description: "Incomplete Volume Detach Breaks Node Scheduling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Recreated CSI controller pod.
	• Requeued detach operation via manual deletion.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 339,
    title: "App Breaks Due to Missing SubPath After Volume Expansion",
    description: "App Breaks Due to Missing SubPath After Volume Expansion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Changed pod to recreate the subPath explicitly.
	• Waited for bugfix release from CSI provider.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 340,
    title: "Backup Restore Process Created Orphaned PVCs",
    description: "Backup Restore Process Created Orphaned PVCs",
    component: "Unknown",
    severity: "medium",
    resolution: `• Recreated PVCs manually with correct storage class.
	• Re-enabled PV backup in Velero settings.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 341,
    title: "Cross-Zone Volume Binding Fails with StatefulSet",
    description: "Cross-Zone Volume Binding Fails with StatefulSet",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated StorageClass to allow all zones.
	• Aligned affinity rules with allowed topologies.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 342,
    title: "Volume Snapshot Controller Race Condition",
    description: "Volume Snapshot Controller Race Condition",
    component: "Unknown",
    severity: "medium",
    resolution: `• Throttled snapshot requests.
	• Patched controller deployment to limit concurrency.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 343,
    title: "Failed Volume Resize Blocks Rollout",
    description: "Failed Volume Resize Blocks Rollout",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted affected pods, allowed volume to unmount.
	• Resize succeeded offline.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 344,
    title: "Application Data Lost After Node Eviction",
    description: "Application Data Lost After Node Eviction",
    component: "Unknown",
    severity: "medium",
    resolution: `• Migrated to CSI-based dynamic provisioning.
	• Used NFS for shared storage.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 345,
    title: "Read-Only PV Caused Write Failures After Restore",
    description: "Read-Only PV Caused Write Failures After Restore",
    component: "Unknown",
    severity: "medium",
    resolution: `• Detached and reattached the volume manually as read-write.
	• Updated Velero plugin to handle VolumeAttachment explicitly.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 346,
    title: "NFS Server Restart Crashes Pods",
    description: "NFS Server Restart Crashes Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled NFSv4 stateless mode.
	• Recovered pods by restarting them post-reboot.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 347,
    title: "VolumeBindingBlocked Condition Causes Pod Scheduling Delay",
    description: "VolumeBindingBlocked Condition Causes Pod Scheduling Delay",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased controller timeout thresholds.
	• Optimized provisioning backend latency.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 348,
    title: "Data Corruption from Overprovisioned Thin Volumes",
    description: "Data Corruption from Overprovisioned Thin Volumes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased physical volume backing the pool.
	• Set strict overcommit alerting.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 349,
    title: "VolumeProvisioningFailure on GKE Due to IAM Misconfiguration",
    description: "VolumeProvisioningFailure on GKE Due to IAM Misconfiguration",
    component: "Unknown",
    severity: "medium",
    resolution: `• Granted missing IAM permissions to the bound service account.
	• Restarted CSI controller.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 350,
    title: "Node Crash Triggers Volume Remount Loop",
    description: "Node Crash Triggers Volume Remount Loop",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added udev rules for consistent device naming.
	• Restarted CSI daemon to detect new device path.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 351,
    title: "VolumeMount Conflict Between Init and Main Containers",
    description: "VolumeMount Conflict Between Init and Main Containers",
    component: "Unknown",
    severity: "medium",
    resolution: `• Used a subPath for the init container to isolate file writes.
	• Moved backup logic to an external init job.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 352,
    title: "PVCs Stuck in “Terminating” Due to Finalizers",
    description: "PVCs Stuck in “Terminating” Due to Finalizers",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched the driver deployment.
	• Manually removed finalizers using kubectl patch.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 353,
    title: "Misconfigured ReadOnlyMany Mount Blocks Write Operations",
    description: "Misconfigured ReadOnlyMany Mount Blocks Write Operations",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the manifest to readOnly: false.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 354,
    title: "In-Tree Plugin PVs Lost After Driver Migration",
    description: "In-Tree Plugin PVs Lost After Driver Migration",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually edited PV annotations to match CSI requirements.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 355,
    title: "Pod Deleted but Volume Still Mounted on Node",
    description: "Pod Deleted but Volume Still Mounted on Node",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually unmounted the volume on node.
	• Drained and rebooted the node.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 356,
    title: "Ceph RBD Volume Crashes Pods Under IOPS Saturation",
    description: "Ceph RBD Volume Crashes Pods Under IOPS Saturation",
    component: "Unknown",
    severity: "medium",
    resolution: `• Migrated to SSD-backed Ceph pools.
	• Throttled application concurrency.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 357,
    title: "ReplicaSet Using PVCs Fails Due to VolumeClaimTemplate Misuse",
    description: "ReplicaSet Using PVCs Fails Due to VolumeClaimTemplate Misuse",
    component: "Unknown",
    severity: "medium",
    resolution: `• Refactored ReplicaSet to StatefulSet.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 358,
    title: "Filesystem Type Mismatch During Volume Attach",
    description: "Filesystem Type Mismatch During Volume Attach",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reformatted disk to ext4.
	• Aligned StorageClass with PV fsType.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 359,
    title: "iSCSI Volumes Fail After Node Kernel Upgrade",
    description: "iSCSI Volumes Fail After Node Kernel Upgrade",
    component: "Unknown",
    severity: "medium",
    resolution: `• Installed open-iscsi and related modules.
	• Rebooted node.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 360,
    title: "PVs Not Deleted After PVC Cleanup Due to Retain Policy",
    description: "PVs Not Deleted After PVC Cleanup Due to Retain Policy",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted PVs and EBS volumes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 361,
    title: "Concurrent Pod Scheduling on the Same PVC Causes Mount Conflict",
    description: "Concurrent Pod Scheduling on the Same PVC Causes Mount Conflict",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added anti-affinity to restrict pod scheduling to a single node.
	• Used EFS (ReadWriteMany) for workloads needing shared storage.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 362,
    title: "StatefulSet Pod Replacement Fails Due to PVC Retention",
    description: "StatefulSet Pod Replacement Fails Due to PVC Retention",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted old PVC manually to let StatefulSet recreate it.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 363,
    title: "HostPath Volume Access Leaks Host Data into Container",
    description: "HostPath Volume Access Leaks Host Data into Container",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected volume path in manifest.
	• Revoked pod access.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 364,
    title: "CSI Driver Crashes When Node Resource Is Deleted Prematurely",
    description: "CSI Driver Crashes When Node Resource Is Deleted Prematurely",
    component: "Unknown",
    severity: "medium",
    resolution: `• Waited for CSI driver to timeout and self-recover.
	• Rebooted node to forcibly detach volumes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 365,
    title: "Retained PV Blocks New Claim Binding with Identical Name",
    description: "Retained PV Blocks New Claim Binding with Identical Name",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually deleted the old PV to allow dynamic provisioning.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 366,
    title: "CSI Plugin Panic on Missing Mount Option",
    description: "CSI Plugin Panic on Missing Mount Option",
    component: "Unknown",
    severity: "medium",
    resolution: `• Removed mountOptions: from manifest.
	• Patched CSI driver to add nil checks.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 367,
    title: "Pod Fails to Mount Volume Due to SELinux Context Mismatch",
    description: "Pod Fails to Mount Volume Due to SELinux Context Mismatch",
    component: "Unknown",
    severity: "medium",
    resolution: `• Relabeled volume with chcon -Rt container_file_t /data.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 368,
    title: "VolumeExpansion on Bound PVC Fails Due to Pod Running",
    description: "VolumeExpansion on Bound PVC Fails Due to Pod Running",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted pod to trigger offline volume resize.
	• PVC then showed FileSystemResizePending → Bound.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 369,
    title: "CSI Driver Memory Leak on Volume Detach Loop",
    description: "CSI Driver Memory Leak on Volume Detach Loop",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted CSI plugin.
	• Patched driver to implement exponential backoff.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 370,
    title: "Volume Mount Timeout Due to Slow Cloud API",
    description: "Volume Mount Timeout Due to Slow Cloud API",
    component: "Unknown",
    severity: "medium",
    resolution: `• Waited for Azure API to stabilize.
	• Used local PVs for critical workloads moving forward.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 371,
    title: "Volume Snapshot Restore Misses Application Consistency",
    description: "Volume Snapshot Restore Misses Application Consistency",
    component: "Unknown",
    severity: "medium",
    resolution: `• Integrated pre-freeze and post-thaw hooks via Velero Restic.
	• Enabled application-aware backups.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 372,
    title: "File Locking Issue Between Multiple Pods on NFS",
    description: "File Locking Issue Between Multiple Pods on NFS",
    component: "Unknown",
    severity: "medium",
    resolution: `• Introduced flock-based locking in application code.
	• Used local persistent volume instead for critical data.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 373,
    title: "Pod Reboots Erase Data on EmptyDir Volume",
    description: "Pod Reboots Erase Data on EmptyDir Volume",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to hostPath for logs or persisted to object storage.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 374,
    title: "PVC Resize Fails on In-Use Block Device",
    description: "PVC Resize Fails on In-Use Block Device",
    component: "Unknown",
    severity: "medium",
    resolution: `• Stopped the pod and retried resize.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 375,
    title: "Default StorageClass Prevents PVC Binding to Custom Class",
    description: "Default StorageClass Prevents PVC Binding to Custom Class",
    component: "Unknown",
    severity: "medium",
    resolution: `• Explicitly set storageClassName in the PVC.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 376,
    title: "Ceph RBD Volume Mount Failure Due to Kernel Mismatch",
    description: "Ceph RBD Volume Mount Failure Due to Kernel Mismatch",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reinstalled kernel modules and rebooted node.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 377,
    title: "CSI Volume Cleanup Delay Leaves Orphaned Devices",
    description: "CSI Volume Cleanup Delay Leaves Orphaned Devices",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually removed symlinks and restarted kubelet.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 378,
    title: "Immutable ConfigMap Used in CSI Sidecar Volume Mount",
    description: "Immutable ConfigMap Used in CSI Sidecar Volume Mount",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted CSI sidecar pods.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 379,
    title: "PodMount Denied Due to SecurityContext Constraints",
    description: "PodMount Denied Due to SecurityContext Constraints",
    component: "Unknown",
    severity: "medium",
    resolution: `• Modified SCC to allow required context or used correct volume labeling.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 380,
    title: "VolumeProvisioner Race Condition Leads to Duplicated PVC",
    description: "VolumeProvisioner Race Condition Leads to Duplicated PVC",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched CSI controller to implement idempotent provisioning.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 381,
    title: "PVC Bound to Deleted PV After Restore",
    description: "PVC Bound to Deleted PV After Restore",
    component: "Unknown",
    severity: "medium",
    resolution: `• Deleted and re-created PVCs manually or re-triggered restore in correct order.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 382,
    title: "Unexpected Volume Type Defaults to HDD Instead of SSD",
    description: "Unexpected Volume Type Defaults to HDD Instead of SSD",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated manifests to explicitly reference pd-ssd.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 383,
    title: "ReclaimPolicy Retain Caused Resource Leaks",
    description: "ReclaimPolicy Retain Caused Resource Leaks",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually cleaned up PVs and external disk artifacts.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 384,
    title: "ReadWriteOnce PVC Mounted by Multiple Pods",
    description: "ReadWriteOnce PVC Mounted by Multiple Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated deployment to use ReadWriteMany (EFS) for shared access.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 385,
    title: "VolumeAttach Race on StatefulSet Rolling Update",
    description: "VolumeAttach Race on StatefulSet Rolling Update",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set podManagementPolicy: OrderedReady.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 386,
    title: "CSI Driver CrashLoop Due to Missing Node Labels",
    description: "CSI Driver CrashLoop Due to Missing Node Labels",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reapplied node labels and restarted sidecars.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 387,
    title: "PVC Deleted While Volume Still Mounted",
    description: "PVC Deleted While Volume Still Mounted",
    component: "Unknown",
    severity: "medium",
    resolution: `• Force deleted pod, manually detached volume.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 388,
    title: "In-Tree Volume Plugin Migration Caused Downtime",
    description: "In-Tree Volume Plugin Migration Caused Downtime",
    component: "Unknown",
    severity: "medium",
    resolution: `• Re-enabled legacy plugin until CSI was functional.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 389,
    title: "Overprovisioned Thin Volumes Hit Underlying Limit",
    description: "Overprovisioned Thin Volumes Hit Underlying Limit",
    component: "Unknown",
    severity: "medium",
    resolution: `• Resized physical disk and added monitoring.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 390,
    title: "Dynamic Provisioning Failure Due to Quota Exhaustion",
    description: "Dynamic Provisioning Failure Due to Quota Exhaustion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased quota or deleted old volumes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 391,
    title: "PVC Resizing Didn’t Expand Filesystem Automatically",
    description: "PVC Resizing Didn’t Expand Filesystem Automatically",
    component: "Unknown",
    severity: "medium",
    resolution: `• Restarted the pod to trigger filesystem expansion.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 392,
    title: "StatefulSet Pods Lost Volume Data After Node Reboot",
    description: "StatefulSet Pods Lost Volume Data After Node Reboot",
    component: "Unknown",
    severity: "medium",
    resolution: `• Migrated to network-attached persistent storage (NFS/CSI).`,
    tags: [],
    category: "Storage"
  },
  {
    id: 393,
    title: "VolumeSnapshots Failed to Restore with Immutable Fields",
    description: "VolumeSnapshots Failed to Restore with Immutable Fields",
    component: "Unknown",
    severity: "medium",
    resolution: `• Created a new PVC with correct parameters and attached manually.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 394,
    title: "GKE Autopilot PVCs Stuck Due to Resource Class Conflict",
    description: "GKE Autopilot PVCs Stuck Due to Resource Class Conflict",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated PVCs and workload definitions to specify supported resource classes.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 395,
    title: "Cross-Zone Volume Scheduling Failed in Regional Cluster",
    description: "Cross-Zone Volume Scheduling Failed in Regional Cluster",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated storage class to use regional persistent disks.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 396,
    title: "Stuck Finalizers on Deleted PVCs Blocking Namespace Deletion",
    description: "Stuck Finalizers on Deleted PVCs Blocking Namespace Deletion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Patched PVCs to remove finalizers manually.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 397,
    title: "CSI Driver Upgrade Corrupted Volume Attachments",
    description: "CSI Driver Upgrade Corrupted Volume Attachments",
    component: "Unknown",
    severity: "medium",
    resolution: `• Rolled back to previous CSI driver version.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 398,
    title: "Stale Volume Handles After Disaster Recovery Cutover",
    description: "Stale Volume Handles After Disaster Recovery Cutover",
    component: "Unknown",
    severity: "medium",
    resolution: `• Manually edited PV specs or recreated PVCs from scratch.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 399,
    title: "Application Wrote Outside Mounted Path and Lost Data",
    description: "Application Wrote Outside Mounted Path and Lost Data",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated application config to write into the mount path.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 400,
    title: "Cluster Autoscaler Deleted Nodes with Mounted Volumes",
    description: "Cluster Autoscaler Deleted Nodes with Mounted Volumes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled --balance-similar-node-groups and --skip-nodes-with-local-storage.`,
    tags: [],
    category: "Storage"
  },
  {
    id: 401,
    title: "HPA Didn't Scale Due to Missing Metrics Server",
    description: "HPA Didn't Scale Due to Missing Metrics Server",
    component: "Unknown",
    severity: "medium",
    resolution: `• Installed metrics-server using official manifests.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 402,
    title: "CPU Throttling Prevented Effective Autoscaling",
    description: "CPU Throttling Prevented Effective Autoscaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased CPU limits or removed them entirely for key services.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 403,
    title: "Overprovisioned Pods Starved the Cluster",
    description: "Overprovisioned Pods Starved the Cluster",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted requests/limits based on real usage.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 404,
    title: "HPA and VPA Conflicted, Causing Flapping",
    description: "HPA and VPA Conflicted, Causing Flapping",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled VPA on workloads using HPA.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 405,
    title: "Cluster Autoscaler Didn't Scale Due to Pod Affinity Rules",
    description: "Cluster Autoscaler Didn't Scale Due to Pod Affinity Rules",
    component: "Unknown",
    severity: "medium",
    resolution: `• Relaxed anti-affinity or labeled node groups appropriately.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 406,
    title: "Load Test Crashed Cluster Due to Insufficient Node Quotas",
    description: "Load Test Crashed Cluster Due to Insufficient Node Quotas",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added maxReplicas to HPA.
	• Throttled CI tests.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 407,
    title: "Scale-To-Zero Caused Cold Starts and SLA Violations",
    description: "Scale-To-Zero Caused Cold Starts and SLA Violations",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added minReplicaCount: 1 to high-SLA services.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 408,
    title: "Misconfigured Readiness Probe Blocked HPA Scaling",
    description: "Misconfigured Readiness Probe Blocked HPA Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected readiness endpoint in manifest.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 409,
    title: "Custom Metrics Adapter Crashed, Breaking Custom HPA",
    description: "Custom Metrics Adapter Crashed, Breaking Custom HPA",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fixed Prometheus query in adapter configmap.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 410,
    title: "Application Didn’t Handle Scale-In Gracefully",
    description: "Application Didn’t Handle Scale-In Gracefully",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented preStop hook with delay.
	• Added graceful shutdown in app logic.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 411,
    title: "Cluster Autoscaler Ignored Pod PriorityClasses",
    description: "Cluster Autoscaler Ignored Pod PriorityClasses",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled preemption.
	• Re-tuned PriorityClass definitions to align with business SLAs.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 412,
    title: "ReplicaSet Misalignment Led to Excessive Scale-Out",
    description: "ReplicaSet Misalignment Led to Excessive Scale-Out",
    component: "Unknown",
    severity: "medium",
    resolution: `• Cleaned up old ReplicaSets.
	• Scoped matchLabels more tightly.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 413,
    title: "StatefulSet Didn't Scale Due to PodDisruptionBudget",
    description: "StatefulSet Didn't Scale Due to PodDisruptionBudget",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted PDB to tolerate one pod disruption.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 414,
    title: "Horizontal Pod Autoscaler Triggered by Wrong Metric",
    description: "Horizontal Pod Autoscaler Triggered by Wrong Metric",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched HPA to CPU metric.
	• Tuned caching logic in application.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 415,
    title: "Prometheus Scraper Bottlenecked Custom HPA Metrics",
    description: "Prometheus Scraper Bottlenecked Custom HPA Metrics",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced scrape interval for critical metrics.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 416,
    title: "Kubernetes Downscaled During Rolling Update",
    description: "Kubernetes Downscaled During Rolling Update",
    component: "Unknown",
    severity: "medium",
    resolution: `• Tuned maxUnavailable and minReadySeconds.
	• Added load-based HPA stabilization window.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 417,
    title: "KEDA Failed to Scale on Kafka Lag Metric",
    description: "KEDA Failed to Scale on Kafka Lag Metric",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated Kafka trigger auth to use correct secret.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 418,
    title: "Spike in Load Exceeded Pod Init Time",
    description: "Spike in Load Exceeded Pod Init Time",
    component: "Unknown",
    severity: "medium",
    resolution: `• Optimized Docker image layers and moved setup to init containers.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 419,
    title: "Overuse of Liveness Probes Disrupted Load Balance",
    description: "Overuse of Liveness Probes Disrupted Load Balance",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased probe timeoutSeconds and failureThreshold.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 420,
    title: "Scale-In Happened Before Queue Was Drained",
    description: "Scale-In Happened Before Queue Was Drained",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added preStop hook to finish queue processing.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 421,
    title: "Node Drain Race Condition During Scale Down",
    description: "Node Drain Race Condition During Scale Down",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted terminationGracePeriodSeconds for pods.
	• Introduced node draining delay in scaling policy.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 422,
    title: "HPA Disabled Due to Missing Resource Requests",
    description: "HPA Disabled Due to Missing Resource Requests",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set proper resources.requests in the deployment YAML.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 423,
    title: "Unexpected Overprovisioning of Pods",
    description: "Unexpected Overprovisioning of Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced resource limits to more realistic values.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 424,
    title: "Autoscaler Failed During StatefulSet Upgrade",
    description: "Autoscaler Failed During StatefulSet Upgrade",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted StatefulSet rollingUpdate strategy.
	• Tuned autoscaler thresholds for more aggressive scaling.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 425,
    title: "Inadequate Load Distribution in a Multi-AZ Setup",
    description: "Inadequate Load Distribution in a Multi-AZ Setup",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated service to use topologySpreadConstraints for better AZ distribution.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 426,
    title: "Downscale Too Aggressive During Traffic Dips",
    description: "Downscale Too Aggressive During Traffic Dips",
    component: "Unknown",
    severity: "medium",
    resolution: `• Set a minimum of 1 replica for critical workloads.
	• Tuned scaling thresholds to avoid premature downscaling.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 427,
    title: "Insufficient Scaling Under High Ingress Traffic",
    description: "Insufficient Scaling Under High Ingress Traffic",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented custom metrics for Ingress traffic.
	• Configured HPA to scale based on traffic load.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 428,
    title: "Nginx Ingress Controller Hit Rate Limit on External API",
    description: "Nginx Ingress Controller Hit Rate Limit on External API",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added retry logic for external API requests.
	• Adjusted autoscaling to consider both internal load and external API delays.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 429,
    title: "Resource Constraints on Node Impacted Pod Scaling",
    description: "Resource Constraints on Node Impacted Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added more nodes to the cluster.
	• Increased resource limits for node pools.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 430,
    title: "Memory Leak in Application Led to Excessive Scaling",
    description: "Memory Leak in Application Led to Excessive Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Identified and fixed the memory leak in the application code.
	• Tuned autoscaling to more accurately measure actual load.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 431,
    title: "Inconsistent Pod Scaling During Burst Traffic",
    description: "Inconsistent Pod Scaling During Burst Traffic",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted HPA settings to lower the stabilization window and set appropriate scaling thresholds.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 432,
    title: "Auto-Scaling Hit Limits with StatefulSet",
    description: "Auto-Scaling Hit Limits with StatefulSet",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted pod affinity rules to allow scaling across more nodes.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 433,
    title: "Cross-Cluster Autoscaling Failures",
    description: "Cross-Cluster Autoscaling Failures",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted resource allocation policies to account for cross-cluster scaling.
	• Ensured consistent resource availability across regions.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 434,
    title: "Service Disruption During Auto-Scaling of StatefulSet",
    description: "Service Disruption During Auto-Scaling of StatefulSet",
    component: "Unknown",
    severity: "medium",
    resolution: `• Tuning the rollingUpdate strategy allowed pods to scale without downtime.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 435,
    title: "Unwanted Pod Scale-down During Quiet Periods",
    description: "Unwanted Pod Scale-down During Quiet Periods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased scaleDown stabilization settings to prevent rapid pod removal.
	• Adjusted thresholds to delay scale-down actions.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 436,
    title: "Cluster Autoscaler Inconsistencies with Node Pools",
    description: "Cluster Autoscaler Inconsistencies with Node Pools",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased node pool size limits to allow autoscaling.
	• Adjusted autoscaler settings to better handle resource spikes.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 437,
    title: "Disrupted Service During Pod Autoscaling in StatefulSet",
    description: "Disrupted Service During Pod Autoscaling in StatefulSet",
    component: "Unknown",
    severity: "medium",
    resolution: `• Disabled autoscaling for stateful pods and adjusted configuration for better handling of stateful workloads.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 438,
    title: "Slow Pod Scaling During High Load",
    description: "Slow Pod Scaling During High Load",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted HPA to trigger scaling at lower thresholds.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 439,
    title: "Autoscaler Skipped Scale-up Due to Incorrect Metric",
    description: "Autoscaler Skipped Scale-up Due to Incorrect Metric",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured HPA to scale based on CPU metrics.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 440,
    title: "Scaling Inhibited Due to Pending Jobs in Queue",
    description: "Scaling Inhibited Due to Pending Jobs in Queue",
    component: "Unknown",
    severity: "medium",
    resolution: `• Added job queue monitoring metrics to scaling triggers.
	• Adjusted HPA to trigger based on job queue size and pod workload.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 441,
    title: "Scaling Delayed Due to Incorrect Resource Requests",
    description: "Scaling Delayed Due to Incorrect Resource Requests",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced resource requests to better align with the available cluster resources.
	• Set resource limits more carefully based on load testing.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 442,
    title: "Unexpected Pod Termination Due to Scaling Policy",
    description: "Unexpected Pod Termination Due to Scaling Policy",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the scaleDown stabilization window and added buffer periods before termination.
	• Revisited scaling policy settings to ensure more balanced scaling.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 443,
    title: "Unstable Load Balancing During Scaling Events",
    description: "Unstable Load Balancing During Scaling Events",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the load balancer to rebalance traffic more efficiently after scaling events.
	• Adjusted readiness and liveness probes to allow new pods to join the pool smoothly.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 444,
    title: "Autoscaling Ignored Due to Resource Quotas",
    description: "Autoscaling Ignored Due to Resource Quotas",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted resource quotas to allow more flexible scaling.
	• Implemented dynamic resource quota adjustments based on actual usage.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 445,
    title: "Delayed Scaling Response to Traffic Spike",
    description: "Delayed Scaling Response to Traffic Spike",
    component: "Unknown",
    severity: "medium",
    resolution: `• Lowered scaling thresholds to trigger scaling faster.
	• Used burst metrics for quicker scaling decisions.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 446,
    title: "CPU Utilization-Based Scaling Did Not Trigger for High Memory Usage",
    description: "CPU Utilization-Based Scaling Did Not Trigger for High Memory Usage",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured HPA to also consider memory usage as a scaling metric.
	• Adjusted scaling policies to scale pods based on both CPU and memory utilization.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 447,
    title: "Inefficient Horizontal Scaling of StatefulSets",
    description: "Inefficient Horizontal Scaling of StatefulSets",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to a Deployment with persistent volumes, which better supported horizontal scaling for the workload.
	• Used StatefulSets only for workloads that require persistent state and stable network identities.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 448,
    title: "Autoscaler Skipped Scaling Events Due to Flaky Metrics",
    description: "Autoscaler Skipped Scaling Events Due to Flaky Metrics",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to using native Kubernetes metrics for autoscaling decisions.
	• Ensured that metrics from third-party tools were properly validated before being used in autoscaling.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 449,
    title: "Delayed Pod Creation Due to Node Affinity Misconfigurations",
    description: "Delayed Pod Creation Due to Node Affinity Misconfigurations",
    component: "Unknown",
    severity: "medium",
    resolution: `• Loosened node affinity rules to allow more flexible scheduling.
	• Used affinity rules more suited for scaling scenarios.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 450,
    title: "Excessive Scaling During Short-Term Traffic Spikes",
    description: "Excessive Scaling During Short-Term Traffic Spikes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted scaling policies to better handle short-term traffic spikes.
	• Implemented rate-limiting for scaling events.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 451,
    title: "Inconsistent Scaling Due to Misconfigured Horizontal Pod Autoscaler",
    description: "Inconsistent Scaling Due to Misconfigured Horizontal Pod Autoscaler",
    component: "Unknown",
    severity: "medium",
    resolution: `• Switched to using Kubernetes-native CPU and memory metrics for autoscaling.
	• Improved the reliability of the custom metrics system by implementing fallback mechanisms.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 452,
    title: "Load Balancer Overload After Quick Pod Scaling",
    description: "Load Balancer Overload After Quick Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured the load balancer to automatically adjust traffic distribution after pod scaling events.
	• Implemented health checks to ensure that only fully initialized pods received traffic.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 453,
    title: "Autoscaling Failed During Peak Traffic Periods",
    description: "Autoscaling Failed During Peak Traffic Periods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Lowered the scaling thresholds to respond more quickly to persistent traffic increases.
	• Implemented more granular scaling rules based on time-based patterns.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 454,
    title: "Insufficient Node Resources During Scaling",
    description: "Insufficient Node Resources During Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource limits on existing nodes.
	• Implemented Cluster Autoscaler to add more nodes when resources are insufficient.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 455,
    title: "Unpredictable Pod Scaling During Cluster Autoscaler Event",
    description: "Unpredictable Pod Scaling During Cluster Autoscaler Event",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted Cluster Autoscaler settings to delay node addition during scaling events.
	• Tweaked pod scheduling policies to ensure new pods were placed on the most appropriate nodes.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 456,
    title: "CPU Resource Over-Commitment During Scale-Up",
    description: "CPU Resource Over-Commitment During Scale-Up",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the CPU resource limits and requests for new pods to avoid over-commitment.
	• Implemented resource isolation policies to prevent CPU contention.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 457,
    title: "Failure to Scale Due to Horizontal Pod Autoscaler Anomaly",
    description: "Failure to Scale Due to Horizontal Pod Autoscaler Anomaly",
    component: "Unknown",
    severity: "medium",
    resolution: `• Implemented a fallback mechanism to trigger scaling based on last known good metrics.
	• Used a more robust monitoring system to track resource usage in real time.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 458,
    title: "Memory Pressure Causing Slow Pod Scaling",
    description: "Memory Pressure Causing Slow Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the memory available on nodes to alleviate pressure.
	• Used resource requests and limits more conservatively to ensure proper memory allocation.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 459,
    title: "Node Over-Provisioning During Cluster Scaling",
    description: "Node Over-Provisioning During Cluster Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Fine-tuned Cluster Autoscaler settings to scale nodes more precisely based on actual usage.
	• Implemented tighter limits on node scaling thresholds.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 460,
    title: "Autoscaler Fails to Handle Node Termination Events Properly",
    description: "Autoscaler Fails to Handle Node Termination Events Properly",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured the autoscaler to prioritize the immediate replacement of terminated nodes.
	• Enhanced the health checks to better detect node failures.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 461,
    title: "Node Failure During Pod Scaling Up",
    description: "Node Failure During Pod Scaling Up",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured the Cluster Autoscaler to provision more nodes and preemptively account for potential node failures.
	• Ensured the cloud provider's infrastructure health was regularly monitored.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 462,
    title: "Unstable Scaling During Traffic Spikes",
    description: "Unstable Scaling During Traffic Spikes",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the scaling policy to use smaller time intervals for triggering scaling.
	• Introduced custom metrics to scale pods based on response times and traffic patterns.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 463,
    title: "Insufficient Node Pools During Sudden Pod Scaling",
    description: "Insufficient Node Pools During Sudden Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Expanded node pool size to accommodate more pods.
	• Adjusted autoscaling policies to trigger faster node provisioning during scaling events.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 464,
    title: "Latency Spikes During Horizontal Pod Scaling",
    description: "Latency Spikes During Horizontal Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured load balancer to refresh routing rules as soon as new pods were scaled up.
	• Implemented readiness probes to ensure that only fully initialized pods were exposed to traffic.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 465,
    title: "Resource Starvation During Infrequent Scaling Events",
    description: "Resource Starvation During Infrequent Scaling Events",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted resource requests and limits to better reflect the actual usage during scaling events.
	• Increased node pool size to provide more headroom during burst scaling.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 466,
    title: "Autoscaler Delayed Reaction to Load Decrease",
    description: "Autoscaler Delayed Reaction to Load Decrease",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced the cooldown period in the HPA configuration to make it more responsive to traffic decreases.
	• Set resource limits to better reflect current traffic levels.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 467,
    title: "Node Resource Exhaustion Due to High Pod Density",
    description: "Node Resource Exhaustion Due to High Pod Density",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted pod affinity rules to distribute pods more evenly across the cluster.
	• Increased the number of nodes available to handle the pod load more effectively.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 468,
    title: "Scaling Failure Due to Node Memory Pressure",
    description: "Scaling Failure Due to Node Memory Pressure",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased memory resources on nodes and adjusted pod resource requests to better match available resources.
	• Implemented memory-based autoscaling to handle memory pressure better during scaling events.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 469,
    title: "Scaling Latency Due to Slow Node Provisioning",
    description: "Scaling Latency Due to Slow Node Provisioning",
    component: "Unknown",
    severity: "medium",
    resolution: `• Worked with the cloud provider to speed up node provisioning times.
	• Used preemptible nodes to quickly handle scaling demands during traffic spikes.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 470,
    title: "Slow Scaling Response Due to Insufficient Metrics Collection",
    description: "Slow Scaling Response Due to Insufficient Metrics Collection",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the metric collection to use real-time data, reducing the delay in scaling actions.
	• Implemented a more frequent metric scraping interval to improve responsiveness.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 471,
    title: "Node Scaling Delayed Due to Cloud Provider API Limits",
    description: "Node Scaling Delayed Due to Cloud Provider API Limits",
    component: "Unknown",
    severity: "medium",
    resolution: `• Worked with the cloud provider to increase API rate limits.
	• Configured autoscaling to use multiple API keys to distribute the API requests and avoid hitting rate limits.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 472,
    title: "Scaling Overload Due to High Replica Count",
    description: "Scaling Overload Due to High Replica Count",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted the replica scaling thresholds in the HPA configuration.
	• Limited the maximum replica count to avoid overload.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 473,
    title: "Failure to Scale Down Due to Persistent Idle Pods",
    description: "Failure to Scale Down Due to Persistent Idle Pods",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated the readiness probe configuration to ensure pods were correctly marked as ready or not based on their actual state.
	• Configured the HPA to scale down based on actual pod readiness.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 474,
    title: "Load Balancer Misrouting After Pod Scaling",
    description: "Load Balancer Misrouting After Pod Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Configured the load balancer to refresh routing rules dynamically during pod scaling events.
	• Ensured that only ready and healthy pods were included in the load balancer’s routing pool.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 475,
    title: "Cluster Autoscaler Not Triggering Under High Load",
    description: "Cluster Autoscaler Not Triggering Under High Load",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted resource requests and limits to match node capacity.
	• Tuned the Cluster Autoscaler to scale more aggressively during high load situations.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 476,
    title: "Autoscaling Slow Due to Cloud Provider API Delay",
    description: "Autoscaling Slow Due to Cloud Provider API Delay",
    component: "Unknown",
    severity: "medium",
    resolution: `• Worked with the cloud provider to optimize node provisioning time.
	• Increased API limits to accommodate the scaling operations.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 477,
    title: "Over-provisioning Resources During Scaling",
    description: "Over-provisioning Resources During Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced resource requests and limits to more closely match actual usage patterns.
	• Enabled auto-scaling of resource limits based on traffic patterns.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 478,
    title: "Incorrect Load Balancer Configuration After Node Scaling",
    description: "Incorrect Load Balancer Configuration After Node Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated load balancer settings to ensure they dynamically adjust based on node changes.
	• Implemented a health check system for nodes before routing traffic.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 478,
    title: "Incorrect Load Balancer Configuration After Node Scaling",
    description: "Incorrect Load Balancer Configuration After Node Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Updated load balancer settings to ensure they dynamically adjust based on node changes.
	• Implemented a health check system for nodes before routing traffic.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 479,
    title: "Autoscaling Disabled Due to Resource Constraints",
    description: "Autoscaling Disabled Due to Resource Constraints",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reduced resource requests and limits on existing pods.
	• Requested additional capacity from the cloud provider to handle scaling operations.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 480,
    title: "Resource Fragmentation Leading to Scaling Delays",
    description: "Resource Fragmentation Leading to Scaling Delays",
    component: "Unknown",
    severity: "medium",
    resolution: `• Enabled pod affinity and anti-affinity rules to ensure better distribution of pods across nodes.
	• Reconfigured node selectors and affinity rules for optimal pod placement.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 481,
    title: "Incorrect Scaling Triggers Due to Misconfigured Metrics Server",
    description: "Incorrect Scaling Triggers Due to Misconfigured Metrics Server",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the metrics server configuration to ensure it provided accurate resource data.
	• Adjusted the scaling thresholds to be more aligned with actual traffic patterns.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 482,
    title: "Autoscaler Misconfigured with Cluster Network Constraints",
    description: "Autoscaler Misconfigured with Cluster Network Constraints",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted network policies and firewall rules to allow communication between new and existing nodes.
	• Configured the autoscaler to take network constraints into account during scaling events.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 483,
    title: "Scaling Delays Due to Resource Quota Exhaustion",
    description: "Scaling Delays Due to Resource Quota Exhaustion",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the resource quotas to allow for more pods and scaling capacity.
	• Reviewed and adjusted resource quotas to ensure they aligned with expected scaling behavior.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 484,
    title: "Memory Resource Overload During Scaling",
    description: "Memory Resource Overload During Scaling",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted pod memory requests and limits to avoid over-provisioning.
	• Increased memory resources on the nodes to handle the scaled workload.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 485,
    title: "HPA Scaling Delays Due to Incorrect Metric Aggregation",
    description: "HPA Scaling Delays Due to Incorrect Metric Aggregation",
    component: "Unknown",
    severity: "medium",
    resolution: `• Corrected the aggregation settings to ensure faster response times for scaling events.
	• Tuned the HPA configuration to react more quickly to traffic fluctuations.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 486,
    title: "Scaling Causing Unbalanced Pods Across Availability Zones",
    description: "Scaling Causing Unbalanced Pods Across Availability Zones",
    component: "Unknown",
    severity: "medium",
    resolution: `• Reconfigured pod affinity rules to ensure an even distribution across availability zones.
	• Implemented anti-affinity rules to avoid overloading specific zones.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 487,
    title: "Failed Scaling due to Insufficient Node Capacity for StatefulSets",
    description: "Failed Scaling due to Insufficient Node Capacity for StatefulSets",
    component: "Unknown",
    severity: "medium",
    resolution: `• Increased the node pool size and resource limits for the StatefulSets.
	• Rescheduled PVCs and balanced the resource requests more effectively across nodes.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 488,
    title: "Uncontrolled Resource Spikes After Scaling Large StatefulSets",
    description: "Uncontrolled Resource Spikes After Scaling Large StatefulSets",
    component: "Unknown",
    severity: "medium",
    resolution: `• Adjusted resource requests and limits for StatefulSet pods to better match the actual usage.
	• Implemented a rolling upgrade to distribute the scaling load more evenly.`,
    tags: [],
    category: "Scaling & Load"
  },
  {
    id: 489,
    title: "Cluster Autoscaler Preventing Scaling Due to Underutilized Nodes",
    description: "Cluster Autoscaler Preventing Scaling Due to Underutilized Nodes",
    component: "Unknown",
    severity: "medium",
    resolution: `Not specified`,
    tags: [],
    category: "Scaling & Load"
  },
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
