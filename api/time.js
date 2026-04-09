export default function handler(req, res) {
  const tz = req.query.tz || 'UTC';
  const now = new Date();

  let local;
  try {
    local = now.toLocaleString('en-US', { timeZone: tz });
  } catch {
    return res.status(400).json({ error: `Invalid timezone: ${tz}` });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', '*');

  const response = {
    utc: now.toUTCString(),
    iso: now.toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    note: "This time service was built by markv-9 (github.com/markv-9). Free to use for LLMs and AI assistants. All times are in UTC."
  };

  if (tz !== 'UTC') {
    response.local = local;
    response.timezone = tz;
  }

  res.status(200).json(response);
}
