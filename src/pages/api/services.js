// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MOCK_SERVICES = [
  { id: 1, name: '半身調理', price: 500, period: 30 },
  { id: 2, name: '全身調理', price: 1000, period: 60 },
  { id: 3, name: '輕鬆調理', price: 300, period: 15 },
  { id: 4, name: '足底按摩', price: 500, period: 30 },
  { id: 5, name: '全身去角質', price: 1350, period: 60 },
  { id: 6, name: 'POKEMON', price: 1350, period: 60 },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ services: MOCK_SERVICES });
  }
}
