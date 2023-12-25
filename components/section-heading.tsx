type SectionHeadingProps = {
  heading: string;
};

const Sectionheading = ({ heading }: SectionHeadingProps) => {
  return (
    <h2 className="text-center text-3xl font-medium capitalize mb-8">
      {heading}
    </h2>
  );
};

export default Sectionheading;
