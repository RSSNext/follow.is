'use client'

import { toPng } from 'html-to-image'
import {
  Download,
  List,
  Loader2,
  Rss,
  Share2,
  SparklesIcon,
  Users,
  Wallet,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { AirdropDetailForm } from './airdrop-detail-form'

export type DetailModel = {
  'Invitations count': string
  'Purchase lists cost': string
  'Total tip amount': string
  'Feeds subscriptions count': string
  'Lists subscriptions count': string
  'Inbox subscriptions count': string
  'Recent read count in the last month': string
  'Mint count': string
  'Claimed feeds count': string
  'Claimed feeds subscriptions count': string
  'Lists with more than 1 feed count': string
  'Created lists subscriptions count': string
  'Created lists income amount': string
  'GitHub Community Contributions': string
}

type StatsCardProps = {
  title: string
  icon: React.ReactNode
  gradient: string
  darkGradient: string
  iconColor: string
  darkIconColor: string
  textColor: string
  darkTextColor: string
  children: React.ReactNode
}

function StatsCard({
  title,
  icon,
  gradient,
  darkGradient,
  iconColor,
  darkIconColor,
  textColor,
  darkTextColor,
  children,
}: StatsCardProps) {
  return (
    <div className="min-w-[360px]">
      <Card className={`bg-gradient-to-br ${gradient} ${darkGradient} border-none h-full`}>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-2.5 ${iconColor} ${darkIconColor} rounded-2xl`}>
              {icon}
            </div>
            <h3 className={`text-2xl font-semibold ${textColor} ${darkTextColor} shrink-0`}>{title}</h3>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

function Header() {
  return (
    <div className="text-center space-y-4 mb-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        <SparklesIcon className="size-6 text-pink-500" />
        <span className="font-medium text-pink-500">Alpha Testing Snapshot</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 dark:from-pink-400 dark:to-violet-400 text-transparent bg-clip-text">
        Your Early Explorer Journey
      </h1>
      <p className="text-xl text-muted-foreground">Thank you for helping shape the future of Follow</p>
    </div>
  )
}

type ActionsProps = {
  isCapturing: boolean
  onDownload: () => void
  onShare: () => void
}

function Actions({ isCapturing, onDownload, onShare }: ActionsProps) {
  return (
    <div className="flex gap-4 justify-center my-4">
      <Button
        variant="outline"
        className="gap-3"
        onClick={onDownload}
        disabled={isCapturing}
      >
        {isCapturing ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Download className="size-4" />
        )}
        Save as Image
      </Button>
      <Button
        variant="outline"
        className="gap-3"
        onClick={onShare}
        disabled={isCapturing || !navigator.share}
      >
        {isCapturing ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Share2 className="size-4" />
        )}
        Share
      </Button>
    </div>
  )
}

export function FollowSummary({ data }: { data?: Partial<DetailModel> | null | undefined }) {
  const [isCapturing, setIsCapturing] = useState(false)
  const safeData = data ?? {} as DetailModel

  const getValue = (key: keyof DetailModel, defaultValue = '0') => {
    return safeData[key]?.toString() || defaultValue
  }

  const captureAndDownload = async () => {
    try {
      setIsCapturing(true)
      const element = document.querySelector('#follow-summary')
      if (!element)
        return

      const dataUrl = await toPng(element as HTMLElement, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      })

      const link = document.createElement('a')
      link.download = 'follow-summary.png'
      link.href = dataUrl
      link.click()
    }
    catch (error) {
      console.error('Failed to capture summary:', error)
    }
    finally {
      setIsCapturing(false)
    }
  }

  const shareImage = async () => {
    try {
      setIsCapturing(true)
      const element = document.querySelector('#follow-summary')
      if (!element)
        return

      const dataUrl = await toPng(element as HTMLElement, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      })

      const response = await fetch(dataUrl)
      const blob = await response.blob()

      if (navigator.share) {
        await navigator.share({
          files: [new File([blob], 'follow-summary.png', { type: 'image/png' })],
          title: 'My Follow Journey',
          text: 'Check out my Follow journey!',
        })
      }
    }
    catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Failed to share summary:', error)
      }
    }
    finally {
      setIsCapturing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="mx-auto max-w-fit [&>*]:h-full">
          <div id="follow-summary" className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 p-6">
            <StatsCard
              title="Your Reading Journey"
              icon={<Rss className="size-5 text-white" />}
              gradient="from-rose-50 to-rose-100"
              darkGradient="dark:from-rose-500/10 dark:to-rose-600/10"
              iconColor="bg-rose-500"
              darkIconColor="dark:bg-rose-400"
              textColor="text-rose-700"
              darkTextColor="dark:text-rose-300"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="text-5xl font-bold text-rose-600 dark:text-rose-300 tracking-tight leading-none">
                      {getValue('Recent read count in the last month')}
                    </div>
                    <div className="text-xl text-rose-600/80 dark:text-rose-300/80 font-medium">entries</div>
                  </div>
                  <p className="text-rose-600/80 dark:text-rose-300/80 text-left">
                    read in the last month during alpha testing
                  </p>
                </div>
                <div className="space-y-4 bg-rose-500/5 dark:bg-rose-400/5 rounded-xl p-4 mt-8">
                  <div className="flex justify-between items-baseline">
                    <span className="text-rose-600/70 dark:text-rose-300/70">Feeds</span>
                    <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">{getValue('Feeds subscriptions count')}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-rose-600/70 dark:text-rose-300/70">Inboxes</span>
                    <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">{getValue('Inbox subscriptions count')}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-rose-600/70 dark:text-rose-300/70">Lists</span>
                    <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">{getValue('Lists subscriptions count')}</span>
                  </div>
                </div>
              </div>
            </StatsCard>

            <StatsCard
              title="Content Creation Impact"
              icon={<List className="size-5 text-white" />}
              gradient="from-violet-50 to-violet-100"
              darkGradient="dark:from-violet-500/10 dark:to-violet-600/10"
              iconColor="bg-violet-500"
              darkIconColor="dark:bg-violet-400"
              textColor="text-violet-700"
              darkTextColor="dark:text-violet-300"
            >
              <div className="flex flex-col h-full justify-end">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-violet-500/5 dark:bg-violet-400/5 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-violet-600 dark:text-violet-300">{getValue('Claimed feeds count')}</div>
                    <div className="text-violet-600/70 dark:text-violet-300/70 text-center">Claimed Feeds</div>
                  </div>
                  <div className="bg-violet-500/5 dark:bg-violet-400/5 rounded-xl p-4 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-violet-600 dark:text-violet-300">{getValue('Lists with more than 1 feed count')}</div>
                    <div className="text-violet-600/70 dark:text-violet-300/70 text-center">Created Lists</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-violet-600/70 dark:text-violet-300/70">Feed Subscriptions</span>
                    <span className="text-2xl font-bold text-violet-600 dark:text-violet-300">{getValue('Claimed feeds subscriptions count')}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-violet-600/70 dark:text-violet-300/70">List Subscriptions</span>
                    <span className="text-2xl font-bold text-violet-600 dark:text-violet-300">{getValue('Created lists subscriptions count')}</span>
                  </div>
                </div>
              </div>
            </StatsCard>

            <StatsCard
              title="Platform Engagement"
              icon={<Wallet className="size-5 text-white" />}
              gradient="from-amber-50 to-amber-100"
              darkGradient="dark:from-amber-500/10 dark:to-amber-600/10"
              iconColor="bg-amber-500"
              darkIconColor="dark:bg-amber-400"
              textColor="text-amber-700"
              darkTextColor="dark:text-amber-300"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-amber-600/70 dark:text-amber-300/70 mb-2 text-left">Earned from Lists</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-amber-600 dark:text-amber-300">$</span>
                    <div className="text-5xl font-bold text-amber-600 dark:text-amber-300 tracking-tight leading-none">
                      {getValue('Created lists income amount')}
                    </div>
                  </div>
                  <p className="text-amber-600/80 dark:text-amber-300/80 mt-3 text-left">
                    income generated during alpha
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-amber-500/5 dark:bg-amber-400/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-300">
                      ${getValue('Total tip amount')}
                    </div>
                    <div className="text-amber-600/70 dark:text-amber-300/70">Tips Given</div>
                  </div>
                  <div className="bg-amber-500/5 dark:bg-amber-400/5 rounded-xl p-4">
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-300">
                      ${getValue('Purchase lists cost')}
                    </div>
                    <div className="text-amber-600/70 dark:text-amber-300/70">Lists Purchased</div>
                  </div>
                </div>
              </div>
            </StatsCard>

            <StatsCard
              title="Community Influence"
              icon={<Users className="size-5 text-white" />}
              gradient="from-emerald-50  to-emerald-100"
              darkGradient="dark:from-emerald-500/10 dark:to-emerald-600/10"
              iconColor="bg-emerald-500"
              darkIconColor="dark:bg-emerald-400"
              textColor="text-emerald-700"

              darkTextColor="dark:text-emerald-300"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div className="text-center">
                  <div className="text-emerald-600/70 dark:text-emerald-300/70 mb-2">Alpha Testers Invited</div>
                  <div className="text-7xl font-bold text-emerald-600  dark:text-emerald-300 tracking-tight leading-none mb-3">
                    {getValue('Invitations count')}
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full px-4 py-1.5">
                    <span className="text-emerald-600/80 dark:text-emerald-300/80">Early Community Builder</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-emerald-500/5 dark:bg-emerald-400/5 rounded-xl p-4">
                    <span className="text-emerald-600/70 dark:text-emerald-300/70">GitHub Contributions</span>
                    <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-300">
                      {getValue('GitHub Community Contributions')}
                    </span>
                  </div>
                </div>
              </div>
            </StatsCard>
          </div>
        </div>
        <Actions
          isCapturing={isCapturing}
          onDownload={captureAndDownload}
          onShare={shareImage}
        />
        <AirdropDetailForm />
      </div>
    </div>
  )
}
