import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import invoices, { QueryNavLink } from "../data";

function Invoices() {
    let [searchParams, setSearchParam] = useSearchParams();
    const handleSearch = e => {
        let filter = e.target.value;
        if (filter) { setSearchParam({ filter }) }
        else { setSearchParam({}) }
    }
    return (
        <div style={{ padding: '1rem 0' }}>
            <h2>Invoices</h2>
            <input
                value={searchParams.get('filter') || ""}
                onChange={handleSearch}
            />
            <div style={{ display: 'flex' }}>
                <nav
                    style={{
                        borderRight: "solid 1px",
                        padding: "1rem",
                    }}
                >
                    {
                        invoices
                            .filter(invoice => {
                                let filter = searchParams.get('filter');
                                if (!filter) return true;
                                let name = invoice.name.toLowerCase();
                                return name.startsWith(filter.toLowerCase());
                            })
                            .map(invoice => (
                                <QueryNavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: 'block',
                                            margin: '5px 10px',
                                            marginRight: '2rem',
                                            color: isActive ? 'red' : '',
                                        }
                                    }}
                                    to={`/invoices/${invoice.number}`}
                                    key={invoice.number}
                                >
                                    {invoice.name}
                                </QueryNavLink>
                            ))
                    }
                </nav>
                <div style={{ padding: '0 2rem' }}>
                    <Outlet />
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}
export default Invoices;