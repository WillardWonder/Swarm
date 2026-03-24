export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const origin = req.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': origin.startsWith(env.ALLOWED_ORIGIN) ? origin : env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Headers': 'content-type,authorization',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    };
    if (req.method === 'OPTIONS') return new Response('', { headers: cors });

    const token = (req.headers.get('authorization') || '').replace('Bearer ','');
    if (!env.DASH_TOKEN || token !== env.DASH_TOKEN) {
      return new Response(JSON.stringify({error:'unauthorized'}), { status: 401, headers: { ...cors, 'content-type':'application/json' } });
    }

    // Stub API surface for v2 interactive dashboard.
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ ok:true, service:'swarm-control-api' }), { headers: { ...cors, 'content-type':'application/json' } });
    }

    if (url.pathname === '/tasks' && req.method === 'GET') {
      return new Response(JSON.stringify({ note:'Connect this endpoint to your OpenClaw host bridge.', items:[] }), { headers: { ...cors, 'content-type':'application/json' } });
    }

    if (url.pathname === '/inbox' && req.method === 'GET') {
      return new Response(JSON.stringify({ note:'Connect to inbox bridge.', messages:[] }), { headers: { ...cors, 'content-type':'application/json' } });
    }

    if (url.pathname === '/command' && req.method === 'POST') {
      const body = await req.json().catch(()=>({}));
      return new Response(JSON.stringify({ queued:true, body, note:'Wire to secure command bridge on your host.' }), { headers: { ...cors, 'content-type':'application/json' } });
    }

    return new Response(JSON.stringify({error:'not found'}), { status:404, headers: { ...cors, 'content-type':'application/json' } });
  }
}
