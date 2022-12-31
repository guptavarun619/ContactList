import { useState } from "react";
import WHATSAPP_ICON from "../assets/whatsapp-icon.svg"
const ContactCard = () => {
    const contact = {
        type: "Personal",
        profilePicture: "https://images.unsplash.com/photo-1665132457143-bfc1d770da45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        name: "Ravena Raveclaw",
        phone: "+91 9419870000",
        isWhatsapp: true,
    }

    const contactTypeColors = {
        Personal: "cyan-400",
        "Office": "purple-800",
    }

    return (
        <div className="contact-card flex lg:flex-col lg:w-64 lg:h-fit w-fit h-48 items-center gap-6 p-4 shadow-2xl rounded-lg">
            <img src={contact.profilePicture} className="w-full h-full aspect-square object-cover rounded-lg" alt="display-picture" />
            <div className="container flex flex-col gap-0">
                <div className={`container w-fit py-1 px-3 bg-purple-500 rounded-full`}>
                    <p className="type text-xs text-white">{contact.type}</p>
                </div>
                <h1 className="name text-3xl font-semibold">{contact.name}</h1>
                <div className="flex gap-2 items-end">
                    <button className="mt-2 w-fit" disabled={!contact.isWhatsapp}>
                        <img src={WHATSAPP_ICON} className={`w-6 h-6 ${contact.isWhatsapp ? "grayscale-0" : "grayscale"}`} />
                    </button>
                    <h3 className="phone text-lg font-light">{ contact.phone }</h3>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;