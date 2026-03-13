import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with NovaSpace mission control. Whether you're a prospective partner or have questions about our technology, our team is ready to assist.",
    openGraph: {
        title: "Contact NovaSpace | Mission Control",
        description: "Connect with NovaSpace for partnership inquiries, technical support, and media requests.",
    },
};

const ContactPage = () => {
    return <ContactClient />;
};

export default ContactPage;