import { Link, Outlet } from "react-router-dom";

// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";
// import Expenses from "./routes/expenses";

function App() {
  return (
    <main style={{margin: '3rem 2rem'}}>
      <h2>Bookeeper</h2>
      <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
        <Link to='/invoices'>Invoices</Link> | {" "}
        <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet/>
    </main>
  )
}

export default App;
