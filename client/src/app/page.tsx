import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to Community Event Planner</h1>
      <Link href="/events">View Events</Link>
    </main>
  )
}
