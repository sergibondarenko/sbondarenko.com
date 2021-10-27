import React from 'react';
import VideoPlayer from 'react-player';
import { Header, Footer } from '../../components';

export default function Sentinl() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Sentinl</h2>
          <p className="text-2xl mt-4">
            <a href="https://github.com/sentinl/sentinl" className="underline" target="_blank">Sentinl</a> is <a href="https://www.elastic.co/kibana/" className="underline" target="_blank">Kibana</a> alerting plugin 
            with <span className="text-black">1k+ stars on GitHub</span>. 
            The main idea is that you schedule searches in <a href="https://www.elastic.co/elasticsearch/" target="_blank" className="underline">Elasticsearch</a> and 
            execute actions (Email, Webhook, Slack, etc.) when the conditions are met.
          </p>
        </div>

        <div className="mt-10">
          <article>
            I developed the plugin using <b>JavaScript</b>, <b>AngularJS</b>, and <b>Node.js</b>.
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <VideoPlayer width="100%" url="https://youtu.be/qk9ZZYqUevU" controls />
          </div>
          <div>
            <VideoPlayer width="100%" url="https://youtu.be/9iiKfpdKLQ8" controls />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}