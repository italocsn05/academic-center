import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar } from "lucide-react"

interface CourseCardProps {
  course: string
  startDate: string
  endDate: string
}

export function CourseCard({ course, startDate, endDate }: CourseCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Curso Inscrito
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Badge variant="default" className="text-base px-3 py-1">
            {course}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Início: {formatDate(startDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Término: {formatDate(endDate)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

