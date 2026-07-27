import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ActivityCard({ title = 'Recent activity', description, items = [] }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle>{description ? <CardDescription>{description}</CardDescription> : null}</CardHeader>
      <CardContent>
        {items.length ? <ul className="divide-y divide-border">{items.map((item) => <li key={item.id ?? item.title} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"><div><p className="text-sm font-medium">{item.title}</p>{item.description ? <p className="text-xs text-muted-foreground">{item.description}</p> : null}</div>{item.meta ? <span className="shrink-0 text-xs text-muted-foreground">{item.meta}</span> : null}</li>)}</ul> : <p className="text-sm text-muted-foreground">No recent activity.</p>}
      </CardContent>
    </Card>
  );
}
