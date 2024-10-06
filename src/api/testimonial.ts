import { getTweet } from 'react-tweet/api'

const tweetIdList = [
  '1832329262163968223',
  '1833056589135442345',
  '1832896505528930551',
  '1832725192860393593',
  '1819361867359535603',
  '1818661886340333782',
  '1818653250381574206',
]

const contentMap = {
  '1832329262163968223': 'The way you can get latest release notifications of your favorite singers. Thank you for making this Follow app.',
  '1833056589135442345': "Very nice news aggregation, and it gives 2 power token everyday, so far I just try move front end people I followed in, haven't done yet, will try move more rss subscribe.",
  '1832896505528930551': 'Follow is sick!!!! It is indeed the best RSS app on this planet, way better than any pure RSS app such as Reeder, Inoreader, or any apps with RSS features like Readwise Reader!!!',
  '1832725192860393593': 'Thanks for making information such a pleasant thing.',
  '1819361867359535603': "Just switched my RSS reader to Follow and it's a game-changer! The built-in AI summaries are saving me so much time. If you're drowning in feeds, this app might be your new best friend.",
  '1818661886340333782': 'Really enjoy Follow, the next generation RSS reader.\n Browse information with the way and structure of the browser, and add social attributes, which is a very novel product concept.',
  '1818653250381574206': "Awesome! I'm using it too.",
} as Record<string, string>

export interface Testimonial {
  id: string
  text: string
  name: string
  screenName: string
  profileImageUrl: string
}

const testimonialList: Testimonial[] = [
  {
    id: 'manual-1',
    text: "I'm really enjoying it so far... it's super smooth and gorgeous. It being multiplatform is amazing, cuz there's literally zero good rss apps for windows.",
    name: '@adamfergusonart',
    screenName: 'Adam',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1787910265876500480/RfnkdD9r_400x400.jpg',
  },
]

export async function getTweetList() {
  const tweetList = (await Promise.all(tweetIdList.map(tweetId => getTweet(tweetId))))
    .filter(tweet => tweet != null)
    .map(tweet => ({
      id: tweet?.id_str,
      text: contentMap[tweet?.id_str] ?? tweet?.text.slice(tweet.display_text_range[0], tweet.display_text_range[1]),
      name: tweet?.user.name,
      screenName: `@${tweet?.user.screen_name}`,
      profileImageUrl: tweet?.user.profile_image_url_https,
    }))
    .concat(testimonialList)

  return tweetList
}
