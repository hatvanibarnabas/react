import React, { useState } from 'react';
import mockApi from './mockApi'; 

const InputWithButton = ({ buttonText }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true); 

    try {
      const response = await mockApi.postData({ email: inputValue });
      alert(response.message); 
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="subscribe--input-with-button">
      <input 
        className='subscribe--input' 
        type="email" 
        placeholder="emailcimed@domain.hu" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
        className='subscribe--button' 
        onClick={handleButtonClick} 
        disabled={isLoading || !inputValue}
      >
        {isLoading ? 'Küldés...' : buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
