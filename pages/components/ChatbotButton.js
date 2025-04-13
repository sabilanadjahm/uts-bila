import { useState } from 'react';

export default function ChatbotButton() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg"
      >
        💬 Chatbot
      </button>

      {showChat && (
        <div className="mt-2 bg-white text-black p-4 rounded shadow-xl w-72">
          <h3 className="font-bold mb-2">Tanya Aku!</h3>
          <Chatbot />
        </div>
      )}
    </div>
  );
}

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Ada yang ingin kamu tanyakan?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const newMsg = { sender: 'user', text: input };
    setMessages([...messages, newMsg]);

    const reply = getBotReply(input);
    setMessages(prev => [...prev, newMsg, { sender: 'bot', text: reply }]);
    setInput('');
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes('portfolio')) return 'Portofolio saya berisi proyek-proyek keren yang pernah saya kerjakan.';
    if (msg.includes('skill')) return 'Saya menguasai teknologi web seperti HTML, CSS, JavaScript, dan React/Next.js.';
    if (msg.includes('kontak')) return 'Kamu bisa menghubungi saya melalui halaman kontak.';
    return 'Maaf, aku belum ngerti itu 😅';
  };

  return (
    <div>
      <div className="h-40 overflow-y-auto text-sm mb-2 bg-gray-100 p-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={msg.sender === 'user' ? 'text-blue-600' : 'text-green-600'}>
              {msg.sender === 'user' ? 'Kamu' : 'Bot'}: {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        className="w-full p-1 border rounded mb-1"
        placeholder="Tulis pesan..."
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-2 py-1 rounded w-full">
        Kirim
      </button>
    </div>
  );
}
