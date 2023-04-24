import react from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts=[

    {
      id:"1",
      name:"utkarsh",
      email:"ut@gmail.com",
    },
    {
      id:"2",
      name:"chaubey",
      email:"ch@gmail.com",
    }
  ];
  

   
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />

    </div>
 
  );
}

export default App;
