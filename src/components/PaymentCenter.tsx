import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle2, Clock } from "lucide-react"

interface Payment {
  id: string
  description: string
  amount: string
  dueDate: string
  status: "paid" | "pending" | "overdue"
}

export function PaymentCenter() {
  // Calcular data de vencimento (hoje + 5 dias)
  const today = new Date()
  const dueDate = new Date(today)
  dueDate.setDate(today.getDate() + 5)
  
  const formattedDueDate = dueDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  
  // Nome do mês atual
  const currentMonth = today.toLocaleDateString("pt-BR", { month: "long" })
  const capitalizedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
  
  const currentPayment: Payment = {
    id: "1",
    description: `Mensalidade ${capitalizedMonth}`,
    amount: "R$ 450,00",
    dueDate: formattedDueDate,
    status: "pending",
  }
  const getStatusBadge = (status: Payment["status"]) => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Pago
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
            <Clock className="h-3 w-3 mr-1" />
            Pendente
          </Badge>
        )
      case "overdue":
        return (
          <Badge variant="destructive">
            Vencido
          </Badge>
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Central de Pagamentos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 rounded-lg border bg-card">
            <div className="flex-1">
              <p className="font-medium text-sm">{currentPayment.description}</p>
              <div className="flex items-center gap-4 mt-1">
                <p className="text-sm text-muted-foreground">
                  Vencimento: {currentPayment.dueDate}
                </p>
                <p className="text-sm font-semibold">{currentPayment.amount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getStatusBadge(currentPayment.status)}
              {currentPayment.status !== "paid" && (
                <Button variant="outline" size="sm">
                  Pagar
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

