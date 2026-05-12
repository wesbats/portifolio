import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em]',
  {
    variants: {
      variant: {
        default: 'border-primary/25 bg-primary/10 text-[#c7cbff]',
        success: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
        muted: 'border-border bg-secondary text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
