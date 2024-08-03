import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";

const EditInvoicePage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [invoice, customers] = await Promise.all([
		fetchInvoiceById(id),
		fetchCustomers(),
	]);
	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{
						label: "Invoices",
						href: "/dashboard/invoices",
					},
					{
						label: "Edit Invoice",
						href: `/dashboard/invoices/${id}/edit`,
						active: true,
					},
				]}
			/>
			<EditInvoiceForm invoice={invoice} customers={customers} />
		</main>
	);
};

export default EditInvoicePage;
