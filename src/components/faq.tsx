import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { siteInfo } from '@/constants'

import { Container } from './container'

interface FAQProps {
  question: string
  answer: string[] | string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: 'What platforms are supported?',
    answer: 'Follow Desktop for Windows, macOS, Linux, and Browser; Follow Mobile for Android and iOS (coming soon).',
    value: 'item-1',
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="my-24"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked
          {' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="prose prose-neutral dark:prose-invert text-balance">
                {Array.isArray(answer) ? (
                  <ul>
                    {answer.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-4">
          Still have questions?
          {' '}
          <a
            rel="noreferrer noopener"
            href={siteInfo.discordLink}
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us on Discord
          </a>
        </h3>
      </Container>
    </section>
  )
}
