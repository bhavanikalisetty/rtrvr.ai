import Image from "next/image";

const inputData = [
    {
        text: 'Find me all the 2023 audits for every municipality in california',
        sender: 'user'
    },
    {
        text: `Sure! Here are the steps I\'m gonna execute in a DAG: Data Extraction > LLM Data Ingestion > LLM Content Generation.
        <Image
            src="/dag.png"
            alt="llm-dag"
            width="230"
            height="200"
            className="ml-3 cursor-pointer"
          />`,
        sender: 'assistant'
    },
    {
        text: 'Step1: Google Search: Find municipalities in california. Export to Sheets',
        sender: 'assistant'
    },
    {
        text: 'Step2: LLM DeepSearch: Get 2023 audit for each municipality',
        sender: 'assistant'
    },
    {
        text: 'Step3: LLM AgentInteraction: Extract/Download audit pdf for each municipality',
        sender: 'assistant'
    },
    {
        text: 'Step4: LLM ContentGeneration: Here\'s the final list of all 2023 audits for every municipality in california. Export to Sheets. Anything more?',
        sender: 'assistant'
    },
    {
        text: 'Give me a report on Artesia municipality\'s performance based on the data highlighted in the audit.',
        sender: 'user'
    },
    {
        text: `Based on the provided dataset, here's a report on Artesia municipality's performance for the fiscal year 2022:

        1. **Financial Overview**: The municipality's net position stood at $37,746,548, marking an increase of $6,158,549 from the previous period. The total revenues were $20,494,101, while total expenditures amounted to $14,118,827. This leaves an unassigned fund balance of $4,963,307.
        
        2. **Asset and Liabilities**: The capital assets of the municipality were valued at $28,113,887. However, there were long-term liabilities worth $9,064,322, which also represents the total debt outstanding.
        
        3. **Revenue Capacity**: The majority of the governmental activities tax revenues came from sales taxes ($5,551,693). Property taxes contributed $2,146,321, while franchise taxes and business license taxes contributed $909,908 and $525,901 respectively. Transient occupancy taxes brought in $410,567. The total assessed value of taxable property was 96, with residential properties making up 60% of this value, commercial properties 30%, and industrial properties 6%. The direct and overlapping property tax rate was 1.05. The principal property taxpayers were identified as John Doe and Jane Smith.
        
        4. **Debt Capacity**: The ratios of outstanding debt by type showed that general obligation debt accounted for 60% of the total debt, while revenue debt made up the remaining 40%. The ratios of general bonded debt outstanding was 0.7. The direct and overlapping bonded debt was 1.2, and the legal debt margin was 0.3.
        
        This report suggests that Artesia municipality has seen an increase in its net position and has more revenues than expenditures. However, it also has significant long-term liabilities. The majority of the tax revenues are derived from sales taxes, and residential properties make up the majority of the taxable property value. The debt is primarily made up of general obligation debt.`,
        sender: 'assistant'
    },
    {
        text: `Plot graphs for Artesia municipality's performance based on the dataset`,
        sender: 'user'
    },
    {
        text: `Here is the Graph of Artesia Municipality's Performance: Graph`,
        sender: 'user'
    }
];
export default inputData;