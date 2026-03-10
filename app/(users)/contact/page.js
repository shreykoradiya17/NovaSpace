import React from 'react';
import ContactHero from './components/ContactHero';
import { Mail, Handshake, MapPin } from 'lucide-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import HomeCta from '../sections/HomeCta';

const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <ContactCard />
            <ContactForm />
            <HomeCta ctaTitle="Let’s Build the Future of Space Together" ctaDescription="NovaSpace collaborates with global partners to develop next-generation space systems and mission platforms." ctaButton="Start Collaboration" />
        </>
    )
}

export default ContactPage