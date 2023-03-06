import { useState } from "react";
import "./App.css";
import InformationTable from "./InformationTable";
import PhoneBook from "./PhoneBook";

function App() {
  const [phoneBook, setPhoneBook] = useState([]);

  return (
    <section className="App">
      <PhoneBook phoneBook={phoneBook} setPhoneBook={setPhoneBook} />
      <InformationTable phoneBook={phoneBook} setPhoneBook={setPhoneBook} />
    </section>
  );
}

export default App;
