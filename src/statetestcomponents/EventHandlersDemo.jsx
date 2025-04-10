import { useState } from 'react';

function EventHandlersDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [hoverStatus, setHoverStatus] = useState(false);
  const [keyLog, setKeyLog] = useState('');

  // Click event handler
  const handleClick = (e) => {
    // logic for the click 
    setClickCount(prev => prev + 1);
    console.log('Button clicked! Event:', e);
  };

  // Input change handler
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log('Input changed:', e.target.value);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    alert(`Form submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
  };

  // Form input change handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Mouse events
  const handleMouseEnter = () => {
    setHoverStatus(true);
  };

  const handleMouseLeave = () => {
    setHoverStatus(false);
  };

  // Keyboard events
  const handleKeyDown = (e) => {
    setKeyLog(`Key pressed: ${e.key} (Code: ${e.code})`);
  };

  // Double click event
  const handleDoubleClick = () => {
    console.log('Double clicked!');
    setClickCount(0); // Reset counter
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>React Event Handlers Demo</h1>
      
      {/* Click Events */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd' }}>
        <h2>Click Events</h2>
        <button 
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          style={{ 
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Click Me!
        </button>
        <p>Click count: {clickCount}</p>
        <p>Try double-clicking too!</p>
      </section>
      
      {/* Input Events */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd' }}>
        <h2>Input Events</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type something..."
          style={{ 
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
        <p>Current value: {inputValue || '(empty)'}</p>
        <p>{keyLog || 'Press any key to see key info'}</p>
      </section>
      
      {/* Form Events */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd' }}>
        <h2>Form Events</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
                required
                style={{ 
                  padding: '8px',
                  width: '100%',
                  boxSizing: 'border-box',
                  marginTop: '5px'
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                style={{ 
                  padding: '8px',
                  width: '100%',
                  boxSizing: 'border-box',
                  marginTop: '5px'
                }}
              />
            </label>
          </div>
          <button 
            type="submit"
            style={{ 
              padding: '10px 15px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit Form
          </button>
        </form>
      </section>
      
      {/* Mouse Events */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd' }}>
        <h2>Mouse Events</h2>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: '20px',
            backgroundColor: hoverStatus ? '#FFEB3B' : '#E0E0E0',
            transition: 'background-color 0.3s',
            textAlign: 'center'
          }}
        >
          {hoverStatus ? 'Mouse is inside!' : 'Hover over me'}
        </div>
      </section>
      
      <div style={{ color: '#666', fontSize: '0.9em', marginTop: '30px' }}>
        <p>Check the browser console to see detailed event logging.</p>
      </div>
    </div>
  );
}

export default EventHandlersDemo;