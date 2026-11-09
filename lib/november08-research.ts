export const november08ResearchPosts = [
  {
    "slug": "accountspayablemanager-how-many-duplicate-invoice-matches-should-a-monthly-sample-surface",
    "title": "How many duplicate invoice matches should a monthly sample surface?",
    "summary": "A reproducible method for sizing a duplicate-invoice sample and reporting what the matches actually prove about the control.",
    "cluster": "Quality",
    "publishedAt": "2026-11-08",
    "finding": "A duplicate-invoice sample should report the population, the matching rule, and the unresolved candidates, not a single accuracy percentage.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-how-many-duplicate-invoice-matches-should-a-monthly-sample-surface.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the duplicate invoice matching record can show about evidence, timing, and closure at Accounts Payable Manager. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. The method is designed for controllers and finance leaders who need a reproducible review. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "The scope of this duplicate invoice matching protocol is the population named below, not every invoice or vendor in the ledger. Write the start event, the stop event, and the pause rule before collecting data. A count without a denominator is not a measurement, especially when the queue changes size during the day. Accounts Payable Manager records the window and every exclusion so a second reviewer can repeat the sample. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is invoice lines scheduled for payment during the observation window. The primary measure is the share of cases that meet the written definition. Add a count of missing evidence and a median age for open cases. Report each measure with its denominator, observation window, and exclusion count. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "Accounts Payable Manager defines the population before the first case is selected. The population is invoice lines scheduled for payment during the observation window, and every exclusion is listed with a reason. A sample drawn from a convenience queue can make a fragile control look stable. The point is to describe the population that actually exists, not the one the team wishes it had. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure for duplicate invoice matching is the share of duplicate candidates resolved before scheduling. A second measure should capture the count of cases with at least one missing source. A third measure should show the median age of cases still open at the end of the window. The three measures together describe volume, evidence, and delay without hiding one behind another. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "Define completion before the first case. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Accounts Payable Manager records the status field and the evidence separately so the difference remains visible. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases within each stratum. Stratify by risk, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case: a missing source, a conflict, an unavailable owner, or a deadline that forced a decision. Accounts Payable Manager records every access failure instead of replacing it silently. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The main limit is that the duplicate invoice matching record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Accounts Payable Manager states those limits before presenting the result. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "A change in systems, policy, vendor mix, or volume can make the result stale. Record those triggers with the finding. If the definition changes, keep the old and new rules side by side for the transition period. Label which rule applies to each case so the comparison remains honest. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Collection for duplicate invoice matching ends when the sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A reviewer should be able to rerun the extract from the written rule. Accounts Payable Manager stores the extract, the codebook, and the finding together. Accounts Payable Manager applies this rule to duplicate invoice matching before the sample is drawn.",
          "Give the review a named owner and a review date. The report should end with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Accounts Payable Manager then repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and the same population rule. The same duplicate invoice matching rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a duplicate invoice matching review use?",
        "a": "Use one defined population and one observation window: invoice lines scheduled for payment during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the duplicate invoice matching result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures the share of duplicate candidates resolved before scheduling for invoice lines scheduled for payment during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Committee of Sponsoring Organizations of the Treadway Commission",
        "url": "https://www.coso.org/"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-measure-approval-cycle-time-from-invoice-receipt-to-scheduled-payment",
    "title": "Measure approval cycle time from invoice receipt to scheduled payment",
    "summary": "A measurement protocol for approval cycle time that separates waiting on approvers from waiting on missing evidence.",
    "cluster": "Operations",
    "publishedAt": "2026-11-08",
    "finding": "Approval cycle time is only interpretable when waiting time is split into approver delay, evidence gaps, and payment scheduling.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-measure-approval-cycle-time-from-invoice-receipt-to-scheduled-payment.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The scope of this approval cycle time protocol is the population named below, not every invoice or vendor in the ledger. Write the start event, the stop event, and the pause rule before collecting data. A count without a denominator is not a measurement, especially when the queue changes size during the day. Accounts Payable Manager records the window and every exclusion so a second reviewer can repeat the sample. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "The question behind this approval cycle time protocol is narrow on purpose. It asks whether the evidence supports median and upper-quartile days from receipt to scheduling, not whether the team feels busy. A broad question produces a broad answer that cannot be tested. A narrow question can be repeated after the workflow changes, which is what makes it useful. The same approval cycle time rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Accounts Payable Manager defines the population before the first case is selected. The population is invoices received and scheduled during the observation window, and every exclusion is listed with a reason. A sample drawn from a convenience queue can make a fragile control look stable. The point is to describe the population that actually exists, not the one the team wishes it had. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "The unit is one invoice from receipt timestamp to scheduled payment. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. The same approval cycle time rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Accounts Payable Manager records the status field and the evidence separately so the difference remains visible. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately. Collapsing them hides the difference between no evidence and evidence of absence. The data dictionary should name the allowed values before collection begins. The same approval cycle time rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation. If the population is small, report the count and the instability instead of a precise-looking rate. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "The evidence standard for approval cycle time should be written before the sample is selected. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Accounts Payable Manager keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The same approval cycle time rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A change in systems, policy, vendor mix, or volume can make the result stale. Record those triggers with the finding. If the definition changes, keep the old and new rules side by side for the transition period. Label which rule applies to each case so the comparison remains honest. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The same approval cycle time rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Give the review a named owner and a review date. The report should end with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Accounts Payable Manager then repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and the same population rule. Accounts Payable Manager applies this rule to approval cycle time before the sample is drawn.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. The same approval cycle time rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a approval cycle time review use?",
        "a": "Use one defined population and one observation window: invoices received and scheduled during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the approval cycle time result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures median and upper-quartile days from receipt to scheduling for invoices received and scheduled during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "Association for Financial Professionals",
        "url": "https://www.afponline.org/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-a-protocol-for-testing-vendor-statement-variance-thresholds",
    "title": "A protocol for testing vendor statement variance thresholds",
    "summary": "A defined test for deciding when a vendor statement variance needs investigation rather than a routine note.",
    "cluster": "Controls",
    "publishedAt": "2026-11-08",
    "finding": "A variance threshold is defensible only when the tolerance, the matching rule, and the excluded lines are written before the sample is drawn.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-a-protocol-for-testing-vendor-statement-variance-thresholds.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question behind this vendor statement variance protocol is narrow on purpose. It asks whether the evidence supports the share of variances inside the approved tolerance, not whether the team feels busy. A broad question produces a broad answer that cannot be tested. A narrow question can be repeated after the workflow changes, which is what makes it useful. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "This protocol asks what the vendor statement variance record can show about evidence, timing, and closure at Accounts Payable Manager. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. The method is designed for controllers and finance leaders who need a reproducible review. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one statement line compared with the open-item ledger. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "The population is vendor statements received during the observation window. The primary measure is the share of cases that meet the written definition. Add a count of missing evidence and a median age for open cases. Report each measure with its denominator, observation window, and exclusion count. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately. Collapsing them hides the difference between no evidence and evidence of absence. The data dictionary should name the allowed values before collection begins. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "The primary measure for vendor statement variance is the share of variances inside the approved tolerance. A second measure should capture the count of cases with at least one missing source. A third measure should show the median age of cases still open at the end of the window. The three measures together describe volume, evidence, and delay without hiding one behind another. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard for vendor statement variance should be written before the sample is selected. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Accounts Payable Manager keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "Use a random or systematic start rule, then take consecutive cases within each stratum. Stratify by risk, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case: a missing source, a conflict, an unavailable owner, or a deadline that forced a decision. Accounts Payable Manager records every access failure instead of replacing it silently. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "The main limit is that the vendor statement variance record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Accounts Payable Manager states those limits before presenting the result. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. Accounts Payable Manager applies this rule to vendor statement variance before the sample is drawn.",
          "Collection for vendor statement variance ends when the sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A reviewer should be able to rerun the extract from the written rule. Accounts Payable Manager stores the extract, the codebook, and the finding together. The same vendor statement variance rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a vendor statement variance review use?",
        "a": "Use one defined population and one observation window: vendor statements received during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the vendor statement variance result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures the share of variances inside the approved tolerance for vendor statements received during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Committee of Sponsoring Organizations of the Treadway Commission",
        "url": "https://www.coso.org/"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-rebuild-a-credit-memo-trail-from-the-erp-audit-log",
    "title": "Rebuild a credit memo trail from the ERP audit log",
    "summary": "A protocol for reconstructing who created, changed, applied, or reversed a credit memo, and what the audit log can honestly prove.",
    "cluster": "Evidence",
    "publishedAt": "2026-11-08",
    "finding": "The audit log can show sequence and identity, but it cannot prove intent; the review must state that limit beside the reconstruction.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-rebuild-a-credit-memo-trail-from-the-erp-audit-log.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the credit memo audit trail record can show about evidence, timing, and closure at Accounts Payable Manager. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. The method is designed for controllers and finance leaders who need a reproducible review. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "The scope of this credit memo audit trail protocol is the population named below, not every invoice or vendor in the ledger. Write the start event, the stop event, and the pause rule before collecting data. A count without a denominator is not a measurement, especially when the queue changes size during the day. Accounts Payable Manager records the window and every exclusion so a second reviewer can repeat the sample. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is credit memos created or applied during the observation window. The primary measure is the share of cases that meet the written definition. Add a count of missing evidence and a median age for open cases. Report each measure with its denominator, observation window, and exclusion count. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "Accounts Payable Manager defines the population before the first case is selected. The population is credit memos created or applied during the observation window, and every exclusion is listed with a reason. A sample drawn from a convenience queue can make a fragile control look stable. The point is to describe the population that actually exists, not the one the team wishes it had. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure for credit memo audit trail is the share of credit memos with a complete creator, approver, and application record. A second measure should capture the count of cases with at least one missing source. A third measure should show the median age of cases still open at the end of the window. The three measures together describe volume, evidence, and delay without hiding one behind another. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "Define completion before the first case. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Accounts Payable Manager records the status field and the evidence separately so the difference remains visible. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases within each stratum. Stratify by risk, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case: a missing source, a conflict, an unavailable owner, or a deadline that forced a decision. Accounts Payable Manager records every access failure instead of replacing it silently. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The main limit is that the credit memo audit trail record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Accounts Payable Manager states those limits before presenting the result. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "A change in systems, policy, vendor mix, or volume can make the result stale. Record those triggers with the finding. If the definition changes, keep the old and new rules side by side for the transition period. Label which rule applies to each case so the comparison remains honest. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Collection for credit memo audit trail ends when the sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A reviewer should be able to rerun the extract from the written rule. Accounts Payable Manager stores the extract, the codebook, and the finding together. Accounts Payable Manager applies this rule to credit memo audit trail before the sample is drawn.",
          "Give the review a named owner and a review date. The report should end with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Accounts Payable Manager then repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and the same population rule. The same credit memo audit trail rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a credit memo audit trail review use?",
        "a": "Use one defined population and one observation window: credit memos created or applied during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the credit memo audit trail result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures the share of credit memos with a complete creator, approver, and application record for credit memos created or applied during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-9"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-measure-first-pass-match-rate-when-receipts-arrive-in-partial-shipments",
    "title": "Measure first-pass match rate when receipts arrive in partial shipments",
    "summary": "A measurement design for first-pass match rate that keeps partial receipts, backorders, and tolerance rules visible.",
    "cluster": "Quality",
    "publishedAt": "2026-11-08",
    "finding": "Partial receipts change the denominator, so the match rate must report the receipt state and the tolerance rule used for each line.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-measure-first-pass-match-rate-when-receipts-arrive-in-partial-shipments.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The scope of this first-pass match rate protocol is the population named below, not every invoice or vendor in the ledger. Write the start event, the stop event, and the pause rule before collecting data. A count without a denominator is not a measurement, especially when the queue changes size during the day. Accounts Payable Manager records the window and every exclusion so a second reviewer can repeat the sample. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "The question behind this first-pass match rate protocol is narrow on purpose. It asks whether the evidence supports the share of lines matched without manual intervention, not whether the team feels busy. A broad question produces a broad answer that cannot be tested. A narrow question can be repeated after the workflow changes, which is what makes it useful. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Accounts Payable Manager defines the population before the first case is selected. The population is purchase order lines with receipts during the observation window, and every exclusion is listed with a reason. A sample drawn from a convenience queue can make a fragile control look stable. The point is to describe the population that actually exists, not the one the team wishes it had. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "The unit is one purchase order line and its receipt history. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define completion before the first case. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Accounts Payable Manager records the status field and the evidence separately so the difference remains visible. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately. Collapsing them hides the difference between no evidence and evidence of absence. The data dictionary should name the allowed values before collection begins. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation. If the population is small, report the count and the instability instead of a precise-looking rate. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "The evidence standard for first-pass match rate should be written before the sample is selected. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Accounts Payable Manager keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A change in systems, policy, vendor mix, or volume can make the result stale. Record those triggers with the finding. If the definition changes, keep the old and new rules side by side for the transition period. Label which rule applies to each case so the comparison remains honest. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Give the review a named owner and a review date. The report should end with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Accounts Payable Manager then repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and the same population rule. Accounts Payable Manager applies this rule to first-pass match rate before the sample is drawn.",
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. The same first-pass match rate rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a first-pass match rate review use?",
        "a": "Use one defined population and one observation window: purchase order lines with receipts during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the first-pass match rate result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures the share of lines matched without manual intervention for purchase order lines with receipts during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-test-whether-ap-exception-aging-predicts-late-payment-fees",
    "title": "Test whether AP exception aging predicts late payment fees",
    "summary": "A backtest design that asks whether exception age at close predicts late fees, without confusing correlation with cause.",
    "cluster": "Operations",
    "publishedAt": "2026-11-08",
    "finding": "Exception age can be a useful warning signal, but a fee prediction also needs the payment term, the approval path, and the vendor's tolerance.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-test-whether-ap-exception-aging-predicts-late-payment-fees.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question behind this exception aging and late fees protocol is narrow on purpose. It asks whether the evidence supports late-fee incidence by exception age bucket, not whether the team feels busy. A broad question produces a broad answer that cannot be tested. A narrow question can be repeated after the workflow changes, which is what makes it useful. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "This protocol asks what the exception aging and late fees record can show about evidence, timing, and closure at Accounts Payable Manager. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. The method is designed for controllers and finance leaders who need a reproducible review. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The unit is one invoice that entered an exception queue before payment. Test the definition on a case that crosses owners, a case that is still open, and a case that was reopened. Apply the same rule to every case and keep the rule beside the extract. A definition that changes halfway through the window destroys comparability. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "The population is exception cases closed during the observation window. The primary measure is the share of cases that meet the written definition. Add a count of missing evidence and a median age for open cases. Report each measure with its denominator, observation window, and exclusion count. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each case needs a source, an observation time, the field it supports, and the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately. Collapsing them hides the difference between no evidence and evidence of absence. The data dictionary should name the allowed values before collection begins. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "The primary measure for exception aging and late fees is late-fee incidence by exception age bucket. A second measure should capture the count of cases with at least one missing source. A third measure should show the median age of cases still open at the end of the window. The three measures together describe volume, evidence, and delay without hiding one behind another. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard for exception aging and late fees should be written before the sample is selected. A reviewer needs to know which source counts, what date is attached, and how a missing field is treated. Accounts Payable Manager keeps a short codebook beside the extract so the rule does not live in one person's memory. The codebook is part of the method, not an afterthought. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "Use a random or systematic start rule, then take consecutive cases within each stratum. Stratify by risk, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case: a missing source, a conflict, an unavailable owner, or a deadline that forced a decision. Accounts Payable Manager records every access failure instead of replacing it silently. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Show the distribution, not only the mean. A median close time can hide a long tail of cases that nobody reviews. Report the open-case count and the oldest case age by owner. That view shows where delay accumulates and which queue needs a process change. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "The main limit is that the exception aging and late fees record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Accounts Payable Manager states those limits before presenting the result. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Report what moved, what did not, and what remains unknown. That final sentence is the honest close of a measurement protocol. It is more useful than a precise-looking rate built on an unclear denominator. The goal is a reviewable decision, not a perfect number. Accounts Payable Manager applies this rule to exception aging and late fees before the sample is drawn.",
          "Collection for exception aging and late fees ends when the sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A reviewer should be able to rerun the extract from the written rule. Accounts Payable Manager stores the extract, the codebook, and the finding together. The same exception aging and late fees rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a exception aging and late fees review use?",
        "a": "Use one defined population and one observation window: exception cases closed during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the exception aging and late fees result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures late-fee incidence by exception age bucket for exception cases closed during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "Association for Financial Professionals",
        "url": "https://www.afponline.org/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      }
    ]
  },
  {
    "slug": "accountspayablemanager-a-reproducible-method-for-sampling-1099-classification-changes",
    "title": "A reproducible method for sampling 1099 classification changes",
    "summary": "A sampling method for vendor tax classification changes that preserves the before-and-after record and the correction reason.",
    "cluster": "Controls",
    "publishedAt": "2026-11-08",
    "finding": "A classification-change sample is only reproducible when the prior value, the new value, the source, and the reviewer are kept together.",
    "thumbnail": "/thumbnails/november-08/accountspayablemanager-a-reproducible-method-for-sampling-1099-classification-changes.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks what the 1099 classification changes record can show about evidence, timing, and closure at Accounts Payable Manager. It is a local measurement method, not an industry benchmark or an audit opinion. The result describes one defined population during one observation window. The method is designed for controllers and finance leaders who need a reproducible review. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "The scope of this 1099 classification changes protocol is the population named below, not every invoice or vendor in the ledger. Write the start event, the stop event, and the pause rule before collecting data. A count without a denominator is not a measurement, especially when the queue changes size during the day. Accounts Payable Manager records the window and every exclusion so a second reviewer can repeat the sample. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population is vendor records changed during the observation window. The primary measure is the share of cases that meet the written definition. Add a count of missing evidence and a median age for open cases. Report each measure with its denominator, observation window, and exclusion count. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "Accounts Payable Manager defines the population before the first case is selected. The population is vendor records changed during the observation window, and every exclusion is listed with a reason. A sample drawn from a convenience queue can make a fragile control look stable. The point is to describe the population that actually exists, not the one the team wishes it had. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure for 1099 classification changes is the share of changes supported by a signed source and a reviewer. A second measure should capture the count of cases with at least one missing source. A third measure should show the median age of cases still open at the end of the window. The three measures together describe volume, evidence, and delay without hiding one behind another. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "Define completion before the first case. For this protocol, completion means the record supports the measure with a dated source and a named reviewer. A case that fails the definition stays open even when a status field says closed. Accounts Payable Manager records the status field and the evidence separately so the difference remains visible. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Use a random or systematic start rule, then take consecutive cases within each stratum. Stratify by risk, owner, and channel so the sample is not dominated by the easiest queue. Include at least one adverse case: a missing source, a conflict, an unavailable owner, or a deadline that forced a decision. Accounts Payable Manager records every access failure instead of replacing it silently. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "Sample across the full observation window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation. If the population is small, report the count and the instability instead of a precise-looking rate. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The main limit is that the 1099 classification changes record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary. It also cannot establish whether a policy was followed in cases that left no trace. Accounts Payable Manager states those limits before presenting the result. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "A change in systems, policy, vendor mix, or volume can make the result stale. Record those triggers with the finding. If the definition changes, keep the old and new rules side by side for the transition period. Label which rule applies to each case so the comparison remains honest. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      },
      {
        "heading": "Limits and honest reporting",
        "paragraphs": [
          "Collection for 1099 classification changes ends when the sample is complete and the codebook is attached. Do not add cases after the result is known, and do not remove a difficult case to make the rate cleaner. A reviewer should be able to rerun the extract from the written rule. Accounts Payable Manager stores the extract, the codebook, and the finding together. Accounts Payable Manager applies this rule to 1099 classification changes before the sample is drawn.",
          "Give the review a named owner and a review date. The report should end with one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Accounts Payable Manager then repeats the protocol after the change and compares the same definitions. The next sample uses the same codebook and the same population rule. The same 1099 classification changes rule is checked again after the workflow changes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What population should a 1099 classification changes review use?",
        "a": "Use one defined population and one observation window: vendor records changed during the observation window. Keep the exclusion list beside the extract and repeat the same rule after the workflow changes."
      },
      {
        "q": "What can the 1099 classification changes result honestly claim?",
        "a": "It can describe the evidence and timing of the sampled cases. It cannot prove intent, a universal benchmark, or compliance beyond the cases that left a trace."
      },
      {
        "q": "Who should own the review?",
        "a": "A named controller or finance owner should approve the definitions and the final finding. The specialist can collect and organize the evidence, but the interpretation and the next action stay with the accountable owner."
      }
    ],
    "methodology": "This protocol measures the share of changes supported by a signed source and a reviewer for vendor records changed during the observation window. It reports the denominator, the observation window, the missing-evidence count, and the limits of the audit log. It is a local review method, not an audit opinion or an industry benchmark.",
    "sources": [
      {
        "label": "Internal Revenue Service",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-9"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];
