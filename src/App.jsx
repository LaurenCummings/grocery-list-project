import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false,msg:'',type:''});

  return (
    <div>
      App
    </div>
  )
}

export default App
