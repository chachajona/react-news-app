import React, { useEffect, useState } from 'react';
import { InfoIcon, X, AlertCircle, XCircle, CheckCircle2 } from 'lucide-react';

const bgColorTypes = {
  info: 'bg-blue-100',
  warning: 'bg-yellow-100',
  error: 'bg-red-100',
  undefined: 'bg-gray-100',
  success: 'bg-green-100',
}

const textColorTypes = {
  info: 'text-blue-800',
  warning: 'text-yellow-800',
  error: 'text-red-800',
  undefined: 'text-gray-800',
  success: 'text-green-800',
}

const hover = {
  info: 'hover:bg-blue-200',
  warning: 'hover:bg-yellow-200',
  error: 'hover:bg-red-200',
  undefined: 'hover:bg-gray-200',
  success: 'hover:bg-green-200',
}

const iconTypes = {
  info: <InfoIcon size="20" className="mr-3" />,
  warning: <AlertCircle size="20" className="mr-3" />,
  error: <XCircle size="20" className="mr-3" />,
  undefined: "",
  success: <CheckCircle2 size="20" className="mr-3" />,
}

const Alert = ({ type, text }) => {
  const [close, setClose] = useState("");

  function handleClose() {
    setClose("hidden");
  }
  return (
    <div className={`flex rounded-lg p-4 ${textColorTypes[type] } ${bgColorTypes[type]} ${close}`}>
      {iconTypes[type]}
      <div className="text-sm font-medium"> {text} </div>
      <button 
        onClick={handleClose}
        className={`ml-auto h-8 w-8 -mx-1.5 -my-1.5 inline-flex rounded-lg p-1.5 ${hover[type]}`}>
        <X size="20" />
      </button>
    </div>
  )
}

export default Alert;