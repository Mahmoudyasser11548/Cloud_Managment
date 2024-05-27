import React from "react";
import { useField } from "formik";
import { Dropdown, Label, Option, DropdownProps } from "@fluentui/react-components";
import { useLanguage } from "@Hooks/useLanguage";

interface SelectFieldProps extends DropdownProps {
  permission?: string;
  label?: string;
  label_key?: string;
  withFeedbackLabel?: boolean;
  customFeedbackLabel?: string;
  showCustomFeedbackLable?: boolean;
  options: any[];
  keyValue?: string;
  title?: string;
  getOptionLabel?: (option: any) => string;
  callBack?: (data: { name: string; value: any }) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  permission,
  label,
  label_key,
  withFeedbackLabel = true,
  customFeedbackLabel,
  showCustomFeedbackLable = false,
  options,
  keyValue = "id",
  title = "name",
  getOptionLabel,
  callBack = () => {},
  ...props
}) => {
  const { getTrans } = useLanguage();
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;
  const { onChange, value, ...fieldProps } = field;

  const selectedObj = options.find((a) => keyValue ? a[keyValue] === value : a === value);

  const handleGetLabel = (o: any) => {
    if (getOptionLabel) {
      return getOptionLabel(o);
    }
    if (typeof o[title] === "object") {
      return getTrans(o[title]);
    }
    return o[title];
  };

  return (
    <>
      <div style={{ marginBottom: '1rem' }} className="flex flex-col">
        {label && (
          <Label htmlFor={field.name}>
            {label}
          </Label>
        )}
        <Dropdown
          placeholder="Select an option"
          selectedKey={selectedObj ? selectedObj[keyValue] : undefined}
          clearable
          onChange={(_, option: any) => {
            helpers.setTouched(true);
            if (option) {
              helpers.setValue(option.key);
              callBack({ name: field.name, value: option.key });
              return;
            }
            callBack({ name: field.name, value: "" });
            helpers.setValue("");
          }}
          {...props}
          {...fieldProps}
        >
          {options.map((option) => (
            <Option key={option[keyValue]}>{handleGetLabel(option)}</Option>
          ))}
        </Dropdown>
        {error && touched && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
      </div>
    </>
  );
};

export default SelectField;
