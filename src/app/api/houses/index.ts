import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('http://localhost:5000/api/houses');
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:5000/api/houses', req.body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
