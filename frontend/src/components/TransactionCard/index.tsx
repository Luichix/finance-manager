import React, { useState } from "react";
import Icon from "@/components/Icon/Index";
import type { ITransaction } from "@/interfaces/Transactions";
import { CATEGORIES } from "../FormTransactions/categories";
import { FaTrash } from "react-icons/fa";
import Transactions from "@/services/Transactions";

interface TransactionCardProps extends ITransaction {
  updateData: React.Dispatch<number>;
}

const TransactionCard = ({
  id,
  amount,
  description,
  type,
  categoryId,
  updateData,
}: TransactionCardProps) => {
  const deleteTransaction = new Transactions().deleteTransaction;

  const handleDelete = async (id: number) => {
    await deleteTransaction(id).then((response) => {
      if (response) {
        updateData(id);
      }
    });
  };

  return (
    <div className="transaction-card border rounded px-8 relative">
      <div className="flex justify-between py-2 gap-4 ">
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
      <button
        onClick={() => handleDelete(id)}
        className="absolute -right-5 inset-y-2"
      >
        <FaTrash className="text-gray-300 hover:text-secondary-900" />
      </button>
    </div>
  );
};

export default TransactionCard;
