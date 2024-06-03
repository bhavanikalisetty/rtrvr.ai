import React from "react";


type FinancialReportComponentProps = {
  reportText: string;
};

const FinancialReportComponent: React.FC<FinancialReportComponentProps> = ({ reportText }) => {
    // Extract content after "####### Report #######"
    const reportContent = reportText.split("####### Report #######")[1].trim();

    // Now you can use reportContent (without the marker) for further processing
    const sections = reportContent.split("\n"); // Split into sections by double newlines

    // Create array of even-numbered items
    const evenNumberedItems = sections.filter((_, index) => index % 2 != 1);
    const title = evenNumberedItems[0].trim();

    const numberedItems = evenNumberedItems.slice(1, 6);
    const conclusion = evenNumberedItems.slice(6).join('\n\n'); // Combine the remaining text for the conclusion

    return (
        <div className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    
          {/* Numbered List Items */}
          {numberedItems.slice(0, -1).map((item, index) => {
            // Split each item into title and content
            const [itemTitle, itemContent] = item.split(": ", 2);
            const itemNumber = itemTitle.split(".")[0];
            const formattedTitle = itemTitle.replace(/^\d+\. /, "");
    
            return (
              <div key={index} className="mb-2">
                <h3 className="font-semibold text-gray-800 mb-1 flex gap-2">
                  {formattedTitle}
                </h3>
                <p className="text-gray-600">{itemContent}</p>
              </div>
            );
          })}
          {/* Conclusion */}
          <p className="text-gray-700 mt-4">{conclusion}</p>
        </div>
      );
};

export default FinancialReportComponent;