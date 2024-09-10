'use client'

import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
  {
    title: 'Collaborative Editing',
    description: 'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <div className="size-96 flex justify-center items-center rounded-md bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Version control',
    description: 'Experience real-time updates and never stress about version control again. Our platform ensures that you\'re always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.',
    content: (
      <div className="size-96 flex justify-center items-center rounded-md bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description: 'Experience real-time updates and never stress about version control again. Our platform ensures that you\'re always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.',
    content: (
      <div className="size-96 flex justify-center items-center rounded-md bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        Running out of content
      </div>
    ),
  },
]

export function Features() {
  return (
    <section id="features">
      <StickyScroll content={content} />
    </section>
  )
}
