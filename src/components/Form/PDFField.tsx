import React, { useRef } from 'react';
import { useField, useFormikContext } from 'formik';
import { Button, Field, Text } from '@fluentui/react-components';
import { Delete24Filled, DocumentPdf24Regular } from '@fluentui/react-icons';

interface PDFFieldProps {
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

const PDFField: React.FC<PDFFieldProps> = ({
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
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const { error, touched } = meta;
  const { value } = field;
  const { base64, url, readUrl } = value;

  const pdfValue = base64 || readUrl || initialValue || null;

  const isValidPDF = (file: File) => file?.type === 'application/pdf';

  const pdfInput = useRef<HTMLInputElement>(null);

  const handleRemovePDF = () => setFieldValue(name, {
    ...value,
    base64: null,
    readUrl: null,
    fileStatus: 3,
  });

  const handlePDFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pdfFile = e.target.files?.[0];
    if (pdfFile && isValidPDF(pdfFile)) {
      const reader = new FileReader();
      const fileName = pdfFile.name.split('.')[0].toLowerCase();
      const extension = pdfFile.name.split('.')[1].toLowerCase();

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
      reader.readAsDataURL(pdfFile);
    }
  };

  return (
    <Field
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      {title && <Text variant="medium">{title}</Text>}
      <div className="pdf-container" style={{ width, height, position: 'relative' }}>
        {pdfValue ? (
          <iframe
            src={pdfValue}
            style={{ width: '100%', height: '100%', border: 'dashed 2px grey' }}
            title="PDF Preview"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'dashed 2px grey' }}>
            <DocumentPdf24Regular />
            <Text>No PDF uploaded</Text>
          </div>
        )}
        <div className="pdf-link space-x-2" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {enableRemove && pdfValue && (
            <Button
              icon={<Delete24Filled />}
              appearance="primary"
              onClick={handleRemovePDF}
            />
          )}
          <Button
            icon={<DocumentPdf24Regular />}
            appearance="primary"
            onClick={() => pdfInput.current?.click()}
          >
            Upload
          </Button>
        </div>
      </div>
      <input
        ref={pdfInput}
        accept="application/pdf"
        type="file"
        style={{ display: 'none' }}
        onChange={handlePDFChange}
      />
      {mode !== 'add' && model && (
        <Text variant="medium" block>
          {displayName}
        </Text>
      )}
    </Field>
  );
};

export default PDFField;
