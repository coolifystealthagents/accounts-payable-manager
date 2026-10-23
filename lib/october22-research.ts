import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "invoice-exception-aging-classification-method",
    "title": "A Reproducible Method for Classifying Invoice Exception Aging",
    "summary": "A research method for measuring how long invoice exceptions remain open, with declared clocks, pause rules, reason codes, censoring, and evidence limitations.",
    "cluster": "Accounts payable evidence",
    "publishedAt": "2026-10-22",
    "finding": "Invoice exception aging is only interpretable when the population, clock start, pause rules, reason taxonomy, and censoring treatment are declared before the results are reviewed.",
    "thumbnail": "/thumbnails/october-22/invoice-exception-aging-classification-method.webp",
    "methodology": "This brief defines an original operational measurement method. It does not report a survey, a universal benchmark, or an audited result. Public control and recordkeeping guidance was reviewed for principles of complete documentation, defined responsibility, and traceable correction. Any local application should be tested on a bounded population before it is used for management decisions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks a narrow question: can an accounts payable team measure exception aging in a way that another reviewer can reproduce from retained records? The unit of analysis is an invoice exception record, not an invoice, a vendor, or an employee. An exception exists when a payable cannot follow the approved path because information, evidence, authority, or a decision is missing.",
          "The scope excludes payment cycle time, vendor performance scoring, and individual productivity. Those questions require different populations and different evidence. Mixing them into one aging measure produces a number that is difficult to interpret and easy to misuse. The method below is designed for control review, not for ranking people or vendors."
        ]
      },
      {
        "heading": "Define the population and the clock",
        "paragraphs": [
          "Start with a fixed export of exception records for a declared period. Record the query date, source system, filters, exclusions, and count. Decide whether the population includes only open items, only closed items, or both. If closed items are included, state the closure definition and whether reopened records are counted once or as separate episodes.",
          "The clock should start at a defined event, such as the first complete receipt of the invoice, the first failed match, or the placement of a hold. Record the time zone and the precision of the timestamp. A clock that starts at different events for different teams cannot support comparison. If the start event changed during the period, split the population at the change date."
        ]
      },
      {
        "heading": "Build a reason taxonomy",
        "paragraphs": [
          "Aging without a reason is just a queue. Build a short taxonomy that distinguishes missing source, amount mismatch, quantity mismatch, vendor master question, approval gap, tax document issue, duplicate suspicion, dispute, and system outage. Add a category for items that were misclassified at intake, because those records distort every downstream measure.",
          "Each reason should have a definition, an example, and an owner. Test the taxonomy on a small sample and measure disagreement between reviewers. If two reviewers classify the same record differently, the definition is not yet usable. Revise the examples before expanding the sample. The goal is consistency, not an exhaustive list of every possible problem."
        ]
      },
      {
        "heading": "Separate waiting from work",
        "paragraphs": [
          "An exception can be open because the team is working on it, because the team is waiting for a vendor, because an approver is unavailable, or because no one owns the next step. These states have different management implications. Record the current state and the date it began, not only the original open date.",
          "Define pause rules in advance. If the clock pauses while waiting for a vendor, record the pause start, the request date, and the response date. If the clock does not pause, state that choice. A measure that silently pauses for some reasons and not others will make a slow vendor look fast and a fast team look slow."
        ]
      },
      {
        "heading": "Handle censoring and missing evidence",
        "paragraphs": [
          "Some exceptions will still be open at the end of the observation window. They are censored observations, not missing data. Report them separately and state how they were treated. Excluding them understates the age of unresolved work, while treating them as if they closed at the window boundary overstates completion.",
          "Missing timestamps, reason codes, or ownership records should be reported as missing rather than inferred. If the team reconstructs a date from an email, record the reconstruction method and the source. A reconstructed record can be useful, but it should not be presented with the same confidence as a system timestamp."
        ]
      },
      {
        "heading": "Analyze patterns without causal overreach",
        "paragraphs": [
          "Describe the distribution of open days by reason, owner group, vendor, and workflow state. Look for clusters and long tails rather than a single average. A median can hide a small set of records that remain open for months, while an average can be dominated by a few outliers. Report counts, denominators, and the treatment of censored records.",
          "An association between a reason code and long aging does not prove that the reason caused the delay. The record may be missing a field that would explain both. Use the pattern to generate a review question, then inspect a sample of records and the surrounding workflow. Causal claims require a stronger design than an operational queue export."
        ]
      },
      {
        "heading": "Limitations and practical use",
        "paragraphs": [
          "The method depends on the quality of the source system and the consistency of intake. A team that changes its reason codes mid-period, merges records, or closes items without evidence will produce a measure that reflects those practices. The measure is a description of the retained record, not a direct observation of the work.",
          "Use the result to decide where to inspect, not to declare a universal service level. A local pilot can test whether the taxonomy is understood, whether the clock is applied consistently, and whether the review leads to a specific process change. Retain the query, definitions, sample, and findings so the next review can reproduce or challenge the result."
        ]
      }
    ],
    "faq": [
      { "q": "Does this method produce an industry benchmark?", "a": "No. It produces a local description of a declared population. Comparisons require matching definitions, populations, and observation windows." },
      { "q": "Should weekends and holidays be excluded from aging?", "a": "That is a policy choice. State it clearly and apply it consistently. The important point is that the rule is visible and reproducible." },
      { "q": "How large should the sample be?", "a": "The sample should be large enough to test the taxonomy and small enough to review against source evidence. The method and coverage should be documented." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
    ]
  },
  {
    "slug": "duplicate-payment-detection-key-design",
    "title": "Duplicate Payment Detection: Matching Keys and False Positive Review",
    "summary": "An analytical framework for designing duplicate payment tests, evaluating matching keys, reviewing false positives, and documenting the limits of detection.",
    "cluster": "Accounts payable evidence",
    "publishedAt": "2026-10-22",
    "finding": "A duplicate payment test is a classification system, not a truth machine. Its usefulness depends on declared matching keys, threshold choices, false positive review, and a record of what the test could not see.",
    "thumbnail": "/thumbnails/october-22/duplicate-payment-detection-key-design.webp",
    "methodology": "This brief describes an original evaluation framework for local duplicate payment testing. It does not report a measured duplicate rate, a vendor benchmark, or an audit finding. The framework draws on public internal control and identity matching principles and should be validated against the organization's own payment records and approval rules.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks how a payables team can evaluate a duplicate payment test without overstating what the test proves. The unit of analysis is a candidate pair or group of payment records. The question is whether the records represent the same obligation, a legitimate recurring obligation, or an unrelated payment that happens to share some attributes.",
          "The scope is detection design and review evidence. It does not cover recovery, vendor penalties, or legal conclusions. A duplicate candidate is not a duplicate payment until a reviewer has examined the invoice, the receipt, the approval, the payment, and the vendor's account. The distinction matters because an aggressive test can create a large false positive queue that consumes the capacity needed for real review."
        ]
      },
      {
        "heading": "Choose matching keys deliberately",
        "paragraphs": [
          "A matching key is a combination of fields used to propose a candidate. Common keys include vendor identifier, invoice number, invoice amount, invoice date, purchase order, and payment reference. Each key has a different error profile. Invoice number alone may fail when vendors reuse numbers or when the number is entered inconsistently. Amount alone will flag legitimate recurring charges.",
          "Build a key matrix that states which fields are required, which are optional, and how normalization is handled. Decide how to treat punctuation, leading zeros, currency, tax, freight, and credits. Record the normalization rules so another analyst can reproduce the candidate set. A test that depends on undocumented cleanup is difficult to defend and difficult to improve."
        ]
      },
      {
        "heading": "Evaluate thresholds and tradeoffs",
        "paragraphs": [
          "A deterministic key produces a set of exact matches. A fuzzy key produces candidates based on similarity. Fuzzy matching requires a threshold, and the threshold changes the balance between missed duplicates and false positives. There is no universally correct threshold because the cost of review and the cost of a missed payment differ by organization and vendor.",
          "Evaluate the threshold on a labeled sample. Review a set of known duplicates and a set of known legitimate payments, then measure how the test classifies them. Report the sample construction and the reviewer agreement. Do not present the result as a universal accuracy rate. The useful question is whether the test performs well enough for the specific review capacity and risk tolerance."
        ]
      },
      {
        "heading": "Review false positives as evidence",
        "paragraphs": [
          "A false positive is not wasted work if it reveals why the test fired. Record the reason: recurring invoice, split shipment, credit and rebill, corrected invoice, installment payment, or shared invoice number. These reasons can improve the key design and the vendor master. A queue that only records cleared is missing the information needed to reduce future noise.",
          "Review a sample of false positives with the same evidence standard as true positives. Confirm that the payment was legitimate, the invoice was not a duplicate, and the approval was valid. If the reviewer cannot explain why the candidate is safe, the item should remain open rather than being cleared by assertion."
        ]
      },
      {
        "heading": "Govern the test and its changes",
        "paragraphs": [
          "Duplicate detection is a control that changes over time. Record the test version, the key definition, the threshold, the data extraction date, and the reviewer. When the key changes, retain the prior version and the reason for the change. A sudden drop in candidates may reflect a better key or a broken query, and the version history helps distinguish the two.",
          "Assign ownership for the test, the review queue, and the disposition. Separate the person who tunes the test from the person who approves a payment release where practical. The goal is not to eliminate all duplicates. It is to make the detection and review process accountable and reproducible."
        ]
      },
      {
        "heading": "Measure detection without claiming completeness",
        "paragraphs": [
          "Report candidate counts, reviewed counts, confirmed duplicates, false positives by reason, and unresolved items. State the population and the observation window. If the team cannot review every candidate, say so and describe the sampling rule. A partial review can still be useful if its limits are visible.",
          "No test can prove that a population contains no duplicates. It can only show that the defined keys did not surface a candidate, or that the reviewed sample did not contain one. That is a narrower and more honest claim. Use it to guide improvement, not to certify the absence of error."
        ]
      },
      {
        "heading": "Limitations and practical use",
        "paragraphs": [
          "The framework depends on data quality and on the reviewer's access to source documents. Vendors with poor invoice numbering, multi-entity structures, or frequent credits will be harder to test. A test that works for one vendor population may not transfer to another without recalibration.",
          "Start with a bounded population and a small labeled sample. Document the key, threshold, review reasons, and unresolved items. Use the findings to improve the test and the upstream invoice intake. The value is in a repeatable review that learns, not in a single count of suspected duplicates."
        ]
      }
    ],
    "faq": [
      { "q": "Is an exact invoice number match enough?", "a": "Not always. Vendors may reuse numbers, and entries may be inconsistent. Use a key matrix and review the evidence for each candidate." },
      { "q": "How should fuzzy matching thresholds be chosen?", "a": "Test the threshold on a labeled sample and consider review capacity and risk. There is no universal threshold." },
      { "q": "Can a cleared candidate be removed from the record?", "a": "Retain the disposition and the reason. The cleared record is evidence of the review and helps improve the test." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
    ]
  },
  {
    "slug": "vendor-master-change-evidence-audit",
    "title": "Auditing Vendor Master Change Evidence",
    "summary": "A sampling and evidence framework for reviewing vendor master changes, approvals, independent verification, and the limits of a completeness audit.",
    "cluster": "Vendor records",
    "publishedAt": "2026-10-22",
    "finding": "A vendor master change audit is most useful when it tests the evidence behind each change, not only whether a change was approved, and when it reports missing records instead of excluding them.",
    "thumbnail": "/thumbnails/october-22/vendor-master-change-evidence-audit.webp",
    "methodology": "This brief presents an original audit design for local use. It does not report an audited population or a compliance conclusion. Public internal control, identity, and recordkeeping guidance informs the evidence dimensions. The design should be adapted to the organization's vendor master system, delegation policy, and risk assessment.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks whether a vendor master change record contains enough evidence for an independent reviewer to understand what changed, who requested it, who approved it, and how the change was verified. The unit of analysis is a change event, not a vendor. A vendor may have several changes during the period, and each event should be reviewed on its own.",
          "The scope includes changes to legal name, address, contact details, tax identifier, bank account, payment terms, and status. It excludes invoice-level exceptions and payment approvals, although the two areas interact. A bank change that is properly approved can still be part of a fraudulent payment attempt, so the audit should look for evidence of independent verification rather than treating approval as sufficient."
        ]
      },
      {
        "heading": "Define the population and sampling frame",
        "paragraphs": [
          "Export the vendor master change log for a declared period. Record the query date, system, filters, and count. Decide whether the population includes all changes or only a subset, such as bank and tax identifier changes. If a subset is used, explain why and do not describe the result as covering the full population.",
          "Stratify the sample by change type, risk tier, request channel, and approver. Include changes that were later reversed, because a reversal may reveal a control failure or a corrected error. Include changes with missing evidence rather than excluding them. The sample should be large enough to test the evidence dimensions and small enough to review against source documents."
        ]
      },
      {
        "heading": "Test evidence dimensions",
        "paragraphs": [
          "For each change, test six dimensions: request identity, business rationale, supporting document, independent verification, approval authority, and post-change confirmation. Request identity asks who asked for the change and through which channel. Business rationale asks why the change is needed. Supporting document asks for the source that proves the new detail.",
          "Independent verification is the dimension most often missing. A call to the vendor using a known number, a confirmation through an established portal, or a second approver can provide it. Record the method, the person, the date, and the result. Approval authority asks whether the approver was allowed to approve that change type and value. Post-change confirmation asks whether the new detail was actually applied and communicated."
        ]
      },
      {
        "heading": "Evaluate missing and conflicting evidence",
        "paragraphs": [
          "A missing document is a finding, not a reason to drop the record. Report the missing dimension, the owner who should have provided it, and whether the change remained active. A conflicting record, such as an approval dated before the request, is also a finding. It may indicate a backdated approval, a system timestamp issue, or a mislabeled event.",
          "Use a consistent rating for each dimension: present and sufficient, present but incomplete, missing, or conflicting. Do not collapse these into a single pass or fail without explaining the basis. The ratings should be reproducible by another reviewer using the same source records."
        ]
      },
      {
        "heading": "Protect independence",
        "paragraphs": [
          "The reviewer should not audit changes they requested or approved. If independence is not possible, disclose the conflict and have a second reviewer examine the sample. The audit record should name the reviewer and any conflict. This is especially important for bank changes, where the person who requests the change may also have operational access.",
          "Separate the audit from the remediation. The auditor can identify the gap and recommend a control, but the process owner decides how to fix it. Combining the two roles can pressure the reviewer to minimize findings or accept an incomplete fix."
        ]
      },
      {
        "heading": "Analyze patterns and limitations",
        "paragraphs": [
          "Report findings by change type, channel, approver group, and evidence dimension. Look for patterns such as a channel with no independent verification or an approver group with incomplete documentation. Do not infer fraud from a pattern. The pattern identifies where to inspect further.",
          "The audit cannot prove that all changes are valid. It can show whether the sampled changes have the required evidence and whether the control is operating as designed. State the sampling method, the confidence limits if used, the exclusions, and the records that could not be reviewed. A completeness audit is a structured look at evidence, not a guarantee."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Use the findings to improve the change request form, the verification script, and the approver matrix. If the same dimension is missing repeatedly, the form or the workflow is probably the cause. A training reminder will not fix a process that does not capture the evidence in the first place.",
          "Retain the sample, the ratings, and the remediation plan. Re-test the same dimensions after the fix. The second review should show whether the evidence improved, not only whether the form changed. That comparison is the useful output of the audit."
        ]
      }
    ],
    "faq": [
      { "q": "Does an approval prove a vendor bank change is safe?", "a": "No. Approval is one dimension. Independent verification through a known channel is also needed, especially for bank changes." },
      { "q": "Should missing records be excluded from the sample?", "a": "No. Report them as missing evidence and keep them in the population so the result reflects the actual record quality." },
      { "q": "Can the same person request and review a change?", "a": "That creates an independence conflict. If it is unavoidable, disclose it and have a second reviewer examine the sample." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "label": "IRS Form W-9", "url": "https://www.irs.gov/forms-pubs/about-form-w-9" }
    ]
  },
  {
    "slug": "approval-delegation-coverage-test",
    "title": "Testing Approval Delegation Coverage and Backup Authority",
    "summary": "A scenario-based method for examining whether delegated approvals, out-of-office coverage, and backup authority are documented, limited, and reviewable.",
    "cluster": "Approval workflow",
    "publishedAt": "2026-10-22",
    "finding": "Delegation coverage is a control only when the authority, scope, time limit, evidence, and fallback are documented before the approver is unavailable.",
    "thumbnail": "/thumbnails/october-22/approval-delegation-coverage-test.webp",
    "methodology": "This brief defines an original scenario-based review method. It does not report a measured failure rate or a legal conclusion. Public internal control and identity guidance informs the design. Local application should use the organization's delegation policy, approval matrix, and system records.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks whether an accounts payable approval process can show who was authorized to approve a payment when the normal approver was unavailable. The unit of analysis is an approval event during a declared period, including events handled by a delegate, a backup, or an escalation path.",
          "The scope includes invoice approvals, payment releases, and vendor master changes where the same authority model applies. It excludes HR delegation, legal signature authority, and board-level approvals unless they directly affect payables. The method focuses on evidence and design, not on whether a particular payment was strategically wise."
        ]
      },
      {
        "heading": "Define authority before testing",
        "paragraphs": [
          "Collect the approval matrix, delegation policy, role descriptions, and system permission list. For each approval type, identify the primary approver, the allowed delegate, the value or risk limit, the effective dates, and the evidence required. If the documents conflict, record the conflict and resolve it with the policy owner before sampling.",
          "Authority is not the same as system access. A person may have permission to click approve without the delegated authority to do so. The test should compare the system action with the documented authority. That comparison is the core of the review."
        ]
      },
      {
        "heading": "Build the test population",
        "paragraphs": [
          "Export approval events for the period, including the approver, the delegate if recorded, the invoice or payment, the amount, the date, and the approval type. Include events that were reversed, rejected, or escalated. Those events often reveal how the process behaves under pressure.",
          "Identify periods when the primary approver was unavailable, such as scheduled leave, travel, or a system outage. If the system does not record availability, use the delegation record and the approval timestamps to infer coverage. State the inference method and its limits. Do not treat an inference as a confirmed fact."
        ]
      },
      {
        "heading": "Run scenario tests",
        "paragraphs": [
          "Test four scenarios: a planned absence with a documented delegate, an unplanned absence with a backup, a value above the delegate's limit, and a conflict of interest where the delegate is also the requester. For each scenario, trace the approval to the policy, the system record, and the supporting evidence.",
          "A documented delegate should have a defined scope and end date. An unplanned absence may use an escalation path rather than a pre-approved delegate. A value above the limit should route to a higher authority, not be split into smaller approvals. A conflict of interest should require an independent approver. Record whether the scenario was covered and what evidence supports the conclusion."
        ]
      },
      {
        "heading": "Review the evidence trail",
        "paragraphs": [
          "For each sampled event, retain the approval record, the delegation reference, the invoice or payment record, and any communication that explains the coverage. A comment that says approved by backup is not enough. The record should identify the backup, the authority basis, and the date.",
          "Check that the delegate did not exceed the limit, that the approval was within the effective dates, and that the system permission matched the documented role. If the delegate approved after the delegation expired, the event is a finding even if the payment was otherwise valid."
        ]
      },
      {
        "heading": "Analyze coverage gaps",
        "paragraphs": [
          "Report findings by approval type, department, delegate, and scenario. Look for patterns such as a backup who routinely approves above the limit or a delegation that is renewed without review. These patterns may indicate a design problem rather than an individual error.",
          "Do not infer intent from a gap. The useful question is whether the process made the correct path clear and whether the evidence was available. A missing delegation record may be an administrative omission, a system limitation, or a deliberate workaround. Inspect before concluding."
        ]
      },
      {
        "heading": "Limitations and practical use",
        "paragraphs": [
          "The method depends on the completeness of the approval log and the accuracy of the delegation records. If the organization uses email approvals, the evidence may be scattered across mailboxes. If the system overwrites the approver field, the history may be lost. State these limits rather than presenting the sample as a complete picture.",
          "Use the findings to improve the delegation template, the approval matrix, and the system configuration. Re-test after the change. The goal is not to eliminate every exception. It is to make coverage deliberate, limited, and visible before a payment needs to move."
        ]
      }
    ],
    "faq": [
      { "q": "Is a system permission the same as delegated authority?", "a": "No. Permission is technical access. Delegated authority comes from the organization's policy and should be documented separately." },
      { "q": "Can an approver delegate to themselves?", "a": "That would not provide independent review. The policy should require a different authorized person." },
      { "q": "How should an unplanned absence be handled?", "a": "Follow the approved escalation path and record the authority basis. Do not invent a delegate after the fact." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" }
    ]
  },
  {
    "slug": "early-payment-discount-decision-analysis",
    "title": "Analyzing Early Payment Discount Decisions",
    "summary": "A decision-record framework for evaluating vendor discount terms, cash tradeoffs, approvals, forfeitures, and the limits of capture-rate analysis.",
    "cluster": "Approval workflow",
    "publishedAt": "2026-10-22",
    "finding": "Discount capture analysis is meaningful only when the terms, payment date, approval, cash context, and forfeiture reason are recorded together and compared with the actual payment outcome.",
    "thumbnail": "/thumbnails/october-22/early-payment-discount-decision-analysis.webp",
    "methodology": "This brief defines an original decision-analysis framework. It does not report a discount capture rate, a cost of capital, or an investment recommendation. Public interest-rate and internal control references provide context. Local application should use the organization's approved cash policy, vendor terms, and accounting review.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks how a payables team can evaluate whether an early payment discount decision was made deliberately and documented well enough to review later. The unit of analysis is a discount opportunity, defined by an invoice, a set of terms, and a payment window.",
          "The scope includes vendor terms that offer a reduction for payment before the net due date. It excludes dynamic discounting platforms, supply-chain finance arrangements, and investment decisions outside payables. The method does not assume that taking a discount is always beneficial. It tests whether the decision and its tradeoffs are visible."
        ]
      },
      {
        "heading": "Define the terms and the population",
        "paragraphs": [
          "For each opportunity, record the vendor, invoice, invoice amount, discount percentage, discount period, net due date, and the source of the terms. State whether the discount applies to the full invoice or a subset, and whether tax, freight, or credits are included. A calculation that ignores those details may not match the vendor's expectation.",
          "Build the population from invoices that were eligible during the period, not only invoices where a discount was taken. A capture-rate measure that excludes forfeited opportunities answers a different question. Include invoices that were paid late, disputed, or placed on hold so the reasons for forfeiture are visible."
        ]
      },
      {
        "heading": "Record the decision and its context",
        "paragraphs": [
          "The decision record should include the discount value, the payment date required, the proposed payment date, the approver, the approval date, and the cash or liquidity context considered. If the organization uses a cash forecast, reference the forecast version. If the decision depended on a temporary condition, record that condition.",
          "A recommendation should state its assumptions. For example, a proposal might assume that the invoice is accurate and that no credit is pending. If those assumptions are wrong, the decision should be revisited. The record should distinguish a recommendation from an approval and an approval from an actual payment."
        ]
      },
      {
        "heading": "Evaluate the cash tradeoff",
        "paragraphs": [
          "An early payment uses cash earlier than the net due date. The relevant comparison is not only the discount percentage but the organization's cost of short-term funds, the availability of cash, and the effect on other obligations. Public interest-rate references can provide context, but the organization's own borrowing and liquidity terms are the relevant inputs.",
          "Do not present a discount as risk-free. The vendor may later dispute the invoice, the discount may be conditional, or the payment may not be applied correctly. The decision record should note those risks and the approval that accepts them. A high discount value does not by itself justify accelerating a payment."
        ]
      },
      {
        "heading": "Measure outcomes and forfeitures",
        "paragraphs": [
          "Compare the planned discount with the amount actually taken. Investigate differences caused by a credit, a short payment, a bank fee, or a vendor application error. Reconcile the discount to the vendor statement or portal so the open balance is correct.",
          "Report forfeitures by reason: cash priority, unresolved dispute, missing approval, late invoice, terms not confirmed, or vendor compliance question. A capture rate without the denominator and the forfeiture reasons is easy to misread. The useful measure is the proportion of eligible opportunities with a documented decision, not only the proportion that captured a discount."
        ]
      },
      {
        "heading": "Limitations and practical use",
        "paragraphs": [
          "The framework depends on accurate terms and complete payment records. If the terms are stored in contracts that the payables team cannot access, the population will be incomplete. If the payment date is recorded only after the fact, the decision timing cannot be reconstructed. State these limits.",
          "Use the analysis to improve the intake of terms, the approval calendar, and the cash forecast. Re-test after the change. The goal is a decision process that can explain why a discount was taken or forfeited, not a target that encourages unsafe acceleration."
        ]
      },
      {
        "heading": "Implications for a payables support role",
        "paragraphs": [
          "A payables assistant can collect terms, calculate the offer, prepare the decision record, and monitor the payment calendar. The assistant should not set the organization's cash policy, approve an early payment outside delegated authority, or characterize a discount as a guaranteed saving.",
          "The role becomes valuable when it reduces missed windows caused by missing terms or late approvals. It becomes risky when it pressures the team to accelerate payments without the authorized cash and risk review. The boundary should be written into the role brief and tested with real examples."
        ]
      }
    ],
    "faq": [
      { "q": "Should every discount be taken?", "a": "No. The decision depends on cash position, terms, invoice accuracy, risk, and the organization's policy. The record should show that the tradeoff was considered." },
      { "q": "What denominator should a capture rate use?", "a": "Use eligible opportunities for the declared period, including forfeitures, and state the eligibility rules." },
      { "q": "Can a payables assistant approve an early payment?", "a": "Only within the delegated authority. Otherwise the assistant prepares the record and routes it to the authorized approver." }
    ],
    "sources": [
      { "label": "Federal Reserve H.15 Selected Interest Rates", "url": "https://www.federalreserve.gov/releases/h15/" },
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "U.S. Small Business Administration", "url": "https://www.sba.gov/" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
    ]
  }
];
