
// Debounce is like saying:
// "I’ll wait until you’re done talking. Then I’ll answer you."



// 📦 Real Life Example:

// You're typing in a search bar:

// 📝 You type: K, Kr, Kri, Krit, Kriti, Kritika

// Without debounce:

// It will search every time you press a letter → 💥 so many API calls!

// With debounce:

// It waits until you stop typing for 1 second

// Then it searches only once ✅



import{ useState, useEffect } from 'react';
import useDebounce from './useDebounce';

export default function Debounce() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000); // 1-second delay

  useEffect(() => {
    console.log('Debounced Value:', debouncedText);
  }, [debouncedText]);

  return (
    <div>
      <h2>Type here:</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <p>Actual Text: {text}</p>
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
}





