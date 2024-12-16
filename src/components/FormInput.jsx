import React from 'react';
import InputMask from 'react-input-mask';

export default function FormInput({
  label,
  type = 'text',
  value = '',
  onChange,
  placeholder,
  mask,
}) {
  const handleInputChange = (e) => {
    onChange(e.target.value); // Garante que apenas o valor seja enviado
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
        {label}
      </label>
      {mask ? (
        <InputMask
          mask={mask}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      )}
    </div>
  );
}
