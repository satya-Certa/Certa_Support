const { locator,expect } = require('@playwright/test');


/* Functionlaity to check the Priority of Bug raised by the client/Propsect*/
const reportBugPriorityData = [
    { impactedOn: 'Access Issues', impactedFor: 'Single User',      priority: 'P1 - Critical' },
    { impactedOn: 'Access Issues', impactedFor: 'Specific Group',   priority: 'P1 - Critical' },
    { impactedOn: 'Access Issues', impactedFor: 'Multiple Groups',  priority: 'P1 - Critical' },
    { impactedOn: 'Access Issues', impactedFor: 'All',              priority: 'P1 - Critical' },
    
    { impactedOn: 'Dashboard and Report', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Dashboard and Report', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Dashboard and Report', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Dashboard and Report', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Others', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Others', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Others', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Others', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Unable to access the workflow', impactedFor: 'Single User',      priority: 'P1 - Critical' },
    { impactedOn: 'Unable to access the workflow', impactedFor: 'Specific Group',   priority: 'P1 - Critical' },
    { impactedOn: 'Unable to access the workflow', impactedFor: 'Multiple Groups',  priority: 'P1 - Critical' },
    { impactedOn: 'Unable to access the workflow', impactedFor: 'All',              priority: 'P1 - Critical' },
    
    { impactedOn: 'Status issue', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Status issue', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Status issue', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Status issue', impactedFor: 'All',              priority: 'P2 - High' },
    
    { impactedOn: 'Activity log discrepancy', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Activity log discrepancy', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Activity log discrepancy', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Activity log discrepancy', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Step/Swimlane not visible', impactedFor: 'Single User',      priority: 'P3 - Medium' },
    { impactedOn: 'Step/Swimlane not visible', impactedFor: 'Specific Group',   priority: 'P3 - Medium' },
    { impactedOn: 'Step/Swimlane not visible', impactedFor: 'Multiple Groups',  priority: 'P2 - High' },
    { impactedOn: 'Step/Swimlane not visible', impactedFor: 'All',              priority: 'P1 - Critical' },
    
    { impactedOn: 'VAT/TIN Check', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'VAT/TIN Check', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'VAT/TIN Check', impactedFor: 'Multiple Groups',  priority: 'P2 - High' },
    { impactedOn: 'VAT/TIN Check', impactedFor: 'All',              priority: 'P1 - Critical' },
    
    { impactedOn: 'Bank Validation', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Bank Validation', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Bank Validation', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Bank Validation', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Screening', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Screening', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Screening', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Screening', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Oracle Integration', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Oracle Integration', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Oracle Integration', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Oracle Integration', impactedFor: 'All',              priority: 'P3 - Medium' },
    
    { impactedOn: 'Netsuite Integration', impactedFor: 'Single User',      priority: 'P4 - Low' },
    { impactedOn: 'Netsuite Integration', impactedFor: 'Specific Group',   priority: 'P4 - Low' },
    { impactedOn: 'Netsuite Integration', impactedFor: 'Multiple Groups',  priority: 'P3 - Medium' },
    { impactedOn: 'Netsuite Integration', impactedFor: 'All',              priority: 'P3 - Medium' },
    
        
      ];
  
  module.exports = { reportBugPriorityData };
  