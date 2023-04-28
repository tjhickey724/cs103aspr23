// api/schedule.js
export default function handler(req, res) {
    res.status(200).json({
         name: 'Chris Tighe', 
         class_list: ['CS103','CS147','CS177'] })
  }