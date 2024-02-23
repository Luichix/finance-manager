import React from "react";

interface TransactionCardProps {
  category: string;
  date: string;
  amount: number;
  categoryList: Record<string, string | boolean>[];
}

const getIconByCategory = (
  category: string,
  categoryList: Record<string, string | boolean>[],
) => {
  const foundCategory = categoryList.find((c) => c.id === category);

  if (foundCategory && foundCategory.icon) {
    const IconComponent = foundCategory.icon as any;
    return <IconComponent className="w-8 h-8 mr-4" />;
  }

  return null;
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  category,
  date,
  amount,
  categoryList,
}) => {
  const icon = getIconByCategory(category, categoryList);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
      <div className="flex items-center">
        {icon}
        <div>
          <div className="font-semibold">{category}</div>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
      </div>
      <div className="text-lg font-semibold">${amount}</div>
    </div>
  );
};

export default TransactionCard;
