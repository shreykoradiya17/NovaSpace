"use client";
import React from 'react';
import ContactHero from './components/ContactHero';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import HomeCta from '../sections/HomeCta';
import { useContactData } from '@/hooks/use-queries';
import SpaceLoader from '@/components/SpaceLoader';

const ContactClient = () => {
    const { data, isLoading } = useContactData();

    if (isLoading) {
        return <SpaceLoader />;
    }
    return (
        <>
            <ContactHero data={data?.hero} />
            <ContactCard />
            <ContactForm />
            <HomeCta data={data?.cta} />
        </>
    )
}

export default ContactClient;
