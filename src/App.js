import { Link, Outlet } from 'react-router-dom';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';

function App() {
  return (
    <div style={{ margin: '40px' }}>
      <h1>Bookeeper</h1>
      <nav style={{ borderBottom: '1px solid', paddingBottom: '10px' }}>
        <Link to='/invoices' element={<Invoices />}>Invoices</Link> | {" "}
        <Link to='/expenses' element={<Expenses />}>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
