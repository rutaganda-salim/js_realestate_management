import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`http://localhost:5000/api/houses/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'PUT') {
    try {
      const response = await axios.put(`http://localhost:5000/api/houses/${id}`, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await axios.delete(`http://localhost:5000/api/houses/${id}`);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
