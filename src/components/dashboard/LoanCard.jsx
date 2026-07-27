import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoanCard({ title = 'Find the right loan', description = 'See personalized options and estimated monthly payments.', ctaLabel = 'Explore loans', ctaTo = '/apply' }) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader><CardTitle>{title}</CardTitle><CardDescription className="text-primary-foreground/75">{description}</CardDescription></CardHeader>
      <CardContent><Button render={<Link to={ctaTo} />} variant="secondary">{ctaLabel}<ArrowUpRight aria-hidden="true" /></Button></CardContent>
    </Card>
  );
}
