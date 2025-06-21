import "./App.css";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🚌 BusRadar App In Progress</h1>
      <p className="text-gray-700 max-w-md mb-2">
        A real-time bus companion app showing the next two arrivals and flagging
        risks like early termination, long delays, or missing vehicles.
      </p>
      <p className="text-base text-gray-800">
        Designed with empathy and experience — for those who ride, and those who
        care.
        <span className="sr-only">
          This message is intended to reflect inclusivity and gratitude to
          helpful passengers.
        </span>
      </p>
    </main>
  );
}

export default App;
