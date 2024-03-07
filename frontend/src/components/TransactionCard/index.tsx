import React, { useState } from "react";
import Icon from "@/components/Icon/Index";
import type { ITransaction } from "@/interfaces/Transactions";
import { CATEGORIES } from "../FormTransactions/categories";

const TransactionCard: React.FC<ITransaction> = ({
  amount,
  description,
  type,
  categoryId,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="transaction-card border rounded px-8">
      <div className="flex justify-between py-2 gap-4">
        <div className="flex items-center justify-center gap-2">
          <div
            className={`${type == "INCOME" ? "bg-primary" : "bg-secondary"} flex items-center justify-center rounded-md p-3 `}
          >
            <Icon id={CATEGORIES[categoryId - 1].description} color="#fff" />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold">{CATEGORIES[categoryId - 1].name}</p>
          <p>{description}</p>
        </div>
        <div className="flex items-center text-lg">
          <p className={type == "INCOME" ? "text-[#477beb]" : "text-[#f35252]"}>
            {type == "INCOME" ? "" : "-"}{" "}
            {amount !== null ? `$${amount.toFixed(2)}` : "N/A"}
          </p>
        </div>
      </div>
      <div className=" hidden mt-0 pb-0 w-full  flex-col items-end">
        {showDetails ? (
          <div className="w-full flex flex-col items-end">
            <div className="w-4/6 border-2 border-secondary-700 p-2 rounded mx-2 my-2">
              {description}
            </div>
            <button className="text-xl" onClick={toggleDetails}>
              ⌃
            </button>
          </div>
        ) : (
          <button className="text-xl" onClick={toggleDetails}>
            ⌄
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
