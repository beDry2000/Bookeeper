import { useParams, useLocation, useNavigate } from "react-router";
import {getInvoice, deleteInvoice} from "../data";

function Invoice () {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    let location = useLocation();
    let navigate = useNavigate();
    const handleDel = () => {
        deleteInvoice(invoice.number)
        navigate('/invoices' + location.search)
    }
    return (
        <div>
            <h2>Invoice #{invoice.number}</h2>
            <p>{invoice.name} - {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
            <button
                onClick={handleDel}
            >Delete</button>
        </div>
    )

}

export default Invoice;