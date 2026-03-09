import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  badge: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  buttonLabel?: string;
}

export function FeatureCard({
  title,
  description,
  badge,
  badgeVariant = "default",
  buttonLabel = "Learn More",
}: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <Button className="w-full">{buttonLabel}</Button>
      </CardFooter>
    </Card>
  );
}
