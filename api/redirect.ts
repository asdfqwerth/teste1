import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Redireciona permanentemente para o destino
  res.redirect(301, 'http://144.22.155.195/');
}
