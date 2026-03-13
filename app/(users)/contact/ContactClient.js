"use client";
import React from 'react';
import ContactHero from './components/ContactHero';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import HomeCta from '../sections/HomeCta';
import { useContactData } from '@/hooks/use-queries';

const ContactClient = () => {
    const { data, isLoading } = useContactData();

    if (isLoading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
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
