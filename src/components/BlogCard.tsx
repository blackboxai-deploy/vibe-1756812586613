import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  image, 
  imageAlt, 
  date, 
  category, 
  author, 
  readTime 
}: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">{author.charAt(0)}</span>
            </div>
            <span className="text-sm text-gray-600">Por {author}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
          >
            Ler mais →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}