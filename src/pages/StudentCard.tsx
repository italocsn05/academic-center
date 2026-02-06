import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, GraduationCap, Calendar, User, Hash, CreditCard, FileText, MapPin } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface StudentCardProps {
  userData: {
    name: string
    course: string
    startDate: string
    endDate: string
    birthDate: string
    identification: string
    cpf?: string
    rg?: string
    address?: string
  }
  onBack: () => void
  onDownload: () => void
}

function formatCpfDisplay(cpf: string) {
  const digits = cpf.replace(/\D/g, "")
  if (digits.length !== 11) return cpf || "Não informado"
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
}

export function StudentCard({ userData, onBack, onDownload }: StudentCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Botão Voltar */}
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        {/* Carteirinha */}
        <Card className="border-2 overflow-hidden">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl shrink-0">
                  {getInitials(userData.name)}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold truncate">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">Estudante</p>
                </div>
              </div>
              <GraduationCap className="h-8 w-8 text-primary shrink-0" />
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Nome Completo</p>
                  <p className="font-medium">{userData.name}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Curso</p>
                  <p className="font-medium">{userData.course}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Data de Nascimento</p>
                  <p className="font-medium">{formatDate(userData.birthDate)}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Identificação</p>
                  <p className="font-medium font-mono">{userData.identification}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Período</p>
                  <p className="font-medium">
                    {formatDate(userData.startDate)} - {formatDate(userData.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CPF, RG, Endereço */}
        <div className="space-y-3 rounded-lg border bg-card p-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">CPF</p>
              <p className="font-medium font-mono">{formatCpfDisplay(userData.cpf ?? "")}</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">RG</p>
              <p className="font-medium">{userData.rg?.trim() || "Não informado"}</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">Endereço</p>
              <p className="font-medium">{userData.address?.trim() || "Não informado"}</p>
            </div>
          </div>
        </div>

        {/* Botão Download */}
        <Button onClick={onDownload} className="w-full" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Baixar Carteirinha
        </Button>
      </div>
    </div>
  )
}

