import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";
import { useTranslation } from 'react-i18next';

interface DialogProps {
  title: string
  btnLabel: string
  body: ReactNode
  confirmBtn?: string
  closeBtn?: string 
  showActions?: boolean
  confirmation: () => void
}

const CustomDialog = ({title, btnLabel, body, confirmBtn = "Yes", closeBtn = "No", showActions = true, confirmation = () => {}}: DialogProps) => {
  const {t} = useTranslation()

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>{t(btnLabel)}</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{t(title)}</DialogTitle>
          <DialogContent>
            {body}
          </DialogContent>
          {showActions && <DialogActions>
            <DialogTrigger disableButtonEnhancement> 
              <Button appearance="secondary">{closeBtn}</Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement> 
              <Button appearance="primary" onClick={() => confirmation()}>{confirmBtn}</Button>
            </DialogTrigger>
          </DialogActions>}
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}

export default CustomDialog