import React, { useRef } from 'react';
import { useField, useFormikContext } from 'formik';
import { Button, Field, Text } from '@fluentui/react-components';
import { Delete24Filled, Video24Regular } from '@fluentui/react-icons';

interface VideoFieldProps {
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

const VideoField = ({
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
}: VideoFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const { error, touched } = meta;
  const { value } = field;
  const { base64, url, readUrl } = value;

  const videoValue = base64 || readUrl || initialValue || null;

  const isValidVideo = (file: File) => file?.type.startsWith('video/') || false;

  const videoInput = useRef<HTMLInputElement>(null);

  const handleRemoveVideo = () => setFieldValue(name, {
    ...value,
    base64: null,
    readUrl: null,
    fileStatus: 3,
  });

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const videoFile = e.target.files?.[0];
    if (videoFile && isValidVideo(videoFile)) {
      const reader = new FileReader();
      const fileName = videoFile.name.split('.')[0].toLowerCase();
      const extension = videoFile.name.split('.')[1].toLowerCase();

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
      reader.readAsDataURL(videoFile);
    }
  };

  return (
    <Field
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      {title && <Text variant="medium">{title}</Text>}
      <div className="video-container" style={{ width, height, position: 'relative' }}>
        {videoValue ? (
          <video controls width="100%" height="100%" style={{ border: 'dashed 2px grey' }}>
            <source src={videoValue} type={videoValue?.startsWith('data:') ? 'video/mp4' : 'video/webm'} />
          </video>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'dashed 2px grey' }}>
            <Video24Regular />
            <Text>No video uploaded</Text>
          </div>
        )}
        <div className="video-link space-x-2" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          {enableRemove && videoValue && (
            <Button
              icon={<Delete24Filled />}
              appearance="primary"
              onClick={handleRemoveVideo}
            />
          )}
          <Button
            icon={<Video24Regular />}
            appearance="primary"
            onClick={() => videoInput.current?.click()}
          >
            Upload
          </Button>
        </div>
      </div>
      <input
        ref={videoInput}
        accept="video/*"
        type="file"
        style={{ display: 'none' }}
        onChange={handleVideoChange}
      />
      {mode !== 'add' && model && (
        <Text variant="medium" block>
          {displayName}
        </Text>
      )}
    </Field>
  );
};

export default VideoField;
