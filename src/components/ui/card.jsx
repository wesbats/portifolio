import { cn } from '../../lib/utils';

function Card({ className, ...props }) {
  return (
    <div
      className={cn('rounded-2xl border border-border bg-card text-card-foreground shadow-[0_1px_0_rgb(255_255_255/0.03)_inset]', className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn('grid gap-1.5 p-5 sm:p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold tracking-[-0.03em] text-foreground', className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm leading-6 text-muted-foreground', className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-5 pt-0 sm:p-6 sm:pt-0', className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
