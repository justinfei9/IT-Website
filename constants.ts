// --- constants.ts ---

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "IT Specialist (End-User & Operational Support)",
    company: "Anomaly",
    period: "Present",
    description: "Managed the entire Employee Technology Lifecycle, covering onboarding, offboarding, and secure device management (provisioning, configuration, and data erasure). Provided Tier 1 technical support for all staff and ensured seamless operation of A/V and conference room technologies. Maintained the IT asset inventory, proactively tracking and ordering necessary hardware (laptops, monitors, chargers).",
    techStack: ["Jamf", "Druva", "Eset", "Cisco", "Google Workspace", "A/V Support", "Asset Management"],
    icon: "laptop",
  },
  {
    id: 2,
    role: "IT Infrastructure Intern",
    company: "Central Hudson",
    period: "Previous",
    description: "Engineered a custom SolarWinds 'Modern Dashboard' using SWQL to visualize critical node status for the ITOC team. Developed PowerShell scripts to automate vSphere attribute auditing. Streamlined incident management by tuning alert delays and integrating SolarWinds alerts with ServiceNow.",
    techStack: ["SolarWinds (SWQL)", "PowerShell", "VMware vSphere", "Active Directory", "SailPoint", "ServiceNow"],
    icon: "server",
  },
  {
    id: 3,
    role: "Help Desk Support",
    company: "SUNY New Paltz",
    period: "Previous",
    description: "Provided front-line technical resolution for a campus of 7,000+ users. Developed the 'Client-First' communication style that now defines my approach to executive IT support.",
    techStack: ["ServiceNow", "Hardware Repair", "Remote Support", "User Training"],
    icon: "support",
  },
];

export const SKILLS_DATA = [
  {
    category: "Mac & End-User Computing (EUC)",
    items: [
      "Jamf Pro (MDM & Policy Management)",
      "macOS Deployment & Migration (M1 - M4)",
      "Client Data Transfer & Backup (TB volumes)",
      "Creative App Support (Adobe CC/AI platforms)",
      "Hardware Lifecycle Management (Laptops, Monitors, iMacs)",
    ],
  },
  {
    category: "Core Infrastructure & Automation",
    items: [
      "PowerShell Scripting (Automation & Auditing)",
      "SolarWinds (SWQL, Alerting & Dashboards)",
      "VMware vSphere Management",
      "Active Directory & Group Policy", 
      "Windows Server Administration",
    ],
  },
  {
    category: "Identity, Security & Networking",
    items: [
      "SentinelOne EDR (Migration & Monitoring)",
      "Cisco Meraki & VPN Configuration",
      "Google Workspace",
      "SolarWinds Network Performance Monitor (NPM)",
    ],
  },
  {
    category: "Workflow, A/V & Project Management",
    items: [
      "ServiceNow/ZenDesk (Ticket Automation & Workflows)",
      "New Hire IT Orientation & Onboarding",
      "Executive Support (C-Suite & Stakeholder Scheduling)",
      "Conference Room A/V (Zoom Rooms, Shure, Logicam)",
      "Maconomy (ERP Troubleshooting)",
    ],
  },
];