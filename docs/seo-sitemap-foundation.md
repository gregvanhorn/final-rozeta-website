# Rozeta SEO Sitemap Foundation

This branch implements the Phase 1 sitemap foundation from `/Users/gvh41/Downloads/rozeta_seo_strategy_v2.docx`.

## Live In Phase 1

### Core pages
- `/`
- `/about`
- `/how-it-works`
- `/pricing`
- `/case-studies`
- `/contact`
- `/blog`
- `/industries`
- `/automations`
- `/compare`
- `/guides`

### Industry pages
- `/industries/roofing`
- `/industries/home-services`
- `/industries/hvac`
- `/industries/legal`
- `/industries/accounting`

### Automation pages
- `/automations/crm-automation`
- `/automations/lead-follow-up`
- `/automations/ai-chatbot`
- `/automations/ai-phone-answering`
- `/automations/scheduling-automation`
- `/automations/review-management`

### Comparison pages
- `/compare/ai-agency-vs-in-house`
- `/compare/ai-consultant-vs-agency`
- `/compare/embedded-ai-team-vs-project-shop`
- `/compare/ai-agency-pricing-comparison`

### Guide pages
- `/guides/ai-readiness-assessment`
- `/guides/ai-implementation-roadmap`
- `/guides/roi-calculator`

### Blog posts
- `/blog/what-is-ai-implementation`
- `/blog/ai-crm-automation-guide`
- `/blog/roofing-ai-tools-2026`
- `/blog/home-services-automation`
- `/blog/ai-agent-small-business`
- `/blog/cost-of-not-using-ai`
- `/blog/ai-answering-service-review`
- `/blog/chatbot-vs-ai-agent`

## Planned Next From The Strategy

### Additional industries
- `/industries/plumbing`
- `/industries/electrical`
- `/industries/landscaping`
- `/industries/property-management`
- `/industries/real-estate`
- `/industries/dental`
- `/industries/veterinary`
- `/industries/pediatric-aba`
- `/industries/sports-organizations`
- `/industries/fitness`
- `/industries/insurance-agencies`
- `/industries/auto-dealerships`
- `/industries/construction`
- `/industries/pest-control`
- `/industries/staffing-agencies`

### Additional automation pages named in the strategy
- `/automations/invoice-processing`
- `/automations/customer-onboarding`
- `/automations/kpi-dashboard`
- `/automations/email-automation`
- `/automations/data-entry`
- `/automations/quote-generation`
- `/automations/call-routing`
- `/automations/proposal-follow-up`
- `/automations/knowledge-base`
- `/automations/team-reporting`
- `/automations/referral-campaigns`
- `/automations/reactivation-campaigns`
- `/automations/customer-support`
- `/automations/payment-reminders`
- `/automations/lead-scoring`
- `/automations/appointment-reminders`
- `/automations/document-processing`
- `/automations/intake-automation`
- `/automations/internal-search`
- `/automations/estimate-automation`
- `/automations/service-reminders`
- `/automations/vendor-management`

### Additional comparisons
- `/compare/rozeta-vs-freelancer`
- `/compare/ai-automation-vs-manual`
- `/compare/zapier-vs-custom-automation`
- `/compare/chatgpt-vs-custom-ai`
- `/compare/make-vs-n8n-vs-custom`
- `/compare/ai-tools-vs-ai-strategy`
- `/compare/hubspot-automation-vs-custom`
- `/compare/servicetitan-ai-vs-custom`
- `/compare/jobber-vs-custom-automation`
- `/compare/managed-ai-vs-diy`
- `/compare/offshore-ai-dev-vs-us`
- `/compare/ai-saas-vs-custom-build`
- `/compare/virtual-assistant-vs-ai`
- `/compare/marketing-agency-vs-ai`
- `/compare/enterprise-ai-vs-smb-ai`
- `/compare/ai-implementation-timeline`

### Additional guides
- `/guides/ai-for-business-owners`
- `/guides/first-90-days-with-ai`
- `/guides/ai-mistakes-to-avoid`
- `/guides/choosing-ai-partner`
- `/guides/ai-for-non-technical`
- `/guides/what-can-ai-automate`
- `/guides/ai-vs-automation`
- `/guides/data-readiness`
- `/guides/ai-security-privacy`
- `/guides/measuring-ai-success`
- `/guides/ai-team-adoption`
- `/guides/future-of-smb-ai`

### Blog engine
- Continue the ongoing blog program from the strategy document as supporting content for industries, automations, comparisons, and guides.

## Technical Notes

- Page data lives in `artifacts/firehose-replica/src/content/page-manifest.json`.
- `sitemap.xml` and `robots.txt` are generated from that manifest during the `@workspace/firehose-replica` build.
- `/contact` is the canonical conversion path.
- `/get-started` remains available as the legacy booking route.
