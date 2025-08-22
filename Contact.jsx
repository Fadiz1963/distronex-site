import React from 'react';

function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
      <form className="flex flex-col gap-2 max-w-md">
        <input type="text" placeholder="Nom" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
