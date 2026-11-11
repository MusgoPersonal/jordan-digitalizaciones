"use client";

import { useState } from 'react';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Jordan, soy ${name}.\n\nAsunto: ${subject}\n\n${message}\n\nMi correo: ${email}`;
    window.open(`https://wa.me/56930973700?text=${encodeURIComponent(text)}`, '_blank');
  };

  const mailtoHref = `mailto:digitalizacionesisaacjordan@gmail.com?subject=${encodeURIComponent(subject || 'Contacto desde la web')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-md w-full bg-lacquer-raised rounded-lg border border-gold-hairline p-8 animate-slideUp">
        <h1 className="text-3xl md:text-4xl font-extrabold text-champagne mb-6 text-center font-display">Contáctanos</h1>
        <p className="text-text-warm text-center mb-8">
          ¿Listo para digitalizar tu negocio? Escríbenos y empecemos juntos.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-warm">
              Tu Nombre
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gold-hairline rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kinpaku focus:border-kinpaku sm:text-sm bg-lacquer-raised text-champagne"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-warm">
              Tu Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gold-hairline rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kinpaku focus:border-kinpaku sm:text-sm bg-lacquer-raised text-champagne"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-warm">
              Asunto
            </label>
            <div className="mt-1">
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gold-hairline rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kinpaku focus:border-kinpaku sm:text-sm bg-lacquer-raised text-champagne"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-warm">
              Tu Mensaje
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full px-3 py-2 border border-gold-hairline rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-kinpaku focus:border-kinpaku sm:text-sm bg-lacquer-raised text-champagne"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-lacquer-deep bg-kinpaku hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kinpaku"
            >
              Enviar por WhatsApp
            </button>
            <a
              href={mailtoHref}
              className="mt-3 w-full flex justify-center py-2 px-4 border border-gold-hairline rounded-md text-sm font-medium text-text-warm hover:border-kinpaku transition-colors"
            >
              o enviar por correo
            </a>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-text-muted">
          También escríbenos a: <a href="mailto:digitalizacionesisaacjordan@gmail.com" className="font-medium text-kinpaku hover:text-kinpaku-pale">digitalizacionesisaacjordan@gmail.com</a>
        </p>
        <div className="mt-4 text-center">
          <a href="https://wa.me/56930973700" target="_blank" className="inline-block bg-verdigris hover:opacity-90 text-lacquer-deep font-bold py-3 px-6 rounded-lg transition-all">WhatsApp: +569 30973700</a>
        </div>
      </div>
    </div>
  );
}
