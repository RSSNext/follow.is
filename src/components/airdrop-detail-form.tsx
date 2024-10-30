import { Link2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export function AirdropDetailForm() {
  const [postLink, setPostLink] = useState('')
  const [isLinkSubmitted, setIsLinkSubmitted] = useState(false)

  const handleSubmitLink = () => {
    if (postLink.trim() !== '') {
      setIsLinkSubmitted(true)
    }
  }
  return (
    <div className="w-full sm:max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">
        Join the Follow airdrop
      </h2>
      <p className="text-foreground/60 mb-8 text-balance">
        Share your Follow journey on social media and submit your post link below to be eligible for the upcoming airdrop.
      </p>
      <div className="relative flex justify-stretch max-w-xs mx-auto">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">
          <Link2 className="size-5" />
        </div>
        <Input
          type="url"
          placeholder="Paste your post link here"
          value={postLink}
          onChange={e => setPostLink(e.target.value)}
          disabled={isLinkSubmitted}
          className="pl-10 w-full h-auto rounded-r-none !ring-offset-0 !ring-0"
        />
        <Button
          onClick={handleSubmitLink}
          className="h-auto border-l-0 rounded-l-none font-medium"
          variant="outline"
        >
          {isLinkSubmitted ? 'Submitted' : 'Submit'}
        </Button>
      </div>
      {isLinkSubmitted && (
        <p className="mt-4 text-power-orange text-balance font-medium">
          Your link has been submitted successfully. You're now eligible for the upcoming airdrop!
        </p>
      )}
    </div>
  )
}
