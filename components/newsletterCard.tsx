import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterCard() {
  const { toast } = useToast()

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3">
              <Mail />
              Stay up to date
            </div>
          </CardTitle>
          <CardDescription>
            Get notified when I publish something new, and unsubscribe at any
            time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input type="email" placeholder="example@mail.com" />
            <Button
              onClick={() => {
                toast({
                  title: "Thanks for clicking",
                  description: "There is no newsletter, yet.",
                })
              }}
            >
              Join
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
