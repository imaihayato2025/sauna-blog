type SectionTitleProps = {
  title: string;
};
export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="py-10 text-center text-2xl font-bold">{title}</h2>;
}
