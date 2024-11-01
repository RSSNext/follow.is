'use client'

import { useSession } from '@hono/auth-js/react'
import { toPng } from 'html-to-image'
import {
  Download,
  List,
  Rss,
  SparklesIcon,
  Tornado,
  Users,
  Wallet,
} from 'lucide-react'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { alphaTestAirdropTotalUsers } from '@/constants'

import { AirdropDetailForm } from './airdrop-detail-form'
import { Logo } from './logo'
import { PowerIcon } from './power'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

// eslint-disable-next-line unused-imports/no-unused-vars
const detailModelSchema = z.object({
  'Invitations count': z.number(),
  'Purchase lists cost': z.number(),
  'Total tip amount': z.number(),

  'Feeds subscriptions count': z.number(),
  'Lists subscriptions count': z.number(),
  'Inbox subscriptions count': z.number(),
  'Recent read count in the last month': z.number(),
  'Mint count': z.number(),

  'Claimed feeds count': z.number(),
  'Claimed feeds subscriptions count': z.number(),
  'Lists with more than 1 feed count': z.number(),
  'Created lists subscriptions count': z.number(),
  'Created lists income amount': z.number(),

  'GitHub Community Contributions': z.number(),

  'Invitations count Rank': z.number(),
  'Purchase lists cost Rank': z.number(),
  'Total tip amount Rank': z.number(),

  'Feeds subscriptions count Rank': z.number(),
  'Lists subscriptions count Rank': z.number(),
  'Inbox subscriptions count Rank': z.number(),
  'Recent read count in the last month Rank': z.number(),
  'Mint count Rank': z.number(),

  'Claimed feeds count Rank': z.number(),
  'Claimed feeds subscriptions count Rank': z.number(),
  'Lists with more than 1 feed count Rank': z.number(),
  'Created lists subscriptions count Rank': z.number(),
  'Created lists income amount Rank': z.number(),

  'GitHub Community Contributions Rank': z.number(),
})

export type DetailModel = z.infer<typeof detailModelSchema>

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
    <Card className={`bg-gradient-to-br ${gradient} ${darkGradient} border-none h-full max-w-[400px]`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-2.5 ${iconColor} ${darkIconColor} rounded-2xl`}>
            {icon}
          </div>
          <h3 className={`text-xl sm:text-2xl font-semibold ${textColor} ${darkTextColor} shrink-0`}>{title}</h3>
        </div>
        {children}
      </CardContent>
    </Card>
  )
}

function Header() {
  return (
    <div className="text-center space-y-4 mb-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        <SparklesIcon className="size-6 text-pink-500" />
        <span className="font-medium text-pink-500">Alpha Testing Snapshot</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-pink-500 to-violet-500 dark:from-pink-400 dark:to-violet-400 text-transparent bg-clip-text">
        Your Early Explorer Journey
      </h1>
      <p className="text-xl text-muted-foreground text-balance">Thank you for helping shape the future of Follow</p>
    </div>
  )
}

function Actions() {
  const captureAndDownload = async () => {
    const element = document.querySelector('#follow-summary')
    if (!element)
      return

    const dataUrl = await toPng(element as HTMLElement, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: window.getComputedStyle(document.body).backgroundColor,
    })

    const link = document.createElement('a')
    link.download = 'follow-summary.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <Button
      variant="outline"
      className="gap-3"
      onClick={captureAndDownload}
    >
      <Download className="size-4" />
      Save as Image
    </Button>
  )
}

function DataPresenter({
  data,
  dataKey,
}: {
  data?: Partial<DetailModel> | null | undefined
  dataKey: keyof DetailModel
}) {
  const safeData = data ?? {} as DetailModel

  const getValue = (key: keyof DetailModel, defaultValue = 0) => {
    return safeData[key] || defaultValue
  }

  const dataValue = getValue(dataKey)
  const dataRank = getValue(`${dataKey} Rank` as keyof DetailModel)

  if (!dataRank)
    return dataValue

  const dataRankPercentage = (dataRank / alphaTestAirdropTotalUsers * 100).toFixed(2)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{dataValue}</TooltipTrigger>
        <TooltipContent className="font-medium tracking-wide">
          Ranked in the top {dataRankPercentage}%
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function YourReadingJourneyStatsCard({ data }: { data?: Partial<DetailModel> | null | undefined }) {
  return (
    <StatsCard
      title="Your Reading Journey"
      icon={<Rss className="size-4 sm:size-5 text-white" />}
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
              <DataPresenter data={data} dataKey="Recent read count in the last month" />
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
            <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">
              <DataPresenter data={data} dataKey="Feeds subscriptions count" />
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-rose-600/70 dark:text-rose-300/70">Inboxes</span>
            <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">
              <DataPresenter data={data} dataKey="Inbox subscriptions count" />
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-rose-600/70 dark:text-rose-300/70">Lists</span>
            <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">
              <DataPresenter data={data} dataKey="Lists subscriptions count" />
            </span>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

function ContentCreationImpactStatsCard({ data }: { data?: Partial<DetailModel> | null | undefined }) {
  return (
    <StatsCard
      title="Content Creation Impact"
      icon={<List className="size-4 sm:size-5 text-white" />}
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
            <div className="text-4xl font-bold text-violet-600 dark:text-violet-300">
              <DataPresenter data={data} dataKey="Claimed feeds count" />
            </div>
            <div className="text-violet-600/70 dark:text-violet-300/70 text-center">Claimed Feeds</div>
          </div>
          <div className="bg-violet-500/5 dark:bg-violet-400/5 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-violet-600 dark:text-violet-300">
              <DataPresenter data={data} dataKey="Lists with more than 1 feed count" />
            </div>
            <div className="text-violet-600/70 dark:text-violet-300/70 text-center">Created Lists</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-violet-600/70 dark:text-violet-300/70">Feed Subscribers</span>
            <span className="text-2xl font-bold text-violet-600 dark:text-violet-300">
              <DataPresenter data={data} dataKey="Claimed feeds subscriptions count" />
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-violet-600/70 dark:text-violet-300/70">List Subscribers</span>
            <span className="text-2xl font-bold text-violet-600 dark:text-violet-300">
              <DataPresenter data={data} dataKey="Created lists subscriptions count" />
            </span>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

function PlatformEngagementStatsCard({ data }: { data?: Partial<DetailModel> | null | undefined }) {
  return (
    <StatsCard
      title="Platform Engagement"
      icon={<Wallet className="size-4 sm:size-5 text-white" />}
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
            <div className="text-5xl font-bold text-amber-600 dark:text-amber-300 tracking-tight leading-none">
              <DataPresenter data={data} dataKey="Created lists income amount" />
            </div>
            <span className="text-xl text-amber-600 dark:text-amber-300 font-medium">$POWER</span>
          </div>
          <p className="text-amber-600/80 dark:text-amber-300/80 mt-3 text-left">
            income generated during alpha
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-amber-500/5 dark:bg-amber-400/5 rounded-xl p-4">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-300">
              <DataPresenter data={data} dataKey="Total tip amount" />
            </div>
            <div className="text-amber-600/70 dark:text-amber-300/70">Tips Given</div>
          </div>
          <div className="bg-amber-500/5 dark:bg-amber-400/5 rounded-xl p-4">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-300">
              <DataPresenter data={data} dataKey="Purchase lists cost" />
            </div>
            <div className="text-amber-600/70 dark:text-amber-300/70">Lists Purchased</div>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

function CommunityInfluenceStatsCard({ data }: { data?: Partial<DetailModel> | null | undefined }) {
  return (
    <StatsCard
      title="Community Influence"
      icon={<Users className="size-4 sm:size-5 text-white" />}
      gradient="from-emerald-50  to-emerald-100"
      darkGradient="dark:from-emerald-500/10 dark:to-emerald-600/10"
      iconColor="bg-emerald-500"
      darkIconColor="dark:bg-emerald-400"
      textColor="text-emerald-700"

      darkTextColor="dark:text-emerald-300"
    >
      <div className="flex flex-col flex-1 justify-between">
        <div className="text-left">
          <div className="text-emerald-600/70 dark:text-emerald-300/70 mb-2">Alpha Testers Invited</div>
          <div className="text-7xl font-bold text-emerald-600 dark:text-emerald-300 tracking-tight leading-none mb-3">
            <DataPresenter data={data} dataKey="Invitations count" />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between bg-emerald-500/5 dark:bg-emerald-400/5 rounded-xl p-4">
            <span className="text-emerald-600/70 dark:text-emerald-300/70">GitHub Contributions</span>
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-300">
              <DataPresenter data={data} dataKey="GitHub Community Contributions" />
              <span className="text-lg font-medium ml-1">points</span>
            </span>
          </div>
        </div>
      </div>
    </StatsCard>
  )
}

function getStatusCardOrder(data: Partial<DetailModel> | null | undefined) {
  const safeData = data ?? {} as DetailModel

  const getValue = (key: keyof DetailModel, defaultValue = Infinity) => {
    return safeData[key] || defaultValue
  }

  // count average rank for each card data
  const yourReadingJourneyAverageRank = (
    getValue('Recent read count in the last month Rank')
    + getValue('Feeds subscriptions count Rank')
    + getValue('Lists subscriptions count Rank')
    + getValue('Inbox subscriptions count Rank')
  ) / 5

  const contentCreationImpactAverageRank = (
    getValue('Claimed feeds count Rank')
    + getValue('Claimed feeds subscriptions count Rank')
    + getValue('Lists with more than 1 feed count Rank')
    + getValue('Created lists subscriptions count Rank')

  ) / 4

  const platformEngagementAverageRank = (
    getValue('Total tip amount Rank')
    + getValue('Purchase lists cost Rank')
    + getValue('Created lists income amount Rank')
  ) / 3

  const communityInfluenceAverageRank = (
    getValue('Invitations count Rank')
    + getValue('GitHub Community Contributions Rank')
  ) / 2

  // sort the cards by average rank
  const cardOrder = [
    { key: 'Your Reading Journey', rank: yourReadingJourneyAverageRank, component: YourReadingJourneyStatsCard },
    { key: 'Content Creation Impact', rank: contentCreationImpactAverageRank, component: ContentCreationImpactStatsCard },
    { key: 'Platform Engagement', rank: platformEngagementAverageRank, component: PlatformEngagementStatsCard },
    { key: 'Community Influence', rank: communityInfluenceAverageRank, component: CommunityInfluenceStatsCard },
  ].sort((a, b) => a.rank - b.rank)

  return cardOrder
}

export function FollowSummary({
  data,
  verifyLink,
  amount,
  rank,
}: {
  data?: Partial<DetailModel> | null | undefined
  verifyLink?: string
  amount: string
  rank: number
}) {
  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <AirdropDetailForm verifyLink={verifyLink} />
        <Header />
        <Actions />
        <div className="w-fit mx-auto">
          <div id="follow-summary" className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getStatusCardOrder(data).map(({ component: StatsCardComponent, key }) => (
                <StatsCardComponent key={key} data={data} />
              ))}
            </div>
            <Footer amount={amount} rank={rank} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer({
  amount,
  rank,
}: {
  amount: string
  rank: number
}) {
  const { data } = useSession()

  return (
    <div className="flex gap-4 justify-center items-center">
      <section className="flex gap-2 items-center">
        <Logo className="size-5 rounded-md" />
        <p>Follow</p>
      </section>
      <section className="flex gap-2 items-center">
        {data?.user?.image && (
          <img src={data.user.image} alt="User Avatar" className="size-5 rounded-full" />
        )}
        {data?.user?.name && <p>{data.user.name}</p>}
      </section>
      <section className="flex gap-2 items-center">
        <PowerIcon className="text-power-orange" />
        <p>{amount}</p>
      </section>
      <section className="flex gap-2 items-center">
        <Tornado className="text-power-orange" />
        <p>{rank}</p>
      </section>
    </div>
  )
}
