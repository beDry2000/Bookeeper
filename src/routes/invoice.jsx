import { useParams } from "react-router";
import { getInvoice } from "../data";


function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId), 10);

    return (
        <>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.amount}
            </p>
            <p>Due date: {invoice.due}</p>
        </>
    )
}

export default Invoice;