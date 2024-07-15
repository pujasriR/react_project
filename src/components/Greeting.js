import React, { useState } from 'react';
import './Greeting.css';
export default function Greeting() {
  const [inputText, setInputText] = useState('');
  const [displayedItems, setDisplayedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
   const elements = ['hi', 'hina', 'orange', 'grapefruit', 'mango', 'kiwi', 'pineapple', 'watermelon', 'strawberry', 'blueberry']; // Array of elements (size 10)

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value.toLowerCase()); // Convert input to lowercase
    const filtered = elements.filter((item) =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredItems(filtered); // Limit to top 5 items
    console.log(filtered);
};

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && inputText.trim()) {
      
      if (!displayedItems.includes(inputText.toLowerCase())) {
        setDisplayedItems([...displayedItems, inputText]);
      }      
      setInputText(''); // Clear the input field after adding the item
      setFilteredItems([]);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    setDisplayedItems(displayedItems.filter((item) => item !== itemToRemove));
    setFilteredItems(filteredItems.filter((item) => item !== itemToRemove)); 
};
const handleDropdownItemClick = (clickedItem) => {
    // setInputText(clickedItem); // Set the input text to the clicked item
    if (!displayedItems.includes(clickedItem.toLowerCase())) {
      setDisplayedItems([...displayedItems, clickedItem]);
    } 
      
  };

  return (
    <div className="container">
    <div className="input-container">
        <ul className="displayed-items">
        {displayedItems.map((item) => (
        
          <li className='list-item' key={item}>
            {item}
            <span className="close-icon" onClick={() => handleRemoveItem(item)}>
              &#10006;
            </span>
          </li>
        ))}
      </ul>
      
        
        <input className='inputbox'
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
        placeholder="Enter text..."
      />
      {filteredItems.length > 0 && (
        
        <ul className="dropdown-items">
          {filteredItems.map((item) => (
            <li key={item} className='dropdown-item' onClick={() => handleDropdownItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      
    </div>
    </div>
  );
}

// export default InputWithClear;
