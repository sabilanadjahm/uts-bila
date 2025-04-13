import { db } from '../../firebase';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message, rating } = req.body;

    if (!name || !message || !rating) {
      return res.status(400).json({ error: 'Semua kolom harus diisi.' });
    }

    try {
      await addDoc(collection(db, 'comments'), {
        name,
        message,
        rating,
        date: Timestamp.now()
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Gagal menyimpan komentar.' });
    }
  }

  if (req.method === 'GET') {
    try {
      const snapshot = await getDocs(collection(db, 'comments'));
      const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json({ error: 'Gagal mengambil komentar.' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
