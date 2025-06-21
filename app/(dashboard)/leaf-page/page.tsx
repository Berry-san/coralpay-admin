'use client'
import dynamic from 'next/dynamic'

const FlowEditor = dynamic(() => import('../../../components/FlowEditor'), {
  ssr: false,
})

export default function Home() {
  return <FlowEditor />
}
