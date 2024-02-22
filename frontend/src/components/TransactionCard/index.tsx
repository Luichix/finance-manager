import React from "react";
import {
  IoHomeOutline,
  IoBagCheckOutline,
  IoLogoUsd,
  IoSwapHorizontalOutline,
} from "react-icons/io5";

interface TransactionCardProps {
  category: string;
  date: string;
  amount: number;
}

const getIconByCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case "alquiler":
      return <IoHomeOutline className="w-8 h-8 mr-4" />;
    case "supermercado":
      return <IoBagCheckOutline className="w-8 h-8 mr-4" />;
    case "sueldo":
      return <IoLogoUsd className="w-8 h-8 mr-4" />;
    case "transferencia":
      return <IoSwapHorizontalOutline className="w-8 h-8 mr-4" />;
    default:
      return null;
  }
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  category,
  date,
  amount,
}) => {
  const icon = getIconByCategory(category);

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
