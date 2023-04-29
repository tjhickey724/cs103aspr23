// api/tasks.js

import dbConnect from '../../lib/dbConnect'
import Task from '../../models/Task'

export default async function handler (req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const tasklist = req.query.tasklist || 'general'
        const tasks = await Task.find({tasklist})
        res.status(200).json({ success: true, tasks: tasks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const task = await Task.create(req.body)
        //res.status(201).json({ success: true, data: task })
        res.redirect('/todolist')
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}