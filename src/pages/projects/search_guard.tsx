import React from 'react';
import { Header, Footer } from '../../components';

export default function SearchGuard() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Search Guard</h2>
          <p className="text-2xl mt-4">
            <a href="https://search-guard.com/" target="_blank" className="underline">Search Guard</a> is a <span className="text-black">lead security platform</span> to protect data in <a href="https://www.elastic.co/elasticsearch/" target="_blank" className="underline">Elasticsearch</a> and <a href="https://www.elastic.co/kibana/" target="_blank" className="underline">Kibana</a>. 
            It supports a variety of authentication mechanisms, e.g., LDAP, Kerberos, JWT, OpenID Connect, SAML.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}