import React, { useState } from 'react';
import Icon from '@/components/Icon/Index';

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
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="transaction-card shadow-md rounded">
      <div className="flex justify-between mx-auto p-4 mb-0 pb-0">
        <div className="column">
          <Icon id={'finances'} />
        </div>
        <div className="column">
          <p className="font-semibold">{`Categoria: ${categoryId}`}</p>
          <p>{formattedDate}</p>
        </div>
        <div className="column text-lg font-bold">
          <p>{amount !== null ? `$${amount.toFixed(2)}` : 'N/A'}</p>
        </div>
      </div>
      <div className="mt-0 pb-0 w-full flex flex-col items-end">
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
