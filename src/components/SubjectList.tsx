import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GraduationCap } from "lucide-react"
import { getSubjectsByCourse } from "@/data/subjects"

interface SubjectListProps {
  course: string
}

export function SubjectList({ course }: SubjectListProps) {
  const subjects = getSubjectsByCourse(course)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Matérias do Curso
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <div className="space-y-2 pr-4">
            {subjects.map((subject, index) => (
              <Badge
                key={index}
                variant="outline"
                className="w-full justify-start text-sm py-2 px-3"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

