import type { ResearchPost } from './types';

export const october25ResearchPosts: ResearchPost[] = [
  {
    "slug": "accountspayablemanager-attributing-rework-in-the-1099-record",
    "title": "Attributing rework in the 1099 record",
    "summary": "A repeatable measurement protocol for the 1099 record in accounts payable operations, with definitions, sampling, limits, and reporting.",
    "cluster": "accounts payable evidence",
    "publishedAt": "2026-10-25",
    "finding": "This protocol asks how the 1099 record can be described from the operational record in accounts payable operations.",
    "thumbnail": "/thumbnails/october-25/accountspayablemanager-attributing-rework-in-the-1099-record.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks how the 1099 record can be described from the operational record in accounts payable operations. It is a measurement method, not a performance score or a legal conclusion.",
          "The scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.",
          "The method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that the AP manager can review.",
          "Write the next action as a sentence with an owner and a time. A vague request to review the 1099 record exception is not a next action; a named person, a specific check, and a deadline is.",
          "Use a dated note for every owner decision. An approval that exists only in a meeting is difficult to reconstruct and easy to misremember."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one case involving the 1099 record, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.",
          "Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.",
          "Exclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.",
          "Keep the 1099 record queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
          "Keep the 1099 record source link durable. A screenshot may be useful for a quick review, but the link or record identifier is what lets the next person verify the value."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.",
          "Define the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.",
          "If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.",
          "When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
          "Name the point where the VA must stop and route. A boundary that says use judgment is not a boundary; it is a request for the VA to guess."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.",
          "Record the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.",
          "Use a short reason code for every exception on the 1099 record. The code should describe the evidence problem, not the person who found it.",
          "Check the destination, not only the activity. A payment marked sent, a schedule marked changed, or an access request marked complete should be verified in the system that owns the result."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.",
          "Include adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.",
          "Record the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.",
          "Review one case involving the 1099 record end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.",
          "Record the reason for a reopened case involving the 1099 record. The reason is evidence about the first close and should be used to improve the close rule."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.",
          "Separate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.",
          "Keep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.",
          "If the 1099 record rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "The record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.",
          "Small samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.",
          "The cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.",
          "Keep a named backup for the 1099 record owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "Set a review date and name the person who will read the result. A report without a review owner is an archive, not a control.",
          "Choose one next action: fix the source, simplify the field, change the queue, or stop the work until the AP manager decides. Record the decision and the next check.",
          "Repeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.",
          "Do not copy a value from a prior record for the 1099 record because it looks familiar. Reopen the source, confirm the version, and record what changed."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation.",
          "Test one case end to end before running the full sample. A failed dry run is cheaper than discovering a definition error after collection.",
          "Close the loop with the person who raised the 1099 record issue. A record that is internally complete but never confirmed by the requester is only half closed."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields needed for the question. Use named accounts, role-based access, masked identifiers, and an approved storage location.",
          "Log access and set a disposal date. A research file that lives forever is a liability, not an archive.",
          "Do not copy personal data into a chat or a personal drive to save time. If the approved system cannot support the review, narrow the review.",
          "Separate the request from the decision. The requester can describe the urgency; only the named owner can approve an exception that changes the outcome of the 1099 record."
        ]
      },
      {
        "heading": "Worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current record for the 1099 record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed.",
          "The example is deliberately ordinary. The value of the protocol is that the same evidence standard applies to a routine case, an exception, and a reopened item.",
          "Put the evidence standard in the task template, not in a separate policy document. The person doing the work should see the required source, owner, and close condition at the point of action."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation.",
          "If the source changes but the definitions do not, preserve the earlier result and label the new window. Do not splice two periods into one trend.",
          "Make the 1099 record handoff visible in the record. A chat message can start the handoff, but the source, the open question, and the next owner belong with the case.",
          "Measure the age of the oldest open item for the 1099 record, not only the average. An average can improve while one case sits unresolved for weeks."
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together.",
          "Leave the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list.",
          "Record the exact source for the 1099 record and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.",
          "When a reviewer finds a defect, ask whether the template allowed it. If the same field is missed twice, the form or the instruction is part of the cause."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does this research measure?",
        "a": "It defines a reproducible method for attributing rework in the 1099 record within accounts payable operations. It does not report a survey, a universal benchmark, or an audited result."
      },
      {
        "q": "What is the unit of analysis?",
        "a": "The unit is a defined attributing rework in the 1099 record record and its evidence trail. A completed field or a closed status is not treated as proof that the underlying control worked."
      },
      {
        "q": "How should a team use the method?",
        "a": "Apply it to a bounded population with a declared window, definitions, and reviewer. Keep the result as dated internal evidence, not as a performance ranking or an industry claim."
      }
    ],
    "sources": [
      {
        "label": "AICPA and CIMA",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Financial Crimes Enforcement Network",
        "url": "https://www.fincen.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-capacity-planning-for-the-expense-report",
    "title": "Capacity planning for the expense report",
    "summary": "A repeatable measurement protocol for the expense report in accounts payable operations, with definitions, sampling, limits, and reporting.",
    "cluster": "accounts payable evidence",
    "publishedAt": "2026-10-25",
    "finding": "This protocol asks how the expense report can be described from the operational record in accounts payable operations.",
    "thumbnail": "/thumbnails/october-25/accountspayablemanager-capacity-planning-for-the-expense-report.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks how the expense report can be described from the operational record in accounts payable operations. It is a measurement method, not a performance score or a legal conclusion.",
          "The scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.",
          "The method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that the AP manager can review.",
          "Write the next action as a sentence with an owner and a time. A vague request to review the expense report exception is not a next action; a named person, a specific check, and a deadline is.",
          "Use a dated note for every owner decision. An approval that exists only in a meeting is difficult to reconstruct and easy to misremember."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one case involving the expense report, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.",
          "Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.",
          "Exclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.",
          "Keep the expense report queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
          "Keep the expense report source link durable. A screenshot may be useful for a quick review, but the link or record identifier is what lets the next person verify the value."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.",
          "Define the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.",
          "If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.",
          "When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
          "Name the point where the VA must stop and route. A boundary that says use judgment is not a boundary; it is a request for the VA to guess."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.",
          "Record the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.",
          "Use a short reason code for every exception on the expense report. The code should describe the evidence problem, not the person who found it.",
          "Check the destination, not only the activity. A payment marked sent, a schedule marked changed, or an access request marked complete should be verified in the system that owns the result."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.",
          "Include adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.",
          "Record the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.",
          "Review one case involving the expense report end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.",
          "Separate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.",
          "Keep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.",
          "If the expense report rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "The record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.",
          "Small samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.",
          "The cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.",
          "Keep a named backup for the expense report owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "Set a review date and name the person who will read the result. A report without a review owner is an archive, not a control.",
          "Choose one next action: fix the source, simplify the field, change the queue, or stop the work until the AP manager decides. Record the decision and the next check.",
          "Repeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.",
          "Do not copy a value from a prior record for the expense report because it looks familiar. Reopen the source, confirm the version, and record what changed."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation.",
          "Test one case end to end before running the full sample. A failed dry run is cheaper than discovering a definition error after collection.",
          "Close the loop with the person who raised the expense report issue. A record that is internally complete but never confirmed by the requester is only half closed."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields needed for the question. Use named accounts, role-based access, masked identifiers, and an approved storage location.",
          "Log access and set a disposal date. A research file that lives forever is a liability, not an archive.",
          "Do not copy personal data into a chat or a personal drive to save time. If the approved system cannot support the review, narrow the review.",
          "Separate the request from the decision. The requester can describe the urgency; only the named owner can approve an exception that changes the outcome of the expense report."
        ]
      },
      {
        "heading": "Worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current record for the expense report. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed.",
          "The example is deliberately ordinary. The value of the protocol is that the same evidence standard applies to a routine case, an exception, and a reopened item.",
          "Use a weekly exception count by reason and age. The pattern is more useful than a single total because it shows whether the problem is volume, training, or a missing rule.",
          "Put the evidence standard in the task template, not in a separate policy document. The person doing the work should see the required source, owner, and close condition at the point of action."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation.",
          "If the source changes but the definitions do not, preserve the earlier result and label the new window. Do not splice two periods into one trend.",
          "Make the expense report handoff visible in the record. A chat message can start the handoff, but the source, the open question, and the next owner belong with the case.",
          "Measure the age of the oldest open item for the expense report, not only the average. An average can improve while one case sits unresolved for weeks."
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together.",
          "Leave the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list.",
          "Record the exact source for the expense report and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.",
          "When a reviewer finds a defect, ask whether the template allowed it. If the same field is missed twice, the form or the instruction is part of the cause."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does this research measure?",
        "a": "It defines a reproducible method for capacity planning for the expense report within accounts payable operations. It does not report a survey, a universal benchmark, or an audited result."
      },
      {
        "q": "What is the unit of analysis?",
        "a": "The unit is a defined capacity planning for the expense report record and its evidence trail. A completed field or a closed status is not treated as proof that the underlying control worked."
      },
      {
        "q": "How should a team use the method?",
        "a": "Apply it to a bounded population with a declared window, definitions, and reviewer. Keep the result as dated internal evidence, not as a performance ranking or an industry claim."
      }
    ],
    "sources": [
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "AICPA and CIMA",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Financial Crimes Enforcement Network",
        "url": "https://www.fincen.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-early-warning-signals-in-the-exception-queue",
    "title": "Early-warning signals in the exception queue",
    "summary": "A repeatable measurement protocol for the exception queue in accounts payable operations, with definitions, sampling, limits, and reporting.",
    "cluster": "accounts payable evidence",
    "publishedAt": "2026-10-25",
    "finding": "This protocol asks how the exception queue can be described from the operational record in accounts payable operations.",
    "thumbnail": "/thumbnails/october-25/accountspayablemanager-early-warning-signals-in-the-exception-queue.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks how the exception queue can be described from the operational record in accounts payable operations. It is a measurement method, not a performance score or a legal conclusion.",
          "The scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.",
          "The method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that the AP manager can review.",
          "Measure the age of the oldest open item for the exception queue, not only the average. An average can improve while one case sits unresolved for weeks."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one case involving the exception queue, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.",
          "Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.",
          "Exclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.",
          "When a reviewer finds a defect, ask whether the template allowed it. If the same field is missed twice, the form or the instruction is part of the cause."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.",
          "Define the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.",
          "If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.",
          "Use a dated note for every owner decision. An approval that exists only in a meeting is difficult to reconstruct and easy to misremember."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.",
          "Record the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.",
          "Keep the exception queue source link durable. A screenshot may be useful for a quick review, but the link or record identifier is what lets the next person verify the value."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.",
          "Include adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.",
          "Record the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.",
          "Name the point where the VA must stop and route. A boundary that says use judgment is not a boundary; it is a request for the VA to guess."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.",
          "Separate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.",
          "Keep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.",
          "Use a short reason code for every exception on the exception queue. The code should describe the evidence problem, not the person who found it.",
          "Check the destination, not only the activity. A payment marked sent, a schedule marked changed, or an access request marked complete should be verified in the system that owns the result."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "The record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.",
          "Small samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.",
          "The cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.",
          "Review one case involving the exception queue end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.",
          "Record the reason for a reopened case involving the exception queue. The reason is evidence about the first close and should be used to improve the close rule."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "Set a review date and name the person who will read the result. A report without a review owner is an archive, not a control.",
          "Choose one next action: fix the source, simplify the field, change the queue, or stop the work until the AP manager decides. Record the decision and the next check.",
          "Repeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.",
          "If the exception queue rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.",
          "Keep a short decision log for the exception queue queue. The log should show the question, the owner, the decision, the date, and what would reopen it."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation.",
          "Test one case end to end before running the full sample. A failed dry run is cheaper than discovering a definition error after collection.",
          "Keep a named backup for the exception queue owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.",
          "Do not let a temporary workaround become the permanent process by default. Write the workaround, its owner, and its expiry date, then review it."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields needed for the question. Use named accounts, role-based access, masked identifiers, and an approved storage location.",
          "Log access and set a disposal date. A research file that lives forever is a liability, not an archive.",
          "Do not copy personal data into a chat or a personal drive to save time. If the approved system cannot support the review, narrow the review.",
          "Do not copy a value from a prior record for the exception queue because it looks familiar. Reopen the source, confirm the version, and record what changed.",
          "When the exception queue source is maintained by another team, name the contact and the expected response time. Escalation without a contact becomes a repeated chase."
        ]
      },
      {
        "heading": "Worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current record for the exception queue. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed.",
          "The example is deliberately ordinary. The value of the protocol is that the same evidence standard applies to a routine case, an exception, and a reopened item.",
          "Close the loop with the person who raised the exception queue issue. A record that is internally complete but never confirmed by the requester is only half closed.",
          "Use a weekly exception count by reason and age. The pattern is more useful than a single total because it shows whether the problem is volume, training, or a missing rule."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation.",
          "If the source changes but the definitions do not, preserve the earlier result and label the new window. Do not splice two periods into one trend.",
          "Separate the request from the decision. The requester can describe the urgency; only the named owner can approve an exception that changes the outcome of the exception queue.",
          "Make the exception queue handoff visible in the record. A chat message can start the handoff, but the source, the open question, and the next owner belong with the case."
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together.",
          "Leave the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list.",
          "Put the evidence standard in the task template, not in a separate policy document. The person doing the work should see the required source, owner, and close condition at the point of action.",
          "Record the exact source for the exception queue and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does this research measure?",
        "a": "It defines a reproducible method for early-warning signals in the exception queue within accounts payable operations. It does not report a survey, a universal benchmark, or an audited result."
      },
      {
        "q": "What is the unit of analysis?",
        "a": "The unit is a defined early-warning signals in the exception queue record and its evidence trail. A completed field or a closed status is not treated as proof that the underlying control worked."
      },
      {
        "q": "How should a team use the method?",
        "a": "Apply it to a bounded population with a declared window, definitions, and reviewer. Keep the result as dated internal evidence, not as a performance ranking or an industry claim."
      }
    ],
    "sources": [
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "AICPA and CIMA",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Financial Crimes Enforcement Network",
        "url": "https://www.fincen.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-measuring-response-time-for-the-payment-run",
    "title": "Measuring response time for the payment run",
    "summary": "A repeatable measurement protocol for the payment run in accounts payable operations, with definitions, sampling, limits, and reporting.",
    "cluster": "accounts payable evidence",
    "publishedAt": "2026-10-25",
    "finding": "This protocol asks how the payment run can be described from the operational record in accounts payable operations.",
    "thumbnail": "/thumbnails/october-25/accountspayablemanager-measuring-response-time-for-the-payment-run.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks how the payment run can be described from the operational record in accounts payable operations. It is a measurement method, not a performance score or a legal conclusion.",
          "The scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.",
          "The method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that the AP manager can review.",
          "Measure the age of the oldest open item for the payment run, not only the average. An average can improve while one case sits unresolved for weeks.",
          "Write the next action as a sentence with an owner and a time. A vague request to review the payment run exception is not a next action; a named person, a specific check, and a deadline is."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one case involving the payment run, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.",
          "Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.",
          "Exclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.",
          "When a reviewer finds a defect, ask whether the template allowed it. If the same field is missed twice, the form or the instruction is part of the cause.",
          "Keep the payment run queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.",
          "Define the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.",
          "If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.",
          "Use a dated note for every owner decision. An approval that exists only in a meeting is difficult to reconstruct and easy to misremember."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.",
          "Record the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.",
          "Keep the payment run source link durable. A screenshot may be useful for a quick review, but the link or record identifier is what lets the next person verify the value."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.",
          "Include adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.",
          "Record the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.",
          "Name the point where the VA must stop and route. A boundary that says use judgment is not a boundary; it is a request for the VA to guess."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.",
          "Separate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.",
          "Keep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.",
          "Check the destination, not only the activity. A payment marked sent, a schedule marked changed, or an access request marked complete should be verified in the system that owns the result."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "The record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.",
          "Small samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.",
          "The cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.",
          "Record the reason for a reopened case involving the payment run. The reason is evidence about the first close and should be used to improve the close rule."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "Set a review date and name the person who will read the result. A report without a review owner is an archive, not a control.",
          "Choose one next action: fix the source, simplify the field, change the queue, or stop the work until the AP manager decides. Record the decision and the next check.",
          "Repeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.",
          "Keep a short decision log for the payment run queue. The log should show the question, the owner, the decision, the date, and what would reopen it."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation.",
          "Test one case end to end before running the full sample. A failed dry run is cheaper than discovering a definition error after collection.",
          "Keep a named backup for the payment run owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.",
          "Do not let a temporary workaround become the permanent process by default. Write the workaround, its owner, and its expiry date, then review it."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields needed for the question. Use named accounts, role-based access, masked identifiers, and an approved storage location.",
          "Log access and set a disposal date. A research file that lives forever is a liability, not an archive.",
          "Do not copy personal data into a chat or a personal drive to save time. If the approved system cannot support the review, narrow the review.",
          "Do not copy a value from a prior record for the payment run because it looks familiar. Reopen the source, confirm the version, and record what changed.",
          "When the payment run source is maintained by another team, name the contact and the expected response time. Escalation without a contact becomes a repeated chase."
        ]
      },
      {
        "heading": "Worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current record for the payment run. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed.",
          "The example is deliberately ordinary. The value of the protocol is that the same evidence standard applies to a routine case, an exception, and a reopened item.",
          "Close the loop with the person who raised the payment run issue. A record that is internally complete but never confirmed by the requester is only half closed.",
          "Use a weekly exception count by reason and age. The pattern is more useful than a single total because it shows whether the problem is volume, training, or a missing rule."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation.",
          "If the source changes but the definitions do not, preserve the earlier result and label the new window. Do not splice two periods into one trend.",
          "Separate the request from the decision. The requester can describe the urgency; only the named owner can approve an exception that changes the outcome of the payment run.",
          "Make the payment run handoff visible in the record. A chat message can start the handoff, but the source, the open question, and the next owner belong with the case."
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together.",
          "Leave the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list.",
          "Put the evidence standard in the task template, not in a separate policy document. The person doing the work should see the required source, owner, and close condition at the point of action.",
          "Record the exact source for the payment run and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does this research measure?",
        "a": "It defines a reproducible method for measuring response time for the payment run within accounts payable operations. It does not report a survey, a universal benchmark, or an audited result."
      },
      {
        "q": "What is the unit of analysis?",
        "a": "The unit is a defined measuring response time for the payment run record and its evidence trail. A completed field or a closed status is not treated as proof that the underlying control worked."
      },
      {
        "q": "How should a team use the method?",
        "a": "Apply it to a bounded population with a declared window, definitions, and reviewer. Keep the result as dated internal evidence, not as a performance ranking or an industry claim."
      }
    ],
    "sources": [
      {
        "label": "Financial Crimes Enforcement Network",
        "url": "https://www.fincen.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "AICPA and CIMA",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-testing-completeness-in-the-duplicate-invoice",
    "title": "Testing completeness in the duplicate invoice",
    "summary": "A repeatable measurement protocol for the duplicate invoice in accounts payable operations, with definitions, sampling, limits, and reporting.",
    "cluster": "accounts payable evidence",
    "publishedAt": "2026-10-25",
    "finding": "This protocol asks how the duplicate invoice can be described from the operational record in accounts payable operations.",
    "thumbnail": "/thumbnails/october-25/accountspayablemanager-testing-completeness-in-the-duplicate-invoice.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks how the duplicate invoice can be described from the operational record in accounts payable operations. It is a measurement method, not a performance score or a legal conclusion.",
          "The scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.",
          "The method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that the AP manager can review.",
          "Write the next action as a sentence with an owner and a time. A vague request to review the duplicate invoice exception is not a next action; a named person, a specific check, and a deadline is."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one case involving the duplicate invoice, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.",
          "Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.",
          "Exclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.",
          "Keep the duplicate invoice queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work."
        ]
      },
      {
        "heading": "Definitions that make the measure reproducible",
        "paragraphs": [
          "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.",
          "Define the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.",
          "If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.",
          "Use a dated note for every owner decision. An approval that exists only in a meeting is difficult to reconstruct and easy to misremember.",
          "When a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed."
        ]
      },
      {
        "heading": "Evidence standard and data dictionary",
        "paragraphs": [
          "Each case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.",
          "Use a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.",
          "Record the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.",
          "Keep the duplicate invoice source link durable. A screenshot may be useful for a quick review, but the link or record identifier is what lets the next person verify the value.",
          "Use a short reason code for every exception on the duplicate invoice. The code should describe the evidence problem, not the person who found it."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Use consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.",
          "Include adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.",
          "Record the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.",
          "Name the point where the VA must stop and route. A boundary that says use judgment is not a boundary; it is a request for the VA to guess.",
          "Review one case involving the duplicate invoice end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.",
          "Separate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.",
          "Keep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.",
          "Check the destination, not only the activity. A payment marked sent, a schedule marked changed, or an access request marked complete should be verified in the system that owns the result.",
          "If the duplicate invoice rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "The record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.",
          "Small samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.",
          "The cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.",
          "Record the reason for a reopened case involving the duplicate invoice. The reason is evidence about the first close and should be used to improve the close rule.",
          "Keep a named backup for the duplicate invoice owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
        ]
      },
      {
        "heading": "Review cadence and next action",
        "paragraphs": [
          "Set a review date and name the person who will read the result. A report without a review owner is an archive, not a control.",
          "Choose one next action: fix the source, simplify the field, change the queue, or stop the work until the AP manager decides. Record the decision and the next check.",
          "Repeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.",
          "Keep a short decision log for the duplicate invoice queue. The log should show the question, the owner, the decision, the date, and what would reopen it.",
          "Do not copy a value from a prior record for the duplicate invoice because it looks familiar. Reopen the source, confirm the version, and record what changed."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation.",
          "Test one case end to end before running the full sample. A failed dry run is cheaper than discovering a definition error after collection.",
          "Do not let a temporary workaround become the permanent process by default. Write the workaround, its owner, and its expiry date, then review it.",
          "Close the loop with the person who raised the duplicate invoice issue. A record that is internally complete but never confirmed by the requester is only half closed."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields needed for the question. Use named accounts, role-based access, masked identifiers, and an approved storage location.",
          "Log access and set a disposal date. A research file that lives forever is a liability, not an archive.",
          "Do not copy personal data into a chat or a personal drive to save time. If the approved system cannot support the review, narrow the review.",
          "When the duplicate invoice source is maintained by another team, name the contact and the expected response time. Escalation without a contact becomes a repeated chase.",
          "Separate the request from the decision. The requester can describe the urgency; only the named owner can approve an exception that changes the outcome of the duplicate invoice."
        ]
      },
      {
        "heading": "Worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current record for the duplicate invoice. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed.",
          "The example is deliberately ordinary. The value of the protocol is that the same evidence standard applies to a routine case, an exception, and a reopened item.",
          "Use a weekly exception count by reason and age. The pattern is more useful than a single total because it shows whether the problem is volume, training, or a missing rule."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation.",
          "If the source changes but the definitions do not, preserve the earlier result and label the new window. Do not splice two periods into one trend.",
          "Make the duplicate invoice handoff visible in the record. A chat message can start the handoff, but the source, the open question, and the next owner belong with the case."
        ]
      },
      {
        "heading": "Reporting package and handoff",
        "paragraphs": [
          "Publish the question, population, window, definitions, case flow, counts, unresolved items, disagreement summary, and limits together.",
          "Leave the protocol, codebook, sample file, and open items in one place. A reviewer who did not run the first pass should be able to repeat the method.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list.",
          "Record the exact source for the duplicate invoice and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
        ]
      }
    ],
    "faq": [
      {
        "q": "What does this research measure?",
        "a": "It defines a reproducible method for testing completeness in the duplicate invoice within accounts payable operations. It does not report a survey, a universal benchmark, or an audited result."
      },
      {
        "q": "What is the unit of analysis?",
        "a": "The unit is a defined testing completeness in the duplicate invoice record and its evidence trail. A completed field or a closed status is not treated as proof that the underlying control worked."
      },
      {
        "q": "How should a team use the method?",
        "a": "Apply it to a bounded population with a declared window, definitions, and reviewer. Keep the result as dated internal evidence, not as a performance ranking or an industry claim."
      }
    ],
    "sources": [
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "AICPA and CIMA",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/"
      },
      {
        "label": "Financial Crimes Enforcement Network",
        "url": "https://www.fincen.gov/"
      }
    ]
  }
];
