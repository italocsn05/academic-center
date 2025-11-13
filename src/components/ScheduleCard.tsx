import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Calendar } from "lucide-react"

interface ScheduleItem {
  time: string
  subject: string
  professor: string
}

const todaySchedule: ScheduleItem[] = [
  { time: "08:00 - 09:40", subject: "Gestão de Pessoas", professor: "Prof. Silva" },
  { time: "10:00 - 11:40", subject: "Marketing", professor: "Prof. Santos" },
  { time: "14:00 - 15:40", subject: "Finanças", professor: "Prof. Oliveira" },
]

export function ScheduleCard() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Cronograma de Hoje
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-muted-foreground capitalize">{today}</p>
        </div>
        <div className="space-y-3">
          {todaySchedule.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[100px]">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{item.time}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.subject}</p>
                  <p className="text-xs text-muted-foreground">{item.professor}</p>
                </div>
              </div>
              {index < todaySchedule.length - 1 && (
                <Separator className="my-3" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

