import Expenses from "./components/Expenses/Expenses";

function App() {
  // Dummy Expenses
  const expenses = [
    {
      id: "e1",
      title: "Beer",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "Gaming PC",
      amount: 799.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Swords",
      amount: 450.02,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Expenses Tracker App</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
