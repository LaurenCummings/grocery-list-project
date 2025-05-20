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
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}></form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">
          clear items
        </button>
      </div>
    </section>
  )
}

export default App
