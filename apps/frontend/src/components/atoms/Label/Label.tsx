import "./Label.css";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

const Label = ({
  children,
  required = false,
  className = "",
  ...props
}: LabelProps) => {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
      {required && <span className="label-required">*</span>}
    </label>
  );
};

export default Label;
