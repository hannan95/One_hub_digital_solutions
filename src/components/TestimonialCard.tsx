type  TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

const TestimonialCard = ({ quote, name, title, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
      <p className="text-neutral-700 italic mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-neutral-500 text-sm">{title}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
  