import React, { useState } from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
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
    <div className="transaction-card flex items-center justify-between mx-4 p-4 shadow-md rounded">
      <div className="column">
        <Icon id={'finances'} />
      </div>
      <div className="column">
        <p className="font-semibold">{`Categoria: ${categoryId}`}</p>
        <p>{formattedDate}</p>
      </div>
      <div className="column text-lg font-bold">
        <p>{amount !== null ? `$${amount.toFixed(2)}` : 'N/A'}</p>
        {showDetails ? (
          <div>
            <p>{description}</p>
            <button onClick={toggleDetails}>Ocultar Detalle</button>
          </div>
        ) : (
          <button onClick={toggleDetails}>Ver Detalle</button>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;
