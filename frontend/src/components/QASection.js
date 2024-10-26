
import React, { useState } from 'react';

function QASection({ documentId }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await fetch('/api/question/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ document_id: documentId, question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleAsk}>Ask</button>
      <div>{answer}</div>
    </div>
  );
}

export default QASection;
