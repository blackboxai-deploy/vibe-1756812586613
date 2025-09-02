import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  age: string;
  participants: string;
  features: string[];
  color: "blue" | "green" | "orange" | "purple" | "red" | "yellow";
}

export function ProgramCard({ 
  title, 
  description, 
  image, 
  imageAlt, 
  age, 
  participants, 
  features, 
  color 
}: ProgramCardProps) {
  const colorClasses = {
    blue: {
      badge: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      border: "border-blue-200",
      icon: "text-blue-600",
    },
    green: {
      badge: "bg-green-100 text-green-800 hover:bg-green-200",
      border: "border-green-200",
      icon: "text-green-600",
    },
    orange: {
      badge: "bg-orange-100 text-orange-800 hover:bg-orange-200",
      border: "border-orange-200",
      icon: "text-orange-600",
    },
    purple: {
      badge: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      border: "border-purple-200",
      icon: "text-purple-600",
    },
    red: {
      badge: "bg-red-100 text-red-800 hover:bg-red-200",
      border: "border-red-200",
      icon: "text-red-600",
    },
    yellow: {
      badge: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      border: "border-yellow-200",
      icon: "text-yellow-600",
    },
  };

  const classes = colorClasses[color];

  return (
    <Card className={`h-full hover:shadow-xl transition-all duration-300 ${classes.border} border-2`}>
      <div className="relative">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={classes.badge}>
            {age}
          </Badge>
          <Badge className={classes.badge}>
            {participants}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 text-sm">
            Principais Atividades:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                <span className={`${classes.icon} mt-0.5`}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}