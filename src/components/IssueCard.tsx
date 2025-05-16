
import { Issue } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IssueCardProps {
  issue: Issue;
}

const getSeverityColor = (severity?: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const IssueCard = ({ issue }: IssueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg mb-0">{issue.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {issue.component && (
              <Badge variant="outline" className="border-k8s-blue text-k8s-blue">
                {issue.component}
              </Badge>
            )}
            {issue.severity && (
              <Badge variant="outline" className={getSeverityColor(issue.severity)}>
                {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
              </Badge>
            )}
            {issue.category && (
              <Badge variant="outline" className="bg-k8s-light border-k8s-blue">
                {issue.category}
              </Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{issue.description}</p>
          {issue.tags && issue.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {issue.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgb(226, 232, 240)",
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="default" asChild className="w-full">
            <Link to={`/issue/${issue.id}`}>View Solution</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default IssueCard;
