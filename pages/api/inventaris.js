// pages/api/inventaris.js
import inventarisData from './data'

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(inventarisData)
  } else if (req.method === 'GET' && req.query.id) {
    const inventaris = inventarisData.find(item => item.id === parseInt(req.query.id))
    if (inventaris) {
      res.status(200).json(inventaris)
    } else {
      res.status(404).json({
        message: 'Inventaris not found'
      })
    }
  } else {
    res.status(404).json({
      message: 'Invalid request'
    })
  }
}
