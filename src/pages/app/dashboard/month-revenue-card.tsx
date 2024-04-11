import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function MonthRevenueCard() {
  return(
    <Card>
    <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
      <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardDescription className="space-y-1">
      <span className="text-2xl font-bold tracking-tight">
        R$ 1248,60
      </span>
      <p className="text-xs text-muted-foreground">
        <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês passado
      </p>
    </CardDescription>
  </Card>
  )
};