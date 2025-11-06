import { useState, useEffect } from 'react';
import { useAuth, User } from '../hooks/useAuth';

// Mock users for demonstration
const mockUsers: User[] = [
  { id: '1', email: 'agriculteur@demo.com', profileType: 'Agriculteur' },
  { id: '2', email: 'chercheur@demo.com', profileType: 'Chercheur' },
  { id: '3', email: 'investisseur@demo.com', profileType: 'Investisseur' },
  { id: '4', email: 'cooperative@demo.com', profileType: 'Coopérative' },
];

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
}

export default function ChatPage() {
  const { user } = useAuth();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // Filter out the current user from the list of mock users
  const otherUsers = mockUsers.filter(u => u.email !== user?.email);

  useEffect(() => {
    // Simulate loading messages for the selected user
    if (selectedUser) {
      setMessages([
        {
          id: 1,
          text: `Bonjour ! Ceci est une conversation simulée avec ${selectedUser.email}`,
          sender: 'them',
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } else {
      setMessages([]);
    }
  }, [selectedUser]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate a reply
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        text: 'Ceci est une réponse automatique simulée.',
        sender: 'them',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-150px)] bg-gray-100">
      {/* User List Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold text-naatal-green-dark mb-4">Contacts</h2>
        <ul>
          {otherUsers.map(u => (
            <li
              key={u.id}
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-200 ${selectedUser?.id === u.id ? 'bg-naatal-yellow' : ''}`}
              onClick={() => setSelectedUser(u)}
            >
              <p className="font-semibold">{u.profileType}</p>
              <p className="text-sm text-gray-600">{u.email}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 flex flex-col">
        {selectedUser ? (
          <>
            {/* Header */}
            <div className="bg-white p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">{selectedUser.email} ({selectedUser.profileType})</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-4`}>
                  <div
                    className={`max-w-lg p-3 rounded-lg ${msg.sender === 'me' ? 'bg-naatal-green text-white' : 'bg-white shadow'}`}>
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-gray-200' : 'text-gray-500'}`}>{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-naatal-green"
                />
                <button type="submit" className="ml-4 bg-naatal-green text-white p-2 rounded-full hover:bg-naatal-green-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-center">
            <div>
                <h2 className="text-2xl font-semibold text-gray-500">Sélectionnez un contact pour commencer à discuter</h2>
                <p className="text-gray-400">Ceci est une démonstration sans base de données réelle.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
