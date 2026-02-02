# Make.com Automation Flow – GCC IaC Compliance Scanner

## 🔹 Extended Description
This diagram documents the live automation powering `almasatourism.org/iac-scan`. When a user submits a Terraform/CloudFormation file via Tally, Make.com securely sends it to Claude using our regulation-aware system prompt (`system_prompt.txt` from GitHub), generates a human-reviewed-style compliance report, and emails it to the user — all without storing infrastructure code. Final validation and $49 USDT (TRC-20) collection remain manual, preserving our core differentiator: **human-reviewed governance over AI automation**.

## 🔹 Workflow Diagram
```mermaid
graph TD
    A[Tally.so: New IaC Submission] --> B(Make.com Scenario)
    B --> C[Fetch system_prompt.txt from GitHub]
    B --> D[Send file + prompt to Claude API]
    D --> E[Generate Markdown Compliance Report]
    E --> F[Email Report to User]
    F --> G[Log submission to Google Sheet]
    G --> H[Send WhatsApp alert to owner]
    H --> I[Owner validates manually → Collects $49 USDT]
