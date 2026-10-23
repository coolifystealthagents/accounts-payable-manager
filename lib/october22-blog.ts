import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "recurring-invoice-accrual-handoff",
    "title": "Build a Recurring Invoice Accrual Handoff",
    "description": "A practical control for moving recurring invoice estimates, cutoff evidence, reversals, and true-ups through a reviewable payables workflow.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/recurring-invoice-accrual-handoff.webp",
    "sections": [
      {
        "heading": "Where accrual work belongs in the payables cycle",
        "paragraphs": [
          "A recurring invoice accrual is an estimate of expense incurred before a vendor invoice arrives. The payables team often sees the underlying service evidence first: a monthly support ticket count, a facilities work order, a usage report, or a signed delivery log. That evidence can be organized for review, but the accounting decision to record an accrual remains with the controller or another authorized owner.",
          "The handoff works best when it is treated as a small control rather than an inbox reminder. Name the accrual category, the period it covers, the evidence source, the preparer, the reviewer, and the event that closes the estimate. Without those fields, a recurring accrual becomes a number copied forward until someone notices that the invoice never matched it."
        ]
      },
      {
        "heading": "Collect the evidence before the cutoff",
        "paragraphs": [
          "Start with a cutoff calendar that identifies when service evidence is expected and when the accounting close needs the estimate. For each recurring category, record the vendor, contract or purchase order reference, service period, expected invoice date, and the person who can confirm that the service was performed. Keep the source link beside the estimate rather than in a separate folder that only one person can find.",
          "Evidence can be incomplete at cutoff. That is normal. The record should show which facts were available, which were missing, and what assumption the reviewer approved. A note such as awaiting the final usage report is more useful than a precise estimate with no source. Missing evidence should remain visible instead of being replaced by last month's number."
        ]
      },
      {
        "heading": "Separate estimate preparation from accounting judgment",
        "paragraphs": [
          "An outsourced payables assistant can gather the service record, compare it with the prior period, prepare a calculation using an approved method, and flag unusual movements. The assistant should not decide materiality, select an accounting policy, approve a manual journal entry, or conclude that an estimate is fairly stated.",
          "Use three disposition labels in the queue: ready for review, held for missing evidence, and escalated for an accounting question. Each label needs an owner and a next action. This keeps preparation moving without turning a capable assistant into an unauthorized decision maker. The reviewer should be able to see the source, method, and open question without reconstructing the work from chat."
        ]
      },
      {
        "heading": "Build a reversal and true-up trail",
        "paragraphs": [
          "Every accrual should have a planned reversal or true-up path. Record the period, the original estimate, the invoice that eventually arrives, the variance, and the reason for the difference. Common reasons include a changed service volume, a credit, a late invoice, a rate change, or a timing difference between the service period and the invoice date.",
          "The trail should distinguish a correction from a new estimate. If the original accrual was wrong, preserve the original value, the revised value, the author, the timestamp, and the approval reference. Replacing the old number in place destroys the audit trail and makes it impossible to tell whether the process improved or the story changed."
        ]
      },
      {
        "heading": "Review the accrual queue",
        "paragraphs": [
          "Review the queue by age, value, category, and exception reason. A useful weekly review asks four questions: which categories have no evidence, which estimates moved beyond an approved threshold, which invoices arrived without a matching accrual, and which reversals are still open after the expected date. These questions expose process gaps without pretending that every variance is an error.",
          "Sample a small number of records against the source evidence. Check that the service period is correct, the calculation follows the approved method, the reviewer is independent enough for the risk, and the reversal is scheduled. Record the sample and the findings. A review that leaves no trace cannot support the next close or answer a question months later."
        ]
      },
      {
        "heading": "Pilot one accrual category",
        "paragraphs": [
          "Choose one recurring category with a stable source and a known reviewer. Run the handoff for a full cycle, including the invoice match and reversal. At the end, compare the time spent searching for evidence, the number of records held for missing information, and the exceptions that required accounting judgment.",
          "Expand only after the first category produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is source access, unclear ownership, or an unrealistic cutoff. Fixing those issues before adding categories is faster than rebuilding a large queue that never had a stable definition."
        ]
      }
    ],
    "faq": [
      { "q": "Can a remote assistant prepare accrual estimates?", "a": "An assistant can organize service evidence and apply an approved calculation method. The accounting treatment, materiality decision, and journal approval remain with the authorized finance owner." },
      { "q": "What is the most important accrual record field?", "a": "The service period and source evidence are the most important fields because they connect the estimate to the work that created the expense." },
      { "q": "How should missing evidence be handled?", "a": "Mark it as missing, identify the owner who can obtain it, and record the assumption used for any interim estimate rather than substituting an unsupported number." }
    ],
    "internalService": "/services/ap-reporting-support",
    "internalSibling": "/blog/prepaid-expense-amortization-handoff",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "freight-accessorial-invoice-review-queue",
    "title": "Design a Freight Accessorial Invoice Review Queue",
    "description": "How payables teams can review detention, fuel, liftgate, and other accessorial charges with rate evidence, delivery records, and clear exception ownership.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/freight-accessorial-invoice-review-queue.webp",
    "sections": [
      {
        "heading": "Why accessorial charges need their own queue",
        "paragraphs": [
          "Freight invoices often combine a base transportation charge with accessorial items such as detention, fuel surcharge, liftgate service, inside delivery, or a reconsignment fee. The base charge may match the rate agreement while an accessorial line remains unsupported. Mixing both into one approval decision makes the invoice look approved when only part of it has been explained.",
          "A separate accessorial queue lets the team test each charge against the service record and the applicable rate term. It also creates a useful history of recurring exceptions. If the same charge appears every month without documentation, the issue may be a missing rate schedule, a carrier process problem, or a service change rather than an isolated billing error."
        ]
      },
      {
        "heading": "Tie each charge to a rate and service record",
        "paragraphs": [
          "For every accessorial line, capture the carrier, invoice number, shipment or tracking reference, charge code, amount, service date, and the rate source that is supposed to govern the charge. The rate source might be a contract, a tariff, a signed quote, or an approved accessorial schedule. Record the version or effective date so a later reviewer knows which terms applied.",
          "Then attach the service evidence: a delivery receipt, appointment record, scale ticket, gate log, or carrier event history. The evidence does not have to prove that the charge is correct. It has to let the reviewer decide whether the charge is supported, disputed, or still missing information. That distinction is the core of the queue."
        ]
      },
      {
        "heading": "Classify exceptions with consistent reasons",
        "paragraphs": [
          "Use a short reason list so the queue can be reviewed and compared over time. Useful categories include no rate reference, rate mismatch, missing service evidence, duplicate charge, wrong shipment, wrong date, fuel index question, and carrier credit pending. Avoid a generic other category unless a reviewer adds a specific note and assigns a follow-up owner.",
          "The reason should describe what is missing or inconsistent, not who is at fault. A note that says the detention charge has no appointment record is actionable. A note that says the carrier is wrong invites an argument without a next step. Keep the language factual and attach the source that supports the classification."
        ]
      },
      {
        "heading": "Keep disputes inside the review record",
        "paragraphs": [
          "When a charge is disputed, record the dispute date, the amount, the carrier contact or portal reference, the evidence sent, and the expected response date. Do not let the dispute live only in an email thread. The payables record should show whether the disputed amount is on hold, paid under reservation, or excluded from the current run.",
          "A dispute is not a reason to stop reviewing the rest of the invoice. Split supported and unsupported lines so the approved portion can move while the disputed portion remains visible. This reduces unnecessary payment delays and prevents a small question from hiding the rest of the payable."
        ]
      },
      {
        "heading": "Measure queue health without guessing",
        "paragraphs": [
          "Track open accessorial items by age, reason, carrier, and amount. Also track how often a dispute results in a credit, a corrected invoice, or a payment. Those outcomes tell you whether the queue is resolving questions or simply moving them around. Do not present the counts as industry benchmarks; they describe your own population and definitions.",
          "Review a sample of closed items each month. Confirm that the rate source was current, the service evidence matched the shipment, the reason code was accurate, and the final disposition was recorded. If the same reason keeps appearing, fix the upstream cause, such as a missing rate schedule or an unclear delivery process."
        ]
      },
      {
        "heading": "Start with one carrier lane",
        "paragraphs": [
          "Pick one carrier and one common accessorial category. Define the required fields, the evidence sources, the reason list, and the reviewer. Run the queue for a month and compare the results with the prior process. Look for reduced search time, fewer unclear holds, and a clearer record of carrier responses.",
          "Add categories or carriers only after the first lane is stable. Freight terms vary widely, and a queue that works for parcel delivery may not fit a dedicated truckload lane. The operating model should follow the evidence and the contract, not a generic template."
        ]
      }
    ],
    "faq": [
      { "q": "Who should approve an accessorial charge?", "a": "The approval owner depends on the contract and delegation policy. The payables role can prepare the evidence and exception, while the authorized transportation or finance owner approves the charge." },
      { "q": "What if the carrier will not provide service evidence?", "a": "Record the request, the date, and the response. Keep the item in a documented exception state and let the accountable owner decide whether to pay, hold, or escalate." },
      { "q": "Should every small accessorial charge be reviewed?", "a": "Use risk-based criteria approved by the process owner. Small charges may be sampled, but the sampling rule and its rationale should be written down." }
    ],
    "internalService": "/services/three-way-match-support",
    "internalSibling": "/blog/utility-invoice-variance-review",
    "source": { "label": "Federal Motor Carrier Safety Administration", "url": "https://www.fmcsa.dot.gov/" }
  },
  {
    "slug": "utility-invoice-variance-review",
    "title": "Run a Utility Invoice Variance Review",
    "description": "A multi-site method for reviewing electricity, gas, water, and waste invoices with meter evidence, tariff context, and accountable exception routing.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/utility-invoice-variance-review.webp",
    "sections": [
      {
        "heading": "Define the variance question",
        "paragraphs": [
          "A utility invoice can change for reasons that have nothing to do with an error: weather, occupancy, a rate change, a new meter, a billing period with more days, or a one-time adjustment. The review question is not why the bill is different from last month. It is whether the current charge is supported by the meter, tariff, and site records available for that billing period.",
          "Write the question before setting a threshold. A variance review that starts with a percentage cutoff will miss small but repeated errors and will waste attention on large seasonal movements that are fully explained. The threshold should follow the risk and the quality of the available evidence."
        ]
      },
      {
        "heading": "Assemble meter, tariff, and site records",
        "paragraphs": [
          "For each account, keep the site identifier, meter number, service address, rate schedule, billing period, meter read dates, consumption, demand, and the charges on the invoice. If the invoice combines multiple meters or services, split the review by account so a question about one meter does not obscure the rest of the bill.",
          "Attach the tariff or contract page that governs the rate, including the effective date. Tariffs change, and a rate that was correct last year may not be correct now. If the team cannot obtain the current tariff, mark that as a missing source and route the question to the owner rather than assuming the invoice is wrong."
        ]
      },
      {
        "heading": "Route vacancy and weather questions carefully",
        "paragraphs": [
          "Site teams often know about vacancy, construction, equipment changes, or a temporary closure that explains a usage change. The payables record should capture that context with a date and a responsible person. It should not turn an informal comment into an accounting conclusion. The reviewer decides whether the explanation is sufficient and whether an adjustment is needed.",
          "Weather can explain a variance without proving that the bill is correct. Keep the weather or degree-day reference as context, not as a substitute for the meter and tariff test. If the team uses a weather-normalization method, document the method and the source so another reviewer can reproduce it."
        ]
      },
      {
        "heading": "Document adjustments and rebills",
        "paragraphs": [
          "Utility bills frequently include adjustments, rebills, deposits, late fees, or credits that refer to an earlier period. Record the reference period, the reason, the amount, and the invoice line it affects. A credit applied to the wrong account can make two months look correct while leaving both unresolved.",
          "When a corrected invoice arrives, link it to the original rather than replacing it. Preserve the original charge, the correction, the net amount, and the reviewer. This is especially important when a landlord, property manager, or submetering provider is involved and the final cost must be passed through to another party."
        ]
      },
      {
        "heading": "Review multi-site patterns",
        "paragraphs": [
          "A single invoice review answers a single question. A portfolio review can reveal a shared cause: a rate schedule applied to the wrong site type, a meter that was not transferred after a tenant change, or a vendor that consistently bills the wrong service address. Group exceptions by cause and by site, not only by dollar value.",
          "Be careful with comparisons across sites. Buildings differ in size, equipment, occupancy, and billing terms. A higher bill is not automatically an error. Use the comparison to decide where to look, then test the individual account against its own evidence."
        ]
      },
      {
        "heading": "Pilot one utility portfolio",
        "paragraphs": [
          "Choose one utility type and a small group of accounts with accessible invoices and site contacts. Define the fields, the variance question, the evidence sources, and the escalation route. Run the review for two billing cycles and record how often the team could resolve a question without outside help.",
          "Use the pilot to decide whether the bottleneck is data access, tariff knowledge, or site communication. A payables assistant can organize the evidence and maintain the exception log. The utility account owner, facilities lead, or finance reviewer should retain decisions about adjustments, accruals, and landlord pass-throughs."
        ]
      }
    ],
    "faq": [
      { "q": "What variance threshold should we use?", "a": "There is no universal threshold. Set it with the process owner based on account size, tariff complexity, historical error patterns, and the cost of review." },
      { "q": "Can the assistant contact the utility?", "a": "That depends on the approved communication boundary. If contact is allowed, record the representative, date, reference number, and outcome in the invoice record." },
      { "q": "How should landlord rebills be handled?", "a": "Keep the landlord statement, the underlying utility invoice, the allocation method, and the approval in one record so the charge can be traced to its source." }
    ],
    "internalService": "/services/invoice-intake",
    "internalSibling": "/blog/freight-accessorial-invoice-review-queue",
    "source": { "label": "U.S. Energy Information Administration", "url": "https://www.eia.gov/electricity/" }
  },
  {
    "slug": "corporate-card-receipt-reconciliation",
    "title": "Reconcile Corporate Card Receipts Without Guesswork",
    "description": "A controlled workflow for missing receipts, cardholder attestations, statement matching, disputes, and policy exceptions in a payables support role.",
    "category": "Approval workflow",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/corporate-card-receipt-reconciliation.webp",
    "sections": [
      {
        "heading": "Set the boundary between cardholder and payables",
        "paragraphs": [
          "The cardholder is closest to the purchase and usually owns the business-purpose explanation. Payables support can compare the statement to the receipt, check the coding, identify missing documentation, and route exceptions. It should not invent a business purpose, approve a policy exception, or attest that an unsupported charge is valid.",
          "Write that boundary into the request template. Ask for the receipt, the business purpose, the participants or project, and the coding. If the cardholder cannot provide a receipt, use a separate attestation path with a named approver. The path should be visible in the record, not handled through a private message that disappears."
        ]
      },
      {
        "heading": "Design the missing receipt path",
        "paragraphs": [
          "A missing receipt is an exception, not a reason to stop the close. Define who may attest to the purchase, what they must confirm, and which charges require a higher level of review. The attestation should state what was purchased, when, for what business purpose, and why the receipt is unavailable.",
          "Keep the attestation linked to the card transaction and the statement period. If the charge is later disputed or audited, the reviewer needs to see the original request, the response, the approver, and the final disposition. A blanket annual attestation is weaker than a transaction-level record because it cannot distinguish one missing receipt from a pattern."
        ]
      },
      {
        "heading": "Reconcile statements to receipts",
        "paragraphs": [
          "Match each statement line to a receipt or attestation using the transaction date, amount, merchant, and card ending. Flag duplicates, split transactions, foreign currency differences, and refunds that do not appear on the same statement. A refund missing from the current statement may belong to a later period, so the record needs an open-item status rather than a forced match.",
          "Coding should follow the approved chart of accounts and project structure. The assistant can suggest a code based on the receipt and prior treatment, but the cardholder or budget owner should confirm anything ambiguous. Repeated coding questions are a sign that the request template or the chart guidance needs improvement."
        ]
      },
      {
        "heading": "Handle disputes and credits",
        "paragraphs": [
          "When a charge is disputed, record the reason, the amount, the date the dispute was opened, the card issuer reference, and the expected resolution date. Keep the disputed amount visible in the reconciliation so it is not counted as both an open dispute and a normal payable. If a provisional credit is issued, link it to the dispute and record the conditions.",
          "Credits and refunds should be matched to the original transaction where possible. If the original is in a prior period, document the cross-period link. Do not net a credit against an unrelated charge just to make the statement balance. That obscures the history and makes it harder to spot a missing refund."
        ]
      },
      {
        "heading": "Review policy exceptions",
        "paragraphs": [
          "Group exceptions by type: missing receipt, late submission, unapproved merchant category, personal portion, split purchase, or repeated coding change. Review the pattern with the policy owner. A high volume of late submissions may be a workflow problem, while a repeated personal charge may require a management conversation.",
          "The payables role can prepare the exception summary and the evidence. The policy owner decides whether to approve, decline, or require repayment. Record that decision and the date. The review should focus on the control, not on creating a narrative about an individual employee."
        ]
      },
      {
        "heading": "Launch with one card program",
        "paragraphs": [
          "Start with one card program, one statement cycle, and a named approver. Test the receipt request, the missing receipt path, the coding review, and the dispute log. Measure how many transactions required a second request and where the delay occurred.",
          "Expand after the first cycle produces a clean reconciliation and a usable exception history. A corporate card process is only as good as its evidence trail. If the team cannot show why a charge was accepted, the reconciliation is not finished."
        ]
      }
    ],
    "faq": [
      { "q": "Can payables staff approve a missing receipt?", "a": "Only if the delegation policy gives them that authority. In most designs, the cardholder explains the purchase and a designated approver accepts the exception." },
      { "q": "How long should receipts be retained?", "a": "Follow the organization's records policy and applicable tax and audit requirements. The workflow should make retention automatic rather than dependent on an individual." },
      { "q": "Should personal portions be netted from the statement?", "a": "Record the personal portion separately, document the repayment or payroll process, and keep the original transaction visible." }
    ],
    "internalService": "/services/approval-routing",
    "internalSibling": "/blog/purchase-card-statement-close-checklist",
    "source": { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
  },
  {
    "slug": "vendor-tax-document-completeness",
    "title": "Keep Vendor Tax Documents Complete and Current",
    "description": "A payables workflow for collecting W-9 and W-8 records, checking name and TIN consistency, tracking missing documents, and routing tax questions.",
    "category": "Vendor records",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/vendor-tax-document-completeness.webp",
    "sections": [
      {
        "heading": "Why tax documents are an onboarding control",
        "paragraphs": [
          "A vendor tax document supports reporting and withholding decisions, but it is also a vendor master record. The name, address, entity type, and taxpayer identification number on the form should match the vendor record used for payments. When those details drift apart, the problem may appear months later as a mismatched filing, a backup withholding question, or a payment sent to the wrong legal entity.",
          "Treat collection as a controlled onboarding step rather than a document request that happens whenever someone remembers. The payables role can request, organize, and compare the forms, but the organization's tax owner decides how to interpret an unusual entity, a treaty claim, or a missing identifier."
        ]
      },
      {
        "heading": "Define the collection matrix",
        "paragraphs": [
          "Write down which document is required for each vendor type and payment scenario. A domestic individual or entity may provide a Form W-9. A foreign person or entity may provide a Form W-8BEN or W-8BEN-E, depending on its classification. The matrix should name the form, the approving owner, the renewal or review trigger, and the evidence retained when a vendor cannot provide one.",
          "Do not let the payables team guess which form applies. Provide examples and a route for questions. A wrong form can be worse than a missing form because it creates a false sense of completeness. If the vendor's circumstances are unclear, hold the record for tax review and keep the payment decision with the authorized owner."
        ]
      },
      {
        "heading": "Validate names and identifiers without giving tax advice",
        "paragraphs": [
          "Compare the legal name, business name, address, and identifier on the form with the vendor master and the payment instructions. Record the comparison result and the source used. If the names differ, document why, such as a trade name, a merger, or a payroll agent, and route the question to the owner who can accept the explanation.",
          "The payables role should not tell a vendor how to classify itself or whether a treaty benefit applies. It can explain which form the organization requests and where to find official instructions. That distinction keeps the support role useful without crossing into tax advice."
        ]
      },
      {
        "heading": "Track missing and expired documents",
        "paragraphs": [
          "Maintain a vendor file status that shows whether the required document is present, missing, expired, or under review. Include the request date, the last follow-up, the owner, and the next action. A vendor with an open document request should remain visible even if payments are temporarily allowed under an approved exception.",
          "Set review triggers based on the organization's policy and the vendor relationship. A change of legal entity, address, bank account, or ownership may require a new form. A foreign vendor's certification may have an expiration or a change in circumstances. The trigger should be written down so the review does not depend on someone noticing a detail."
        ]
      },
      {
        "heading": "Keep the record separate from payment approval",
        "paragraphs": [
          "A complete tax document does not approve a payment. The invoice still needs its normal evidence, matching, and authorization. Keeping the two decisions separate prevents a document collection task from becoming an informal payment approval. It also makes it easier to see which issue is blocking a vendor: a tax record, a bank change, or an invoice question.",
          "When a payment is held because of a tax document, record the hold reason and the release condition. Do not describe the vendor as approved or compliant based only on a form. Use precise language such as document received, pending tax review, or approved for payment under the current policy."
        ]
      },
      {
        "heading": "Review a sample of vendor files",
        "paragraphs": [
          "Sample vendor files across entity types, countries, and payment volumes. Check that the required form is present, the name and identifier match, the approval is recorded, and the review date is current. Count unavailable documents and explain the exclusions rather than removing them from the sample.",
          "Use the findings to improve the onboarding request and the vendor master fields. If the same mismatch keeps appearing, the cause may be a form that asks for a display name instead of a legal name, or a payment setup process that creates a second record. Fix the source rather than correcting files one at a time."
        ]
      }
    ],
    "faq": [
      { "q": "Can a payables assistant decide which tax form a vendor needs?", "a": "The assistant can follow an approved matrix and request the indicated form. Classification questions and treaty positions should go to the organization's tax owner." },
      { "q": "What should happen when a vendor refuses to provide a form?", "a": "Record the request and refusal, route the question to the tax owner, and follow the approved withholding or exception process rather than inventing a workaround." },
      { "q": "How often should vendor tax records be reviewed?", "a": "Follow the organization's policy and review when a relevant vendor detail changes. The review trigger should be documented." }
    ],
    "internalService": "/services/vendor-record-upkeep",
    "internalSibling": "/blog/bank-detail-change-boundaries",
    "source": { "label": "IRS Form W-9", "url": "https://www.irs.gov/forms-pubs/about-form-w-9" }
  },
  {
    "slug": "early-payment-discount-decision-log",
    "title": "Create an Early Payment Discount Decision Log",
    "description": "A decision record for vendor discount terms, approval, payment timing, forfeiture reasons, and the evidence finance needs to review the outcome.",
    "category": "Approval workflow",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/early-payment-discount-decision-log.webp",
    "sections": [
      {
        "heading": "Separate the offer from the decision",
        "paragraphs": [
          "Vendor payment terms may offer a discount for payment within a defined window, such as a percentage off if paid before the normal due date. The offer is a contract term. The decision to take it depends on cash position, approval authority, the accuracy of the invoice, and whether the vendor has met its obligations. Those are different questions and should have different records.",
          "A decision log keeps the offer, the calculation, the approver, the payment date, and the outcome together. Without it, a team may capture a discount by accident, miss one because no one noticed the window, or take a discount on an invoice that later changes. The log makes the choice visible and reviewable."
        ]
      },
      {
        "heading": "Capture the terms at invoice intake",
        "paragraphs": [
          "Record the discount percentage, the discount period, the net due date, and the source of the terms. The source may be a contract, a purchase order, a vendor portal, or an invoice footer. If the invoice conflicts with the contract, mark the difference and route it to the owner rather than choosing the more favorable number.",
          "The payment calendar should show the last date to capture the discount, not only the net due date. Add the calculation basis, such as the invoice amount before or after tax, and the currency. A discount calculation that ignores a credit, a freight charge, or a tax line may produce a payment that does not match the vendor's expectation."
        ]
      },
      {
        "heading": "Prepare the decision, not just the number",
        "paragraphs": [
          "For each candidate, prepare a short decision record: invoice number, vendor, amount, discount value, payment date required, available cash context, any open dispute, and the recommended action. The recommendation should state its assumptions. A payables assistant can prepare this package, but the authorized finance owner decides whether to accelerate payment.",
          "Do not present a discount as free money. Early payment uses cash that may be needed elsewhere and may require borrowing or delaying another obligation. The decision owner should consider the organization's approved cash policy. The log should record that the tradeoff was considered, not just that a percentage looked attractive."
        ]
      },
      {
        "heading": "Record forfeitures and missed windows",
        "paragraphs": [
          "Not every discount should be taken. A vendor may be in a dispute, the invoice may be inaccurate, or the approval may not arrive in time. Record the reason for forfeiture using a consistent list: cash priority, unresolved dispute, missing approval, late invoice, vendor compliance question, or terms not confirmed.",
          "A missed window is also a process signal. If the same vendor or approval path repeatedly misses a discount, examine the intake and approval timing. Do not retroactively change the payment date or describe a late payment as a captured discount. The record should reflect what actually happened."
        ]
      },
      {
        "heading": "Review outcomes against the terms",
        "paragraphs": [
          "After the payment run, compare the planned discount with the amount actually taken. Investigate differences caused by a credit, a short payment, a bank fee, or a vendor remittance mismatch. Reconcile the discount to the vendor statement or portal so the open balance is correct.",
          "Review the log monthly for capture rate, forfeiture reasons, and repeated approval delays. These are operational measures for your own process, not industry benchmarks. Pair them with a sample review of the underlying terms and approvals so a high capture rate does not hide unauthorized acceleration."
        ]
      },
      {
        "heading": "Pilot with a small vendor group",
        "paragraphs": [
          "Start with a few vendors whose terms are clear and whose invoices are stable. Define the approval threshold, the payment calendar, and the record fields. Run the process for one month and compare the decisions with the prior approach.",
          "Expand only after the team can show that the terms were confirmed, the calculation was checked, the approval was recorded, and the payment matched the decision. The goal is not to capture every discount. It is to make each choice deliberate and explainable."
        ]
      }
    ],
    "faq": [
      { "q": "Who should approve an early payment?", "a": "The organization's delegation policy should name the approver and any threshold. Payables can prepare the decision package but should not accelerate payment without the required authority." },
      { "q": "Should tax be included in the discount calculation?", "a": "Follow the contract and the vendor's stated terms. Record the basis used so the calculation can be reviewed." },
      { "q": "How should a discount be recorded if the invoice is later corrected?", "a": "Link the correction to the original payment and record any additional credit or short payment. Preserve the original decision and the revised outcome." }
    ],
    "internalService": "/services/payment-run-preparation",
    "internalSibling": "/blog/payment-hold-release-documentation",
    "source": { "label": "Federal Reserve H.15 Selected Interest Rates", "url": "https://www.federalreserve.gov/releases/h15/" }
  },
  {
    "slug": "prepaid-expense-amortization-handoff",
    "title": "Hand Off Prepaid Expenses Without Losing the Schedule",
    "description": "A payables and accounting handoff for service periods, prepaid schedules, monthly amortization, and reconciliation evidence.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/prepaid-expense-amortization-handoff.webp",
    "sections": [
      {
        "heading": "Recognize when an invoice is not a current expense",
        "paragraphs": [
          "An invoice can cover services that extend beyond the current period, such as an annual software subscription, an insurance policy, or a maintenance contract. Payables sees the invoice and the payment date, while accounting owns the expense recognition decision. The handoff is the bridge between those two views.",
          "The first control is a consistent question at intake: does the service period extend beyond the current accounting period? If yes, the invoice needs a prepaid schedule or an explicit accounting review. If the answer is unclear, record the uncertainty and route it rather than defaulting to the invoice date."
        ]
      },
      {
        "heading": "Capture the service period and allocation basis",
        "paragraphs": [
          "Record the vendor, invoice number, total amount, service start and end dates, payment terms, and the general ledger account or project. If the invoice covers multiple departments, sites, or deliverables, capture the allocation basis and the owner who approved it. The schedule should be reproducible from the invoice and the supporting contract or order.",
          "Do not infer a service period from the invoice date. A software renewal may be billed in advance for twelve months, while a maintenance contract may be billed in arrears. The contract or order is the better source. If the document is missing, mark the period as unconfirmed and hold the schedule for review."
        ]
      },
      {
        "heading": "Keep preparation separate from accounting judgment",
        "paragraphs": [
          "A payables assistant can build the schedule, calculate the monthly amount using an approved method, and compare the amortization to the general ledger. The assistant should not decide whether an item is material, choose an accounting policy, or post a journal entry without authorization.",
          "Use a review queue with three states: schedule ready, period unconfirmed, and accounting question. The reviewer should see the source invoice, the contract reference, the calculation, and the open question. That structure makes the handoff useful without pretending that an administrative role owns the accounting conclusion."
        ]
      },
      {
        "heading": "Run a monthly rollforward",
        "paragraphs": [
          "Each month, compare the prepaid schedule to the general ledger balance. Identify additions, amortization, expirations, credits, and items that need a true-up. Investigate a balance that does not move when the schedule says it should, or a schedule that continues after the service period ends.",
          "Keep the rollforward versioned by period. If an item is corrected, preserve the prior schedule and record the adjustment. A rollforward that is rebuilt from scratch each month is difficult to audit and easy to overwrite. The history is part of the control."
        ]
      },
      {
        "heading": "Review the schedule with the owner",
        "paragraphs": [
          "Review large or unusual prepaid items with the accounting owner before the close. Focus on the service period, the allocation, the remaining balance, and any change in the vendor relationship. For smaller items, use a sample and a documented threshold.",
          "The review should also check that the payment record and the prepaid record agree. A payment that was recorded as a current expense may need a reclass, while a schedule with no corresponding payment may be a duplicate or a missing invoice. Reconciling the two views catches errors that neither team sees alone."
        ]
      },
      {
        "heading": "Start with one recurring contract",
        "paragraphs": [
          "Choose one recurring contract with a clear service period and a known accounting owner. Build the schedule, run the monthly rollforward, and review the first close together. Record the questions that arise and update the intake template.",
          "Expand to other contract types after the first schedule is stable. The goal is a repeatable handoff, not a larger spreadsheet. If the team cannot trace a balance from the invoice to the schedule to the ledger, the process is not ready to scale."
        ]
      }
    ],
    "faq": [
      { "q": "Who decides whether an invoice should be prepaid?", "a": "The accounting owner applies the organization's policy. Payables can identify the service period and prepare the schedule for review." },
      { "q": "What if the contract does not state a service period?", "a": "Mark the period as unconfirmed, request the missing document, and route the question to the accounting owner rather than assuming a period." },
      { "q": "Should the prepaid schedule be reconciled to the bank?", "a": "It should reconcile to the payment and the general ledger. The bank reconciliation is a separate control, but the records should agree on the amount and date." }
    ],
    "internalService": "/services/ap-reporting-support",
    "internalSibling": "/blog/recurring-invoice-accrual-handoff",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "intercompany-payable-confirmation-support",
    "title": "Support Intercompany Payable Confirmations",
    "description": "A controlled workflow for matching intercompany balances, documenting differences, routing disputes, and preparing confirmation evidence for consolidation.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/intercompany-payable-confirmation-support.webp",
    "sections": [
      {
        "heading": "What an intercompany confirmation is testing",
        "paragraphs": [
          "An intercompany payable confirmation compares what one entity owes with what another entity records as receivable. The purpose is to identify differences in amount, period, entity, or transaction before consolidation. It is not a payment approval and it does not replace the accounting close.",
          "Payables support can prepare the confirmation package, match identifiers, collect counterparty responses, and document differences. The accounting owner decides how a difference should be treated. Keeping that boundary clear prevents an administrative match from being mistaken for an accounting conclusion."
        ]
      },
      {
        "heading": "Use a shared transaction reference",
        "paragraphs": [
          "The most common cause of a false difference is that the two entities use different identifiers. A vendor invoice number may not be the same as the intercompany billing reference, and a payment may be applied to a different period. Use a shared reference, such as an intercompany agreement number or a transfer identifier, and record it on both sides.",
          "If a shared reference is not available, build a mapping table with the entity, counterparty, invoice or billing number, amount, currency, service period, and status. The mapping should be reviewed before the confirmation is sent so the counterparty is not asked to reconcile against the wrong population."
        ]
      },
      {
        "heading": "Document differences by cause",
        "paragraphs": [
          "Classify differences as timing, amount, entity, currency, duplicate, missing record, or disputed charge. Timing differences may resolve in the next period, while amount differences require evidence. A generic unreconciled label makes it impossible to see whether the process is improving.",
          "Attach the source records for each difference: the invoice, the billing statement, the payment advice, the general ledger extract, and the counterparty response. The record should show what was compared, not only the final difference. A reviewer should be able to reproduce the comparison without asking for a new spreadsheet."
        ]
      },
      {
        "heading": "Keep netting and settlement separate",
        "paragraphs": [
          "Some organizations settle intercompany balances through netting or a periodic transfer. The confirmation should show the gross payable and receivable before any netting, then the approved netting arrangement. If the netting is recorded in a separate system, link the record rather than replacing the gross balance.",
          "Do not let a netting entry hide an unresolved difference. A difference that is netted away may reappear in a later period or distort the confirmation. The accounting owner should approve the netting treatment and the payables record should retain the evidence."
        ]
      },
      {
        "heading": "Route disputes to the right owner",
        "paragraphs": [
          "When the counterparty disagrees, record the disputed amount, the reason, the evidence provided, and the owner responsible for resolution. Set a response date and a next checkpoint. If the dispute involves a service issue, involve the business owner rather than trying to resolve it through the confirmation process alone.",
          "Escalate when a difference remains open past the close calendar or when the same counterparty repeatedly provides incomplete responses. The escalation should include the facts and the decision needed, not a demand to clear the item. The goal is a reliable confirmation, not a clean-looking spreadsheet."
        ]
      },
      {
        "heading": "Close the confirmation cycle",
        "paragraphs": [
          "At the end of the cycle, summarize the population, responses received, differences resolved, differences remaining, and the owner for each open item. Retain the summary with the supporting records. The next cycle should start from the prior open items rather than rebuilding the list from memory.",
          "Review the process for recurring causes such as late billing, inconsistent references, or unclear ownership. A confirmation that always finds the same difference is telling you something about the upstream workflow. Fixing that cause is more valuable than adding another round of follow-up."
        ]
      }
    ],
    "faq": [
      { "q": "Can a payables assistant confirm an intercompany balance?", "a": "The assistant can prepare and send the package under an approved process. The accounting owner remains responsible for the confirmation conclusion and any adjustment." },
      { "q": "What if the counterparty does not respond?", "a": "Record the request, the follow-up dates, and the escalation. The accounting owner decides how to treat the non-response in the close." },
      { "q": "Should differences be netted automatically?", "a": "No. Show the gross balances and route the netting decision to the authorized accounting owner." }
    ],
    "internalService": "/services/ap-reporting-support",
    "internalSibling": "/blog/recurring-invoice-accrual-handoff",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "ap-mailbox-triage-design",
    "title": "Design an Accounts Payable Mailbox Triage",
    "description": "A practical structure for invoice inboxes, categories, ownership, sensitive content, response expectations, and duplicate handling.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/ap-mailbox-triage-design.webp",
    "sections": [
      {
        "heading": "Map the inbound channels",
        "paragraphs": [
          "Invoices arrive through a shared mailbox, a vendor portal, a scanning service, a procurement system, and sometimes a direct message to an employee. A triage design starts by listing those channels and deciding which one is authoritative for each vendor or invoice type. If the same invoice can arrive in three places, the team needs a duplicate rule, not three independent queues.",
          "Record the channel on every intake record. The channel helps explain missing attachments, delayed receipt, and duplicate submissions. It also shows where vendors are ignoring the preferred route. A portal invoice and an emailed copy may look identical but have different evidence and different follow-up paths."
        ]
      },
      {
        "heading": "Define triage categories",
        "paragraphs": [
          "Use a small set of categories that map to the next action: new invoice, duplicate candidate, missing information, vendor question, statement or credit, tax document, and non-payables request. Each category needs an owner, a target response, and a completion definition. A category without an owner becomes a label that nobody uses.",
          "Avoid categories that describe a feeling, such as urgent or important. If an item needs priority, record the reason: payment run cutoff, contractual deadline, dispute, or executive request. Priority should be explainable and reviewable, not a way to move one message ahead of the queue."
        ]
      },
      {
        "heading": "Protect sensitive content",
        "paragraphs": [
          "Invoice mailboxes attract bank change requests, tax forms, personal information, and fraudulent payment instructions. Define which content may be opened by the triage role, where it can be stored, and when it must be routed without further handling. Do not forward sensitive documents to personal email or store them in an unapproved shared drive.",
          "Use a verification path for bank changes that is separate from the invoice queue. A message that changes payment details should not be processed as a routine vendor update. Record the request, the verification steps, and the approver. The triage role can route it, but it should not act on the change alone."
        ]
      },
      {
        "heading": "Set response expectations",
        "paragraphs": [
          "Define what the team will acknowledge and when. A vendor may need confirmation that an invoice was received, but a response should not imply approval or a payment date. Use a template that states receipt, the reference number, and the next step. Avoid promising a payment date that depends on approval or a payment run.",
          "Internal requesters also need expectations. If a business owner asks for a status update, the response should point to the record and the current owner. A mailbox that becomes a second status system creates duplicate work and conflicting answers. The queue should be the source of truth."
        ]
      },
      {
        "heading": "Review duplicates and misdirected mail",
        "paragraphs": [
          "Duplicates are not only identical attachments. The same invoice may arrive with a different filename, a revised amount, or a new purchase order reference. Compare the vendor, invoice number, amount, date, and line items. If the invoice number is missing, use a documented fallback and mark the record for review.",
          "Misdirected mail includes invoices for another entity, personal expenses, sales solicitations, and phishing attempts. Record the disposition and route it to the right owner. Do not delete a suspicious message without preserving the evidence if the organization's security process requires it."
        ]
      },
      {
        "heading": "Pilot one mailbox",
        "paragraphs": [
          "Start with one mailbox and one team. Measure the volume by category, the time to first action, the number of items returned for missing information, and the duplicate rate. Review a sample of dispositions to confirm that the category and owner were correct.",
          "Use the pilot to simplify the categories and templates. A triage process that requires a long decision tree will not survive a busy Monday. The best design makes the next action obvious from the message and keeps the evidence attached to the record."
        ]
      }
    ],
    "faq": [
      { "q": "Should every invoice receive an acknowledgment?", "a": "Follow the vendor communication policy. If acknowledgments are used, state receipt only and avoid implying approval or a payment date." },
      { "q": "Who owns a bank change request?", "a": "A designated verification owner outside the routine invoice queue. The triage role should route the request and preserve the evidence." },
      { "q": "How should duplicates be counted?", "a": "Use a documented definition, such as the same vendor and invoice number with the same amount, and record near-duplicates separately." }
    ],
    "internalService": "/services/invoice-intake",
    "internalSibling": "/blog/corporate-card-receipt-reconciliation",
    "source": { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" }
  },
  {
    "slug": "purchase-card-statement-close-checklist",
    "title": "Build a Purchase Card Statement Close Checklist",
    "description": "A step-by-step close routine for statement populations, receipt matching, coding, disputes, credits, and the evidence package.",
    "category": "Approval workflow",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/purchase-card-statement-close-checklist.webp",
    "sections": [
      {
        "heading": "Confirm the statement population",
        "paragraphs": [
          "Start the close by confirming which statements belong to the period. A card program may issue statements on different dates, and a transaction near the cutoff may appear on the next statement. Record the statement date, the card ending, the cardholder, and the transaction count so the population is fixed before reconciliation begins.",
          "Compare the statement total with the card issuer's portal or file. If the totals differ, stop and resolve the source difference before matching individual transactions. Reconciling a partial statement produces a clean-looking result that is not tied to the actual liability."
        ]
      },
      {
        "heading": "Match transactions and receipts",
        "paragraphs": [
          "Match each transaction to a receipt or an approved missing receipt record. Use the date, amount, merchant, and card ending. For foreign currency transactions, record the original currency, the converted amount, and the rate source. Do not force a match when the amount differs by a small amount; document the difference and route it.",
          "Flag transactions with no receipt, a receipt for a different amount, a duplicate charge, a refund, or a merchant that does not match the business purpose. These flags are the raw material for the exception review. A statement that is matched but has unexplained flags is not complete."
        ]
      },
      {
        "heading": "Review coding and approvals",
        "paragraphs": [
          "Check that each transaction has a valid account, department, project, and approver. The cardholder or budget owner should confirm ambiguous coding. Payables can compare the coding to the receipt and prior treatment, but it should not assign a code that changes the meaning of the expense without confirmation.",
          "Review split purchases and recurring charges for policy compliance. A recurring subscription may have a valid business purpose but an outdated cost center. A split purchase may be an attempt to stay under an approval threshold. Record the question and route it to the policy owner."
        ]
      },
      {
        "heading": "Resolve disputes and credits",
        "paragraphs": [
          "List open disputes with the transaction, amount, reason, issuer reference, and expected resolution date. Keep the disputed amount separate from the reconciled total so it is not counted twice. If a provisional credit is issued, record the conditions and the possibility of reversal.",
          "Match credits and refunds to the original transaction. If the original is in a prior statement, document the cross-period link. A credit that cannot be matched should remain open rather than being applied to an unrelated charge."
        ]
      },
      {
        "heading": "Prepare the close package",
        "paragraphs": [
          "Assemble the statement, reconciliation, exception log, missing receipt records, dispute list, and approval evidence. Include a summary that states the population, matched amount, open items, and the owner for each unresolved issue. The package should let a reviewer understand the close without opening every receipt.",
          "Do not mark the statement complete while a material exception is unresolved. If the policy allows a close with open items, list them explicitly and assign a follow-up date. The close record should distinguish a known exception from an unexamined transaction."
        ]
      },
      {
        "heading": "Run a post-close review",
        "paragraphs": [
          "After the close, review a sample of transactions for receipt quality, coding accuracy, approval, and timely submission. Look for patterns by cardholder, merchant, or department. A repeated late submission may be a reminder problem, while a repeated merchant exception may require a policy change.",
          "Use the findings to improve the request template and the card program guidance. The goal is a close that gets easier because the evidence arrives correctly, not a longer checklist that compensates for a broken intake."
        ]
      }
    ],
    "faq": [
      { "q": "Can the statement close before every receipt arrives?", "a": "Follow the organization's policy. If an exception close is allowed, list the missing items and assign an owner and follow-up date." },
      { "q": "Who approves a missing receipt?", "a": "The delegation policy should name the approver. The cardholder explains the purchase, and the approver accepts or declines the exception." },
      { "q": "How should foreign currency differences be handled?", "a": "Record the original amount, converted amount, rate source, and any difference. Route unusual differences for review." }
    ],
    "internalService": "/services/approval-routing",
    "internalSibling": "/blog/corporate-card-receipt-reconciliation",
    "source": { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
  },
  {
    "slug": "vendor-statement-dispute-evidence-pack",
    "title": "Assemble a Vendor Statement Dispute Evidence Pack",
    "description": "How to document statement differences, proof of payment, credits, and vendor communication so a dispute can be resolved without guesswork.",
    "category": "Vendor records",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/vendor-statement-dispute-evidence-pack.webp",
    "sections": [
      {
        "heading": "Start from the statement and the ledger",
        "paragraphs": [
          "A vendor statement is the vendor's view of the account. Your ledger is your view. The dispute starts when the two views do not agree. Before contacting the vendor, capture both sources as of a specific date and identify the statement period, the closing balance, and the open items.",
          "Do not edit the statement to match the ledger or the ledger to match the statement. Preserve both and build a reconciliation that explains each difference. The reconciliation is the evidence pack's backbone, and it should be reproducible by another person."
        ]
      },
      {
        "heading": "Identify the disputed population",
        "paragraphs": [
          "List each disputed item with the invoice number, date, amount, payment reference, and the reason for the difference. Common reasons include a payment not applied, a credit not reflected, a duplicate invoice, a short payment, a return, or a pricing disagreement. Keep the list focused on items that are actually disputed.",
          "Separate items that are merely open from items that are disputed. An invoice that is not yet due is not a dispute. A payment that is in transit is a timing question. Mixing categories makes the vendor response harder to interpret and can escalate a routine question."
        ]
      },
      {
        "heading": "Attach proof of payment and credits",
        "paragraphs": [
          "For each payment claimed, attach the remittance advice, bank confirmation, or payment portal record. Show the amount, date, method, and reference. If the payment was applied to a different invoice, explain the application and provide the vendor's acknowledgment if available.",
          "For credits, attach the credit memo, return authorization, or approved adjustment. If the credit was applied in a later period, show the cross-period link. A claim without a source document is an assertion, not evidence, and it will usually prolong the dispute."
        ]
      },
      {
        "heading": "Write the dispute narrative",
        "paragraphs": [
          "Keep the narrative short and factual. State the account, the statement date, the total difference, the items in dispute, and the resolution requested. Attach the reconciliation and the supporting documents. Avoid accusations and avoid presenting an unresolved question as a proven error.",
          "If the vendor needs to take an action, say what it is: apply a payment, issue a credit, correct an invoice, or confirm a balance. Give a response date that reflects the payment terms and the close calendar. A clear request is easier to route than a general complaint."
        ]
      },
      {
        "heading": "Track the response",
        "paragraphs": [
          "Record the date sent, the recipient, the reference number, and the response. If the vendor asks for more information, add it to the same pack rather than starting a new thread. Keep the status visible in the payables queue so the item does not disappear while the team waits.",
          "If the response is unsatisfactory, escalate with the facts and the remaining difference. Do not close the dispute just because a call or email occurred. Closure requires a resolution: a credit, a corrected statement, a payment confirmation, or an approved write-off."
        ]
      },
      {
        "heading": "Close and learn",
        "paragraphs": [
          "When the dispute is resolved, update the ledger and the vendor account, retain the final response, and note the cause. If the same cause appears across vendors, review the intake, matching, or payment application process. A dispute pack that resolves one item but leaves the cause untouched will be needed again next month.",
          "Review the pack with the owner for completeness and tone. The goal is a record that a controller, auditor, or vendor can follow without a meeting. That standard reduces repeat questions and makes the outcome easier to defend."
        ]
      }
    ],
    "faq": [
      { "q": "Who should send the dispute to the vendor?", "a": "Follow the approved communication boundary. A payables specialist may prepare and send routine reconciliations if authorized, while sensitive or high-value disputes may require an owner." },
      { "q": "What if the vendor statement includes invoices we never received?", "a": "List them as missing records, request copies, and keep them separate from disputed items until the invoice and receipt are available." },
      { "q": "How should a write-off be handled?", "a": "The authorized finance owner approves the write-off under policy. The evidence pack should retain the approval and the reason." }
    ],
    "internalService": "/services/vendor-record-upkeep",
    "internalSibling": "/blog/freight-accessorial-invoice-review-queue",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "payment-hold-release-documentation",
    "title": "Document Payment Holds and Releases",
    "description": "A controlled record for payment holds, release evidence, approval authority, aged hold review, and communication with vendors.",
    "category": "Approval workflow",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/payment-hold-release-documentation.webp",
    "sections": [
      {
        "heading": "Define hold categories",
        "paragraphs": [
          "A payment hold is a decision to stop a payment that would otherwise be due. Holds can arise from a bank detail change, an invoice dispute, a missing tax document, a compliance review, a duplicate suspicion, or an approval gap. Each category has a different release condition and a different owner.",
          "Write the categories down and use them consistently. A generic hold status hides why the payment stopped and who can release it. It also makes it difficult to tell an intentional control from a forgotten item. The category should point to the evidence needed to move forward."
        ]
      },
      {
        "heading": "Record the initial hold",
        "paragraphs": [
          "When a hold is placed, record the invoice, vendor, amount, due date, reason category, who placed the hold, and the date. Include the specific question or missing evidence. A note that says pending review is not enough. The next person needs to know what review and what would satisfy it.",
          "Notify the vendor only through the approved channel and only with the information the vendor needs. Do not disclose internal suspicions or personal details. If the hold affects a critical supplier, route the communication to the relationship owner."
        ]
      },
      {
        "heading": "Define release evidence",
        "paragraphs": [
          "For each hold category, define what must be true before release. A bank change may require independent verification and an approval. A dispute may require a credit or a corrected invoice. A missing tax document may require the form or an approved exception. The release record should point to the evidence, not just state that the issue is resolved.",
          "Separate release from payment approval. A hold release means the blocking question is resolved. The payment still needs the normal authorization and may be subject to a separate review. Combining the two can let a routine release bypass a control that was designed for a different risk."
        ]
      },
      {
        "heading": "Keep authority visible",
        "paragraphs": [
          "The delegation policy should name who can place, extend, and release each hold category. Record the approver and the timestamp. If the person who placed the hold is also the only person who can release it, document whether that is an intentional design or a control gap.",
          "For high-risk categories such as bank changes, use independent verification. The payables role can prepare the evidence and route it, but the release should require the designated owner. The record should show that the verification happened, not only that someone clicked approve."
        ]
      },
      {
        "heading": "Review aged holds",
        "paragraphs": [
          "Review open holds by age, category, vendor, and amount. Ask why each item remains open and what action is due. A hold that has no owner or no next date is not a control. It is an unresolved item that may become a late payment or a duplicate.",
          "Look for patterns. A cluster of bank change holds may indicate a fraud attempt or a vendor master problem. A cluster of approval holds may indicate an out-of-office gap. Use the pattern to fix the upstream process rather than extending the hold."
        ]
      },
      {
        "heading": "Improve the hold taxonomy",
        "paragraphs": [
          "After a quarter, review how the categories were used. Merge categories that mean the same thing, split ones that hide different risks, and remove labels that no one can act on. Update the release evidence and the owner for each category.",
          "Train the team on the revised taxonomy and keep examples of good hold records. A clear record protects the vendor relationship, supports the payment decision, and gives the finance owner a defensible history when a payment is questioned later."
        ]
      }
    ],
    "faq": [
      { "q": "Can a payables assistant release a payment hold?", "a": "Only within the authority granted by the delegation policy. High-risk holds such as bank changes should require independent approval." },
      { "q": "Should the vendor be told why payment is on hold?", "a": "Share only the information the vendor needs to resolve the issue, through the approved channel. Do not disclose internal suspicions or personal data." },
      { "q": "How often should aged holds be reviewed?", "a": "At a cadence set by the process owner, with more frequent review for high-risk or high-value categories." }
    ],
    "internalService": "/services/payment-run-preparation",
    "internalSibling": "/blog/early-payment-discount-decision-log",
    "source": { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" }
  }
];
