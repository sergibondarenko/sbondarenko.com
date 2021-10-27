import React from 'react';
import VideoPlayer from 'react-player';
import { Header, Footer } from '../../components';

export default function SearchGuard() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Search Guard</h2>
          <p className="text-2xl mt-4">
            <a href="https://search-guard.com/" target="_blank" className="underline">Search Guard</a> is a <span className="text-black">lead security platform</span> to protect data in <a href="https://www.elastic.co/elasticsearch/" target="_blank" className="underline">Elasticsearch</a> and <a href="https://www.elastic.co/kibana/" target="_blank" className="underline">Kibana</a>. 
            It supports a variety of authentication mechanisms, e.g., LDAP, Kerberos, JWT, OpenID Connect, SAML.
          </p>
        </div>

        <div className="mt-10">
          <article>
            I develop <a href="https://git.floragunn.com/search-guard/search-guard-kibana-plugin" target="_blank" className="underline text-sky-700">WEB UI for the Search Guard</a> using <b>JavaScript</b>, <b>Node.js</b>, and <b>React</b>. Also, I develop <b>Selenium</b>-based integration tests in <b>Java</b> and unit tests in <b>Jest</b>.
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <VideoPlayer width="100%" url="https://youtu.be/ewM9glvw0E4" controls />
          </div>
          <div>
            <VideoPlayer width="100%" url="https://youtu.be/TIpN413V1gQ" controls />
          </div>
          <div>
            <VideoPlayer width="100%" url="https://youtu.be/Wqk0m8ibNnM" controls />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}