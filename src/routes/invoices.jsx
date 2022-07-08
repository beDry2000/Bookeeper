import invoices from "../data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Invoices() {
    let [searchParams, setSearchParams] = useSearchParams();
    const handleSearch = (e) => {
        let filter = e.target.value;
        if (filter) { setSearchParams({ filter }) }
        else { setSearchParams({}) }
    }

    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ borderRight: '1px solid', padding: '1rem' }}>
                <input
                    value={searchParams.get('filter') || ''}
                    onChange={handleSearch}
                />
                {
                    invoices
                        .filter(invoice => {
                            let filter = searchParams.get('filter');
                            if (!filter) return true
                            else {
                                let name = invoice.name.toLowerCase();
                                return name.startsWith(filter.toLowerCase());
                            }
                        })
                        .map(invoice => (
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: 'block',
                                        margin: '1rem 0',
                                        color: isActive ? 'orange' : ''
                                    }
                                }}
                                to={`/invoices/${invoice.number}`}
                                key={invoice.number}
                            >
                                {invoice.name}
                            </NavLink>
                        ))
                }
            </nav>
            <main style={{ margin: '0.5rem 1rem' }}>
                <Outlet />
            </main>
        </div>
    )
}