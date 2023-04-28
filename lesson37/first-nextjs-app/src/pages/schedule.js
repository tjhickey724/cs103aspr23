// schedule.js
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Schedule() {
  const { data, error } = useSWR('/api/schedule', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
        <ul>
        {data.class_list.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
  )
}
