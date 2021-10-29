import React from 'react';
import { Header, Footer } from '../components';

export default function About() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-sm mx-auto p-4">
        <img src="/static/images/about_avatar.jpeg" className="w-full object-contain max-h-80" />

        <article className="mt-10 mb-10">
          <h2 className="text-3xl text-center text-sky-700 mb-8">A full-stack WEB software developer.</h2>
          <p className="mb-6"><b>Software developer skills</b>: JavaScript, NodeJS, React, Elasticsearch, Java for Selenium-based integration tests, Jest for unit test, React Testing Library.</p>
          <p><b>System integration skills</b>: bash scripting, Linux, and computer networks (<a href="https://drive.google.com/file/d/17hFf5jfzUUFR-D8zajt6F3Dad-UrRQGm/view" className="underline text-sky-700" target="_blank">CCNP certified</a>).</p>
        </article>

        <article className="mb-8">
          <h3 className="mb-6 text-xl">Work experience</h3>
          <div className="mb-6">
            <p className="mb-2">2019</p>
            <p className="mb-2"><a href="https://search-guard.com/" target="_blank" className="underline text-sky-700">Floragunn GmbH</a></p>
            <p>Full-stack software developer. Developed <a href="https://git.floragunn.com/search-guard/search-guard-kibana-plugin" target="_blank" className="underline text-sky-700">Signals alerting plugin and Search Guard</a> security 
            plugin for <a href="https://www.elastic.co/elasticsearch/" target="_blank" className="underline text-sky-700">Elasticsearch</a> search engine 
            and <a href="https://www.elastic.co/kibana/" target="_blank" className="underline text-sky-700">Kibana</a>. Also, 
            develop the integration tests using Java and <a href="https://www.selenium.dev/" target="_blank" className="underline text-sky-700">Selenium</a>. And help 
            with <a href="https://forum.search-guard.com/" target="_blank" className="underline text-sky-700">the forum</a> questions. </p>
          </div>
          <div className="mb-6">
            <p className="mb-2">2014 - 2019</p>
            <p className="mb-2"><a href="https://www.sorint.it/en/homepage/" target="_blank" className="underline text-sky-700">Sorint.lab SPA</a></p>
            <p>Full-stack software developer. Developed a search-based software <a href="https://siren.io/" target="_blank" className="underline text-sky-700">Siren</a>. Was a 
            lead developer at <a href="https://github.com/sentinl/sentinl" target="_blank" className="underline text-sky-700">Sentinl</a> (<b>1.3k starts on GitHub</b>) 
            alerting plugin for Siren, <a href="https://www.elastic.co/elasticsearch/" target="_blank" className="underline text-sky-700">Elasticsearch</a> search engine, 
            and <a href="https://www.elastic.co/kibana/" target="_blank" className="underline text-sky-700">Kibana</a>.</p>
          </div>
          <div>
            <p className="mb-2">2011 - 2014</p>
            <p className="mb-2"><a href="https://techexpert.ua/en/home/" target="_blank" className="underline text-sky-700">Techexpert</a></p>
            <p>Computer systems and network engineer. Designed and implemented local and wide-area enterprise computer networks, advanced security solutions, wireless, voice, and video solutions.</p> 
            <p>Became a full-stack software developer. Developed a WEB UI software to configure Asterisk VOIP 
              System <a href="https://github.com/sergibondarenko/cloud-asterisk" target="_blank" className="underline text-sky-700">cloud-asterisk</a>.</p>
          </div>
        </article>

        <article className="mb-20">
          <h3 className="mb-6 text-xl">Education</h3>
          <p className="mb-2">2001 - 2007</p>
          <p><b>BSc in Computer Science</b> at the <a href="https://nau.edu.ua/en/" target="_blank" className="underline text-sky-700">National Aviation University</a>, Kyiv, Ukraine.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}