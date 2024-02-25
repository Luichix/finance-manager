import React from "react";
import Icon from "@/components/Icon/Index";

interface TransactionCardProps {
  categoryId: number;
  date: string;
  amount: number | null;
  description: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  categoryId,
  date,
  amount,
  description,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  return (
    <div className="transaction-card flex items-center justify-between mx-4 p-4 shadow-md rounded">
      <div className="column">
        <Icon id={"finances"} />
      </div>
      <div className="column">
        <p className="font-semibold">{`Categoria: ${categoryId}`}</p>
        <p>{formattedDate}</p>
      </div>
      <div className="column text-lg font-bold">
        <p>{amount !== null ? `$${amount.toFixed(2)}` : "N/A"}</p>
      </div>
      <div className="column">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
