import { Issue, SeverityType, ComponentFilter, CategoryFilter } from "@/lib/types";

// This is a complete collection of issues from the k8s-500-prod-issues repository
// Source: https://github.com/vijay2181/k8s-500-prod-issues
export const issues: Issue[] = [

  {
    "id": 1,
    "title": "Zombie Pods Causing NodeDrain to Hang",
    "description": "Node drain stuck indefinitely due to unresponsive terminating pod.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "kubectl patch pod <pod-name> -p '{\"metadata\":{\"finalizers\":[]}}' --type=merge",
    "tags": [
      "node",
      "namespace",
      "api server",
      "pod",
      "controller"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 2,
    "title": "API Server Crash Due to Excessive CRD Writes",
    "description": "API server crashed due to flooding by a malfunctioning controller creating too many custom resources.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Scaled the controller to 0 replicas. \t\u2022 Manually deleted thousands of stale CRs using batch deletion.",
    "tags": [
      "crd",
      "replica",
      "api server",
      "controller",
      "etcd"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 3,
    "title": "Node Not Rejoining After Reboot",
    "description": "A rebooted node failed to rejoin the cluster due to kubelet identity mismatch.",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Re-joined the node using correct --hostname-override. \t\u2022 Cleaned up stale node entry from the cluster.",
    "tags": [
      "kubelet",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 4,
    "title": "Etcd Disk Full Causing API Server Timeout",
    "description": "etcd ran out of disk space, making API server unresponsive.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "bash",
    "tags": [
      "api server",
      "etcd",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 5,
    "title": "Misconfigured Taints Blocking Pod Scheduling",
    "description": "Critical workloads weren\u2019t getting scheduled due to incorrect node taints.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Removed the inappropriate taints. \t\u2022 Re-scheduled workloads.",
    "tags": [
      "node",
      "taints",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 6,
    "title": "Kubelet DiskPressure Loop on Large Image Pulls",
    "description": "Continuous pod evictions caused by DiskPressure due to image bloating.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rebuilt image using multistage builds and removed unused layers. \t\u2022 Increased ephemeral disk space temporarily.",
    "tags": [
      "kubelet",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 7,
    "title": "Node Goes NotReady Due to Clock Skew",
    "description": "One node dropped from the cluster due to TLS errors from time skew.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Restarted NTP sync. \t\u2022 Restarted kubelet after sync.",
    "tags": [
      "kubelet",
      "service",
      "node",
      "certificate",
      "api server"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 8,
    "title": "API Server High Latency Due to Event Flooding",
    "description": "An app spamming Kubernetes events slowed down the entire API server.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Patched controller to rate-limit record.Eventf. \t\u2022 Cleaned old events.",
    "tags": [
      "controller",
      "api server",
      "etcd"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 9,
    "title": "CoreDNS CrashLoop on Startup",
    "description": "CoreDNS pods kept crashing due to a misconfigured Corefile.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Reverted to backup configmap. \t\u2022 Restarted CoreDNS.",
    "tags": [
      "coredns",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 10,
    "title": "Control Plane Unavailable After Flannel Misconfiguration",
    "description": "Misaligned pod CIDRs caused overlay misrouting and API server failure.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured node with proper CIDR range. \t\u2022 Flushed iptables and restarted Flannel.",
    "tags": [
      "kubelet",
      "node",
      "api server",
      "cni",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 11,
    "title": "kube-proxy IPTables Rules Overlap Breaking Networking",
    "description": "Services became unreachable due to overlapping custom IPTables rules with kube-proxy rules.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Flushed custom rules and reloaded kube-proxy. bash",
    "tags": [
      "service",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 12,
    "title": "Stuck CSR Requests Blocking New Node Joins",
    "description": "New nodes couldn\u2019t join due to a backlog of unapproved CSRs.",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "bash",
    "tags": [
      "kubelet",
      "node",
      "controller",
      "certificate"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 13,
    "title": "Failed Cluster Upgrade Due to Unready Static Pods",
    "description": "Upgrade failed when static control plane pods weren\u2019t ready due to invalid manifests.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Fixed manifest. \t\u2022 Restarted kubelet to load corrected pod.",
    "tags": [
      "kubelet",
      "etcd",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 14,
    "title": "Uncontrolled Logs Filled Disk on All Nodes",
    "description": "Application pods generated excessive logs, filling up node /var/log.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rotated and truncated logs. \t\u2022 Restarted container runtime after cleanup. \t\u2022 Disabled debug logging.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 15,
    "title": "Node Drain Fails Due to PodDisruptionBudget Deadlock",
    "description": "kubectl drain never completed because PDBs blocked eviction.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Temporarily edited PDB to reduce minAvailable. \t\u2022 Scaled up replicas before drain.",
    "tags": [
      "hpa",
      "node",
      "poddisruptionbudget",
      "replica",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 16,
    "title": "CrashLoop of Kube-Controller-Manager on Boot",
    "description": "Controller-manager crashed on startup due to outdated admission controller configuration.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Removed the deprecated plugin from startup flags. \t\u2022 Restarted pod.",
    "tags": [
      "controller",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 17,
    "title": "Inconsistent Cluster State After Partial Backup Restore",
    "description": "A partial etcd restore led to stale object references and broken dependencies.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Manually recreated PVCs and secrets using backups from another tool. \t\u2022 Redeployed apps.",
    "tags": [
      "etcd",
      "namespace",
      "pvc",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 18,
    "title": "kubelet Unable to Pull Images Due to Proxy Misconfig",
    "description": "Nodes failed to pull images from DockerHub due to incorrect proxy environment configuration.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated kubelet service file to include proper NO_PROXY. \t\u2022 Restarted kubelet.",
    "tags": [
      "kubelet",
      "service",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 19,
    "title": "Multiple Nodes Marked Unreachable Due to Flaky Network Interface",
    "description": "Flapping interface on switch caused nodes to be marked NotReady intermittently.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Replaced cable and switch port. \t\u2022 Set up redundant bonding with failover.",
    "tags": [
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 20,
    "title": "Node Labels Accidentally Overwritten by DaemonSet",
    "description": "A DaemonSet used for node labeling overwrote existing labels used by schedulers.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Restored original labels from backup. \t\u2022 Updated script to merge labels.",
    "tags": [
      "controller",
      "scheduler",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 21,
    "title": "Cluster Autoscaler Continuously Spawning and Deleting Nodes",
    "description": "The cluster was rapidly scaling up and down, creating instability in workloads.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Fixed the readiness probe to accurately reflect pod health. \t\u2022 Tuned scale-down-delay-after-add and scale-down-unneeded-time settings.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 22,
    "title": "Stale Finalizers Preventing Namespace Deletion",
    "description": "A namespace remained in \u201cTerminating\u201d state indefinitely.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Manually removed finalizers using a patched JSON: bash",
    "tags": [
      "controller",
      "crd",
      "namespace"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 23,
    "title": "CoreDNS CrashLoop Due to Invalid ConfigMap Update",
    "description": "CoreDNS stopped resolving names cluster-wide after a config update.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Rolled back to previous working ConfigMap. \t\u2022 Restarted CoreDNS pods to pick up change.",
    "tags": [
      "service",
      "coredns",
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 24,
    "title": "Pod Eviction Storm Due to DiskPressure",
    "description": "A sudden spike in image pulls caused all nodes to hit disk pressure, leading to massive pod evictions.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Pruned unused images. \t\u2022 Enabled container runtime garbage collection.",
    "tags": [
      "kubelet",
      "job",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 25,
    "title": "Orphaned PVs Causing Unscheduled Pods",
    "description": "PVCs were stuck in Pending state due to existing orphaned PVs in Released state.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted orphaned PVs. \t\u2022 Changed ReclaimPolicy to Delete for similar volumes.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 26,
    "title": "Taints and Tolerations Mismatch Prevented Workload Scheduling",
    "description": "Workloads failed to schedule on new nodes that had a taint the workloads didn\u2019t tolerate.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added proper tolerations to workloads: yaml",
    "tags": [
      "node",
      "taints",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 27,
    "title": "Node Bootstrap Failure Due to Unavailable Container Registry",
    "description": "New nodes failed to join the cluster due to container runtime timeout when pulling base images.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Brought internal registry back online. \t\u2022 Pre-pulled pause/CNI images to node image templates.",
    "tags": [
      "node",
      "cni"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 28,
    "title": "kubelet Fails to Start Due to Expired TLS Certs",
    "description": "Several nodes went NotReady after reboot due to kubelet failing to start with expired client certs.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Regenerated kubelet certs using kubeadm. bash",
    "tags": [
      "kubelet",
      "api server",
      "node",
      "certificate"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 29,
    "title": "kube-scheduler Crash Due to Invalid Leader Election Config",
    "description": "kube-scheduler pod failed with panic due to misconfigured leader election flags.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Created the missing namespace. \t\u2022 Restarted the scheduler pod.",
    "tags": [
      "scheduler",
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 30,
    "title": "Cluster DNS Resolution Broken After Calico CNI Update",
    "description": "DNS resolution broke after Calico CNI update due to iptables policy drop changes.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Added explicit Calico policy allowing kube-dns to pod traffic. yaml: egress: - action: Allow  destination:   selector: \"k8s-app == 'kube-dns'\"",
    "tags": [
      "coredns",
      "cni",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 31,
    "title": "Node Clock Drift Causing Authentication Failures",
    "description": "Authentication tokens failed across the cluster due to node clock skew.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Re-enabled and restarted NTP on all nodes. \t\u2022 Synchronized system clocks manually.",
    "tags": [
      "api server",
      "node",
      "certificate"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 32,
    "title": "Inconsistent Node Labels Causing Scheduling Bugs",
    "description": "Zone-aware workloads failed to schedule due to missing zone labels on some nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually patched node labels to restore zone metadata.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 33,
    "title": "API Server Slowdowns from High Watch Connection Count",
    "description": "API latency rose sharply due to thousands of watch connections from misbehaving clients.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Restarted offending pods. \t\u2022 Updated controller to reuse watches.",
    "tags": [
      "controller",
      "api server",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 34,
    "title": "Etcd Disk Full Crashing the Cluster",
    "description": "Entire control plane crashed due to etcd disk running out of space.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Performed etcd compaction and defragmentation. \t\u2022 Added disk space temporarily.",
    "tags": [
      "job",
      "etcd"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 35,
    "title": "ClusterConfigMap Deleted by Accident Bringing Down Addons",
    "description": "A user accidentally deleted the kube-root-ca.crt ConfigMap, which many workloads relied on.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Recreated ConfigMap from backup. \t\u2022 Re-deployed affected system workloads.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 36,
    "title": "Misconfigured NodeAffinity Excluding All Nodes",
    "description": "A critical deployment was unschedulable due to strict nodeAffinity rules.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated deployment YAML to reflect actual zones. \t\u2022 Re-deployed workloads.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 37,
    "title": "Outdated Admission Webhook Blocking All Deployments",
    "description": "A stale mutating webhook caused all deployments to fail due to TLS certificate errors.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Renewed cert and redeployed webhook. \t\u2022 Disabled webhook temporarily for emergency deployments.",
    "tags": [
      "webhook",
      "certificate",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 38,
    "title": "API Server Certificate Expiry Blocking Cluster Access",
    "description": "After 1 year of uptime, API server certificate expired, blocking access to all components.",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Used kubeadm certs renew all. \t\u2022 Restarted control plane components.",
    "tags": [
      "api server",
      "etcd",
      "certificate"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 39,
    "title": "CRI Socket Mismatch Preventing kubelet Startup",
    "description": "kubelet failed to start after switching from Docker to containerd due to incorrect CRI socket path.",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Updated kubelet flags to point to /run/containerd/containerd.sock. \t\u2022 Restarted kubelet.",
    "tags": [
      "kubelet",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 40,
    "title": "Cluster-Wide Crash Due to Misconfigured Resource Quotas",
    "description": "Cluster workloads failed after applying overly strict resource quotas that denied new pod creation.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rolled back the quota to previous values. \t\u2022 Unblocked critical namespaces manually.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 41,
    "title": "Cluster Upgrade Failing Due to CNI Compatibility",
    "description": "Cluster upgrade failed due to an incompatible version of the CNI plugin.",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Upgraded the CNI plugin to the version compatible with K8s v1.22. \t\u2022 Restarted affected pods and nodes.",
    "tags": [
      "kubelet",
      "node",
      "cni",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 42,
    "title": "Failed Pod Security Policy Enforcement Causing Privileged Container Launch",
    "description": "Privileged containers were able to run despite Pod Security Policy enforcement.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled the podsecuritypolicy admission controller. \t\u2022 Updated the PodSecurityPolicy to restrict privileged containers.",
    "tags": [
      "controller",
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 43,
    "title": "Node Pool Scaling Impacting StatefulSets",
    "description": "StatefulSet pods were rescheduled across different nodes, breaking persistent volume bindings.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added proper node affinity rules and volume binding policies to StatefulSet. \t\u2022 Rescheduled the pods successfully.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 44,
    "title": "Kubelet Crash Due to Out of Memory (OOM) Errors",
    "description": "Kubelet crashed after running out of memory due to excessive pod resource usage.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set proper resource requests and limits on pods to prevent memory over-consumption. \t\u2022 Restarted the kubelet on the affected node.",
    "tags": [
      "kubelet",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 45,
    "title": "DNS Resolution Failure in Multi-Cluster Setup",
    "description": "DNS resolution failed between two federated clusters due to missing DNS records.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Added missing DNS records manually. \t\u2022 Updated DNS configurations to include service records for all federated clusters.",
    "tags": [
      "service"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 46,
    "title": "Insufficient Resource Limits in Autoscaling Setup",
    "description": "Horizontal Pod Autoscaler did not scale pods up as expected due to insufficient resource limits.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased resource requests and limits for the affected pods. \t\u2022 Manually scaled the pods and monitored the autoscaling behavior.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 47,
    "title": "Control Plane Overload Due to High Audit Log Volume",
    "description": "The control plane became overloaded and slow due to excessive audit log volume.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Refined audit policy to log only critical events. \t\u2022 Restarted the API server.",
    "tags": [
      "api server"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 48,
    "title": "Resource Fragmentation Causing Cluster Instability",
    "description": "Resource fragmentation due to unbalanced pod distribution led to cluster instability.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Applied pod affinity and anti-affinity rules to achieve balanced scheduling. \t\u2022 Rescheduled pods manually to redistribute workload.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 49,
    "title": "Failed Cluster Backup Due to Misconfigured Volume Snapshots",
    "description": "Cluster backup failed due to a misconfigured volume snapshot driver.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Corrected snapshot driver configuration in storage class. \t\u2022 Ran the backup process again, which completed successfully.",
    "tags": [
      "general"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 50,
    "title": "Failed Deployment Due to Image Pulling Issues",
    "description": "Deployment failed due to image pulling issues from a custom Docker registry.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Corrected the image pull secrets in the deployment YAML. \t\u2022 Re-deployed the application.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 51,
    "title": "High Latency Due to Inefficient Ingress Controller Configuration",
    "description": "Ingress controller configuration caused high network latency due to inefficient routing rules.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Simplified ingress resource definitions and optimized routing rules. \t\u2022 Restarted ingress controller to apply changes.",
    "tags": [
      "controller",
      "ingress"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 52,
    "title": "Node Draining Delay During Maintenance",
    "description": "Node draining took an unusually long time during maintenance due to unscheduled pod disruption.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted PodDisruptionBudget to allow more flexibility for pod evictions. \t\u2022 Manually evicted the pods to speed up the node draining process.",
    "tags": [
      "node",
      "poddisruptionbudget",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 53,
    "title": "Unresponsive Cluster After Large-Scale Deployment",
    "description": "Cluster became unresponsive after deploying a large number of pods in a single batch.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Implemented gradual pod deployment using rolling updates instead of a batch deployment. \t\u2022 Increased the node resource capacity to handle larger loads.",
    "tags": [
      "api server",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 54,
    "title": "Failed Node Recovery Due to Corrupt Kubelet Configuration",
    "description": "Node failed to recover after being drained due to a corrupt kubelet configuration.",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Replaced the corrupted kubelet configuration file with a backup. \t\u2022 Restarted the kubelet service and the node successfully rejoined the cluster.",
    "tags": [
      "kubelet",
      "service",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 55,
    "title": "Resource Exhaustion Due to Misconfigured Horizontal Pod Autoscaler",
    "description": "Cluster resources were exhausted due to misconfiguration in the Horizontal Pod Autoscaler (HPA), resulting in excessive pod scaling.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted HPA configuration to scale based on a combination of CPU and memory usage. \t\u2022 Set more appropriate scaling thresholds.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 56,
    "title": "Inconsistent Application Behavior After Pod Restart",
    "description": "Application behavior became inconsistent after pod restarts due to improper state handling.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Moved application state to persistent volumes or external databases. \t\u2022 Adjusted the application logic to handle state recovery properly after restarts.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 57,
    "title": "Cluster-wide Service Outage Due to Missing ClusterRoleBinding",
    "description": "Cluster-wide service outage occurred after an automated change removed a critical ClusterRoleBinding.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Restored the missing ClusterRoleBinding. \t\u2022 Manually verified that affected services were functioning correctly.",
    "tags": [
      "service"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 58,
    "title": "Node Overcommitment Leading to Pod Evictions",
    "description": "Node overcommitment led to pod evictions, causing application downtime.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added appropriate resource requests and limits to the affected pods. \t\u2022 Rescheduled the pods to other nodes with available resources.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 59,
    "title": "Failed Pod Startup Due to Image Pull Policy Misconfiguration",
    "description": "Pods failed to start because the image pull policy was misconfigured.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Changed the image pull policy to IfNotPresent or Always in the pod configuration. \t\u2022 Re-deployed the pods.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 60,
    "title": "Excessive Control Plane Resource Usage During Pod Scheduling",
    "description": "Control plane resources were excessively utilized during pod scheduling, leading to slow deployments.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Optimized the scheduler configuration to reduce resource usage. \t\u2022 Split large workloads into smaller ones to improve scheduling efficiency.",
    "tags": [
      "affinity",
      "scheduler",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 61,
    "title": "Persistent Volume Claim Failure Due to Resource Quota Exceedance",
    "description": "Persistent Volume Claims (PVCs) failed due to exceeding the resource quota for storage in the namespace.",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Increased the storage quota in the namespace. \t\u2022 Cleaned up unused PVCs to free up space.",
    "tags": [
      "resourcequota",
      "pvc",
      "namespace"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 62,
    "title": "Failed Pod Rescheduling Due to Node Affinity Misconfiguration",
    "description": "Pods failed to reschedule after a node failure due to improper node affinity rules.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the node affinity rules to be less restrictive. \t\u2022 Re-scheduled the pods to available nodes.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 63,
    "title": "Intermittent Network Latency Due to Misconfigured CNI Plugin",
    "description": "Network latency issues occurred intermittently due to misconfiguration in the CNI (Container Network Interface) plugin.",
    "component": "CNI Plugin",
    "severity": "medium",
    "resolution": "\u2022 Corrected the MTU setting in the CNI configuration to match the network infrastructure. \t\u2022 Restarted the CNI plugin and verified network performance.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 64,
    "title": "Excessive Pod Restarts Due to Resource Limits",
    "description": "A pod was restarting frequently due to resource limits being too low, causing the container to be killed.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the memory limits and requests for the affected pods. \t\u2022 Re-deployed the updated pods and monitored for stability.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 65,
    "title": "Cluster Performance Degradation Due to Excessive Logs",
    "description": "Cluster performance degraded because of excessive logs being generated by applications, leading to high disk usage.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Configured log rotation for the affected applications. \t\u2022 Reduced the verbosity of the logs in application settings.",
    "tags": [
      "general"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 66,
    "title": "Insufficient Cluster Capacity Due to Unchecked CronJobs",
    "description": "The cluster experienced resource exhaustion because CronJobs were running in parallel without proper capacity checks.",
    "component": "Job",
    "severity": "medium",
    "resolution": "\u2022 Added resource requests and limits for CronJobs. \t\u2022 Configured CronJobs to stagger their execution times to avoid simultaneous execution.",
    "tags": [
      "job"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 67,
    "title": "Unsuccessful Pod Scaling Due to Affinity/Anti-Affinity Conflict",
    "description": "Pod scaling failed due to conflicting affinity/anti-affinity rules that prevented pods from being scheduled.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Relaxed the anti-affinity rule to allow pods to be scheduled on any available node. \t\u2022 Increased the number of nodes to ensure sufficient capacity.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 68,
    "title": "Cluster Inaccessibility Due to API Server Throttling",
    "description": "Cluster became inaccessible due to excessive API server throttling caused by too many concurrent requests.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Throttled client requests to reduce API server load. \t\u2022 Implemented exponential backoff for retries in client applications.",
    "tags": [
      "api server"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 69,
    "title": "Persistent Volume Expansion Failure",
    "description": "Expansion of a Persistent Volume (PV) failed due to improper storage class settings.",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Updated the storage class to allow volume expansion. \t\u2022 Expanded the persistent volume and verified the PVC reflected the changes.",
    "tags": [
      "pvc"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 70,
    "title": "Unauthorized Access to Cluster Resources Due to RBAC Misconfiguration",
    "description": "Unauthorized users gained access to sensitive resources due to misconfigured RBAC roles and bindings.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Corrected RBAC policies to restrict access. \t\u2022 Audited user access and removed unauthorized permissions.",
    "tags": [
      "general"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 71,
    "title": "Inconsistent Pod State Due to Image Pull Failures",
    "description": "Pods entered an inconsistent state because the container image failed to pull due to incorrect image tag.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the image tag in the deployment configuration to point to an existing image. \t\u2022 Redeployed the application.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 72,
    "title": "Pod Disruption Due to Insufficient Node Resources",
    "description": "Pods experienced disruptions as nodes ran out of CPU and memory, causing evictions.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added more nodes to the cluster to meet resource requirements. \t\u2022 Adjusted pod resource requests/limits to be more aligned with node resources.",
    "tags": [
      "scheduler",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 73,
    "title": "Service Discovery Issues Due to DNS Resolution Failures",
    "description": "Services could not discover each other due to DNS resolution failures, affecting internal communication.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased resource limits for the CoreDNS pods. \t\u2022 Restarted CoreDNS pods to apply the new resource settings.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 74,
    "title": "Persistent Volume Provisioning Delays",
    "description": "Persistent volume provisioning was delayed due to an issue with the dynamic provisioner.",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Corrected the storage class settings, ensuring the correct provisioner was specified. \t\u2022 Recreated the PVCs, and provisioning completed successfully.",
    "tags": [
      "pvc"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 75,
    "title": "Deployment Rollback Failure Due to Missing Image",
    "description": "A deployment rollback failed due to the rollback image version no longer being available in the container registry.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rebuilt the previous image version and pushed it to the registry. \t\u2022 Triggered a successful rollback after the image was available.",
    "tags": [
      "general"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 76,
    "title": "Kubernetes Master Node Unresponsive After High Load",
    "description": "The Kubernetes master node became unresponsive under high load due to excessive API server calls and high memory usage.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Implemented API rate limiting to control excessive calls. \t\u2022 Increased the memory allocated to the master node.",
    "tags": [
      "api server",
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 77,
    "title": "Failed Pod Restart Due to Inadequate Node Affinity",
    "description": "Pods failed to restart on available nodes due to overly strict node affinity rules.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Relaxed the node affinity rules in the pod spec. \t\u2022 Redeployed the pod, and it successfully restarted on an available node.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 78,
    "title": "ReplicaSet Scaling Issues Due to Resource Limits",
    "description": "The ReplicaSet failed to scale due to insufficient resources on the nodes.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Added more nodes to the cluster to handle the increased workload. \t\u2022 Adjusted resource requests and limits to ensure efficient resource allocation.",
    "tags": [
      "node",
      "replica",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 79,
    "title": "Missing Namespace After Cluster Upgrade",
    "description": "A namespace was missing after performing a cluster upgrade.",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Restored the missing namespace from backups. \t\u2022 Investigated and fixed the upgrade process to prevent future occurrences.",
    "tags": [
      "namespace"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 80,
    "title": "Inefficient Resource Usage Due to Misconfigured Horizontal Pod Autoscaler",
    "description": "The Horizontal Pod Autoscaler (HPA) was inefficiently scaling due to misconfigured metrics.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the HPA to scale based on correct metrics (e.g., memory, custom metrics). \t\u2022 Verified that the metrics-server was reporting accurate data.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 81,
    "title": "Pod Disruption Due to Unavailable Image Registry",
    "description": "Pods could not start because the image registry was temporarily unavailable, causing image pull failures.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually downloaded the images from a secondary registry. \t\u2022 Temporarily used a local image registry until the primary registry was back online.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 82,
    "title": "Pod Fails to Start Due to Insufficient Resource Requests",
    "description": "Pods failed to start because their resource requests were too low, preventing the scheduler from assigning them to nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource requests in the pod spec. \t\u2022 Reapplied the configuration, and the pods were scheduled successfully.",
    "tags": [
      "scheduler",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 83,
    "title": "Horizontal Pod Autoscaler Under-Scaling During Peak Load",
    "description": "HPA failed to scale the pods appropriately during a sudden spike in load.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted HPA thresholds to scale more aggressively under higher loads. \t\u2022 Increased the replica count to handle the peak load.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 84,
    "title": "Pod Eviction Due to Node Disk Pressure",
    "description": "Pods were evicted due to disk pressure on the node, causing service interruptions.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased disk capacity on the affected node. \t\u2022 Cleared unnecessary logs and old data from the disk.",
    "tags": [
      "kubelet",
      "service",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 85,
    "title": "Failed Node Drain Due to In-Use Pods",
    "description": "A node failed to drain due to pods that were in use, preventing the drain operation from completing.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased termination grace periods for the affected pods. \t\u2022 Forced the node drain operation after ensuring that the pods could safely terminate.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 86,
    "title": "Cluster Autoscaler Not Scaling Up",
    "description": "The cluster autoscaler failed to scale up the node pool despite high resource demand.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the scaling thresholds in the autoscaler configuration. \t\u2022 Verified the correct IAM permissions for the autoscaler to scale the node pool.",
    "tags": [
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 87,
    "title": "Pod Network Connectivity Issues After Node Reboot",
    "description": "Pods lost network connectivity after a node reboot, causing communication failures between services.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually restarted the CNI plugin on the affected node. \t\u2022 Ensured that the CNI plugin was configured to restart properly after a node reboot.",
    "tags": [
      "service",
      "node",
      "cni",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 88,
    "title": "Insufficient Permissions Leading to Unauthorized Access Errors",
    "description": "Unauthorized access errors occurred due to missing permissions in RBAC configurations.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Updated the RBAC roles and bindings to include the necessary permissions for the pods. \t\u2022 Applied the updated RBAC configurations and confirmed access.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 89,
    "title": "Failed Pod Upgrade Due to Incompatible API Versions",
    "description": "A pod upgrade failed because it was using deprecated APIs not supported in the new version.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the pod spec to use supported API versions. \t\u2022 Reapplied the deployment with the updated APIs.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 90,
    "title": "High CPU Utilization Due to Inefficient Application Code",
    "description": "A container's high CPU usage was caused by inefficient application code, leading to resource exhaustion.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Optimized the application code to reduce CPU consumption. \t\u2022 Redeployed the application with the optimized code.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 91,
    "title": "Resource Starvation Due to Over-provisioned Pods",
    "description": "Resource starvation occurred on nodes because pods were over-provisioned, consuming more resources than expected.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced resource requests and limits based on actual usage metrics. \t\u2022 Re-deployed the pods with optimized resource configurations.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 92,
    "title": "Unscheduled Pods Due to Insufficient Affinity Constraints",
    "description": "Pods were not scheduled due to overly strict affinity rules that limited the nodes available for deployment.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the affinity rules to be less restrictive. \t\u2022 Applied changes and verified the pods were scheduled correctly.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 93,
    "title": "Pod Readiness Probe Failure Due to Slow Initialization",
    "description": "Pods failed their readiness probes during initialization, causing traffic to be routed to unhealthy instances.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the readiness probe timeout and delay parameters. \t\u2022 Re-applied the deployment, and the pods started passing readiness checks.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 94,
    "title": "Incorrect Ingress Path Handling Leading to 404 Errors",
    "description": "Incorrect path configuration in the ingress resource resulted in 404 errors for certain API routes.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Fixed the path configuration in the ingress resource. \t\u2022 Re-applied the ingress configuration, and traffic was correctly routed.",
    "tags": [
      "service",
      "ingress"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 95,
    "title": "Node Pool Scaling Failure Due to Insufficient Quotas",
    "description": "Node pool scaling failed because the account exceeded resource quotas in AWS.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Requested a quota increase from AWS support. \t\u2022 Once the request was approved, scaled the node pool successfully.",
    "tags": [
      "node"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 96,
    "title": "Pod Crash Loop Due to Missing ConfigMap",
    "description": "Pods entered a crash loop because a required ConfigMap was not present in the namespace.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Recreated the ConfigMap in the namespace. \t\u2022 Re-deployed the pods, and they started successfully.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 97,
    "title": "Kubernetes API Server Slowness Due to Excessive Logging",
    "description": "The Kubernetes API server became slow due to excessive log generation from the kubelet and other components.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Reduced the verbosity of logs from the kubelet and other components. \t\u2022 Configured log rotation to prevent logs from consuming too much disk space.",
    "tags": [
      "kubelet",
      "api server",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 98,
    "title": "Pod Scheduling Failure Due to Taints and Tolerations Misconfiguration",
    "description": "Pods failed to schedule because the taints and tolerations were misconfigured, preventing the scheduler from placing them on nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the tolerations in the pod specs to match the taints on the nodes. \t\u2022 Re-applied the pods and verified that they were scheduled correctly.",
    "tags": [
      "scheduler",
      "node",
      "taints",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 99,
    "title": "Unresponsive Dashboard Due to High Resource Usage",
    "description": "The Kubernetes dashboard became unresponsive due to high resource usage caused by a large number of requests.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Scaled the dashboard deployment to multiple replicas to handle the load. \t\u2022 Adjusted resource requests and limits for the dashboard pod.",
    "tags": [
      "service",
      "replica",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 100,
    "title": "Resource Limits Causing Container Crashes",
    "description": "Containers kept crashing due to hitting resource limits set in their configurations.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource limits for the affected containers. \t\u2022 Re-applied the pod configurations and monitored for stability.",
    "tags": [
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 101,
    "title": "Pod Communication Failure Due to Network Policy Misconfiguration",
    "description": "Pods failed to communicate due to a misconfigured NetworkPolicy that blocked ingress traffic.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the NetworkPolicy to allow the necessary ingress traffic between the affected pods. \t\u2022 Re-applied the NetworkPolicy and tested communication.",
    "tags": [
      "namespace",
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 102,
    "title": "DNS Resolution Failure Due to CoreDNS Pod Crash",
    "description": "DNS resolution failed across the cluster after CoreDNS pods crashed unexpectedly.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased memory limits for CoreDNS pods. \t\u2022 Restarted the CoreDNS pods and verified DNS resolution functionality.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 103,
    "title": "Network Latency Due to Misconfigured Service Type",
    "description": "High network latency occurred because a service was incorrectly configured as a NodePortinstead of a LoadBalancer.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Changed the service type to LoadBalancer, which properly routed traffic through a managed load balancer. \t\u2022 Traffic was distributed evenly, and latency was reduced.",
    "tags": [
      "service",
      "node"
    ],
    "category": "Networking"
  },
  {
    "id": 104,
    "title": "Inconsistent Pod-to-Pod Communication Due to MTU Mismatch",
    "description": "Pod-to-pod communication became inconsistent due to a mismatch in Maximum Transmission Unit (MTU) settings across nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Aligned MTU settings across all nodes in the cluster. \t\u2022 Rebooted the nodes to apply the new MTU configuration.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 105,
    "title": "Service Discovery Failure Due to DNS Pod Resource Limits",
    "description": "Service discovery failed across the cluster due to DNS pod resource limits being exceeded.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased memory and CPU limits for CoreDNS pods. \t\u2022 Restarted CoreDNS pods and verified that DNS resolution was restored.",
    "tags": [
      "service",
      "coredns",
      "replica",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 106,
    "title": "Pod IP Collision Due to Insufficient IP Range",
    "description": "Pod IP collisions occurred due to insufficient IP range allocation for the cluster.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the pod network CIDR and restarted the cluster. \t\u2022 Re-deployed the affected pods to new IPs without collisions.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 107,
    "title": "Network Bottleneck Due to Single Node in NodePool",
    "description": "A network bottleneck occurred due to excessive traffic being handled by a single node in the node pool.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Increased the size of the node pool and added more nodes with higher resource capacity. \t\u2022 Rebalanced the pods across nodes and monitored for stability.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 108,
    "title": "Network Partitioning Due to CNI Plugin Failure",
    "description": "A network partition occurred when the CNI plugin failed, preventing pods from communicating with each other.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reinstalled the CNI plugin and applied the correct network configuration. \t\u2022 Re-deployed the affected pods after ensuring the network configuration was correct.",
    "tags": [
      "service",
      "cni",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 109,
    "title": "Misconfigured Ingress Resource Causing SSL Errors",
    "description": "SSL certificate errors occurred due to a misconfigured Ingress resource.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Corrected the SSL certificate annotations in the Ingress configuration. \t\u2022 Re-applied the Ingress resource and verified successful SSL handshakes.",
    "tags": [
      "certificate",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 110,
    "title": "Cluster Autoscaler Fails to Scale Nodes Due to Incorrect IAM Role Permissions",
    "description": "The cluster autoscaler failed to scale the number of nodes in response to resource shortages due to missing IAM role permissions for managing EC2 instances.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the IAM role associated with the cluster autoscaler to include the necessary permissions for EC2 instance provisioning. \t\u2022 Restarted the autoscaler and confirmed that new nodes were added successfully.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 111,
    "title": "DNS Resolution Failure Due to Incorrect Pod IP Allocation",
    "description": "DNS resolution failed due to incorrect IP allocation in the cluster\u2019s CNI plugin.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the CNI plugin to correctly allocate IPs within the defined range. \t\u2022 Re-deployed affected pods with new IPs that were correctly assigned.",
    "tags": [
      "service",
      "coredns",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 112,
    "title": "Failed Pod-to-Service Communication Due to Port Binding Conflict",
    "description": "Pods couldn\u2019t communicate with services because of a port binding conflict.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Changed the port for the service to a free port and re-applied the service configuration. \t\u2022 Verified that pod communication was restored.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 113,
    "title": "Pod Eviction Due to Network Resource Constraints",
    "description": "A pod was evicted due to network resource constraints, specifically limited bandwidth.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased network bandwidth limits on the affected node pool. \t\u2022 Re-scheduled the pod on a node with higher bandwidth availability.",
    "tags": [
      "kubelet",
      "service",
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 114,
    "title": "Intermittent Network Disconnects Due to MTU Mismatch Between Nodes",
    "description": "Intermittent network disconnects occurred due to MTU mismatches between different nodes in the cluster.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the MTU settings on all nodes to match the network interface requirements. \t\u2022 Rebooted nodes to apply the new MTU settings.",
    "tags": [
      "node"
    ],
    "category": "Networking"
  },
  {
    "id": 115,
    "title": "Service Load Balancer Failing to Route Traffic to New Pods",
    "description": "Service load balancer failed to route traffic to new pods after scaling up.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually refreshed the load balancer\u2019s backend pool configuration. \t\u2022 Monitored the traffic routing to ensure that it was properly balanced across all pods.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 116,
    "title": "Network Traffic Drop Due to Overlapping CIDR Blocks",
    "description": "Network traffic dropped due to overlapping CIDR blocks between the VPC and Kubernetes pod network.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the pod network CIDR block to avoid overlap with the VPC. \t\u2022 Re-deployed the affected pods and confirmed that traffic flow resumed.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 117,
    "title": "Misconfigured DNS Resolvers Leading to Service Discovery Failure",
    "description": "Service discovery failed due to misconfigured DNS resolvers.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Corrected the DNS resolver settings in the CoreDNS configuration. \t\u2022 Re-applied the configuration and verified that service discovery was restored.",
    "tags": [
      "coredns",
      "service"
    ],
    "category": "Networking"
  },
  {
    "id": 118,
    "title": "Intermittent Latency Due to Overloaded Network Interface",
    "description": "Intermittent network latency occurred due to an overloaded network interface on a single node.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rebalanced the pod distribution across nodes to reduce load on the overloaded network interface. \t\u2022 Increased network interface resources on the affected node.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 119,
    "title": "Pod Disconnection During Network Partition",
    "description": "Pods were disconnected during a network partition between nodes in the cluster.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Re-established network connectivity and ensured all nodes could communicate with each other. \t\u2022 Re-scheduled the disconnected pods to different nodes to restore connectivity.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 121,
    "title": "Pod-to-Pod Communication Blocked by Network Policies",
    "description": "Pod-to-pod communication was blocked due to overly restrictive network policies.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Modified the network policy to allow traffic between the pods. \t\u2022 Applied the updated policy and verified that communication was restored.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 122,
    "title": "Unresponsive External API Due to DNS Resolution Failure",
    "description": "External API calls from the pods failed due to DNS resolution issues for the external domain.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Corrected the upstream DNS server settings in CoreDNS. \t\u2022 Restarted CoreDNS pods to apply the new configuration.",
    "tags": [
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 123,
    "title": "Load Balancer Health Checks Failing After Pod Update",
    "description": "Load balancer health checks failed after updating a pod due to incorrect readiness probe configuration.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the readiness probe configuration to reflect the actual application startup time. \t\u2022 Redeployed the updated pods and verified that they passed the health checks.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 124,
    "title": "Pod Network Performance Degradation After Node Upgrade",
    "description": "Network performance degraded after an automatic node upgrade, causing latency in pod communication.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rolled back the node upgrade and manually updated the network interface drivers on the nodes. \t\u2022 Verified that network performance improved after driver updates.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 125,
    "title": "Service IP Conflict Due to CIDR Overlap",
    "description": "A service IP conflict occurred due to overlapping CIDR blocks, preventing correct routing of traffic to the service.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the service CIDR range to avoid conflicts. \t\u2022 Redeployed services with new IP assignments.",
    "tags": [
      "service"
    ],
    "category": "Networking"
  },
  {
    "id": 126,
    "title": "High Latency in Inter-Namespace Communication",
    "description": "High latency observed in inter-namespace communication, leading to application timeouts.",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Modified network policies to allow traffic between namespaces. \t\u2022 Verified that latency reduced after policy changes.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 127,
    "title": "Pod Network Disruptions Due to CNI Plugin Update",
    "description": "Pods experienced network disruptions after updating the CNI plugin to a newer version.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rolled back to the previous version of the CNI plugin. \t\u2022 Reported the bug to the plugin maintainers and kept the older version in place until a fix was released.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 128,
    "title": "Loss of Service Traffic Due to Missing Ingress Annotations",
    "description": "Loss of service traffic after ingress annotations were incorrectly set, causing the ingress controller to misroute traffic.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Fixed the ingress annotations and re-deployed the ingress resource. \t\u2022 Verified traffic flow from external sources to the service was restored.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 129,
    "title": "Node Pool Draining Timeout Due to Slow Pod Termination",
    "description": "The node pool draining process timed out during upgrades due to pods taking longer than expected to terminate.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced the grace period for pod termination. \t\u2022 Optimized resource cleanup tasks in the pods to reduce termination times.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 130,
    "title": "Failed Cluster Upgrade Due to Incompatible API Versions",
    "description": "The cluster upgrade failed because certain deprecated API versions were still in use, causing compatibility issues with the new K8s version.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Updated Kubernetes manifests to use the latest stable API versions. \t\u2022 Re-applied the updated resources and retried the cluster upgrade.",
    "tags": [
      "replica",
      "ingress"
    ],
    "category": "Cluster Management"
  },
  {
    "id": 131,
    "title": "DNS Resolution Failure for Services After Pod Restart",
    "description": "DNS resolution failed for services after restarting a pod, causing internal communication issues.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Restarted CoreDNS to clear the stale cache. \t\u2022 Verified that DNS resolution worked for services after the cache refresh.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 132,
    "title": "Pod IP Address Changes Causing Application Failures",
    "description": "Application failed after a pod IP address changed unexpectedly, breaking communication between services.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the application to use service DNS names instead of pod IPs. \t\u2022 Redeployed the application with the new configuration.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 133,
    "title": "Service Exposure Failed Due to Misconfigured Load Balancer",
    "description": "A service exposure attempt failed due to incorrect configuration of the AWS load balancer.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Modified the security group rules to allow traffic on the necessary ports. \t\u2022 Re-deployed the service with the updated configuration.",
    "tags": [
      "service"
    ],
    "category": "Networking"
  },
  {
    "id": 134,
    "title": "Network Latency Spikes During Pod Autoscaling",
    "description": "Network latency spikes occurred when autoscaling pods during traffic surges.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the autoscaling configuration to ensure new pods are distributed across nodes with better network resources. \t\u2022 Increased network capacity for nodes with higher pod density.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 135,
    "title": "Service Not Accessible Due to Incorrect Namespace Selector",
    "description": "A service was not accessible due to a misconfigured namespace selector in the service definition.",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Corrected the namespace selector in the service definition. \t\u2022 Redeployed the service to apply the fix.",
    "tags": [
      "service",
      "namespace"
    ],
    "category": "Networking"
  },
  {
    "id": 136,
    "title": "Intermittent Pod Connectivity Due to Network Plugin Bug",
    "description": "Pods experienced intermittent connectivity issues due to a bug in the CNI network plugin.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rolled back the CNI plugin to the previous stable version. \t\u2022 Reported the bug to the plugin maintainers for a fix.",
    "tags": [
      "service",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 137,
    "title": "Failed Ingress Traffic Routing Due to Missing Annotations",
    "description": "Ingress traffic was not properly routed to services due to missing annotations in the ingress resource.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Added the correct annotations to the ingress resource. \t\u2022 Redeployed the ingress resource and confirmed traffic routing was restored.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 138,
    "title": "Pod IP Conflict Causing Service Downtime",
    "description": "A pod IP conflict caused service downtime and application crashes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restarted the affected pods, which resolved the IP conflict. \t\u2022 Reported the issue to the CNI plugin developers and applied a bug fix.",
    "tags": [
      "service",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 139,
    "title": "Latency Due to Unoptimized Service Mesh Configuration",
    "description": "Increased latency in service-to-service communication due to suboptimal configuration of Istio service mesh.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Optimized Istio retry policies to avoid excessive retries. \t\u2022 Adjusted timeouts and circuit breakers for better performance.",
    "tags": [
      "service"
    ],
    "category": "Networking"
  },
  {
    "id": 139,
    "title": "DNS Resolution Failure After Cluster Upgrade",
    "description": "DNS resolution failures occurred across pods after a Kubernetes cluster upgrade.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Updated the CoreDNS config map to the correct version. \t\u2022 Restarted CoreDNS pods to apply the updated config.",
    "tags": [
      "coredns",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 140,
    "title": "Service Mesh Sidecar Injection Failure",
    "description": "Sidecar injection failed for some pods in the service mesh, preventing communication between services.",
    "component": "Admission Webhook",
    "severity": "medium",
    "resolution": "\u2022 Added the sidecar.istio.io/inject: \"true\" annotation to the missing pods. \t\u2022 Redeployed the pods to trigger sidecar injection.",
    "tags": [
      "service",
      "webhook",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 141,
    "title": "Network Bandwidth Saturation During Large-Scale Deployments",
    "description": "Network bandwidth was saturated during a large-scale deployment, affecting cluster communication.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Staggered the deployment of pods to distribute the load more evenly. \t\u2022 Used a local registry to reduce the impact of external image pulls.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 142,
    "title": "Inconsistent Network Policies Blocking Internal Traffic",
    "description": "Internal pod-to-pod traffic was unexpectedly blocked due to inconsistent network policies.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Merged conflicting network policy rules to allow the necessary traffic. \t\u2022 Applied the corrected policy and verified that pod communication was restored.",
    "tags": [
      "service",
      "namespace",
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 143,
    "title": "Pod Network Latency Caused by Overloaded CNI Plugin",
    "description": "Pod network latency increased due to an overloaded CNI plugin.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched to a more efficient CNI plugin (Calico) to handle the traffic load. \t\u2022 Tuned the Calico settings to optimize performance under heavy load.",
    "tags": [
      "service",
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 144,
    "title": "TCP Retransmissions Due to Network Saturation",
    "description": "TCP retransmissions increased due to network saturation, leading to degraded pod-to-pod communication.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased network bandwidth allocation for the cluster. \t\u2022 Implemented QoS policies to prioritize critical traffic.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 145,
    "title": "DNS Lookup Failures Due to Resource Limits",
    "description": "DNS lookup failures occurred due to resource limits on the CoreDNS pods.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource limits for CoreDNS pods to handle the load. \t\u2022 Restarted the CoreDNS pods to apply the new resource limits.",
    "tags": [
      "service",
      "hpa",
      "node",
      "pod",
      "coredns"
    ],
    "category": "Networking"
  },
  {
    "id": 146,
    "title": "Service Exposure Issues Due to Incorrect Ingress Configuration",
    "description": "A service was not accessible externally due to incorrect ingress configuration.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Corrected the service URL in the ingress resource. \t\u2022 Redeployed the ingress configuration.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 147,
    "title": "Pod-to-Pod Communication Failure Due to Network Policy",
    "description": "Pod-to-pod communication failed due to an overly restrictive network policy.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policy to allow traffic between pods in the same namespace. \t\u2022 Applied the updated policy and verified that communication was restored.",
    "tags": [
      "namespace",
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 148,
    "title": "Unstable Network Due to Overlay Network Misconfiguration",
    "description": "The overlay network was misconfigured, leading to instability in pod communication.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the IP pool configuration in the Calico settings. \t\u2022 Restarted Calico pods to apply the fix.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 149,
    "title": "Intermittent Pod Network Connectivity Due to Cloud Provider Issues",
    "description": "Pod network connectivity was intermittent due to issues with the cloud provider's network infrastructure.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Waited for the cloud provider to resolve the network issue. \t\u2022 Implemented automatic retries in application code to mitigate the impact of intermittent connectivity.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 150,
    "title": "Port Conflicts Between Services in Different Namespaces",
    "description": "Port conflicts between services in different namespaces led to communication failures.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the service definitions to use different ports for the conflicting services. \t\u2022 Redeployed the services and verified communication.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 151,
    "title": "NodePort Service Not Accessible Due to Firewall Rules",
    "description": "A NodePort service became inaccessible due to restrictive firewall rules on the cloud provider.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Updated the firewall rules to allow inbound traffic to the NodePort range. \t\u2022 Ensured that the required port was open on all nodes.",
    "tags": [
      "service",
      "node",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 152,
    "title": "DNS Latency Due to Overloaded CoreDNS Pods",
    "description": "CoreDNS latency increased due to resource constraints on the CoreDNS pods.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU and memory resource limits for CoreDNS pods. \t\u2022 Restarted CoreDNS pods to apply the new resource limits.",
    "tags": [
      "service",
      "coredns",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 153,
    "title": "Network Performance Degradation Due to Misconfigured MTU",
    "description": "Network performance degraded due to an incorrect Maximum Transmission Unit (MTU) setting.",
    "component": "CNI Plugin",
    "severity": "medium",
    "resolution": "\u2022 Aligned the MTU settings between the CNI plugin and the Kubernetes nodes. \t\u2022 Rebooted affected nodes to apply the configuration changes.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 154,
    "title": "Application Traffic Routing Issue Due to Incorrect Ingress Resource",
    "description": "Application traffic was routed incorrectly due to an error in the ingress resource definition.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Corrected the path definition in the ingress resource. \t\u2022 Redeployed the ingress configuration to ensure correct traffic routing.",
    "tags": [
      "service",
      "ingress"
    ],
    "category": "Networking"
  },
  {
    "id": 155,
    "title": "Intermittent Service Disruptions Due to DNS Caching Issue",
    "description": "Intermittent service disruptions occurred due to stale DNS cache in CoreDNS.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Reduced the TTL value in CoreDNS configuration. \t\u2022 Restarted CoreDNS pods to apply the new TTL setting.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 156,
    "title": "Flannel Overlay Network Interruption Due to Node Failure",
    "description": "Flannel overlay network was interrupted after a node failure, causing pod-to-pod communication issues.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restarted the Flannel pods on the affected nodes to re-establish network routes. \t\u2022 Verified that communication between pods was restored.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 157,
    "title": "Network Traffic Loss Due to Port Collision in Network Policy",
    "description": "Network traffic was lost due to a port collision in the network policy, affecting application availability.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policy to allow the necessary port. \t\u2022 Applied the updated network policy and tested the traffic flow.",
    "tags": [
      "general"
    ],
    "category": "Networking"
  },
  {
    "id": 158,
    "title": "CoreDNS Service Failures Due to Resource Exhaustion",
    "description": "CoreDNS service failed due to resource exhaustion, causing DNS resolution failures.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource requests and limits for CoreDNS pods. \t\u2022 Restarted the CoreDNS pods to apply the updated resource allocation.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 159,
    "title": "Pod Network Partition Due to Misconfigured IPAM",
    "description": "Pod network partition occurred due to an incorrectly configured IP Address Management (IPAM) in the CNI plugin.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the IPAM configuration to use non-overlapping IP address ranges. \t\u2022 Redeployed the CNI plugin and restarted affected pods.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 160,
    "title": "Network Performance Degradation Due to Overloaded CNI Plugin",
    "description": "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased resource limits for the CNI plugin pods. \t\u2022 Used network policies to limit the traffic spikes to specific services.",
    "tags": [
      "service",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 161,
    "title": "Network Performance Degradation Due to Overloaded CNI Plugin",
    "description": "Network performance degraded due to the CNI plugin being overwhelmed by high traffic volume.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased resource limits for the CNI plugin pods. \t\u2022 Used network policies to limit the traffic spikes to specific services.",
    "tags": [
      "service",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 162,
    "title": "DNS Resolution Failures Due to Misconfigured CoreDNS",
    "description": "DNS resolution failures due to misconfigured CoreDNS, leading to application errors.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Updated CoreDNS ConfigMap to point to a valid upstream DNS server. \t\u2022 Restarted CoreDNS pods to apply the new configuration.",
    "tags": [
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 163,
    "title": "Network Partition Due to Incorrect Calico Configuration",
    "description": "Network partitioning due to incorrect Calico CNI configuration, resulting in pods being unable to communicate with each other.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the Calico CIDR range configuration to match the cluster's networking plan. \t\u2022 Restarted Calico pods to apply the new configuration and restore network connectivity.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 164,
    "title": "IP Overlap Leading to Communication Failure Between Pods",
    "description": "Pods failed to communicate due to IP address overlap caused by an incorrect subnet configuration.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the pod network CIDR range to avoid overlapping with host network IPs. \t\u2022 Restarted the Kubernetes networking components to apply the new configuration.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 165,
    "title": "Pod Network Latency Due to Overloaded Kubernetes Network Interface",
    "description": "Pod network latency increased due to an overloaded network interface on the Kubernetes nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the network bandwidth for the AWS EC2 instances hosting the Kubernetes nodes. \t\u2022 Used network policies to limit traffic to critical pods and avoid overwhelming the network interface.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 166,
    "title": "Intermittent Connectivity Failures Due to Pod DNS Cache Expiry",
    "description": "Intermittent connectivity failures due to pod DNS cache expiry, leading to failed DNS lookups for external services.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased the DNS TTL value in the CoreDNS configuration. \t\u2022 Restarted CoreDNS pods to apply the new configuration.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 167,
    "title": "Flapping Network Connections Due to Misconfigured Network Policies",
    "description": "Network connections between pods were intermittently dropping due to misconfigured network policies, causing application instability.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policies to allow necessary pod-to-pod communication. \t\u2022 Tested connectivity to ensure stability after the update.",
    "tags": [
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 168,
    "title": "Cluster Network Downtime Due to CNI Plugin Upgrade",
    "description": "Cluster network downtime occurred during a CNI plugin upgrade, affecting pod-to-pod communication.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Applied the required configuration changes for the new CNI plugin version. \t\u2022 Restarted affected pods and network components to restore connectivity.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 169,
    "title": "Inconsistent Pod Network Connectivity in Multi-Region Cluster",
    "description": "Pods in a multi-region cluster experienced inconsistent network connectivity between regions due to misconfigured VPC peering.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated VPC peering routes and ensured proper configuration between the regions. \t\u2022 Tested connectivity after the change to confirm resolution.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 170,
    "title": "Pod Network Partition Due to Network Policy Blocking DNS Requests",
    "description": "Pods were unable to resolve DNS due to a network policy blocking DNS traffic, causing service failures.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policy to allow DNS traffic. \t\u2022 Restarted affected pods to ensure they could access DNS again.",
    "tags": [
      "service",
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 171,
    "title": "Network Bottleneck Due to Overutilized Network Interface",
    "description": "Network bottleneck occurred due to overutilization of a single network interface on the worker nodes.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added a second network interface to the worker nodes for pod traffic and node-to-node communication. \t\u2022 Reconfigured the nodes to distribute traffic across the two interfaces.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 172,
    "title": "Network Latency Caused by Overloaded VPN Tunnel",
    "description": "Network latency increased due to an overloaded VPN tunnel between the Kubernetes cluster and an on-premise data center.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Upgraded the VPN tunnel to a higher bandwidth option. \t\u2022 Optimized the data flow by reducing unnecessary traffic over the tunnel.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 173,
    "title": "Dropped Network Packets Due to MTU Mismatch",
    "description": "Network packets were dropped due to a mismatch in Maximum Transmission Unit (MTU) settings across different network components.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Unified MTU settings across all nodes and the CNI plugin configuration. \t\u2022 Restarted the network components to apply the changes.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 174,
    "title": "Pod Network Isolation Due to Misconfigured Network Policy",
    "description": "Pods in a specific namespace were unable to communicate due to an incorrectly applied network policy blocking traffic between namespaces.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policy to allow traffic between namespaces. \t\u2022 Restarted affected pods to re-establish communication.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 175,
    "title": "Service Discovery Failures Due to CoreDNS Pod Crash",
    "description": "Service discovery failures occurred when CoreDNS pods crashed due to resource exhaustion, causing DNS resolution issues.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU and memory resources for CoreDNS pods. \t\u2022 Optimized the DNS query patterns from applications to reduce the load.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 176,
    "title": "Pod DNS Resolution Failure Due to CoreDNS Configuration Issue",
    "description": "DNS resolution failures occurred within pods due to a misconfiguration in the CoreDNS config map.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Updated the CoreDNS ConfigMap to add the missing external DNS server configuration. \t\u2022 Restarted the CoreDNS pods to apply the changes.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 177,
    "title": "DNS Latency Due to Overloaded CoreDNS Pods",
    "description": "CoreDNS pods experienced high latency and timeouts due to resource overutilization, causing slow DNS resolution for applications.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU and memory limits for CoreDNS pods. \t\u2022 Enabled horizontal pod autoscaling to dynamically scale CoreDNS based on traffic.",
    "tags": [
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 178,
    "title": "Pod Network Degradation Due to Overlapping CIDR Blocks",
    "description": "Network degradation occurred due to overlapping CIDR blocks between VPCs in a hybrid cloud setup, causing routing issues.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the CIDR blocks of one VPC to avoid overlap. \t\u2022 Adjusted the network routing tables to ensure traffic was correctly routed.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 179,
    "title": "Service Discovery Failures Due to Network Policy Blocking DNS Traffic",
    "description": "Service discovery failed when a network policy was mistakenly applied to block DNS traffic, preventing pods from resolving services within the cluster.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Updated the network policy to allow DNS traffic on UDP port 53. \t\u2022 Restarted the affected pods to restore service discovery functionality.",
    "tags": [
      "service",
      "namespace",
      "ingress",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 180,
    "title": "Intermittent Network Connectivity Due to Overloaded Overlay Network",
    "description": "Pods experienced intermittent network connectivity issues due to an overloaded overlay network that could not handle the traffic.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the overlay network to use a more scalable network plugin. \t\u2022 Increased resource allocation for the network components and scaled the infrastructure to handle the load.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 181,
    "title": "Pod-to-Pod Communication Failure Due to CNI Plugin Configuration Issue",
    "description": "Pods were unable to communicate with each other due to a misconfiguration in the CNI plugin.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the Calico configuration to include the correct IP pool definitions. \t\u2022 Restarted the affected pods to obtain new IPs.",
    "tags": [
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 182,
    "title": "Sporadic DNS Failures Due to Resource Contention in CoreDNS Pods",
    "description": "Sporadic DNS resolution failures occurred due to resource contention in CoreDNS pods, which were not allocated enough CPU resources.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU resource requests and limits for CoreDNS pods. \t\u2022 Enabled horizontal pod autoscaling for CoreDNS to scale during high demand.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 183,
    "title": "High Latency in Pod-to-Node Communication Due to Overlay Network",
    "description": "High latency was observed in pod-to-node communication due to network overhead introduced by the overlay network.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched to a different CNI plugin (Calico) that offered better performance for the network topology. \t\u2022 Retested pod-to-node communication after switching CNI plugins.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 184,
    "title": "Service Discovery Issues Due to DNS Cache Staleness",
    "description": "Service discovery failed due to stale DNS cache entries that were not updated when services changed IPs.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Cleared the DNS cache manually and implemented shorter TTL (Time-To-Live) values for DNS records. \t\u2022 Restarted CoreDNS pods to apply changes.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 185,
    "title": "Network Partition Between Node Pools in Multi-Zone Cluster",
    "description": "Pods in different node pools located in different zones experienced network partitioning due to a misconfigured regional load balancer.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the regional load balancer configuration to properly route cross-zone traffic. \t\u2022 Re-deployed the affected pods to restore connectivity.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 186,
    "title": "Pod Network Isolation Failure Due to Missing NetworkPolicy",
    "description": "Pods that were intended to be isolated from each other could communicate freely due to a missing NetworkPolicy.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Created appropriate NetworkPolicy to restrict pod communication based on the namespace and labels. \t\u2022 Applied the NetworkPolicy and tested communication to ensure isolation was working.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 187,
    "title": "Flapping Node Network Connectivity Due to MTU Mismatch",
    "description": "Nodes in the cluster were flapping due to mismatched MTU settings between Kubernetes and the underlying physical network, causing intermittent network connectivity issues.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated the Kubernetes network plugin's MTU setting to match the physical network MTU. \t\u2022 Restarted the affected nodes and validated the network stability.",
    "tags": [
      "node",
      "cni"
    ],
    "category": "Networking"
  },
  {
    "id": 188,
    "title": "DNS Query Timeout Due to Unoptimized CoreDNS Config",
    "description": "DNS queries were timing out in the cluster, causing delays in service discovery, due to unoptimized CoreDNS configuration.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU and memory requests/limits for CoreDNS. \t\u2022 Optimized the CoreDNS configuration to use a more efficient query handling strategy.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 189,
    "title": "Traffic Splitting Failure Due to Incorrect Service LoadBalancer Configuration",
    "description": "Traffic splitting between two microservices failed due to a misconfiguration in the Service LoadBalancer.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the annotations in the Service definition to enable proper traffic splitting. \t\u2022 Redeployed the Service and tested that traffic was split as expected.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 190,
    "title": "Network Latency Between Pods in Different Regions",
    "description": "Pods in different Azure regions experienced high network latency, affecting application performance.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Configured Azure Virtual Network peering with appropriate bandwidth settings. \t\u2022 Enabled specific network optimizations for inter-region communication.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 191,
    "title": "Port Collision Between Services Due to Missing Port Ranges",
    "description": "Two services attempted to bind to the same port, causing a port collision and service failures.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated the service definitions to specify unique ports or port ranges. \t\u2022 Redeployed the services to resolve the conflict.",
    "tags": [
      "service",
      "node"
    ],
    "category": "Networking"
  },
  {
    "id": 192,
    "title": "Pod-to-External Service Connectivity Failures Due to Egress Network Policy",
    "description": "Pods failed to connect to an external service due to an overly restrictive egress network policy.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Modified the egress network policy to allow traffic to the required external service. \t\u2022 Applied the updated policy and tested connectivity.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 193,
    "title": "Pod Connectivity Loss After Network Plugin Upgrade",
    "description": "Pods lost connectivity after an upgrade of the Calico network plugin due to misconfigured IP pool settings.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually updated the Calico configuration to restore the correct IP pool settings. \t\u2022 Restarted the Calico pods and verified pod connectivity.",
    "tags": [
      "service",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 194,
    "title": "External DNS Not Resolving After Cluster Network Changes",
    "description": "External DNS resolution stopped working after changes were made to the cluster network configuration.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Updated CoreDNS configuration to correctly forward DNS queries to external DNS servers. \t\u2022 Restarted CoreDNS pods to apply changes.",
    "tags": [
      "service",
      "coredns",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 195,
    "title": "Slow Pod Communication Due to Misconfigured MTU in Network Plugin",
    "description": "Pod-to-pod communication was slow due to an incorrect MTU setting in the network plugin.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the MTU setting in the network plugin to match the host\u2019s MTU. \t\u2022 Restarted the affected pods to apply the changes.",
    "tags": [
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 196,
    "title": "High CPU Usage in Nodes Due to Overloaded Network Plugin",
    "description": "Nodes experienced high CPU usage due to an overloaded network plugin that couldn\u2019t handle traffic spikes effectively.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased resource allocation (CPU/memory) for the network plugin. \t\u2022 Configured scaling policies for the network plugin to dynamically adjust resources.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 197,
    "title": "Cross-Namespace Network Isolation Not Enforced",
    "description": "Network isolation between namespaces failed due to an incorrectly applied NetworkPolicy.",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Refined the NetworkPolicy to more specifically target pods within certain namespaces. \t\u2022 Re-applied the updated NetworkPolicy and validated the isolation.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 198,
    "title": "Inconsistent Service Discovery Due to CoreDNS Misconfiguration",
    "description": "Service discovery was inconsistent due to misconfigured CoreDNS settings.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Reverted CoreDNS configuration to use the internal DNS resolver instead of the external one. \t\u2022 Restarted CoreDNS pods to apply the changes.",
    "tags": [
      "service",
      "coredns",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 199,
    "title": "Network Segmentation Issues Due to Misconfigured CNI",
    "description": "Network segmentation between clusters failed due to incorrect CNI (Container Network Interface) plugin configuration.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the CNI plugin to enforce correct network segmentation. \t\u2022 Applied the changes and tested communication between pods from different segments.",
    "tags": [
      "node",
      "cni",
      "pod"
    ],
    "category": "Networking"
  },
  {
    "id": 200,
    "title": "DNS Cache Poisoning in CoreDNS",
    "description": "DNS cache poisoning occurred in CoreDNS, leading to incorrect IP resolution for services.",
    "component": "DNS",
    "severity": "medium",
    "resolution": "\u2022 Implemented DNS query validation and hardened CoreDNS security by limiting cache lifetime and introducing DNSSEC. \t\u2022 Cleared the DNS cache and restarted CoreDNS to remove the poisoned entries.",
    "tags": [
      "coredns",
      "service"
    ],
    "category": "Networking"
  },
  {
    "id": 201,
    "title": "Unauthorized Access to Secrets Due to Incorrect RBAC Permissions",
    "description": "Unauthorized users were able to access Kubernetes secrets due to overly permissive RBAC roles.",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured RBAC roles to adhere to the principle of least privilege. \t\u2022 Limited the permissions of the service account and tested access controls.",
    "tags": [
      "service"
    ],
    "category": "Security"
  },
  {
    "id": 202,
    "title": "Insecure Network Policies Leading to Pod Exposure",
    "description": "Pods intended to be isolated were exposed to unauthorized traffic due to misconfigured network policies.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the NetworkPolicy by refining podSelector and applying stricter isolation. \t\u2022 Tested the updated policy to confirm proper isolation between namespaces.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 203,
    "title": "Privileged Container Vulnerability Due to Incorrect Security Context",
    "description": "A container running with elevated privileges due to an incorrect security context exposed the cluster to potential privilege escalation attacks.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Removed privileged: true from the container's security context. \t\u2022 Applied the updated deployment and monitored the pod for any security incidents.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 204,
    "title": "Exposed Kubernetes Dashboard Due to Misconfigured Ingress",
    "description": "The Kubernetes dashboard was exposed to the public internet due to a misconfigured Ingress resource.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Updated the Ingress resource to restrict access to specific IP addresses or require authentication for access. \t\u2022 Re-applied the updated configuration and tested access controls.",
    "tags": [
      "controller",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 205,
    "title": "Unencrypted Communication Between Pods Due to Missing TLS Configuration",
    "description": "Communication between microservices in the cluster was not encrypted due to missing TLS configuration, exposing data to potential interception.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Configured mTLS between services to ensure encrypted communication. \t\u2022 Deployed certificates and updated services to use HTTPS for communication.",
    "tags": [
      "service",
      "certificate",
      "ingress",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 206,
    "title": "Sensitive Data in Logs Due to Improper Log Sanitization",
    "description": "Sensitive data, such as API keys and passwords, was logged due to improper sanitization in application logs.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated the application to sanitize sensitive data before it was logged. \t\u2022 Configured the logging system to filter out sensitive information from logs.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 207,
    "title": "Insufficient Pod Security Policies Leading to Privilege Escalation",
    "description": "Privilege escalation was possible due to insufficiently restrictive PodSecurityPolicies (PSPs).",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the PSPs to restrict privilege escalation by setting allowPrivilegeEscalation: false. \t\u2022 Applied the updated policies and tested pod deployments to confirm proper restrictions.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 208,
    "title": "Service Account Token Compromise",
    "description": "A compromised service account token was used to gain unauthorized access to the cluster's API server.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Rotated the service account token and updated the deployment to prevent exposure. \t\u2022 Used Kubernetes secrets management to securely store sensitive tokens.",
    "tags": [
      "service",
      "api server"
    ],
    "category": "Security"
  },
  {
    "id": 209,
    "title": "Lack of Regular Vulnerability Scanning in Container Images",
    "description": "The container images used in the cluster were not regularly scanned for vulnerabilities, leading to deployment of vulnerable images.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Integrated a vulnerability scanning tool like Clair or Trivy into the CI/CD pipeline. \t\u2022 Rebuilt the container images with a fixed version and redeployed them.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 210,
    "title": "Insufficient Container Image Signing Leading to Unverified Deployments",
    "description": "Unverified container images were deployed due to the lack of image signing, exposing the cluster to potential malicious code.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Enabled image signing in the container registry and integrated it with Kubernetes for secure image verification. \t\u2022 Re-pulled and deployed only signed images to the cluster.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 211,
    "title": "Insecure Default Namespace Leading to Unauthorized Access",
    "description": "Unauthorized users gained access to resources in the default namespace due to lack of namespace isolation.",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Restricted access to the default namespace using RBAC and network policies. \t\u2022 Created separate namespaces for different workloads and applied appropriate isolation policies.",
    "tags": [
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 212,
    "title": "Vulnerable OpenSSL Version in Container Images",
    "description": "A container image was using an outdated and vulnerable version of OpenSSL, exposing the cluster to known security vulnerabilities.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rebuilt the container image using a newer, secure version of OpenSSL. \t\u2022 Deployed the updated image and monitored for any further issues.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 213,
    "title": "Misconfigured API Server Authentication Allowing External Access",
    "description": "API server authentication was misconfigured, allowing external unauthenticated users to access the Kubernetes API.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Disabled unauthenticated access by removing --insecure-allow-any-token from the API server configuration. \t\u2022 Configured proper authentication methods, such as client certificates or OAuth2.",
    "tags": [
      "controller",
      "api server",
      "certificate",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 214,
    "title": "Insufficient Node Security Due to Lack of OS Hardening",
    "description": "Nodes in the cluster were insecure due to a lack of proper OS hardening, making them vulnerable to attacks.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Applied OS hardening guidelines, such as disabling root SSH access and ensuring only key-based authentication. \t\u2022 Updated the operating system with the latest security patches.",
    "tags": [
      "node"
    ],
    "category": "Security"
  },
  {
    "id": 215,
    "title": "Unrestricted Ingress Access to Sensitive Resources",
    "description": "Sensitive services were exposed to the public internet due to unrestricted ingress rules.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Restrict ingress traffic by specifying allowed IP ranges or adding authentication for access to sensitive resources. \t\u2022 Used a more restrictive ingress controller and verified that access was limited to trusted sources.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 216,
    "title": "Exposure of Sensitive Data in Container Environment Variables",
    "description": "Sensitive data, such as database credentials, was exposed through environment variables in container configurations.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Moved sensitive data into Kubernetes Secrets instead of directly embedding them in environment variables. \t\u2022 Updated the deployment YAML to reference the Secrets and applied the changes.",
    "tags": [
      "certificate"
    ],
    "category": "Security"
  },
  {
    "id": 217,
    "title": "Inadequate Container Resource Limits Leading to DoS Attacks",
    "description": "A lack of resource limits on containers allowed a denial-of-service (DoS) attack to disrupt services by consuming excessive CPU and memory.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Set appropriate resource requests and limits in the container specification to prevent resource exhaustion. \t\u2022 Applied resource quotas to limit the total resource usage for namespaces.",
    "tags": [
      "service",
      "node",
      "namespace",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 218,
    "title": "Exposure of Container Logs Due to Insufficient Log Management",
    "description": "Container logs were exposed to unauthorized users due to insufficient log management controls.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Implemented access controls to restrict log access to authorized users only. \t\u2022 Encrypted logs at rest and in transit to prevent exposure.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 219,
    "title": "Using Insecure Docker Registry for Container Images",
    "description": "The cluster was pulling container images from an insecure, untrusted Docker registry, exposing the system to the risk of malicious images.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Configured Kubernetes to pull images only from trusted and secure registries. \t\u2022 Implemented image signing and vulnerability scanning in the CI/CD pipeline.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 220,
    "title": "Weak Pod Security Policies Leading to Privileged Containers",
    "description": "Privileged containers were deployed due to weak or missing Pod Security Policies (PSPs), exposing the cluster to security risks.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Created and applied strict Pod Security Policies to limit the permissions of containers. \t\u2022 Enforced the use of non-privileged containers for sensitive workloads.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 221,
    "title": "Unsecured Kubernetes Dashboard",
    "description": "The Kubernetes Dashboard was exposed to the public internet without proper authentication or access controls, allowing unauthorized users to access sensitive cluster information.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Enabled authentication and RBAC rules for the Kubernetes Dashboard. \t\u2022 Restricted access to the Dashboard by allowing connections only from trusted IP addresses.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 222,
    "title": "Using HTTP Instead of HTTPS for Ingress Resources",
    "description": "Sensitive applications were exposed using HTTP instead of HTTPS, leaving communication vulnerable to eavesdropping and man-in-the-middle attacks.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Configured ingress controllers to use HTTPS by setting up TLS termination with valid SSL certificates. \t\u2022 Redirected all HTTP traffic to HTTPS to ensure encrypted communication.",
    "tags": [
      "controller",
      "certificate",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 223,
    "title": "Insecure Network Policies Exposing Internal Services",
    "description": "Network policies were too permissive, exposing internal services to unnecessary access, increasing the risk of lateral movement within the cluster.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Restricted network policies to only allow communication between services that needed to interact. \t\u2022 Used namespace-based segmentation and ingress/egress rules to enforce tighter security.",
    "tags": [
      "service",
      "ingress",
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 224,
    "title": "Exposing Sensitive Secrets in Environment Variables",
    "description": "Sensitive credentials were stored in environment variables within the pod specification, exposing them to potential attackers.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Moved sensitive data to Kubernetes Secrets and updated the pod configurations to reference the secrets. \t\u2022 Ensured that secrets were encrypted and only accessible by the relevant services.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 225,
    "title": "Insufficient RBAC Permissions Leading to Unauthorized Access",
    "description": "Insufficient Role-Based Access Control (RBAC) configurations allowed unauthorized users to access and modify sensitive resources within the cluster.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured RBAC roles to ensure that users only had the minimum necessary permissions. \t\u2022 Applied the principle of least privilege and limited access to sensitive resources.",
    "tags": [
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 226,
    "title": "Insecure Ingress Controller Exposed to the Internet",
    "description": "An insecure ingress controller was exposed to the internet, allowing attackers to exploit vulnerabilities in the controller.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Secured the ingress controller by implementing proper authentication and IP whitelisting. \t\u2022 Ensured that only authorized users or services could access the ingress controller.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 227,
    "title": "Lack of Security Updates in Container Images",
    "description": "The cluster was running outdated container images without the latest security patches, exposing it to known vulnerabilities.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rebuilt the container images with updated base images and security patches. \t\u2022 Implemented a policy for regularly updating container images to include the latest security fixes.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 228,
    "title": "Exposed Kubelet API Without Authentication",
    "description": "The Kubelet API was exposed without proper authentication or authorization, allowing external users to query cluster node details.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restricted Kubelet API access to internal networks by updating security group rules. \t\u2022 Enabled authentication and authorization for the Kubelet API using client certificates.",
    "tags": [
      "kubelet",
      "node",
      "certificate",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 229,
    "title": "Inadequate Logging of Sensitive Events",
    "description": "Sensitive security events were not logged, preventing detection of potential security breaches or misconfigurations.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the Kubernetes audit policy to capture sensitive events, including user access to secrets, privilege escalations, and changes in RBAC roles. \t\u2022 Integrated log aggregation and alerting tools to monitor security logs in real time.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 230,
    "title": "Misconfigured RBAC Allowing Cluster Admin Privileges to Developers",
    "description": "Developers were mistakenly granted cluster admin privileges due to misconfigured RBAC roles, which gave them the ability to modify sensitive resources.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured RBAC roles to follow the principle of least privilege and removed cluster admin permissions for developers. \t\u2022 Implemented role separation to ensure developers only had access to resources necessary for their tasks.",
    "tags": [
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 231,
    "title": "Insufficiently Secured Service Account Permissions",
    "description": "Service accounts were granted excessive permissions, giving pods access to resources they did not require, leading to a potential security risk.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Created specific service accounts for each pod with minimal necessary permissions. \t\u2022 Applied strict RBAC rules to restrict access to sensitive resources for service accounts.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 232,
    "title": "Cluster Secrets Exposed Due to Insecure Mounting",
    "description": "Kubernetes secrets were mounted into pods insecurely, exposing sensitive information to unauthorized users.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Moved secrets to Kubernetes Secrets and mounted them using environment variables instead of directly into the filesystem. \t\u2022 Restricted access to secrets using RBAC and implemented encryption for sensitive data.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 233,
    "title": "Improperly Configured API Server Authorization",
    "description": "The Kubernetes API server was improperly configured, allowing unauthorized users to make API calls without proper authorization.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the API server to use proper authorization mechanisms (e.g., RBAC, ABAC). \t\u2022 Validated and tested API server access to ensure only authorized users could make API calls.",
    "tags": [
      "api server"
    ],
    "category": "Security"
  },
  {
    "id": 234,
    "title": "Compromised Image Registry Access Credentials",
    "description": "The image registry access credentials were compromised, allowing attackers to pull and run malicious images in the cluster.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Moved credentials to Kubernetes Secrets, which are encrypted by default. \t\u2022 Enforced the use of trusted image registries and scanned images for vulnerabilities before use.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 235,
    "title": "Insufficiently Secured Cluster API Server Access",
    "description": "The API server was exposed with insufficient security, allowing unauthorized external access and increasing the risk of exploitation.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Restrict access to the API server using firewall rules to allow only internal IP addresses. \t\u2022 Implemented TLS encryption and client certificate authentication for secure access.",
    "tags": [
      "api server",
      "certificate",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 236,
    "title": "Misconfigured Admission Controllers Allowing Insecure Resources",
    "description": "Admission controllers were misconfigured, allowing the creation of insecure or non-compliant resources.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Enabled and properly configured necessary admission controllers, such as PodSecurityPolicy and LimitRanger, to enforce security policies during resource creation. \t\u2022 Regularly audited resource creation and applied security policies to avoid insecure configurations.",
    "tags": [
      "controller",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 237,
    "title": "Lack of Security Auditing and Monitoring in Cluster",
    "description": "The lack of proper auditing and monitoring allowed security events to go undetected, resulting in delayed response to potential security threats.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Implemented audit logging and integrated a centralized logging and monitoring solution, such as Prometheus and ELK stack, to detect security incidents. \t\u2022 Set up alerts for suspicious activities and security violations.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 238,
    "title": "Exposed Internal Services Due to Misconfigured Load Balancer",
    "description": "Internal services were inadvertently exposed to the public due to incorrect load balancer configurations, leading to potential security risks.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the load balancer to restrict access to internal services, ensuring that only authorized users or services could connect. \t\u2022 Implemented authentication and IP whitelisting to secure the exposed services.",
    "tags": [
      "service"
    ],
    "category": "Security"
  },
  {
    "id": 239,
    "title": "Kubernetes Secrets Accessed via Insecure Network",
    "description": "Kubernetes secrets were accessed via an insecure network connection, exposing sensitive information to unauthorized parties.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Configured Kubernetes to use HTTPS for all API server communications. \t\u2022 Ensured that all pod-to-API server traffic was encrypted and used secure protocols.",
    "tags": [
      "api server",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 240,
    "title": "Pod Security Policies Not Enforced",
    "description": "Pod security policies were not enforced, allowing the deployment of pods with unsafe configurations, such as privileged access and host network use.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled and configured PodSecurityPolicy to enforce security controls, such as preventing privileged containers or host network usage. \t\u2022 Audited existing pod configurations and updated them to comply with security policies.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 241,
    "title": "Unpatched Vulnerabilities in Cluster Nodes",
    "description": "Cluster nodes were not regularly patched, exposing known vulnerabilities that were later exploited by attackers.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Patches were applied to all affected nodes to fix known vulnerabilities. \t\u2022 Established a regular patch management process to ensure that cluster nodes were kept up to date.",
    "tags": [
      "node"
    ],
    "category": "Security"
  },
  {
    "id": 242,
    "title": "Weak Network Policies Allowing Unrestricted Traffic",
    "description": "Network policies were not properly configured, allowing unrestricted traffic between pods, which led to lateral movement by attackers after a pod was compromised.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Created strict network policies to control pod-to-pod communication, limiting access to sensitive services. \t\u2022 Regularly reviewed and updated network policies to minimize exposure.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 243,
    "title": "Exposed Dashboard Without Authentication",
    "description": "Kubernetes dashboard was exposed to the internet without authentication, allowing unauthorized users to access cluster information and potentially take control.",
    "component": "Ingress",
    "severity": "medium",
    "resolution": "\u2022 Restricted access to the Kubernetes Dashboard by securing the ingress and requiring authentication via RBAC or OAuth. \t\u2022 Implemented a VPN and IP whitelisting to ensure that only authorized users could access the dashboard.",
    "tags": [
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 244,
    "title": "Use of Insecure Container Images",
    "description": "Insecure container images were used in production, leading to the deployment of containers with known vulnerabilities.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Enforced the use of trusted container image registries that support vulnerability scanning. \t\u2022 Integrated image scanning tools like Trivy or Clair into the CI/CD pipeline to identify vulnerabilities before deployment.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 245,
    "title": "Misconfigured TLS Certificates",
    "description": "Misconfigured TLS certificates led to insecure communication between Kubernetes components, exposing the cluster to potential attacks.",
    "component": "Certificates",
    "severity": "medium",
    "resolution": "\u2022 Regenerated and replaced expired certificates. \t\u2022 Configured Kubernetes components to use valid TLS certificates for all internal communications.",
    "tags": [
      "certificate"
    ],
    "category": "Security"
  },
  {
    "id": 246,
    "title": "Excessive Privileges for Service Accounts",
    "description": "Service accounts were granted excessive privileges, allowing them to perform operations outside their intended scope, increasing the risk of compromise.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated RBAC roles to follow the principle of least privilege, ensuring service accounts only had the minimum necessary permissions. \t\u2022 Regularly audited service accounts to verify proper access control.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 247,
    "title": "Exposure of Sensitive Logs Due to Misconfigured Logging Setup",
    "description": "Sensitive logs, such as those containing authentication tokens and private keys, were exposed due to a misconfigured logging setup.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated log configuration to redact or filter sensitive data, such as tokens and private keys, before storing logs. \t\u2022 Implemented access controls to restrict who can view logs and what data is exposed.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 248,
    "title": "Use of Deprecated APIs with Known Vulnerabilities",
    "description": "The cluster was using deprecated Kubernetes APIs that contained known security vulnerabilities, which were exploited by attackers.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Upgraded Kubernetes components and applications to use supported and secure API versions. \t\u2022 Removed deprecated API usage and enforced only supported versions.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 249,
    "title": "Lack of Security Context in Pod Specifications",
    "description": "Pods were deployed without defining appropriate security contexts, resulting in privileged containers and access to host resources.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Defined and enforced security contexts for all pod deployments to restrict privilege escalation and limit access to sensitive resources. \t\u2022 Implemented security policies to reject pods that do not comply with security context guidelines.",
    "tags": [
      "controller",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 250,
    "title": "Compromised Container Runtime",
    "description": "The container runtime (Docker) was compromised, allowing an attacker to gain control over the containers running on the node.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Immediately patched the container runtime (Docker) to address the security vulnerability. \t\u2022 Implemented security measures, such as running containers with user namespaces and seccomp profiles to minimize the impact of any future exploits.",
    "tags": [
      "node",
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 251,
    "title": "Insufficient RBAC Permissions for Cluster Admin",
    "description": "A cluster administrator was mistakenly granted insufficient RBAC permissions, preventing them from performing essential management tasks.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated the RBAC policy to ensure that the cluster admin role had the correct permissions to manage all resources. \t\u2022 Implemented a more granular RBAC policy review process to avoid future issues.",
    "tags": [
      "service",
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 252,
    "title": "Insufficient Pod Security Policies Leading to Privilege Escalation",
    "description": "Insufficiently restrictive PodSecurityPolicies (PSPs) allowed the deployment of privileged pods, which were later exploited by attackers.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated PodSecurityPolicies to enforce stricter controls, such as disallowing privileged containers and restricting host network access. \t\u2022 Applied RBAC restrictions to limit who could deploy privileged pods.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 253,
    "title": "Exposed Service Account Token in Pod",
    "description": "A service account token was mistakenly exposed in a pod, allowing attackers to gain unauthorized access to the Kubernetes API.",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Removed the service account token from the environment variable and stored it in a more secure location (e.g., as a Kubernetes Secret). \t\u2022 Reissued the service account token and rotated the credentials to mitigate potential risks.",
    "tags": [
      "service",
      "api server",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 254,
    "title": "Rogue Container Executing Malicious Code",
    "description": "A compromised container running a known exploit executed malicious code that allowed the attacker to gain access to the underlying node.",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated the container images to the latest versions with security patches. \t\u2022 Implemented automatic image scanning and vulnerability scanning as part of the CI/CD pipeline to catch outdated images before deployment.",
    "tags": [
      "node"
    ],
    "category": "Security"
  },
  {
    "id": 255,
    "title": "Overly Permissive Network Policies Allowing Lateral Movement",
    "description": "Network policies were not restrictive enough, allowing compromised pods to move laterally across the cluster and access other services.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Implemented restrictive network policies to segment the cluster and restrict traffic between pods based on specific labels and namespaces. \t\u2022 Ensured that sensitive services were isolated with network policies that only allowed access from trusted sources.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 256,
    "title": "Insufficient Encryption for In-Transit Data",
    "description": "Sensitive data was transmitted in plaintext between services, exposing it to potential eavesdropping and data breaches.",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured all services to communicate over HTTPS using TLS encryption. \t\u2022 Implemented mutual TLS authentication for all pod-to-pod communications within the cluster.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 257,
    "title": "Exposing Cluster Services via LoadBalancer with Public IP",
    "description": "A service was exposed to the public internet via a LoadBalancer without proper access control, making it vulnerable to attacks.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Updated the service configuration to use type: ClusterIP or added an appropriate ingress controller with restricted access. \t\u2022 Added IP whitelisting or authentication to the exposed services.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 258,
    "title": "Privileged Containers Running Without Seccomp or AppArmor Profiles",
    "description": "Privileged containers were running without seccomp or AppArmor profiles, leaving the host vulnerable to attacks.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Disabled the privileged: true flag unless absolutely necessary and applied restrictive seccomp and AppArmor profiles to all privileged containers. \t\u2022 Used Kubernetes security policies to prevent the deployment of privileged containers without appropriate security profiles.",
    "tags": [
      "controller",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 259,
    "title": "Malicious Container Image from Untrusted Source",
    "description": "A malicious container image from an untrusted source was deployed, leading to a security breach in the cluster.",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Removed the malicious container image from the cluster and quarantined the affected pods. \t\u2022 Scanned all images for known vulnerabilities before redeploying containers. \t\u2022 Configured image admission controllers to only allow images from trusted registries.",
    "tags": [
      "controller",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 260,
    "title": "Unrestricted Ingress Controller Allowing External Attacks",
    "description": "The ingress controller was misconfigured, allowing external attackers to bypass network security controls and exploit internal services.",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the ingress controller to restrict access to trusted IPs or users via IP whitelisting or authentication. \t\u2022 Enabled role-based access control (RBAC) to limit access to sensitive services.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 261,
    "title": "Misconfigured Ingress Controller Exposing Internal Services",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Implemented IP whitelisting to restrict access. \t\u2022 Enabled authentication mechanisms for sensitive services. \t\u2022 Regularly audited Ingress configurations for security compliance.",
    "tags": [
      "controller",
      "service",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 262,
    "title": "Privileged Containers Without Security Context",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Defined appropriate security contexts for all containers. \t\u2022 Removed unnecessary privileged access where possible. \t\u2022 Implemented Pod Security Policies to enforce security standards.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 263,
    "title": "Unrestricted Network Policies Allowing Lateral Movement",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Implemented network policies to restrict inter-pod communication. \t\u2022 Segmented the network based on namespaces and labels. \t\u2022 Monitored network traffic for unusual patterns.",
    "tags": [
      "service",
      "namespace",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 264,
    "title": "Exposed Kubernetes Dashboard Without Authentication",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Enabled authentication mechanisms for the dashboard. \t\u2022 Restricted access to the dashboard using network policies. \t\u2022 Monitored dashboard access logs for unauthorized attempts.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 265,
    "title": "Use of Vulnerable Container Images",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated container images to the latest versions with security patches. \t\u2022 Implemented automated image scanning in the CI/CD pipeline. \t\u2022 Established a policy to use only trusted and regularly updated images.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 266,
    "title": "Misconfigured Role-Based Access Control (RBAC)",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Revised RBAC roles to align with user responsibilities. \t\u2022 Implemented the principle of least privilege across all roles. \t\u2022 Regularly audited RBAC configurations for compliance.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 267,
    "title": "Insecure Secrets Management",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Migrated secrets to Kubernetes Secrets objects. \t\u2022 Implemented encryption for secrets at rest and in transit. \t\u2022 Restricted access to secrets using RBAC.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 268,
    "title": "Lack of Audit Logging",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Enabled audit logging in the cluster. \t\u2022 Configured log retention and monitoring policies. \t\u2022 Integrated audit logs with a centralized logging system for analysis.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 269,
    "title": "Unrestricted Access to etcd",
    "description": "",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Enabled authentication and encryption for etcd. \t\u2022 Restricted network access to etcd endpoints. \t\u2022 Regularly audited etcd configurations for security compliance.",
    "tags": [
      "service",
      "etcd"
    ],
    "category": "Security"
  },
  {
    "id": 270,
    "title": "Absence of Pod Security Policies",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Implemented Pod Security Policies to enforce security standards. \t\u2022 Restricted the use of privileged containers and host resources. \t\u2022 Educated development teams on secure pod configurations.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 271,
    "title": "Service Account Token Mounted in All Pods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set automountServiceAccountToken: false in non-privileged pods. \t\u2022 Reviewed RBAC permissions to ensure tokens were scoped correctly.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 272,
    "title": "Sensitive Logs Exposed via Centralized Logging",
    "description": "",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Removed sensitive logging in app code. \t\u2022 Configured Fluentd filters to redact secrets. \t\u2022 Restricted access to sensitive log indices in Kibana.",
    "tags": [
      "service"
    ],
    "category": "Security"
  },
  {
    "id": 273,
    "title": "Broken Container Escape Detection",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Patched all nodes to a secure kernel version. \t\u2022 Implemented Falco to monitor syscall anomalies.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 274,
    "title": "Unauthorized Cloud Metadata API Access",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restricted pod egress using network policies. \t\u2022 Enabled IMDSv2 with hop limit = 1 to block pod access.",
    "tags": [
      "service",
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 275,
    "title": "Admin Kubeconfig Checked into Git",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rotated the admin credentials immediately. \t\u2022 Added secret scanning to CI/CD. \t\u2022 Configured .gitignore templates across repos.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 276,
    "title": "JWT Token Replay Attack in Webhook Auth",
    "description": "",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Updated webhook to validate expiry and nonce in tokens. \t\u2022 Rotated keys and invalidated sessions.",
    "tags": [
      "api server",
      "webhook"
    ],
    "category": "Security"
  },
  {
    "id": 277,
    "title": "Container With Hardcoded SSH Keys",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rebuilt images without sensitive content. \t\u2022 Rotated all affected SSH keys.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 278,
    "title": "Insecure Helm Chart Defaults",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Overrode defaults in values.yaml. \t\u2022 Audited Helm charts for misconfigurations.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 279,
    "title": "Shared Cluster with Overlapping Namespaces",
    "description": "",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Introduced prefix-based namespace naming (e.g., team1-dev). \t\u2022 Scoped RBAC permissions tightly.",
    "tags": [
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 280,
    "title": "CVE Ignored in Base Image for Months",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Integrated Clair + Trivy scans into CI/CD pipelines. \t\u2022 Setup Slack alerts for critical CVEs.",
    "tags": [
      "service"
    ],
    "category": "Security"
  },
  {
    "id": 281,
    "title": "Misconfigured PodSecurityPolicy Allowed Privileged Containers",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Removed the insecure PSP. \t\u2022 Implemented a restrictive default PSP. \t\u2022 Migrated to PodSecurityAdmission after PSP deprecation.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 282,
    "title": "GitLab Runners Spawning Privileged Containers",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Disabled DinD and used Kaniko for builds. \t\u2022 Set runner securityContext to avoid privilege escalation.",
    "tags": [
      "node"
    ],
    "category": "Security"
  },
  {
    "id": 283,
    "title": "Kubernetes Secrets Mounted in World-Readable Volumes",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set defaultMode: 0400 on all secret volumes. \t\u2022 Isolated processes via containers.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 284,
    "title": "Kubelet Port Exposed on Public Interface",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled Kubelet authentication and authorization. \t\u2022 Restricted access via firewall and node security groups.",
    "tags": [
      "kubelet",
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 285,
    "title": "Cluster Admin Bound to All Authenticated Users",
    "description": "",
    "component": "Admission Webhook",
    "severity": "medium",
    "resolution": "\u2022 Deleted the binding immediately. \t\u2022 Implemented an RBAC policy validation webhook.",
    "tags": [
      "webhook"
    ],
    "category": "Security"
  },
  {
    "id": 286,
    "title": "Webhook Authentication Timing Out, Causing Denial of Service",
    "description": "",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Increased webhook timeouts and horizontal scaling. \t\u2022 Added local caching for frequent identities.",
    "tags": [
      "service",
      "api server",
      "replica",
      "webhook"
    ],
    "category": "Security"
  },
  {
    "id": 287,
    "title": "CSI Driver Exposing Node Secrets",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Scoped CSI mounts with per-pod directories. \t\u2022 Disabled hostPath access for workloads.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 288,
    "title": "EphemeralContainers Used for Reconnaissance",
    "description": "",
    "component": "API Server",
    "severity": "medium",
    "resolution": "\u2022 Removed permissions to ephemeral containers for all roles. \t\u2022 Set audit policies for their use.",
    "tags": [
      "api server",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 289,
    "title": "hostAliases Used for Spoofing Internal Services",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Disabled use of hostAliases via OPA policies. \t\u2022 Logged all pod specs with custom host entries.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 290,
    "title": "Privilege Escalation via Unchecked securityContext in Helm Chart",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Forked chart and restricted overrides via schema. \t\u2022 Implemented OPA Gatekeeper to block root containers.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 291,
    "title": "Service Account Token Leakage via Logs",
    "description": "",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Rotated all impacted service account tokens. \t\u2022 Added environment and file sanitization to logging library.",
    "tags": [
      "service"
    ],
    "category": "Security"
  },
  {
    "id": 292,
    "title": "Escalation via Editable Validating WebhookConfiguration",
    "description": "",
    "component": "Admission Webhook",
    "severity": "medium",
    "resolution": "\u2022 Restricted access to ValidatingWebhookConfiguration objects. \t\u2022 Added checksums to webhook definitions in GitOps.",
    "tags": [
      "webhook",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 293,
    "title": "Stale Node Certificates After Rejoining Cluster",
    "description": "",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted old certificates from the node. \t\u2022 Set short TTLs for client certificates.",
    "tags": [
      "kubelet",
      "node",
      "certificate"
    ],
    "category": "Security"
  },
  {
    "id": 294,
    "title": "ArgoCD Exploit via Unverified Helm Charts",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Removed the chart and all related workloads. \t\u2022 Enabled Helm OCI signatures and repo allow-lists.",
    "tags": [
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 295,
    "title": "Node Compromise via Insecure Container Runtime",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Upgraded CRI-O to patched version. \t\u2022 Enabled seccomp and AppArmor by default.",
    "tags": [
      "node"
    ],
    "category": "Security"
  },
  {
    "id": 296,
    "title": "Workload with Wildcard RBAC Access to All Secrets",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Replaced wildcard permissions with explicit named secrets. \t\u2022 Enabled audit logging on all secrets API calls.",
    "tags": [
      "controller",
      "service",
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 297,
    "title": "Malicious Init Container Used for Reconnaissance",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Blocked unknown container registries via policy. \t\u2022 Implemented runtime security agents to inspect init behavior.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Security"
  },
  {
    "id": 298,
    "title": "Ingress Controller Exposed /metrics Without Auth",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Applied IP whitelist and basic auth for /metrics. \t\u2022 Added network policies to restrict access.",
    "tags": [
      "controller",
      "ingress"
    ],
    "category": "Security"
  },
  {
    "id": 299,
    "title": "Secret Stored in ConfigMap by Mistake",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Moved key to a Kubernetes Secret. \t\u2022 Rotated exposed credentials.",
    "tags": [
      "general"
    ],
    "category": "Security"
  },
  {
    "id": 300,
    "title": "Token Reuse After Namespace Deletion and Recreation",
    "description": "",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Rotated all tokens after backup restore. \t\u2022 Implemented TTL-based token policies.",
    "tags": [
      "namespace"
    ],
    "category": "Security"
  },
  {
    "id": 301,
    "title": "PVC Stuck in Terminating State After Node Crash",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually removed the PVC finalizers. \t\u2022 Used aws ec2 detach-volume to forcibly detach.",
    "tags": [
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 302,
    "title": "Data Corruption on HostPath Volumes",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Moved workloads to CSI-backed volumes with ReadWriteOnce enforcement. \t\u2022 Ensured only one pod accessed a volume at a time.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 303,
    "title": "Volume Mount Fails Due to Node Affinity Mismatch",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added topology.kubernetes.io/zone node affinity to match PV. \t\u2022 Ensured StatefulSets used storage classes with volume binding mode WaitForFirstConsumer.",
    "tags": [
      "scheduler",
      "pod",
      "node",
      "affinity",
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 304,
    "title": "PVC Not Rescheduled After Node Deletion",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Detached the disk from the Azure console. \t\u2022 Recreated pod successfully on another node.",
    "tags": [
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 305,
    "title": "Long PVC Rebinding Time on StatefulSet Restart",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Tuned CSI attach concurrency. \t\u2022 Split the StatefulSet into smaller chunks.",
    "tags": [
      "replica",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 306,
    "title": "CSI Volume Plugin Crash Loops Due to Secret Rotation",
    "description": "",
    "component": "Service",
    "severity": "medium",
    "resolution": "\u2022 Restarted the CSI plugin pods. \t\u2022 Upgraded plugin to a version with token refresh logic.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 307,
    "title": "ReadWriteMany PVCs Cause IO Bottlenecks",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Partitioned workloads to use isolated volumes. \t\u2022 Added cache layer for reads.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 308,
    "title": "PVC Mount Timeout Due to PodSecurityPolicy",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Modified PSP to allow required fsGroup range. \t\u2022 Updated pod security context.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 309,
    "title": "Orphaned PVs After Namespace Deletion",
    "description": "",
    "component": "Namespace",
    "severity": "medium",
    "resolution": "\u2022 Deleted old PVs and disks manually. \t\u2022 Changed reclaim policy to Delete for dynamic volumes.",
    "tags": [
      "pvc",
      "namespace"
    ],
    "category": "Storage"
  },
  {
    "id": 310,
    "title": "StorageClass Misconfiguration Blocks Dynamic Provisioning",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Corrected StorageClass parameters. \t\u2022 Manually bound PVCs with valid classes.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 311,
    "title": "StatefulSet Volume Cloning Results in Data Leakage",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Stopped cloning and switched to backup/restore-based provisioning. \t\u2022 Used rsync with integrity checks instead.",
    "tags": [
      "replica",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 312,
    "title": "Volume Resize Not Reflected in Mounted Filesystem",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restarted pod to remount the volume and trigger resize. \t\u2022 Verified resize2fs logs in CSI driver.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 313,
    "title": "CSI Controller Pod Crash Due to Log Overflow",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added log rate limits via CSI plugin config. \t\u2022 Increased node ephemeral storage.",
    "tags": [
      "controller",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 314,
    "title": "PVs Stuck in Released Due to Missing Finalizer Removal",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Patched PVs to remove finalizers. \t\u2022 Recycled or deleted volumes manually.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 315,
    "title": "CSI Driver DaemonSet Deployment Missing Tolerations for Taints",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Added required tolerations to DaemonSet.",
    "tags": [
      "affinity",
      "node",
      "taints",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 316,
    "title": "Mount Propagation Issues with Sidecar Containers",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Added mountPropagation: Bidirectional to shared volumeMounts.",
    "tags": [
      "namespace"
    ],
    "category": "Storage"
  },
  {
    "id": 317,
    "title": "File Permissions Reset on Pod Restart",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set explicit securityContext.fsGroup in pod spec.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 318,
    "title": "Volume Mount Succeeds but Application Can't Write",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Used storage class parameter to specify xfs.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 319,
    "title": "Volume Snapshot Restore Includes Corrupt Data",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Paused writes before snapshot. \t\u2022 Enabled filesystem freeze hook in Velero plugin.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 320,
    "title": "Zombie Volumes Occupying Cloud Quota",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Manually detached and deleted volumes. \t\u2022 Adjusted controller retry limits.",
    "tags": [
      "controller",
      "node",
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 321,
    "title": "Volume Snapshot Garbage Collection Fails",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Added required RBAC rules to Velero. \t\u2022 Manually deleted stale snapshot objects.",
    "tags": [
      "controller",
      "service"
    ],
    "category": "Storage"
  },
  {
    "id": 322,
    "title": "Volume Mount Delays Due to Node Drain Stale Attachment",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced backoff limit in CSI controller config. \t\u2022 Used manual detach via cloud CLI in emergencies.",
    "tags": [
      "controller",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 323,
    "title": "Application Writes Lost After Node Reboot",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Refactored PV to use local with nodeAffinity. \t\u2022 Explicitly mounted disk partitions.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 324,
    "title": "Pod CrashLoop Due to Read-Only Volume Remount",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restarted pod to trigger clean remount. \t\u2022 Tuned NFS mount options (soft, timeo, retry).",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 325,
    "title": "Data Corruption on Shared Volume With Two Pods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Refactored app logic to coordinate file writes via leader election. \t\u2022 Used a queue-based processing system.",
    "tags": [
      "job",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 326,
    "title": "Mount Volume Exceeded Timeout",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Cleared plugin cache manually. \t\u2022 Upgraded CSI driver to fixed version.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 327,
    "title": "Static PV Bound to Wrong PVC",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Used volumeName field in PVCs for direct binding. \t\u2022 Set explicit labels/selectors to isolate.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 328,
    "title": "Pod Eviction Due to DiskPressure Despite PVC",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Cleaned logs from root disk. \t\u2022 Moved logging to PVC-backed location.",
    "tags": [
      "kubelet",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 329,
    "title": "Pod Gets Stuck Due to Ghost Mount Point",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted stale mount folders. \t\u2022 Restarted kubelet on affected node.",
    "tags": [
      "kubelet",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 330,
    "title": "PVC Resize Broke StatefulSet Ordering",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually controlled pod restarts during PVC resize. \t\u2022 Added readiness gates to enforce sequential boot.",
    "tags": [
      "controller",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 331,
    "title": "ReadAfterWrite Inconsistency on Object Store-Backed CSI",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Introduced write barriers and retry logic in app. \t\u2022 Switched to CephFS for strong consistency.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 332,
    "title": "PV Resize Fails After Node Reboot",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reattached volume by starting pod temporarily on the node. \t\u2022 Resize completed automatically.",
    "tags": [
      "controller",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 333,
    "title": "CSI Driver Crash Loops on VolumeAttach",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Rolled back CSI driver to stable version. \t\u2022 Purged corrupted volume metadata.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 334,
    "title": "PVC Binding Fails Due to Multiple Default StorageClasses",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Patched one SC to remove the default annotation. \t\u2022 Explicitly specified SC in Helm charts.",
    "tags": [
      "scheduler",
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 335,
    "title": "Zombie VolumeAttachment Blocks New PVC",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted VolumeAttachment. \t\u2022 Restarted CSI pods to refresh state.",
    "tags": [
      "controller",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 336,
    "title": "Persistent Volume Bound But Not Mounted",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added mountOptions: [hard,intr] to NFS SC. \t\u2022 Set pod readiness probe to check file existence.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 337,
    "title": "CSI Snapshot Restore Overwrites Active Data",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Restored snapshot to a new PVC and used manual copy/move. \t\u2022 Added lifecycle checks before invoking restores.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 338,
    "title": "Incomplete Volume Detach Breaks Node Scheduling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Recreated CSI controller pod. \t\u2022 Requeued detach operation via manual deletion.",
    "tags": [
      "controller",
      "scheduler",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 339,
    "title": "App Breaks Due to Missing SubPath After Volume Expansion",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Changed pod to recreate the subPath explicitly. \t\u2022 Waited for bugfix release from CSI provider.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 340,
    "title": "Backup Restore Process Created Orphaned PVCs",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Recreated PVCs manually with correct storage class. \t\u2022 Re-enabled PV backup in Velero settings.",
    "tags": [
      "pvc",
      "namespace"
    ],
    "category": "Storage"
  },
  {
    "id": 341,
    "title": "Cross-Zone Volume Binding Fails with StatefulSet",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated StorageClass to allow all zones. \t\u2022 Aligned affinity rules with allowed topologies.",
    "tags": [
      "affinity",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 342,
    "title": "Volume Snapshot Controller Race Condition",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Throttled snapshot requests. \t\u2022 Patched controller deployment to limit concurrency.",
    "tags": [
      "controller"
    ],
    "category": "Storage"
  },
  {
    "id": 343,
    "title": "Failed Volume Resize Blocks Rollout",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Deleted affected pods, allowed volume to unmount. \t\u2022 Resize succeeded offline.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 344,
    "title": "Application Data Lost After Node Eviction",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Migrated to CSI-based dynamic provisioning. \t\u2022 Used NFS for shared storage.",
    "tags": [
      "controller",
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 345,
    "title": "Read-Only PV Caused Write Failures After Restore",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Detached and reattached the volume manually as read-write. \t\u2022 Updated Velero plugin to handle VolumeAttachment explicitly.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 346,
    "title": "NFS Server Restart Crashes Pods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled NFSv4 stateless mode. \t\u2022 Recovered pods by restarting them post-reboot.",
    "tags": [
      "service",
      "replica",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 347,
    "title": "VolumeBindingBlocked Condition Causes Pod Scheduling Delay",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased controller timeout thresholds. \t\u2022 Optimized provisioning backend latency.",
    "tags": [
      "controller",
      "scheduler",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 348,
    "title": "Data Corruption from Overprovisioned Thin Volumes",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased physical volume backing the pool. \t\u2022 Set strict overcommit alerting.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 349,
    "title": "VolumeProvisioningFailure on GKE Due to IAM Misconfiguration",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Granted missing IAM permissions to the bound service account. \t\u2022 Restarted CSI controller.",
    "tags": [
      "controller",
      "service"
    ],
    "category": "Storage"
  },
  {
    "id": 350,
    "title": "Node Crash Triggers Volume Remount Loop",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added udev rules for consistent device naming. \t\u2022 Restarted CSI daemon to detect new device path.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 351,
    "title": "VolumeMount Conflict Between Init and Main Containers",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Used a subPath for the init container to isolate file writes. \t\u2022 Moved backup logic to an external init job.",
    "tags": [
      "job",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 352,
    "title": "PVCs Stuck in \u201cTerminating\u201d Due to Finalizers",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Patched the driver deployment. \t\u2022 Manually removed finalizers using kubectl patch.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 353,
    "title": "Misconfigured ReadOnlyMany Mount Blocks Write Operations",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the manifest to readOnly: false.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 354,
    "title": "In-Tree Plugin PVs Lost After Driver Migration",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Manually edited PV annotations to match CSI requirements.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 355,
    "title": "Pod Deleted but Volume Still Mounted on Node",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Manually unmounted the volume on node. \t\u2022 Drained and rebooted the node.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 356,
    "title": "Ceph RBD Volume Crashes Pods Under IOPS Saturation",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Migrated to SSD-backed Ceph pools. \t\u2022 Throttled application concurrency.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 357,
    "title": "ReplicaSet Using PVCs Fails Due to VolumeClaimTemplate Misuse",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Refactored ReplicaSet to StatefulSet.",
    "tags": [
      "controller",
      "replica",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 358,
    "title": "Filesystem Type Mismatch During Volume Attach",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reformatted disk to ext4. \t\u2022 Aligned StorageClass with PV fsType.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 359,
    "title": "iSCSI Volumes Fail After Node Kernel Upgrade",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Installed open-iscsi and related modules. \t\u2022 Rebooted node.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 360,
    "title": "PVs Not Deleted After PVC Cleanup Due to Retain Policy",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted PVs and EBS volumes.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 361,
    "title": "Concurrent Pod Scheduling on the Same PVC Causes Mount Conflict",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added anti-affinity to restrict pod scheduling to a single node. \t\u2022 Used EFS (ReadWriteMany) for workloads needing shared storage.",
    "tags": [
      "affinity",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 362,
    "title": "StatefulSet Pod Replacement Fails Due to PVC Retention",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Deleted old PVC manually to let StatefulSet recreate it.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 363,
    "title": "HostPath Volume Access Leaks Host Data into Container",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected volume path in manifest. \t\u2022 Revoked pod access.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 364,
    "title": "CSI Driver Crashes When Node Resource Is Deleted Prematurely",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Waited for CSI driver to timeout and self-recover. \t\u2022 Rebooted node to forcibly detach volumes.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 365,
    "title": "Retained PV Blocks New Claim Binding with Identical Name",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Manually deleted the old PV to allow dynamic provisioning.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 366,
    "title": "CSI Plugin Panic on Missing Mount Option",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Removed mountOptions: from manifest. \t\u2022 Patched CSI driver to add nil checks.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 367,
    "title": "Pod Fails to Mount Volume Due to SELinux Context Mismatch",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Relabeled volume with chcon -Rt container_file_t /data.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 368,
    "title": "VolumeExpansion on Bound PVC Fails Due to Pod Running",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Deleted pod to trigger offline volume resize. \t\u2022 PVC then showed FileSystemResizePending \u2192 Bound.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 369,
    "title": "CSI Driver Memory Leak on Volume Detach Loop",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Restarted CSI plugin. \t\u2022 Patched driver to implement exponential backoff.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 370,
    "title": "Volume Mount Timeout Due to Slow Cloud API",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Waited for Azure API to stabilize. \t\u2022 Used local PVs for critical workloads moving forward.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 371,
    "title": "Volume Snapshot Restore Misses Application Consistency",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Integrated pre-freeze and post-thaw hooks via Velero Restic. \t\u2022 Enabled application-aware backups.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 372,
    "title": "File Locking Issue Between Multiple Pods on NFS",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Introduced flock-based locking in application code. \t\u2022 Used local persistent volume instead for critical data.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 373,
    "title": "Pod Reboots Erase Data on EmptyDir Volume",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched to hostPath for logs or persisted to object storage.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 374,
    "title": "PVC Resize Fails on In-Use Block Device",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Stopped the pod and retried resize.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 375,
    "title": "Default StorageClass Prevents PVC Binding to Custom Class",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Explicitly set storageClassName in the PVC.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 376,
    "title": "Ceph RBD Volume Mount Failure Due to Kernel Mismatch",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Reinstalled kernel modules and rebooted node.",
    "tags": [
      "node"
    ],
    "category": "Storage"
  },
  {
    "id": 377,
    "title": "CSI Volume Cleanup Delay Leaves Orphaned Devices",
    "description": "",
    "component": "Kubelet",
    "severity": "medium",
    "resolution": "\u2022 Manually removed symlinks and restarted kubelet.",
    "tags": [
      "kubelet",
      "node"
    ],
    "category": "Storage"
  },
  {
    "id": 378,
    "title": "Immutable ConfigMap Used in CSI Sidecar Volume Mount",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Restarted CSI sidecar pods.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 379,
    "title": "PodMount Denied Due to SecurityContext Constraints",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Modified SCC to allow required context or used correct volume labeling.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 380,
    "title": "VolumeProvisioner Race Condition Leads to Duplicated PVC",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Patched CSI controller to implement idempotent provisioning.",
    "tags": [
      "controller",
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 381,
    "title": "PVC Bound to Deleted PV After Restore",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Deleted and re-created PVCs manually or re-triggered restore in correct order.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 382,
    "title": "Unexpected Volume Type Defaults to HDD Instead of SSD",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated manifests to explicitly reference pd-ssd.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 383,
    "title": "ReclaimPolicy Retain Caused Resource Leaks",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Manually cleaned up PVs and external disk artifacts.",
    "tags": [
      "node",
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 384,
    "title": "ReadWriteOnce PVC Mounted by Multiple Pods",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Updated deployment to use ReadWriteMany (EFS) for shared access.",
    "tags": [
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 385,
    "title": "VolumeAttach Race on StatefulSet Rolling Update",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set podManagementPolicy: OrderedReady.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 386,
    "title": "CSI Driver CrashLoop Due to Missing Node Labels",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Reapplied node labels and restarted sidecars.",
    "tags": [
      "node",
      "webhook",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 387,
    "title": "PVC Deleted While Volume Still Mounted",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Force deleted pod, manually detached volume.",
    "tags": [
      "kubelet",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 388,
    "title": "In-Tree Volume Plugin Migration Caused Downtime",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Re-enabled legacy plugin until CSI was functional.",
    "tags": [
      "general"
    ],
    "category": "Storage"
  },
  {
    "id": 389,
    "title": "Overprovisioned Thin Volumes Hit Underlying Limit",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Resized physical disk and added monitoring.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 390,
    "title": "Dynamic Provisioning Failure Due to Quota Exhaustion",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Increased quota or deleted old volumes.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 391,
    "title": "PVC Resizing Didn\u2019t Expand Filesystem Automatically",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Restarted the pod to trigger filesystem expansion.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 392,
    "title": "StatefulSet Pods Lost Volume Data After Node Reboot",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Migrated to network-attached persistent storage (NFS/CSI).",
    "tags": [
      "replica",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 393,
    "title": "VolumeSnapshots Failed to Restore with Immutable Fields",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Created a new PVC with correct parameters and attached manually.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 394,
    "title": "GKE Autopilot PVCs Stuck Due to Resource Class Conflict",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated PVCs and workload definitions to specify supported resource classes.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 395,
    "title": "Cross-Zone Volume Scheduling Failed in Regional Cluster",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated storage class to use regional persistent disks.",
    "tags": [
      "affinity",
      "node",
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 396,
    "title": "Stuck Finalizers on Deleted PVCs Blocking Namespace Deletion",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Patched PVCs to remove finalizers manually.",
    "tags": [
      "controller",
      "pvc",
      "namespace"
    ],
    "category": "Storage"
  },
  {
    "id": 397,
    "title": "CSI Driver Upgrade Corrupted Volume Attachments",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Rolled back to previous CSI driver version.",
    "tags": [
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 398,
    "title": "Stale Volume Handles After Disaster Recovery Cutover",
    "description": "",
    "component": "Persistent Volume",
    "severity": "medium",
    "resolution": "\u2022 Manually edited PV specs or recreated PVCs from scratch.",
    "tags": [
      "pvc"
    ],
    "category": "Storage"
  },
  {
    "id": 399,
    "title": "Application Wrote Outside Mounted Path and Lost Data",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated application config to write into the mount path.",
    "tags": [
      "pvc",
      "pod"
    ],
    "category": "Storage"
  },
  {
    "id": 400,
    "title": "Cluster Autoscaler Deleted Nodes with Mounted Volumes",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Enabled --balance-similar-node-groups and --skip-nodes-with-local-storage.",
    "tags": [
      "node"
    ],
    "category": "Storage"
  },
  {
    "id": 401,
    "title": "HPA Didn't Scale Due to Missing Metrics Server",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Installed metrics-server using official manifests.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 402,
    "title": "CPU Throttling Prevented Effective Autoscaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased CPU limits or removed them entirely for key services.",
    "tags": [
      "hpa",
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 403,
    "title": "Overprovisioned Pods Starved the Cluster",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted requests/limits based on real usage.",
    "tags": [
      "hpa",
      "scheduler",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 404,
    "title": "HPA and VPA Conflicted, Causing Flapping",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Disabled VPA on workloads using HPA.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 405,
    "title": "Cluster Autoscaler Didn't Scale Due to Pod Affinity Rules",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Relaxed anti-affinity or labeled node groups appropriately.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 406,
    "title": "Load Test Crashed Cluster Due to Insufficient Node Quotas",
    "description": "",
    "component": "etcd",
    "severity": "medium",
    "resolution": "\u2022 Added maxReplicas to HPA. \t\u2022 Throttled CI tests.",
    "tags": [
      "hpa",
      "node",
      "replica",
      "api server",
      "pod",
      "etcd"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 407,
    "title": "Scale-To-Zero Caused Cold Starts and SLA Violations",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Added minReplicaCount: 1 to high-SLA services.",
    "tags": [
      "service",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 408,
    "title": "Misconfigured Readiness Probe Blocked HPA Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected readiness endpoint in manifest.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 409,
    "title": "Custom Metrics Adapter Crashed, Breaking Custom HPA",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Fixed Prometheus query in adapter configmap.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 410,
    "title": "Application Didn\u2019t Handle Scale-In Gracefully",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Implemented preStop hook with delay. \t\u2022 Added graceful shutdown in app logic.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 411,
    "title": "Cluster Autoscaler Ignored Pod PriorityClasses",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled preemption. \t\u2022 Re-tuned PriorityClass definitions to align with business SLAs.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 412,
    "title": "ReplicaSet Misalignment Led to Excessive Scale-Out",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Cleaned up old ReplicaSets. \t\u2022 Scoped matchLabels more tightly.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 413,
    "title": "StatefulSet Didn't Scale Due to PodDisruptionBudget",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted PDB to tolerate one pod disruption.",
    "tags": [
      "node",
      "poddisruptionbudget",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 414,
    "title": "Horizontal Pod Autoscaler Triggered by Wrong Metric",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched HPA to CPU metric. \t\u2022 Tuned caching logic in application.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 415,
    "title": "Prometheus Scraper Bottlenecked Custom HPA Metrics",
    "description": "",
    "component": "Horizontal Pod Autoscaler",
    "severity": "medium",
    "resolution": "\u2022 Reduced scrape interval for critical metrics.",
    "tags": [
      "hpa"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 416,
    "title": "Kubernetes Downscaled During Rolling Update",
    "description": "",
    "component": "Horizontal Pod Autoscaler",
    "severity": "medium",
    "resolution": "\u2022 Tuned maxUnavailable and minReadySeconds. \t\u2022 Added load-based HPA stabilization window.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 417,
    "title": "KEDA Failed to Scale on Kafka Lag Metric",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Updated Kafka trigger auth to use correct secret.",
    "tags": [
      "replica"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 418,
    "title": "Spike in Load Exceeded Pod Init Time",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Optimized Docker image layers and moved setup to init containers.",
    "tags": [
      "hpa",
      "service",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 419,
    "title": "Overuse of Liveness Probes Disrupted Load Balance",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased probe timeoutSeconds and failureThreshold.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 420,
    "title": "Scale-In Happened Before Queue Was Drained",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Added preStop hook to finish queue processing.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 421,
    "title": "Node Drain Race Condition During Scale Down",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted terminationGracePeriodSeconds for pods. \t\u2022 Introduced node draining delay in scaling policy.",
    "tags": [
      "node",
      "poddisruptionbudget",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 422,
    "title": "HPA Disabled Due to Missing Resource Requests",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set proper resources.requests in the deployment YAML.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 423,
    "title": "Unexpected Overprovisioning of Pods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced resource limits to more realistic values.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 424,
    "title": "Autoscaler Failed During StatefulSet Upgrade",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted StatefulSet rollingUpdate strategy. \t\u2022 Tuned autoscaler thresholds for more aggressive scaling.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 425,
    "title": "Inadequate Load Distribution in a Multi-AZ Setup",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated service to use topologySpreadConstraints for better AZ distribution.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 426,
    "title": "Downscale Too Aggressive During Traffic Dips",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Set a minimum of 1 replica for critical workloads. \t\u2022 Tuned scaling thresholds to avoid premature downscaling.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 427,
    "title": "Insufficient Scaling Under High Ingress Traffic",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Implemented custom metrics for Ingress traffic. \t\u2022 Configured HPA to scale based on traffic load.",
    "tags": [
      "controller",
      "hpa",
      "ingress",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 428,
    "title": "Nginx Ingress Controller Hit Rate Limit on External API",
    "description": "",
    "component": "Controller",
    "severity": "medium",
    "resolution": "\u2022 Added retry logic for external API requests. \t\u2022 Adjusted autoscaling to consider both internal load and external API delays.",
    "tags": [
      "controller",
      "service",
      "ingress",
      "hpa"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 429,
    "title": "Resource Constraints on Node Impacted Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added more nodes to the cluster. \t\u2022 Increased resource limits for node pools.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 430,
    "title": "Memory Leak in Application Led to Excessive Scaling",
    "description": "",
    "component": "Horizontal Pod Autoscaler",
    "severity": "medium",
    "resolution": "\u2022 Identified and fixed the memory leak in the application code. \t\u2022 Tuned autoscaling to more accurately measure actual load.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 431,
    "title": "Inconsistent Pod Scaling During Burst Traffic",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted HPA settings to lower the stabilization window and set appropriate scaling thresholds.",
    "tags": [
      "hpa",
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 432,
    "title": "Auto-Scaling Hit Limits with StatefulSet",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted pod affinity rules to allow scaling across more nodes.",
    "tags": [
      "hpa",
      "node",
      "affinity",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 433,
    "title": "Cross-Cluster Autoscaling Failures",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Adjusted resource allocation policies to account for cross-cluster scaling. \t\u2022 Ensured consistent resource availability across regions.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 434,
    "title": "Service Disruption During Auto-Scaling of StatefulSet",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Tuning the rollingUpdate strategy allowed pods to scale without downtime.",
    "tags": [
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 435,
    "title": "Unwanted Pod Scale-down During Quiet Periods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased scaleDown stabilization settings to prevent rapid pod removal. \t\u2022 Adjusted thresholds to delay scale-down actions.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 436,
    "title": "Cluster Autoscaler Inconsistencies with Node Pools",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Increased node pool size limits to allow autoscaling. \t\u2022 Adjusted autoscaler settings to better handle resource spikes.",
    "tags": [
      "node"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 437,
    "title": "Disrupted Service During Pod Autoscaling in StatefulSet",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Disabled autoscaling for stateful pods and adjusted configuration for better handling of stateful workloads.",
    "tags": [
      "affinity",
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 438,
    "title": "Slow Pod Scaling During High Load",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted HPA to trigger scaling at lower thresholds.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 439,
    "title": "Autoscaler Skipped Scale-up Due to Incorrect Metric",
    "description": "",
    "component": "Horizontal Pod Autoscaler",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured HPA to scale based on CPU metrics.",
    "tags": [
      "hpa"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 440,
    "title": "Scaling Inhibited Due to Pending Jobs in Queue",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Added job queue monitoring metrics to scaling triggers. \t\u2022 Adjusted HPA to trigger based on job queue size and pod workload.",
    "tags": [
      "hpa",
      "job",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 441,
    "title": "Scaling Delayed Due to Incorrect Resource Requests",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced resource requests to better align with the available cluster resources. \t\u2022 Set resource limits more carefully based on load testing.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 442,
    "title": "Unexpected Pod Termination Due to Scaling Policy",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the scaleDown stabilization window and added buffer periods before termination. \t\u2022 Revisited scaling policy settings to ensure more balanced scaling.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 443,
    "title": "Unstable Load Balancing During Scaling Events",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the load balancer to rebalance traffic more efficiently after scaling events. \t\u2022 Adjusted readiness and liveness probes to allow new pods to join the pool smoothly.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 444,
    "title": "Autoscaling Ignored Due to Resource Quotas",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted resource quotas to allow more flexible scaling. \t\u2022 Implemented dynamic resource quota adjustments based on actual usage.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 445,
    "title": "Delayed Scaling Response to Traffic Spike",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Lowered scaling thresholds to trigger scaling faster. \t\u2022 Used burst metrics for quicker scaling decisions.",
    "tags": [
      "hpa",
      "service",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 446,
    "title": "CPU Utilization-Based Scaling Did Not Trigger for High Memory Usage",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured HPA to also consider memory usage as a scaling metric. \t\u2022 Adjusted scaling policies to scale pods based on both CPU and memory utilization.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 447,
    "title": "Inefficient Horizontal Scaling of StatefulSets",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched to a Deployment with persistent volumes, which better supported horizontal scaling for the workload. \t\u2022 Used StatefulSets only for workloads that require persistent state and stable network identities.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 448,
    "title": "Autoscaler Skipped Scaling Events Due to Flaky Metrics",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Switched to using native Kubernetes metrics for autoscaling decisions. \t\u2022 Ensured that metrics from third-party tools were properly validated before being used in autoscaling.",
    "tags": [
      "general"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 449,
    "title": "Delayed Pod Creation Due to Node Affinity Misconfigurations",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Loosened node affinity rules to allow more flexible scheduling. \t\u2022 Used affinity rules more suited for scaling scenarios.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 450,
    "title": "Excessive Scaling During Short-Term Traffic Spikes",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Adjusted scaling policies to better handle short-term traffic spikes. \t\u2022 Implemented rate-limiting for scaling events.",
    "tags": [
      "general"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 451,
    "title": "Inconsistent Scaling Due to Misconfigured Horizontal Pod Autoscaler",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Switched to using Kubernetes-native CPU and memory metrics for autoscaling. \t\u2022 Improved the reliability of the custom metrics system by implementing fallback mechanisms.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 452,
    "title": "Load Balancer Overload After Quick Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured the load balancer to automatically adjust traffic distribution after pod scaling events. \t\u2022 Implemented health checks to ensure that only fully initialized pods received traffic.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 453,
    "title": "Autoscaling Failed During Peak Traffic Periods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Lowered the scaling thresholds to respond more quickly to persistent traffic increases. \t\u2022 Implemented more granular scaling rules based on time-based patterns.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 454,
    "title": "Insufficient Node Resources During Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource limits on existing nodes. \t\u2022 Implemented Cluster Autoscaler to add more nodes when resources are insufficient.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 455,
    "title": "Unpredictable Pod Scaling During Cluster Autoscaler Event",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted Cluster Autoscaler settings to delay node addition during scaling events. \t\u2022 Tweaked pod scheduling policies to ensure new pods were placed on the most appropriate nodes.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 456,
    "title": "CPU Resource Over-Commitment During Scale-Up",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the CPU resource limits and requests for new pods to avoid over-commitment. \t\u2022 Implemented resource isolation policies to prevent CPU contention.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 457,
    "title": "Failure to Scale Due to Horizontal Pod Autoscaler Anomaly",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Implemented a fallback mechanism to trigger scaling based on last known good metrics. \t\u2022 Used a more robust monitoring system to track resource usage in real time.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 458,
    "title": "Memory Pressure Causing Slow Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the memory available on nodes to alleviate pressure. \t\u2022 Used resource requests and limits more conservatively to ensure proper memory allocation.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 459,
    "title": "Node Over-Provisioning During Cluster Scaling",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Fine-tuned Cluster Autoscaler settings to scale nodes more precisely based on actual usage. \t\u2022 Implemented tighter limits on node scaling thresholds.",
    "tags": [
      "node"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 460,
    "title": "Autoscaler Fails to Handle Node Termination Events Properly",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured the autoscaler to prioritize the immediate replacement of terminated nodes. \t\u2022 Enhanced the health checks to better detect node failures.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 461,
    "title": "Node Failure During Pod Scaling Up",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured the Cluster Autoscaler to provision more nodes and preemptively account for potential node failures. \t\u2022 Ensured the cloud provider's infrastructure health was regularly monitored.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 462,
    "title": "Unstable Scaling During Traffic Spikes",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the scaling policy to use smaller time intervals for triggering scaling. \t\u2022 Introduced custom metrics to scale pods based on response times and traffic patterns.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 463,
    "title": "Insufficient Node Pools During Sudden Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Expanded node pool size to accommodate more pods. \t\u2022 Adjusted autoscaling policies to trigger faster node provisioning during scaling events.",
    "tags": [
      "hpa",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 464,
    "title": "Latency Spikes During Horizontal Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured load balancer to refresh routing rules as soon as new pods were scaled up. \t\u2022 Implemented readiness probes to ensure that only fully initialized pods were exposed to traffic.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 465,
    "title": "Resource Starvation During Infrequent Scaling Events",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted resource requests and limits to better reflect the actual usage during scaling events. \t\u2022 Increased node pool size to provide more headroom during burst scaling.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 466,
    "title": "Autoscaler Delayed Reaction to Load Decrease",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced the cooldown period in the HPA configuration to make it more responsive to traffic decreases. \t\u2022 Set resource limits to better reflect current traffic levels.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 467,
    "title": "Node Resource Exhaustion Due to High Pod Density",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted pod affinity rules to distribute pods more evenly across the cluster. \t\u2022 Increased the number of nodes available to handle the pod load more effectively.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 468,
    "title": "Scaling Failure Due to Node Memory Pressure",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased memory resources on nodes and adjusted pod resource requests to better match available resources. \t\u2022 Implemented memory-based autoscaling to handle memory pressure better during scaling events.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 469,
    "title": "Scaling Latency Due to Slow Node Provisioning",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Worked with the cloud provider to speed up node provisioning times. \t\u2022 Used preemptible nodes to quickly handle scaling demands during traffic spikes.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 470,
    "title": "Slow Scaling Response Due to Insufficient Metrics Collection",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the metric collection to use real-time data, reducing the delay in scaling actions. \t\u2022 Implemented a more frequent metric scraping interval to improve responsiveness.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 471,
    "title": "Node Scaling Delayed Due to Cloud Provider API Limits",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Worked with the cloud provider to increase API rate limits. \t\u2022 Configured autoscaling to use multiple API keys to distribute the API requests and avoid hitting rate limits.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 472,
    "title": "Scaling Overload Due to High Replica Count",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted the replica scaling thresholds in the HPA configuration. \t\u2022 Limited the maximum replica count to avoid overload.",
    "tags": [
      "hpa",
      "node",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 473,
    "title": "Failure to Scale Down Due to Persistent Idle Pods",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Updated the readiness probe configuration to ensure pods were correctly marked as ready or not based on their actual state. \t\u2022 Configured the HPA to scale down based on actual pod readiness.",
    "tags": [
      "hpa",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 474,
    "title": "Load Balancer Misrouting After Pod Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Configured the load balancer to refresh routing rules dynamically during pod scaling events. \t\u2022 Ensured that only ready and healthy pods were included in the load balancer\u2019s routing pool.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 475,
    "title": "Cluster Autoscaler Not Triggering Under High Load",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Adjusted resource requests and limits to match node capacity. \t\u2022 Tuned the Cluster Autoscaler to scale more aggressively during high load situations.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 476,
    "title": "Autoscaling Slow Due to Cloud Provider API Delay",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Worked with the cloud provider to optimize node provisioning time. \t\u2022 Increased API limits to accommodate the scaling operations.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 477,
    "title": "Over-provisioning Resources During Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reduced resource requests and limits to more closely match actual usage patterns. \t\u2022 Enabled auto-scaling of resource limits based on traffic patterns.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 478,
    "title": "Incorrect Load Balancer Configuration After Node Scaling",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated load balancer settings to ensure they dynamically adjust based on node changes. \t\u2022 Implemented a health check system for nodes before routing traffic.",
    "tags": [
      "node"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 478,
    "title": "Incorrect Load Balancer Configuration After Node Scaling",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Updated load balancer settings to ensure they dynamically adjust based on node changes. \t\u2022 Implemented a health check system for nodes before routing traffic.",
    "tags": [
      "node"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 479,
    "title": "Autoscaling Disabled Due to Resource Constraints",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Reduced resource requests and limits on existing pods. \t\u2022 Requested additional capacity from the cloud provider to handle scaling operations.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 480,
    "title": "Resource Fragmentation Leading to Scaling Delays",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Enabled pod affinity and anti-affinity rules to ensure better distribution of pods across nodes. \t\u2022 Reconfigured node selectors and affinity rules for optimal pod placement.",
    "tags": [
      "affinity",
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 481,
    "title": "Incorrect Scaling Triggers Due to Misconfigured Metrics Server",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Corrected the metrics server configuration to ensure it provided accurate resource data. \t\u2022 Adjusted the scaling thresholds to be more aligned with actual traffic patterns.",
    "tags": [
      "hpa",
      "replica",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 482,
    "title": "Autoscaler Misconfigured with Cluster Network Constraints",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "\u2022 Adjusted network policies and firewall rules to allow communication between new and existing nodes. \t\u2022 Configured the autoscaler to take network constraints into account during scaling events.",
    "tags": [
      "node"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 483,
    "title": "Scaling Delays Due to Resource Quota Exhaustion",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Increased the resource quotas to allow for more pods and scaling capacity. \t\u2022 Reviewed and adjusted resource quotas to ensure they aligned with expected scaling behavior.",
    "tags": [
      "namespace",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 484,
    "title": "Memory Resource Overload During Scaling",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted pod memory requests and limits to avoid over-provisioning. \t\u2022 Increased memory resources on the nodes to handle the scaled workload.",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 485,
    "title": "HPA Scaling Delays Due to Incorrect Metric Aggregation",
    "description": "",
    "component": "Horizontal Pod Autoscaler",
    "severity": "medium",
    "resolution": "\u2022 Corrected the aggregation settings to ensure faster response times for scaling events. \t\u2022 Tuned the HPA configuration to react more quickly to traffic fluctuations.",
    "tags": [
      "hpa"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 486,
    "title": "Scaling Causing Unbalanced Pods Across Availability Zones",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Reconfigured pod affinity rules to ensure an even distribution across availability zones. \t\u2022 Implemented anti-affinity rules to avoid overloading specific zones.",
    "tags": [
      "affinity",
      "scheduler",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 487,
    "title": "Failed Scaling due to Insufficient Node Capacity for StatefulSets",
    "description": "",
    "component": "Node",
    "severity": "medium",
    "resolution": "\u2022 Increased the node pool size and resource limits for the StatefulSets. \t\u2022 Rescheduled PVCs and balanced the resource requests more effectively across nodes.",
    "tags": [
      "node",
      "pvc",
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 488,
    "title": "Uncontrolled Resource Spikes After Scaling Large StatefulSets",
    "description": "",
    "component": "Pod",
    "severity": "medium",
    "resolution": "\u2022 Adjusted resource requests and limits for StatefulSet pods to better match the actual usage. \t\u2022 Implemented a rolling upgrade to distribute the scaling load more evenly.",
    "tags": [
      "pod"
    ],
    "category": "Scaling & Load"
  },
  {
    "id": 489,
    "title": "Cluster Autoscaler Preventing Scaling Due to Underutilized Nodes",
    "description": "",
    "component": "General",
    "severity": "medium",
    "resolution": "",
    "tags": [
      "node",
      "pod"
    ],
    "category": "Scaling & Load"
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
