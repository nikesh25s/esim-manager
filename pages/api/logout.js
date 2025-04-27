export default function handler(req, res) {
    if (req.method === 'POST') {
      // Clear authentication token (example using cookies)
      res.setHeader('Set-Cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
      res.status(200).json({ message: 'Logged out successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }