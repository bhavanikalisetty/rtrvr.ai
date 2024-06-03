import Image from "next/image";

const inputData = [
    {
        text: 'Find me all the 2023 audits for every municipality in california',
        sender: 'user'
    },
    {
        text: `Sure! Here are the steps that will be gonna executed in a DAG`,
        sender: 'assistant'
    },
    {
        text: `<Image
                src="./dag_transparent.png"
                alt="llm-dag"
                width="700"
                height="400"
                className="ml-3 cursor-pointer"
            />`,
        sender: 'assistant'
    },
    {
        text: 'Step1: Google Search: Find municipalities in california.',
        sender: 'assistant'
    },
    {
        text: `<MunicipalitiesTable />`,
        sender: 'assistant'
    },
    {
        text: 'Step2: LLM Deep Search: Get 2023 audit for each municipality',
        sender: 'assistant'
    },
    {
        text: 'Step3: LLM Agent Interaction: Download audit pdf for each municipality',
        sender: 'assistant'
    },
    {
        text: 'Step4: LLM Content Generation: Here\'s the final list of all 2023 audits for every municipality in california',
        sender: 'assistant'
    },
    {
        text: `<ACFRTable />`,
        sender: 'assistant'
    },
    // {
    //     text: 'Extract Artesia municipality\'s data from the audit.',
    //     sender: 'user'
    // },
    // {
    //     text: 'Here is the Artesia municipality\'s data:',
    //     sender: 'assistant'
    // },
    // {
    //     text: `artesia_municipality_audit =[
    //         {
    //           "Fiscal Year": 2022,
    //           "Net Position": 37746548,
    //           "Net Position Change": 6158549,
    //           "Total Revenues": 20494101,
    //           "Total Expenditures": 14118827,
    //           "Unassigned Fund Balance": 4963307,
    //           "Capital Assets": 28113887,
    //           "Long Term Liabilities": 9064322,
    //           "Total Debt Outstanding": 9064322,
    //           "Revenue Capacity": {
    //             "Governmental Activities Tax Revenues by Source": {
    //               "Property Taxes": 2146321,
    //               "Transient Occupancy Taxes": 410567,
    //               "Sales Taxes": 5551693,
    //               "Franchise Taxes": 909908,
    //               "Business License Taxes": 525901
    //             },
    //             "Assessed Value of Taxable Property": 96,
    //             "Assessed Value of Taxable Property by Use": {
    //               "Residential": 60,
    //               "Commercial": 30,
    //               "Industrial": 6
    //             },
    //             "Direct and Overlapping Property Tax Rates": 1.05,
    //             "Principal Property Taxpayers": [
    //               "John Doe",
    //               "Jane Smith"
    //             ]
    //           },
    //           "Debt Capacity": {
    //             "Ratios of Outstanding Debt by Type": {
    //               "General Obligation Debt": 0.6,
    //               "Revenue Debt": 0.4
    //             },
    //             "Ratios of General Bonded Debt Outstanding": 0.7,
    //             "Direct and Overlapping Bonded Debt": 1.2,
    //             "Legal Debt Margin": 0.3
    //           }
    //         }
    //       ]`,
    //     sender: 'assistant'
    // },
    {
        text: 'Give me a report on Artesia municipality\'s performance based on the data highlighted in the audit.',
        sender: 'user'
    },
    {
        text: `####### Report #######
        Based on the provided dataset, here's a report on Artesia municipality's performance for the fiscal year 2022:
        
        1. **Financial Overview**: The Net Position of Artesia municipality in 2022 was $37,746,548, which is an increase of $6,158,549 from the previous year. The total revenues generated were $20,494,101, while the total expenditures were $14,118,827. This indicates a positive financial performance as revenues exceed expenditures.
        
        2. **Fund Balance**: The Unassigned Fund Balance was $4,963,307. This balance represents the portion of the entity's net position that is available for spending at the discretion of the governing body.
        
        3. **Capital Assets and Liabilities**: The municipality's Capital Assets were valued at $28,113,887, while the Long-Term Liabilities were $9,064,322. The Total Debt Outstanding was also $9,064,322, indicating that the municipality's long-term liabilities are entirely composed of debt.
        
        4. **Revenue Capacity**: The primary sources of tax revenues were Sales Taxes ($5,551,693), Property Taxes ($2,146,321), and Franchise Taxes ($909,908). The Assessed Value of Taxable Property was 96, with Residential (60), Commercial (30), and Industrial (6) being the primary uses. The Direct and Overlapping Property Tax Rates was 1.05. The principal property taxpayers were John Doe and Jane Smith.
        
        5. **Debt Capacity**: The Ratios of Outstanding Debt by Type were 0.6 for General Obligation Debt and 0.4 for Revenue Debt. The Ratios of General Bonded Debt Outstanding was 0.7. The Direct and Overlapping Bonded Debt was 1.2, and the Legal Debt Margin was 0.3.
        
        In conclusion, Artesia municipality seems to have a healthy financial position with increasing net position and revenues exceeding expenditures. However, a significant portion of the capital assets is offset by long-term liabilities, indicating a need for careful debt management. The revenue capacity is strong, with a diverse range of tax sources, and the debt capacity ratios suggest a balanced approach to debt financing.
        `,
        sender: 'assistant'
    },
    {
        text: `Plot graphs for Artesia municipality's performance based on the dataset`,
        sender: 'user'
    },
    {
        text: `####### Graphs #######[
            {
              "Fiscal Year": 2022,
              "Net Position": 37746548,
              "Net Position Change": 6158549,
              "Total Revenues": 20494101,
              "Total Expenditures": 14118827,
              "Unassigned Fund Balance": 4963307,
              "Capital Assets": 28113887,
              "Long Term Liabilities": 9064322,
              "Total Debt Outstanding": 9064322,
              "Revenue Capacity": {
                "Governmental Activities Tax Revenues by Source": {
                  "Property Taxes": 2146321,
                  "Transient Occupancy Taxes": 410567,
                  "Sales Taxes": 5551693,
                  "Franchise Taxes": 909908,
                  "Business License Taxes": 525901
                },
                "Assessed Value of Taxable Property": 96,
                "Assessed Value of Taxable Property by Use": {
                  "Residential": 60,
                  "Commercial": 30,
                  "Industrial": 6
                },
                "Direct and Overlapping Property Tax Rates": 1.05,
                "Principal Property Taxpayers": [
                  "John Doe",
                  "Jane Smith"
                ]
              },
              "Debt Capacity": {
                "Ratios of Outstanding Debt by Type": {
                  "General Obligation Debt": 0.6,
                  "Revenue Debt": 0.4
                },
                "Ratios of General Bonded Debt Outstanding": 0.7,
                "Direct and Overlapping Bonded Debt": 1.2,
                "Legal Debt Margin": 0.3
              }
            }
          ]`,
        sender: 'assistant'
    }
];
export default inputData;