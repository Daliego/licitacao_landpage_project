import { Link } from "./style";

interface LinkToExternalPageProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
}

export function LinkToExternalPage({
  children,
  link,
  ...props
}: LinkToExternalPageProps) {
  return (
    <Link href={link} {...props}>
      {children}
    </Link>
  );
}
