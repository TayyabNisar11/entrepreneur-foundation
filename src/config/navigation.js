import {
  FaChartPie,
  FaSchool,
  FaUsers,
  FaUser,
  FaBook,
  FaTable,
  FaBusinessTime,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaTrophy,
  FaEnvelope,
  FaShieldAlt,
  FaUserCircle,
  FaChalkboardTeacher,
  FaChartLine,
  FaRegChartBar,
  FaSignOutAlt,
  FaHandsHelping,
  FaCalendarCheck,
  FaRegHandshake,
  FaMoneyCheckAlt,
  FaPeopleArrows,
  FaRegBuilding,
  FaMoneyBillAlt,
  FaUserShield,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaHome,
  FaUserPlus,
  FaUserTie,
  FaUserCheck,
  FaDollarSign,
  FaHandshake,
  FaBuilding,
  FaBalanceScale,
  FaClipboardCheck,
  FaSitemap,
} from "react-icons/fa";

import {
  ENTREPRENEUR,
  MENTOR,
  TALENT,
  BUSINESS_SERVICE_PROVIDER,
  SAAS_MANAGER,
  CAPITAL_PROVIDER,
  ORGANIZATION_MANAGER,
  SYSTEM_ADMIN,
} from "@/constants";

export const routes = {
  sysadmin: [
    {
      text: "Ecosystem Profile",
      path: "/sysadmin/ecosystem/profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Ecosystem Statistical Progress",
      path: "/sysadmin/ecosystem/progress",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Schools In Ecosystem",
      path: "/sysadmin/ecosystem/schools",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Members Organization",
      path: "/sysadmin/organization-members",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Individual Members",
      path: "/sysadmin/individual-members",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Library of Entrepreneur Resources",
      path: "/sysadmin/library-of-entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Manage Table for Forms",
      path: "/sysadmin/table-forms",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Manage Business Providers",
      path: "/sysadmin/business-provider",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Manage Capital Providers",
      path: "/sysadmin/capital-provider",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Calendar of Business Events",
      path: "/sysadmin/business-events-calendar",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Business Plan Competition",
      path: "/sysadmin/business-plan-competition",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Mail Center",
      path: "/sysadmin/mail-center",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/sysadmin/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Profile",
      path: "/sysadmin/profile",
      roles: [SYSTEM_ADMIN],
    },
  ],
  saasManager: [
    {
      text: "Home",
      path: "/saas/home",
      roles: [SYSTEM_ADMIN],
    },
  ],
  orgAdmin: [
    {
      text: "Appoint Co-Administrators",
      path: "/orgAdmin/appoint-co-administrators",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Onboarding Entrepreneur Mem..",
      path: "/orgAdmin/onboarding-entrepreneur-members",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Member and Accomplishment",
      path: "/orgAdmin/member-and-accomplishment",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Mentoring",
      path: "/orgAdmin/org-mentoring",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Entrepreneur Resources",
      path: "/orgAdmin/entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Financing",
          path: "/orgAdmin/financing",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Talent Directory",
          path: "/orgAdmin/talent-directory",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Incubator | Co working | Mak....",
          path: "/orgAdmin/incubator-co-working-makerspace",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Business service Providers",
          path: "/orgAdmin/business-service-providers",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Business Plan Competition",
      path: "/orgAdmin/business-plan-competition",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Calendar of Business...",
      path: "/orgAdmin/calendar-of-business",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Mail Center",
      path: "/orgAdmin/mail-center",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/orgAdmin/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/orgAdmin/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
  capProvider: [
    {
      text: "Transaction Criteria",
      path: "/capProvider/transaction-criteria",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Funding Opportunities",
      path: "/capProvider/captital-funding-opportunities",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Manage Reviewing",
      path: "/capProvider/manage-reviewing",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Funding Referrals and Syndication",
      path: "/capProvider/funding-referrals-syndication",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Business Plan Competition",
      path: "/capProvider/capital-business-plan-competition",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Entrepreneur Resources",
      path: "/capProvider/entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Talent Directory",
          path: "/capProvider/talent-directory",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Incubator | Co working | Mak....",
          path: "/capProvider/incubator-co-working-makerspace",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Referral",
      path: "/capProvider/referral",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Business Service Providers",
      path: "/capProvider/business-service-providers",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/capProvider/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Profile",
      path: "/talent/personal-profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/capProvider/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
  talent: [
    {
      text: "Capabilities",
      path: "/talent/capabilities",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Education",
      path: "/talent/education",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Position Sought",
      path: "/talent/position-sought",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/talent/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Personal Profile",
      path: "/talent/personal-profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/talent/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
  businessProvider: [
    {
      text: "Membership Dues",
      path: "/businessProvider/membership-dues",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Entrepreneur and Investor ser....",
      path: "/businessProvider/entrepreneur-investor-services",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Entrepreneur Resources",
      path: "/businessProvider/entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Financing",
          path: "/businessProvider/financing",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Talent Directory",
          path: "/businessProvider/talent-directory",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Incubator | Co working | Mak....",
          path: "/businessProvider/incubator-co-working-makerspace",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Business service Providers",
          path: "/businessProvider/business-service-providers",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Referral",
      path: "/businessProvider/referral",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Business Plan Competition",
      path: "/businessProvider/view-plan-competition",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/businessProvider/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Company Profile",
      path: "/businessProvider/company-profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/businessProvider/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
  entrepreneur: [
    {
      text: "Current company profile",
      path: "/entrepreneur/current-company-profile",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Company profile",
          path: "/entrepreneur/entrepreneur-company-profile",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Management Team",
          path: "/entrepreneur/management-team",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Positions",
          path: "/entrepreneur/positions",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Join Support Organization",
      path: "/entrepreneur/join-support-organization",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Mentoring",
      path: "/entrepreneur/mentoring",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Record of Progress",
      path: "/entrepreneur/record-of-progress",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Business Model Canvas",
          path: "/entrepreneur/business-model-canvas",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "BenchMarks",
          path: "/entrepreneur/benchmarks",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Capital Raised",
          path: "/entrepreneur/capital-raised",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Revenue | Employment | Patents",
          path: "/entrepreneur/revenue-employment-patents",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Business Exit",
          path: "/entrepreneur/business-exit",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Entrepreneur Resources",
      path: "/businessProvider/entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Financing",
          path: "/businessProvider/financing",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Talent Directory",
          path: "/businessProvider/talent-directory",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Incubator | Co working | Mak....",
          path: "/businessProvider/incubator-co-working-makerspace",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Business service Providers",
          path: "/businessProvider/business-service-providers",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Security",
      path: "/entrepreneur/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Personal Profile",
      path: "/entrepreneur/personal-profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/entrepreneur/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
  mentor: [
    {
      text: "Mentoring and Reviewing",
      path: "/mentor/mentoring-and-reviewing",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Your Skills",
          path: "/mentor/your-skills",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Entrepreneurs Assigned to you",
          path: "/mentor/entrepreneurs-assigned",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Meetings with Entrepreneurs",
          path: "/mentor/meetings-with-entrepreneurs",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Referral",
          path: "/mentor/referral",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Badge",
          path: "/mentor/badge",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Entrepreneur Resources",
      path: "/mentor/entrepreneur-resources",
      roles: [SYSTEM_ADMIN],
      children: [
        {
          text: "Financing",
          path: "/mentor/financing",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Talent Directory",
          path: "/mentor/talent-directory",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Incubator | Co working | Mak....",
          path: "/mentor/incubator-co-working-makerspace",
          roles: [SYSTEM_ADMIN],
        },
        {
          text: "Business service Providers",
          path: "/mentor/business-service-providers",
          roles: [SYSTEM_ADMIN],
        },
      ],
    },
    {
      text: "Business Plan Competitions",
      path: "/mentor/business-plan-competitions",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Funding Opportunities",
      path: "/mentor/funding-opportunities",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Security",
      path: "/mentor/security",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Personal Profile",
      path: "/mentor/personal-profile",
      roles: [SYSTEM_ADMIN],
    },
    {
      text: "Log Out",
      path: "/mentor/log-out",
      roles: [SYSTEM_ADMIN],
    },
  ],
};

export const routeIcons = {
  "Ecosystem Profile": <FaChartPie />,
  "Ecosystem Statistical Progress": <FaChartPie />,
  "Schools In Ecosystem": <FaSchool />,
  "Members Organization": <FaUsers />,
  "Individual Members": <FaUser />,
  "Library of Entrepreneur Resources": <FaBook />,
  "Manage Table for Forms": <FaTable />,
  "Manage Business Providers": <FaBusinessTime />,
  "Manage Capital Providers": <FaMoneyBillWave />,
  "Calendar of Business Events": <FaCalendarAlt />,
  "Business Plan Competition": <FaTrophy />,
  "Mail Center": <FaEnvelope />,
  Security: <FaShieldAlt />,
  Profile: <FaUserCircle />,
  Mentoring: <FaChalkboardTeacher />,
  "Record of Progress": <FaChartLine />,
  "Business Model Canvas": <FaBusinessTime />,
  BenchMarks: <FaChartLine />,
  "Capital Raised": <FaMoneyBillWave />,
  "Revenue | Employment | Patents": <FaRegChartBar />,
  "Business Exit": <FaSignOutAlt />,
  "Entrepreneur Resources": <FaBook />,
  "Personal Profile": <FaUserCircle />,
  "Log Out": <FaSignOutAlt />,
  "Mentoring and Reviewing": <FaHandsHelping />,
  "Your Skills": <FaUsers />,
  "Entrepreneurs Assigned to you": <FaUsers />,
  "Meetings with Entrepreneurs": <FaCalendarCheck />,
  Referral: <FaRegHandshake />,
  Financing: <FaMoneyCheckAlt />,
  "Talent Directory": <FaPeopleArrows />,
  "Incubator | Co working | Mak....": <FaRegBuilding />,
  "Business service Providers": <FaBusinessTime />,
  "Business Plan Competitions": <FaTrophy />,
  "Funding Opportunities": <FaMoneyBillAlt />,
  Security: <FaUserShield />,
  Capabilities: <FaTools />,
  Education: <FaGraduationCap />,
  "Position Sought": <FaBriefcase />,
  "Membership Dues": <FaDollarSign />,
  "Entrepreneur and Investor ser....": <FaHandshake />,
  "Company Profile": <FaBuilding />,
  Home: <FaHome />,
  "Transaction Criteria": <FaBalanceScale />,
  "Manage Reviewing": <FaClipboardCheck />,
  "Funding Referrals and Syndication": <FaSitemap />,
  "Appoint Co-Administrators": <FaUserPlus />,
  "Onboarding Entrepreneur Mem..": <FaUserTie />,
  "Member and Accomplishment": <FaUserCheck />,
  "Calendar of Business...": <FaCalendarAlt />,
};
