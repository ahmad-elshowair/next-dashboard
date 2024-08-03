import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import CreateINvoiceForm from "@/app/ui/invoices/create-form";

const CreateInvoicePage = async () => {
	const customers = await fetchCustomers();
	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{
						label: "Invoices",
						href: "/dashboard/invoices",
					},
					{
						label: "Create Invoice",
						href: "/dashboard/invoices/create",
						active: true,
					},
				]}
			/>
			<CreateINvoiceForm customers={customers} />
		</main>
	);
};

export default CreateInvoicePage;
