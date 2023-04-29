// api/task_delete?id=ID
// deletes the task with specified id from the database

import dbConnect from '../../lib/dbConnect'
import Task from '../../models/Task'

export default async function handler (req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const id = req.query.id
        if (id){
            const tasks = await Task.deleteOne({_id:id})
            console.log('deleted',id)
            res.status(200).json({ success: true, id: id })
        } else {
            console.log('could not delete',id,' does not exist')
            res.status(400).json({ success: false, id: id })
        }
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
  }
}