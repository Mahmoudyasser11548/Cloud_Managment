import React, { useRef } from 'react';
import { useField, useFormikContext } from 'formik';
import { Button, Image, Field, Text } from '@fluentui/react-components';
import { Delete24Filled, CameraAdd24Regular } from '@fluentui/react-icons';

interface ImageFieldProps {
  name: string;
  displayName?: string;
  mode?: string;
  model?: string;
  title?: string;
  width?: number;
  height?: number;
  enableRemove?: boolean;
  initialValue?: string;
}

const ImageField = ({
  name,
  displayName,
  mode,
  model,
  title,
  width = 280,
  height = 280,
  enableRemove = true,
  initialValue = "",
  ...props
}: ImageFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const { error, touched } = meta;
  const { value } = field;
  const { base64, url, readUrl } = value;

  const imageValue = base64 || readUrl || initialValue;

  const isValidImage = (file: File) => file?.type?.match('image.*') || false;

  const logo = useRef<HTMLInputElement>(null);

  const handleRemoveImage = () => setFieldValue(name, {
    ...value,
    base64: null,
    readUrl: null,
    fileStatus: 3,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const imgFile = e.target.files?.[0];
    if (imgFile && isValidImage(imgFile)) {
      const reader = new FileReader();
      const fileName = imgFile.name.split('.')[0].toLowerCase();
      const extension = imgFile.name.split('.')[1].toLowerCase();

      reader.onloadend = () => {
        setFieldValue(name, {
          ...value,
          base64: reader.result,
          readUrl: null,
          fileStatus: url ? 2 : 1,
          name: fileName,
          extension,
        });
      };
      reader.readAsDataURL(imgFile);
    }
  };

  return (
    <Field
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      {title && <Text variant="medium">{title}</Text>}
      <div className="image-container" style={{ width, height, position: 'relative' }}>
        {imageValue ? (
          <Image
            src={imageValue}
            height={height}
            width={width}
            style={{ border: mode === 'add' ? 'dashed 2px grey' : '' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'dashed 2px grey' }}>
            <CameraAdd24Regular />
            <Text>No Picture uploaded</Text>
          </div>
        )}
        <div className="image-link space-x-2" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {enableRemove && imageValue && (
            <Button
              icon={<Delete24Filled />}
              appearance="primary"
              onClick={handleRemoveImage}
            />
          )}
          <Button
            icon={<CameraAdd24Regular />}
            appearance="primary"
            onClick={() => logo.current?.click()}
          >
            Upload
          </Button>
        </div>
      </div>
      <input
        ref={logo}
        accept="image/*"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {mode !== 'add' && model && (
        <Text variant="medium" block>
          {displayName}
        </Text>
      )}
    </Field>
  );
};

export default ImageField;
