import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowLeft } from "lucide-react"

interface StudentCardDownloadProps {
  onBack: () => void
}

export function StudentCardDownload({ onBack }: StudentCardDownloadProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Download realizado com sucesso
          </CardTitle>
          <CardDescription>
            Sua carteira de estudante foi baixada com sucesso!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

