import { Tweet } from 'react-tweet'

import { Container } from './container'

const tweetList = [
  '1832774682875191423',
  '1820074091334008924',
  '1832010310246699078',
  '1830213559038754968',
  '1829930560502054993',
  '1820438144363405722',
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center my-16">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Loved by the community
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis consectetur veritatis deleniti maxime eos, ipsa, illo et fugit illum non.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3">
          {tweetList.map(tweetId => (
            <div key={tweetId}>
              <Tweet id={tweetId} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
